export const AutoscaleType = {
    ScheduleBased: "ScheduleBased",
    LoadBased: "LoadBased",
} as const;

/**
 * User to specify which type of Autoscale to be implemented - Scheduled Based or Load Based.
 */
export type AutoscaleType = (typeof AutoscaleType)[keyof typeof AutoscaleType];

export const ComparisonOperator = {
    GreaterThan: "greaterThan",
    GreaterThanOrEqual: "greaterThanOrEqual",
    LessThan: "lessThan",
    LessThanOrEqual: "lessThanOrEqual",
} as const;

/**
 * The comparison operator.
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

export const ContentEncoding = {
    Base64: "Base64",
    None: "None",
} as const;

/**
 * This property indicates if the content is encoded and is case-insensitive. Please set the value to base64 if the content is base64 encoded. Set it to none or skip it if the content is plain text.
 */
export type ContentEncoding = (typeof ContentEncoding)[keyof typeof ContentEncoding];

export const KeyVaultObjectType = {
    Key: "Key",
    Secret: "Secret",
    Certificate: "Certificate",
} as const;

/**
 * Type of key vault object: secret, key or certificate.
 */
export type KeyVaultObjectType = (typeof KeyVaultObjectType)[keyof typeof KeyVaultObjectType];

export const ScaleActionType = {
    Scaleup: "scaleup",
    Scaledown: "scaledown",
} as const;

/**
 * The action type.
 */
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
