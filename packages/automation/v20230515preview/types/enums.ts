export const ContentSourceType = {
    EmbeddedContent: "embeddedContent",
    Uri: "uri",
} as const;

/**
 * Gets or sets the content source type.
 */
export type ContentSourceType = (typeof ContentSourceType)[keyof typeof ContentSourceType];

export const EncryptionKeySourceType = {
    Microsoft_Automation: "Microsoft.Automation",
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

/**
 * Encryption Key Source
 */
export type EncryptionKeySourceType = (typeof EncryptionKeySourceType)[keyof typeof EncryptionKeySourceType];

export const LinuxUpdateClasses = {
    Unclassified: "Unclassified",
    Critical: "Critical",
    Security: "Security",
    Other: "Other",
} as const;

/**
 * Update classifications included in the software update configuration.
 */
export type LinuxUpdateClasses = (typeof LinuxUpdateClasses)[keyof typeof LinuxUpdateClasses];

export const OperatingSystemType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * operating system of target machines
 */
export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RunbookTypeEnum = {
    Script: "Script",
    Graph: "Graph",
    PowerShellWorkflow: "PowerShellWorkflow",
    PowerShell: "PowerShell",
    GraphPowerShellWorkflow: "GraphPowerShellWorkflow",
    GraphPowerShell: "GraphPowerShell",
    Python2: "Python2",
    Python3: "Python3",
    Python: "Python",
} as const;

/**
 * Gets or sets the type of the runbook.
 */
export type RunbookTypeEnum = (typeof RunbookTypeEnum)[keyof typeof RunbookTypeEnum];

export const ScheduleDay = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
 */
export type ScheduleDay = (typeof ScheduleDay)[keyof typeof ScheduleDay];

export const ScheduleFrequency = {
    OneTime: "OneTime",
    Day: "Day",
    Hour: "Hour",
    Week: "Week",
    Month: "Month",
    /**
     * The minimum allowed interval for Minute schedules is 15 minutes.
     */
    Minute: "Minute",
} as const;

/**
 * Gets or sets the frequency of the schedule.
 */
export type ScheduleFrequency = (typeof ScheduleFrequency)[keyof typeof ScheduleFrequency];

export const SkuNameEnum = {
    Free: "Free",
    Basic: "Basic",
} as const;

/**
 * Gets or sets the SKU name of the account.
 */
export type SkuNameEnum = (typeof SkuNameEnum)[keyof typeof SkuNameEnum];

export const SourceType = {
    VsoGit: "VsoGit",
    VsoTfvc: "VsoTfvc",
    GitHub: "GitHub",
} as const;

/**
 * The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive.
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

export const TagOperators = {
    All: "All",
    Any: "Any",
} as const;

/**
 * Filter VMs by Any or All specified tags.
 */
export type TagOperators = (typeof TagOperators)[keyof typeof TagOperators];

export const TokenType = {
    PersonalAccessToken: "PersonalAccessToken",
    Oauth: "Oauth",
} as const;

/**
 * The token type. Must be either PersonalAccessToken or Oauth.
 */
export type TokenType = (typeof TokenType)[keyof typeof TokenType];

export const WindowsUpdateClasses = {
    Unclassified: "Unclassified",
    Critical: "Critical",
    Security: "Security",
    UpdateRollup: "UpdateRollup",
    FeaturePack: "FeaturePack",
    ServicePack: "ServicePack",
    Definition: "Definition",
    Tools: "Tools",
    Updates: "Updates",
} as const;

/**
 * Update classification included in the software update configuration. A comma separated string with required values
 */
export type WindowsUpdateClasses = (typeof WindowsUpdateClasses)[keyof typeof WindowsUpdateClasses];
