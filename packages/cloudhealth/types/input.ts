import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Alert configuration details
 */
export interface AlertConfigurationArgs {
    /**
     * Optional list of action group resource IDs to be notified when the alert is triggered.
     */
    actionGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The alert rule description.
     */
    description?: pulumi.Input<string>;
    /**
     * The severity of triggered alert.
     */
    severity: pulumi.Input<string | enums.AlertSeverity>;
}

/**
 * A grouping of signal assignments for a Azure Monitor Workspace
 */
export interface AzureMonitorWorkspaceSignalGroupArgs {
    /**
     * Reference to the name of the authentication setting which is used for querying the data source
     */
    authenticationSetting: pulumi.Input<string>;
    /**
     * Azure Monitor workspace resource ID
     */
    azureMonitorWorkspaceResourceId: pulumi.Input<string>;
    /**
     * Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.
     */
    signalAssignments?: pulumi.Input<pulumi.Input<SignalAssignmentArgs>[]>;
}

/**
 * A grouping of signal assignments for an Azure resource
 */
export interface AzureResourceSignalGroupArgs {
    /**
     * Reference to the name of the authentication setting which is used for querying the data source
     */
    authenticationSetting: pulumi.Input<string>;
    /**
     * Azure resource ID
     */
    azureResourceId: pulumi.Input<string>;
    /**
     * Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.
     */
    signalAssignments?: pulumi.Input<pulumi.Input<SignalAssignmentArgs>[]>;
}

/**
 * Properties for dependent entities, i.e. child entities
 */
export interface DependenciesSignalGroupArgs {
    /**
     * Aggregation type for child dependencies.
     */
    aggregationType: pulumi.Input<string | enums.DependenciesAggregationType>;
    /**
     * Degraded threshold for aggregating the propagated health state of child dependencies. Can be either an absolute number that is greater than 0, or a percentage between 1-100%. The entity will be considered degraded when the number of not healthy child dependents (unhealthy, degraded, unknown) is equal to or above the threshold value. Must only be set when AggregationType is 'Thresholds'.
     */
    degradedThreshold?: pulumi.Input<string>;
    /**
     * Unhealthy threshold for aggregating the propagated health state of child dependencies. Can be either an absolute number that is greater than 0, or a percentage between 1-100%. The entity will be considered unhealthy when the number of not healthy child dependents (unhealthy, degraded, unknown) is equal to or above the threshold value. Must only be set when AggregationType is 'Thresholds'.
     */
    unhealthyThreshold?: pulumi.Input<string>;
}
/**
 * dependenciesSignalGroupArgsProvideDefaults sets the appropriate defaults for DependenciesSignalGroupArgs
 */
export function dependenciesSignalGroupArgsProvideDefaults(val: DependenciesSignalGroupArgs): DependenciesSignalGroupArgs {
    return {
        ...val,
        aggregationType: (val.aggregationType) ?? "WorstOf",
    };
}

/**
 * Discovery rule properties
 */
export interface DiscoveryRulePropertiesArgs {
    /**
     * Whether to add all recommended signals to the discovered entities.
     */
    addRecommendedSignals: pulumi.Input<string | enums.DiscoveryRuleRecommendedSignalsBehavior>;
    /**
     * Reference to the name of the authentication setting which is used for querying Azure Resource Graph. The same authentication setting will also be assigned to any discovered entities.
     */
    authenticationSetting: pulumi.Input<string>;
    /**
     * Whether to create relationships between the discovered entities based on a set of built-in rules. These relationships cannot be manually deleted.
     */
    discoverRelationships: pulumi.Input<string | enums.DiscoveryRuleRelationshipDiscoveryBehavior>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Azure Resource Graph query text in KQL syntax. The query must return at least a column named 'id' which contains the resource ID of the discovered resources.
     */
    resourceGraphQuery: pulumi.Input<string>;
}

/**
 * ML-based evaluation rule for a signal definition
 */
export interface DynamicDetectionRuleArgs {
    /**
     * Threshold direction
     */
    dynamicThresholdDirection: pulumi.Input<string | enums.DynamicThresholdDirection>;
    /**
     * ML model to use for dynamic thresholds
     */
    dynamicThresholdModel: pulumi.Input<string | enums.DynamicThresholdModel>;
    /**
     * ML model sensitivity. Lowest value = high sensitivity. Supported step size = 0.5
     */
    modelSensitivity: pulumi.Input<number>;
    /**
     * Start time of the training in UTC.
     */
    trainingStartTime?: pulumi.Input<string>;
}

/**
 * Alert configuration for an entity
 */
export interface EntityAlertsArgs {
    /**
     * Alert to be triggered on state change to degraded
     */
    degraded?: pulumi.Input<AlertConfigurationArgs>;
    /**
     * Alert to be triggered on state change to unhealthy
     */
    unhealthy?: pulumi.Input<AlertConfigurationArgs>;
}

/**
 * Visual position of the entity
 */
export interface EntityCoordinatesArgs {
    /**
     * X Coordinate
     */
    x: pulumi.Input<number>;
    /**
     * Y Coordinate
     */
    y: pulumi.Input<number>;
}

/**
 * Properties which are common across all kinds of entities
 */
export interface EntityPropertiesArgs {
    /**
     * Alert configuration for this entity
     */
    alerts?: pulumi.Input<EntityAlertsArgs>;
    /**
     * Positioning of the entity on the model canvas
     */
    canvasPosition?: pulumi.Input<EntityCoordinatesArgs>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Health objective as a percentage of time the entity should be healthy.
     */
    healthObjective?: pulumi.Input<number>;
    /**
     * Visual icon definition. If not set, a default icon is used.
     */
    icon?: pulumi.Input<IconDefinitionArgs>;
    /**
     * Impact of the entity in health state propagation
     */
    impact?: pulumi.Input<string | enums.EntityImpact>;
    /**
     * Entity kind
     */
    kind?: pulumi.Input<string>;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Signal groups which are assigned to this entity
     */
    signals?: pulumi.Input<SignalGroupArgs>;
}
/**
 * entityPropertiesArgsProvideDefaults sets the appropriate defaults for EntityPropertiesArgs
 */
export function entityPropertiesArgsProvideDefaults(val: EntityPropertiesArgs): EntityPropertiesArgs {
    return {
        ...val,
        impact: (val.impact) ?? "Standard",
        kind: (val.kind) ?? "Default",
        signals: (val.signals ? pulumi.output(val.signals).apply(signalGroupArgsProvideDefaults) : undefined),
    };
}

/**
 * Evaluation rule for a signal definition
 */
export interface EvaluationRuleArgs {
    /**
     * Degraded rule with static threshold. When used, dynamicDetectionRule must not be set.
     */
    degradedRule?: pulumi.Input<ThresholdRuleArgs>;
    /**
     * Configure to use ML-based dynamic thresholds. When used, degradedRule and unhealthyRule must not be set.
     */
    dynamicDetectionRule?: pulumi.Input<DynamicDetectionRuleArgs>;
    /**
     * Unhealthy rule with static threshold. When used, dynamicDetectionRule must not be set.
     */
    unhealthyRule?: pulumi.Input<ThresholdRuleArgs>;
}

/**
 * HealthModel properties
 */
export interface HealthModelPropertiesArgs {
    /**
     * Configure to automatically discover entities from a given scope, such as a Service Group. The discovered entities will be linked to the root entity of the health model.
     */
    discovery?: pulumi.Input<ModelDiscoverySettingsArgs>;
}

/**
 * Visual icon definition of an entity
 */
export interface IconDefinitionArgs {
    /**
     * Custom data. Base64-encoded SVG data. If set, this overrides the built-in icon.
     */
    customData?: pulumi.Input<string>;
    /**
     * Name of the built-in icon, or 'Custom' to use customData
     */
    iconName: pulumi.Input<string>;
}

/**
 * Log Analytics Query Signal Definition properties
 */
export interface LogAnalyticsQuerySignalDefinitionPropertiesArgs {
    /**
     * Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
     */
    dataUnit?: pulumi.Input<string>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Evaluation rules for the signal definition
     */
    evaluationRules: pulumi.Input<EvaluationRuleArgs>;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Query text in KQL syntax
     */
    queryText: pulumi.Input<string>;
    /**
     * Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
     */
    refreshInterval?: pulumi.Input<string | enums.RefreshInterval>;
    /**
     * Supported signal kinds as discriminator
     * Expected value is 'LogAnalyticsQuery'.
     */
    signalKind: pulumi.Input<"LogAnalyticsQuery">;
    /**
     * Time range of signal. ISO duration format like PT10M. If not specified, the KQL query must define a time range.
     */
    timeGrain?: pulumi.Input<string>;
    /**
     * Name of the column in the result set to evaluate against the thresholds. Defaults to the first column in the result set if not specified. The column must be numeric.
     */
    valueColumnName?: pulumi.Input<string>;
}
/**
 * logAnalyticsQuerySignalDefinitionPropertiesArgsProvideDefaults sets the appropriate defaults for LogAnalyticsQuerySignalDefinitionPropertiesArgs
 */
export function logAnalyticsQuerySignalDefinitionPropertiesArgsProvideDefaults(val: LogAnalyticsQuerySignalDefinitionPropertiesArgs): LogAnalyticsQuerySignalDefinitionPropertiesArgs {
    return {
        ...val,
        refreshInterval: (val.refreshInterval) ?? "PT1M",
    };
}

/**
 * A grouping of signal assignments for a Log Analytics Workspace
 */
export interface LogAnalyticsSignalGroupArgs {
    /**
     * Reference to the name of the authentication setting which is used for querying the data source
     */
    authenticationSetting: pulumi.Input<string>;
    /**
     * Log Analytics Workspace resource ID
     */
    logAnalyticsWorkspaceResourceId: pulumi.Input<string>;
    /**
     * Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.
     */
    signalAssignments?: pulumi.Input<pulumi.Input<SignalAssignmentArgs>[]>;
}

/**
 * Authentication setting properties for Azure Managed Identity
 */
export interface ManagedIdentityAuthenticationSettingPropertiesArgs {
    /**
     * Supported kinds of authentication settings as discriminator
     * Expected value is 'ManagedIdentity'.
     */
    authenticationKind: pulumi.Input<"ManagedIdentity">;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Name of the managed identity to use. Either 'SystemAssigned' or the resourceId of a user-assigned identity.
     */
    managedIdentityName: pulumi.Input<string>;
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
 * Settings for automatically discovering entities for the health model.
 */
export interface ModelDiscoverySettingsArgs {
    /**
     * Whether to add all recommended signals to the discovered entities.
     */
    addRecommendedSignals: pulumi.Input<string | enums.DiscoveryRuleRecommendedSignalsBehavior>;
    /**
     * Which Managed Identity of the health model to use for discovery. Defaults to SystemAssigned, if not set. Can be set to 'SystemAssigned' or to the resource id of a user-assigned managed identity which is linked to the health model.
     */
    identity?: pulumi.Input<string>;
    /**
     * The scope from which entities should be automatically discovered. For example, the resource id of a Service Group.
     */
    scope: pulumi.Input<string>;
}

/**
 * Prometheus Metrics Signal Definition properties
 */
export interface PrometheusMetricsSignalDefinitionPropertiesArgs {
    /**
     * Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
     */
    dataUnit?: pulumi.Input<string>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Evaluation rules for the signal definition
     */
    evaluationRules: pulumi.Input<EvaluationRuleArgs>;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Query text in PromQL syntax
     */
    queryText: pulumi.Input<string>;
    /**
     * Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
     */
    refreshInterval?: pulumi.Input<string | enums.RefreshInterval>;
    /**
     * Supported signal kinds as discriminator
     * Expected value is 'PrometheusMetricsQuery'.
     */
    signalKind: pulumi.Input<"PrometheusMetricsQuery">;
    /**
     * Time range of signal. ISO duration format like PT10M.
     */
    timeGrain?: pulumi.Input<string>;
}
/**
 * prometheusMetricsSignalDefinitionPropertiesArgsProvideDefaults sets the appropriate defaults for PrometheusMetricsSignalDefinitionPropertiesArgs
 */
export function prometheusMetricsSignalDefinitionPropertiesArgsProvideDefaults(val: PrometheusMetricsSignalDefinitionPropertiesArgs): PrometheusMetricsSignalDefinitionPropertiesArgs {
    return {
        ...val,
        refreshInterval: (val.refreshInterval) ?? "PT1M",
    };
}

/**
 * Relationship properties
 */
export interface RelationshipPropertiesArgs {
    /**
     * Resource name of the child entity
     */
    childEntityName: pulumi.Input<string>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource name of the parent entity
     */
    parentEntityName: pulumi.Input<string>;
}

/**
 * Azure Resource Metric Signal Definition properties
 */
export interface ResourceMetricSignalDefinitionPropertiesArgs {
    /**
     * Type of aggregation to apply to the metric
     */
    aggregationType: pulumi.Input<string | enums.MetricAggregationType>;
    /**
     * Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
     */
    dataUnit?: pulumi.Input<string>;
    /**
     * Optional: Dimension to split by
     */
    dimension?: pulumi.Input<string>;
    /**
     * Optional: Dimension filter to apply to the dimension. Must only be set if also Dimension is set.
     */
    dimensionFilter?: pulumi.Input<string>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Evaluation rules for the signal definition
     */
    evaluationRules: pulumi.Input<EvaluationRuleArgs>;
    /**
     * Optional set of labels (key-value pairs)
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the metric
     */
    metricName: pulumi.Input<string>;
    /**
     * Metric namespace
     */
    metricNamespace: pulumi.Input<string>;
    /**
     * Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).
     */
    refreshInterval?: pulumi.Input<string | enums.RefreshInterval>;
    /**
     * Supported signal kinds as discriminator
     * Expected value is 'AzureResourceMetric'.
     */
    signalKind: pulumi.Input<"AzureResourceMetric">;
    /**
     * Time range of signal. ISO duration format like PT10M.
     */
    timeGrain: pulumi.Input<string>;
}
/**
 * resourceMetricSignalDefinitionPropertiesArgsProvideDefaults sets the appropriate defaults for ResourceMetricSignalDefinitionPropertiesArgs
 */
export function resourceMetricSignalDefinitionPropertiesArgsProvideDefaults(val: ResourceMetricSignalDefinitionPropertiesArgs): ResourceMetricSignalDefinitionPropertiesArgs {
    return {
        ...val,
        refreshInterval: (val.refreshInterval) ?? "PT1M",
    };
}

/**
 * Group of signal definition assignments
 */
export interface SignalAssignmentArgs {
    /**
     * Signal definitions referenced by their names. All definitions are combined with an AND operator.
     */
    signalDefinitions: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Contains various signal groups that can be assigned to an entity
 */
export interface SignalGroupArgs {
    /**
     * Log Analytics Signal Group
     */
    azureLogAnalytics?: pulumi.Input<LogAnalyticsSignalGroupArgs>;
    /**
     * Azure Monitor Workspace Signal Group
     */
    azureMonitorWorkspace?: pulumi.Input<AzureMonitorWorkspaceSignalGroupArgs>;
    /**
     * Azure Resource Signal Group
     */
    azureResource?: pulumi.Input<AzureResourceSignalGroupArgs>;
    /**
     * Settings for dependency signals to control how the health state of child entities influences the health state of the parent entity.
     */
    dependencies?: pulumi.Input<DependenciesSignalGroupArgs>;
}
/**
 * signalGroupArgsProvideDefaults sets the appropriate defaults for SignalGroupArgs
 */
export function signalGroupArgsProvideDefaults(val: SignalGroupArgs): SignalGroupArgs {
    return {
        ...val,
        dependencies: (val.dependencies ? pulumi.output(val.dependencies).apply(dependenciesSignalGroupArgsProvideDefaults) : undefined),
    };
}

/**
 * Threshold-based evaluation rule for a signal definition
 */
export interface ThresholdRuleArgs {
    /**
     * Operator how to compare the signal value with the threshold
     */
    operator: pulumi.Input<string | enums.SignalOperator>;
    /**
     * Threshold value
     */
    threshold: pulumi.Input<string>;
}
