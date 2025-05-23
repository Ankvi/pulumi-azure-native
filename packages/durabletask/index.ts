import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRetentionPolicyArgs, GetRetentionPolicyResult, GetRetentionPolicyOutputArgs } from "./getRetentionPolicy";
export const getRetentionPolicy: typeof import("./getRetentionPolicy").getRetentionPolicy = null as any;
export const getRetentionPolicyOutput: typeof import("./getRetentionPolicy").getRetentionPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getRetentionPolicy","getRetentionPolicyOutput"], () => require("./getRetentionPolicy"));

export { GetSchedulerArgs, GetSchedulerResult, GetSchedulerOutputArgs } from "./getScheduler";
export const getScheduler: typeof import("./getScheduler").getScheduler = null as any;
export const getSchedulerOutput: typeof import("./getScheduler").getSchedulerOutput = null as any;
utilities.lazyLoad(exports, ["getScheduler","getSchedulerOutput"], () => require("./getScheduler"));

export { GetTaskHubArgs, GetTaskHubResult, GetTaskHubOutputArgs } from "./getTaskHub";
export const getTaskHub: typeof import("./getTaskHub").getTaskHub = null as any;
export const getTaskHubOutput: typeof import("./getTaskHub").getTaskHubOutput = null as any;
utilities.lazyLoad(exports, ["getTaskHub","getTaskHubOutput"], () => require("./getTaskHub"));

export { RetentionPolicyArgs } from "./retentionPolicy";
export type RetentionPolicy = import("./retentionPolicy").RetentionPolicy;
export const RetentionPolicy: typeof import("./retentionPolicy").RetentionPolicy = null as any;
utilities.lazyLoad(exports, ["RetentionPolicy"], () => require("./retentionPolicy"));

export { SchedulerArgs } from "./scheduler";
export type Scheduler = import("./scheduler").Scheduler;
export const Scheduler: typeof import("./scheduler").Scheduler = null as any;
utilities.lazyLoad(exports, ["Scheduler"], () => require("./scheduler"));

export { TaskHubArgs } from "./taskHub";
export type TaskHub = import("./taskHub").TaskHub;
export const TaskHub: typeof import("./taskHub").TaskHub = null as any;
utilities.lazyLoad(exports, ["TaskHub"], () => require("./taskHub"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:durabletask:RetentionPolicy":
                return new RetentionPolicy(name, <any>undefined, { urn })
            case "azure-native:durabletask:Scheduler":
                return new Scheduler(name, <any>undefined, { urn })
            case "azure-native:durabletask:TaskHub":
                return new TaskHub(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "durabletask", _module)