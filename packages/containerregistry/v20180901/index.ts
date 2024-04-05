import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetTaskArgs, GetTaskResult, GetTaskOutputArgs } from "./getTask";
export const getTask: typeof import("./getTask").getTask = null as any;
export const getTaskOutput: typeof import("./getTask").getTaskOutput = null as any;
utilities.lazyLoad(exports, ["getTask","getTaskOutput"], () => require("./getTask"));

export { ListRegistryBuildSourceUploadUrlArgs, ListRegistryBuildSourceUploadUrlResult, ListRegistryBuildSourceUploadUrlOutputArgs } from "./listRegistryBuildSourceUploadUrl";
export const listRegistryBuildSourceUploadUrl: typeof import("./listRegistryBuildSourceUploadUrl").listRegistryBuildSourceUploadUrl = null as any;
export const listRegistryBuildSourceUploadUrlOutput: typeof import("./listRegistryBuildSourceUploadUrl").listRegistryBuildSourceUploadUrlOutput = null as any;
utilities.lazyLoad(exports, ["listRegistryBuildSourceUploadUrl","listRegistryBuildSourceUploadUrlOutput"], () => require("./listRegistryBuildSourceUploadUrl"));

export { ListRunLogSasUrlArgs, ListRunLogSasUrlResult, ListRunLogSasUrlOutputArgs } from "./listRunLogSasUrl";
export const listRunLogSasUrl: typeof import("./listRunLogSasUrl").listRunLogSasUrl = null as any;
export const listRunLogSasUrlOutput: typeof import("./listRunLogSasUrl").listRunLogSasUrlOutput = null as any;
utilities.lazyLoad(exports, ["listRunLogSasUrl","listRunLogSasUrlOutput"], () => require("./listRunLogSasUrl"));

export { ListTaskDetailsArgs, ListTaskDetailsResult, ListTaskDetailsOutputArgs } from "./listTaskDetails";
export const listTaskDetails: typeof import("./listTaskDetails").listTaskDetails = null as any;
export const listTaskDetailsOutput: typeof import("./listTaskDetails").listTaskDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listTaskDetails","listTaskDetailsOutput"], () => require("./listTaskDetails"));

export { TaskArgs } from "./task";
export type Task = import("./task").Task;
export const Task: typeof import("./task").Task = null as any;
utilities.lazyLoad(exports, ["Task"], () => require("./task"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerregistry/v20180901:Task":
                return new Task(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerregistry/v20180901", _module)