import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        readQueueLength: (val.readQueueLength) ?? 1000,
    };
}

