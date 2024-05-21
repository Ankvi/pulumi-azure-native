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

export { GetPipelineGroupArgs, GetPipelineGroupResult, GetPipelineGroupOutputArgs } from "./getPipelineGroup";
export const getPipelineGroup: typeof import("./getPipelineGroup").getPipelineGroup = null as any;
export const getPipelineGroupOutput: typeof import("./getPipelineGroup").getPipelineGroupOutput = null as any;
utilities.lazyLoad(exports, ["getPipelineGroup","getPipelineGroupOutput"], () => require("./getPipelineGroup"));

export { PipelineGroupArgs } from "./pipelineGroup";
export type PipelineGroup = import("./pipelineGroup").PipelineGroup;
export const PipelineGroup: typeof import("./pipelineGroup").PipelineGroup = null as any;
utilities.lazyLoad(exports, ["PipelineGroup"], () => require("./pipelineGroup"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:monitor:AzureMonitorWorkspace":
                return new AzureMonitorWorkspace(name, <any>undefined, { urn })
            case "azure-native:monitor:PipelineGroup":
                return new PipelineGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "monitor", _module)