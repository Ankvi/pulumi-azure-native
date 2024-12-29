import { cp } from "node:fs/promises";
import log from "loglevel";
import { config } from "../../config";
import { MODULE_PREFIX } from "../../constants";
import type { PackageJson } from "./types";

type WriteOptions = {
    subModule: IModule;
    withCoreDeps?: boolean;
};

export interface IModule {
    name: string;
    outputPath: string;
}

class TemplateLoader {
    private readmeTemplate?: string;

    private getPackageJson(name: string, withCoreDeps = false): string {
        const template: PackageJson = {
            name: `${MODULE_PREFIX}${name}`,
            version: config.getOutputVersion(),
            description: `Pulumi Azure Native package for ${name}`,
            keywords: ["pulumi", "azure", "azure-native", "category/cloud", "kind/native"],
            homepage: "https://pulumi.com",
            repository: {
                url: "git+https://github.com/Ankvi/pulumi-azure-native.git",
                type: "git",
            },
            dependencies: {
                "@pulumi/pulumi": "^3.142.0",
            },
            publishConfig: {
                access: "public",
            },
            devDependencies: {
                typescript: "^5.0.0",
                "@types/node": "^20.0.0",
            },
            scripts: {
                build: "tsc",
                lint: "tsc --noEmit",
                prepublishOnly: "./prepublish.sh",
            },
        };

        if (name === "core") {
            template.scripts.install = `node scripts/install-pulumi-plugin.js resource azure-native ${config.getAzureNativeVersion()}`;
        }

        if (withCoreDeps) {
            template.dependencies[`${MODULE_PREFIX}core`] = "workspace:*"; //version;
        }

        return JSON.stringify(template, null, 4);
    }

    private async getReadme(name: string): Promise<string> {
        if (!this.readmeTemplate) {
            this.readmeTemplate = await Bun.file(`${import.meta.dir}/README.template.md`).text();
        }

        return this.readmeTemplate.replace("${NAME}", name);
    }

    private getTsConfig(): string {
        return JSON.stringify(
            {
                extends: "../../tsconfig",
                include: ["**/*.ts"],
                exclude: ["node_modules", "**/*.d.ts"],
            },
            null,
            4,
        );
    }

    public async writeTemplateToFolder({ subModule, withCoreDeps }: WriteOptions): Promise<void> {
        log.debug(`${subModule.name}: Writing template files`);

        const folder = subModule.outputPath;

        const packageJson = this.getPackageJson(subModule.name, withCoreDeps);
        const readme = await this.getReadme(subModule.name);

        const tasks = [
            Bun.write(`${folder}/package.json`, packageJson),
            Bun.write(`${folder}/README.md`, readme),
            Bun.write(`${folder}/tsconfig.json`, this.getTsConfig()),
            cp(`${import.meta.dir}/.npmignore`, `${folder}/.npmignore`),
            cp(`${import.meta.dir}/prepublish.sh`, `${folder}/prepublish.sh`),
        ];

        await Promise.all(tasks);

        log.debug(`${subModule.name}: Writing template files -> SUCCESS`);
    }
}

export const loader = new TemplateLoader();
