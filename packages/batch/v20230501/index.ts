import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationArgs } from "./application";
export type Application = import("./application").Application;
export const Application: typeof import("./application").Application = null as any;
utilities.lazyLoad(exports, ["Application"], () => require("./application"));

export { ApplicationPackageArgs } from "./applicationPackage";
export type ApplicationPackage = import("./applicationPackage").ApplicationPackage;
export const ApplicationPackage: typeof import("./applicationPackage").ApplicationPackage = null as any;
utilities.lazyLoad(exports, ["ApplicationPackage"], () => require("./applicationPackage"));

export { BatchAccountArgs } from "./batchAccount";
export type BatchAccount = import("./batchAccount").BatchAccount;
export const BatchAccount: typeof import("./batchAccount").BatchAccount = null as any;
utilities.lazyLoad(exports, ["BatchAccount"], () => require("./batchAccount"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetApplicationPackageArgs, GetApplicationPackageResult, GetApplicationPackageOutputArgs } from "./getApplicationPackage";
export const getApplicationPackage: typeof import("./getApplicationPackage").getApplicationPackage = null as any;
export const getApplicationPackageOutput: typeof import("./getApplicationPackage").getApplicationPackageOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationPackage","getApplicationPackageOutput"], () => require("./getApplicationPackage"));

export { GetBatchAccountArgs, GetBatchAccountResult, GetBatchAccountOutputArgs } from "./getBatchAccount";
export const getBatchAccount: typeof import("./getBatchAccount").getBatchAccount = null as any;
export const getBatchAccountOutput: typeof import("./getBatchAccount").getBatchAccountOutput = null as any;
utilities.lazyLoad(exports, ["getBatchAccount","getBatchAccountOutput"], () => require("./getBatchAccount"));

export { GetPoolArgs, GetPoolResult, GetPoolOutputArgs } from "./getPool";
export const getPool: typeof import("./getPool").getPool = null as any;
export const getPoolOutput: typeof import("./getPool").getPoolOutput = null as any;
utilities.lazyLoad(exports, ["getPool","getPoolOutput"], () => require("./getPool"));

export { ListBatchAccountKeysArgs, ListBatchAccountKeysResult, ListBatchAccountKeysOutputArgs } from "./listBatchAccountKeys";
export const listBatchAccountKeys: typeof import("./listBatchAccountKeys").listBatchAccountKeys = null as any;
export const listBatchAccountKeysOutput: typeof import("./listBatchAccountKeys").listBatchAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listBatchAccountKeys","listBatchAccountKeysOutput"], () => require("./listBatchAccountKeys"));

export { PoolArgs } from "./pool";
export type Pool = import("./pool").Pool;
export const Pool: typeof import("./pool").Pool = null as any;
utilities.lazyLoad(exports, ["Pool"], () => require("./pool"));


// Export enums:
export * from "../types/enums/v20230501";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:batch/v20230501:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-native:batch/v20230501:ApplicationPackage":
                return new ApplicationPackage(name, <any>undefined, { urn })
            case "azure-native:batch/v20230501:BatchAccount":
                return new BatchAccount(name, <any>undefined, { urn })
            case "azure-native:batch/v20230501:Pool":
                return new Pool(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "batch/v20230501", _module)
