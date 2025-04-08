export const AccessMode = {
    Open: "Open",
    PrivateOnly: "PrivateOnly",
} as const;

/**
 * Specifies the default access mode of queries through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array.
 */
export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode];

export const ComparisonOperationType = {
    Equals: "Equals",
    NotEquals: "NotEquals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

/**
 * the operator that is used to compare the metric data and the threshold.
 */
export type ComparisonOperationType = (typeof ComparisonOperationType)[keyof typeof ComparisonOperationType];

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

export const KnownColumnDefinitionType = {
    String: "string",
    Int: "int",
    Long: "long",
    Real: "real",
    Boolean: "boolean",
    Datetime: "datetime",
    Dynamic: "dynamic",
} as const;

/**
 * The type of the column data.
 */
export type KnownColumnDefinitionType = (typeof KnownColumnDefinitionType)[keyof typeof KnownColumnDefinitionType];

export const KnownDataCollectionEndpointResourceKind = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * The kind of the resource.
 */
export type KnownDataCollectionEndpointResourceKind = (typeof KnownDataCollectionEndpointResourceKind)[keyof typeof KnownDataCollectionEndpointResourceKind];

export const KnownDataCollectionRuleResourceKind = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * The kind of the resource.
 */
export type KnownDataCollectionRuleResourceKind = (typeof KnownDataCollectionRuleResourceKind)[keyof typeof KnownDataCollectionRuleResourceKind];

export const KnownDataFlowStreams = {
    Microsoft_Event: "Microsoft-Event",
    Microsoft_InsightsMetrics: "Microsoft-InsightsMetrics",
    Microsoft_Perf: "Microsoft-Perf",
    Microsoft_Syslog: "Microsoft-Syslog",
    Microsoft_WindowsEvent: "Microsoft-WindowsEvent",
} as const;

export type KnownDataFlowStreams = (typeof KnownDataFlowStreams)[keyof typeof KnownDataFlowStreams];

export const KnownExtensionDataSourceStreams = {
    Microsoft_Event: "Microsoft-Event",
    Microsoft_InsightsMetrics: "Microsoft-InsightsMetrics",
    Microsoft_Perf: "Microsoft-Perf",
    Microsoft_Syslog: "Microsoft-Syslog",
    Microsoft_WindowsEvent: "Microsoft-WindowsEvent",
} as const;

export type KnownExtensionDataSourceStreams = (typeof KnownExtensionDataSourceStreams)[keyof typeof KnownExtensionDataSourceStreams];

export const KnownLogFileTextSettingsRecordStartTimestampFormat = {
    ISO_8601: "ISO 8601",
    YYYY_MM_DD_HH_MM_SS: "YYYY-MM-DD HH:MM:SS",
    M_D_YYYY_HH_MM_SS_AM_PM: "M/D/YYYY HH:MM:SS AM/PM",
    Mon_DD_YYYY_HH_MM_SS: "Mon DD, YYYY HH:MM:SS",
    YyMMdd_HH_mm_ss: "yyMMdd HH:mm:ss",
    DdMMyy_HH_mm_ss: "ddMMyy HH:mm:ss",
    MMM_d_hh_mm_ss: "MMM d hh:mm:ss",
    Dd_MMM_yyyy_HH_mm_ss_zzz: "dd/MMM/yyyy:HH:mm:ss zzz",
    Yyyy_MM_ddTHH_mm_ssK: "yyyy-MM-ddTHH:mm:ssK",
} as const;

/**
 * One of the supported timestamp formats
 */
export type KnownLogFileTextSettingsRecordStartTimestampFormat = (typeof KnownLogFileTextSettingsRecordStartTimestampFormat)[keyof typeof KnownLogFileTextSettingsRecordStartTimestampFormat];

export const KnownLogFilesDataSourceFormat = {
    Text: "text",
} as const;

/**
 * The data format of the log files
 */
export type KnownLogFilesDataSourceFormat = (typeof KnownLogFilesDataSourceFormat)[keyof typeof KnownLogFilesDataSourceFormat];

export const KnownPerfCounterDataSourceStreams = {
    Microsoft_Perf: "Microsoft-Perf",
    Microsoft_InsightsMetrics: "Microsoft-InsightsMetrics",
} as const;

export type KnownPerfCounterDataSourceStreams = (typeof KnownPerfCounterDataSourceStreams)[keyof typeof KnownPerfCounterDataSourceStreams];

export const KnownPrometheusForwarderDataSourceStreams = {
    Microsoft_PrometheusMetrics: "Microsoft-PrometheusMetrics",
} as const;

export type KnownPrometheusForwarderDataSourceStreams = (typeof KnownPrometheusForwarderDataSourceStreams)[keyof typeof KnownPrometheusForwarderDataSourceStreams];

export const KnownPublicNetworkAccessOptions = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * The configuration to set whether network access from public internet to the endpoints are allowed.
 */
export type KnownPublicNetworkAccessOptions = (typeof KnownPublicNetworkAccessOptions)[keyof typeof KnownPublicNetworkAccessOptions];

export const KnownSyslogDataSourceFacilityNames = {
    Alert: "alert",
    Audit: "audit",
    Auth: "auth",
    Authpriv: "authpriv",
    Clock: "clock",
    Cron: "cron",
    Daemon: "daemon",
    Ftp: "ftp",
    Kern: "kern",
    Lpr: "lpr",
    Mail: "mail",
    Mark: "mark",
    News: "news",
    Nopri: "nopri",
    Ntp: "ntp",
    Syslog: "syslog",
    User: "user",
    Uucp: "uucp",
    Local0: "local0",
    Local1: "local1",
    Local2: "local2",
    Local3: "local3",
    Local4: "local4",
    Local5: "local5",
    Local6: "local6",
    Local7: "local7",
    Asterisk: "*",
} as const;

export type KnownSyslogDataSourceFacilityNames = (typeof KnownSyslogDataSourceFacilityNames)[keyof typeof KnownSyslogDataSourceFacilityNames];

export const KnownSyslogDataSourceLogLevels = {
    Debug: "Debug",
    Info: "Info",
    Notice: "Notice",
    Warning: "Warning",
    Error: "Error",
    Critical: "Critical",
    Alert: "Alert",
    Emergency: "Emergency",
    Asterisk: "*",
} as const;

export type KnownSyslogDataSourceLogLevels = (typeof KnownSyslogDataSourceLogLevels)[keyof typeof KnownSyslogDataSourceLogLevels];

export const KnownSyslogDataSourceStreams = {
    Microsoft_Syslog: "Microsoft-Syslog",
} as const;

export type KnownSyslogDataSourceStreams = (typeof KnownSyslogDataSourceStreams)[keyof typeof KnownSyslogDataSourceStreams];

export const KnownWindowsEventLogDataSourceStreams = {
    Microsoft_WindowsEvent: "Microsoft-WindowsEvent",
    Microsoft_Event: "Microsoft-Event",
} as const;

export type KnownWindowsEventLogDataSourceStreams = (typeof KnownWindowsEventLogDataSourceStreams)[keyof typeof KnownWindowsEventLogDataSourceStreams];

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

export const MetricStatisticType = {
    Average: "Average",
    Min: "Min",
    Max: "Max",
    Sum: "Sum",
    Count: "Count",
} as const;

/**
 * the metric statistic type. How the metrics from multiple instances are combined.
 */
export type MetricStatisticType = (typeof MetricStatisticType)[keyof typeof MetricStatisticType];

export const OperationType = {
    Scale: "Scale",
} as const;

/**
 * the operation associated with the notification and its value must be "scale"
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

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

export const PredictiveAutoscalePolicyScaleMode = {
    Disabled: "Disabled",
    ForecastOnly: "ForecastOnly",
    Enabled: "Enabled",
} as const;

/**
 * the predictive autoscale mode
 */
export type PredictiveAutoscalePolicyScaleMode = (typeof PredictiveAutoscalePolicyScaleMode)[keyof typeof PredictiveAutoscalePolicyScaleMode];

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

export const RecurrenceFrequency = {
    None: "None",
    Second: "Second",
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
    Year: "Year",
} as const;

/**
 * the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
 */
export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const ScaleDirection = {
    None: "None",
    Increase: "Increase",
    Decrease: "Decrease",
} as const;

/**
 * the scale direction. Whether the scaling action increases or decreases the number of instances.
 */
export type ScaleDirection = (typeof ScaleDirection)[keyof typeof ScaleDirection];

export const ScaleRuleMetricDimensionOperationType = {
    Equals: "Equals",
    NotEquals: "NotEquals",
} as const;

/**
 * the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
 */
export type ScaleRuleMetricDimensionOperationType = (typeof ScaleRuleMetricDimensionOperationType)[keyof typeof ScaleRuleMetricDimensionOperationType];

export const ScaleType = {
    ChangeCount: "ChangeCount",
    PercentChangeCount: "PercentChangeCount",
    ExactCount: "ExactCount",
    ServiceAllowedNextValue: "ServiceAllowedNextValue",
} as const;

/**
 * the type of action that should occur when the scale rule fires.
 */
export type ScaleType = (typeof ScaleType)[keyof typeof ScaleType];

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

export const TimeAggregationType = {
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
    Count: "Count",
    Last: "Last",
} as const;

/**
 * time aggregation type. How the data that is collected should be combined over time. The default value is Average.
 */
export type TimeAggregationType = (typeof TimeAggregationType)[keyof typeof TimeAggregationType];
