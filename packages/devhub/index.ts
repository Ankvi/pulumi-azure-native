import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetADOOAuthInfoArgs, GetADOOAuthInfoResult, GetADOOAuthInfoOutputArgs } from "./getADOOAuthInfo";
export const getADOOAuthInfo: typeof import("./getADOOAuthInfo").getADOOAuthInfo = null as any;
export const getADOOAuthInfoOutput: typeof import("./getADOOAuthInfo").getADOOAuthInfoOutput = null as any;
utilities.lazyLoad(exports, ["getADOOAuthInfo","getADOOAuthInfoOutput"], () => require("./getADOOAuthInfo"));

export { GetGitHubOAuthArgs, GetGitHubOAuthResult, GetGitHubOAuthOutputArgs } from "./getGitHubOAuth";
export const getGitHubOAuth: typeof import("./getGitHubOAuth").getGitHubOAuth = null as any;
export const getGitHubOAuthOutput: typeof import("./getGitHubOAuth").getGitHubOAuthOutput = null as any;
utilities.lazyLoad(exports, ["getGitHubOAuth","getGitHubOAuthOutput"], () => require("./getGitHubOAuth"));

export { GetIacProfileArgs, GetIacProfileResult, GetIacProfileOutputArgs } from "./getIacProfile";
export const getIacProfile: typeof import("./getIacProfile").getIacProfile = null as any;
export const getIacProfileOutput: typeof import("./getIacProfile").getIacProfileOutput = null as any;
utilities.lazyLoad(exports, ["getIacProfile","getIacProfileOutput"], () => require("./getIacProfile"));

export { GetWorkflowArgs, GetWorkflowResult, GetWorkflowOutputArgs } from "./getWorkflow";
export const getWorkflow: typeof import("./getWorkflow").getWorkflow = null as any;
export const getWorkflowOutput: typeof import("./getWorkflow").getWorkflowOutput = null as any;
utilities.lazyLoad(exports, ["getWorkflow","getWorkflowOutput"], () => require("./getWorkflow"));

export { IacProfileArgs } from "./iacProfile";
export type IacProfile = import("./iacProfile").IacProfile;
export const IacProfile: typeof import("./iacProfile").IacProfile = null as any;
utilities.lazyLoad(exports, ["IacProfile"], () => require("./iacProfile"));

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
            case "azure-native:devhub:IacProfile":
                return new IacProfile(name, <any>undefined, { urn })
            case "azure-native:devhub:Workflow":
                return new Workflow(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devhub", _module)