import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ActionGroupArgs } from "./actionGroup";
export type ActionGroup = import("./actionGroup").ActionGroup;
export const ActionGroup: typeof import("./actionGroup").ActionGroup = null as any;
utilities.lazyLoad(exports, ["ActionGroup"], () => require("./actionGroup"));

export { AzureMonitorWorkspaceArgs } from "./azureMonitorWorkspace";
export type AzureMonitorWorkspace = import("./azureMonitorWorkspace").AzureMonitorWorkspace;
export const AzureMonitorWorkspace: typeof import("./azureMonitorWorkspace").AzureMonitorWorkspace = null as any;
utilities.lazyLoad(exports, ["AzureMonitorWorkspace"], () => require("./azureMonitorWorkspace"));

export { GetActionGroupArgs, GetActionGroupResult, GetActionGroupOutputArgs } from "./getActionGroup";
export const getActionGroup: typeof import("./getActionGroup").getActionGroup = null as any;
export const getActionGroupOutput: typeof import("./getActionGroup").getActionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getActionGroup","getActionGroupOutput"], () => require("./getActionGroup"));

export { GetAzureMonitorWorkspaceArgs, GetAzureMonitorWorkspaceResult, GetAzureMonitorWorkspaceOutputArgs } from "./getAzureMonitorWorkspace";
export const getAzureMonitorWorkspace: typeof import("./getAzureMonitorWorkspace").getAzureMonitorWorkspace = null as any;
export const getAzureMonitorWorkspaceOutput: typeof import("./getAzureMonitorWorkspace").getAzureMonitorWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getAzureMonitorWorkspace","getAzureMonitorWorkspaceOutput"], () => require("./getAzureMonitorWorkspace"));

export { GetPipelineGroupArgs, GetPipelineGroupResult, GetPipelineGroupOutputArgs } from "./getPipelineGroup";
export const getPipelineGroup: typeof import("./getPipelineGroup").getPipelineGroup = null as any;
export const getPipelineGroupOutput: typeof import("./getPipelineGroup").getPipelineGroupOutput = null as any;
utilities.lazyLoad(exports, ["getPipelineGroup","getPipelineGroupOutput"], () => require("./getPipelineGroup"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetPrivateLinkScopeArgs, GetPrivateLinkScopeResult, GetPrivateLinkScopeOutputArgs } from "./getPrivateLinkScope";
export const getPrivateLinkScope: typeof import("./getPrivateLinkScope").getPrivateLinkScope = null as any;
export const getPrivateLinkScopeOutput: typeof import("./getPrivateLinkScope").getPrivateLinkScopeOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkScope","getPrivateLinkScopeOutput"], () => require("./getPrivateLinkScope"));

export { GetPrivateLinkScopedResourceArgs, GetPrivateLinkScopedResourceResult, GetPrivateLinkScopedResourceOutputArgs } from "./getPrivateLinkScopedResource";
export const getPrivateLinkScopedResource: typeof import("./getPrivateLinkScopedResource").getPrivateLinkScopedResource = null as any;
export const getPrivateLinkScopedResourceOutput: typeof import("./getPrivateLinkScopedResource").getPrivateLinkScopedResourceOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkScopedResource","getPrivateLinkScopedResourceOutput"], () => require("./getPrivateLinkScopedResource"));

export { GetScheduledQueryRuleArgs, GetScheduledQueryRuleResult, GetScheduledQueryRuleOutputArgs } from "./getScheduledQueryRule";
export const getScheduledQueryRule: typeof import("./getScheduledQueryRule").getScheduledQueryRule = null as any;
export const getScheduledQueryRuleOutput: typeof import("./getScheduledQueryRule").getScheduledQueryRuleOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledQueryRule","getScheduledQueryRuleOutput"], () => require("./getScheduledQueryRule"));

export { GetTenantActionGroupArgs, GetTenantActionGroupResult, GetTenantActionGroupOutputArgs } from "./getTenantActionGroup";
export const getTenantActionGroup: typeof import("./getTenantActionGroup").getTenantActionGroup = null as any;
export const getTenantActionGroupOutput: typeof import("./getTenantActionGroup").getTenantActionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getTenantActionGroup","getTenantActionGroupOutput"], () => require("./getTenantActionGroup"));

export { PipelineGroupArgs } from "./pipelineGroup";
export type PipelineGroup = import("./pipelineGroup").PipelineGroup;
export const PipelineGroup: typeof import("./pipelineGroup").PipelineGroup = null as any;
utilities.lazyLoad(exports, ["PipelineGroup"], () => require("./pipelineGroup"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { PrivateLinkScopeArgs } from "./privateLinkScope";
export type PrivateLinkScope = import("./privateLinkScope").PrivateLinkScope;
export const PrivateLinkScope: typeof import("./privateLinkScope").PrivateLinkScope = null as any;
utilities.lazyLoad(exports, ["PrivateLinkScope"], () => require("./privateLinkScope"));

export { PrivateLinkScopedResourceArgs } from "./privateLinkScopedResource";
export type PrivateLinkScopedResource = import("./privateLinkScopedResource").PrivateLinkScopedResource;
export const PrivateLinkScopedResource: typeof import("./privateLinkScopedResource").PrivateLinkScopedResource = null as any;
utilities.lazyLoad(exports, ["PrivateLinkScopedResource"], () => require("./privateLinkScopedResource"));

export { ScheduledQueryRuleArgs } from "./scheduledQueryRule";
export type ScheduledQueryRule = import("./scheduledQueryRule").ScheduledQueryRule;
export const ScheduledQueryRule: typeof import("./scheduledQueryRule").ScheduledQueryRule = null as any;
utilities.lazyLoad(exports, ["ScheduledQueryRule"], () => require("./scheduledQueryRule"));

export { TenantActionGroupArgs } from "./tenantActionGroup";
export type TenantActionGroup = import("./tenantActionGroup").TenantActionGroup;
export const TenantActionGroup: typeof import("./tenantActionGroup").TenantActionGroup = null as any;
utilities.lazyLoad(exports, ["TenantActionGroup"], () => require("./tenantActionGroup"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:monitor:ActionGroup":
                return new ActionGroup(name, <any>undefined, { urn })
            case "azure-native:monitor:AzureMonitorWorkspace":
                return new AzureMonitorWorkspace(name, <any>undefined, { urn })
            case "azure-native:monitor:PipelineGroup":
                return new PipelineGroup(name, <any>undefined, { urn })
            case "azure-native:monitor:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:monitor:PrivateLinkScope":
                return new PrivateLinkScope(name, <any>undefined, { urn })
            case "azure-native:monitor:PrivateLinkScopedResource":
                return new PrivateLinkScopedResource(name, <any>undefined, { urn })
            case "azure-native:monitor:ScheduledQueryRule":
                return new ScheduledQueryRule(name, <any>undefined, { urn })
            case "azure-native:monitor:TenantActionGroup":
                return new TenantActionGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "monitor", _module)