export const AccessMode = {
    Open: "Open",
    PrivateOnly: "PrivateOnly",
} as const;

export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode];

export const AggregationTypeEnum = {
    Average: "Average",
    Count: "Count",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
} as const;

export type AggregationTypeEnum = (typeof AggregationTypeEnum)[keyof typeof AggregationTypeEnum];

export const ApplicationType = {
    Web: "web",
    Other: "other",
} as const;

export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

export const ComparisonOperationType = {
    Equals: "Equals",
    NotEquals: "NotEquals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

export type ComparisonOperationType = (typeof ComparisonOperationType)[keyof typeof ComparisonOperationType];

export const ConditionOperator = {
    Equals: "Equals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

export type ConditionOperator = (typeof ConditionOperator)[keyof typeof ConditionOperator];

export const CriterionType = {
    StaticThresholdCriterion: "StaticThresholdCriterion",
    DynamicThresholdCriterion: "DynamicThresholdCriterion",
} as const;

export type CriterionType = (typeof CriterionType)[keyof typeof CriterionType];

export const DimensionOperator = {
    Include: "Include",
    Exclude: "Exclude",
} as const;

export type DimensionOperator = (typeof DimensionOperator)[keyof typeof DimensionOperator];

export const DynamicThresholdOperator = {
    GreaterThan: "GreaterThan",
    LessThan: "LessThan",
    GreaterOrLessThan: "GreaterOrLessThan",
} as const;

export type DynamicThresholdOperator = (typeof DynamicThresholdOperator)[keyof typeof DynamicThresholdOperator];

export const DynamicThresholdSensitivity = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

export type DynamicThresholdSensitivity = (typeof DynamicThresholdSensitivity)[keyof typeof DynamicThresholdSensitivity];

export const FavoriteType = {
    Shared: "shared",
    User: "user",
} as const;

export type FavoriteType = (typeof FavoriteType)[keyof typeof FavoriteType];

export const FlowType = {
    Bluefield: "Bluefield",
} as const;

export type FlowType = (typeof FlowType)[keyof typeof FlowType];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const IngestionMode = {
    ApplicationInsights: "ApplicationInsights",
    ApplicationInsightsWithDiagnosticSettings: "ApplicationInsightsWithDiagnosticSettings",
    LogAnalytics: "LogAnalytics",
} as const;

export type IngestionMode = (typeof IngestionMode)[keyof typeof IngestionMode];

export const ItemScope = {
    Shared: "shared",
    User: "user",
} as const;

export type ItemScope = (typeof ItemScope)[keyof typeof ItemScope];

export const ItemType = {
    None: "none",
    Query: "query",
    Recent: "recent",
    Function: "function",
} as const;

export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export const Kind = {
    LogAlert: "LogAlert",
    LogToMetric: "LogToMetric",
} as const;

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

export type KnownColumnDefinitionType = (typeof KnownColumnDefinitionType)[keyof typeof KnownColumnDefinitionType];

export const KnownDataCollectionEndpointResourceKind = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type KnownDataCollectionEndpointResourceKind = (typeof KnownDataCollectionEndpointResourceKind)[keyof typeof KnownDataCollectionEndpointResourceKind];

export const KnownDataCollectionRuleResourceKind = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

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

export type KnownLogFileTextSettingsRecordStartTimestampFormat = (typeof KnownLogFileTextSettingsRecordStartTimestampFormat)[keyof typeof KnownLogFileTextSettingsRecordStartTimestampFormat];

export const KnownLogFilesDataSourceFormat = {
    Text: "text",
} as const;

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

export type KnownPublicNetworkAccessOptions = (typeof KnownPublicNetworkAccessOptions)[keyof typeof KnownPublicNetworkAccessOptions];

export const KnownSyslogDataSourceFacilityNames = {
    Auth: "auth",
    Authpriv: "authpriv",
    Cron: "cron",
    Daemon: "daemon",
    Kern: "kern",
    Lpr: "lpr",
    Mail: "mail",
    Mark: "mark",
    News: "news",
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

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MetricStatisticType = {
    Average: "Average",
    Min: "Min",
    Max: "Max",
    Sum: "Sum",
    Count: "Count",
} as const;

export type MetricStatisticType = (typeof MetricStatisticType)[keyof typeof MetricStatisticType];

export const Odatatype = {
    Microsoft_Azure_Monitor_SingleResourceMultipleMetricCriteria: "Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria",
    Microsoft_Azure_Monitor_MultipleResourceMultipleMetricCriteria: "Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria",
    Microsoft_Azure_Monitor_WebtestLocationAvailabilityCriteria: "Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria",
} as const;

export type Odatatype = (typeof Odatatype)[keyof typeof Odatatype];

export const OperationType = {
    Scale: "Scale",
} as const;

export type OperationType = (typeof OperationType)[keyof typeof OperationType];

export const Operator = {
    Equals: "Equals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

export type Operator = (typeof Operator)[keyof typeof Operator];

export const PredictiveAutoscalePolicyScaleMode = {
    Disabled: "Disabled",
    ForecastOnly: "ForecastOnly",
    Enabled: "Enabled",
} as const;

export type PredictiveAutoscalePolicyScaleMode = (typeof PredictiveAutoscalePolicyScaleMode)[keyof typeof PredictiveAutoscalePolicyScaleMode];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccessType = {
    /**
     * Enables connectivity to Application Insights through public DNS.
     */
    Enabled: "Enabled",
    /**
     * Disables public connectivity to Application Insights through public DNS.
     */
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

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

export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const RequestSource = {
    Rest: "rest",
} as const;

export type RequestSource = (typeof RequestSource)[keyof typeof RequestSource];

export const ScaleDirection = {
    None: "None",
    Increase: "Increase",
    Decrease: "Decrease",
} as const;

export type ScaleDirection = (typeof ScaleDirection)[keyof typeof ScaleDirection];

export const ScaleRuleMetricDimensionOperationType = {
    Equals: "Equals",
    NotEquals: "NotEquals",
} as const;

export type ScaleRuleMetricDimensionOperationType = (typeof ScaleRuleMetricDimensionOperationType)[keyof typeof ScaleRuleMetricDimensionOperationType];

export const ScaleType = {
    ChangeCount: "ChangeCount",
    PercentChangeCount: "PercentChangeCount",
    ExactCount: "ExactCount",
    ServiceAllowedNextValue: "ServiceAllowedNextValue",
} as const;

export type ScaleType = (typeof ScaleType)[keyof typeof ScaleType];

export const TimeAggregation = {
    Count: "Count",
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
} as const;

export type TimeAggregation = (typeof TimeAggregation)[keyof typeof TimeAggregation];

export const TimeAggregationOperator = {
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
    Last: "Last",
} as const;

export type TimeAggregationOperator = (typeof TimeAggregationOperator)[keyof typeof TimeAggregationOperator];

export const TimeAggregationType = {
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
    Count: "Count",
    Last: "Last",
} as const;

export type TimeAggregationType = (typeof TimeAggregationType)[keyof typeof TimeAggregationType];

export const WebTestKind = {
    Ping: "ping",
    Multistep: "multistep",
    Standard: "standard",
} as const;

export type WebTestKind = (typeof WebTestKind)[keyof typeof WebTestKind];

export const WorkbookSharedTypeKind = {
    Shared: "shared",
} as const;

export type WorkbookSharedTypeKind = (typeof WorkbookSharedTypeKind)[keyof typeof WorkbookSharedTypeKind];