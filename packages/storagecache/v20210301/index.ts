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

export { GetStorageTargetArgs, GetStorageTargetResult, GetStorageTargetOutputArgs } from "./getStorageTarget";
export const getStorageTarget: typeof import("./getStorageTarget").getStorageTarget = null as any;
export const getStorageTargetOutput: typeof import("./getStorageTarget").getStorageTargetOutput = null as any;
utilities.lazyLoad(exports, ["getStorageTarget","getStorageTargetOutput"], () => require("./getStorageTarget"));

export { StorageTargetArgs } from "./storageTarget";
export type StorageTarget = import("./storageTarget").StorageTarget;
export const StorageTarget: typeof import("./storageTarget").StorageTarget = null as any;
utilities.lazyLoad(exports, ["StorageTarget"], () => require("./storageTarget"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storagecache/v20210301:Cache":
                return new Cache(name, <any>undefined, { urn })
            case "azure-native:storagecache/v20210301:StorageTarget":
                return new StorageTarget(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storagecache/v20210301", _module)