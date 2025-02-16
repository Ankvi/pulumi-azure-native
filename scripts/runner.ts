import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { exit } from "node:process";
import type { ShellError } from "bun";
import log from "loglevel";
import { writeChangelogToOutput } from "./changelog";
import { config } from "./config";
import { createCorePackage, createModules } from "./modules";
import { createModuleTypeFiles, createSubModuleTypeFiles } from "./type-creating";

export type BuildOptions = {
    commit?: boolean;
    submodules?: boolean;
};

const outputBasePath = resolve(import.meta.dir, "..");
const $ = Bun.$.cwd(outputBasePath).throws(true);

export async function build(options: BuildOptions) {
    await prepareOutputPath();

    log.info("Creating type files");
    await createModuleTypeFiles();

    if (options.submodules) {
        log.info("Creating submodule files");
        await createSubModuleTypeFiles();
    }

    log.info("Creating core module");
    await createCorePackage();

    log.info("Creating other modules");
    await createModules(options.submodules);

    await writeChangelogToOutput();

    if (options.commit) {
        await commitOutput();
    }
}

async function prepareOutputPath() {
    await $`git pull`;

    log.info("Removing old output");
    await rm(config.outputPath, { recursive: true });
}

export async function commitOutput() {
    const corePackage = await import("../packages/core/package.json");
    const { version } = corePackage;

    log.info("Committing result to GitHub");
    log.info("Current working directory:", outputBasePath);

    try {
        const tag = `v${version}`;
        const message = `Bumped to ${tag}`;
        const branch = `release/${tag}`;
        await $`pnpm install --no-frozen-lockfile`;
        await $`make lint`;
        await $`git checkout -b ${branch}`;
        await $`git add -A`;
        await $`git commit -m "${message}"`;
        await $`git push -u origin ${branch}`;
        await $`gh pr create --title "${tag}" --body "${message}"`;
        // await this.$`git tag ${tag}`;
        // await this.$`git push --tags`;
    } catch (err) {
        log.error(`Error while committing: ${(err as Error).message}`);
        const stderr = (err as ShellError).stderr;
        if (stderr) {
            log.error(stderr);
        }
        exit(1);
    }
}
