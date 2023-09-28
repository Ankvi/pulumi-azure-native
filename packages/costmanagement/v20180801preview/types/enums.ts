export const ConnectorStatus = {
    Active: "active",
    Error: "error",
    Suspended: "suspended",
} as const;

/**
 * Connector status
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

export const FormatType = {
    Csv: "Csv",
} as const;

/**
 * The format of the report being delivered.
 */
export type FormatType = (typeof FormatType)[keyof typeof FormatType];

export const FunctionType = {
    Sum: "Sum",
} as const;

/**
 * The name of the aggregation function to use.
 */
export type FunctionType = (typeof FunctionType)[keyof typeof FunctionType];

export const GranularityType = {
    Daily: "Daily",
    Hourly: "Hourly",
} as const;

/**
 * The granularity of rows in the report.
 */
export type GranularityType = (typeof GranularityType)[keyof typeof GranularityType];

export const OperatorType = {
    In: "In",
} as const;

/**
 * The operator to use for comparison.
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const RecurrenceType = {
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
    Annually: "Annually",
} as const;

/**
 * The schedule recurrence.
 */
export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];

export const ReportColumnType = {
    Tag: "Tag",
    Dimension: "Dimension",
} as const;

/**
 * Has type of the column to group.
 */
export type ReportColumnType = (typeof ReportColumnType)[keyof typeof ReportColumnType];

export const ReportType = {
    Usage: "Usage",
} as const;

/**
 * The type of the report.
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

/**
 * The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const TimeframeType = {
    WeekToDate: "WeekToDate",
    MonthToDate: "MonthToDate",
    Custom: "Custom",
} as const;

/**
 * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
 */
export type TimeframeType = (typeof TimeframeType)[keyof typeof TimeframeType];
