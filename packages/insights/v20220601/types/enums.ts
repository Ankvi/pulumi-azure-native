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
