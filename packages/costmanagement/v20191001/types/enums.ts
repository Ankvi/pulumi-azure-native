export const ExportType = {
    Usage: "Usage",
} as const;

export type ExportType = (typeof ExportType)[keyof typeof ExportType];

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

export const QueryColumnType = {
    Tag: "Tag",
    Dimension: "Dimension",
} as const;

export type QueryColumnType = (typeof QueryColumnType)[keyof typeof QueryColumnType];

export const RecurrenceType = {
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
    Annually: "Annually",
} as const;

export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];

export const SortDirection = {
    Ascending: "Ascending",
    Descending: "Descending",
} as const;

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const TimeframeType = {
    WeekToDate: "WeekToDate",
    MonthToDate: "MonthToDate",
    YearToDate: "YearToDate",
    TheLastWeek: "TheLastWeek",
    TheLastMonth: "TheLastMonth",
    TheLastYear: "TheLastYear",
    Custom: "Custom",
} as const;

export type TimeframeType = (typeof TimeframeType)[keyof typeof TimeframeType];