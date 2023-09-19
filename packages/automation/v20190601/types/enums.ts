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

export const TagOperators = {
    All: "All",
    Any: "Any",
} as const;

export type TagOperators = (typeof TagOperators)[keyof typeof TagOperators];

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
