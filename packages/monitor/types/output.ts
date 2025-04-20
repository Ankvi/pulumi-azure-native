import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties that define the scope private link mode settings exclusion item. This setting applies to a specific private endpoint connection and overrides the default settings for that private endpoint connection.
 */
export interface AccessModeSettingsExclusionResponse {
    /**
     * Specifies the access mode of ingestion through the specified private endpoint connection in the exclusion.
     */
    ingestionAccessMode?: string;
    /**
     * The private endpoint connection name associated to the private endpoint on which we want to apply the specific access mode settings.
     */
    privateEndpointConnectionName?: string;
    /**
     * Specifies the access mode of queries through the specified private endpoint connection in the exclusion.
     */
    queryAccessMode?: string;
}

/**
 * Properties that define the scope private link mode settings.
 */
export interface AccessModeSettingsResponse {
    /**
     * List of exclusions that override the default access mode settings for specific private endpoint connections.
     */
    exclusions?: AccessModeSettingsExclusionResponse[];
    /**
     * Specifies the default access mode of ingestion through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array.
     */
    ingestionAccessMode: string;
    /**
     * Specifies the default access mode of queries through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array.
     */
    queryAccessMode: string;
}

/**
 * A pointer to an Azure Action Group.
 */
export interface ActionGroupResponse {
    /**
     * The resource ID of the Action Group. This cannot be null or empty.
     */
    actionGroupId: string;
    /**
     * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
     */
    webhookProperties?: {[key: string]: string};
}

/**
 * A list of Activity Log Alert rule actions.
 */
export interface ActionListResponse {
    /**
     * The list of the Action Groups.
     */
    actionGroups?: ActionGroupResponse[];
}

/**
 * Actions to invoke when the alert fires.
 */
export interface ActionsResponse {
    /**
     * Action Group resource Ids to invoke when the alert fires.
     */
    actionGroups?: string[];
    /**
     * The properties of an action properties.
     */
    actionProperties?: {[key: string]: string};
    /**
     * The properties of an alert payload.
     */
    customProperties?: {[key: string]: string};
}

/**
 * An Activity Log Alert rule condition that is met when all its member conditions are met.
 */
export interface AlertRuleAllOfConditionResponse {
    /**
     * The list of Activity Log Alert rule conditions.
     */
    allOf: AlertRuleAnyOfOrLeafConditionResponse[];
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
export interface AlertRuleAnyOfOrLeafConditionResponse {
    /**
     * An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met.
     */
    anyOf?: AlertRuleLeafConditionResponse[];
    /**
     * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
     */
    containsAny?: string[];
    /**
     * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
     */
    equals?: string;
    /**
     * The name of the Activity Log event's field that this condition will examine.
     * The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
     */
    field?: string;
}

/**
 * An Activity Log Alert rule condition that is met by comparing the field and value of an Activity Log event.
 * This condition must contain 'field' and either 'equals' or 'containsAny'.
 */
export interface AlertRuleLeafConditionResponse {
    /**
     * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
     */
    containsAny?: string[];
    /**
     * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
     */
    equals?: string;
    /**
     * The name of the Activity Log event's field that this condition will examine.
     * The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
     */
    field?: string;
}

/**
 * An arm role receiver.
 */
export interface ArmRoleReceiverResponse {
    /**
     * The name of the arm role receiver. Names must be unique across all receivers within an action group.
     */
    name: string;
    /**
     * The arm role id.
     */
    roleId: string;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: boolean;
}
/**
 * armRoleReceiverResponseProvideDefaults sets the appropriate defaults for ArmRoleReceiverResponse
 */
export function armRoleReceiverResponseProvideDefaults(val: ArmRoleReceiverResponse): ArmRoleReceiverResponse {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * The Azure Automation Runbook notification receiver.
 */
export interface AutomationRunbookReceiverResponse {
    /**
     * The Azure automation account Id which holds this runbook and authenticate to Azure resource.
     */
    automationAccountId: string;
    /**
     * Indicates whether this instance is global runbook.
     */
    isGlobalRunbook: boolean;
    /**
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: string;
    /**
     * Indicates name of the webhook.
     */
    name?: string;
    /**
     * The name for this runbook.
     */
    runbookName: string;
    /**
     * The URI where webhooks should be sent.
     */
    serviceUri?: string;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: boolean;
    /**
     * The resource id for webhook linked to this runbook.
     */
    webhookResourceId: string;
}
/**
 * automationRunbookReceiverResponseProvideDefaults sets the appropriate defaults for AutomationRunbookReceiverResponse
 */
export function automationRunbookReceiverResponseProvideDefaults(val: AutomationRunbookReceiverResponse): AutomationRunbookReceiverResponse {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * Autoscale notification.
 */
export interface AutoscaleNotificationResponse {
    /**
     * the email notification.
     */
    email?: EmailNotificationResponse;
    /**
     * the operation associated with the notification and its value must be "scale"
     */
    operation: string;
    /**
     * the collection of webhook notifications.
     */
    webhooks?: WebhookNotificationResponse[];
}
/**
 * autoscaleNotificationResponseProvideDefaults sets the appropriate defaults for AutoscaleNotificationResponse
 */
export function autoscaleNotificationResponseProvideDefaults(val: AutoscaleNotificationResponse): AutoscaleNotificationResponse {
    return {
        ...val,
        email: (val.email ? emailNotificationResponseProvideDefaults(val.email) : undefined),
    };
}

/**
 * Autoscale profile.
 */
export interface AutoscaleProfileResponse {
    /**
     * the number of instances that can be used during this profile.
     */
    capacity: ScaleCapacityResponse;
    /**
     * the specific date-time for the profile. This element is not used if the Recurrence element is used.
     */
    fixedDate?: TimeWindowResponse;
    /**
     * the name of the profile.
     */
    name: string;
    /**
     * the repeating times at which this profile begins. This element is not used if the FixedDate element is used.
     */
    recurrence?: RecurrenceResponse;
    /**
     * the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.
     */
    rules: ScaleRuleResponse[];
}

/**
 * A setting that contains all of the configuration for the automatic scaling of a resource.
 */
export interface AutoscaleSettingResponse {
    /**
     * the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'false'.
     */
    enabled?: boolean;
    /**
     * the name of the autoscale setting.
     */
    name?: string;
    /**
     * the collection of notifications.
     */
    notifications?: AutoscaleNotificationResponse[];
    /**
     * the predictive autoscale policy mode.
     */
    predictiveAutoscalePolicy?: PredictiveAutoscalePolicyResponse;
    /**
     * the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified.
     */
    profiles: AutoscaleProfileResponse[];
    /**
     * the location of the resource that the autoscale setting should be added to.
     */
    targetResourceLocation?: string;
    /**
     * the resource identifier of the resource that the autoscale setting should be added to.
     */
    targetResourceUri?: string;
}
/**
 * autoscaleSettingResponseProvideDefaults sets the appropriate defaults for AutoscaleSettingResponse
 */
export function autoscaleSettingResponseProvideDefaults(val: AutoscaleSettingResponse): AutoscaleSettingResponse {
    return {
        ...val,
        enabled: (val.enabled) ?? false,
    };
}

/**
 * The Azure mobile App push notification receiver.
 */
export interface AzureAppPushReceiverResponse {
    /**
     * The email address registered for the Azure mobile app.
     */
    emailAddress: string;
    /**
     * The name of the Azure mobile app push receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: string;
}

/**
 * An azure function receiver.
 */
export interface AzureFunctionReceiverResponse {
    /**
     * The azure resource id of the function app.
     */
    functionAppResourceId: string;
    /**
     * The function name in the function app.
     */
    functionName: string;
    /**
     * The http trigger url where http request sent to.
     */
    httpTriggerUrl: string;
    /**
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: string;
    /**
     * The name of the azure function receiver. Names must be unique across all receivers within an action group.
     */
    name: string;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: boolean;
}
/**
 * azureFunctionReceiverResponseProvideDefaults sets the appropriate defaults for AzureFunctionReceiverResponse
 */
export function azureFunctionReceiverResponseProvideDefaults(val: AzureFunctionReceiverResponse): AzureFunctionReceiverResponse {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * Azure Monitor Workspace Logs Api configurations.
 */
export interface AzureMonitorWorkspaceLogsApiConfigResponse {
    /**
     * Data collection endpoint ingestion url.
     */
    dataCollectionEndpointUrl: string;
    /**
     * Data Collection Rule (DCR) immutable id.
     */
    dataCollectionRule: string;
    /**
     * The schema mapping for incoming data.
     */
    schema: SchemaMapResponse;
    /**
     * Stream name in destination. Azure Monitor stream is related to the destination table.
     */
    stream: string;
}

/**
 * Azure Monitor Workspace Logs specific configurations.
 */
export interface AzureMonitorWorkspaceLogsExporterResponse {
    /**
     * API configurations for Azure Monitor workspace exporter.
     */
    api: AzureMonitorWorkspaceLogsApiConfigResponse;
    /**
     * Cache configurations.
     */
    cache?: CacheConfigurationResponse;
    /**
     * Concurrency configuration for the exporter.
     */
    concurrency?: ConcurrencyConfigurationResponse;
}
/**
 * azureMonitorWorkspaceLogsExporterResponseProvideDefaults sets the appropriate defaults for AzureMonitorWorkspaceLogsExporterResponse
 */
export function azureMonitorWorkspaceLogsExporterResponseProvideDefaults(val: AzureMonitorWorkspaceLogsExporterResponse): AzureMonitorWorkspaceLogsExporterResponse {
    return {
        ...val,
        concurrency: (val.concurrency ? concurrencyConfigurationResponseProvideDefaults(val.concurrency) : undefined),
    };
}

/**
 * The complex type of the extended location.
 */
export interface AzureResourceManagerCommonTypesExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name: string;
    /**
     * The type of the extended location.
     */
    type: string;
}

/**
 * Batch processor.
 */
export interface BatchProcessorResponse {
    /**
     * Size of the batch.
     */
    batchSize?: number;
    /**
     * Timeout in milliseconds.
     */
    timeout?: number;
}
/**
 * batchProcessorResponseProvideDefaults sets the appropriate defaults for BatchProcessorResponse
 */
export function batchProcessorResponseProvideDefaults(val: BatchProcessorResponse): BatchProcessorResponse {
    return {
        ...val,
        batchSize: (val.batchSize) ?? 8192,
        timeout: (val.timeout) ?? 200,
    };
}

/**
 * Cache configurations.
 */
export interface CacheConfigurationResponse {
    /**
     * Max storage usage in megabytes.
     */
    maxStorageUsage?: number;
    /**
     * Retention period in minutes.
     */
    retentionPeriod?: number;
}

/**
 * Definition of custom data column.
 */
export interface ColumnDefinitionResponse {
    /**
     * The name of the column.
     */
    name?: string;
    /**
     * The type of the column data.
     */
    type?: string;
}

/**
 * Concurrent publishing configuration.
 */
export interface ConcurrencyConfigurationResponse {
    /**
     * Size of the queue for log batches.
     */
    batchQueueSize?: number;
    /**
     * Number of parallel workers processing the log queues.
     */
    workerCount?: number;
}
/**
 * concurrencyConfigurationResponseProvideDefaults sets the appropriate defaults for ConcurrencyConfigurationResponse
 */
export function concurrencyConfigurationResponseProvideDefaults(val: ConcurrencyConfigurationResponse): ConcurrencyConfigurationResponse {
    return {
        ...val,
        batchQueueSize: (val.batchQueueSize) ?? 100,
        workerCount: (val.workerCount) ?? 4,
    };
}

/**
 * A condition of the scheduled query rule.
 */
export interface ConditionResponse {
    /**
     * The extent of deviation required to trigger an alert. Allowed values are 'Low', 'Medium' and 'High'. This will affect how tight the threshold is to the metric series pattern. Relevant and required only for dynamic threshold rules of the kind LogAlert.
     */
    alertSensitivity?: string;
    /**
     * Specifies the type of threshold criteria
     */
    criterionType?: string;
    /**
     * List of Dimensions conditions
     */
    dimensions?: DimensionResponse[];
    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
     */
    failingPeriods?: ConditionResponseFailingPeriods;
    /**
     * Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format). Relevant only for dynamic threshold rules of the kind LogAlert.
     */
    ignoreDataBefore?: string;
    /**
     * The column containing the metric measure number. Relevant only for rules of the kind LogAlert.
     */
    metricMeasureColumn?: string;
    /**
     * The name of the metric to be sent. Relevant and required only for rules of the kind LogToMetric.
     */
    metricName?: string;
    /**
     * The criteria operator. Relevant and required only for rules of the kind LogAlert.
     */
    operator?: string;
    /**
     * Log query alert
     */
    query?: string;
    /**
     * The column containing the resource id. The content of the column must be a uri formatted as resource id. Relevant only for rules of the kind LogAlert.
     */
    resourceIdColumn?: string;
    /**
     * the criteria threshold value that activates the alert. Relevant and required only for static threshold rules of the kind LogAlert.
     */
    threshold?: number;
    /**
     * Aggregation type. Relevant and required only for rules of the kind LogAlert.
     */
    timeAggregation?: string;
}
/**
 * conditionResponseProvideDefaults sets the appropriate defaults for ConditionResponse
 */
export function conditionResponseProvideDefaults(val: ConditionResponse): ConditionResponse {
    return {
        ...val,
        failingPeriods: (val.failingPeriods ? conditionResponseFailingPeriodsProvideDefaults(val.failingPeriods) : undefined),
    };
}

/**
 * The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
 */
export interface ConditionResponseFailingPeriods {
    /**
     * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
     */
    minFailingPeriodsToAlert?: number;
    /**
     * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1
     */
    numberOfEvaluationPeriods?: number;
}
/**
 * conditionResponseFailingPeriodsProvideDefaults sets the appropriate defaults for ConditionResponseFailingPeriods
 */
export function conditionResponseFailingPeriodsProvideDefaults(val: ConditionResponseFailingPeriods): ConditionResponseFailingPeriods {
    return {
        ...val,
        minFailingPeriodsToAlert: (val.minFailingPeriodsToAlert) ?? 1,
        numberOfEvaluationPeriods: (val.numberOfEvaluationPeriods) ?? 1,
    };
}

/**
 * Managed service identity of the resource.
 */
export interface DataCollectionEndpointResourceResponseIdentity {
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
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface DataCollectionEndpointResourceResponseSystemData {
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
 * The endpoint used by clients to access their configuration.
 */
export interface DataCollectionEndpointResponseConfigurationAccess {
    /**
     * The endpoint. This property is READ-ONLY.
     */
    endpoint: string;
}

/**
 * Failover configuration on this endpoint. This property is READ-ONLY.
 */
export interface DataCollectionEndpointResponseFailoverConfiguration {
    /**
     * Active location where data flow will occur.
     */
    activeLocation?: string;
    /**
     * Locations that are configured for failover.
     */
    locations?: LocationSpecResponse[];
}

/**
 * The endpoint used by clients to ingest logs.
 */
export interface DataCollectionEndpointResponseLogsIngestion {
    /**
     * The endpoint. This property is READ-ONLY.
     */
    endpoint: string;
}

/**
 * Metadata for the resource. This property is READ-ONLY.
 */
export interface DataCollectionEndpointResponseMetadata {
    /**
     * Azure offering managing this resource on-behalf-of customer.
     */
    provisionedBy: string;
    /**
     * Resource Id of azure offering managing this resource on-behalf-of customer.
     */
    provisionedByResourceId: string;
}

/**
 * The endpoint used by clients to ingest metrics.
 */
export interface DataCollectionEndpointResponseMetricsIngestion {
    /**
     * The endpoint. This property is READ-ONLY.
     */
    endpoint: string;
}

/**
 * Network access control rules for the endpoints.
 */
export interface DataCollectionEndpointResponseNetworkAcls {
    /**
     * The configuration to set whether network access from public internet to the endpoints are allowed.
     */
    publicNetworkAccess?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface DataCollectionRuleAssociationProxyOnlyResourceResponseSystemData {
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
 * Metadata about the resource
 */
export interface DataCollectionRuleAssociationResponseMetadata {
    /**
     * Azure offering managing this resource on-behalf-of customer.
     */
    provisionedBy: string;
    /**
     * Resource Id of azure offering managing this resource on-behalf-of customer.
     */
    provisionedByResourceId: string;
}

/**
 * Managed service identity of the resource.
 */
export interface DataCollectionRuleResourceResponseIdentity {
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
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface DataCollectionRuleResourceResponseSystemData {
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
 * The specification of data sources. 
 * This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
 */
export interface DataCollectionRuleResponseDataSources {
    /**
     * Specifications of pull based data sources
     */
    dataImports?: DataSourcesSpecResponseDataImports;
    /**
     * The list of Azure VM extension data source configurations.
     */
    extensions?: ExtensionDataSourceResponse[];
    /**
     * The list of IIS logs source configurations.
     */
    iisLogs?: IisLogsDataSourceResponse[];
    /**
     * The list of Log files source configurations.
     */
    logFiles?: LogFilesDataSourceResponse[];
    /**
     * The list of performance counter data source configurations.
     */
    performanceCounters?: PerfCounterDataSourceResponse[];
    /**
     * The list of platform telemetry configurations
     */
    platformTelemetry?: PlatformTelemetryDataSourceResponse[];
    /**
     * The list of Prometheus forwarder data source configurations.
     */
    prometheusForwarder?: PrometheusForwarderDataSourceResponse[];
    /**
     * The list of Syslog data source configurations.
     */
    syslog?: SyslogDataSourceResponse[];
    /**
     * The list of Windows Event Log data source configurations.
     */
    windowsEventLogs?: WindowsEventLogDataSourceResponse[];
    /**
     * The list of Windows Firewall logs source configurations.
     */
    windowsFirewallLogs?: WindowsFirewallLogsDataSourceResponse[];
}

/**
 * The specification of destinations.
 */
export interface DataCollectionRuleResponseDestinations {
    /**
     * Azure Monitor Metrics destination.
     */
    azureMonitorMetrics?: DestinationsSpecResponseAzureMonitorMetrics;
    /**
     * List of Event Hubs destinations.
     */
    eventHubs?: EventHubDestinationResponse[];
    /**
     * List of Event Hubs Direct destinations.
     */
    eventHubsDirect?: EventHubDirectDestinationResponse[];
    /**
     * List of Log Analytics destinations.
     */
    logAnalytics?: LogAnalyticsDestinationResponse[];
    /**
     * List of monitoring account destinations.
     */
    monitoringAccounts?: MonitoringAccountDestinationResponse[];
    /**
     * List of storage accounts destinations.
     */
    storageAccounts?: StorageBlobDestinationResponse[];
    /**
     * List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent.
     */
    storageBlobsDirect?: StorageBlobDestinationResponse[];
    /**
     * List of Storage Table Direct destinations.
     */
    storageTablesDirect?: StorageTableDestinationResponse[];
}

/**
 * Metadata about the resource
 */
export interface DataCollectionRuleResponseMetadata {
    /**
     * Azure offering managing this resource on-behalf-of customer.
     */
    provisionedBy: string;
    /**
     * Resource Id of azure offering managing this resource on-behalf-of customer.
     */
    provisionedByResourceId: string;
}

/**
 * Definition of which streams are sent to which destinations.
 */
export interface DataFlowResponse {
    /**
     * The builtIn transform to transform stream data
     */
    builtInTransform?: string;
    /**
     * List of destinations for this data flow.
     */
    destinations?: string[];
    /**
     * The output stream of the transform. Only required if the transform changes data to a different stream.
     */
    outputStream?: string;
    /**
     * List of streams for this data flow.
     */
    streams?: string[];
    /**
     * The KQL query to transform stream data.
     */
    transformKql?: string;
}

/**
 * Definition of Event Hub configuration.
 */
export interface DataImportSourcesResponseEventHub {
    /**
     * Event Hub consumer group name
     */
    consumerGroup?: string;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * The stream to collect from EventHub
     */
    stream?: string;
}

/**
 * Specifications of pull based data sources
 */
export interface DataSourcesSpecResponseDataImports {
    /**
     * Definition of Event Hub configuration.
     */
    eventHub?: DataImportSourcesResponseEventHub;
}

/**
 * Azure Monitor Metrics destination.
 */
export interface DestinationsSpecResponseAzureMonitorMetrics {
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: string;
}

/**
 * The diagnostic settings category resource.
 */
export interface DiagnosticSettingsCategoryResourceResponse {
    /**
     * the collection of what category groups are supported.
     */
    categoryGroups?: string[];
    /**
     * The type of the diagnostic settings category.
     */
    categoryType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The system metadata related to this resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Dimension splitting and filtering definition
 */
export interface DimensionResponse {
    /**
     * Name of the dimension
     */
    name: string;
    /**
     * Operator for dimension values
     */
    operator: string;
    /**
     * List of dimension values
     */
    values: string[];
}

/**
 * Criterion for dynamic threshold.
 */
export interface DynamicMetricCriteriaResponse {
    /**
     * The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
     */
    alertSensitivity: string;
    /**
     * Specifies the type of threshold criteria
     * Expected value is 'DynamicThresholdCriterion'.
     */
    criterionType: "DynamicThresholdCriterion";
    /**
     * List of dimension conditions.
     */
    dimensions?: MetricDimensionResponse[];
    /**
     * The minimum number of violations required within the selected lookback time window required to raise an alert.
     */
    failingPeriods: DynamicThresholdFailingPeriodsResponse;
    /**
     * Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
     */
    ignoreDataBefore?: string;
    /**
     * Name of the metric.
     */
    metricName: string;
    /**
     * Namespace of the metric.
     */
    metricNamespace?: string;
    /**
     * Name of the criteria.
     */
    name: string;
    /**
     * The operator used to compare the metric value against the threshold.
     */
    operator: string;
    /**
     * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
     */
    skipMetricValidation?: boolean;
    /**
     * the criteria time aggregation types.
     */
    timeAggregation: string;
}

/**
 * The minimum number of violations required within the selected lookback time window required to raise an alert.
 */
export interface DynamicThresholdFailingPeriodsResponse {
    /**
     * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
     */
    minFailingPeriodsToAlert: number;
    /**
     * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.
     */
    numberOfEvaluationPeriods: number;
}

/**
 * Email notification of an autoscale event.
 */
export interface EmailNotificationResponse {
    /**
     * the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored.
     */
    customEmails?: string[];
    /**
     * a value indicating whether to send email to subscription administrator.
     */
    sendToSubscriptionAdministrator?: boolean;
    /**
     * a value indicating whether to send email to subscription co-administrators.
     */
    sendToSubscriptionCoAdministrators?: boolean;
}
/**
 * emailNotificationResponseProvideDefaults sets the appropriate defaults for EmailNotificationResponse
 */
export function emailNotificationResponseProvideDefaults(val: EmailNotificationResponse): EmailNotificationResponse {
    return {
        ...val,
        sendToSubscriptionAdministrator: (val.sendToSubscriptionAdministrator) ?? false,
        sendToSubscriptionCoAdministrators: (val.sendToSubscriptionCoAdministrators) ?? false,
    };
}

/**
 * An email receiver.
 */
export interface EmailReceiverResponse {
    /**
     * The email address of this receiver.
     */
    emailAddress: string;
    /**
     * The name of the email receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: string;
    /**
     * The receiver status of the e-mail.
     */
    status: string;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: boolean;
}
/**
 * emailReceiverResponseProvideDefaults sets the appropriate defaults for EmailReceiverResponse
 */
export function emailReceiverResponseProvideDefaults(val: EmailReceiverResponse): EmailReceiverResponse {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

export interface EventHubDestinationResponse {
    /**
     * The resource ID of the event hub.
     */
    eventHubResourceId?: string;
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: string;
}

export interface EventHubDirectDestinationResponse {
    /**
     * The resource ID of the event hub.
     */
    eventHubResourceId?: string;
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: string;
}

/**
 * An Event hub receiver.
 */
export interface EventHubReceiverResponse {
    /**
     * The name of the specific Event Hub queue
     */
    eventHubName: string;
    /**
     * The Event Hub namespace
     */
    eventHubNameSpace: string;
    /**
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: string;
    /**
     * The name of the Event hub receiver. Names must be unique across all receivers within an action group.
     */
    name: string;
    /**
     * The Id for the subscription containing this event hub
     */
    subscriptionId: string;
    /**
     * The tenant Id for the subscription containing this event hub
     */
    tenantId?: string;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: boolean;
}
/**
 * eventHubReceiverResponseProvideDefaults sets the appropriate defaults for EventHubReceiverResponse
 */
export function eventHubReceiverResponseProvideDefaults(val: EventHubReceiverResponse): EventHubReceiverResponse {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * Exporter Info.
 */
export interface ExporterResponse {
    /**
     * Azure Monitor Workspace Logs specific configurations.
     */
    azureMonitorWorkspaceLogs?: AzureMonitorWorkspaceLogsExporterResponse;
    /**
     * The name of exporter.
     */
    name: string;
    /**
     * TCP based exporter. Used for pipelineGroup exporter.
     */
    tcp?: TcpExporterResponse;
    /**
     * The type of exporter.
     */
    type: string;
}
/**
 * exporterResponseProvideDefaults sets the appropriate defaults for ExporterResponse
 */
export function exporterResponseProvideDefaults(val: ExporterResponse): ExporterResponse {
    return {
        ...val,
        azureMonitorWorkspaceLogs: (val.azureMonitorWorkspaceLogs ? azureMonitorWorkspaceLogsExporterResponseProvideDefaults(val.azureMonitorWorkspaceLogs) : undefined),
    };
}

/**
 * Definition of which data will be collected from a separate VM extension that integrates with the Azure Monitor Agent.
 * Collected from either Windows and Linux machines, depending on which extension is defined.
 */
export interface ExtensionDataSourceResponse {
    /**
     * The name of the VM extension.
     */
    extensionName: string;
    /**
     * The extension settings. The format is specific for particular extension.
     */
    extensionSettings?: any;
    /**
     * The list of data sources this extension needs data from.
     */
    inputDataSources?: string[];
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
     */
    streams?: string[];
}

/**
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * Type of managed service identity.
     */
    type: string;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
}

/**
 * Enables IIS logs to be collected by this data collection rule.
 */
export interface IisLogsDataSourceResponse {
    /**
     * Absolute paths file location
     */
    logDirectories?: string[];
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * IIS streams
     */
    streams: string[];
}

/**
 * An Incident receiver.
 */
export interface IncidentReceiverResponse {
    /**
     * The incident service connection
     */
    connection: IncidentServiceConnectionResponse;
    /**
     * The incident management service type
     */
    incidentManagementService: string;
    /**
     * Field mappings for the incident service
     */
    mappings: {[key: string]: string};
    /**
     * The name of the Incident receiver. Names must be unique across all receivers within an action group.
     */
    name: string;
}

/**
 * The connection info for Incident Receiver.
 */
export interface IncidentServiceConnectionResponse {
    /**
     * GUID value representing the connection ID for the incident management service.
     */
    id: string;
    /**
     * The name of the connection.
     */
    name: string;
}

/**
 * Settings for data ingestion
 */
export interface IngestionSettingsResponse {
    /**
     * The Azure resource Id of the default data collection endpoint for this workspace.
     */
    dataCollectionEndpointResourceId: string;
    /**
     * The Azure resource Id of the default data collection rule for this workspace.
     */
    dataCollectionRuleResourceId: string;
}

/**
 * An Itsm receiver.
 */
export interface ItsmReceiverResponse {
    /**
     * Unique identification of ITSM connection among multiple defined in above workspace.
     */
    connectionId: string;
    /**
     * The name of the Itsm receiver. Names must be unique across all receivers within an action group.
     */
    name: string;
    /**
     * Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
     */
    region: string;
    /**
     * JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
     */
    ticketConfiguration: string;
    /**
     * OMS LA instance identifier.
     */
    workspaceId: string;
}

/**
 * A component that allows parsing a value from sourceField as a json array, match a key to each parsed value from keys, and output the key-value map to destinationField field.
 */
export interface JsonArrayMapperResponse {
    /**
     * Define a destination field to which the parsed output will be written. The output is a map, it's keys is the given keys array and the matching values are the parsed json array elements.
     */
    destinationField?: JsonMapperDestinationFieldResponse;
    /**
     * Define the names of the keys in the resulting map. The input json array elements are mapped in order, one for every key.
     */
    keys: string[];
    /**
     * Define a source field from which a json array will be read and parsed to it's elements. The number of elements in the json array is expected to be the same as the length of keys.
     */
    sourceField?: JsonMapperSourceFieldResponse;
}
/**
 * jsonArrayMapperResponseProvideDefaults sets the appropriate defaults for JsonArrayMapperResponse
 */
export function jsonArrayMapperResponseProvideDefaults(val: JsonArrayMapperResponse): JsonArrayMapperResponse {
    return {
        ...val,
        destinationField: (val.destinationField ? jsonMapperDestinationFieldResponseProvideDefaults(val.destinationField) : undefined),
    };
}

/**
 * JsonArrayMapper destination field used to describe the field to which the parsed output will be written.
 */
export interface JsonMapperDestinationFieldResponse {
    /**
     * Define the destination's element. The element is the body or the attributes of the message, to which the json array mapper will write the output map.
     */
    destination?: string;
    /**
     * Define a destination field name under the given element. Leaving this empty, means the root of the element. In case element=attributes and fieldName is empty, the object's attributes themselves will contain the key value output pairs.
     */
    fieldName?: string;
}
/**
 * jsonMapperDestinationFieldResponseProvideDefaults sets the appropriate defaults for JsonMapperDestinationFieldResponse
 */
export function jsonMapperDestinationFieldResponseProvideDefaults(val: JsonMapperDestinationFieldResponse): JsonMapperDestinationFieldResponse {
    return {
        ...val,
        destination: (val.destination) ?? "attributes",
    };
}

/**
 * JsonArrayMapper source field used to describe the field from which the json array will be read.
 */
export interface JsonMapperSourceFieldResponse {
    /**
     * Define a source field name from which the json array mapper will read the json array. Leaving this empty, means reading the body of the message itself.
     */
    fieldName?: string;
}

export interface LocationSpecResponse {
    /**
     * Name of location.
     */
    location?: string;
    /**
     * The resource provisioning state in this location.
     */
    provisioningStatus?: string;
}

/**
 * Log Analytics destination.
 */
export interface LogAnalyticsDestinationResponse {
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * The Customer ID of the Log Analytics workspace.
     */
    workspaceId: string;
    /**
     * The resource ID of the Log Analytics workspace.
     */
    workspaceResourceId?: string;
}

/**
 * Text settings
 */
export interface LogFileSettingsResponseText {
    /**
     * One of the supported timestamp formats
     */
    recordStartTimestampFormat: string;
}

/**
 * Definition of which custom log files will be collected by this data collection rule
 */
export interface LogFilesDataSourceResponse {
    /**
     * File Patterns where the log files are located
     */
    filePatterns: string[];
    /**
     * The data format of the log files
     */
    format: string;
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * The log files specific settings.
     */
    settings?: LogFilesDataSourceResponseSettings;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data source
     */
    streams: string[];
}

/**
 * The log files specific settings.
 */
export interface LogFilesDataSourceResponseSettings {
    /**
     * Text settings
     */
    text?: LogFileSettingsResponseText;
}

/**
 * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
 */
export interface LogSettingsResponse {
    /**
     * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
     */
    category?: string;
    /**
     * Name of a Diagnostic Log category group for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
     */
    categoryGroup?: string;
    /**
     * a value indicating whether this log is enabled.
     */
    enabled: boolean;
    /**
     * the retention policy for this log.
     */
    retentionPolicy?: RetentionPolicyResponse;
}

/**
 * A logic app receiver.
 */
export interface LogicAppReceiverResponse {
    /**
     * The callback url where http request sent to.
     */
    callbackUrl: string;
    /**
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: string;
    /**
     * The name of the logic app receiver. Names must be unique across all receivers within an action group.
     */
    name: string;
    /**
     * The azure resource id of the logic app receiver.
     */
    resourceId: string;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: boolean;
}
/**
 * logicAppReceiverResponseProvideDefaults sets the appropriate defaults for LogicAppReceiverResponse
 */
export function logicAppReceiverResponseProvideDefaults(val: LogicAppReceiverResponse): LogicAppReceiverResponse {
    return {
        ...val,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
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
 * Part of Management Group diagnostic setting. Specifies the settings for a particular log.
 */
export interface ManagementGroupLogSettingsResponse {
    /**
     * Name of a Management Group Diagnostic Log category for a resource type this setting is applied to.
     */
    category?: string;
    /**
     * Name of a Management Group Diagnostic Log category group for a resource type this setting is applied to.
     */
    categoryGroup?: string;
    /**
     * a value indicating whether this log is enabled.
     */
    enabled: boolean;
}

/**
 * An alert action.
 */
export interface MetricAlertActionResponse {
    /**
     * the id of the action group to use.
     */
    actionGroupId?: string;
    /**
     * This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.
     */
    webHookProperties?: {[key: string]: string};
}

/**
 * Specifies the metric alert criteria for multiple resource that has multiple metric criteria.
 */
export interface MetricAlertMultipleResourceMultipleMetricCriteriaResponse {
    /**
     * the list of multiple metric criteria for this 'all of' operation. 
     */
    allOf?: (DynamicMetricCriteriaResponse | MetricCriteriaResponse)[];
    /**
     * specifies the type of the alert criteria.
     * Expected value is 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'.
     */
    odataType: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria";
}

/**
 * Specifies the metric alert criteria for a single resource that has multiple metric criteria.
 */
export interface MetricAlertSingleResourceMultipleMetricCriteriaResponse {
    /**
     * The list of metric criteria for this 'all of' operation. 
     */
    allOf?: MetricCriteriaResponse[];
    /**
     * specifies the type of the alert criteria.
     * Expected value is 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria'.
     */
    odataType: "Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria";
}

/**
 * Criterion to filter metrics.
 */
export interface MetricCriteriaResponse {
    /**
     * Specifies the type of threshold criteria
     * Expected value is 'StaticThresholdCriterion'.
     */
    criterionType: "StaticThresholdCriterion";
    /**
     * List of dimension conditions.
     */
    dimensions?: MetricDimensionResponse[];
    /**
     * Name of the metric.
     */
    metricName: string;
    /**
     * Namespace of the metric.
     */
    metricNamespace?: string;
    /**
     * Name of the criteria.
     */
    name: string;
    /**
     * the criteria operator.
     */
    operator: string;
    /**
     * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
     */
    skipMetricValidation?: boolean;
    /**
     * the criteria threshold value that activates the alert.
     */
    threshold: number;
    /**
     * the criteria time aggregation types.
     */
    timeAggregation: string;
}

/**
 * Specifies a metric dimension.
 */
export interface MetricDimensionResponse {
    /**
     * Name of the dimension.
     */
    name: string;
    /**
     * the dimension operator. Only 'Include' and 'Exclude' are supported
     */
    operator: string;
    /**
     * list of dimension values.
     */
    values: string[];
}

/**
 * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric.
 */
export interface MetricSettingsResponse {
    /**
     * Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation.
     */
    category?: string;
    /**
     * a value indicating whether this category is enabled.
     */
    enabled: boolean;
    /**
     * the retention policy for this category.
     */
    retentionPolicy?: RetentionPolicyResponse;
    /**
     * the timegrain of the metric in ISO8601 format.
     */
    timeGrain?: string;
}

/**
 * The trigger that results in a scaling action.
 */
export interface MetricTriggerResponse {
    /**
     * List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}].
     */
    dimensions?: ScaleRuleMetricDimensionResponse[];
    /**
     * a value indicating whether metric should divide per instance.
     */
    dividePerInstance?: boolean;
    /**
     * the name of the metric that defines what the rule monitors.
     */
    metricName: string;
    /**
     * the namespace of the metric that defines what the rule monitors.
     */
    metricNamespace?: string;
    /**
     * the location of the resource the rule monitors.
     */
    metricResourceLocation?: string;
    /**
     * the resource identifier of the resource the rule monitors.
     */
    metricResourceUri: string;
    /**
     * the operator that is used to compare the metric data and the threshold.
     */
    operator: string;
    /**
     * the metric statistic type. How the metrics from multiple instances are combined.
     */
    statistic: string;
    /**
     * the threshold of the metric that triggers the scale action.
     */
    threshold: number;
    /**
     * time aggregation type. How the data that is collected should be combined over time. The default value is Average.
     */
    timeAggregation: string;
    /**
     * the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
     */
    timeGrain: string;
    /**
     * the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.
     */
    timeWindow: string;
}

/**
 * Information about metrics for the workspace
 */
export interface MetricsResponse {
    /**
     * An internal identifier for the metrics container. Only to be used by the system
     */
    internalId: string;
    /**
     * The Prometheus query endpoint for the workspace
     */
    prometheusQueryEndpoint: string;
}

/**
 * Monitoring account destination.
 */
export interface MonitoringAccountDestinationResponse {
    /**
     * The immutable ID  of the account.
     */
    accountId: string;
    /**
     * The resource ID of the monitoring account.
     */
    accountResourceId?: string;
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: string;
}

/**
 * Networking configuration for the pipeline group instance.
 */
export interface NetworkingConfigurationResponse {
    /**
     * External networking mode.
     */
    externalNetworkingMode: string;
    /**
     * The address exposed on the cluster. Example: azuremonitorpipeline.contoso.com.
     */
    host?: string;
    /**
     * Networking routes configuration.
     */
    routes: NetworkingRouteResponse[];
}

/**
 * Networking route configuration.
 */
export interface NetworkingRouteResponse {
    /**
     * Route path.
     */
    path?: string;
    /**
     * The port that will be configured externally. If not specified, it will use the port from the receiver definition.
     */
    port?: number;
    /**
     * The name of the previously defined receiver.
     */
    receiver: string;
    /**
     * Route subdomain.
     */
    subdomain?: string;
}

/**
 * OTLP Receiver.
 */
export interface OtlpReceiverResponse {
    /**
     * OTLP GRPC endpoint definition. Example: 0.0.0.0:<port>.
     */
    endpoint: string;
}

/**
 * Definition of which performance counters will be collected and how they will be collected by this data collection rule.
 * Collected from both Windows and Linux machines where the counter is present.
 */
export interface PerfCounterDataSourceResponse {
    /**
     * A list of specifier names of the performance counters you want to collect.
     * Use a wildcard (*) to collect a counter for all instances.
     * To get a list of performance counters on Windows, run the command 'typeperf'.
     */
    counterSpecifiers?: string[];
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * The number of seconds between consecutive counter measurements (samples).
     */
    samplingFrequencyInSeconds?: number;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
     */
    streams?: string[];
}

/**
 * Persistence options to all pipelines in the instance.
 */
export interface PersistenceConfigurationsResponse {
    /**
     * The name of the mounted persistent volume.
     */
    persistentVolumeName: string;
}

/**
 * Properties that need to be specified to create a new pipeline group instance.
 */
export interface PipelineGroupPropertiesResponse {
    /**
     * The exporters specified for a pipeline group instance.
     */
    exporters: ExporterResponse[];
    /**
     * Networking configurations for the pipeline group instance.
     */
    networkingConfigurations?: NetworkingConfigurationResponse[];
    /**
     * The processors specified for a pipeline group instance.
     */
    processors: ProcessorResponse[];
    /**
     * The provisioning state of a pipeline group instance. Set to Succeeded if everything is healthy.
     */
    provisioningState: string;
    /**
     * The receivers specified for a pipeline group instance.
     */
    receivers: ReceiverResponse[];
    /**
     * Defines the amount of replicas of the pipeline group instance.
     */
    replicas?: number;
    /**
     * The service section for a given pipeline group instance.
     */
    service: ServiceResponse;
}

/**
 * Pipeline Info.
 */
export interface PipelineResponse {
    /**
     * Reference to exporters configured for the pipeline.
     */
    exporters: string[];
    /**
     * Name of the pipeline.
     */
    name: string;
    /**
     * Reference to processors configured for the pipeline.
     */
    processors?: string[];
    /**
     * Reference to receivers configured for the pipeline.
     */
    receivers: string[];
    /**
     * The type of pipeline
     */
    type: string;
}

/**
 * Definition of platform telemetry data source configuration
 */
export interface PlatformTelemetryDataSourceResponse {
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * List of platform telemetry streams to collect
     */
    streams: string[];
}

/**
 * The parameters for enabling predictive autoscale.
 */
export interface PredictiveAutoscalePolicyResponse {
    /**
     * the amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format.
     */
    scaleLookAheadTime?: string;
    /**
     * the predictive autoscale mode
     */
    scaleMode: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData?: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

export interface PrivateLinkScopedResourceResponse {
    /**
     * The resourceId of the Azure Monitor Private Link Scope Scoped Resource through which this DCE is associated with a Azure Monitor Private Link Scope.
     */
    resourceId?: string;
    /**
     * The immutableId of the Azure Monitor Private Link Scope Resource to which the association is.
     */
    scopeId?: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * Processor Info.
 */
export interface ProcessorResponse {
    /**
     * Batch processor configurations.
     */
    batch?: BatchProcessorResponse;
    /**
     * The name of processor.
     */
    name: string;
    /**
     * The type of processor.
     */
    type: string;
}
/**
 * processorResponseProvideDefaults sets the appropriate defaults for ProcessorResponse
 */
export function processorResponseProvideDefaults(val: ProcessorResponse): ProcessorResponse {
    return {
        ...val,
        batch: (val.batch ? batchProcessorResponseProvideDefaults(val.batch) : undefined),
    };
}

/**
 * Definition of Prometheus metrics forwarding configuration.
 */
export interface PrometheusForwarderDataSourceResponse {
    /**
     * The list of label inclusion filters in the form of label "name-value" pairs.
     * Currently only one label is supported: 'microsoft_metrics_include_label'.
     * Label values are matched case-insensitively.
     */
    labelIncludeFilter?: {[key: string]: string};
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * List of streams that this data source will be sent to.
     */
    streams?: string[];
}

/**
 * Receiver Info.
 */
export interface ReceiverResponse {
    /**
     * The name of receiver.
     */
    name: string;
    /**
     * OTLP receiver configurations. This field is mandatory for OTLP and pipelineGroup receivers.
     */
    otlp?: OtlpReceiverResponse;
    /**
     * Syslog configurations. This field is mandatory for syslog type receivers.
     */
    syslog?: SyslogReceiverResponse;
    /**
     * The type of receiver.
     */
    type: string;
    /**
     * UDP receiver configurations. This field is mandatory for UDP receivers.
     */
    udp?: UdpReceiverResponse;
}
/**
 * receiverResponseProvideDefaults sets the appropriate defaults for ReceiverResponse
 */
export function receiverResponseProvideDefaults(val: ReceiverResponse): ReceiverResponse {
    return {
        ...val,
        syslog: (val.syslog ? syslogReceiverResponseProvideDefaults(val.syslog) : undefined),
        udp: (val.udp ? udpReceiverResponseProvideDefaults(val.udp) : undefined),
    };
}

/**
 * Record map for schema in azure monitor.
 */
export interface RecordMapResponse {
    /**
     * Record Map Key.
     */
    from: string;
    /**
     * Record Map Value.
     */
    to: string;
}

/**
 * The repeating times at which this profile begins. This element is not used if the FixedDate element is used.
 */
export interface RecurrenceResponse {
    /**
     * the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
     */
    frequency: string;
    /**
     * the scheduling constraints for when the profile begins.
     */
    schedule: RecurrentScheduleResponse;
}

/**
 * The scheduling constraints for when the profile begins.
 */
export interface RecurrentScheduleResponse {
    /**
     * the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
     */
    days: string[];
    /**
     * A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
     */
    hours: number[];
    /**
     * A collection of minutes at which the profile takes effect at.
     */
    minutes: number[];
    /**
     * the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
     */
    timeZone: string;
}

/**
 * Resource map for schema in azure monitor.
 */
export interface ResourceMapResponse {
    /**
     * Resource Map Key.
     */
    from: string;
    /**
     * Resource Map Value.
     */
    to: string;
}

/**
 * Specifies the retention policy for the log.
 */
export interface RetentionPolicyResponse {
    /**
     * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
     */
    days: number;
    /**
     * a value indicating whether the retention policy is enabled.
     */
    enabled: boolean;
}

/**
 * TBD. Relevant only for rules of the kind LogAlert.
 */
export interface RuleResolveConfigurationResponse {
    /**
     * The flag that indicates whether or not to auto resolve a fired alert.
     */
    autoResolved?: boolean;
    /**
     * The duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format.
     */
    timeToResolve?: string;
}

/**
 * The parameters for the scaling action.
 */
export interface ScaleActionResponse {
    /**
     * the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
     */
    cooldown: string;
    /**
     * the scale direction. Whether the scaling action increases or decreases the number of instances.
     */
    direction: string;
    /**
     * the type of action that should occur when the scale rule fires.
     */
    type: string;
    /**
     * the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1.
     */
    value?: string;
}
/**
 * scaleActionResponseProvideDefaults sets the appropriate defaults for ScaleActionResponse
 */
export function scaleActionResponseProvideDefaults(val: ScaleActionResponse): ScaleActionResponse {
    return {
        ...val,
        value: (val.value) ?? "1",
    };
}

/**
 * The number of instances that can be used during this profile.
 */
export interface ScaleCapacityResponse {
    /**
     * the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
     */
    default: string;
    /**
     * the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
     */
    maximum: string;
    /**
     * the minimum number of instances for the resource.
     */
    minimum: string;
}

/**
 * Specifies an auto scale rule metric dimension.
 */
export interface ScaleRuleMetricDimensionResponse {
    /**
     * Name of the dimension.
     */
    dimensionName: string;
    /**
     * the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
     */
    operator: string;
    /**
     * list of dimension values. For example: ["App1","App2"].
     */
    values: string[];
}

/**
 * A rule that provide the triggers and parameters for the scaling action.
 */
export interface ScaleRuleResponse {
    /**
     * the trigger that results in a scaling action.
     */
    metricTrigger: MetricTriggerResponse;
    /**
     * the parameters for the scaling action.
     */
    scaleAction: ScaleActionResponse;
}
/**
 * scaleRuleResponseProvideDefaults sets the appropriate defaults for ScaleRuleResponse
 */
export function scaleRuleResponseProvideDefaults(val: ScaleRuleResponse): ScaleRuleResponse {
    return {
        ...val,
        scaleAction: scaleActionResponseProvideDefaults(val.scaleAction),
    };
}

/**
 * The rule criteria that defines the conditions of the scheduled query rule.
 */
export interface ScheduledQueryRuleCriteriaResponse {
    /**
     * A list of conditions to evaluate against the specified scopes
     */
    allOf?: ConditionResponse[];
}

/**
 * Schema map for azure monitor for logs.
 */
export interface SchemaMapResponse {
    /**
     * Record Map.
     */
    recordMap: RecordMapResponse[];
    /**
     * Resource Map captures information about the entity for which telemetry is recorded. For example, metrics exposed by a Kubernetes container can be linked to a resource that specifies the cluster, namespace, pod, and container name.Resource may capture an entire hierarchy of entity identification. It may describe the host in the cloud and specific container or an application running in the process.
     */
    resourceMap?: ResourceMapResponse[];
    /**
     * A scope map is a logical unit of the application code with which the emitted telemetry can be associated.
     */
    scopeMap?: ScopeMapResponse[];
}

/**
 * Scope map for schema in azure monitor.
 */
export interface ScopeMapResponse {
    /**
     * Scope Map Key.
     */
    from: string;
    /**
     * Scope Map Value.
     */
    to: string;
}

/**
 * Service Info.
 */
export interface ServiceResponse {
    /**
     * Persistence options to all pipelines in the instance.
     */
    persistence?: PersistenceConfigurationsResponse;
    /**
     * Pipelines belonging to a given pipeline group.
     */
    pipelines: PipelineResponse[];
}

/**
 * An SMS receiver.
 */
export interface SmsReceiverResponse {
    /**
     * The country code of the SMS receiver.
     */
    countryCode: string;
    /**
     * The name of the SMS receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: string;
    /**
     * The phone number of the SMS receiver.
     */
    phoneNumber: string;
    /**
     * The status of the receiver.
     */
    status: string;
}

export interface StorageBlobDestinationResponse {
    /**
     * The container name of the Storage Blob.
     */
    containerName?: string;
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * The resource ID of the storage account.
     */
    storageAccountResourceId?: string;
}

export interface StorageTableDestinationResponse {
    /**
     * A friendly name for the destination. 
     * This name should be unique across all destinations (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * The resource ID of the storage account.
     */
    storageAccountResourceId?: string;
    /**
     * The name of the Storage Table.
     */
    tableName?: string;
}

/**
 * Declaration of a custom stream.
 */
export interface StreamDeclarationResponse {
    /**
     * List of columns used by data in this stream.
     */
    columns?: ColumnDefinitionResponse[];
}

/**
 * Part of Subscription diagnostic setting. Specifies the settings for a particular log.
 */
export interface SubscriptionLogSettingsResponse {
    /**
     * Name of a Subscription Diagnostic Log category for a resource type this setting is applied to.
     */
    category?: string;
    /**
     * Name of a Subscription Diagnostic Log category group for a resource type this setting is applied to.
     */
    categoryGroup?: string;
    /**
     * a value indicating whether this log is enabled.
     */
    enabled: boolean;
}

/**
 * Definition of which syslog data will be collected and how it will be collected.
 * Only collected from Linux machines.
 */
export interface SyslogDataSourceResponse {
    /**
     * The list of facility names.
     */
    facilityNames?: string[];
    /**
     * The log levels to collect.
     */
    logLevels?: string[];
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
     */
    streams?: string[];
}

/**
 * Base receiver using TCP as transport protocol.
 */
export interface SyslogReceiverResponse {
    /**
     * Syslog receiver endpoint definition. Example: 0.0.0.0:<port>.
     */
    endpoint: string;
    /**
     * Protocol to parse syslog messages. Default rfc3164
     */
    protocol?: string;
}
/**
 * syslogReceiverResponseProvideDefaults sets the appropriate defaults for SyslogReceiverResponse
 */
export function syslogReceiverResponseProvideDefaults(val: SyslogReceiverResponse): SyslogReceiverResponse {
    return {
        ...val,
        protocol: (val.protocol) ?? "rfc3164",
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
 * Base exporter using TCP as transport protocol.
 */
export interface TcpExporterResponse {
    /**
     * TCP url to export.
     */
    url: string;
}

/**
 * A specific date-time for the profile.
 */
export interface TimeWindowResponse {
    /**
     * the end time for the profile in ISO 8601 format.
     */
    end: string;
    /**
     * the start time for the profile in ISO 8601 format.
     */
    start: string;
    /**
     * the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
     */
    timeZone?: string;
}

/**
 * Receiver using UDP as transport protocol.
 */
export interface UdpReceiverResponse {
    /**
     * The encoding of the stream being received.
     */
    encoding?: string;
    /**
     * TCP endpoint definition. Example: 0.0.0.0:<port>.
     */
    endpoint: string;
    /**
     * Json array mapper - allows this udp receiver to parse a value from a given source field as a json array, match a key to each parsed value and output the key-value map to a given output field.
     */
    jsonArrayMapper?: JsonArrayMapperResponse;
    /**
     * Max read queue length.
     */
    readQueueLength?: number;
}
/**
 * udpReceiverResponseProvideDefaults sets the appropriate defaults for UdpReceiverResponse
 */
export function udpReceiverResponseProvideDefaults(val: UdpReceiverResponse): UdpReceiverResponse {
    return {
        ...val,
        encoding: (val.encoding) ?? "nop",
        jsonArrayMapper: (val.jsonArrayMapper ? jsonArrayMapperResponseProvideDefaults(val.jsonArrayMapper) : undefined),
        readQueueLength: (val.readQueueLength) ?? 1000,
    };
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
 * User assigned identity properties.
 */
export interface UserIdentityPropertiesResponse {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
}

/**
 * A voice receiver.
 */
export interface VoiceReceiverResponse {
    /**
     * The country code of the voice receiver.
     */
    countryCode: string;
    /**
     * The name of the voice receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: string;
    /**
     * The phone number of the voice receiver.
     */
    phoneNumber: string;
}

/**
 * Webhook notification of an autoscale event.
 */
export interface WebhookNotificationResponse {
    /**
     * a property bag of settings. This value can be empty.
     */
    properties?: {[key: string]: string};
    /**
     * the service address to receive the notification.
     */
    serviceUri?: string;
}

/**
 * A webhook receiver.
 */
export interface WebhookReceiverResponse {
    /**
     * Indicates the identifier uri for aad auth.
     */
    identifierUri?: string;
    /**
     * The principal id of the managed identity. The value can be "None", "SystemAssigned" 
     */
    managedIdentity?: string;
    /**
     * The name of the webhook receiver. Names must be unique across all receivers within a tenant action group.
     */
    name: string;
    /**
     * Indicates the webhook app object Id for aad auth.
     */
    objectId?: string;
    /**
     * The URI where webhooks should be sent.
     */
    serviceUri: string;
    /**
     * Indicates the tenant id for aad auth.
     */
    tenantId?: string;
    /**
     * Indicates whether or not use AAD authentication.
     */
    useAadAuth?: boolean;
    /**
     * Indicates whether to use common alert schema.
     */
    useCommonAlertSchema?: boolean;
}
/**
 * webhookReceiverResponseProvideDefaults sets the appropriate defaults for WebhookReceiverResponse
 */
export function webhookReceiverResponseProvideDefaults(val: WebhookReceiverResponse): WebhookReceiverResponse {
    return {
        ...val,
        useAadAuth: (val.useAadAuth) ?? false,
        useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
    };
}

/**
 * Specifies the metric alert rule criteria for a web test resource.
 */
export interface WebtestLocationAvailabilityCriteriaResponse {
    /**
     * The Application Insights resource Id.
     */
    componentId: string;
    /**
     * The number of failed locations.
     */
    failedLocationCount: number;
    /**
     * specifies the type of the alert criteria.
     * Expected value is 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria'.
     */
    odataType: "Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria";
    /**
     * The Application Insights web test Id.
     */
    webTestId: string;
}

/**
 * Definition of which Windows Event Log events will be collected and how they will be collected.
 * Only collected from Windows machines.
 */
export interface WindowsEventLogDataSourceResponse {
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * List of streams that this data source will be sent to.
     * A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
     */
    streams?: string[];
    /**
     * A list of Windows Event Log queries in XPATH format.
     */
    xPathQueries?: string[];
}

/**
 * Enables Firewall logs to be collected by this data collection rule.
 */
export interface WindowsFirewallLogsDataSourceResponse {
    /**
     * A friendly name for the data source. 
     * This name should be unique across all data sources (regardless of type) within the data collection rule.
     */
    name?: string;
    /**
     * Firewall logs streams
     */
    streams: string[];
}
