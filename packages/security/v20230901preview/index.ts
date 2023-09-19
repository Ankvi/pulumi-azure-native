import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DevOpsConfigurationArgs } from "./devOpsConfiguration";
export type DevOpsConfiguration = import("./devOpsConfiguration").DevOpsConfiguration;
export const DevOpsConfiguration: typeof import("./devOpsConfiguration").DevOpsConfiguration = null as any;
utilities.lazyLoad(exports, ["DevOpsConfiguration"], () => require("./devOpsConfiguration"));

export { GetDevOpsConfigurationArgs, GetDevOpsConfigurationResult, GetDevOpsConfigurationOutputArgs } from "./getDevOpsConfiguration";
export const getDevOpsConfiguration: typeof import("./getDevOpsConfiguration").getDevOpsConfiguration = null as any;
export const getDevOpsConfigurationOutput: typeof import("./getDevOpsConfiguration").getDevOpsConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getDevOpsConfiguration","getDevOpsConfigurationOutput"], () => require("./getDevOpsConfiguration"));

export { ListAzureDevOpsOrgAvailableArgs, ListAzureDevOpsOrgAvailableResult, ListAzureDevOpsOrgAvailableOutputArgs } from "./listAzureDevOpsOrgAvailable";
export const listAzureDevOpsOrgAvailable: typeof import("./listAzureDevOpsOrgAvailable").listAzureDevOpsOrgAvailable = null as any;
export const listAzureDevOpsOrgAvailableOutput: typeof import("./listAzureDevOpsOrgAvailable").listAzureDevOpsOrgAvailableOutput = null as any;
utilities.lazyLoad(exports, ["listAzureDevOpsOrgAvailable","listAzureDevOpsOrgAvailableOutput"], () => require("./listAzureDevOpsOrgAvailable"));

export { ListGitHubOwnerAvailableArgs, ListGitHubOwnerAvailableResult, ListGitHubOwnerAvailableOutputArgs } from "./listGitHubOwnerAvailable";
export const listGitHubOwnerAvailable: typeof import("./listGitHubOwnerAvailable").listGitHubOwnerAvailable = null as any;
export const listGitHubOwnerAvailableOutput: typeof import("./listGitHubOwnerAvailable").listGitHubOwnerAvailableOutput = null as any;
utilities.lazyLoad(exports, ["listGitHubOwnerAvailable","listGitHubOwnerAvailableOutput"], () => require("./listGitHubOwnerAvailable"));

export { ListGitLabGroupAvailableArgs, ListGitLabGroupAvailableResult, ListGitLabGroupAvailableOutputArgs } from "./listGitLabGroupAvailable";
export const listGitLabGroupAvailable: typeof import("./listGitLabGroupAvailable").listGitLabGroupAvailable = null as any;
export const listGitLabGroupAvailableOutput: typeof import("./listGitLabGroupAvailable").listGitLabGroupAvailableOutput = null as any;
utilities.lazyLoad(exports, ["listGitLabGroupAvailable","listGitLabGroupAvailableOutput"], () => require("./listGitLabGroupAvailable"));

export { ListGitLabSubgroupArgs, ListGitLabSubgroupResult, ListGitLabSubgroupOutputArgs } from "./listGitLabSubgroup";
export const listGitLabSubgroup: typeof import("./listGitLabSubgroup").listGitLabSubgroup = null as any;
export const listGitLabSubgroupOutput: typeof import("./listGitLabSubgroup").listGitLabSubgroupOutput = null as any;
utilities.lazyLoad(exports, ["listGitLabSubgroup","listGitLabSubgroupOutput"], () => require("./listGitLabSubgroup"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20230901preview:DevOpsConfiguration":
                return new DevOpsConfiguration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20230901preview", _module)
