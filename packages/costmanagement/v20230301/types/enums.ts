export const AccumulatedType = {
    True: "true",
    False: "false",
} as const;

export type AccumulatedType = (typeof AccumulatedType)[keyof typeof AccumulatedType];

export const ChartType = {
    Area: "Area",
    Line: "Line",
    StackedColumn: "StackedColumn",
    GroupedColumn: "GroupedColumn",
    Table: "Table",
} as const;

export type ChartType = (typeof ChartType)[keyof typeof ChartType];

export const DaysOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek];

export const ExportType = {
    Usage: "Usage",
    ActualCost: "ActualCost",
    AmortizedCost: "AmortizedCost",
} as const;

export type ExportType = (typeof ExportType)[keyof typeof ExportType];

export const FileFormat = {
    Csv: "Csv",
} as const;

export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

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
} as const;

export type GranularityType = (typeof GranularityType)[keyof typeof GranularityType];

export const KpiTypeType = {
    Forecast: "Forecast",
    Budget: "Budget",
} as const;

export type KpiTypeType = (typeof KpiTypeType)[keyof typeof KpiTypeType];

export const MetricType = {
    ActualCost: "ActualCost",
    AmortizedCost: "AmortizedCost",
    AHUB: "AHUB",
} as const;

export type MetricType = (typeof MetricType)[keyof typeof MetricType];

export const OperatorType = {
    In: "In",
    Contains: "Contains",
} as const;

export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const PivotTypeType = {
    Dimension: "Dimension",
    TagKey: "TagKey",
} as const;

export type PivotTypeType = (typeof PivotTypeType)[keyof typeof PivotTypeType];

export const QueryColumnType = {
    /**
     * The tag associated with the cost data.
     */
    TagKey: "TagKey",
    /**
     * The dimension of cost data.
     */
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

export const ReportConfigSortingType = {
    Ascending: "Ascending",
    Descending: "Descending",
} as const;

export type ReportConfigSortingType = (typeof ReportConfigSortingType)[keyof typeof ReportConfigSortingType];

export const ReportGranularityType = {
    Daily: "Daily",
    Monthly: "Monthly",
} as const;

export type ReportGranularityType = (typeof ReportGranularityType)[keyof typeof ReportGranularityType];

export const ReportTimeframeType = {
    WeekToDate: "WeekToDate",
    MonthToDate: "MonthToDate",
    YearToDate: "YearToDate",
    Custom: "Custom",
} as const;

export type ReportTimeframeType = (typeof ReportTimeframeType)[keyof typeof ReportTimeframeType];

export const ReportType = {
    Usage: "Usage",
} as const;

export type ReportType = (typeof ReportType)[keyof typeof ReportType];

export const ScheduleFrequency = {
    /**
     * Cost analysis data will be emailed every day.
     */
    Daily: "Daily",
    /**
     * Cost analysis data will be emailed every week.
     */
    Weekly: "Weekly",
    /**
     * Cost analysis data will be emailed every month.
     */
    Monthly: "Monthly",
} as const;

export type ScheduleFrequency = (typeof ScheduleFrequency)[keyof typeof ScheduleFrequency];

export const ScheduledActionKind = {
    /**
     * Cost analysis data will be emailed.
     */
    Email: "Email",
    /**
     * Cost anomaly information will be emailed. Available only on subscription scope at daily frequency. If no anomaly is detected on the resource, an email won't be sent.
     */
    InsightAlert: "InsightAlert",
} as const;

export type ScheduledActionKind = (typeof ScheduledActionKind)[keyof typeof ScheduledActionKind];

export const ScheduledActionStatus = {
    /**
     * Scheduled action is saved but will not be run.
     */
    Disabled: "Disabled",
    /**
     * Scheduled action is saved and will be run.
     */
    Enabled: "Enabled",
    /**
     * Scheduled action is expired.
     */
    Expired: "Expired",
} as const;

export type ScheduledActionStatus = (typeof ScheduledActionStatus)[keyof typeof ScheduledActionStatus];

export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const TimeframeType = {
    MonthToDate: "MonthToDate",
    BillingMonthToDate: "BillingMonthToDate",
    TheLastMonth: "TheLastMonth",
    TheLastBillingMonth: "TheLastBillingMonth",
    WeekToDate: "WeekToDate",
    Custom: "Custom",
} as const;

export type TimeframeType = (typeof TimeframeType)[keyof typeof TimeframeType];

export const WeeksOfMonth = {
    First: "First",
    Second: "Second",
    Third: "Third",
    Fourth: "Fourth",
    Last: "Last",
} as const;

export type WeeksOfMonth = (typeof WeeksOfMonth)[keyof typeof WeeksOfMonth];