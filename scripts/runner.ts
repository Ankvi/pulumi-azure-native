import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { exit } from "node:process";
import type { Shell } from "bun";
import { writeChangelogToOutput } from "./changelog";
import { config } from "./config";
import { createCorePackage, createModules } from "./modules";
import { createModuleTypeFiles, createSubModuleTypeFiles } from "./type-creating";
import log from "loglevel";

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
        const version = config.getOutputVersion();

        log.info("Committing result to GitHub");
        log.info("Current working directory:", this.outputBasePath);

        try {
            const tag = `v${version}`;
            await this.$`pnpm install`;
            await this.$`make lint`;
            await this.$`git add -A`;
            await this.$`git commit -m "Bumped to ${tag}"`;
            await this.$`git push`;
            await this.$`git tag ${tag}`;
            await this.$`git push --tags`;
        } catch (err) {
            log.error(err);
            exit(1);
        }
    }
}
