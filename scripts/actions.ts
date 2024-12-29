import { exit } from "node:process";
import { type ConfigOptions, config } from "./config";
import { getLatestBuildVersion, getLatestRelease } from "./github";
import { getOutputModules } from "./modules";
import { Runner } from "./runner";

export type ActionOptions = {
    verbose?: boolean;
};

type BuildOptions = ActionOptions &
    ConfigOptions & {
        commit?: boolean;
        submodules?: boolean;
    };

export async function build(options: BuildOptions) {
    await config.initialize(options);

    const runner = new Runner();
    await runner.build(options);
}

export type PublishOptions = {
    dryRun?: boolean;
    logErrors?: boolean;
};

export async function listModuleNames(options: ActionOptions) {
    const modules = await getOutputModules();
    console.log("Found modules:");
    console.log("==========================================");
    for (const m of modules) {
        console.log(m.fullName);
    }
}

export async function checkVersion() {
    const latestBuild = await getLatestBuildVersion();
    const latestRelease = await getLatestRelease();
    const latestVersion = latestRelease?.name?.substring(1) ?? "";
    if (latestVersion <= latestBuild) {
        console.log("No new version found");
        exit(-1);
    }
    console.log(`A new version exists: ${latestVersion}`);
}
