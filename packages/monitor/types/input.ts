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
 * Discovery rule properties for an Application Insights topology query
 */
export interface ApplicationInsightsTopologyDiscoveryRulePropertiesArgs {
    /**
     * Whether to add all recommended signals to the discovered entities.
     */
    addRecommendedSignals: pulumi.Input<string | enums.DiscoveryRuleRecommendedSignalsBehavior>;
    /**
     * Application Insights resource ID
     */
    applicationInsightsResourceId: pulumi.Input<string>;
    /**
     * Reference to the name of the authentication setting which is used for querying Azure Resource Graph. The same authentication setting will also be assigned to any discovered entities.
     */
    authenticationSetting: pulumi.Input<string>;
    /**
     * Whether to create relationships between the discovered entities based on a set of built-in rules. These relationships cannot be manually deleted.
     */
    discoverRelationships: pulumi.Input<string | enums.DiscoveryRuleRelationshipDiscoveryBehavior>;
    /**
     * Discovery rule relationship discovery behavior
     * Expected value is 'ApplicationInsightsTopology'.
     */
    discoveryRuleKind: pulumi.Input<"ApplicationInsightsTopology">;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
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
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: pulumi.Input<string>;
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
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: pulumi.Input<string>;
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
 * Azure Monitor Workspace Logs Api configurations.
 */
export interface AzureMonitorWorkspaceLogsApiConfigArgs {
    /**
     * Data collection endpoint ingestion url.
     */
    dataCollectionEndpointUrl: pulumi.Input<string>;
    /**
     * Data Collection Rule (DCR) immutable id.
     */
    dataCollectionRule: pulumi.Input<string>;
    /**
     * The schema mapping for incoming data.
     */
    schema: pulumi.Input<SchemaMapArgs>;
    /**
     * Stream name in destination. Azure Monitor stream is related to the destination table.
     */
    stream: pulumi.Input<string>;
}

/**
 * Azure Monitor Workspace Logs specific configurations.
 */
export interface AzureMonitorWorkspaceLogsExporterArgs {
    /**
     * API configurations for Azure Monitor workspace exporter.
     */
    api: pulumi.Input<AzureMonitorWorkspaceLogsApiConfigArgs>;
    /**
     * Cache configurations.
     */
    cache?: pulumi.Input<CacheConfigurationArgs>;
    /**
     * Concurrency configuration for the exporter.
     */
    concurrency?: pulumi.Input<ConcurrencyConfigurationArgs>;
}
/**
 * azureMonitorWorkspaceLogsExporterArgsProvideDefaults sets the appropriate defaults for AzureMonitorWorkspaceLogsExporterArgs
 */
export function azureMonitorWorkspaceLogsExporterArgsProvideDefaults(val: AzureMonitorWorkspaceLogsExporterArgs): AzureMonitorWorkspaceLogsExporterArgs {
    return {
        ...val,
        concurrency: (val.concurrency ? pulumi.output(val.concurrency).apply(concurrencyConfigurationArgsProvideDefaults) : undefined),
    };
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
 * The complex type of the extended location.
 */
export interface AzureResourceManagerCommonTypesExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type: pulumi.Input<string | enums.ExtendedLocationType>;
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
 * Batch processor.
 */
export interface BatchProcessorArgs {
    /**
     * Size of the batch.
     */
    batchSize?: pulumi.Input<number>;
    /**
     * Timeout in milliseconds.
     */
    timeout?: pulumi.Input<number>;
}
/**
 * batchProcessorArgsProvideDefaults sets the appropriate defaults for BatchProcessorArgs
 */
export function batchProcessorArgsProvideDefaults(val: BatchProcessorArgs): BatchProcessorArgs {
    return {
        ...val,
        batchSize: (val.batchSize) ?? 8192,
        timeout: (val.timeout) ?? 200,
    };
}

/**
 * Cache configurations.
 */
export interface CacheConfigurationArgs {
    /**
     * Max storage usage in megabytes.
     */
    maxStorageUsage?: pulumi.Input<number>;
    /**
     * Retention period in minutes.
     */
    retentionPeriod?: pulumi.Input<number>;
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
 * Concurrent publishing configuration.
 */
export interface ConcurrencyConfigurationArgs {
    /**
     * Size of the queue for log batches.
     */
    batchQueueSize?: pulumi.Input<number>;
    /**
     * Number of parallel workers processing the log queues.
     */
    workerCount?: pulumi.Input<number>;
}
/**
 * concurrencyConfigurationArgsProvideDefaults sets the appropriate defaults for ConcurrencyConfigurationArgs
 */
export function concurrencyConfigurationArgsProvideDefaults(val: ConcurrencyConfigurationArgs): ConcurrencyConfigurationArgs {
    return {
        ...val,
        batchQueueSize: (val.batchQueueSize) ?? 100,
        workerCount: (val.workerCount) ?? 4,
    };
}

/**
 * A condition of the scheduled query rule.
 */
export interface ConditionArgs {
    /**
     * The extent of deviation required to trigger an alert. Allowed values are 'Low', 'Medium' and 'High'. This will affect how tight the threshold is to the metric series pattern. Relevant only for dynamic threshold rules of the kind LogAlert.
     */
    alertSensitivity?: pulumi.Input<string>;
    /**
     * Specifies the type of threshold criteria
     */
    criterionType?: pulumi.Input<string | enums.CriterionType>;
    /**
     * List of Dimensions conditions
     */
    dimensions?: pulumi.Input<pulumi.Input<DimensionArgs>[]>;
    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
     */
    failingPeriods?: pulumi.Input<ConditionFailingPeriodsArgs>;
    /**
     * Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format). Relevant only for dynamic threshold rules of the kind LogAlert.
     */
    ignoreDataBefore?: pulumi.Input<string>;
    /**
     * The column containing the metric measure number. Relevant only for rules of the kind LogAlert.
     */
    metricMeasureColumn?: pulumi.Input<string>;
    /**
     * The name of the metric to be sent. Relevant and required only for rules of the kind LogToMetric.
     */
    metricName?: pulumi.Input<string>;
    /**
     * The minimum results count that should be found for triggering an alert. Relevant only for rules of the kind SimpleLogAlert.
     */
    minRecurrenceCount?: pulumi.Input<number>;
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
     * the criteria threshold value that activates the alert. Relevant and required only for static threshold rules of the kind LogAlert.
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
 * Specifications of pull based data sources
 */
export interface DataSourcesSpecDataImportsArgs {
    /**
     * Definition of Event Hub configuration.
     */
    eventHub?: pulumi.Input<DataImportSourcesEventHubArgs>;
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
     * Signal groups which are assigned to this entity
     */
    signals?: pulumi.Input<SignalGroupArgs>;
    /**
     * Optional set of labels (key-value pairs)
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: pulumi.Input<string>;
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

/**
 * Exporter Info.
 */
export interface ExporterArgs {
    /**
     * Azure Monitor Workspace Logs specific configurations.
     */
    azureMonitorWorkspaceLogs?: pulumi.Input<AzureMonitorWorkspaceLogsExporterArgs>;
    /**
     * The name of exporter.
     */
    name: pulumi.Input<string>;
    /**
     * TCP based exporter. Used for pipelineGroup exporter.
     */
    tcp?: pulumi.Input<TcpExporterArgs>;
    /**
     * The type of exporter.
     */
    type: pulumi.Input<string | enums.ExporterType>;
}
/**
 * exporterArgsProvideDefaults sets the appropriate defaults for ExporterArgs
 */
export function exporterArgsProvideDefaults(val: ExporterArgs): ExporterArgs {
    return {
        ...val,
        azureMonitorWorkspaceLogs: (val.azureMonitorWorkspaceLogs ? pulumi.output(val.azureMonitorWorkspaceLogs).apply(azureMonitorWorkspaceLogsExporterArgsProvideDefaults) : undefined),
    };
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
 * An Incident receiver.
 */
export interface IncidentReceiverArgs {
    /**
     * The incident service connection
     */
    connection: pulumi.Input<IncidentServiceConnectionArgs>;
    /**
     * The incident management service type
     */
    incidentManagementService: pulumi.Input<string | enums.IncidentManagementService>;
    /**
     * Field mappings for the incident service
     */
    mappings: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the Incident receiver. Names must be unique across all receivers within an action group.
     */
    name: pulumi.Input<string>;
}

/**
 * The connection info for Incident Receiver.
 */
export interface IncidentServiceConnectionArgs {
    /**
     * GUID value representing the connection ID for the incident management service.
     */
    id: pulumi.Input<string>;
    /**
     * The name of the connection.
     */
    name: pulumi.Input<string>;
}

/**
 * The issue properties
 */
export interface IssuePropertiesArgs {
    /**
     * The issue impact time (in UTC)
     */
    impactTime: pulumi.Input<string>;
    /**
     * The issue severity
     */
    severity: pulumi.Input<string>;
    /**
     * The issue status
     */
    status: pulumi.Input<string | enums.Status>;
    /**
     * The issue title
     */
    title: pulumi.Input<string>;
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
 * A component that allows parsing a value from sourceField as a json array, match a key to each parsed value from keys, and output the key-value map to destinationField field.
 */
export interface JsonArrayMapperArgs {
    /**
     * Define a destination field to which the parsed output will be written. The output is a map, it's keys is the given keys array and the matching values are the parsed json array elements.
     */
    destinationField?: pulumi.Input<JsonMapperDestinationFieldArgs>;
    /**
     * Define the names of the keys in the resulting map. The input json array elements are mapped in order, one for every key.
     */
    keys: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Define a source field from which a json array will be read and parsed to it's elements. The number of elements in the json array is expected to be the same as the length of keys.
     */
    sourceField?: pulumi.Input<JsonMapperSourceFieldArgs>;
}
/**
 * jsonArrayMapperArgsProvideDefaults sets the appropriate defaults for JsonArrayMapperArgs
 */
export function jsonArrayMapperArgsProvideDefaults(val: JsonArrayMapperArgs): JsonArrayMapperArgs {
    return {
        ...val,
        destinationField: (val.destinationField ? pulumi.output(val.destinationField).apply(jsonMapperDestinationFieldArgsProvideDefaults) : undefined),
    };
}

/**
 * JsonArrayMapper destination field used to describe the field to which the parsed output will be written.
 */
export interface JsonMapperDestinationFieldArgs {
    /**
     * Define the destination's element. The element is the body or the attributes of the message, to which the json array mapper will write the output map.
     */
    destination?: pulumi.Input<string | enums.JsonMapperElement>;
    /**
     * Define a destination field name under the given element. Leaving this empty, means the root of the element. In case element=attributes and fieldName is empty, the object's attributes themselves will contain the key value output pairs.
     */
    fieldName?: pulumi.Input<string>;
}
/**
 * jsonMapperDestinationFieldArgsProvideDefaults sets the appropriate defaults for JsonMapperDestinationFieldArgs
 */
export function jsonMapperDestinationFieldArgsProvideDefaults(val: JsonMapperDestinationFieldArgs): JsonMapperDestinationFieldArgs {
    return {
        ...val,
        destination: (val.destination) ?? "attributes",
    };
}

/**
 * JsonArrayMapper source field used to describe the field from which the json array will be read.
 */
export interface JsonMapperSourceFieldArgs {
    /**
     * Define a source field name from which the json array mapper will read the json array. Leaving this empty, means reading the body of the message itself.
     */
    fieldName?: pulumi.Input<string>;
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
     * Optional set of labels (key-value pairs)
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: pulumi.Input<string>;
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
 * Networking configuration for the pipeline group instance.
 */
export interface NetworkingConfigurationArgs {
    /**
     * External networking mode.
     */
    externalNetworkingMode: pulumi.Input<string | enums.ExternalNetworkingMode>;
    /**
     * The address exposed on the cluster. Example: azuremonitorpipeline.contoso.com.
     */
    host?: pulumi.Input<string>;
    /**
     * Networking routes configuration.
     */
    routes: pulumi.Input<pulumi.Input<NetworkingRouteArgs>[]>;
}

/**
 * Networking route configuration.
 */
export interface NetworkingRouteArgs {
    /**
     * Route path.
     */
    path?: pulumi.Input<string>;
    /**
     * The port that will be configured externally. If not specified, it will use the port from the receiver definition.
     */
    port?: pulumi.Input<number>;
    /**
     * The name of the previously defined receiver.
     */
    receiver: pulumi.Input<string>;
    /**
     * Route subdomain.
     */
    subdomain?: pulumi.Input<string>;
}

/**
 * OTLP Receiver.
 */
export interface OtlpReceiverArgs {
    /**
     * OTLP GRPC endpoint definition. Example: 0.0.0.0:<port>.
     */
    endpoint: pulumi.Input<string>;
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

/**
 * Persistence options to all pipelines in the instance.
 */
export interface PersistenceConfigurationsArgs {
    /**
     * The name of the mounted persistent volume.
     */
    persistentVolumeName: pulumi.Input<string>;
}

/**
 * Pipeline Info.
 */
export interface PipelineArgs {
    /**
     * Reference to exporters configured for the pipeline.
     */
    exporters: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the pipeline.
     */
    name: pulumi.Input<string>;
    /**
     * Reference to processors configured for the pipeline.
     */
    processors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Reference to receivers configured for the pipeline.
     */
    receivers: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of pipeline
     */
    type: pulumi.Input<string | enums.PipelineType>;
}

/**
 * Properties that need to be specified to create a new pipeline group instance.
 */
export interface PipelineGroupPropertiesArgs {
    /**
     * The exporters specified for a pipeline group instance.
     */
    exporters: pulumi.Input<pulumi.Input<ExporterArgs>[]>;
    /**
     * Networking configurations for the pipeline group instance.
     */
    networkingConfigurations?: pulumi.Input<pulumi.Input<NetworkingConfigurationArgs>[]>;
    /**
     * The processors specified for a pipeline group instance.
     */
    processors: pulumi.Input<pulumi.Input<ProcessorArgs>[]>;
    /**
     * The receivers specified for a pipeline group instance.
     */
    receivers: pulumi.Input<pulumi.Input<ReceiverArgs>[]>;
    /**
     * Defines the amount of replicas of the pipeline group instance.
     */
    replicas?: pulumi.Input<number>;
    /**
     * The service section for a given pipeline group instance.
     */
    service: pulumi.Input<ServiceArgs>;
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
 * Processor Info.
 */
export interface ProcessorArgs {
    /**
     * Batch processor configurations.
     */
    batch?: pulumi.Input<BatchProcessorArgs>;
    /**
     * The name of processor.
     */
    name: pulumi.Input<string>;
    /**
     * The type of processor.
     */
    type: pulumi.Input<string | enums.ProcessorType>;
}
/**
 * processorArgsProvideDefaults sets the appropriate defaults for ProcessorArgs
 */
export function processorArgsProvideDefaults(val: ProcessorArgs): ProcessorArgs {
    return {
        ...val,
        batch: (val.batch ? pulumi.output(val.batch).apply(batchProcessorArgsProvideDefaults) : undefined),
    };
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
     * Optional set of labels (key-value pairs)
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
 * Receiver Info.
 */
export interface ReceiverArgs {
    /**
     * The name of receiver.
     */
    name: pulumi.Input<string>;
    /**
     * OTLP receiver configurations. This field is mandatory for OTLP and pipelineGroup receivers.
     */
    otlp?: pulumi.Input<OtlpReceiverArgs>;
    /**
     * Syslog configurations. This field is mandatory for syslog type receivers.
     */
    syslog?: pulumi.Input<SyslogReceiverArgs>;
    /**
     * The type of receiver.
     */
    type: pulumi.Input<string | enums.ReceiverType>;
    /**
     * UDP receiver configurations. This field is mandatory for UDP receivers.
     */
    udp?: pulumi.Input<UdpReceiverArgs>;
}
/**
 * receiverArgsProvideDefaults sets the appropriate defaults for ReceiverArgs
 */
export function receiverArgsProvideDefaults(val: ReceiverArgs): ReceiverArgs {
    return {
        ...val,
        syslog: (val.syslog ? pulumi.output(val.syslog).apply(syslogReceiverArgsProvideDefaults) : undefined),
        udp: (val.udp ? pulumi.output(val.udp).apply(udpReceiverArgsProvideDefaults) : undefined),
    };
}

/**
 * Record map for schema in azure monitor.
 */
export interface RecordMapArgs {
    /**
     * Record Map Key.
     */
    from: pulumi.Input<string>;
    /**
     * Record Map Value.
     */
    to: pulumi.Input<string>;
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
     * Resource name of the parent entity
     */
    parentEntityName: pulumi.Input<string>;
    /**
     * Optional set of labels (key-value pairs)
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Discovery rule properties for an Azure Resource Graph query
 */
export interface ResourceGraphQueryDiscoveryRulePropertiesArgs {
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
     * Discovery rule relationship discovery behavior
     * Expected value is 'ResourceGraphQuery'.
     */
    discoveryRuleKind: pulumi.Input<"ResourceGraphQuery">;
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
 * Resource map for schema in azure monitor.
 */
export interface ResourceMapArgs {
    /**
     * Resource Map Key.
     */
    from: pulumi.Input<string>;
    /**
     * Resource Map Value.
     */
    to: pulumi.Input<string>;
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
     * Optional set of labels (key-value pairs)
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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

/**
 * Schema map for azure monitor for logs.
 */
export interface SchemaMapArgs {
    /**
     * Record Map.
     */
    recordMap: pulumi.Input<pulumi.Input<RecordMapArgs>[]>;
    /**
     * Resource Map captures information about the entity for which telemetry is recorded. For example, metrics exposed by a Kubernetes container can be linked to a resource that specifies the cluster, namespace, pod, and container name.Resource may capture an entire hierarchy of entity identification. It may describe the host in the cloud and specific container or an application running in the process.
     */
    resourceMap?: pulumi.Input<pulumi.Input<ResourceMapArgs>[]>;
    /**
     * A scope map is a logical unit of the application code with which the emitted telemetry can be associated.
     */
    scopeMap?: pulumi.Input<pulumi.Input<ScopeMapArgs>[]>;
}

/**
 * Scope map for schema in azure monitor.
 */
export interface ScopeMapArgs {
    /**
     * Scope Map Key.
     */
    from: pulumi.Input<string>;
    /**
     * Scope Map Value.
     */
    to: pulumi.Input<string>;
}

/**
 * Service Info.
 */
export interface ServiceArgs {
    /**
     * Persistence options to all pipelines in the instance.
     */
    persistence?: pulumi.Input<PersistenceConfigurationsArgs>;
    /**
     * Pipelines belonging to a given pipeline group.
     */
    pipelines: pulumi.Input<pulumi.Input<PipelineArgs>[]>;
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
 * Base receiver using TCP as transport protocol.
 */
export interface SyslogReceiverArgs {
    /**
     * Syslog receiver endpoint definition. Example: 0.0.0.0:<port>.
     */
    endpoint: pulumi.Input<string>;
    /**
     * Protocol to parse syslog messages. Default rfc3164
     */
    protocol?: pulumi.Input<string | enums.SyslogProtocol>;
}
/**
 * syslogReceiverArgsProvideDefaults sets the appropriate defaults for SyslogReceiverArgs
 */
export function syslogReceiverArgsProvideDefaults(val: SyslogReceiverArgs): SyslogReceiverArgs {
    return {
        ...val,
        protocol: (val.protocol) ?? "rfc3164",
    };
}

/**
 * Base exporter using TCP as transport protocol.
 */
export interface TcpExporterArgs {
    /**
     * TCP url to export.
     */
    url: pulumi.Input<string>;
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
 * Receiver using UDP as transport protocol.
 */
export interface UdpReceiverArgs {
    /**
     * The encoding of the stream being received.
     */
    encoding?: pulumi.Input<string | enums.StreamEncodingType>;
    /**
     * TCP endpoint definition. Example: 0.0.0.0:<port>.
     */
    endpoint: pulumi.Input<string>;
    /**
     * Json array mapper - allows this udp receiver to parse a value from a given source field as a json array, match a key to each parsed value and output the key-value map to a given output field.
     */
    jsonArrayMapper?: pulumi.Input<JsonArrayMapperArgs>;
    /**
     * Max read queue length.
     */
    readQueueLength?: pulumi.Input<number>;
}
/**
 * udpReceiverArgsProvideDefaults sets the appropriate defaults for UdpReceiverArgs
 */
export function udpReceiverArgsProvideDefaults(val: UdpReceiverArgs): UdpReceiverArgs {
    return {
        ...val,
        encoding: (val.encoding) ?? "nop",
        jsonArrayMapper: (val.jsonArrayMapper ? pulumi.output(val.jsonArrayMapper).apply(jsonArrayMapperArgsProvideDefaults) : undefined),
        readQueueLength: (val.readQueueLength) ?? 1000,
    };
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
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: pulumi.Input<string>;
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
