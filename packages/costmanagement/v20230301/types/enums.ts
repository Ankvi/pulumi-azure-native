export const AccumulatedType = {
    True: "true",
    False: "false",
} as const;

/**
 * Show costs accumulated over time.
 */
export type AccumulatedType = (typeof AccumulatedType)[keyof typeof AccumulatedType];

export const ChartType = {
    Area: "Area",
    Line: "Line",
    StackedColumn: "StackedColumn",
    GroupedColumn: "GroupedColumn",
    Table: "Table",
} as const;

/**
 * Chart type of the main view in Cost Analysis. Required.
 */
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

/**
 * Days of Week.
 */
export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek];

export const ExportType = {
    Usage: "Usage",
    ActualCost: "ActualCost",
    AmortizedCost: "AmortizedCost",
} as const;

/**
 * The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.
 */
export type ExportType = (typeof ExportType)[keyof typeof ExportType];

export const FileFormat = {
    Csv: "Csv",
} as const;

/**
 * Destination of the view data. Currently only CSV format is supported.
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

export const FormatType = {
    Csv: "Csv",
} as const;

/**
 * The format of the export being delivered. Currently only 'Csv' is supported.
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
} as const;

/**
 * The granularity of rows in the export. Currently only 'Daily' is supported.
 */
export type GranularityType = (typeof GranularityType)[keyof typeof GranularityType];

export const KpiTypeType = {
    Forecast: "Forecast",
    Budget: "Budget",
} as const;

/**
 * KPI type (Forecast, Budget).
 */
export type KpiTypeType = (typeof KpiTypeType)[keyof typeof KpiTypeType];

export const MetricType = {
    ActualCost: "ActualCost",
    AmortizedCost: "AmortizedCost",
    AHUB: "AHUB",
} as const;

/**
 * Metric to use when displaying costs.
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

export const OperatorType = {
    In: "In",
    Contains: "Contains",
} as const;

/**
 * The operator to use for comparison.
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const PivotTypeType = {
    Dimension: "Dimension",
    TagKey: "TagKey",
} as const;

/**
 * Data type to show in view.
 */
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

/**
 * Has type of the column to group.
 */
export type QueryColumnType = (typeof QueryColumnType)[keyof typeof QueryColumnType];

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

export const ReportConfigSortingType = {
    Ascending: "Ascending",
    Descending: "Descending",
} as const;

/**
 * Direction of sort.
 */
export type ReportConfigSortingType = (typeof ReportConfigSortingType)[keyof typeof ReportConfigSortingType];

export const ReportGranularityType = {
    Daily: "Daily",
    Monthly: "Monthly",
} as const;

/**
 * The granularity of rows in the report.
 */
export type ReportGranularityType = (typeof ReportGranularityType)[keyof typeof ReportGranularityType];

export const ReportTimeframeType = {
    WeekToDate: "WeekToDate",
    MonthToDate: "MonthToDate",
    YearToDate: "YearToDate",
    Custom: "Custom",
} as const;

/**
 * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
 */
export type ReportTimeframeType = (typeof ReportTimeframeType)[keyof typeof ReportTimeframeType];

export const ReportType = {
    Usage: "Usage",
} as const;

/**
 * The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.
 */
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

/**
 * Frequency of the schedule.
 */
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

/**
 * Kind of the scheduled action.
 */
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

/**
 * Status of the scheduled action.
 */
export type ScheduledActionStatus = (typeof ScheduledActionStatus)[keyof typeof ScheduledActionStatus];

export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

/**
 * The status of the export's schedule. If 'Inactive', the export's schedule is paused.
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const TimeframeType = {
    MonthToDate: "MonthToDate",
    BillingMonthToDate: "BillingMonthToDate",
    TheLastMonth: "TheLastMonth",
    TheLastBillingMonth: "TheLastBillingMonth",
    WeekToDate: "WeekToDate",
    Custom: "Custom",
} as const;

/**
 * The time frame for pulling data for the export. If custom, then a specific time period must be provided.
 */
export type TimeframeType = (typeof TimeframeType)[keyof typeof TimeframeType];

export const WeeksOfMonth = {
    First: "First",
    Second: "Second",
    Third: "Third",
    Fourth: "Fourth",
    Last: "Last",
} as const;

/**
 * Weeks of month.
 */
export type WeeksOfMonth = (typeof WeeksOfMonth)[keyof typeof WeeksOfMonth];
