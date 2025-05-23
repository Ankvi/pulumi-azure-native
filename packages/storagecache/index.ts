import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AmlFilesystemArgs } from "./amlFilesystem";
export type AmlFilesystem = import("./amlFilesystem").AmlFilesystem;
export const AmlFilesystem: typeof import("./amlFilesystem").AmlFilesystem = null as any;
utilities.lazyLoad(exports, ["AmlFilesystem"], () => require("./amlFilesystem"));

export { AutoExportJobArgs } from "./autoExportJob";
export type AutoExportJob = import("./autoExportJob").AutoExportJob;
export const AutoExportJob: typeof import("./autoExportJob").AutoExportJob = null as any;
utilities.lazyLoad(exports, ["AutoExportJob"], () => require("./autoExportJob"));

export { CacheArgs } from "./cache";
export type Cache = import("./cache").Cache;
export const Cache: typeof import("./cache").Cache = null as any;
utilities.lazyLoad(exports, ["Cache"], () => require("./cache"));

export { GetAmlFilesystemArgs, GetAmlFilesystemResult, GetAmlFilesystemOutputArgs } from "./getAmlFilesystem";
export const getAmlFilesystem: typeof import("./getAmlFilesystem").getAmlFilesystem = null as any;
export const getAmlFilesystemOutput: typeof import("./getAmlFilesystem").getAmlFilesystemOutput = null as any;
utilities.lazyLoad(exports, ["getAmlFilesystem","getAmlFilesystemOutput"], () => require("./getAmlFilesystem"));

export { GetAutoExportJobArgs, GetAutoExportJobResult, GetAutoExportJobOutputArgs } from "./getAutoExportJob";
export const getAutoExportJob: typeof import("./getAutoExportJob").getAutoExportJob = null as any;
export const getAutoExportJobOutput: typeof import("./getAutoExportJob").getAutoExportJobOutput = null as any;
utilities.lazyLoad(exports, ["getAutoExportJob","getAutoExportJobOutput"], () => require("./getAutoExportJob"));

export { GetCacheArgs, GetCacheResult, GetCacheOutputArgs } from "./getCache";
export const getCache: typeof import("./getCache").getCache = null as any;
export const getCacheOutput: typeof import("./getCache").getCacheOutput = null as any;
utilities.lazyLoad(exports, ["getCache","getCacheOutput"], () => require("./getCache"));

export { GetImportJobArgs, GetImportJobResult, GetImportJobOutputArgs } from "./getImportJob";
export const getImportJob: typeof import("./getImportJob").getImportJob = null as any;
export const getImportJobOutput: typeof import("./getImportJob").getImportJobOutput = null as any;
utilities.lazyLoad(exports, ["getImportJob","getImportJobOutput"], () => require("./getImportJob"));

export { GetRequiredAmlFSSubnetsSizeArgs, GetRequiredAmlFSSubnetsSizeResult, GetRequiredAmlFSSubnetsSizeOutputArgs } from "./getRequiredAmlFSSubnetsSize";
export const getRequiredAmlFSSubnetsSize: typeof import("./getRequiredAmlFSSubnetsSize").getRequiredAmlFSSubnetsSize = null as any;
export const getRequiredAmlFSSubnetsSizeOutput: typeof import("./getRequiredAmlFSSubnetsSize").getRequiredAmlFSSubnetsSizeOutput = null as any;
utilities.lazyLoad(exports, ["getRequiredAmlFSSubnetsSize","getRequiredAmlFSSubnetsSizeOutput"], () => require("./getRequiredAmlFSSubnetsSize"));

export { GetStorageTargetArgs, GetStorageTargetResult, GetStorageTargetOutputArgs } from "./getStorageTarget";
export const getStorageTarget: typeof import("./getStorageTarget").getStorageTarget = null as any;
export const getStorageTargetOutput: typeof import("./getStorageTarget").getStorageTargetOutput = null as any;
utilities.lazyLoad(exports, ["getStorageTarget","getStorageTargetOutput"], () => require("./getStorageTarget"));

export { ImportJobArgs } from "./importJob";
export type ImportJob = import("./importJob").ImportJob;
export const ImportJob: typeof import("./importJob").ImportJob = null as any;
utilities.lazyLoad(exports, ["ImportJob"], () => require("./importJob"));

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
            case "azure-native:storagecache:AmlFilesystem":
                return new AmlFilesystem(name, <any>undefined, { urn })
            case "azure-native:storagecache:AutoExportJob":
                return new AutoExportJob(name, <any>undefined, { urn })
            case "azure-native:storagecache:Cache":
                return new Cache(name, <any>undefined, { urn })
            case "azure-native:storagecache:ImportJob":
                return new ImportJob(name, <any>undefined, { urn })
            case "azure-native:storagecache:StorageTarget":
                return new StorageTarget(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storagecache", _module)