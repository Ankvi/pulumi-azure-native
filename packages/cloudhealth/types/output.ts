import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Alert configuration details
 */
export interface AlertConfigurationResponse {
    /**
     * Optional list of action group resource IDs to be notified when the alert is triggered.
     */
    actionGroupIds?: string[];
    /**
     * The alert rule description.
     */
    description?: string;
    /**
     * The severity of triggered alert.
     */
    severity: string;
}

/**
 * A grouping of signal assignments for a Azure Monitor Workspace
 */
export interface AzureMonitorWorkspaceSignalGroupResponse {
    /**
     * Reference to the name of the authentication setting which is used for querying the data source
     */
    authenticationSetting: string;
    /**
     * Azure Monitor workspace resource ID
     */
    azureMonitorWorkspaceResourceId: string;
    /**
     * Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.
     */
    signalAssignments?: SignalAssignmentResponse[];
}

/**
 * A grouping of signal assignments for an Azure resource
 */
export interface AzureResourceSignalGroupResponse {
    /**
     * Reference to the name of the authentication setting which is used for querying the data source
     */
    authenticationSetting: string;
    /**
     * Azure resource ID
     */
    azureResourceId: string;
    /**
     * Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.
     */
    signalAssignments?: SignalAssignmentResponse[];
}

/**
 * Properties for dependent entities, i.e. child entities
 */
export interface DependenciesSignalGroupResponse {
    /**
     * Aggregation type for child dependencies.
     */
    aggregationType: string;
    /**
     * Degraded threshold for aggregating the propagated health state of child dependencies. Can be either an absolute number that is greater than 0, or a percentage between 1-100%. The entity will be considered degraded when the number of not healthy child dependents (unhealthy, degraded, unknown) is equal to or above the threshold value. Must only be set when AggregationType is 'Thresholds'.
     */
    degradedThreshold?: string;
    /**
     * Unhealthy threshold for aggregating the propagated health state of child dependencies. Can be either an absolute number that is greater than 0, or a percentage between 1-100%. The entity will be considered unhealthy when the number of not healthy child dependents (unhealthy, degraded, unknown) is equal to or above the threshold value. Must only be set when AggregationType is 'Thresholds'.
     */
    unhealthyThreshold?: string;
}
/**
 * dependenciesSignalGroupResponseProvideDefaults sets the appropriate defaults for DependenciesSignalGroupResponse
 */
export function dependenciesSignalGroupResponseProvideDefaults(val: DependenciesSignalGroupResponse): DependenciesSignalGroupResponse {
    return {
        ...val,
        aggregationType: (val.aggregationType) ?? "WorstOf",
    };
}

/**
 * Discovery rule properties
 */
export interface DiscoveryRulePropertiesResponse {
    /**
     * Whether to add all recommended signals to the discovered entities.
     */
    addRecommendedSignals: string;
    /**
     * Reference to the name of the authentication setting which is used for querying Azure Resource Graph. The same authentication setting will also be assigned to any discovered entities.
     */
    authenticationSetting: string;
    /**
     * Date when the discovery rule was (soft-)deleted.
     */
    deletionDate: string;
    /**
     * Whether to create relationships between the discovered entities based on a set of built-in rules. These relationships cannot be manually deleted.
     */
    discoverRelationships: string;
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Name of the entity which represents the discovery rule. Note: It might take a few minutes after creating the discovery rule until the entity is created.
     */
    entityName: string;
    /**
     * Error message if the last discovery operation failed.
     */
    errorMessage: string;
    /**
     * Number of discovered entities in the last discovery operation.
     */
    numberOfDiscoveredEntities: number;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Azure Resource Graph query text in KQL syntax. The query must return at least a column named 'id' which contains the resource ID of the discovered resources.
     */
    resourceGraphQuery: string;
}

/**
 * ML-based evaluation rule for a signal definition
 */
export interface DynamicDetectionRuleResponse {
    /**
     * Threshold direction
     */
    dynamicThresholdDirection: string;
    /**
     * ML model to use for dynamic thresholds
     */
    dynamicThresholdModel: string;
    /**
     * ML model sensitivity. Lowest value = high sensitivity. Supported step size = 0.5
     */
    modelSensitivity: number;
    /**
     * Start time of the training in UTC.
     */
    trainingStartTime?: string;
}

/**
 * Alert configuration for an entity
 */
export interface EntityAlertsResponse {
    /**
     * Alert to be triggered on state change to degraded
     */
    degraded?: AlertConfigurationResponse;
    /**
     * Alert to be triggered on state change to unhealthy
     */
    unhealthy?: AlertConfigurationResponse;
}

/**
 * Visual position of the entity
 */
export interface EntityCoordinatesResponse {
    /**
     * X Coordinate
     */
    x: number;
    /**
     * Y Coordinate
     */
    y: number;
}

/**
 * Properties which are common across all kinds of entities
 */
export interface EntityPropertiesResponse {
    /**
     * Alert configuration for this entity
     */
    alerts?: EntityAlertsResponse;
    /**
     * Positioning of the entity on the model canvas
     */
    canvasPosition?: EntityCoordinatesResponse;
    /**
     * Date when the entity was (soft-)deleted
     */
    deletionDate: string;
    /**
     * Discovered by which discovery rule. If set, the entity cannot be deleted manually.
     */
    discoveredBy: string;
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Health objective as a percentage of time the entity should be healthy.
     */
    healthObjective?: number;
    /**
     * Health state of this entity
     */
    healthState: string;
    /**
     * Visual icon definition. If not set, a default icon is used.
     */
    icon?: IconDefinitionResponse;
    /**
     * Impact of the entity in health state propagation
     */
    impact?: string;
    /**
     * Entity kind
     */
    kind?: string;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: {[key: string]: string};
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Signal groups which are assigned to this entity
     */
    signals?: SignalGroupResponse;
}
/**
 * entityPropertiesResponseProvideDefaults sets the appropriate defaults for EntityPropertiesResponse
 */
export function entityPropertiesResponseProvideDefaults(val: EntityPropertiesResponse): EntityPropertiesResponse {
    return {
        ...val,
        impact: (val.impact) ?? "Standard",
        kind: (val.kind) ?? "Default",
        signals: (val.signals ? signalGroupResponseProvideDefaults(val.signals) : undefined),
    };
}

/**
 * Evaluation rule for a signal definition
 */
export interface EvaluationRuleResponse {
    /**
     * Degraded rule with static threshold. When used, dynamicDetectionRule must not be set.
     */
    degradedRule?: ThresholdRuleResponse;
    /**
     * Configure to use ML-based dynamic thresholds. When used, degradedRule and unhealthyRule must not be set.
     */
    dynamicDetectionRule?: DynamicDetectionRuleResponse;
    /**
     * Unhealthy rule with static threshold. When used, dynamicDetectionRule must not be set.
     */
    unhealthyRule?: ThresholdRuleResponse;
}

/**
 * HealthModel properties
 */
export interface HealthModelPropertiesResponse {
    /**
     * The data plane endpoint for interacting with health data
     */
    dataplaneEndpoint: string;
    /**
     * Configure to automatically discover entities from a given scope, such as a Service Group. The discovered entities will be linked to the root entity of the health model.
     */
    discovery?: ModelDiscoverySettingsResponse;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

/**
 * Visual icon definition of an entity
 */
export interface IconDefinitionResponse {
    /**
     * Custom data. Base64-encoded SVG data. If set, this overrides the built-in icon.
     */
    customData?: string;
    /**
     * Name of the built-in icon, or 'Custom' to use customData
     */
    iconName: string;
}

/**
 * Log Analytics Query Signal Definition properties
 */
export interface LogAnalyticsQuerySignalDefinitionPropertiesResponse {
    /**
     * Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
     */
    dataUnit?: string;
    /**
     * Date when the signal definition was (soft-)deleted
     */
    deletionDate: string;
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Evaluation rules for the signal definition
     */
    evaluationRules: EvaluationRuleResponse;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: {[key: string]: string};
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Query text in KQL syntax
     */
    queryText: string;
    /**
     * Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
     */
    refreshInterval?: string;
    /**
     * Supported signal kinds as discriminator
     * Expected value is 'LogAnalyticsQuery'.
     */
    signalKind: "LogAnalyticsQuery";
    /**
     * Time range of signal. ISO duration format like PT10M. If not specified, the KQL query must define a time range.
     */
    timeGrain?: string;
    /**
     * Name of the column in the result set to evaluate against the thresholds. Defaults to the first column in the result set if not specified. The column must be numeric.
     */
    valueColumnName?: string;
}
/**
 * logAnalyticsQuerySignalDefinitionPropertiesResponseProvideDefaults sets the appropriate defaults for LogAnalyticsQuerySignalDefinitionPropertiesResponse
 */
export function logAnalyticsQuerySignalDefinitionPropertiesResponseProvideDefaults(val: LogAnalyticsQuerySignalDefinitionPropertiesResponse): LogAnalyticsQuerySignalDefinitionPropertiesResponse {
    return {
        ...val,
        refreshInterval: (val.refreshInterval) ?? "PT1M",
    };
}

/**
 * A grouping of signal assignments for a Log Analytics Workspace
 */
export interface LogAnalyticsSignalGroupResponse {
    /**
     * Reference to the name of the authentication setting which is used for querying the data source
     */
    authenticationSetting: string;
    /**
     * Log Analytics Workspace resource ID
     */
    logAnalyticsWorkspaceResourceId: string;
    /**
     * Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.
     */
    signalAssignments?: SignalAssignmentResponse[];
}

/**
 * Authentication setting properties for Azure Managed Identity
 */
export interface ManagedIdentityAuthenticationSettingPropertiesResponse {
    /**
     * Supported kinds of authentication settings as discriminator
     * Expected value is 'ManagedIdentity'.
     */
    authenticationKind: "ManagedIdentity";
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Name of the managed identity to use. Either 'SystemAssigned' or the resourceId of a user-assigned identity.
     */
    managedIdentityName: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
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
 * Settings for automatically discovering entities for the health model.
 */
export interface ModelDiscoverySettingsResponse {
    /**
     * Whether to add all recommended signals to the discovered entities.
     */
    addRecommendedSignals: string;
    /**
     * Which Managed Identity of the health model to use for discovery. Defaults to SystemAssigned, if not set. Can be set to 'SystemAssigned' or to the resource id of a user-assigned managed identity which is linked to the health model.
     */
    identity?: string;
    /**
     * The scope from which entities should be automatically discovered. For example, the resource id of a Service Group.
     */
    scope: string;
}

/**
 * Prometheus Metrics Signal Definition properties
 */
export interface PrometheusMetricsSignalDefinitionPropertiesResponse {
    /**
     * Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
     */
    dataUnit?: string;
    /**
     * Date when the signal definition was (soft-)deleted
     */
    deletionDate: string;
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Evaluation rules for the signal definition
     */
    evaluationRules: EvaluationRuleResponse;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: {[key: string]: string};
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Query text in PromQL syntax
     */
    queryText: string;
    /**
     * Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
     */
    refreshInterval?: string;
    /**
     * Supported signal kinds as discriminator
     * Expected value is 'PrometheusMetricsQuery'.
     */
    signalKind: "PrometheusMetricsQuery";
    /**
     * Time range of signal. ISO duration format like PT10M.
     */
    timeGrain?: string;
}
/**
 * prometheusMetricsSignalDefinitionPropertiesResponseProvideDefaults sets the appropriate defaults for PrometheusMetricsSignalDefinitionPropertiesResponse
 */
export function prometheusMetricsSignalDefinitionPropertiesResponseProvideDefaults(val: PrometheusMetricsSignalDefinitionPropertiesResponse): PrometheusMetricsSignalDefinitionPropertiesResponse {
    return {
        ...val,
        refreshInterval: (val.refreshInterval) ?? "PT1M",
    };
}

/**
 * Relationship properties
 */
export interface RelationshipPropertiesResponse {
    /**
     * Resource name of the child entity
     */
    childEntityName: string;
    /**
     * Date when the relationship was (soft-)deleted
     */
    deletionDate: string;
    /**
     * Discovered by which discovery rule. If set, the relationship cannot be deleted manually.
     */
    discoveredBy: string;
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: {[key: string]: string};
    /**
     * Resource name of the parent entity
     */
    parentEntityName: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

/**
 * Azure Resource Metric Signal Definition properties
 */
export interface ResourceMetricSignalDefinitionPropertiesResponse {
    /**
     * Type of aggregation to apply to the metric
     */
    aggregationType: string;
    /**
     * Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
     */
    dataUnit?: string;
    /**
     * Date when the signal definition was (soft-)deleted
     */
    deletionDate: string;
    /**
     * Optional: Dimension to split by
     */
    dimension?: string;
    /**
     * Optional: Dimension filter to apply to the dimension. Must only be set if also Dimension is set.
     */
    dimensionFilter?: string;
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Evaluation rules for the signal definition
     */
    evaluationRules: EvaluationRuleResponse;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: {[key: string]: string};
    /**
     * Name of the metric
     */
    metricName: string;
    /**
     * Metric namespace
     */
    metricNamespace: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
     */
    refreshInterval?: string;
    /**
     * Supported signal kinds as discriminator
     * Expected value is 'AzureResourceMetric'.
     */
    signalKind: "AzureResourceMetric";
    /**
     * Time range of signal. ISO duration format like PT10M.
     */
    timeGrain: string;
}
/**
 * resourceMetricSignalDefinitionPropertiesResponseProvideDefaults sets the appropriate defaults for ResourceMetricSignalDefinitionPropertiesResponse
 */
export function resourceMetricSignalDefinitionPropertiesResponseProvideDefaults(val: ResourceMetricSignalDefinitionPropertiesResponse): ResourceMetricSignalDefinitionPropertiesResponse {
    return {
        ...val,
        refreshInterval: (val.refreshInterval) ?? "PT1M",
    };
}

/**
 * Group of signal definition assignments
 */
export interface SignalAssignmentResponse {
    /**
     * Signal definitions referenced by their names. All definitions are combined with an AND operator.
     */
    signalDefinitions: string[];
}

/**
 * Contains various signal groups that can be assigned to an entity
 */
export interface SignalGroupResponse {
    /**
     * Log Analytics Signal Group
     */
    azureLogAnalytics?: LogAnalyticsSignalGroupResponse;
    /**
     * Azure Monitor Workspace Signal Group
     */
    azureMonitorWorkspace?: AzureMonitorWorkspaceSignalGroupResponse;
    /**
     * Azure Resource Signal Group
     */
    azureResource?: AzureResourceSignalGroupResponse;
    /**
     * Settings for dependency signals to control how the health state of child entities influences the health state of the parent entity.
     */
    dependencies?: DependenciesSignalGroupResponse;
}
/**
 * signalGroupResponseProvideDefaults sets the appropriate defaults for SignalGroupResponse
 */
export function signalGroupResponseProvideDefaults(val: SignalGroupResponse): SignalGroupResponse {
    return {
        ...val,
        dependencies: (val.dependencies ? dependenciesSignalGroupResponseProvideDefaults(val.dependencies) : undefined),
    };
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
 * Threshold-based evaluation rule for a signal definition
 */
export interface ThresholdRuleResponse {
    /**
     * Operator how to compare the signal value with the threshold
     */
    operator: string;
    /**
     * Threshold value
     */
    threshold: string;
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
