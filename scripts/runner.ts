import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { exit } from "node:process";
import type { Shell, ShellError } from "bun";
import log from "loglevel";
import { writeChangelogToOutput } from "./changelog";
import { config } from "./config";
import { createCorePackage, createModules } from "./modules";
import { createModuleTypeFiles, createSubModuleTypeFiles } from "./type-creating";

export type BuildOptions = {
    commit?: boolean;
    submodules?: boolean;
};

export class Runner {
    private outputBasePath: string;
    private $: Shell;

    constructor() {
        this.outputBasePath = resolve(import.meta.dir, "..");
        this.$ = Bun.$.cwd(this.outputBasePath).throws(true);
    }

    public async build(options: BuildOptions) {
        await this.prepareOutputPath();

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
            await this.commitOutput();
        }
    }

    private async prepareOutputPath() {
        await this.$`git pull`;

        log.info("Removing old output");
        await rm(config.outputPath, { recursive: true });
    }

    public async commitOutput() {
        const corePackage = await import("../packages/core/package.json");
        const { version } = corePackage;

        log.info("Committing result to GitHub");
        log.info("Current working directory:", this.outputBasePath);

        try {
            const tag = `v${version}`;
            const message = `Bumped to ${tag}`;
            const branch = `release/${tag}`;
            await this.$`pnpm install`;
            await this.$`make lint`;
            await this.$`git checkout -b ${branch}`;
            await this.$`git add -A`;
            await this.$`git commit -m "${message}"`;
            await this.$`git push -u origin ${branch}`;
            await this.$`gh pr create --title "${tag}" --body "${message}"`;
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
}
