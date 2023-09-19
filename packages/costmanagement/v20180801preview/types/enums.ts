export const ConnectorStatus = {
    Active: "active",
    Error: "error",
    Suspended: "suspended",
} as const;

export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

export const FormatType = {
    Csv: "Csv",
} as const;

export type FormatType = (typeof FormatType)[keyof typeof FormatType];

export const FunctionType = {
    Sum: "Sum",
} as const;

export type FunctionType = (typeof FunctionType)[keyof typeof FunctionType];

export const GranularityType = {
    Daily: "Daily",
    Hourly: "Hourly",
} as const;

export type GranularityType = (typeof GranularityType)[keyof typeof GranularityType];

export const OperatorType = {
    In: "In",
} as const;

export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const RecurrenceType = {
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
    Annually: "Annually",
} as const;

export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];

export const ReportColumnType = {
    Tag: "Tag",
    Dimension: "Dimension",
} as const;

export type ReportColumnType = (typeof ReportColumnType)[keyof typeof ReportColumnType];

export const ReportType = {
    Usage: "Usage",
} as const;

export type ReportType = (typeof ReportType)[keyof typeof ReportType];

export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const TimeframeType = {
    WeekToDate: "WeekToDate",
    MonthToDate: "MonthToDate",
    Custom: "Custom",
} as const;

export type TimeframeType = (typeof TimeframeType)[keyof typeof TimeframeType];
