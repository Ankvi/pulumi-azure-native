export const ExporterType = {
    /**
     * Export logs to Azure Monitor Workspace.
     */
    AzureMonitorWorkspaceLogs: "AzureMonitorWorkspaceLogs",
    /**
     * Export data to another pipeline group instance.
     */
    PipelineGroup: "PipelineGroup",
} as const;

/**
 * The type of exporter.
 */
export type ExporterType = (typeof ExporterType)[keyof typeof ExporterType];

export const ExtendedLocationType = {
    /**
     * Custom location.
     */
    CustomLocation: "CustomLocation",
} as const;

/**
 * The type of extended location.
 */
export type ExtendedLocationType = (typeof ExtendedLocationType)[keyof typeof ExtendedLocationType];

export const ExternalNetworkingMode = {
    /**
     * Load balancer only.
     */
    LoadBalancerOnly: "LoadBalancerOnly",
} as const;

/**
 * External networking mode.
 */
export type ExternalNetworkingMode = (typeof ExternalNetworkingMode)[keyof typeof ExternalNetworkingMode];

export const PipelineType = {
    /**
     * Pipeline for logs telemetry.
     */
    Logs: "logs",
} as const;

/**
 * The type of pipeline
 */
export type PipelineType = (typeof PipelineType)[keyof typeof PipelineType];

export const ProcessorType = {
    /**
     * Batch processor.
     */
    Batch: "Batch",
} as const;

/**
 * The type of processor.
 */
export type ProcessorType = (typeof ProcessorType)[keyof typeof ProcessorType];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Gets or sets allow or disallow public network access to Azure Monitor Workspace
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ReceiverType = {
    /**
     * Linux syslog.
     */
    Syslog: "Syslog",
    /**
     * Receives data from azure monitor agent receiver.
     */
    Ama: "Ama",
    /**
     * Receives data from another pipeline group.
     */
    PipelineGroup: "PipelineGroup",
    /**
     * Receives data from a OTLP collector.
     */
    OTLP: "OTLP",
    /**
     * Receives data from an UDP collector.
     */
    UDP: "UDP",
} as const;

/**
 * The type of receiver.
 */
export type ReceiverType = (typeof ReceiverType)[keyof typeof ReceiverType];

export const StreamEncodingType = {
    /**
     * No encoding validation. Treats the file as a stream of raw bytes.
     */
    Nop: "nop",
    /**
     * UTF-8 encoding.
     */
    Utf_8: "utf-8",
    /**
     * UTF-16 encoding with little-endian byte order.
     */
    Utf_16le: "utf-16le",
    /**
     * UTF-16 encoding with little-endian byte order.
     */
    Utf_16be: "utf-16be",
    /**
     * ASCII encoding.
     */
    Ascii: "ascii",
    /**
     * The Big5 Chinese character encoding.
     */
    Big5: "big5",
} as const;

/**
 * The encoding of the stream being received.
 */
export type StreamEncodingType = (typeof StreamEncodingType)[keyof typeof StreamEncodingType];

export const SyslogProtocol = {
    /**
     * rfc3164 protocol.
     */
    Rfc3164: "rfc3164",
    /**
     * rfc5424 protocol.
     */
    Rfc5424: "rfc5424",
} as const;

/**
 * Protocol to parse syslog messages. Default rfc3164
 */
export type SyslogProtocol = (typeof SyslogProtocol)[keyof typeof SyslogProtocol];
