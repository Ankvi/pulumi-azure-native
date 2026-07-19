import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Drill asset properties.
 */
export interface AssetPropertiesOfDrillArgs {
    /**
     * Region where Drill's internal resources will be created.
     */
    region: pulumi.Input<string>;
    /**
     * Resource group where Drill's internal resources will be created. If not specified, defaults to 'AzureResilienceManagementDrills'. This value is immutable after drill creation.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * Subscription where Drill's internal resources will be created.
     */
    subscription: pulumi.Input<string>;
}

/**
 * Definition of associated identity linked with the various resources.
 */
export interface AssociatedIdentityArgs {
    /**
     * Identity type linked with the resource
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * User assigned identity id linked with the resource
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * Chaos Experiment properties.
 */
export interface ChaosExperimentPropertiesOfDrillArgs {
    /**
     * Identity to be used by the Chaos Experiment for invoking faults on resources.
     */
    chaosExperimentIdentityForFaults?: pulumi.Input<AssociatedIdentityArgs>;
    /**
     * Identity to use for Chaos Experiment operations.
     */
    identity?: pulumi.Input<AssociatedIdentityArgs>;
    /**
     * Region for chaosExperiment resource.
     */
    region?: pulumi.Input<string>;
    /**
     * Subscription for chaosExperiment resource.
     */
    subscription?: pulumi.Input<string>;
}

/**
 * Chaos Resource properties.
 */
export interface ChaosResourcePropertiesOfDrillArgs {
    /**
     * Identity to be used by the Chaos Resource for invoking faults on resources.
     */
    chaosResourceIdentityForFaults: pulumi.Input<AssociatedIdentityArgs>;
    /**
     * Identity to use for Chaos Resource operations.
     */
    identity: pulumi.Input<AssociatedIdentityArgs>;
}

/**
 * Definition of enrollment properties.
 */
export interface EnrollmentPropertiesArgs {
    /**
     * ARM resource identifier of the service group associated with this usage plan.
     */
    serviceGroupId: pulumi.Input<string>;
}

/**
 * Definition of goal assignment property.
 */
export interface GoalAssignmentPropertiesArgs {
    /**
     * The type of goal assignment.
     */
    goalAssignmentType: pulumi.Input<string | enums.GoalAssignmentType>;
    /**
     * Arm id of the goal template.
     */
    goalTemplateId: pulumi.Input<string>;
    /**
     * List of service level resources.
     */
    serviceLevelResources?: pulumi.Input<pulumi.Input<ServiceLevelResourceArgs>[]>;
}

/**
 * Definition of goal template property.
 */
export interface GoalTemplatePropertiesArgs {
    /**
     * Type of Goal Template created by customer
     */
    goalType: pulumi.Input<string | enums.GoalType>;
    /**
     * Regional recovery point objective specified by customer. eg, PT15M for 15 minutes
     */
    regionalRecoveryPointObjective?: pulumi.Input<string>;
    /**
     * Regional recovery time objective specified by customer. eg, PT15M for 15 minutes
     */
    regionalRecoveryTimeObjective?: pulumi.Input<string>;
    /**
     * Option specified by customer under disaster recovery section of goal template
     */
    requireDisasterRecovery?: pulumi.Input<string | enums.RequirementSelected>;
    /**
     * Option specified by customer under high availability section of goal template
     */
    requireHighAvailability?: pulumi.Input<string | enums.RequirementSelected>;
}

/**
 * Health Model properties.
 */
export interface HealthModelPropertiesOfDrillArgs {
    /**
     * Full ARM Id of the Health Model.
     */
    healthModelId: pulumi.Input<string>;
    /**
     * Identity to use for Health Model operations.
     */
    identity: pulumi.Input<AssociatedIdentityArgs>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Metrics properties.
 */
export interface MetricsPropertiesOfDrillArgs {
    /**
     * Identity to use for metrics operations.
     */
    identity: pulumi.Input<AssociatedIdentityArgs>;
    /**
     * Metrics associated with this Drill. These will be tracked through the Drill Run.
     */
    metricsToTrack: pulumi.Input<pulumi.Input<MetricsToTrackArgs>[]>;
}

/**
 * Metrics object
 */
export interface MetricsToTrackArgs {
    /**
     * Destination AMW account where the time-series data of the metric lives.
     */
    destinationAmwAccountUrl: pulumi.Input<string>;
    /**
     * Full url of the metric.
     */
    metricId: pulumi.Input<string>;
    /**
     * Name of the metric.
     */
    metricName: pulumi.Input<string>;
}

/**
 * Drill monitoring properties.
 */
export interface MonitoringPropertiesOfDrillArgs {
    /**
     * Identity to use for Drill monitoring operations.
     */
    identity?: pulumi.Input<AssociatedIdentityArgs>;
}

/**
 * Represents a recovery orchestration group resource in the Azure Resilience Management provider namespace.
 */
export interface RecoveryGroupArgs {
    /**
     * The resource-specific properties for this resource.
     */
    properties?: pulumi.Input<RecoveryGroupPropertiesArgs>;
}

/**
 * Defines a custom runbook action for the recovery orchestration group.
 */
export interface RecoveryGroupCustomRunbookActionArgs {
    /**
     * The ARM Resource ID of the resource that includes the actionable script, such as a Runbook in an Automation Account.
     */
    actionResourceId?: pulumi.Input<string>;
    /**
     * The identity associated with actionResourceId for RBAC.
     */
    associatedIdentity?: pulumi.Input<AssociatedIdentityArgs>;
    /**
     * A description of the recovery orchestration group action, containing the instructions to be performed during this action.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the recovery orchestration group action.
     */
    name: pulumi.Input<string>;
    /**
     * Key-value parameters for the operation.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The maximum amount of time, in minutes, allowed for the action to complete before it times out.
     */
    timeoutInMinutes: pulumi.Input<number>;
    /**
     * Specifies the type of recovery orchestration group actions.
     * Expected value is 'CustomRunbook'.
     */
    type: pulumi.Input<"CustomRunbook">;
}

/**
 * Defines a manual action for the recovery orchestration group.
 */
export interface RecoveryGroupManualActionArgs {
    /**
     * A description of the recovery orchestration group action, containing the instructions to be performed during this action.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the recovery orchestration group action.
     */
    name: pulumi.Input<string>;
    /**
     * The maximum amount of time, in minutes, allowed for the action to complete before it times out.
     */
    timeoutInMinutes: pulumi.Input<number>;
    /**
     * Specifies the type of recovery orchestration group actions.
     * Expected value is 'ManualAction'.
     */
    type: pulumi.Input<"ManualAction">;
}

/**
 * Properties of the recovery orchestration group.
 */
export interface RecoveryGroupPropertiesArgs {
    /**
     * A description of the recovery orchestration group.
     */
    description: pulumi.Input<string>;
    /**
     * A unique id for the recovery orchestration group, which is a GUID.
     */
    groupUniqueId: pulumi.Input<string>;
    /**
     * The order ID of the recovery orchestration group.
     */
    orderId: pulumi.Input<number>;
    /**
     * Post-actions for the recovery orchestration group.
     */
    postActions?: pulumi.Input<pulumi.Input<RecoveryGroupCustomRunbookActionArgs | RecoveryGroupManualActionArgs>[]>;
    /**
     * Pre-actions for the recovery orchestration group.
     */
    preActions?: pulumi.Input<pulumi.Input<RecoveryGroupCustomRunbookActionArgs | RecoveryGroupManualActionArgs>[]>;
}

/**
 * Settings for the recovery orchestration groups.
 */
export interface RecoveryGroupsSettingArgs {
    /**
     * Additional recovery orchestration group settings.
     */
    additionalGroups?: pulumi.Input<pulumi.Input<RecoveryGroupArgs>[]>;
    /**
     * The default recovery orchestration group setting. Every recovery orchestration plan has a default recovery orchestration group.
     */
    defaultGroup: pulumi.Input<RecoveryGroupArgs>;
}

/**
 * Properties of the recovery orchestration plan.
 */
export interface RecoveryPlanPropertiesArgs {
    /**
     * A description of the recovery orchestration plan.
     */
    planDescription: pulumi.Input<string>;
    /**
     * The type of the recovery orchestration plan, which can be set during creation but cannot be changed afterward.
     */
    planType: pulumi.Input<string | enums.RecoveryPlanType>;
    /**
     * Settings for the recovery orchestration groups associated with the recovery orchestration plan.
     */
    recoveryGroupsSetting: pulumi.Input<RecoveryGroupsSettingArgs>;
}

/**
 * RecoveryPlan properties.
 */
export interface RecoveryPlanPropertiesOfDrillArgs {
    /**
     * Identity to use for RecoveryPlan operations.
     */
    identity: pulumi.Input<AssociatedIdentityArgs>;
}

/**
 * Definition of Regional Drill properties.
 */
export interface RegionalDrillPropertiesArgs {
    /**
     * Chaos Experiment properties.
     */
    chaosExperimentProperties?: pulumi.Input<ChaosExperimentPropertiesOfDrillArgs>;
    /**
     * Chaos Resource properties.
     */
    chaosResourceProperties?: pulumi.Input<ChaosResourcePropertiesOfDrillArgs>;
    /**
     * Properties for internal resources that are created for the Drill.
     */
    drillAssetProperties?: pulumi.Input<AssetPropertiesOfDrillArgs>;
    /**
     * Enum for Drill type object hierarchy.
     * Expected value is 'Regional'.
     */
    drillType: pulumi.Input<"Regional">;
    /**
     * HealthModel properties.
     */
    healthModelProperties?: pulumi.Input<HealthModelPropertiesOfDrillArgs>;
    /**
     * Metric properties.
     */
    metricsProperties?: pulumi.Input<MetricsPropertiesOfDrillArgs>;
    /**
     * Monitoring properties of the Drill.
     */
    monitoringProperties?: pulumi.Input<MonitoringPropertiesOfDrillArgs>;
    /**
     * RBAC setup mode.
     */
    rbacSetupMode?: pulumi.Input<string | enums.RBACSetupMode>;
    /**
     * ROPlan properties.
     */
    recoveryPlanProperties?: pulumi.Input<RecoveryPlanPropertiesOfDrillArgs>;
}

/**
 * The Service level resource model
 */
export interface ServiceLevelResourceArgs {
    /**
     * The arm id of the service level indicator resource
     */
    serviceLevelIndicatorResourceId: pulumi.Input<string>;
    /**
     * The arm id of the service level object resource
     */
    serviceLevelObjectiveResourceId: pulumi.Input<string>;
}

/**
 * Definition of usage plan properties.
 */
export interface UsagePlanPropertiesArgs {
    /**
     * The type of the usage plan.
     */
    planType?: pulumi.Input<string | enums.UsagePlanType>;
}

/**
 * Definition of Zonal Drill properties.
 */
export interface ZonalDrillPropertiesArgs {
    /**
     * Chaos Experiment properties.
     */
    chaosExperimentProperties?: pulumi.Input<ChaosExperimentPropertiesOfDrillArgs>;
    /**
     * Chaos Resource properties.
     */
    chaosResourceProperties?: pulumi.Input<ChaosResourcePropertiesOfDrillArgs>;
    /**
     * Properties for internal resources that are created for the Drill.
     */
    drillAssetProperties?: pulumi.Input<AssetPropertiesOfDrillArgs>;
    /**
     * Enum for Drill type object hierarchy.
     * Expected value is 'Zonal'.
     */
    drillType: pulumi.Input<"Zonal">;
    /**
     * HealthModel properties.
     */
    healthModelProperties?: pulumi.Input<HealthModelPropertiesOfDrillArgs>;
    /**
     * Metric properties.
     */
    metricsProperties?: pulumi.Input<MetricsPropertiesOfDrillArgs>;
    /**
     * Monitoring properties of the Drill.
     */
    monitoringProperties?: pulumi.Input<MonitoringPropertiesOfDrillArgs>;
    /**
     * RBAC setup mode.
     */
    rbacSetupMode?: pulumi.Input<string | enums.RBACSetupMode>;
    /**
     * ROPlan properties.
     */
    recoveryPlanProperties?: pulumi.Input<RecoveryPlanPropertiesOfDrillArgs>;
}
