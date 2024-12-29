import type { Dirent } from "node:fs";
import { mkdir, readdir } from "node:fs/promises";
import { config } from "../config";
import { AZURE_PATH, MODULE_PREFIX } from "../constants";
import type { IModule } from "./templates";

// I hate these.
// Matches the following:
// // Export sub-modules:
// ANYTHING
// export {
//     v20200101,
//     v20220101preview,
//     v20230101beta,
// };
const indexFileSubmoduleExportRegex =
    /\/\/\sExport\ssub-modules:(.*\n)+export\s{\n(\s{4}v\d{8}[a-z]*,\n)+};/;

const commonModuleImports = [
    'import * as pulumi from "@pulumi/pulumi";',
    `import * as utilities from "${MODULE_PREFIX}core/utilities";`,
];

export class Module implements IModule {
    private path: string;
    public readonly outputPath: string;
    public readonly fullName: `${typeof MODULE_PREFIX}${string}`;

    constructor(
        public readonly name: string,
        private readonly includeSubmodules: boolean = false,
    ) {
        this.path = `${AZURE_PATH}/${this.name}`;
        this.outputPath = `${config.getOutputPath()}/${this.name}`;
        this.fullName = `${MODULE_PREFIX}${this.name}`;
    }

    public async createFolder(): Promise<void> {
        try {
            await mkdir(this.outputPath, { recursive: true });
        } catch (error) {
            // Directory already exists
        }
    }

    public async copyFiles(): Promise<void> {
        await this.createFolder();

        const files = await readdir(this.path, {
            withFileTypes: true,
        });

        for (const file of files) {
            if (file.isFile()) {
                await this.writeModuleFile(file);
            } else if (file.isDirectory()) {
                if (!this.includeSubmodules) {
                    continue;
                }
                await this.writeSubModuleFiles(file);
            } else {
                throw new Error(`Unknown file type: ${file.name}`);
            }
        }
    }

    private async writeModuleFile(file: Dirent) {
        const content = await Bun.file(`${this.path}/${file.name}`).text();

        let newContent = this.replaceCommonModuleFileContent(content);

        if (file.name === "index.ts") {
            newContent = this.replaceIndexContent(newContent);
        }

        const imports = [...commonModuleImports];

        if (
            newContent.includes("types.inputs.") ||
            newContent.includes("types.outputs.") ||
            newContent.includes("types.enums.")
        ) {
            imports.push('import * as types from "./types";');
        }

        newContent = newContent.trim();

        await Bun.write(`${this.outputPath}/${file.name}`, `${imports.join("\n")}\n${newContent}`);
    }

    private async writeSubModuleFile(subFolder: Dirent, file: Dirent) {
        const content = await Bun.file(`${this.path}/${subFolder.name}/${file.name}`).text();

        let newContent = this.replaceCommonModuleFileContent(content, subFolder.name);

        if (file.name === "index.ts") {
            newContent = newContent.replace(
                `export * from "../../types/enums/${this.name}/${subFolder.name}";`,
                `export * from "./types/enums";`,
            );
        }

        const imports = [...commonModuleImports];

        if (
            newContent.includes("types.inputs.") ||
            newContent.includes("types.outputs.") ||
            newContent.includes("types.enums.")
        ) {
            imports.push('import * as types from "./types";');
        }

        newContent = newContent.trim();

        await Bun.write(
            `${this.outputPath}/${subFolder.name}/${file.name}`,
            `${imports.join("\n")}\n${newContent}`,
        );
    }

    private async writeSubModuleFiles(subFolder: Dirent) {
        const subVersionFiles = await readdir(`${this.path}/${subFolder.name}`, {
            withFileTypes: true,
        });

        try {
            await mkdir(`${this.outputPath}/${subFolder.name}`);
        } catch (error) {
            // Directory already exists
        }

        await Promise.all(
            subVersionFiles.map(async (file) => {
                await this.writeSubModuleFile(subFolder, file);
            }),
        );
    }
    private replaceCommonModuleFileContent(content: string, subModuleName?: string): string {
        const toBeReplaced = subModuleName ? `${this.name}.${subModuleName}` : this.name;
        return (
            content
                // Remove all existing import statements. We'll replace those
                .replaceAll(/import\s\*\sas\s\w+\sfrom\s"[a-z@./-]+";/g, "")

                // Remove generation warnings from Pulumi
                .replaceAll(/\/\/\s\*\*\*\s.*/g, "")

                // Wrap all references to types in types variable
                .replaceAll(`enums.${toBeReplaced}.`, "types.enums.")
                .replaceAll(`inputs.${toBeReplaced}.`, "types.inputs.")
                .replaceAll(`outputs.${toBeReplaced}.`, "types.outputs.")
                .trimStart()
        );
    }

    private replaceIndexContent(content: string): string {
        const newContent = content.replace(
            `export * from "../types/enums/${this.name}";`,
            'export * from "./types/enums";',
        );

        if (this.includeSubmodules) {
            return newContent;
        }

        const hasSubmodules = indexFileSubmoduleExportRegex.test(newContent);
        if (!hasSubmodules) {
            return newContent;
        }

        return newContent.replace(indexFileSubmoduleExportRegex, "");
        // const startOfSubmoduleExport = newContent.indexOf("// Export sub-modules");
        // if (startOfSubmoduleExport < 0) {
        //     return newContent;
        // }
        //
        // const startOfModuleDeclaration = newContent.indexOf("const _module");
        // const endOfSubmoduleExport =
        //     startOfModuleDeclaration > -1 ? startOfModuleDeclaration - 1 : newContent.length - 1;
        //
        // const exports = newContent.substring(startOfSubmoduleExport, endOfSubmoduleExport);
        // newContent = newContent.replace(exports, "");

        // return newContent;
    }
}
