import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ActionGroupArgs } from "./actionGroup";
export type ActionGroup = import("./actionGroup").ActionGroup;
export const ActionGroup: typeof import("./actionGroup").ActionGroup = null as any;
utilities.lazyLoad(exports, ["ActionGroup"], () => require("./actionGroup"));

export { ActivityLogAlertArgs } from "./activityLogAlert";
export type ActivityLogAlert = import("./activityLogAlert").ActivityLogAlert;
export const ActivityLogAlert: typeof import("./activityLogAlert").ActivityLogAlert = null as any;
utilities.lazyLoad(exports, ["ActivityLogAlert"], () => require("./activityLogAlert"));

export { AutoscaleSettingArgs } from "./autoscaleSetting";
export type AutoscaleSetting = import("./autoscaleSetting").AutoscaleSetting;
export const AutoscaleSetting: typeof import("./autoscaleSetting").AutoscaleSetting = null as any;
utilities.lazyLoad(exports, ["AutoscaleSetting"], () => require("./autoscaleSetting"));

export { AzureMonitorWorkspaceArgs } from "./azureMonitorWorkspace";
export type AzureMonitorWorkspace = import("./azureMonitorWorkspace").AzureMonitorWorkspace;
export const AzureMonitorWorkspace: typeof import("./azureMonitorWorkspace").AzureMonitorWorkspace = null as any;
utilities.lazyLoad(exports, ["AzureMonitorWorkspace"], () => require("./azureMonitorWorkspace"));

export { DataCollectionEndpointArgs } from "./dataCollectionEndpoint";
export type DataCollectionEndpoint = import("./dataCollectionEndpoint").DataCollectionEndpoint;
export const DataCollectionEndpoint: typeof import("./dataCollectionEndpoint").DataCollectionEndpoint = null as any;
utilities.lazyLoad(exports, ["DataCollectionEndpoint"], () => require("./dataCollectionEndpoint"));

export { DataCollectionRuleArgs } from "./dataCollectionRule";
export type DataCollectionRule = import("./dataCollectionRule").DataCollectionRule;
export const DataCollectionRule: typeof import("./dataCollectionRule").DataCollectionRule = null as any;
utilities.lazyLoad(exports, ["DataCollectionRule"], () => require("./dataCollectionRule"));

export { DataCollectionRuleAssociationArgs } from "./dataCollectionRuleAssociation";
export type DataCollectionRuleAssociation = import("./dataCollectionRuleAssociation").DataCollectionRuleAssociation;
export const DataCollectionRuleAssociation: typeof import("./dataCollectionRuleAssociation").DataCollectionRuleAssociation = null as any;
utilities.lazyLoad(exports, ["DataCollectionRuleAssociation"], () => require("./dataCollectionRuleAssociation"));

export { DiagnosticSettingArgs } from "./diagnosticSetting";
export type DiagnosticSetting = import("./diagnosticSetting").DiagnosticSetting;
export const DiagnosticSetting: typeof import("./diagnosticSetting").DiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["DiagnosticSetting"], () => require("./diagnosticSetting"));

export { GetActionGroupArgs, GetActionGroupResult, GetActionGroupOutputArgs } from "./getActionGroup";
export const getActionGroup: typeof import("./getActionGroup").getActionGroup = null as any;
export const getActionGroupOutput: typeof import("./getActionGroup").getActionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getActionGroup","getActionGroupOutput"], () => require("./getActionGroup"));

export { GetActivityLogAlertArgs, GetActivityLogAlertResult, GetActivityLogAlertOutputArgs } from "./getActivityLogAlert";
export const getActivityLogAlert: typeof import("./getActivityLogAlert").getActivityLogAlert = null as any;
export const getActivityLogAlertOutput: typeof import("./getActivityLogAlert").getActivityLogAlertOutput = null as any;
utilities.lazyLoad(exports, ["getActivityLogAlert","getActivityLogAlertOutput"], () => require("./getActivityLogAlert"));

export { GetAutoscaleSettingArgs, GetAutoscaleSettingResult, GetAutoscaleSettingOutputArgs } from "./getAutoscaleSetting";
export const getAutoscaleSetting: typeof import("./getAutoscaleSetting").getAutoscaleSetting = null as any;
export const getAutoscaleSettingOutput: typeof import("./getAutoscaleSetting").getAutoscaleSettingOutput = null as any;
utilities.lazyLoad(exports, ["getAutoscaleSetting","getAutoscaleSettingOutput"], () => require("./getAutoscaleSetting"));

export { GetAzureMonitorWorkspaceArgs, GetAzureMonitorWorkspaceResult, GetAzureMonitorWorkspaceOutputArgs } from "./getAzureMonitorWorkspace";
export const getAzureMonitorWorkspace: typeof import("./getAzureMonitorWorkspace").getAzureMonitorWorkspace = null as any;
export const getAzureMonitorWorkspaceOutput: typeof import("./getAzureMonitorWorkspace").getAzureMonitorWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getAzureMonitorWorkspace","getAzureMonitorWorkspaceOutput"], () => require("./getAzureMonitorWorkspace"));

export { GetDataCollectionEndpointArgs, GetDataCollectionEndpointResult, GetDataCollectionEndpointOutputArgs } from "./getDataCollectionEndpoint";
export const getDataCollectionEndpoint: typeof import("./getDataCollectionEndpoint").getDataCollectionEndpoint = null as any;
export const getDataCollectionEndpointOutput: typeof import("./getDataCollectionEndpoint").getDataCollectionEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionEndpoint","getDataCollectionEndpointOutput"], () => require("./getDataCollectionEndpoint"));

export { GetDataCollectionRuleArgs, GetDataCollectionRuleResult, GetDataCollectionRuleOutputArgs } from "./getDataCollectionRule";
export const getDataCollectionRule: typeof import("./getDataCollectionRule").getDataCollectionRule = null as any;
export const getDataCollectionRuleOutput: typeof import("./getDataCollectionRule").getDataCollectionRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionRule","getDataCollectionRuleOutput"], () => require("./getDataCollectionRule"));

export { GetDataCollectionRuleAssociationArgs, GetDataCollectionRuleAssociationResult, GetDataCollectionRuleAssociationOutputArgs } from "./getDataCollectionRuleAssociation";
export const getDataCollectionRuleAssociation: typeof import("./getDataCollectionRuleAssociation").getDataCollectionRuleAssociation = null as any;
export const getDataCollectionRuleAssociationOutput: typeof import("./getDataCollectionRuleAssociation").getDataCollectionRuleAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionRuleAssociation","getDataCollectionRuleAssociationOutput"], () => require("./getDataCollectionRuleAssociation"));

export { GetDiagnosticSettingArgs, GetDiagnosticSettingResult, GetDiagnosticSettingOutputArgs } from "./getDiagnosticSetting";
export const getDiagnosticSetting: typeof import("./getDiagnosticSetting").getDiagnosticSetting = null as any;
export const getDiagnosticSettingOutput: typeof import("./getDiagnosticSetting").getDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticSetting","getDiagnosticSettingOutput"], () => require("./getDiagnosticSetting"));

export { GetManagementGroupDiagnosticSettingArgs, GetManagementGroupDiagnosticSettingResult, GetManagementGroupDiagnosticSettingOutputArgs } from "./getManagementGroupDiagnosticSetting";
export const getManagementGroupDiagnosticSetting: typeof import("./getManagementGroupDiagnosticSetting").getManagementGroupDiagnosticSetting = null as any;
export const getManagementGroupDiagnosticSettingOutput: typeof import("./getManagementGroupDiagnosticSetting").getManagementGroupDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getManagementGroupDiagnosticSetting","getManagementGroupDiagnosticSettingOutput"], () => require("./getManagementGroupDiagnosticSetting"));

export { GetMetricAlertArgs, GetMetricAlertResult, GetMetricAlertOutputArgs } from "./getMetricAlert";
export const getMetricAlert: typeof import("./getMetricAlert").getMetricAlert = null as any;
export const getMetricAlertOutput: typeof import("./getMetricAlert").getMetricAlertOutput = null as any;
utilities.lazyLoad(exports, ["getMetricAlert","getMetricAlertOutput"], () => require("./getMetricAlert"));

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

export { GetSubscriptionDiagnosticSettingArgs, GetSubscriptionDiagnosticSettingResult, GetSubscriptionDiagnosticSettingOutputArgs } from "./getSubscriptionDiagnosticSetting";
export const getSubscriptionDiagnosticSetting: typeof import("./getSubscriptionDiagnosticSetting").getSubscriptionDiagnosticSetting = null as any;
export const getSubscriptionDiagnosticSettingOutput: typeof import("./getSubscriptionDiagnosticSetting").getSubscriptionDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getSubscriptionDiagnosticSetting","getSubscriptionDiagnosticSettingOutput"], () => require("./getSubscriptionDiagnosticSetting"));

export { GetTenantActionGroupArgs, GetTenantActionGroupResult, GetTenantActionGroupOutputArgs } from "./getTenantActionGroup";
export const getTenantActionGroup: typeof import("./getTenantActionGroup").getTenantActionGroup = null as any;
export const getTenantActionGroupOutput: typeof import("./getTenantActionGroup").getTenantActionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getTenantActionGroup","getTenantActionGroupOutput"], () => require("./getTenantActionGroup"));

export { ListDiagnosticSettingsCategoryArgs, ListDiagnosticSettingsCategoryResult, ListDiagnosticSettingsCategoryOutputArgs } from "./listDiagnosticSettingsCategory";
export const listDiagnosticSettingsCategory: typeof import("./listDiagnosticSettingsCategory").listDiagnosticSettingsCategory = null as any;
export const listDiagnosticSettingsCategoryOutput: typeof import("./listDiagnosticSettingsCategory").listDiagnosticSettingsCategoryOutput = null as any;
utilities.lazyLoad(exports, ["listDiagnosticSettingsCategory","listDiagnosticSettingsCategoryOutput"], () => require("./listDiagnosticSettingsCategory"));

export { ManagementGroupDiagnosticSettingArgs } from "./managementGroupDiagnosticSetting";
export type ManagementGroupDiagnosticSetting = import("./managementGroupDiagnosticSetting").ManagementGroupDiagnosticSetting;
export const ManagementGroupDiagnosticSetting: typeof import("./managementGroupDiagnosticSetting").ManagementGroupDiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["ManagementGroupDiagnosticSetting"], () => require("./managementGroupDiagnosticSetting"));

export { MetricAlertArgs } from "./metricAlert";
export type MetricAlert = import("./metricAlert").MetricAlert;
export const MetricAlert: typeof import("./metricAlert").MetricAlert = null as any;
utilities.lazyLoad(exports, ["MetricAlert"], () => require("./metricAlert"));

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

export { SubscriptionDiagnosticSettingArgs } from "./subscriptionDiagnosticSetting";
export type SubscriptionDiagnosticSetting = import("./subscriptionDiagnosticSetting").SubscriptionDiagnosticSetting;
export const SubscriptionDiagnosticSetting: typeof import("./subscriptionDiagnosticSetting").SubscriptionDiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["SubscriptionDiagnosticSetting"], () => require("./subscriptionDiagnosticSetting"));

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
            case "azure-native:monitor:ActivityLogAlert":
                return new ActivityLogAlert(name, <any>undefined, { urn })
            case "azure-native:monitor:AutoscaleSetting":
                return new AutoscaleSetting(name, <any>undefined, { urn })
            case "azure-native:monitor:AzureMonitorWorkspace":
                return new AzureMonitorWorkspace(name, <any>undefined, { urn })
            case "azure-native:monitor:DataCollectionEndpoint":
                return new DataCollectionEndpoint(name, <any>undefined, { urn })
            case "azure-native:monitor:DataCollectionRule":
                return new DataCollectionRule(name, <any>undefined, { urn })
            case "azure-native:monitor:DataCollectionRuleAssociation":
                return new DataCollectionRuleAssociation(name, <any>undefined, { urn })
            case "azure-native:monitor:DiagnosticSetting":
                return new DiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:monitor:ManagementGroupDiagnosticSetting":
                return new ManagementGroupDiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:monitor:MetricAlert":
                return new MetricAlert(name, <any>undefined, { urn })
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
            case "azure-native:monitor:SubscriptionDiagnosticSetting":
                return new SubscriptionDiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:monitor:TenantActionGroup":
                return new TenantActionGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "monitor", _module)