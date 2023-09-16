import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BatchAccountArgs } from "./batchAccount";
export type BatchAccount = import("./batchAccount").BatchAccount;
export const BatchAccount: typeof import("./batchAccount").BatchAccount = null as any;
utilities.lazyLoad(exports, ["BatchAccount"], () => require("./batchAccount"));

export { GetBatchAccountArgs, GetBatchAccountResult, GetBatchAccountOutputArgs } from "./getBatchAccount";
export const getBatchAccount: typeof import("./getBatchAccount").getBatchAccount = null as any;
export const getBatchAccountOutput: typeof import("./getBatchAccount").getBatchAccountOutput = null as any;
utilities.lazyLoad(exports, ["getBatchAccount","getBatchAccountOutput"], () => require("./getBatchAccount"));

export { ListBatchAccountKeysArgs, ListBatchAccountKeysResult, ListBatchAccountKeysOutputArgs } from "./listBatchAccountKeys";
export const listBatchAccountKeys: typeof import("./listBatchAccountKeys").listBatchAccountKeys = null as any;
export const listBatchAccountKeysOutput: typeof import("./listBatchAccountKeys").listBatchAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listBatchAccountKeys","listBatchAccountKeysOutput"], () => require("./listBatchAccountKeys"));


// Export enums:
export * from "../types/enums/v20220101";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:batch/v20220101:BatchAccount":
                return new BatchAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "batch/v20220101", _module)
