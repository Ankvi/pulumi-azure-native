import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureDevOpsConnectorArgs } from "./azureDevOpsConnector";
export type AzureDevOpsConnector = import("./azureDevOpsConnector").AzureDevOpsConnector;
export const AzureDevOpsConnector: typeof import("./azureDevOpsConnector").AzureDevOpsConnector = null as any;
utilities.lazyLoad(exports, ["AzureDevOpsConnector"], () => require("./azureDevOpsConnector"));

export { GetAzureDevOpsConnectorArgs, GetAzureDevOpsConnectorResult, GetAzureDevOpsConnectorOutputArgs } from "./getAzureDevOpsConnector";
export const getAzureDevOpsConnector: typeof import("./getAzureDevOpsConnector").getAzureDevOpsConnector = null as any;
export const getAzureDevOpsConnectorOutput: typeof import("./getAzureDevOpsConnector").getAzureDevOpsConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getAzureDevOpsConnector","getAzureDevOpsConnectorOutput"], () => require("./getAzureDevOpsConnector"));

export { GetGitHubConnectorArgs, GetGitHubConnectorResult, GetGitHubConnectorOutputArgs } from "./getGitHubConnector";
export const getGitHubConnector: typeof import("./getGitHubConnector").getGitHubConnector = null as any;
export const getGitHubConnectorOutput: typeof import("./getGitHubConnector").getGitHubConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getGitHubConnector","getGitHubConnectorOutput"], () => require("./getGitHubConnector"));

export { GitHubConnectorArgs } from "./gitHubConnector";
export type GitHubConnector = import("./gitHubConnector").GitHubConnector;
export const GitHubConnector: typeof import("./gitHubConnector").GitHubConnector = null as any;
utilities.lazyLoad(exports, ["GitHubConnector"], () => require("./gitHubConnector"));


// Export enums:
export * from "./types/enums";


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:securitydevops:AzureDevOpsConnector":
                return new AzureDevOpsConnector(name, <any>undefined, { urn })
            case "azure-native:securitydevops:GitHubConnector":
                return new GitHubConnector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "securitydevops", _module)
