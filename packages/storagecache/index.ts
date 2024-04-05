import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AmlFilesystemArgs } from "./amlFilesystem";
export type AmlFilesystem = import("./amlFilesystem").AmlFilesystem;
export const AmlFilesystem: typeof import("./amlFilesystem").AmlFilesystem = null as any;
utilities.lazyLoad(exports, ["AmlFilesystem"], () => require("./amlFilesystem"));

export { CacheArgs } from "./cache";
export type Cache = import("./cache").Cache;
export const Cache: typeof import("./cache").Cache = null as any;
utilities.lazyLoad(exports, ["Cache"], () => require("./cache"));

export { GetAmlFilesystemArgs, GetAmlFilesystemResult, GetAmlFilesystemOutputArgs } from "./getAmlFilesystem";
export const getAmlFilesystem: typeof import("./getAmlFilesystem").getAmlFilesystem = null as any;
export const getAmlFilesystemOutput: typeof import("./getAmlFilesystem").getAmlFilesystemOutput = null as any;
utilities.lazyLoad(exports, ["getAmlFilesystem","getAmlFilesystemOutput"], () => require("./getAmlFilesystem"));

export { GetCacheArgs, GetCacheResult, GetCacheOutputArgs } from "./getCache";
export const getCache: typeof import("./getCache").getCache = null as any;
export const getCacheOutput: typeof import("./getCache").getCacheOutput = null as any;
utilities.lazyLoad(exports, ["getCache","getCacheOutput"], () => require("./getCache"));

export { GetRequiredAmlFSSubnetsSizeArgs, GetRequiredAmlFSSubnetsSizeResult, GetRequiredAmlFSSubnetsSizeOutputArgs } from "./getRequiredAmlFSSubnetsSize";
export const getRequiredAmlFSSubnetsSize: typeof import("./getRequiredAmlFSSubnetsSize").getRequiredAmlFSSubnetsSize = null as any;
export const getRequiredAmlFSSubnetsSizeOutput: typeof import("./getRequiredAmlFSSubnetsSize").getRequiredAmlFSSubnetsSizeOutput = null as any;
utilities.lazyLoad(exports, ["getRequiredAmlFSSubnetsSize","getRequiredAmlFSSubnetsSizeOutput"], () => require("./getRequiredAmlFSSubnetsSize"));

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

// Export sub-modules:
import * as v20210301 from "./v20210301";
import * as v20230301preview from "./v20230301preview";
import * as v20230501 from "./v20230501";
import * as v20231101preview from "./v20231101preview";

export {
    v20210301,
    v20230301preview,
    v20230501,
    v20231101preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storagecache:AmlFilesystem":
                return new AmlFilesystem(name, <any>undefined, { urn })
            case "azure-native:storagecache:Cache":
                return new Cache(name, <any>undefined, { urn })
            case "azure-native:storagecache:StorageTarget":
                return new StorageTarget(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storagecache", _module)