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
     * The extent of deviation required to trigger an alert. Allowed values are 'Low', 'Medium' and 'High'. This will affect how tight the threshold is to the metric series pattern. Relevant and required only for dynamic threshold rules of the kind LogAlert.
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
