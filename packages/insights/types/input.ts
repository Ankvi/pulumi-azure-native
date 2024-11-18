import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties that define the scope private link mode settings.
 */
export interface AccessModeSettingsArgs {
    /**
     * List of exclusions that override the default access mode settings for specific private endpoint connections.
     */
    exclusions?: pulumi.Input<pulumi.Input<AccessModeSettingsExclusionArgs>[]>;
    /**
     * Specifies the default access mode of ingestion through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array.
     */
    ingestionAccessMode: pulumi.Input<string | enums.AccessMode>;
    /**
     * Specifies the default access mode of queries through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array.
     */
    queryAccessMode: pulumi.Input<string | enums.AccessMode>;
}

/**
 * Properties that define the scope private link mode settings exclusion item. This setting applies to a specific private endpoint connection and overrides the default settings for that private endpoint connection.
 */
export interface AccessModeSettingsExclusionArgs {
    /**
     * Specifies the access mode of ingestion through the specified private endpoint connection in the exclusion.
     */
    ingestionAccessMode?: pulumi.Input<string | enums.AccessMode>;
    /**
     * The private endpoint connection name associated to the private endpoint on which we want to apply the specific access mode settings.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * Specifies the access mode of queries through the specified private endpoint connection in the exclusion.
     */
    queryAccessMode?: pulumi.Input<string | enums.AccessMode>;
}

/**
 * A pointer to an Azure Action Group.
 */
export interface ActionGroupArgs {
    /**
     * The resource ID of the Action Group. This cannot be null or empty.
     */
    actionGroupId: pulumi.Input<string>;
    /**
     * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
     */
    webhookProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * A list of Activity Log Alert rule actions.
 */
export interface ActionListArgs {
    /**
     * The list of the Action Groups.
     */
    actionGroups?: pulumi.Input<pulumi.Input<ActionGroupArgs>[]>;
}

/**
 * Actions to invoke when the alert fires.
 */
export interface ActionsArgs {
    /**
     * Action Group resource Ids to invoke when the alert fires.
     */
    actionGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The properties of an action properties.
     */
    actionProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The properties of an alert payload.
     */
    customProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * An Activity Log Alert rule condition that is met when all its member conditions are met.
 */
export interface AlertRuleAllOfConditionArgs {
    /**
     * The list of Activity Log Alert rule conditions.
     */
    allOf: pulumi.Input<pulumi.Input<AlertRuleAnyOfOrLeafConditionArgs>[]>;
}

/**
 * An Activity Log Alert rule condition that is met when all its member conditions are met.
 * Each condition can be of one of the following types:
 * __Important__: Each type has its unique subset of properties. Properties from different types CANNOT exist in one condition.
 *    * __Leaf Condition -__ must contain 'field' and either 'equals' or 'containsAny'.
 *   _Please note, 'anyOf' should __not__ be set in a Leaf Condition._
 *   * __AnyOf Condition -__ must contain __only__ 'anyOf' (which is an array of Leaf Conditions).
 *   _Please note, 'field', 'equals' and 'containsAny' should __not__ be set in an AnyOf Condition._
 */
export interface AlertRuleAnyOfOrLeafConditionArgs {
    /**
     * An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met.
     */
    anyOf?: pulumi.Input<pulumi.Input<AlertRuleLeafConditionArgs>[]>;
    /**
     * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
     */
    containsAny?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
     */
    equals?: pulumi.Input<string>;
    /**
     * The name of the Activity Log event's field that this condition will examine.
     * The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
     */
    field?: pulumi.Input<string>;
}

/**
 * An Activity Log Alert rule condition that is met by comparing the field and value of an Activity Log event.
 * This condition must contain 'field' and either 'equals' or 'containsAny'.
 */
export interface AlertRuleLeafConditionArgs {
    /**
     * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
     */
    containsAny?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
     */
    equals?: pulumi.Input<string>;
    /**
     * The name of the Activity Log event's field that this condition will examine.
     * The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
     */
    field?: pulumi.Input<string>;
}

/**
 * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
 */
export interface ApplicationInsightsComponentAnalyticsItemPropertiesArgs {
    /**
     * A function alias, used when the type of the item is Function
     */
    functionAlias?: pulumi.Input<string>;
}

/**
 * An Application Insights component daily data volume cap
 */
export interface ApplicationInsightsComponentDataVolumeCapArgs {
    /**
     * Daily data volume cap in GB.
     */
    cap?: pulumi.Input<number>;
    /**
     * Do not send a notification email when the daily data volume cap is met.
     */
    stopSendNotificationWhenHitCap?: pulumi.Input<boolean>;
    /**
     * Reserved, not used for now.
     */
    stopSendNotificationWhenHitThreshold?: pulumi.Input<boolean>;
    /**
     * Reserved, not used for now.
     */
    warningThreshold?: pulumi.Input<number>;
}

/**
 * Static definitions of the ProactiveDetection configuration rule (same values for all components).
 */
export interface ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitionsArgs {
    /**
     * The rule description
     */
    description?: pulumi.Input<string>;
    /**
     * The rule name as it is displayed in UI
     */
    displayName?: pulumi.Input<string>;
    /**
     * URL which displays additional info about the proactive detection rule
     */
    helpUrl?: pulumi.Input<string>;
    /**
     * A flag indicating whether the rule is enabled by default
     */
    isEnabledByDefault?: pulumi.Input<boolean>;
    /**
     * A flag indicating whether the rule is hidden (from the UI)
     */
    isHidden?: pulumi.Input<boolean>;
    /**
     * A flag indicating whether the rule is in preview
     */
    isInPreview?: pulumi.Input<boolean>;
    /**
     * The rule name
     */
    name?: pulumi.Input<string>;
    /**
     * A flag indicating whether email notifications are supported for detections for this rule
     */
    supportsEmailNotifications?: pulumi.Input<boolean>;
}

/**
 * An arm role receiver.
 */
export interface ArmRoleReceiverArgs {
    /**
     * The name of the arm role receiver. Names must be unique across all receivers within an action group.
     */
    name: pulumi.Input<string>;
    /**
     * The arm role id.
     */
    roleId: pulumi.Input<string>;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: pulumi.Input<boolean>;
}
/**
 * armRoleReceiverArgsProvideDefaults sets the appropriate defaults for ArmRoleReceiverArgs
 */
export function armRoleReceiverArgsProvideDefaults(val: ArmRoleReceiverArgs): ArmRoleReceiverArgs {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * The Azure Automation Runbook notification receiver.
 */
export interface AutomationRunbookReceiverArgs {
    /**
     * The Azure automation account Id which holds this runbook and authenticate to Azure resource.
     */
    automationAccountId: pulumi.Input<string>;
    /**
     * Indicates whether this instance is global runbook.
     */
    isGlobalRunbook: pulumi.Input<boolean>;
    /**
     * Indicates name of the webhook.
     */
    name?: pulumi.Input<string>;
    /**
     * The name for this runbook.
     */
    runbookName: pulumi.Input<string>;
    /**
     * The URI where webhooks should be sent.
     */
    serviceUri?: pulumi.Input<string>;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: pulumi.Input<boolean>;
    /**
     * The resource id for webhook linked to this runbook.
     */
    webhookResourceId: pulumi.Input<string>;
}
/**
 * automationRunbookReceiverArgsProvideDefaults sets the appropriate defaults for AutomationRunbookReceiverArgs
 */
export function automationRunbookReceiverArgsProvideDefaults(val: AutomationRunbookReceiverArgs): AutomationRunbookReceiverArgs {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * Autoscale notification.
 */
export interface AutoscaleNotificationArgs {
    /**
     * the email notification.
     */
    email?: pulumi.Input<EmailNotificationArgs>;
    /**
     * the operation associated with the notification and its value must be "scale"
     */
    operation: pulumi.Input<enums.OperationType>;
    /**
     * the collection of webhook notifications.
     */
    webhooks?: pulumi.Input<pulumi.Input<WebhookNotificationArgs>[]>;
}
/**
 * autoscaleNotificationArgsProvideDefaults sets the appropriate defaults for AutoscaleNotificationArgs
 */
export function autoscaleNotificationArgsProvideDefaults(val: AutoscaleNotificationArgs): AutoscaleNotificationArgs {
    return {
        ...val,
        email: (val.email ? pulumi.output(val.email).apply(emailNotificationArgsProvideDefaults) : undefined),
    };
}

/**
 * Autoscale profile.
 */
export interface AutoscaleProfileArgs {
    /**
     * the number of instances that can be used during this profile.
     */
    capacity: pulumi.Input<ScaleCapacityArgs>;
    /**
     * the specific date-time for the profile. This element is not used if the Recurrence element is used.
     */
    fixedDate?: pulumi.Input<TimeWindowArgs>;
    /**
     * the name of the profile.
     */
    name: pulumi.Input<string>;
    /**
     * the repeating times at which this profile begins. This element is not used if the FixedDate element is used.
     */
    recurrence?: pulumi.Input<RecurrenceArgs>;
    /**
     * the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.
     */
    rules: pulumi.Input<pulumi.Input<ScaleRuleArgs>[]>;
}

/**
 * The Azure mobile App push notification receiver.
 */
export interface AzureAppPushReceiverArgs {
    /**
     * The email address registered for the Azure mobile app.
     */
    emailAddress: pulumi.Input<string>;
    /**
     * The name of the Azure mobile app push receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: pulumi.Input<string>;
}

/**
 * An azure function receiver.
 */
export interface AzureFunctionReceiverArgs {
    /**
     * The azure resource id of the function app.
     */
    functionAppResourceId: pulumi.Input<string>;
    /**
     * The function name in the function app.
     */
    functionName: pulumi.Input<string>;
    /**
     * The http trigger url where http request sent to.
     */
    httpTriggerUrl: pulumi.Input<string>;
    /**
     * The name of the azure function receiver. Names must be unique across all receivers within an action group.
     */
    name: pulumi.Input<string>;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: pulumi.Input<boolean>;
}
/**
 * azureFunctionReceiverArgsProvideDefaults sets the appropriate defaults for AzureFunctionReceiverArgs
 */
export function azureFunctionReceiverArgsProvideDefaults(val: AzureFunctionReceiverArgs): AzureFunctionReceiverArgs {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * Definition of custom data column.
 */
export interface ColumnDefinitionArgs {
    /**
     * The name of the column.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of the column data.
     */
    type?: pulumi.Input<string | enums.KnownColumnDefinitionType>;
}

/**
 * A condition of the scheduled query rule.
 */
export interface ConditionArgs {
    /**
     * List of Dimensions conditions
     */
    dimensions?: pulumi.Input<pulumi.Input<DimensionArgs>[]>;
    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
     */
    failingPeriods?: pulumi.Input<ConditionFailingPeriodsArgs>;
    /**
     * The column containing the metric measure number. Relevant only for rules of the kind LogAlert.
     */
    metricMeasureColumn?: pulumi.Input<string>;
    /**
     * The name of the metric to be sent. Relevant and required only for rules of the kind LogToMetric.
     */
    metricName?: pulumi.Input<string>;
    /**
     * The criteria operator. Relevant and required only for rules of the kind LogAlert.
     */
    operator?: pulumi.Input<string | enums.ConditionOperator>;
    /**
     * Log query alert
     */
    query?: pulumi.Input<string>;
    /**
     * The column containing the resource id. The content of the column must be a uri formatted as resource id. Relevant only for rules of the kind LogAlert.
     */
    resourceIdColumn?: pulumi.Input<string>;
    /**
     * the criteria threshold value that activates the alert. Relevant and required only for rules of the kind LogAlert.
     */
    threshold?: pulumi.Input<number>;
    /**
     * Aggregation type. Relevant and required only for rules of the kind LogAlert.
     */
    timeAggregation?: pulumi.Input<string | enums.TimeAggregation>;
}
/**
 * conditionArgsProvideDefaults sets the appropriate defaults for ConditionArgs
 */
export function conditionArgsProvideDefaults(val: ConditionArgs): ConditionArgs {
    return {
        ...val,
        failingPeriods: (val.failingPeriods ? pulumi.output(val.failingPeriods).apply(conditionFailingPeriodsArgsProvideDefaults) : undefined),
    };
}

/**
 * The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
 */
export interface ConditionFailingPeriodsArgs {
    /**
     * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
     */
    minFailingPeriodsToAlert?: pulumi.Input<number>;
    /**
     * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1
     */
    numberOfEvaluationPeriods?: pulumi.Input<number>;
}
/**
 * conditionFailingPeriodsArgsProvideDefaults sets the appropriate defaults for ConditionFailingPeriodsArgs
 */
export function conditionFailingPeriodsArgsProvideDefaults(val: ConditionFailingPeriodsArgs): ConditionFailingPeriodsArgs {
    return {
        ...val,
        minFailingPeriodsToAlert: (val.minFailingPeriodsToAlert) ?? 1,
        numberOfEvaluationPeriods: (val.numberOfEvaluationPeriods) ?? 1,
    };
}

/**
 * Network access control rules for the endpoints.
 */
export interface DataCollectionEndpointNetworkAclsArgs {
    /**
     * The configuration to set whether network access from public internet to the endpoints are allowed.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.KnownPublicNetworkAccessOptions>;
}

/**
 * Managed service identity of the resource.
 */
export interface DataCollectionEndpointResourceIdentityArgs {
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
 * The specification of data sources. 
 * This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
 */
export interface DataCollectionRuleDataSourcesArgs {
    /**
     * Specifications of pull based data sources
     */
    dataImports?: pulumi.Input<DataSourcesSpecDataImportsArgs>;
    /**
     * The list of Azure VM extension data source configurations.
     */
    extensions?: pulumi.Input<pulumi.Input<ExtensionDataSourceArgs>[]>;
    /**
     * The list of IIS logs source configurations.
     */
    iisLogs?: pulumi.Input<pulumi.Input<IisLogsDataSourceArgs>[]>;
    /**
     * The list of Log files source configurations.
     */
    logFiles?: pulumi.Input<pulumi.Input<LogFilesDataSourceArgs>[]>;
    /**
     * The list of performance counter data source configurations.
     */
    performanceCounters?: pulumi.Input<pulumi.Input<PerfCounterDataSourceArgs>[]>;
    /**
     * The list of platform telemetry configurations
     */
    platformTelemetry?: pulumi.Input<pulumi.Input<PlatformTelemetryDataSourceArgs>[]>;
    /**
     * The list of Prometheus forwarder data source configurations.
     */
    prometheusForwarder?: pulumi.Input<pulumi.Input<PrometheusForwarderDataSourceArgs>[]>;
    /**
     * The list of Syslog data source configurations.
     */
    syslog?: pulumi.Input<pulumi.Input<SyslogDataSourceArgs>[]>;
    /**
     * The list of Windows Event Log data source configurations.
     */
    windowsEventLogs?: pulumi.Input<pulumi.Input<WindowsEventLogDataSourceArgs>[]>;
    /**
     * The list of Windows Firewall logs source configurations.
     */
    windowsFirewallLogs?: pulumi.Input<pulumi.Input<WindowsFirewallLogsDataSourceArgs>[]>;
}

/**
 * The specification of destinations.
 */
export interface DataCollectionRuleDestinationsArgs {
    /**
     * Azure Monitor Metrics destination.
     */
    azureMonitorMetrics?: pulumi.Input<DestinationsSpecAzureMonitorMetricsArgs>;
    /**
     * List of Event Hubs destinations.
     */
    eventHubs?: pulumi.Input<pulumi.Input<EventHubDestinationArgs>[]>;
    /**
     * List of Event Hubs Direct destinations.
     */
    eventHubsDirect?: pulumi.Input<pulumi.Input<EventHubDirectDestinationArgs>[]>;
    /**
     * List of Log Analytics destinations.
     */
    logAnalytics?: pulumi.Input<pulumi.Input<LogAnalyticsDestinationArgs>[]>;
    /**
     * List of monitoring account destinations.
     */
    monitoringAccounts?: pulumi.Input<pulumi.Input<MonitoringAccountDestinationArgs>[]>;
    /**
     * List of storage accounts destinations.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<StorageBlobDestinationArgs>[]>;
    /**
     * List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent.
     */
    storageBlobsDirect?: pulumi.Input<pulumi.Input<StorageBlobDestinationArgs>[]>;
    /**
     * List of Storage Table Direct destinations.
     */
    storageTablesDirect?: pulumi.Input<pulumi.Input<StorageTableDestinationArgs>[]>;
}

/**
 * Managed service identity of the resource.
 */
export interface DataCollectionRuleResourceIdentityArgs {
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
 * Definition of which streams are sent to which destinations.
 */
export interface DataFlowArgs {
    /**
     * The builtIn transform to transform stream data
     */
    builtInTransform?: pulumi.Input<string>;
    /**
     * List of destinations for this data flow.
     */
    destinations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The output stream of the transform. Only required if the transform changes data to a different stream.
     */
    outputStream?: pulumi.Input<string>;
    /**
     * List of streams for this data flow.
     */
    streams?: pulumi.Input<pulumi.Input<string | enums.KnownDataFlowStreams>[]>;
    /**
     * The KQL query to transform stream data.
     */
    transformKql?: pulumi.Input<string>;
}

/**
 * Definition of Event Hub configuration.
 */
export interface DataImportSourcesEventHubArgs {
    /**
     * Event Hub consumer group name
     */
    consumerGroup?: pulumi.Input<string>;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The stream to collect from EventHub
     */
    stream?: pulumi.Input<string>;
}

/**
 * Data source object contains configuration to collect telemetry and one or more sinks to send that telemetry data to
 */
export interface DataSourceArgs {
    configuration: pulumi.Input<DataSourceConfigurationArgs>;
    /**
     * Datasource kind
     */
    kind: pulumi.Input<string>;
    sinks: pulumi.Input<pulumi.Input<SinkConfigurationArgs>[]>;
}

export interface DataSourceConfigurationArgs {
    /**
     * Windows event logs configuration.
     */
    eventLogs?: pulumi.Input<pulumi.Input<EventLogConfigurationArgs>[]>;
    /**
     * Performance counter configuration
     */
    perfCounters?: pulumi.Input<pulumi.Input<PerformanceCounterConfigurationArgs>[]>;
    /**
     * ETW providers configuration
     */
    providers?: pulumi.Input<pulumi.Input<EtwProviderConfigurationArgs>[]>;
}

/**
 * Specifications of pull based data sources
 */
export interface DataSourcesSpecDataImportsArgs {
    /**
     * Definition of Event Hub configuration.
     */
    eventHub?: pulumi.Input<DataImportSourcesEventHubArgs>;
}

/**
 * Azure Monitor Metrics destination.
 */
export interface DestinationsSpecAzureMonitorMetricsArgs {
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
}

/**
 * Dimension splitting and filtering definition
 */
export interface DimensionArgs {
    /**
     * Name of the dimension
     */
    name: pulumi.Input<string>;
    /**
     * Operator for dimension values
     */
    operator: pulumi.Input<string | enums.DimensionOperator>;
    /**
     * List of dimension values
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Criterion for dynamic threshold.
 */
export interface DynamicMetricCriteriaArgs {
    /**
     * The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
     */
    alertSensitivity: pulumi.Input<string | enums.DynamicThresholdSensitivity>;
    /**
     * Specifies the type of threshold criteria
     * Expected value is 'DynamicThresholdCriterion'.
     */
    criterionType: pulumi.Input<"DynamicThresholdCriterion">;
    /**
     * List of dimension conditions.
     */
    dimensions?: pulumi.Input<pulumi.Input<MetricDimensionArgs>[]>;
    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert.
     */
    failingPeriods: pulumi.Input<DynamicThresholdFailingPeriodsArgs>;
    /**
     * Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
     */
    ignoreDataBefore?: pulumi.Input<string>;
    /**
     * Name of the metric.
     */
    metricName: pulumi.Input<string>;
    /**
     * Namespace of the metric.
     */
    metricNamespace?: pulumi.Input<string>;
    /**
     * Name of the criteria.
     */
    name: pulumi.Input<string>;
    /**
     * The operator used to compare the metric value against the threshold.
     */
    operator: pulumi.Input<string | enums.DynamicThresholdOperator>;
    /**
     * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
     */
    skipMetricValidation?: pulumi.Input<boolean>;
    /**
     * the criteria time aggregation types.
     */
    timeAggregation: pulumi.Input<string | enums.AggregationTypeEnum>;
}

/**
 * The minimum number of violations required within the selected lookback time window required to raise an alert.
 */
export interface DynamicThresholdFailingPeriodsArgs {
    /**
     * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
     */
    minFailingPeriodsToAlert: pulumi.Input<number>;
    /**
     * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.
     */
    numberOfEvaluationPeriods: pulumi.Input<number>;
}

/**
 * Email notification of an autoscale event.
 */
export interface EmailNotificationArgs {
    /**
     * the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored.
     */
    customEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a value indicating whether to send email to subscription administrator.
     */
    sendToSubscriptionAdministrator?: pulumi.Input<boolean>;
    /**
     * a value indicating whether to send email to subscription co-administrators.
     */
    sendToSubscriptionCoAdministrators?: pulumi.Input<boolean>;
}
/**
 * emailNotificationArgsProvideDefaults sets the appropriate defaults for EmailNotificationArgs
 */
export function emailNotificationArgsProvideDefaults(val: EmailNotificationArgs): EmailNotificationArgs {
    return {
        ...val,
        sendToSubscriptionAdministrator: (val.sendToSubscriptionAdministrator) ?? false,
        sendToSubscriptionCoAdministrators: (val.sendToSubscriptionCoAdministrators) ?? false,
    };
}

/**
 * An email receiver.
 */
export interface EmailReceiverArgs {
    /**
     * The email address of this receiver.
     */
    emailAddress: pulumi.Input<string>;
    /**
     * The name of the email receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: pulumi.Input<string>;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: pulumi.Input<boolean>;
}
/**
 * emailReceiverArgsProvideDefaults sets the appropriate defaults for EmailReceiverArgs
 */
export function emailReceiverArgsProvideDefaults(val: EmailReceiverArgs): EmailReceiverArgs {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

export interface EtwEventConfigurationArgs {
    filter?: pulumi.Input<string>;
    id: pulumi.Input<number>;
    name: pulumi.Input<string>;
}

export interface EtwProviderConfigurationArgs {
    events: pulumi.Input<pulumi.Input<EtwEventConfigurationArgs>[]>;
    id: pulumi.Input<string>;
}

export interface EventHubDestinationArgs {
    /**
     * The resource ID of the event hub.
     */
    eventHubResourceId?: pulumi.Input<string>;
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
}

export interface EventHubDirectDestinationArgs {
    /**
     * The resource ID of the event hub.
     */
    eventHubResourceId?: pulumi.Input<string>;
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
}

/**
 * An Event hub receiver.
 */
export interface EventHubReceiverArgs {
    /**
     * The name of the specific Event Hub queue
     */
    eventHubName: pulumi.Input<string>;
    /**
     * The Event Hub namespace
     */
    eventHubNameSpace: pulumi.Input<string>;
    /**
     * The name of the Event hub receiver. Names must be unique across all receivers within an action group.
     */
    name: pulumi.Input<string>;
    /**
     * The Id for the subscription containing this event hub
     */
    subscriptionId: pulumi.Input<string>;
    /**
     * The tenant Id for the subscription containing this event hub
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: pulumi.Input<boolean>;
}
/**
 * eventHubReceiverArgsProvideDefaults sets the appropriate defaults for EventHubReceiverArgs
 */
export function eventHubReceiverArgsProvideDefaults(val: EventHubReceiverArgs): EventHubReceiverArgs {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

export interface EventLogConfigurationArgs {
    filter?: pulumi.Input<string>;
    logName: pulumi.Input<string>;
}

/**
 * Definition of which data will be collected from a separate VM extension that integrates with the Azure Monitor Agent.
 * Collected from either Windows and Linux machines, depending on which extension is defined.
 */
export interface ExtensionDataSourceArgs {
    /**
     * The name of the VM extension.
     */
    extensionName: pulumi.Input<string>;
    /**
     * The extension settings. The format is specific for particular extension.
     */
    extensionSettings?: any;
    /**
     * The list of data sources this extension needs data from.
     */
    inputDataSources?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
     */
    streams?: pulumi.Input<pulumi.Input<string | enums.KnownExtensionDataSourceStreams>[]>;
}

/**
 * A header to add to the WebTest.
 */
export interface HeaderFieldArgs {
    /**
     * The name of the header.
     */
    headerFieldName?: pulumi.Input<string>;
    /**
     * The value of the header.
     */
    headerFieldValue?: pulumi.Input<string>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * Type of managed service identity.
     */
    type: pulumi.Input<enums.IdentityType>;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Enables IIS logs to be collected by this data collection rule.
 */
export interface IisLogsDataSourceArgs {
    /**
     * Absolute paths file location
     */
    logDirectories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * IIS streams
     */
    streams: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * An Itsm receiver.
 */
export interface ItsmReceiverArgs {
    /**
     * Unique identification of ITSM connection among multiple defined in above workspace.
     */
    connectionId: pulumi.Input<string>;
    /**
     * The name of the Itsm receiver. Names must be unique across all receivers within an action group.
     */
    name: pulumi.Input<string>;
    /**
     * Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
     */
    region: pulumi.Input<string>;
    /**
     * JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
     */
    ticketConfiguration: pulumi.Input<string>;
    /**
     * OMS LA instance identifier.
     */
    workspaceId: pulumi.Input<string>;
}

/**
 * A rule condition based on a certain number of locations failing.
 */
export interface LocationThresholdRuleConditionArgs {
    /**
     * the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
     */
    dataSource?: pulumi.Input<RuleManagementEventDataSourceArgs | RuleMetricDataSourceArgs>;
    /**
     * the number of locations that must fail to activate the alert.
     */
    failedLocationCount: pulumi.Input<number>;
    /**
     * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
     * Expected value is 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition">;
    /**
     * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
     */
    windowSize?: pulumi.Input<string>;
}

/**
 * Log Analytics destination.
 */
export interface LogAnalyticsDestinationArgs {
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Log Analytics workspace.
     */
    workspaceResourceId?: pulumi.Input<string>;
}

/**
 * Text settings
 */
export interface LogFileSettingsTextArgs {
    /**
     * One of the supported timestamp formats
     */
    recordStartTimestampFormat: pulumi.Input<string | enums.KnownLogFileTextSettingsRecordStartTimestampFormat>;
}

/**
 * Definition of which custom log files will be collected by this data collection rule
 */
export interface LogFilesDataSourceArgs {
    /**
     * File Patterns where the log files are located
     */
    filePatterns: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The data format of the log files
     */
    format: pulumi.Input<string | enums.KnownLogFilesDataSourceFormat>;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The log files specific settings.
     */
    settings?: pulumi.Input<LogFilesDataSourceSettingsArgs>;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data source
     */
    streams: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The log files specific settings.
 */
export interface LogFilesDataSourceSettingsArgs {
    /**
     * Text settings
     */
    text?: pulumi.Input<LogFileSettingsTextArgs>;
}

/**
 * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
 */
export interface LogSettingsArgs {
    /**
     * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
     */
    category?: pulumi.Input<string>;
    /**
     * Name of a Diagnostic Log category group for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
     */
    categoryGroup?: pulumi.Input<string>;
    /**
     * a value indicating whether this log is enabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * the retention policy for this log.
     */
    retentionPolicy?: pulumi.Input<RetentionPolicyArgs>;
}

/**
 * A logic app receiver.
 */
export interface LogicAppReceiverArgs {
    /**
     * The callback url where http request sent to.
     */
    callbackUrl: pulumi.Input<string>;
    /**
     * The name of the logic app receiver. Names must be unique across all receivers within an action group.
     */
    name: pulumi.Input<string>;
    /**
     * The azure resource id of the logic app receiver.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: pulumi.Input<boolean>;
}
/**
 * logicAppReceiverArgsProvideDefaults sets the appropriate defaults for LogicAppReceiverArgs
 */
export function logicAppReceiverArgsProvideDefaults(val: LogicAppReceiverArgs): LogicAppReceiverArgs {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * How the data that is collected should be combined over time.
 */
export interface ManagementEventAggregationConditionArgs {
    /**
     * the condition operator.
     */
    operator?: pulumi.Input<enums.ConditionOperator>;
    /**
     * The threshold value that activates the alert.
     */
    threshold?: pulumi.Input<number>;
    /**
     * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
     */
    windowSize?: pulumi.Input<string>;
}

/**
 * A management event rule condition.
 */
export interface ManagementEventRuleConditionArgs {
    /**
     * How the data that is collected should be combined over time and when the alert is activated. Note that for management event alerts aggregation is optional – if it is not provided then any event will cause the alert to activate.
     */
    aggregation?: pulumi.Input<ManagementEventAggregationConditionArgs>;
    /**
     * the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
     */
    dataSource?: pulumi.Input<RuleManagementEventDataSourceArgs | RuleMetricDataSourceArgs>;
    /**
     * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
     * Expected value is 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition">;
}

/**
 * Part of Management Group diagnostic setting. Specifies the settings for a particular log.
 */
export interface ManagementGroupLogSettingsArgs {
    /**
     * Name of a Management Group Diagnostic Log category for a resource type this setting is applied to.
     */
    category?: pulumi.Input<string>;
    /**
     * Name of a Management Group Diagnostic Log category group for a resource type this setting is applied to.
     */
    categoryGroup?: pulumi.Input<string>;
    /**
     * a value indicating whether this log is enabled.
     */
    enabled: pulumi.Input<boolean>;
}

/**
 * An alert action.
 */
export interface MetricAlertActionArgs {
    /**
     * the id of the action group to use.
     */
    actionGroupId?: pulumi.Input<string>;
    /**
     * This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.
     */
    webHookProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Specifies the metric alert criteria for multiple resource that has multiple metric criteria.
 */
export interface MetricAlertMultipleResourceMultipleMetricCriteriaArgs {
    /**
     * the list of multiple metric criteria for this 'all of' operation. 
     */
    allOf?: pulumi.Input<pulumi.Input<DynamicMetricCriteriaArgs | MetricCriteriaArgs>[]>;
    /**
     * specifies the type of the alert criteria.
     * Expected value is 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria">;
}

/**
 * Specifies the metric alert criteria for a single resource that has multiple metric criteria.
 */
export interface MetricAlertSingleResourceMultipleMetricCriteriaArgs {
    /**
     * The list of metric criteria for this 'all of' operation. 
     */
    allOf?: pulumi.Input<pulumi.Input<MetricCriteriaArgs>[]>;
    /**
     * specifies the type of the alert criteria.
     * Expected value is 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria">;
}

/**
 * Criterion to filter metrics.
 */
export interface MetricCriteriaArgs {
    /**
     * Specifies the type of threshold criteria
     * Expected value is 'StaticThresholdCriterion'.
     */
    criterionType: pulumi.Input<"StaticThresholdCriterion">;
    /**
     * List of dimension conditions.
     */
    dimensions?: pulumi.Input<pulumi.Input<MetricDimensionArgs>[]>;
    /**
     * Name of the metric.
     */
    metricName: pulumi.Input<string>;
    /**
     * Namespace of the metric.
     */
    metricNamespace?: pulumi.Input<string>;
    /**
     * Name of the criteria.
     */
    name: pulumi.Input<string>;
    /**
     * the criteria operator.
     */
    operator: pulumi.Input<string | enums.Operator>;
    /**
     * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
     */
    skipMetricValidation?: pulumi.Input<boolean>;
    /**
     * the criteria threshold value that activates the alert.
     */
    threshold: pulumi.Input<number>;
    /**
     * the criteria time aggregation types.
     */
    timeAggregation: pulumi.Input<string | enums.AggregationTypeEnum>;
}

/**
 * Specifies a metric dimension.
 */
export interface MetricDimensionArgs {
    /**
     * Name of the dimension.
     */
    name: pulumi.Input<string>;
    /**
     * the dimension operator. Only 'Include' and 'Exclude' are supported
     */
    operator: pulumi.Input<string>;
    /**
     * list of dimension values.
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric.
 */
export interface MetricSettingsArgs {
    /**
     * Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation.
     */
    category?: pulumi.Input<string>;
    /**
     * a value indicating whether this category is enabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * the retention policy for this category.
     */
    retentionPolicy?: pulumi.Input<RetentionPolicyArgs>;
    /**
     * the timegrain of the metric in ISO8601 format.
     */
    timeGrain?: pulumi.Input<string>;
}

/**
 * The trigger that results in a scaling action.
 */
export interface MetricTriggerArgs {
    /**
     * List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}].
     */
    dimensions?: pulumi.Input<pulumi.Input<ScaleRuleMetricDimensionArgs>[]>;
    /**
     * a value indicating whether metric should divide per instance.
     */
    dividePerInstance?: pulumi.Input<boolean>;
    /**
     * the name of the metric that defines what the rule monitors.
     */
    metricName: pulumi.Input<string>;
    /**
     * the namespace of the metric that defines what the rule monitors.
     */
    metricNamespace?: pulumi.Input<string>;
    /**
     * the location of the resource the rule monitors.
     */
    metricResourceLocation?: pulumi.Input<string>;
    /**
     * the resource identifier of the resource the rule monitors.
     */
    metricResourceUri: pulumi.Input<string>;
    /**
     * the operator that is used to compare the metric data and the threshold.
     */
    operator: pulumi.Input<enums.ComparisonOperationType>;
    /**
     * the metric statistic type. How the metrics from multiple instances are combined.
     */
    statistic: pulumi.Input<enums.MetricStatisticType>;
    /**
     * the threshold of the metric that triggers the scale action.
     */
    threshold: pulumi.Input<number>;
    /**
     * time aggregation type. How the data that is collected should be combined over time. The default value is Average.
     */
    timeAggregation: pulumi.Input<enums.TimeAggregationType>;
    /**
     * the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
     */
    timeGrain: pulumi.Input<string>;
    /**
     * the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.
     */
    timeWindow: pulumi.Input<string>;
}

/**
 * Monitoring account destination.
 */
export interface MonitoringAccountDestinationArgs {
    /**
     * The resource ID of the monitoring account.
     */
    accountResourceId?: pulumi.Input<string>;
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
}

/**
 * Customer Managed Identity
 */
export interface MyWorkbookManagedIdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<string>;
}

/**
 * Definition of which performance counters will be collected and how they will be collected by this data collection rule.
 * Collected from both Windows and Linux machines where the counter is present.
 */
export interface PerfCounterDataSourceArgs {
    /**
     * A list of specifier names of the performance counters you want to collect.
     * Use a wildcard (*) to collect a counter for all instances.
     * To get a list of performance counters on Windows, run the command 'typeperf'.
     */
    counterSpecifiers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of seconds between consecutive counter measurements (samples).
     */
    samplingFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
     */
    streams?: pulumi.Input<pulumi.Input<string | enums.KnownPerfCounterDataSourceStreams>[]>;
}

export interface PerformanceCounterConfigurationArgs {
    instance?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    samplingPeriod: pulumi.Input<string>;
}

/**
 * Definition of platform telemetry data source configuration
 */
export interface PlatformTelemetryDataSourceArgs {
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * List of platform telemetry streams to collect
     */
    streams: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The parameters for enabling predictive autoscale.
 */
export interface PredictiveAutoscalePolicyArgs {
    /**
     * the amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format.
     */
    scaleLookAheadTime?: pulumi.Input<string>;
    /**
     * the predictive autoscale mode
     */
    scaleMode: pulumi.Input<enums.PredictiveAutoscalePolicyScaleMode>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * Definition of Prometheus metrics forwarding configuration.
 */
export interface PrometheusForwarderDataSourceArgs {
    /**
     * The list of label inclusion filters in the form of label "name-value" pairs.
     * Currently only one label is supported: 'microsoft_metrics_include_label'.
     * Label values are matched case-insensitively.
     */
    labelIncludeFilter?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * List of streams that this data source will be sent to.
     */
    streams?: pulumi.Input<pulumi.Input<string | enums.KnownPrometheusForwarderDataSourceStreams>[]>;
}

/**
 * The repeating times at which this profile begins. This element is not used if the FixedDate element is used.
 */
export interface RecurrenceArgs {
    /**
     * the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
     */
    frequency: pulumi.Input<enums.RecurrenceFrequency>;
    /**
     * the scheduling constraints for when the profile begins.
     */
    schedule: pulumi.Input<RecurrentScheduleArgs>;
}

/**
 * The scheduling constraints for when the profile begins.
 */
export interface RecurrentScheduleArgs {
    /**
     * the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
     */
    days: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
     */
    hours: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * A collection of minutes at which the profile takes effect at.
     */
    minutes: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
     */
    timeZone: pulumi.Input<string>;
}

/**
 * Specifies the retention policy for the log.
 */
export interface RetentionPolicyArgs {
    /**
     * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
     */
    days: pulumi.Input<number>;
    /**
     * a value indicating whether the retention policy is enabled.
     */
    enabled: pulumi.Input<boolean>;
}

/**
 * Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case.
 */
export interface RuleEmailActionArgs {
    /**
     * the list of administrator's custom email addresses to notify of the activation of the alert.
     */
    customEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
     * Expected value is 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Management.Insights.Models.RuleEmailAction">;
    /**
     * Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated.
     */
    sendToServiceOwners?: pulumi.Input<boolean>;
}

/**
 * The claims for a rule management event data source.
 */
export interface RuleManagementEventClaimsDataSourceArgs {
    /**
     * the email address.
     */
    emailAddress?: pulumi.Input<string>;
}

/**
 * A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case.
 */
export interface RuleManagementEventDataSourceArgs {
    /**
     * the claims.
     */
    claims?: pulumi.Input<RuleManagementEventClaimsDataSourceArgs>;
    /**
     * the event name.
     */
    eventName?: pulumi.Input<string>;
    /**
     * the event source.
     */
    eventSource?: pulumi.Input<string>;
    /**
     * the legacy resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
     */
    legacyResourceId?: pulumi.Input<string>;
    /**
     * the level.
     */
    level?: pulumi.Input<string>;
    /**
     * the namespace of the metric.
     */
    metricNamespace?: pulumi.Input<string>;
    /**
     * specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
     * Expected value is 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource">;
    /**
     * The name of the operation that should be checked for. If no name is provided, any operation will match.
     */
    operationName?: pulumi.Input<string>;
    /**
     * the resource group name.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * the location of the resource.
     */
    resourceLocation?: pulumi.Input<string>;
    /**
     * the resource provider name.
     */
    resourceProviderName?: pulumi.Input<string>;
    /**
     * the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
     */
    resourceUri?: pulumi.Input<string>;
    /**
     * The status of the operation that should be checked for. If no status is provided, any status will match.
     */
    status?: pulumi.Input<string>;
    /**
     * the substatus.
     */
    subStatus?: pulumi.Input<string>;
}

/**
 * A rule metric data source. The discriminator value is always RuleMetricDataSource in this case.
 */
export interface RuleMetricDataSourceArgs {
    /**
     * the legacy resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
     */
    legacyResourceId?: pulumi.Input<string>;
    /**
     * the name of the metric that defines what the rule monitors.
     */
    metricName?: pulumi.Input<string>;
    /**
     * the namespace of the metric.
     */
    metricNamespace?: pulumi.Input<string>;
    /**
     * specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
     * Expected value is 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource">;
    /**
     * the location of the resource.
     */
    resourceLocation?: pulumi.Input<string>;
    /**
     * the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule.
     */
    resourceUri?: pulumi.Input<string>;
}

/**
 * TBD. Relevant only for rules of the kind LogAlert.
 */
export interface RuleResolveConfigurationArgs {
    /**
     * The flag that indicates whether or not to auto resolve a fired alert.
     */
    autoResolved?: pulumi.Input<boolean>;
    /**
     * The duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format.
     */
    timeToResolve?: pulumi.Input<string>;
}

/**
 * Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case.
 */
export interface RuleWebhookActionArgs {
    /**
     * specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
     * Expected value is 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Management.Insights.Models.RuleWebhookAction">;
    /**
     * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * the service uri to Post the notification when the alert activates or resolves.
     */
    serviceUri?: pulumi.Input<string>;
}

/**
 * The parameters for the scaling action.
 */
export interface ScaleActionArgs {
    /**
     * the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
     */
    cooldown: pulumi.Input<string>;
    /**
     * the scale direction. Whether the scaling action increases or decreases the number of instances.
     */
    direction: pulumi.Input<enums.ScaleDirection>;
    /**
     * the type of action that should occur when the scale rule fires.
     */
    type: pulumi.Input<enums.ScaleType>;
    /**
     * the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1.
     */
    value?: pulumi.Input<string>;
}
/**
 * scaleActionArgsProvideDefaults sets the appropriate defaults for ScaleActionArgs
 */
export function scaleActionArgsProvideDefaults(val: ScaleActionArgs): ScaleActionArgs {
    return {
        ...val,
        value: (val.value) ?? "1",
    };
}

/**
 * The number of instances that can be used during this profile.
 */
export interface ScaleCapacityArgs {
    /**
     * the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
     */
    default: pulumi.Input<string>;
    /**
     * the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
     */
    maximum: pulumi.Input<string>;
    /**
     * the minimum number of instances for the resource.
     */
    minimum: pulumi.Input<string>;
}

/**
 * A rule that provide the triggers and parameters for the scaling action.
 */
export interface ScaleRuleArgs {
    /**
     * the trigger that results in a scaling action.
     */
    metricTrigger: pulumi.Input<MetricTriggerArgs>;
    /**
     * the parameters for the scaling action.
     */
    scaleAction: pulumi.Input<ScaleActionArgs>;
}
/**
 * scaleRuleArgsProvideDefaults sets the appropriate defaults for ScaleRuleArgs
 */
export function scaleRuleArgsProvideDefaults(val: ScaleRuleArgs): ScaleRuleArgs {
    return {
        ...val,
        scaleAction: pulumi.output(val.scaleAction).apply(scaleActionArgsProvideDefaults),
    };
}

/**
 * Specifies an auto scale rule metric dimension.
 */
export interface ScaleRuleMetricDimensionArgs {
    /**
     * Name of the dimension.
     */
    dimensionName: pulumi.Input<string>;
    /**
     * the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
     */
    operator: pulumi.Input<string | enums.ScaleRuleMetricDimensionOperationType>;
    /**
     * list of dimension values. For example: ["App1","App2"].
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The rule criteria that defines the conditions of the scheduled query rule.
 */
export interface ScheduledQueryRuleCriteriaArgs {
    /**
     * A list of conditions to evaluate against the specified scopes
     */
    allOf?: pulumi.Input<pulumi.Input<ConditionArgs>[]>;
}

export interface SinkConfigurationArgs {
    kind: pulumi.Input<string>;
}

/**
 * An SMS receiver.
 */
export interface SmsReceiverArgs {
    /**
     * The country code of the SMS receiver.
     */
    countryCode: pulumi.Input<string>;
    /**
     * The name of the SMS receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: pulumi.Input<string>;
    /**
     * The phone number of the SMS receiver.
     */
    phoneNumber: pulumi.Input<string>;
}

export interface StorageBlobDestinationArgs {
    /**
     * The container name of the Storage Blob.
     */
    containerName?: pulumi.Input<string>;
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the storage account.
     */
    storageAccountResourceId?: pulumi.Input<string>;
}

export interface StorageTableDestinationArgs {
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the storage account.
     */
    storageAccountResourceId?: pulumi.Input<string>;
    /**
     * The name of the Storage Table.
     */
    tableName?: pulumi.Input<string>;
}

/**
 * Declaration of a custom stream.
 */
export interface StreamDeclarationArgs {
    /**
     * List of columns used by data in this stream.
     */
    columns?: pulumi.Input<pulumi.Input<ColumnDefinitionArgs>[]>;
}

/**
 * Part of Subscription diagnostic setting. Specifies the settings for a particular log.
 */
export interface SubscriptionLogSettingsArgs {
    /**
     * Name of a Subscription Diagnostic Log category for a resource type this setting is applied to.
     */
    category?: pulumi.Input<string>;
    /**
     * Name of a Subscription Diagnostic Log category group for a resource type this setting is applied to.
     */
    categoryGroup?: pulumi.Input<string>;
    /**
     * a value indicating whether this log is enabled.
     */
    enabled: pulumi.Input<boolean>;
}

/**
 * Definition of which syslog data will be collected and how it will be collected.
 * Only collected from Linux machines.
 */
export interface SyslogDataSourceArgs {
    /**
     * The list of facility names.
     */
    facilityNames?: pulumi.Input<pulumi.Input<string | enums.KnownSyslogDataSourceFacilityNames>[]>;
    /**
     * The log levels to collect.
     */
    logLevels?: pulumi.Input<pulumi.Input<string | enums.KnownSyslogDataSourceLogLevels>[]>;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
     */
    streams?: pulumi.Input<pulumi.Input<string | enums.KnownSyslogDataSourceStreams>[]>;
}

/**
 * A rule condition based on a metric crossing a threshold.
 */
export interface ThresholdRuleConditionArgs {
    /**
     * the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
     */
    dataSource?: pulumi.Input<RuleManagementEventDataSourceArgs | RuleMetricDataSourceArgs>;
    /**
     * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
     * Expected value is 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition">;
    /**
     * the operator used to compare the data and the threshold.
     */
    operator: pulumi.Input<enums.ConditionOperator>;
    /**
     * the threshold value that activates the alert.
     */
    threshold: pulumi.Input<number>;
    /**
     * the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric.
     */
    timeAggregation?: pulumi.Input<enums.TimeAggregationOperator>;
    /**
     * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
     */
    windowSize?: pulumi.Input<string>;
}

/**
 * A specific date-time for the profile.
 */
export interface TimeWindowArgs {
    /**
     * the end time for the profile in ISO 8601 format.
     */
    end: pulumi.Input<string>;
    /**
     * the start time for the profile in ISO 8601 format.
     */
    start: pulumi.Input<string>;
    /**
     * the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * A voice receiver.
 */
export interface VoiceReceiverArgs {
    /**
     * The country code of the voice receiver.
     */
    countryCode: pulumi.Input<string>;
    /**
     * The name of the voice receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: pulumi.Input<string>;
    /**
     * The phone number of the voice receiver.
     */
    phoneNumber: pulumi.Input<string>;
}

/**
 * Geo-physical location to run a WebTest from. You must specify one or more locations for the test to run from.
 */
export interface WebTestGeolocationArgs {
    /**
     * Location ID for the WebTest to run from.
     */
    location?: pulumi.Input<string>;
}

/**
 * An XML configuration specification for a WebTest.
 */
export interface WebTestPropertiesConfigurationArgs {
    /**
     * The XML specification of a WebTest to run against an application.
     */
    webTest?: pulumi.Input<string>;
}

/**
 * The collection of content validation properties
 */
export interface WebTestPropertiesContentValidationArgs {
    /**
     * Content to look for in the return of the WebTest.  Must not be null or empty.
     */
    contentMatch?: pulumi.Input<string>;
    /**
     * When set, this value makes the ContentMatch validation case insensitive.
     */
    ignoreCase?: pulumi.Input<boolean>;
    /**
     * When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match
     */
    passIfTextFound?: pulumi.Input<boolean>;
}

/**
 * The collection of request properties
 */
export interface WebTestPropertiesRequestArgs {
    /**
     * Follow redirects for this web test.
     */
    followRedirects?: pulumi.Input<boolean>;
    /**
     * List of headers and their values to add to the WebTest call.
     */
    headers?: pulumi.Input<pulumi.Input<HeaderFieldArgs>[]>;
    /**
     * Http verb to use for this web test.
     */
    httpVerb?: pulumi.Input<string>;
    /**
     * Parse Dependent request for this WebTest.
     */
    parseDependentRequests?: pulumi.Input<boolean>;
    /**
     * Base64 encoded string body to send with this web test.
     */
    requestBody?: pulumi.Input<string>;
    /**
     * Url location to test.
     */
    requestUrl?: pulumi.Input<string>;
}

/**
 * The collection of validation rule properties
 */
export interface WebTestPropertiesValidationRulesArgs {
    /**
     * The collection of content validation properties
     */
    contentValidation?: pulumi.Input<WebTestPropertiesContentValidationArgs>;
    /**
     * Validate that the WebTest returns the http status code provided.
     */
    expectedHttpStatusCode?: pulumi.Input<number>;
    /**
     * When set, validation will ignore the status code.
     */
    ignoreHttpStatusCode?: pulumi.Input<boolean>;
    /**
     * A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true.
     */
    sSLCertRemainingLifetimeCheck?: pulumi.Input<number>;
    /**
     * Checks to see if the SSL cert is still valid.
     */
    sSLCheck?: pulumi.Input<boolean>;
}

/**
 * Webhook notification of an autoscale event.
 */
export interface WebhookNotificationArgs {
    /**
     * a property bag of settings. This value can be empty.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * the service address to receive the notification.
     */
    serviceUri?: pulumi.Input<string>;
}

/**
 * A webhook receiver.
 */
export interface WebhookReceiverArgs {
    /**
     * Indicates the identifier uri for aad auth.
     */
    identifierUri?: pulumi.Input<string>;
    /**
     * The name of the webhook receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: pulumi.Input<string>;
    /**
     * Indicates the webhook app object Id for aad auth.
     */
    objectId?: pulumi.Input<string>;
    /**
     * The URI where webhooks should be sent.
     */
    serviceUri: pulumi.Input<string>;
    /**
     * Indicates the tenant id for aad auth.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Indicates whether or not use AAD authentication.
     */
    useAadAuth?: pulumi.Input<boolean>;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: pulumi.Input<boolean>;
}
/**
 * webhookReceiverArgsProvideDefaults sets the appropriate defaults for WebhookReceiverArgs
 */
export function webhookReceiverArgsProvideDefaults(val: WebhookReceiverArgs): WebhookReceiverArgs {
    return {
        ...val,
        useAadAuth: (val.useAadAuth) ?? false,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * Specifies the metric alert rule criteria for a web test resource.
 */
export interface WebtestLocationAvailabilityCriteriaArgs {
    /**
     * The Application Insights resource Id.
     */
    componentId: pulumi.Input<string>;
    /**
     * The number of failed locations.
     */
    failedLocationCount: pulumi.Input<number>;
    /**
     * specifies the type of the alert criteria.
     * Expected value is 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria'.
     */
    odataType: pulumi.Input<"Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria">;
    /**
     * The Application Insights web test Id.
     */
    webTestId: pulumi.Input<string>;
}

/**
 * Definition of which Windows Event Log events will be collected and how they will be collected.
 * Only collected from Windows machines.
 */
export interface WindowsEventLogDataSourceArgs {
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
     */
    streams?: pulumi.Input<pulumi.Input<string | enums.KnownWindowsEventLogDataSourceStreams>[]>;
    /**
     * A list of Windows Event Log queries in XPATH format.
     */
    xPathQueries?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Enables Firewall logs to be collected by this data collection rule.
 */
export interface WindowsFirewallLogsDataSourceArgs {
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Firewall logs streams
     */
    streams: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Identity used for BYOS
 */
export interface WorkbookResourceIdentityArgs {
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
 * Gallery information for a workbook template.
 */
export interface WorkbookTemplateGalleryArgs {
    /**
     * Category for the gallery.
     */
    category?: pulumi.Input<string>;
    /**
     * Name of the workbook template in the gallery.
     */
    name?: pulumi.Input<string>;
    /**
     * Order of the template within the gallery.
     */
    order?: pulumi.Input<number>;
    /**
     * Azure resource type supported by the gallery.
     */
    resourceType?: pulumi.Input<string>;
    /**
     * Type of workbook supported by the workbook template.
     */
    type?: pulumi.Input<string>;
}

/**
 * Localized template data and gallery information.
 */
export interface WorkbookTemplateLocalizedGalleryArgs {
    /**
     * Workbook galleries supported by the template.
     */
    galleries?: pulumi.Input<pulumi.Input<WorkbookTemplateGalleryArgs>[]>;
    /**
     * Valid JSON object containing workbook template payload.
     */
    templateData?: any;
}


































