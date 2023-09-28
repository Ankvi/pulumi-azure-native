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

/**
 * Alert detail
 */
export type AlertDetail = (typeof AlertDetail)[keyof typeof AlertDetail];

export const AlertRuleKind = {
    Scheduled: "Scheduled",
    MicrosoftSecurityIncidentCreation: "MicrosoftSecurityIncidentCreation",
    Fusion: "Fusion",
    MLBehaviorAnalytics: "MLBehaviorAnalytics",
    ThreatIntelligence: "ThreatIntelligence",
    NRT: "NRT",
} as const;

/**
 * The kind of the alert rule
 */
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

/**
 * The severity for alerts created by this alert rule.
 */
export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];

export const AttackTactic = {
    Reconnaissance: "Reconnaissance",
    ResourceDevelopment: "ResourceDevelopment",
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
    ImpairProcessControl: "ImpairProcessControl",
    InhibitResponseFunction: "InhibitResponseFunction",
} as const;

/**
 * The severity for alerts created by this alert rule.
 */
export type AttackTactic = (typeof AttackTactic)[keyof typeof AttackTactic];

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

/**
 * The V3 type of the mapped entity
 */
export type EntityMappingType = (typeof EntityMappingType)[keyof typeof EntityMappingType];

export const EntityTimelineKind = {
    /**
     * activity
     */
    Activity: "Activity",
    /**
     * bookmarks
     */
    Bookmark: "Bookmark",
    /**
     * security alerts
     */
    SecurityAlert: "SecurityAlert",
} as const;

/**
 * The entity query kind
 */
export type EntityTimelineKind = (typeof EntityTimelineKind)[keyof typeof EntityTimelineKind];

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

/**
 * Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
 */
export type MatchingMethod = (typeof MatchingMethod)[keyof typeof MatchingMethod];

export const Source = {
    Local_file: "Local file",
    Remote_storage: "Remote storage",
} as const;

/**
 * The source of the watchlist
 */
export type Source = (typeof Source)[keyof typeof Source];
