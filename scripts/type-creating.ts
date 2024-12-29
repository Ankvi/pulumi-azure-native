import { createReadStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import log from "loglevel";
import { config } from "./config";
import { AZURE_PATH, PULUMI_IMPORT_STATEMENT } from "./constants";
import { getFolderNames } from "./folders";

type SubModuleTypeInfo = {
    lines: string[];
};

type TypesInfo = SubModuleTypeInfo & {
    subVersions: Map<string, SubModuleTypeInfo>;
};

type SplitTypesResult = Map<string, TypesInfo>;

const moduleTypeStart = "export namespace ";
const moduleTypeEnd = "}";

const subModuleTypeStart = "    export namespace v";
const subModuleTypeEnd = "    }";

const splitFiles = new Map<string, Promise<SplitTypesResult>>();

function splitTypeFile(filePath: string): Promise<SplitTypesResult> {
    const cache = splitFiles.get(filePath);
    if (cache) {
        return cache;
    }

    const inputs = filePath.endsWith("input.ts");

    const job = new Promise<SplitTypesResult>((resolve) => {
        const file = createInterface({
            input: createReadStream(filePath),
        });

        let currentModuleName = "";
        let currentModule: TypesInfo | undefined;
        let currentSubModuleName = "";
        let currentSubModule: SubModuleTypeInfo | undefined;

        const moduleTypes: SplitTypesResult = new Map<string, TypesInfo>();

        file.on("line", async (line) => {
            if (line.startsWith(moduleTypeStart)) {
                currentModuleName = line.substring(moduleTypeStart.length, line.indexOf("{") - 1);
                if (!moduleTypes.has(currentModuleName)) {
                    currentModule = {
                        lines: [PULUMI_IMPORT_STATEMENT],
                        subVersions: new Map(),
                    };
                }

                return;
            }

            if (!currentModule) {
                return;
            }

            if (line === moduleTypeEnd) {
                moduleTypes.set(currentModuleName, currentModule);
                currentModule = undefined;
                currentSubModule = undefined;
                return;
            }

            if (line === subModuleTypeEnd && currentSubModule) {
                currentModule.subVersions.set(currentSubModuleName, currentSubModule);
                currentSubModule = undefined;
                return;
            }

            if (line.startsWith(subModuleTypeStart)) {
                currentSubModuleName = line.substring(
                    subModuleTypeStart.length - 1,
                    line.indexOf("{") - 1,
                );
                if (!currentModule.subVersions.has(currentSubModuleName)) {
                    currentSubModule = {
                        lines: [PULUMI_IMPORT_STATEMENT],
                    };
                }

                return;
            }

            if (currentSubModule) {
                const formatted = line
                    .replace("    ", "") // Remove first tab to compensate for missing namespace
                    .replaceAll(
                        `${
                            inputs ? "inputs" : "outputs"
                        }.${currentModuleName}.${currentSubModuleName}.`,
                        "",
                    )
                    .replaceAll(`enums.${currentModuleName}.${currentSubModuleName}.`, "enums.");

                currentSubModule.lines.push(formatted);

                return;
            }

            const formatted = line
                .replace("    ", "") // Remove first tab to compensate for missing namespace
                .replaceAll(`${inputs ? "inputs" : "outputs"}.${currentModuleName}.`, "")
                .replaceAll(`enums.${currentModuleName}.`, "enums.");

            currentModule.lines.push(formatted);
        });

        file.on("close", () => {
            resolve(moduleTypes);
        });
    });

    splitFiles.set(filePath, job);
    return job;
}

type ModuleTypeFiles = {
    enumSourcePath: string;
    outputTypesPath: string;
    inputs?: string[];
    outputs?: string[];
};

async function writeModuleTypeFiles(info: ModuleTypeFiles) {
    try {
        await mkdir(info.outputTypesPath, { recursive: true });
    } catch (e) {
        // Folder already exists
    }

    const indexContent: string[] = [];

    try {
        const content = await Bun.file(info.enumSourcePath).text();
        const startOfTypeExports = content.indexOf("export const");
        if (startOfTypeExports < 0) {
            throw new Error(
                `This version of the module ${info.enumSourcePath} does not export any types. Skipping`,
            );
        }
        const formatted = content.substring(content.indexOf("export const "));
        await Bun.write(`${info.outputTypesPath}/enums.ts`, formatted);

        indexContent.push('export * as enums from "./enums";');
        info.outputs?.unshift('import * as enums from "./enums";');
        info.inputs?.unshift('import * as enums from "./enums";');
    } catch (error) {
        // No enums
        log.debug(`${info.enumSourcePath} does not exist`);
    }

    const jobs: Promise<unknown>[] = [];

    if (info.inputs) {
        const inputFileContent = info.inputs.join("\n");
        indexContent.push('export * as inputs from "./input";');
        jobs.push(Bun.write(`${info.outputTypesPath}/input.ts`, inputFileContent));
    }

    if (info.outputs) {
        const outputFileContent = info.outputs.join("\n");
        indexContent.push('export * as outputs from "./output";');
        jobs.push(Bun.write(`${info.outputTypesPath}/output.ts`, outputFileContent));
    }

    jobs.push(Bun.write(`${info.outputTypesPath}/index.ts`, indexContent.join("\n")));

    await Promise.all(jobs);
}

type ModuleTypes = {
    inputs: SplitTypesResult;
    outputs: SplitTypesResult;
    keys: string[];
};

async function getTypeFiles(): Promise<ModuleTypes> {
    const inputsFile = `${AZURE_PATH}/types/input.ts`;
    const outputsFile = `${AZURE_PATH}/types/output.ts`;

    log.info("Splitting input/output type files");
    const inputs = await splitTypeFile(inputsFile);
    const outputs = await splitTypeFile(outputsFile);

    const enumFolders = await getFolderNames(`${AZURE_PATH}/types/enums`);

    const keys = [...new Set<string>([...inputs.keys(), ...outputs.keys(), ...enumFolders])];

    return {
        inputs,
        outputs,
        keys,
    };
}

export async function createModuleTypeFiles(): Promise<void> {
    const { inputs, outputs, keys } = await getTypeFiles();

    log.info("Creating new types folders");

    const writeTasks = keys.map<Promise<void>>(async (key) => {
        const input = inputs.get(key);
        const output = outputs.get(key);

        const tasks: Promise<void>[] = [
            writeModuleTypeFiles({
                enumSourcePath: `${AZURE_PATH}/types/enums/${key}/index.ts`,
                outputTypesPath: `${config.getOutputPath()}/${key}/types`,
                inputs: input?.lines,
                outputs: output?.lines,
            }),
        ];

        await Promise.all(tasks);
    });

    await Promise.all(writeTasks);
}

export async function createSubModuleTypeFiles(): Promise<void> {
    const { inputs, outputs, keys } = await getTypeFiles();

    const writeTasks = keys.map<Promise<void>>(async (key) => {
        const input = inputs.get(key);
        const output = outputs.get(key);

        const subVersionEnumFolders = await getFolderNames(`${AZURE_PATH}/types/enums/${key}`);
        const subVersions = new Set<string>([
            ...(input?.subVersions.keys() ?? []),
            ...(output?.subVersions.keys() ?? []),
            ...subVersionEnumFolders,
        ]);

        await Promise.all(
            Object.keys(subVersions).map((subVersion) =>
                writeModuleTypeFiles({
                    enumSourcePath: `${AZURE_PATH}/types/enums/${key}/${subVersion}/index.ts`,
                    outputTypesPath: `${config.getOutputPath()}/${key}/${subVersion}/types`,
                    inputs: input?.subVersions?.get(subVersion)?.lines,
                    outputs: output?.subVersions?.get(subVersion)?.lines,
                }),
            ),
        );
    });

    await Promise.all(writeTasks);
}
