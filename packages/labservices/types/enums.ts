export const AddRemove = {
    /**
     * Indicates that a user is adding a favorite lab
     */
    Add: "Add",
    /**
     * Indicates that a user is removing a favorite lab
     */
    Remove: "Remove",
} as const;

export type AddRemove = (typeof AddRemove)[keyof typeof AddRemove];

export const ConfigurationState = {
    /**
     * User either hasn't started configuring their template
     * or they haven't started the configuration process.
     */
    NotApplicable: "NotApplicable",
    /**
     * User is finished modifying the template.
     */
    Completed: "Completed",
} as const;

export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

export const ConnectionType = {
    Public: "Public",
    Private: "Private",
    None: "None",
} as const;

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

export type CreateOption = (typeof CreateOption)[keyof typeof CreateOption];

export const EnableState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EnableState = (typeof EnableState)[keyof typeof EnableState];

export const ManagedLabVmSize = {
    /**
     * The base VM size
     */
    Basic: "Basic",
    /**
     * The standard or default VM size
     */
    Standard: "Standard",
    /**
     * The most performant VM size
     */
    Performance: "Performance",
} as const;

export type ManagedLabVmSize = (typeof ManagedLabVmSize)[keyof typeof ManagedLabVmSize];

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

export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

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

export type ShutdownOnIdleMode = (typeof ShutdownOnIdleMode)[keyof typeof ShutdownOnIdleMode];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

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

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];