import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ADLSGen2StorageAccountDataSetArgs } from "./adlsgen2StorageAccountDataSet";
export type ADLSGen2StorageAccountDataSet = import("./adlsgen2StorageAccountDataSet").ADLSGen2StorageAccountDataSet;
export const ADLSGen2StorageAccountDataSet: typeof import("./adlsgen2StorageAccountDataSet").ADLSGen2StorageAccountDataSet = null as any;
utilities.lazyLoad(exports, ["ADLSGen2StorageAccountDataSet"], () => require("./adlsgen2StorageAccountDataSet"));

export { ADLSGen2StorageAccountDataSetMappingArgs } from "./adlsgen2StorageAccountDataSetMapping";
export type ADLSGen2StorageAccountDataSetMapping = import("./adlsgen2StorageAccountDataSetMapping").ADLSGen2StorageAccountDataSetMapping;
export const ADLSGen2StorageAccountDataSetMapping: typeof import("./adlsgen2StorageAccountDataSetMapping").ADLSGen2StorageAccountDataSetMapping = null as any;
utilities.lazyLoad(exports, ["ADLSGen2StorageAccountDataSetMapping"], () => require("./adlsgen2StorageAccountDataSetMapping"));

export { BlobStorageAccountDataSetArgs } from "./blobStorageAccountDataSet";
export type BlobStorageAccountDataSet = import("./blobStorageAccountDataSet").BlobStorageAccountDataSet;
export const BlobStorageAccountDataSet: typeof import("./blobStorageAccountDataSet").BlobStorageAccountDataSet = null as any;
utilities.lazyLoad(exports, ["BlobStorageAccountDataSet"], () => require("./blobStorageAccountDataSet"));

export { BlobStorageAccountDataSetMappingArgs } from "./blobStorageAccountDataSetMapping";
export type BlobStorageAccountDataSetMapping = import("./blobStorageAccountDataSetMapping").BlobStorageAccountDataSetMapping;
export const BlobStorageAccountDataSetMapping: typeof import("./blobStorageAccountDataSetMapping").BlobStorageAccountDataSetMapping = null as any;
utilities.lazyLoad(exports, ["BlobStorageAccountDataSetMapping"], () => require("./blobStorageAccountDataSetMapping"));

export { GetADLSGen2StorageAccountDataSetArgs, GetADLSGen2StorageAccountDataSetResult, GetADLSGen2StorageAccountDataSetOutputArgs } from "./getADLSGen2StorageAccountDataSet";
export const getADLSGen2StorageAccountDataSet: typeof import("./getADLSGen2StorageAccountDataSet").getADLSGen2StorageAccountDataSet = null as any;
export const getADLSGen2StorageAccountDataSetOutput: typeof import("./getADLSGen2StorageAccountDataSet").getADLSGen2StorageAccountDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen2StorageAccountDataSet","getADLSGen2StorageAccountDataSetOutput"], () => require("./getADLSGen2StorageAccountDataSet"));

export { GetADLSGen2StorageAccountDataSetMappingArgs, GetADLSGen2StorageAccountDataSetMappingResult, GetADLSGen2StorageAccountDataSetMappingOutputArgs } from "./getADLSGen2StorageAccountDataSetMapping";
export const getADLSGen2StorageAccountDataSetMapping: typeof import("./getADLSGen2StorageAccountDataSetMapping").getADLSGen2StorageAccountDataSetMapping = null as any;
export const getADLSGen2StorageAccountDataSetMappingOutput: typeof import("./getADLSGen2StorageAccountDataSetMapping").getADLSGen2StorageAccountDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen2StorageAccountDataSetMapping","getADLSGen2StorageAccountDataSetMappingOutput"], () => require("./getADLSGen2StorageAccountDataSetMapping"));

export { GetBlobStorageAccountDataSetArgs, GetBlobStorageAccountDataSetResult, GetBlobStorageAccountDataSetOutputArgs } from "./getBlobStorageAccountDataSet";
export const getBlobStorageAccountDataSet: typeof import("./getBlobStorageAccountDataSet").getBlobStorageAccountDataSet = null as any;
export const getBlobStorageAccountDataSetOutput: typeof import("./getBlobStorageAccountDataSet").getBlobStorageAccountDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getBlobStorageAccountDataSet","getBlobStorageAccountDataSetOutput"], () => require("./getBlobStorageAccountDataSet"));

export { GetBlobStorageAccountDataSetMappingArgs, GetBlobStorageAccountDataSetMappingResult, GetBlobStorageAccountDataSetMappingOutputArgs } from "./getBlobStorageAccountDataSetMapping";
export const getBlobStorageAccountDataSetMapping: typeof import("./getBlobStorageAccountDataSetMapping").getBlobStorageAccountDataSetMapping = null as any;
export const getBlobStorageAccountDataSetMappingOutput: typeof import("./getBlobStorageAccountDataSetMapping").getBlobStorageAccountDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getBlobStorageAccountDataSetMapping","getBlobStorageAccountDataSetMappingOutput"], () => require("./getBlobStorageAccountDataSetMapping"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datashare/v20201001preview:ADLSGen2StorageAccountDataSet":
                return new ADLSGen2StorageAccountDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20201001preview:ADLSGen2StorageAccountDataSetMapping":
                return new ADLSGen2StorageAccountDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20201001preview:BlobStorageAccountDataSet":
                return new BlobStorageAccountDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20201001preview:BlobStorageAccountDataSetMapping":
                return new BlobStorageAccountDataSetMapping(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datashare/v20201001preview", _module)