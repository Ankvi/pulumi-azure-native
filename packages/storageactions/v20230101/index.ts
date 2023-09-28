import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetStorageTaskArgs, GetStorageTaskResult, GetStorageTaskOutputArgs } from "./getStorageTask";
export const getStorageTask: typeof import("./getStorageTask").getStorageTask = null as any;
export const getStorageTaskOutput: typeof import("./getStorageTask").getStorageTaskOutput = null as any;
utilities.lazyLoad(exports, ["getStorageTask","getStorageTaskOutput"], () => require("./getStorageTask"));

export { StorageTaskArgs } from "./storageTask";
export type StorageTask = import("./storageTask").StorageTask;
export const StorageTask: typeof import("./storageTask").StorageTask = null as any;
utilities.lazyLoad(exports, ["StorageTask"], () => require("./storageTask"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storageactions/v20230101:StorageTask":
                return new StorageTask(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storageactions/v20230101", _module)
