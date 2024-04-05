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


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storagecache/v20230301preview:AmlFilesystem":
                return new AmlFilesystem(name, <any>undefined, { urn })
            case "azure-native:storagecache/v20230301preview:Cache":
                return new Cache(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storagecache/v20230301preview", _module)