import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { config } from "../config";
import { AZURE_PATH } from "../constants";
import { Module } from "./module";
import { loader } from "./templates";

export async function createCorePackage() {
    const coreModule = new Module("core");
    await coreModule.createFolder();

    await loader.writeTemplateToFolder({
        subModule: coreModule,
    });

    const scriptFolder = `${coreModule.outputPath}/scripts`;
    try {
        await mkdir(scriptFolder, { recursive: true });
    } catch (e) {
        // Already exists
    }
    await cp(
        `${import.meta.dir}/templates/install-pulumi-plugin.js`,
        `${scriptFolder}/install-pulumi-plugin.js`,
    );

    const indexFile = await Bun.file(`${AZURE_PATH}/index.ts`).text();

    // Filter out import/export statements for submodules
    const exports = indexFile.substring(
        indexFile.indexOf("// Export sub-modules"),
        indexFile.indexOf("pulumi.runtime.registerResourcePackage"),
    );
    const formattedIndexFile = indexFile.replace(exports, "");

    // This one is really ugly, but it allows me to patch for undiscovered bugs while not
    // messing with what version the runtime uses.
    // TODO: Remove this once things are stable.
    const utilities = await Bun.file(`${AZURE_PATH}/utilities.ts`).text();
    const formattedUtilities = utilities.replaceAll(
        "require('./package.json').version;",
        `"${config.getAzureNativeVersion()}";`,
    );

    await Promise.all([
        Bun.write(`${coreModule.outputPath}/index.ts`, formattedIndexFile),
        Bun.write(`${coreModule.outputPath}/utilities.ts`, formattedUtilities),
        cp(`${AZURE_PATH}/provider.ts`, `${coreModule.outputPath}/provider.ts`),
    ]);
}

const ignoredFolders = ["scripts", "types"];

export async function createModules(submodules = false) {
    const modules = await getAzureModules();

    const buildTasks = modules.map(async (name) => {
        const subModule = new Module(name, submodules);
        await subModule.copyFiles();
        await loader.writeTemplateToFolder({
            subModule,
            withCoreDeps: true,
        });
    });

    await Promise.all(buildTasks);
}

async function getAzureModules(): Promise<string[]> {
    const dirents = await readdir(AZURE_PATH, {
        withFileTypes: true,
    });

    return dirents
        .filter((x) => x.isDirectory() && !ignoredFolders.includes(x.name))
        .map((x) => x.name);
}

export async function getOutputModules(): Promise<Module[]> {
    const modules = await getAzureModules();
    return ["core", ...modules].map((x) => new Module(x));
}
