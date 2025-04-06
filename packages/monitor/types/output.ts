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
