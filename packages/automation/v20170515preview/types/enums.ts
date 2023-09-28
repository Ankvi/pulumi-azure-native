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

export const TagOperators = {
    All: "All",
    Any: "Any",
} as const;

/**
 * Filter VMs by Any or All specified tags.
 */
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

/**
 * Update classification included in the software update configuration. A comma separated string with required values
 */
export type WindowsUpdateClasses = (typeof WindowsUpdateClasses)[keyof typeof WindowsUpdateClasses];
