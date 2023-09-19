export const ContentSourceType = {
    EmbeddedContent: "embeddedContent",
    Uri: "uri",
} as const;

export type ContentSourceType = (typeof ContentSourceType)[keyof typeof ContentSourceType];

export const EncryptionKeySourceType = {
    Microsoft_Automation: "Microsoft.Automation",
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

export type EncryptionKeySourceType = (typeof EncryptionKeySourceType)[keyof typeof EncryptionKeySourceType];

export const LinuxUpdateClasses = {
    Unclassified: "Unclassified",
    Critical: "Critical",
    Security: "Security",
    Other: "Other",
} as const;

export type LinuxUpdateClasses = (typeof LinuxUpdateClasses)[keyof typeof LinuxUpdateClasses];

export const OperatingSystemType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

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
} as const;

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

export type ScheduleFrequency = (typeof ScheduleFrequency)[keyof typeof ScheduleFrequency];

export const SkuNameEnum = {
    Free: "Free",
    Basic: "Basic",
} as const;

export type SkuNameEnum = (typeof SkuNameEnum)[keyof typeof SkuNameEnum];

export const SourceType = {
    VsoGit: "VsoGit",
    VsoTfvc: "VsoTfvc",
    GitHub: "GitHub",
} as const;

export type SourceType = (typeof SourceType)[keyof typeof SourceType];

export const TagOperators = {
    All: "All",
    Any: "Any",
} as const;

export type TagOperators = (typeof TagOperators)[keyof typeof TagOperators];

export const TokenType = {
    PersonalAccessToken: "PersonalAccessToken",
    Oauth: "Oauth",
} as const;

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

export type WindowsUpdateClasses = (typeof WindowsUpdateClasses)[keyof typeof WindowsUpdateClasses];
