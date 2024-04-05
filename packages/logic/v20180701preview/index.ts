import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetWorkflowArgs, GetWorkflowResult, GetWorkflowOutputArgs } from "./getWorkflow";
export const getWorkflow: typeof import("./getWorkflow").getWorkflow = null as any;
export const getWorkflowOutput: typeof import("./getWorkflow").getWorkflowOutput = null as any;
utilities.lazyLoad(exports, ["getWorkflow","getWorkflowOutput"], () => require("./getWorkflow"));

export { ListWorkflowCallbackUrlArgs, ListWorkflowCallbackUrlResult, ListWorkflowCallbackUrlOutputArgs } from "./listWorkflowCallbackUrl";
export const listWorkflowCallbackUrl: typeof import("./listWorkflowCallbackUrl").listWorkflowCallbackUrl = null as any;
export const listWorkflowCallbackUrlOutput: typeof import("./listWorkflowCallbackUrl").listWorkflowCallbackUrlOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowCallbackUrl","listWorkflowCallbackUrlOutput"], () => require("./listWorkflowCallbackUrl"));

export { ListWorkflowRunActionExpressionTracesArgs, ListWorkflowRunActionExpressionTracesResult, ListWorkflowRunActionExpressionTracesOutputArgs } from "./listWorkflowRunActionExpressionTraces";
export const listWorkflowRunActionExpressionTraces: typeof import("./listWorkflowRunActionExpressionTraces").listWorkflowRunActionExpressionTraces = null as any;
export const listWorkflowRunActionExpressionTracesOutput: typeof import("./listWorkflowRunActionExpressionTraces").listWorkflowRunActionExpressionTracesOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowRunActionExpressionTraces","listWorkflowRunActionExpressionTracesOutput"], () => require("./listWorkflowRunActionExpressionTraces"));

export { ListWorkflowRunActionRepetitionExpressionTracesArgs, ListWorkflowRunActionRepetitionExpressionTracesResult, ListWorkflowRunActionRepetitionExpressionTracesOutputArgs } from "./listWorkflowRunActionRepetitionExpressionTraces";
export const listWorkflowRunActionRepetitionExpressionTraces: typeof import("./listWorkflowRunActionRepetitionExpressionTraces").listWorkflowRunActionRepetitionExpressionTraces = null as any;
export const listWorkflowRunActionRepetitionExpressionTracesOutput: typeof import("./listWorkflowRunActionRepetitionExpressionTraces").listWorkflowRunActionRepetitionExpressionTracesOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowRunActionRepetitionExpressionTraces","listWorkflowRunActionRepetitionExpressionTracesOutput"], () => require("./listWorkflowRunActionRepetitionExpressionTraces"));

export { ListWorkflowTriggerCallbackUrlArgs, ListWorkflowTriggerCallbackUrlResult, ListWorkflowTriggerCallbackUrlOutputArgs } from "./listWorkflowTriggerCallbackUrl";
export const listWorkflowTriggerCallbackUrl: typeof import("./listWorkflowTriggerCallbackUrl").listWorkflowTriggerCallbackUrl = null as any;
export const listWorkflowTriggerCallbackUrlOutput: typeof import("./listWorkflowTriggerCallbackUrl").listWorkflowTriggerCallbackUrlOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowTriggerCallbackUrl","listWorkflowTriggerCallbackUrlOutput"], () => require("./listWorkflowTriggerCallbackUrl"));

export { ListWorkflowVersionTriggerCallbackUrlArgs, ListWorkflowVersionTriggerCallbackUrlResult, ListWorkflowVersionTriggerCallbackUrlOutputArgs } from "./listWorkflowVersionTriggerCallbackUrl";
export const listWorkflowVersionTriggerCallbackUrl: typeof import("./listWorkflowVersionTriggerCallbackUrl").listWorkflowVersionTriggerCallbackUrl = null as any;
export const listWorkflowVersionTriggerCallbackUrlOutput: typeof import("./listWorkflowVersionTriggerCallbackUrl").listWorkflowVersionTriggerCallbackUrlOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowVersionTriggerCallbackUrl","listWorkflowVersionTriggerCallbackUrlOutput"], () => require("./listWorkflowVersionTriggerCallbackUrl"));

export { WorkflowArgs } from "./workflow";
export type Workflow = import("./workflow").Workflow;
export const Workflow: typeof import("./workflow").Workflow = null as any;
utilities.lazyLoad(exports, ["Workflow"], () => require("./workflow"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:logic/v20180701preview:Workflow":
                return new Workflow(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "logic/v20180701preview", _module)