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
    /**
     * anomaly
     */
    Anomaly: "Anomaly",
} as const;

/**
 * The entity query kind
 */
export type EntityTimelineKind = (typeof EntityTimelineKind)[keyof typeof EntityTimelineKind];

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

/**
 * The reason the incident was closed
 */
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

/**
 * The classification reason the incident was closed with
 */
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

/**
 * The severity of the incident
 */
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

/**
 * The status of the incident
 */
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
    AzureFunction: "AzureFunction",
    LogicAppsCustomConnector: "LogicAppsCustomConnector",
    AutomationRule: "AutomationRule",
} as const;

/**
 * The kind of content the metadata is for.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const Operator = {
    AND: "AND",
    OR: "OR",
} as const;

/**
 * Operator used for list of dependencies in criteria array.
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

export const OwnerType = {
    /**
     * The incident owner type is unknown
     */
    Unknown: "Unknown",
    /**
     * The incident owner type is an AAD user
     */
    User: "User",
    /**
     * The incident owner type is an AAD group
     */
    Group: "Group",
} as const;

/**
 * The type of the owner the incident is assigned to.
 */
export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];

export const SourceKind = {
    LocalWorkspace: "LocalWorkspace",
    Community: "Community",
    Solution: "Solution",
    SourceRepository: "SourceRepository",
} as const;

/**
 * Source type of the content
 */
export type SourceKind = (typeof SourceKind)[keyof typeof SourceKind];

export const SupportTier = {
    Microsoft: "Microsoft",
    Partner: "Partner",
    Community: "Community",
} as const;

/**
 * Type of support for content item
 */
export type SupportTier = (typeof SupportTier)[keyof typeof SupportTier];
