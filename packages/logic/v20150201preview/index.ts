import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetWorkflowArgs, GetWorkflowResult, GetWorkflowOutputArgs } from "./getWorkflow";
export const getWorkflow: typeof import("./getWorkflow").getWorkflow = null as any;
export const getWorkflowOutput: typeof import("./getWorkflow").getWorkflowOutput = null as any;
utilities.lazyLoad(exports, ["getWorkflow","getWorkflowOutput"], () => require("./getWorkflow"));

export { GetWorkflowAccessKeyArgs, GetWorkflowAccessKeyResult, GetWorkflowAccessKeyOutputArgs } from "./getWorkflowAccessKey";
export const getWorkflowAccessKey: typeof import("./getWorkflowAccessKey").getWorkflowAccessKey = null as any;
export const getWorkflowAccessKeyOutput: typeof import("./getWorkflowAccessKey").getWorkflowAccessKeyOutput = null as any;
utilities.lazyLoad(exports, ["getWorkflowAccessKey","getWorkflowAccessKeyOutput"], () => require("./getWorkflowAccessKey"));

export { ListWorkflowAccessKeySecretKeysArgs, ListWorkflowAccessKeySecretKeysResult, ListWorkflowAccessKeySecretKeysOutputArgs } from "./listWorkflowAccessKeySecretKeys";
export const listWorkflowAccessKeySecretKeys: typeof import("./listWorkflowAccessKeySecretKeys").listWorkflowAccessKeySecretKeys = null as any;
export const listWorkflowAccessKeySecretKeysOutput: typeof import("./listWorkflowAccessKeySecretKeys").listWorkflowAccessKeySecretKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowAccessKeySecretKeys","listWorkflowAccessKeySecretKeysOutput"], () => require("./listWorkflowAccessKeySecretKeys"));

export { WorkflowArgs } from "./workflow";
export type Workflow = import("./workflow").Workflow;
export const Workflow: typeof import("./workflow").Workflow = null as any;
utilities.lazyLoad(exports, ["Workflow"], () => require("./workflow"));

export { WorkflowAccessKeyArgs } from "./workflowAccessKey";
export type WorkflowAccessKey = import("./workflowAccessKey").WorkflowAccessKey;
export const WorkflowAccessKey: typeof import("./workflowAccessKey").WorkflowAccessKey = null as any;
utilities.lazyLoad(exports, ["WorkflowAccessKey"], () => require("./workflowAccessKey"));


// Export enums:
export * from "../types/enums/v20150201preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:logic/v20150201preview:Workflow":
                return new Workflow(name, <any>undefined, { urn })
            case "azure-native:logic/v20150201preview:WorkflowAccessKey":
                return new WorkflowAccessKey(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "logic/v20150201preview", _module)
