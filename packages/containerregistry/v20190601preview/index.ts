import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AgentPoolArgs } from "./agentPool";
export type AgentPool = import("./agentPool").AgentPool;
export const AgentPool: typeof import("./agentPool").AgentPool = null as any;
utilities.lazyLoad(exports, ["AgentPool"], () => require("./agentPool"));

export { GetAgentPoolArgs, GetAgentPoolResult, GetAgentPoolOutputArgs } from "./getAgentPool";
export const getAgentPool: typeof import("./getAgentPool").getAgentPool = null as any;
export const getAgentPoolOutput: typeof import("./getAgentPool").getAgentPoolOutput = null as any;
utilities.lazyLoad(exports, ["getAgentPool","getAgentPoolOutput"], () => require("./getAgentPool"));

export { GetTaskArgs, GetTaskResult, GetTaskOutputArgs } from "./getTask";
export const getTask: typeof import("./getTask").getTask = null as any;
export const getTaskOutput: typeof import("./getTask").getTaskOutput = null as any;
utilities.lazyLoad(exports, ["getTask","getTaskOutput"], () => require("./getTask"));

export { GetTaskRunArgs, GetTaskRunResult, GetTaskRunOutputArgs } from "./getTaskRun";
export const getTaskRun: typeof import("./getTaskRun").getTaskRun = null as any;
export const getTaskRunOutput: typeof import("./getTaskRun").getTaskRunOutput = null as any;
utilities.lazyLoad(exports, ["getTaskRun","getTaskRunOutput"], () => require("./getTaskRun"));

export { ListAgentPoolQueueStatusArgs, ListAgentPoolQueueStatusResult, ListAgentPoolQueueStatusOutputArgs } from "./listAgentPoolQueueStatus";
export const listAgentPoolQueueStatus: typeof import("./listAgentPoolQueueStatus").listAgentPoolQueueStatus = null as any;
export const listAgentPoolQueueStatusOutput: typeof import("./listAgentPoolQueueStatus").listAgentPoolQueueStatusOutput = null as any;
utilities.lazyLoad(exports, ["listAgentPoolQueueStatus","listAgentPoolQueueStatusOutput"], () => require("./listAgentPoolQueueStatus"));

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

export { ListTaskRunDetailsArgs, ListTaskRunDetailsResult, ListTaskRunDetailsOutputArgs } from "./listTaskRunDetails";
export const listTaskRunDetails: typeof import("./listTaskRunDetails").listTaskRunDetails = null as any;
export const listTaskRunDetailsOutput: typeof import("./listTaskRunDetails").listTaskRunDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listTaskRunDetails","listTaskRunDetailsOutput"], () => require("./listTaskRunDetails"));

export { TaskArgs } from "./task";
export type Task = import("./task").Task;
export const Task: typeof import("./task").Task = null as any;
utilities.lazyLoad(exports, ["Task"], () => require("./task"));

export { TaskRunArgs } from "./taskRun";
export type TaskRun = import("./taskRun").TaskRun;
export const TaskRun: typeof import("./taskRun").TaskRun = null as any;
utilities.lazyLoad(exports, ["TaskRun"], () => require("./taskRun"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerregistry/v20190601preview:AgentPool":
                return new AgentPool(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20190601preview:Task":
                return new Task(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20190601preview:TaskRun":
                return new TaskRun(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerregistry/v20190601preview", _module)
