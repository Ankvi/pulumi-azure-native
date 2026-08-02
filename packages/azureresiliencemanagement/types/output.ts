import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Drill asset properties.
 */
export interface AssetPropertiesOfDrillResponse {
    /**
     * Region where Drill's internal resources will be created.
     */
    region: string;
    /**
     * Resource group where Drill's internal resources will be created. If not specified, defaults to 'AzureResilienceManagementDrills'. This value is immutable after drill creation.
     */
    resourceGroup?: string;
    /**
     * Subscription where Drill's internal resources will be created.
     */
    subscription: string;
}

/**
 * Definition of associated identity linked with the various resources.
 */
export interface AssociatedIdentityResponse {
    /**
     * Identity type linked with the resource
     */
    type: string;
    /**
     * User assigned identity id linked with the resource
     */
    userAssignedIdentity?: string;
}

/**
 * Reason why the Drill is in NeedsAttention state, and not ready to run.
 */
export interface AttentionReasonResponse {
    /**
     * User MSI associated with chaos experiment object is deleted.
     */
    chaosExperimentUserMsi?: string;
    /**
     * Chaos resource for faulting exists or not.
     */
    chaosResource?: string;
    /**
     * Reason for Chaos Resource Creation failure
     */
    chaosResourceCreationFailureReasons?: string[];
    /**
     * User MSI associated with chaos resource object is deleted.
     */
    chaosResourceUserMsi?: string;
    /**
     * Errors related to Drill Monitoring resources.
     */
    drillMonitoringErrors?: ErrorDetailsResponse[];
    /**
     * Monitoring Resources created for Drill
     */
    drillMonitoringResources: string;
    /**
     * Drill object does not have the necessary RBAC to read the Azure Health Model.
     */
    drillRbacOnAzureHealthModel?: string;
    /**
     * Drill object does not have the necessary RBAC to read the Azure Monitoring Workspace account.
     */
    drillRbacOnAzureMonitoringWorkspace?: string;
    /**
     * Drill object does not have the necessary RBAC to run the chaos resource.
     */
    drillRbacOnChaosResource?: string;
    /**
     * Drill object does not have the necessary RBAC to run the chaos experiment.
     */
    drillRbacOnExperiment?: string;
    /**
     * Drill MSI does not have the necessary RBAC to read the Drill Monitoring resources.
     */
    drillRbacOnMonitoringResources?: string;
    /**
     * Drill object does not have the necessary RBAC to run the Recovery Plan.
     */
    drillRbacOnRecoveryPlan?: string;
    /**
     * Drill object does not have the necessary RBAC to read the SLO object.
     */
    drillRbacOnSlo?: string;
    /**
     * User MSI associated with Drill object is deleted.
     */
    drillUserMsi?: string;
    /**
     * RBAC required by Experiment MSI not setup on the target resources.
     */
    faultRbacOnTargets?: string;
    /**
     * Included resource in Drill.
     */
    includedResourceInDrill?: string;
    /**
     * List of required required Azure resource providers that are not registered in the subscription specified for chaos resource.
     */
    missingRequiredResourceProviders?: string[];
    /**
     * Monitoring RBAC required by Drill MSI not setup on the target resources.
     */
    monitoringRbacOnDrillResources?: string;
    /**
     * Permissions needed by the Drill MSI to read Azure Health Model.
     */
    rbacNeededForDrillOnAzureHealthModel?: string[];
    /**
     * Permissions needed by the Drill MSI to read Azure Monitoring Workspace account.
     */
    rbacNeededForDrillOnAzureMonitoringWorkspace?: string[];
    /**
     * Permissions needed by the Drill MSI to run the chaos resource.
     */
    rbacNeededForDrillOnChaosResource?: string[];
    /**
     * Permissions needed by the Drill MSI to Upload service group health data for monitoring.
     */
    rbacNeededForDrillOnDrillMonitoringResources?: string[];
    /**
     * Permissions needed by the Drill MSI to read health metrics data for resources in service group.
     */
    rbacNeededForDrillOnDrillResources?: string[];
    /**
     * Permissions needed by the Drill MSI to run the chaos experiment.
     */
    rbacNeededForDrillOnExperiment?: string[];
    /**
     * Permissions needed by the Drill MSI to run the Recovery Plan.
     */
    rbacNeededForDrillOnRecoveryPlan?: string[];
    /**
     * Permissions needed by the Drill MSI to read SLO object.
     */
    rbacNeededForDrillOnSlo?: string[];
    /**
     * RBAC required by Chaos Resource MSI not setup on the target resources.
     */
    rbacOnTargetResources?: string;
    /**
     * Resources associated in Recovery Plan and Drill are out of sync.
     */
    recoveryPlanAndDrillResourcesState?: string;
    /**
     * Associated RO ready or not.
     */
    roReadiness?: string;
    /**
     * RBAC required by AutomationAccount for runbook MSI not setup on the target resources.
     */
    runbookFaultRbacOnTargets?: string;
    /**
     * Resources in Service Group and Drill are out of sync.
     */
    serviceGroupAndDrillResourcesState?: string;
    /**
     * One or more Target or Capability object is deleted.
     */
    targets?: string;
}

/**
 * Chaos Experiment properties.
 */
export interface ChaosExperimentPropertiesOfDrillResponse {
    /**
     * Chaos Experiment resource created for this Drill
     */
    chaosExperimentId: string;
    /**
     * Identity to be used by the Chaos Experiment for invoking faults on resources.
     */
    chaosExperimentIdentityForFaults?: AssociatedIdentityResponse;
    /**
     * Duration of faults.
     */
    faultDurationInMin: number;
    /**
     * Identity to use for Chaos Experiment operations.
     */
    identity?: AssociatedIdentityResponse;
    /**
     * Region for chaosExperiment resource.
     */
    region?: string;
    /**
     * Subscription for chaosExperiment resource.
     */
    subscription?: string;
}

/**
 * Chaos Resource properties.
 */
export interface ChaosResourcePropertiesOfDrillResponse {
    /**
     * Chaos Resource created for this Drill
     */
    chaosResourceId: string;
    /**
     * Identity to be used by the Chaos Resource for invoking faults on resources.
     */
    chaosResourceIdentityForFaults: AssociatedIdentityResponse;
    /**
     * Duration of faults.
     */
    faultDurationInMin: number;
    /**
     * Identity to use for Chaos Resource operations.
     */
    identity: AssociatedIdentityResponse;
}

/**
 * Definition of enrollment properties.
 */
export interface EnrollmentPropertiesResponse {
    /**
     * Details of any errors encountered during Enrollment create or update.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * Provisioning state of the enrollment.
     */
    provisioningState: string;
    /**
     * ARM resource identifier of the service group associated with this usage plan.
     */
    serviceGroupId: string;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
}

/**
 * Errors in T&C / RBAC assignment.
 */
export interface ErrorDetailsResponse {
    /**
     * Error code.
     */
    code: string;
    /**
     * Error message.
     */
    message: string;
    /**
     * A list of recommendations to resolve the error.
     */
    recommendations?: string[];
}

/**
 * Definition of goal assignment property.
 */
export interface GoalAssignmentPropertiesResponse {
    /**
     * Details of any errors encountered during the operation.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * The type of goal assignment.
     */
    goalAssignmentType: string;
    /**
     * Arm id of the goal template.
     */
    goalTemplateId: string;
    /**
     * Provisioning state
     */
    provisioningState: string;
    /**
     * List of service level resources.
     */
    serviceLevelResources?: ServiceLevelResourceResponse[];
}

/**
 * Definition of goal template property.
 */
export interface GoalTemplatePropertiesResponse {
    /**
     * Details of any errors encountered during the operation.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * Type of Goal Template created by customer
     */
    goalType: string;
    /**
     * Provisioning state
     */
    provisioningState: string;
    /**
     * Regional recovery point objective specified by customer. eg, PT15M for 15 minutes
     */
    regionalRecoveryPointObjective?: string;
    /**
     * Regional recovery time objective specified by customer. eg, PT15M for 15 minutes
     */
    regionalRecoveryTimeObjective?: string;
    /**
     * Option specified by customer under disaster recovery section of goal template
     */
    requireDisasterRecovery?: string;
    /**
     * Option specified by customer under high availability section of goal template
     */
    requireHighAvailability?: string;
}

/**
 * Health Model properties.
 */
export interface HealthModelPropertiesOfDrillResponse {
    /**
     * Full ARM Id of the Health Model.
     */
    healthModelId: string;
    /**
     * Identity to use for Health Model operations.
     */
    identity: AssociatedIdentityResponse;
}

/**
 * Definition of Last Run properties.
 */
export interface LastRunPropertiesResponse {
    /**
     * Attestation state of the last run of this Drill.
     */
    lastRunAttestation: string;
    /**
     * Timespan of the last run of this Drill.
     */
    lastRunDuration: string;
    /**
     * Status of the last run of this Drill.
     */
    lastRunState: string;
    /**
     * Timestamp of the last run of this Drill.
     */
    lastRunTime: string;
}

/**
 * Configuration of the managed on behalf of resource.
 */
export interface ManagedOnBehalfOfConfigurationResponse {
    /**
     * Associated MoboBrokerResources.
     */
    moboBrokerResources: MoboBrokerResourceResponse[];
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Metrics properties.
 */
export interface MetricsPropertiesOfDrillResponse {
    /**
     * Identity to use for metrics operations.
     */
    identity: AssociatedIdentityResponse;
    /**
     * Metrics associated with this Drill. These will be tracked through the Drill Run.
     */
    metricsToTrack: MetricsToTrackResponse[];
}

/**
 * Metrics object
 */
export interface MetricsToTrackResponse {
    /**
     * Destination AMW account where the time-series data of the metric lives.
     */
    destinationAmwAccountUrl: string;
    /**
     * Full url of the metric.
     */
    metricId: string;
    /**
     * Name of the metric.
     */
    metricName: string;
}

/**
 * MoboBroker resource.
 */
export interface MoboBrokerResourceResponse {
    /**
     * The fully qualified resource ID of the MoboBroker resource.
     * Example: `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}`
     */
    id: string;
}

/**
 * Drill monitoring properties.
 */
export interface MonitoringPropertiesOfDrillResponse {
    /**
     * Full ARM Id of the Data collection endpoint created by Resiliency service which will route data for service group and its resources.
     */
    dataCollectionEndpointId: string;
    /**
     * Identity to use for Drill monitoring operations.
     */
    identity?: AssociatedIdentityResponse;
    /**
     * Full ARM Id of the Log analytics workspace created by Resiliency service where health data is collected.
     */
    logAnalyticsWorkspaceId: string;
    /**
     * Full ARM Id of the Data collection rule created by Resiliency service which will route data for RAW health data for service group resources.
     */
    rawMetricsDataCollectionRuleId: string;
    /**
     * Full ARM Id of the Data collection rule created by Resiliency service which will route data for Aggregate health data of service group.
     */
    serviceGroupMetricsDataCollectionRuleId: string;
}

/**
 * Defines a custom runbook action for the recovery orchestration group.
 */
export interface RecoveryGroupCustomRunbookActionResponse {
    /**
     * The ARM Resource ID of the resource that includes the actionable script, such as a Runbook in an Automation Account.
     */
    actionResourceId?: string;
    /**
     * The identity associated with actionResourceId for RBAC.
     */
    associatedIdentity?: AssociatedIdentityResponse;
    /**
     * A description of the recovery orchestration group action, containing the instructions to be performed during this action.
     */
    description?: string;
    /**
     * The name of the recovery orchestration group action.
     */
    name: string;
    /**
     * Key-value parameters for the operation.
     */
    parameters?: {[key: string]: string};
    /**
     * The maximum amount of time, in minutes, allowed for the action to complete before it times out.
     */
    timeoutInMinutes: number;
    /**
     * Specifies the type of recovery orchestration group actions.
     * Expected value is 'CustomRunbook'.
     */
    type: "CustomRunbook";
}

/**
 * Defines a manual action for the recovery orchestration group.
 */
export interface RecoveryGroupManualActionResponse {
    /**
     * A description of the recovery orchestration group action, containing the instructions to be performed during this action.
     */
    description?: string;
    /**
     * The name of the recovery orchestration group action.
     */
    name: string;
    /**
     * The maximum amount of time, in minutes, allowed for the action to complete before it times out.
     */
    timeoutInMinutes: number;
    /**
     * Specifies the type of recovery orchestration group actions.
     * Expected value is 'ManualAction'.
     */
    type: "ManualAction";
}

/**
 * Properties of the recovery orchestration group.
 */
export interface RecoveryGroupPropertiesResponse {
    /**
     * A description of the recovery orchestration group.
     */
    description: string;
    /**
     * A unique id for the recovery orchestration group, which is a GUID.
     */
    groupUniqueId: string;
    /**
     * The order ID of the recovery orchestration group.
     */
    orderId: number;
    /**
     * Post-actions for the recovery orchestration group.
     */
    postActions?: (RecoveryGroupCustomRunbookActionResponse | RecoveryGroupManualActionResponse)[];
    /**
     * Pre-actions for the recovery orchestration group.
     */
    preActions?: (RecoveryGroupCustomRunbookActionResponse | RecoveryGroupManualActionResponse)[];
}

/**
 * Represents a recovery orchestration group resource in the Azure Resilience Management provider namespace.
 */
export interface RecoveryGroupResponse {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource-specific properties for this resource.
     */
    properties?: RecoveryGroupPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Settings for the recovery orchestration groups.
 */
export interface RecoveryGroupsSettingResponse {
    /**
     * Additional recovery orchestration group settings.
     */
    additionalGroups?: RecoveryGroupResponse[];
    /**
     * The default recovery orchestration group setting. Every recovery orchestration plan has a default recovery orchestration group.
     */
    defaultGroup: RecoveryGroupResponse;
}

/**
 * Details of the recovery orchestration plan failover operation execution.
 */
export interface RecoveryPlanFailoverOperationStatusResponse {
    /**
     * Error details for the most recent execution of the recovery orchestration plan.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * The most recent execution time of the recovery orchestration plan in UTC.
     */
    lastExecutedAt: string;
    /**
     * The status of the most recent execution of the recovery orchestration plan.
     */
    operationStatus: string;
    /**
     * The actual recovery time of the most recent recovery orchestration plan.
     */
    recoveryTimeActual: string;
}

/**
 * Details of the recovery orchestration plan operation execution.
 */
export interface RecoveryPlanOperationStatusResponse {
    /**
     * Error details for the most recent execution of the recovery orchestration plan.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * The most recent execution time of the recovery orchestration plan in UTC.
     */
    lastExecutedAt: string;
    /**
     * The status of the most recent execution of the recovery orchestration plan.
     */
    operationStatus: string;
}

/**
 * RecoveryPlan properties.
 */
export interface RecoveryPlanPropertiesOfDrillResponse {
    /**
     * Identity to use for RecoveryPlan operations.
     */
    identity: AssociatedIdentityResponse;
    /**
     * Recovery Orchestration plan associated with this Drill.
     */
    recoveryPlanId: string;
    /**
     * Excluded resource count in RecoveryPlan.
     */
    recoveryPlanResourceExcludedCount: number;
}

/**
 * Properties of the recovery orchestration plan.
 */
export interface RecoveryPlanPropertiesResponse {
    /**
     * Error details associated with the resource.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * The status of the most recent failover operation executed.
     */
    latestFailoverStatus: RecoveryPlanFailoverOperationStatusResponse;
    /**
     * The status of the most recent validation performed.
     */
    latestValidationStatus: RecoveryPlanOperationStatusResponse;
    /**
     * A description of the recovery orchestration plan.
     */
    planDescription: string;
    /**
     * The current state of the recovery orchestration plan.
     */
    planState: string;
    /**
     * The provisioning state of the recovery orchestration plan.
     */
    provisioningState: string;
    /**
     * Settings for the recovery orchestration groups associated with the recovery orchestration plan.
     */
    recoveryGroupsSetting: RecoveryGroupsSettingResponse;
}

/**
 * Definition of Regional Drill properties.
 */
export interface RegionalDrillPropertiesResponse {
    /**
     * Attention reason if the ReadinessState is 'NeedsAttention'.
     */
    attentionReason: AttentionReasonResponse;
    /**
     * Chaos Experiment properties.
     */
    chaosExperimentProperties?: ChaosExperimentPropertiesOfDrillResponse;
    /**
     * Chaos Resource properties.
     */
    chaosResourceProperties?: ChaosResourcePropertiesOfDrillResponse;
    /**
     * Properties for internal resources that are created for the Drill.
     */
    drillAssetProperties?: AssetPropertiesOfDrillResponse;
    /**
     * Enum for Drill type object hierarchy.
     * Expected value is 'Regional'.
     */
    drillType?: "Regional";
    /**
     * Error details associated with the resource.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * Readiness state of the Drill.
     */
    executionReadinessState: string;
    /**
     * Execution state of the Drill. Whether it is currently running or not.
     */
    executionState: string;
    /**
     * HealthModel properties.
     */
    healthModelProperties?: HealthModelPropertiesOfDrillResponse;
    /**
     * Last resync and readiness check time.
     */
    lastResyncReadinessCheckTime: string;
    /**
     * Last run properties.
     */
    lastRunProperties: LastRunPropertiesResponse;
    /**
     * Last sync time.
     */
    lastSyncTime: string;
    /**
     * Managed RG v2 properties.
     */
    managedOnBehalfOfConfiguration: ManagedOnBehalfOfConfigurationResponse;
    /**
     * Metric properties.
     */
    metricsProperties?: MetricsPropertiesOfDrillResponse;
    /**
     * Monitoring properties of the Drill.
     */
    monitoringProperties?: MonitoringPropertiesOfDrillResponse;
    /**
     * Status of the last operation.
     */
    provisioningState: string;
    /**
     * RBAC setup mode.
     */
    rbacSetupMode?: string;
    /**
     * ROPlan properties.
     */
    recoveryPlanProperties?: RecoveryPlanPropertiesOfDrillResponse;
    /**
     * Parent SG resource.
     */
    serviceGroupId: string;
    /**
     * Internal System Metadata, to be used by internal components only.
     */
    systemMetadata: SystemMetadataResponse;
}

/**
 * The Service level resource model
 */
export interface ServiceLevelResourceResponse {
    /**
     * The arm id of the service level indicator resource
     */
    serviceLevelIndicatorResourceId: string;
    /**
     * The arm id of the service level object resource
     */
    serviceLevelObjectiveResourceId: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Internal System Metadata, to be used by internal components only.
 */
export interface SystemMetadataResponse {
    /**
     * Indicates if the Initial system configuration of the Drill is complete or not.
     */
    initialConfig: string;
    /**
     * An indication whether a intrested resource type is present in drill resource.
     */
    resourceTypeCategories: string[];
}

/**
 * Definition of usage plan properties.
 */
export interface UsagePlanPropertiesResponse {
    /**
     * Details of any errors encountered during Usage Plan create or update.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * The type of the usage plan.
     */
    planType?: string;
    /**
     * Provisioning state of the usage plan.
     */
    provisioningState: string;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * Definition of Zonal Drill properties.
 */
export interface ZonalDrillPropertiesResponse {
    /**
     * Attention reason if the ReadinessState is 'NeedsAttention'.
     */
    attentionReason: AttentionReasonResponse;
    /**
     * Chaos Experiment properties.
     */
    chaosExperimentProperties?: ChaosExperimentPropertiesOfDrillResponse;
    /**
     * Chaos Resource properties.
     */
    chaosResourceProperties?: ChaosResourcePropertiesOfDrillResponse;
    /**
     * Properties for internal resources that are created for the Drill.
     */
    drillAssetProperties?: AssetPropertiesOfDrillResponse;
    /**
     * Enum for Drill type object hierarchy.
     * Expected value is 'Zonal'.
     */
    drillType?: "Zonal";
    /**
     * Error details associated with the resource.
     */
    errorDetails: ErrorDetailResponse;
    /**
     * Readiness state of the Drill.
     */
    executionReadinessState: string;
    /**
     * Execution state of the Drill. Whether it is currently running or not.
     */
    executionState: string;
    /**
     * HealthModel properties.
     */
    healthModelProperties?: HealthModelPropertiesOfDrillResponse;
    /**
     * Last resync and readiness check time.
     */
    lastResyncReadinessCheckTime: string;
    /**
     * Last run properties.
     */
    lastRunProperties: LastRunPropertiesResponse;
    /**
     * Last sync time.
     */
    lastSyncTime: string;
    /**
     * Managed RG v2 properties.
     */
    managedOnBehalfOfConfiguration: ManagedOnBehalfOfConfigurationResponse;
    /**
     * Metric properties.
     */
    metricsProperties?: MetricsPropertiesOfDrillResponse;
    /**
     * Monitoring properties of the Drill.
     */
    monitoringProperties?: MonitoringPropertiesOfDrillResponse;
    /**
     * Status of the last operation.
     */
    provisioningState: string;
    /**
     * RBAC setup mode.
     */
    rbacSetupMode?: string;
    /**
     * ROPlan properties.
     */
    recoveryPlanProperties?: RecoveryPlanPropertiesOfDrillResponse;
    /**
     * Parent SG resource.
     */
    serviceGroupId: string;
    /**
     * Internal System Metadata, to be used by internal components only.
     */
    systemMetadata: SystemMetadataResponse;
    /**
     * An indication whether a VM is included in this Zonal Drill. If not, RO is not needed.
     */
    vmsPresent: string;
}
