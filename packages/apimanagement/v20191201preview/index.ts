import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CacheArgs } from "./cache";
export type Cache = import("./cache").Cache;
export const Cache: typeof import("./cache").Cache = null as any;
utilities.lazyLoad(exports, ["Cache"], () => require("./cache"));

export { GetCacheArgs, GetCacheResult, GetCacheOutputArgs } from "./getCache";
export const getCache: typeof import("./getCache").getCache = null as any;
export const getCacheOutput: typeof import("./getCache").getCacheOutput = null as any;
utilities.lazyLoad(exports, ["getCache","getCacheOutput"], () => require("./getCache"));

export { GetLoggerArgs, GetLoggerResult, GetLoggerOutputArgs } from "./getLogger";
export const getLogger: typeof import("./getLogger").getLogger = null as any;
export const getLoggerOutput: typeof import("./getLogger").getLoggerOutput = null as any;
utilities.lazyLoad(exports, ["getLogger","getLoggerOutput"], () => require("./getLogger"));

export { LoggerArgs } from "./logger";
export type Logger = import("./logger").Logger;
export const Logger: typeof import("./logger").Logger = null as any;
utilities.lazyLoad(exports, ["Logger"], () => require("./logger"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apimanagement/v20191201preview:Cache":
                return new Cache(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20191201preview:Logger":
                return new Logger(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement/v20191201preview", _module)
