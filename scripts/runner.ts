import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { exit } from "node:process";
import type { Shell } from "bun";
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

        console.log("Creating type files");
        await createModuleTypeFiles();

        if (options.submodules) {
            console.log("Creating submodule files");
            await createSubModuleTypeFiles();
        }

        console.log("Creating core module");
        await createCorePackage();

        console.log("Creating other modules");
        await createModules(options.submodules);

        await writeChangelogToOutput();

        if (options.commit) {
            await this.commitOutput();
        }
    }

    private async prepareOutputPath() {
        await this.$`git pull`;

        console.log("Removing old output");
        await rm(config.getOutputPath(), { recursive: true });
    }

    private async commitOutput() {
        const version = config.getOutputVersion();

        console.log("Committing result to GitHub");
        console.log("Current working directory:", this.outputBasePath);

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
            console.error(err);
            exit(1);
        }
    }
}
