export const AccumulatedType = {
    True: "true",
    False: "false",
} as const;

/**
 * Show costs accumulated over time.
 */
export type AccumulatedType = (typeof AccumulatedType)[keyof typeof AccumulatedType];

export const BudgetNotificationOperatorType = {
    /**
     * Notification will be triggered if the evaluated cost is the same as threshold value. Note: It’s not recommended to use this OperatorType as there’s low chance of cost being exactly the same as threshold value, leading to missing of your alert. This OperatorType will be deprecated in future.
     *
     *  Supported for CategoryType(s): Cost.
     */
    EqualTo: "EqualTo",
    /**
     * Notification will be triggered if the evaluated cost is greater than the threshold value. Note: This is the recommended OperatorType while configuring Budget Alert.
     *
     *  Supported for CategoryType(s): Cost.
     */
    GreaterThan: "GreaterThan",
    /**
     * Notification will be triggered if the evaluated cost is greater than or equal to the threshold value.
     *
     *  Supported for CategoryType(s): Cost.
     */
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
    /**
     * Notification will be triggered if any Reservations in the scope of the Reservation Utilization Alert Rule have a utilization less than the threshold percentage.
     *
     *  Supported for CategoryType(s): ReservationUtilization.
     */
    LessThan: "LessThan",
} as const;

/**
 * The comparison operator.
 *
 *  Supported for CategoryType(s): Cost, ReservationUtilization.
 *
 *  Supported operators for **CategoryType: Cost**
 * - GreaterThan
 * - GreaterThanOrEqualTo
 *
 *  Supported operators for **CategoryType: ReservationUtilization**
 * - LessThan
 */
export type BudgetNotificationOperatorType = (typeof BudgetNotificationOperatorType)[keyof typeof BudgetNotificationOperatorType];

export const BudgetOperatorType = {
    In: "In",
} as const;

/**
 * The operator to use for comparison.
 */
export type BudgetOperatorType = (typeof BudgetOperatorType)[keyof typeof BudgetOperatorType];

export const CategoryType = {
    /**
     * A Budget that evaluates monetary cost of Azure resources against an amount, and alerts based on a configured notification threshold.
     */
    Cost: "Cost",
    /**
     * An Alert Rule that evaluates the utilization percentage of Azure Reservations, and alerts based on a configured notification threshold.
     */
    ReservationUtilization: "ReservationUtilization",
} as const;

/**
 * The category of the budget.
 * - 'Cost' defines a Budget.
 * - 'ReservationUtilization' defines a Reservation Utilization Alert Rule.
 */
export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

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

export const ConnectorBillingModel = {
    Trial: "trial",
    AutoUpgrade: "autoUpgrade",
    Premium: "premium",
    Expired: "expired",
} as const;

/**
 * Connector billing model
 */
export type ConnectorBillingModel = (typeof ConnectorBillingModel)[keyof typeof ConnectorBillingModel];

export const ConnectorStatus = {
    Active: "active",
    Error: "error",
    Suspended: "suspended",
} as const;

/**
 * Connector status
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

export const CostAllocationPolicyType = {
    FixedProportion: "FixedProportion",
} as const;

/**
 * Method of cost allocation for the rule
 */
export type CostAllocationPolicyType = (typeof CostAllocationPolicyType)[keyof typeof CostAllocationPolicyType];

export const CostAllocationResourceType = {
    /**
     * Indicates an Azure dimension such as a subscription id or resource group name is being used for allocation.
     */
    Dimension: "Dimension",
    /**
     * Allocates cost based on Azure Tag key value pairs.
     */
    Tag: "Tag",
} as const;

/**
 * Type of resources contained in this cost allocation rule
 */
export type CostAllocationResourceType = (typeof CostAllocationResourceType)[keyof typeof CostAllocationResourceType];

export const CultureCode = {
    En_us: "en-us",
    Ja_jp: "ja-jp",
    Zh_cn: "zh-cn",
    De_de: "de-de",
    Es_es: "es-es",
    Fr_fr: "fr-fr",
    It_it: "it-it",
    Ko_kr: "ko-kr",
    Pt_br: "pt-br",
    Ru_ru: "ru-ru",
    Zh_tw: "zh-tw",
    Cs_cz: "cs-cz",
    Pl_pl: "pl-pl",
    Tr_tr: "tr-tr",
    Da_dk: "da-dk",
    En_gb: "en-gb",
    Hu_hu: "hu-hu",
    Nb_no: "nb-no",
    Nl_nl: "nl-nl",
    Pt_pt: "pt-pt",
    Sv_se: "sv-se",
} as const;

/**
 * Language in which the recipient will receive the notification, 
 *
 *  Supported for CategoryType(s): Cost, ReservationUtilization.
 */
export type CultureCode = (typeof CultureCode)[keyof typeof CultureCode];

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
 * The format of the report being delivered.
 */
export type FormatType = (typeof FormatType)[keyof typeof FormatType];

export const Frequency = {
    /**
     * After the threshold breaches and an Alert is fired, no further alerts will be sent until the next calendar day.
     */
    Daily: "Daily",
    /**
     * After the threshold breaches and an Alert is fired, no further alerts will be sent for 7 calendar days.
     */
    Weekly: "Weekly",
    /**
     * After the threshold breaches and an Alert is fired, no further alerts will be sent for 30 calendar days.
     */
    Monthly: "Monthly",
} as const;

/**
 * Frequency of a notification. Represents how long the notification will be silent after triggering an alert for a threshold breach. If not specified, the frequency will be set by default based on the timeGrain (Weekly when timeGrain: Last7Days, Monthly when timeGrain: Last30Days).
 *
 *  Supported for CategoryType(s): ReservationUtilization.
 */
export type Frequency = (typeof Frequency)[keyof typeof Frequency];

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

export const ReportColumnType = {
    Tag: "Tag",
    Dimension: "Dimension",
} as const;

/**
 * Has type of the column to group.
 */
export type ReportColumnType = (typeof ReportColumnType)[keyof typeof ReportColumnType];

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

export const RuleStatus = {
    /**
     * Rule is saved but not used to allocate costs.
     */
    NotActive: "NotActive",
    /**
     * Rule is saved and impacting cost allocation.
     */
    Active: "Active",
    /**
     * Rule is saved and cost allocation is being updated. Readonly value that cannot be submitted in a put request.
     */
    Processing: "Processing",
} as const;

/**
 * Status of the rule
 */
export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];

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

export const SettingsKind = {
    Taginheritance: "taginheritance",
} as const;

/**
 * Specifies the kind of settings.
 */
export type SettingsKind = (typeof SettingsKind)[keyof typeof SettingsKind];

export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

/**
 * The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const ThresholdType = {
    /**
     * Actual costs budget alerts notify when the actual accrued cost exceeds the allocated budget.
     */
    Actual: "Actual",
    /**
     * Forecasted costs budget alerts provide advanced notification that your spending trends are likely to exceed your allocated budget, as it relies on forecasted cost predictions.
     */
    Forecasted: "Forecasted",
} as const;

/**
 * The type of threshold.
 *
 *  Supported for CategoryType(s): Cost.
 */
export type ThresholdType = (typeof ThresholdType)[keyof typeof ThresholdType];

export const TimeGrainType = {
    /**
     * The budget will track costs in the current calendar month against the amount.
     *
     *  Supported for CategoryType: Cost only.
     */
    Monthly: "Monthly",
    /**
     * The budget will track costs in the current calendar quarter against the amount.
     *
     *  Supported for CategoryType: Cost only.
     */
    Quarterly: "Quarterly",
    /**
     * The budget will track costs in the current calendar year against the amount.
     *
     *  Supported for CategoryType: Cost only.
     */
    Annually: "Annually",
    /**
     * The budget will track costs in the current billing month against the amount.
     *
     *  Supported for CategoryType: Cost and Web Direct customers only.
     */
    BillingMonth: "BillingMonth",
    /**
     * The budget will track costs in the current billing quarter against the amount.
     *
     *  Supported for CategoryType: Cost and Web Direct customers only.
     */
    BillingQuarter: "BillingQuarter",
    /**
     * The budget will track costs in the current billing year against the amount.
     *
     *  Supported for CategoryType: Cost and Web Direct customers only.
     */
    BillingAnnual: "BillingAnnual",
    /**
     * The Reservation Utilization Alert Rule will evaluate reservations based on their 7-Day utilization percentage.
     *
     *  Supported for CategoryType: ReservationUtilization only.
     */
    Last7Days: "Last7Days",
    /**
     * The Reservation Utilization Alert Rule will evaluate reservations based on their 30-Day utilization percentage.
     *
     *  Supported for CategoryType: ReservationUtilization only.
     */
    Last30Days: "Last30Days",
} as const;

/**
 * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
 *
 * Supported for CategoryType(s): Cost, ReservationUtilization.
 *
 *  Supported timeGrainTypes for **CategoryType: Cost**
 *
 * - Monthly
 * - Quarterly
 * - Annually
 * - BillingMonth*
 * - BillingQuarter*
 * - BillingAnnual*
 *
 *   *only supported for Web Direct customers.
 *
 *  Supported timeGrainTypes for **CategoryType: ReservationUtilization**
 * - Last7Days
 * - Last30Days
 *
 *  Required for CategoryType(s): Cost, ReservationUtilization.
 */
export type TimeGrainType = (typeof TimeGrainType)[keyof typeof TimeGrainType];

export const TimeframeType = {
    WeekToDate: "WeekToDate",
    MonthToDate: "MonthToDate",
    Custom: "Custom",
} as const;

/**
 * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
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
