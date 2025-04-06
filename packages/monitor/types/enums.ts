export const AccessMode = {
    Open: "Open",
    PrivateOnly: "PrivateOnly",
} as const;

/**
 * Specifies the default access mode of queries through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array.
 */
export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode];

export const ConditionOperator = {
    Equals: "Equals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
    GreaterOrLessThan: "GreaterOrLessThan",
} as const;

/**
 * The criteria operator. Relevant and required only for rules of the kind LogAlert.
 */
export type ConditionOperator = (typeof ConditionOperator)[keyof typeof ConditionOperator];

export const CriterionType = {
    StaticThresholdCriterion: "StaticThresholdCriterion",
    DynamicThresholdCriterion: "DynamicThresholdCriterion",
} as const;

/**
 * Specifies the type of threshold criteria
 */
export type CriterionType = (typeof CriterionType)[keyof typeof CriterionType];

export const DimensionOperator = {
    Include: "Include",
    Exclude: "Exclude",
} as const;

/**
 * Operator for dimension values
 */
export type DimensionOperator = (typeof DimensionOperator)[keyof typeof DimensionOperator];

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
     * Azure Edge Zones location type
     */
    EdgeZone: "EdgeZone",
    /**
     * Azure Custom Locations type
     */
    CustomLocation: "CustomLocation",
} as const;

/**
 * The type of the extended location.
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

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

/**
 * Type of managed service identity.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const IncidentManagementService = {
    Icm: "Icm",
} as const;

/**
 * The incident management service type
 */
export type IncidentManagementService = (typeof IncidentManagementService)[keyof typeof IncidentManagementService];

export const JsonMapperElement = {
    /**
     * Read or write the json array from or to the body of the message.
     */
    Body: "body",
    /**
     * Read or write the json array from or to the attributes of the message.
     */
    Attributes: "attributes",
} as const;

/**
 * Define the destination's element. The element is the body or the attributes of the message, to which the json array mapper will write the output map.
 */
export type JsonMapperElement = (typeof JsonMapperElement)[keyof typeof JsonMapperElement];

export const Kind = {
    LogAlert: "LogAlert",
    EventLogAlert: "EventLogAlert",
    LogToMetric: "LogToMetric",
} as const;

/**
 * Indicates the type of scheduled query rule. The default is LogAlert.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PipelineType = {
    /**
     * Pipeline for logs telemetry.
     */
    Logs: "Logs",
} as const;

/**
 * The type of pipeline
 */
export type PipelineType = (typeof PipelineType)[keyof typeof PipelineType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

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

export const ScopedResourceKind = {
    Resource: "Resource",
    Metrics: "Metrics",
} as const;

/**
 * The kind of scoped Azure monitor resource.
 */
export type ScopedResourceKind = (typeof ScopedResourceKind)[keyof typeof ScopedResourceKind];

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

export const TimeAggregation = {
    Count: "Count",
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
} as const;

/**
 * Aggregation type. Relevant and required only for rules of the kind LogAlert.
 */
export type TimeAggregation = (typeof TimeAggregation)[keyof typeof TimeAggregation];
