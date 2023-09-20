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

export const FunctionType = {
    Sum: "Sum",
} as const;

export type FunctionType = (typeof FunctionType)[keyof typeof FunctionType];

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