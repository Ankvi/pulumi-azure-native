import log from "loglevel";
import { getLatestRelease } from "./github";
import { resolve } from "node:path";

const versionCacheFilePath = `${import.meta.dir}/pulumi-azure-native-version.cache`;

export async function getCachedPulumiAzureNativeVersion() {
    const cache = await Bun.file(versionCacheFilePath).text();

    const cachedVersion = cache.trim();

    return cachedVersion;
}

export interface ConfigOptions {
    azureNativeVersion?: string;
    outputVersion?: string;
    cache: boolean;
}

class Config {
    private azureNativeVersion?: string;
    private outputVersion?: string;
    public readonly outputPath: string;
    private useCache = true;

    constructor() {
        this.outputPath = resolve(import.meta.dir, "..", "packages");
    }

    public async initialize(options: ConfigOptions) {
        log.debug("Initializing configuration", options);
        const { outputVersion, azureNativeVersion, cache } = options;
        this.useCache = cache;

        await config.setAzureNativeVersion(azureNativeVersion);

        config.setOutputVersion(outputVersion);
    }

    private async setAzureNativeVersion(version?: string): Promise<void> {
        if (version) {
            if (!version.match(/v\d.\d.\d/)) {
                throw new Error(
                    "Invalid @pulumi/azure-native version. Needs to be in the format 'vX.X.X'",
                );
            }
            this.azureNativeVersion = version;
            return;
        }

        try {
            if (this.useCache) {
                const cachedVersion = await getCachedPulumiAzureNativeVersion();

                log.debug(`Found cached @pulumi/pulumi-azure-native version: '${cachedVersion}'`);

                this.azureNativeVersion = cachedVersion;
                return;
            }
        } catch (error) {
            log.debug("Retrieving @pulumi/pulumi-azure-native version from GitHub");
        }

        const release = await getLatestRelease();
        if (!release?.name) {
            throw new Error("No releases found");
        }

        const releaseVersion = release.name;

        log.info(`Found @pulumi/azure-native version: '${releaseVersion}'`);

        await Bun.write(versionCacheFilePath, releaseVersion);

        this.azureNativeVersion = releaseVersion;
    }

    public getAzureNativeVersion(): string {
        if (!this.azureNativeVersion) {
            throw new Error("Config has not been initialized");
        }

        return this.azureNativeVersion;
    }

    private setOutputVersion(version?: string): void {
        if (version) {
            if (!version.match(/\d.\d.\d/)) {
                throw new Error("Invalid output version. Needs to be in the format 'X.X.X'");
            }
            this.outputVersion = version;
            return;
        }

        const azureNativeVersion = this.getAzureNativeVersion();
        this.outputVersion = azureNativeVersion.startsWith("v")
            ? azureNativeVersion.substring(1)
            : azureNativeVersion;
    }

    public getOutputVersion(): string {
        if (!this.outputVersion) {
            throw new Error("Config has not been initialized");
        }
        return this.outputVersion;
    }
}

export const config = new Config();
