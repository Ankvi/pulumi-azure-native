import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureMonitorWorkspaceArgs } from "./azureMonitorWorkspace";
export type AzureMonitorWorkspace = import("./azureMonitorWorkspace").AzureMonitorWorkspace;
export const AzureMonitorWorkspace: typeof import("./azureMonitorWorkspace").AzureMonitorWorkspace = null as any;
utilities.lazyLoad(exports, ["AzureMonitorWorkspace"], () => require("./azureMonitorWorkspace"));

export { GetAzureMonitorWorkspaceArgs, GetAzureMonitorWorkspaceResult, GetAzureMonitorWorkspaceOutputArgs } from "./getAzureMonitorWorkspace";
export const getAzureMonitorWorkspace: typeof import("./getAzureMonitorWorkspace").getAzureMonitorWorkspace = null as any;
export const getAzureMonitorWorkspaceOutput: typeof import("./getAzureMonitorWorkspace").getAzureMonitorWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getAzureMonitorWorkspace","getAzureMonitorWorkspaceOutput"], () => require("./getAzureMonitorWorkspace"));




const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:monitor:AzureMonitorWorkspace":
                return new AzureMonitorWorkspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "monitor", _module)