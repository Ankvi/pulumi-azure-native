export const AlertDetail = {
    /**
     * Alert display name
     */
    DisplayName: "DisplayName",
    /**
     * Alert severity
     */
    Severity: "Severity",
} as const;

export type AlertDetail = (typeof AlertDetail)[keyof typeof AlertDetail];

export const AlertRuleKind = {
    Scheduled: "Scheduled",
    MicrosoftSecurityIncidentCreation: "MicrosoftSecurityIncidentCreation",
    Fusion: "Fusion",
    MLBehaviorAnalytics: "MLBehaviorAnalytics",
    ThreatIntelligence: "ThreatIntelligence",
} as const;

export type AlertRuleKind = (typeof AlertRuleKind)[keyof typeof AlertRuleKind];

export const AlertSeverity = {
    /**
     * High severity
     */
    High: "High",
    /**
     * Medium severity
     */
    Medium: "Medium",
    /**
     * Low severity
     */
    Low: "Low",
    /**
     * Informational severity
     */
    Informational: "Informational",
} as const;

export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];

export const AttackTactic = {
    InitialAccess: "InitialAccess",
    Execution: "Execution",
    Persistence: "Persistence",
    PrivilegeEscalation: "PrivilegeEscalation",
    DefenseEvasion: "DefenseEvasion",
    CredentialAccess: "CredentialAccess",
    Discovery: "Discovery",
    LateralMovement: "LateralMovement",
    Collection: "Collection",
    Exfiltration: "Exfiltration",
    CommandAndControl: "CommandAndControl",
    Impact: "Impact",
    PreAttack: "PreAttack",
} as const;

export type AttackTactic = (typeof AttackTactic)[keyof typeof AttackTactic];

export const ConnectivityType = {
    IsConnectedQuery: "IsConnectedQuery",
} as const;

export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType];

export const ContentType = {
    AnalyticRule: "AnalyticRule",
    Workbook: "Workbook",
} as const;

export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export const CreatedByType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

export type CreatedByType = (typeof CreatedByType)[keyof typeof CreatedByType];

export const CustomEntityQueryKind = {
    Activity: "Activity",
} as const;

export type CustomEntityQueryKind = (typeof CustomEntityQueryKind)[keyof typeof CustomEntityQueryKind];

export const DataConnectorKind = {
    AzureActiveDirectory: "AzureActiveDirectory",
    AzureSecurityCenter: "AzureSecurityCenter",
    MicrosoftCloudAppSecurity: "MicrosoftCloudAppSecurity",
    ThreatIntelligence: "ThreatIntelligence",
    ThreatIntelligenceTaxii: "ThreatIntelligenceTaxii",
    Office365: "Office365",
    OfficeATP: "OfficeATP",
    AmazonWebServicesCloudTrail: "AmazonWebServicesCloudTrail",
    AzureAdvancedThreatProtection: "AzureAdvancedThreatProtection",
    MicrosoftDefenderAdvancedThreatProtection: "MicrosoftDefenderAdvancedThreatProtection",
    Dynamics365: "Dynamics365",
    MicrosoftThreatProtection: "MicrosoftThreatProtection",
    MicrosoftThreatIntelligence: "MicrosoftThreatIntelligence",
    GenericUI: "GenericUI",
} as const;

export type DataConnectorKind = (typeof DataConnectorKind)[keyof typeof DataConnectorKind];

export const DataTypeState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type DataTypeState = (typeof DataTypeState)[keyof typeof DataTypeState];

export const EntityMappingType = {
    /**
     * User account entity type
     */
    Account: "Account",
    /**
     * Host entity type
     */
    Host: "Host",
    /**
     * IP address entity type
     */
    IP: "IP",
    /**
     * Malware entity type
     */
    Malware: "Malware",
    /**
     * System file entity type
     */
    File: "File",
    /**
     * Process entity type
     */
    Process: "Process",
    /**
     * Cloud app entity type
     */
    CloudApplication: "CloudApplication",
    /**
     * DNS entity type
     */
    DNS: "DNS",
    /**
     * Azure resource entity type
     */
    AzureResource: "AzureResource",
    /**
     * File-hash entity type
     */
    FileHash: "FileHash",
    /**
     * Registry key entity type
     */
    RegistryKey: "RegistryKey",
    /**
     * Registry value entity type
     */
    RegistryValue: "RegistryValue",
    /**
     * Security group entity type
     */
    SecurityGroup: "SecurityGroup",
    /**
     * URL entity type
     */
    URL: "URL",
    /**
     * Mailbox entity type
     */
    Mailbox: "Mailbox",
    /**
     * Mail cluster entity type
     */
    MailCluster: "MailCluster",
    /**
     * Mail message entity type
     */
    MailMessage: "MailMessage",
    /**
     * Submission mail entity type
     */
    SubmissionMail: "SubmissionMail",
} as const;

export type EntityMappingType = (typeof EntityMappingType)[keyof typeof EntityMappingType];

export const EntityType = {
    /**
     * Entity represents account in the system.
     */
    Account: "Account",
    /**
     * Entity represents host in the system.
     */
    Host: "Host",
    /**
     * Entity represents file in the system.
     */
    File: "File",
    /**
     * Entity represents azure resource in the system.
     */
    AzureResource: "AzureResource",
    /**
     * Entity represents cloud application in the system.
     */
    CloudApplication: "CloudApplication",
    /**
     * Entity represents dns in the system.
     */
    DNS: "DNS",
    /**
     * Entity represents file hash in the system.
     */
    FileHash: "FileHash",
    /**
     * Entity represents ip in the system.
     */
    IP: "IP",
    /**
     * Entity represents malware in the system.
     */
    Malware: "Malware",
    /**
     * Entity represents process in the system.
     */
    Process: "Process",
    /**
     * Entity represents registry key in the system.
     */
    RegistryKey: "RegistryKey",
    /**
     * Entity represents registry value in the system.
     */
    RegistryValue: "RegistryValue",
    /**
     * Entity represents security group in the system.
     */
    SecurityGroup: "SecurityGroup",
    /**
     * Entity represents url in the system.
     */
    URL: "URL",
    /**
     * Entity represents IoT device in the system.
     */
    IoTDevice: "IoTDevice",
    /**
     * Entity represents security alert in the system.
     */
    SecurityAlert: "SecurityAlert",
    /**
     * Entity represents HuntingBookmark in the system.
     */
    HuntingBookmark: "HuntingBookmark",
    /**
     * Entity represents mail cluster in the system.
     */
    MailCluster: "MailCluster",
    /**
     * Entity represents mail message in the system.
     */
    MailMessage: "MailMessage",
    /**
     * Entity represents mailbox in the system.
     */
    Mailbox: "Mailbox",
    /**
     * Entity represents submission mail in the system.
     */
    SubmissionMail: "SubmissionMail",
} as const;

export type EntityType = (typeof EntityType)[keyof typeof EntityType];

export const EventGroupingAggregationKind = {
    SingleAlert: "SingleAlert",
    AlertPerResult: "AlertPerResult",
} as const;

export type EventGroupingAggregationKind = (typeof EventGroupingAggregationKind)[keyof typeof EventGroupingAggregationKind];

export const IncidentClassification = {
    /**
     * Incident classification was undetermined
     */
    Undetermined: "Undetermined",
    /**
     * Incident was true positive
     */
    TruePositive: "TruePositive",
    /**
     * Incident was benign positive
     */
    BenignPositive: "BenignPositive",
    /**
     * Incident was false positive
     */
    FalsePositive: "FalsePositive",
} as const;

export type IncidentClassification = (typeof IncidentClassification)[keyof typeof IncidentClassification];

export const IncidentClassificationReason = {
    /**
     * Classification reason was suspicious activity
     */
    SuspiciousActivity: "SuspiciousActivity",
    /**
     * Classification reason was suspicious but expected
     */
    SuspiciousButExpected: "SuspiciousButExpected",
    /**
     * Classification reason was incorrect alert logic
     */
    IncorrectAlertLogic: "IncorrectAlertLogic",
    /**
     * Classification reason was inaccurate data
     */
    InaccurateData: "InaccurateData",
} as const;

export type IncidentClassificationReason = (typeof IncidentClassificationReason)[keyof typeof IncidentClassificationReason];

export const IncidentSeverity = {
    /**
     * High severity
     */
    High: "High",
    /**
     * Medium severity
     */
    Medium: "Medium",
    /**
     * Low severity
     */
    Low: "Low",
    /**
     * Informational severity
     */
    Informational: "Informational",
} as const;

export type IncidentSeverity = (typeof IncidentSeverity)[keyof typeof IncidentSeverity];

export const IncidentStatus = {
    /**
     * An active incident which isn't being handled currently
     */
    New: "New",
    /**
     * An active incident which is being handled
     */
    Active: "Active",
    /**
     * A non-active incident
     */
    Closed: "Closed",
} as const;

export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus];

export const Kind = {
    DataConnector: "DataConnector",
    DataType: "DataType",
    Workbook: "Workbook",
    WorkbookTemplate: "WorkbookTemplate",
    Playbook: "Playbook",
    PlaybookTemplate: "PlaybookTemplate",
    AnalyticsRuleTemplate: "AnalyticsRuleTemplate",
    AnalyticsRule: "AnalyticsRule",
    HuntingQuery: "HuntingQuery",
    InvestigationQuery: "InvestigationQuery",
    Parser: "Parser",
    Watchlist: "Watchlist",
    WatchlistTemplate: "WatchlistTemplate",
    Solution: "Solution",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const MatchingMethod = {
    /**
     * Grouping alerts into a single incident if all the entities match
     */
    AllEntities: "AllEntities",
    /**
     * Grouping any alerts triggered by this rule into a single incident
     */
    AnyAlert: "AnyAlert",
    /**
     * Grouping alerts into a single incident if the selected entities, custom details and alert details match
     */
    Selected: "Selected",
} as const;

export type MatchingMethod = (typeof MatchingMethod)[keyof typeof MatchingMethod];

export const MicrosoftSecurityProductName = {
    Microsoft_Cloud_App_Security: "Microsoft Cloud App Security",
    Azure_Security_Center: "Azure Security Center",
    Azure_Advanced_Threat_Protection: "Azure Advanced Threat Protection",
    Azure_Active_Directory_Identity_Protection: "Azure Active Directory Identity Protection",
    Azure_Security_Center_for_IoT: "Azure Security Center for IoT",
    Office_365_Advanced_Threat_Protection: "Office 365 Advanced Threat Protection",
    Microsoft_Defender_Advanced_Threat_Protection: "Microsoft Defender Advanced Threat Protection",
} as const;

export type MicrosoftSecurityProductName = (typeof MicrosoftSecurityProductName)[keyof typeof MicrosoftSecurityProductName];

export const Operator = {
    AND: "AND",
    OR: "OR",
} as const;

export type Operator = (typeof Operator)[keyof typeof Operator];

export const PermissionProviderScope = {
    ResourceGroup: "ResourceGroup",
    Subscription: "Subscription",
    Workspace: "Workspace",
} as const;

export type PermissionProviderScope = (typeof PermissionProviderScope)[keyof typeof PermissionProviderScope];

export const PollingFrequency = {
    /**
     * Once a minute
     */
    OnceAMinute: "OnceAMinute",
    /**
     * Once an hour
     */
    OnceAnHour: "OnceAnHour",
    /**
     * Once a day
     */
    OnceADay: "OnceADay",
} as const;

export type PollingFrequency = (typeof PollingFrequency)[keyof typeof PollingFrequency];

export const ProviderName = {
    Microsoft_OperationalInsights_solutions: "Microsoft.OperationalInsights/solutions",
    Microsoft_OperationalInsights_workspaces: "Microsoft.OperationalInsights/workspaces",
    Microsoft_OperationalInsights_workspaces_datasources: "Microsoft.OperationalInsights/workspaces/datasources",
    Microsoft_aadiam_diagnosticSettings: "microsoft.aadiam/diagnosticSettings",
    Microsoft_OperationalInsights_workspaces_sharedKeys: "Microsoft.OperationalInsights/workspaces/sharedKeys",
    Microsoft_Authorization_policyAssignments: "Microsoft.Authorization/policyAssignments",
} as const;

export type ProviderName = (typeof ProviderName)[keyof typeof ProviderName];

export const RepoType = {
    Github: "Github",
    DevOps: "DevOps",
} as const;

export type RepoType = (typeof RepoType)[keyof typeof RepoType];

export const SettingKind = {
    Anomalies: "Anomalies",
    EyesOn: "EyesOn",
    EntityAnalytics: "EntityAnalytics",
    Ueba: "Ueba",
} as const;

export type SettingKind = (typeof SettingKind)[keyof typeof SettingKind];

export const SettingType = {
    CopyableLabel: "CopyableLabel",
    InstructionStepsGroup: "InstructionStepsGroup",
    InfoMessage: "InfoMessage",
} as const;

export type SettingType = (typeof SettingType)[keyof typeof SettingType];

export const Source = {
    Local_file: "Local file",
    Remote_storage: "Remote storage",
} as const;

export type Source = (typeof Source)[keyof typeof Source];

export const SourceKind = {
    LocalWorkspace: "LocalWorkspace",
    Community: "Community",
    Solution: "Solution",
    SourceRepository: "SourceRepository",
} as const;

export type SourceKind = (typeof SourceKind)[keyof typeof SourceKind];

export const SupportTier = {
    Microsoft: "Microsoft",
    Partner: "Partner",
    Community: "Community",
} as const;

export type SupportTier = (typeof SupportTier)[keyof typeof SupportTier];

export const TriggerOperator = {
    GreaterThan: "GreaterThan",
    LessThan: "LessThan",
    Equal: "Equal",
    NotEqual: "NotEqual",
} as const;

export type TriggerOperator = (typeof TriggerOperator)[keyof typeof TriggerOperator];

export const UebaDataSources = {
    AuditLogs: "AuditLogs",
    AzureActivity: "AzureActivity",
    SecurityEvent: "SecurityEvent",
    SigninLogs: "SigninLogs",
} as const;

export type UebaDataSources = (typeof UebaDataSources)[keyof typeof UebaDataSources];
