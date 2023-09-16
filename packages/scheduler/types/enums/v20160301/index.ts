// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


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

export type HttpAuthenticationType = (typeof HttpAuthenticationType)[keyof typeof HttpAuthenticationType];

export const JobActionType = {
    Http: "Http",
    Https: "Https",
    StorageQueue: "StorageQueue",
    ServiceBusQueue: "ServiceBusQueue",
    ServiceBusTopic: "ServiceBusTopic",
} as const;

export type JobActionType = (typeof JobActionType)[keyof typeof JobActionType];

export const JobCollectionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Suspended: "Suspended",
    Deleted: "Deleted",
} as const;

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

export type JobScheduleDay = (typeof JobScheduleDay)[keyof typeof JobScheduleDay];

export const JobState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Faulted: "Faulted",
    Completed: "Completed",
} as const;

export type JobState = (typeof JobState)[keyof typeof JobState];

export const RecurrenceFrequency = {
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
} as const;

export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const RetryType = {
    None: "None",
    Fixed: "Fixed",
} as const;

export type RetryType = (typeof RetryType)[keyof typeof RetryType];

export const ServiceBusAuthenticationType = {
    NotSpecified: "NotSpecified",
    SharedAccessKey: "SharedAccessKey",
} as const;

export type ServiceBusAuthenticationType = (typeof ServiceBusAuthenticationType)[keyof typeof ServiceBusAuthenticationType];

export const ServiceBusTransportType = {
    NotSpecified: "NotSpecified",
    NetMessaging: "NetMessaging",
    AMQP: "AMQP",
} as const;

export type ServiceBusTransportType = (typeof ServiceBusTransportType)[keyof typeof ServiceBusTransportType];

export const SkuDefinition = {
    Standard: "Standard",
    Free: "Free",
    P10Premium: "P10Premium",
    P20Premium: "P20Premium",
} as const;

export type SkuDefinition = (typeof SkuDefinition)[keyof typeof SkuDefinition];
