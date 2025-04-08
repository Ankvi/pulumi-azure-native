export const ConnectionType = {
    Public: "Public",
    Private: "Private",
    None: "None",
} as const;

/**
 * The enabled access level for Web Access over SSH.
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

export const CreateOption = {
    /**
     * An image is used to create all lab user virtual machines. When this option is set, no template VM will be created.
     */
    Image: "Image",
    /**
     * A template VM will be used to create all lab user virtual machines.
     */
    TemplateVM: "TemplateVM",
} as const;

/**
 * Indicates what lab virtual machines are created from.
 */
export type CreateOption = (typeof CreateOption)[keyof typeof CreateOption];

export const EnableState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether a VM will get shutdown when it hasn't been connected to after a period of time.
 */
export type EnableState = (typeof EnableState)[keyof typeof EnableState];

export const RecurrenceFrequency = {
    /**
     * Schedule will run every days.
     */
    Daily: "Daily",
    /**
     * Schedule will run every week on days specified in weekDays.
     */
    Weekly: "Weekly",
} as const;

/**
 * The frequency of the recurrence.
 */
export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ShutdownOnIdleMode = {
    /**
     * The VM won't be shut down when it is idle.
     */
    None: "None",
    /**
     * The VM will be considered as idle when there is no keyboard or mouse input.
     */
    UserAbsence: "UserAbsence",
    /**
     * The VM will be considered as idle when user is absent and the resource (CPU and disk) consumption is low.
     */
    LowUsage: "LowUsage",
} as const;

/**
 * Whether a VM will get shutdown when it has idled for a period of time.
 */
export type ShutdownOnIdleMode = (typeof ShutdownOnIdleMode)[keyof typeof ShutdownOnIdleMode];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const WeekDay = {
    /**
     * Schedule will run on Sunday
     */
    Sunday: "Sunday",
    /**
     * Schedule will run on Monday
     */
    Monday: "Monday",
    /**
     * Schedule will run on Tuesday
     */
    Tuesday: "Tuesday",
    /**
     * Schedule will run on Wednesday
     */
    Wednesday: "Wednesday",
    /**
     * Schedule will run on Thursday
     */
    Thursday: "Thursday",
    /**
     * Schedule will run on Friday
     */
    Friday: "Friday",
    /**
     * Schedule will run on Saturday
     */
    Saturday: "Saturday",
} as const;

/**
 * Days of the week.
 */
export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];
