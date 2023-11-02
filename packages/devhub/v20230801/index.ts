import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGitHubOAuthArgs, GetGitHubOAuthResult, GetGitHubOAuthOutputArgs } from "./getGitHubOAuth";
export const getGitHubOAuth: typeof import("./getGitHubOAuth").getGitHubOAuth = null as any;
export const getGitHubOAuthOutput: typeof import("./getGitHubOAuth").getGitHubOAuthOutput = null as any;
utilities.lazyLoad(exports, ["getGitHubOAuth","getGitHubOAuthOutput"], () => require("./getGitHubOAuth"));

export { GetWorkflowArgs, GetWorkflowResult, GetWorkflowOutputArgs } from "./getWorkflow";
export const getWorkflow: typeof import("./getWorkflow").getWorkflow = null as any;
export const getWorkflowOutput: typeof import("./getWorkflow").getWorkflowOutput = null as any;
utilities.lazyLoad(exports, ["getWorkflow","getWorkflowOutput"], () => require("./getWorkflow"));

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
            case "azure-native:devhub/v20230801:Workflow":
                return new Workflow(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devhub/v20230801", _module)
