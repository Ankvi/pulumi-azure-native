import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * The Data Collection Rule and Endpoint used for ingestion by default.
 */
export interface AzureMonitorWorkspaceResponseDefaultIngestionSettings {
    /**
     * The Azure resource Id of the default data collection endpoint for this Azure Monitor Workspace.
     */
    dataCollectionEndpointResourceId: string;
    /**
     * The Azure resource Id of the default data collection rule for this Azure Monitor Workspace.
     */
    dataCollectionRuleResourceId: string;
}

/**
 * Properties related to the metrics container in the Azure Monitor Workspace
 */
export interface AzureMonitorWorkspaceResponseMetrics {
    /**
     * An internal identifier for the metrics container. Only to be used by the system
     */
    internalId: string;
    /**
     * The Prometheus query endpoint for the Azure Monitor Workspace
     */
    prometheusQueryEndpoint: string;
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
 * The private endpoint connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The private endpoint resource.
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
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for private endpoint.
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
        readQueueLength: (val.readQueueLength) ?? 1000,
    };
}


