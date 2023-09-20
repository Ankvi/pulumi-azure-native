export const AutoscaleType = {
    ScheduleBased: "ScheduleBased",
    LoadBased: "LoadBased",
} as const;

export type AutoscaleType = (typeof AutoscaleType)[keyof typeof AutoscaleType];

export const ComparisonOperator = {
    GreaterThan: "greaterThan",
    GreaterThanOrEqual: "greaterThanOrEqual",
    LessThan: "lessThan",
    LessThanOrEqual: "lessThanOrEqual",
} as const;

export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

export const ContentEncoding = {
    Base64: "Base64",
    None: "None",
} as const;

export type ContentEncoding = (typeof ContentEncoding)[keyof typeof ContentEncoding];

export const KeyVaultObjectType = {
    Key: "Key",
    Secret: "Secret",
    Certificate: "Certificate",
} as const;

export type KeyVaultObjectType = (typeof KeyVaultObjectType)[keyof typeof KeyVaultObjectType];

export const ScaleActionType = {
    Scaleup: "scaleup",
    Scaledown: "scaledown",
} as const;

export type ScaleActionType = (typeof ScaleActionType)[keyof typeof ScaleActionType];

export const ScheduleDay = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type ScheduleDay = (typeof ScheduleDay)[keyof typeof ScheduleDay];