export const DayOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const HttpAuthenticationType = {
    NotSpecified: "NotSpecified",
    ClientCertificate: "ClientCertificate",
    ActiveDirectoryOAuth: "ActiveDirectoryOAuth",
    Basic: "Basic",
} as const;

/**
 * Gets or sets the HTTP authentication type.
 */
export type HttpAuthenticationType = (typeof HttpAuthenticationType)[keyof typeof HttpAuthenticationType];

export const JobActionType = {
    Http: "Http",
    Https: "Https",
    StorageQueue: "StorageQueue",
    ServiceBusQueue: "ServiceBusQueue",
    ServiceBusTopic: "ServiceBusTopic",
} as const;

/**
 * Gets or sets the job action type.
 */
export type JobActionType = (typeof JobActionType)[keyof typeof JobActionType];

export const JobCollectionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Suspended: "Suspended",
    Deleted: "Deleted",
} as const;

/**
 * Gets or sets the state.
 */
export type JobCollectionState = (typeof JobCollectionState)[keyof typeof JobCollectionState];

export const JobScheduleDay = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
 */
export type JobScheduleDay = (typeof JobScheduleDay)[keyof typeof JobScheduleDay];

export const JobState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Faulted: "Faulted",
    Completed: "Completed",
} as const;

/**
 * Gets or set the job state.
 */
export type JobState = (typeof JobState)[keyof typeof JobState];

export const RecurrenceFrequency = {
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
} as const;

/**
 * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
 */
export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const RetryType = {
    None: "None",
    Fixed: "Fixed",
} as const;

/**
 * Gets or sets the retry strategy to be used.
 */
export type RetryType = (typeof RetryType)[keyof typeof RetryType];

export const ServiceBusAuthenticationType = {
    NotSpecified: "NotSpecified",
    SharedAccessKey: "SharedAccessKey",
} as const;

/**
 * Gets or sets the authentication type.
 */
export type ServiceBusAuthenticationType = (typeof ServiceBusAuthenticationType)[keyof typeof ServiceBusAuthenticationType];

export const ServiceBusTransportType = {
    NotSpecified: "NotSpecified",
    NetMessaging: "NetMessaging",
    AMQP: "AMQP",
} as const;

/**
 * Gets or sets the transport type.
 */
export type ServiceBusTransportType = (typeof ServiceBusTransportType)[keyof typeof ServiceBusTransportType];

export const SkuDefinition = {
    Standard: "Standard",
    Free: "Free",
    P10Premium: "P10Premium",
    P20Premium: "P20Premium",
} as const;

/**
 * Gets or set the SKU.
 */
export type SkuDefinition = (typeof SkuDefinition)[keyof typeof SkuDefinition];
