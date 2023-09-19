export const AccumulatedType = {
    True: "true",
    False: "false",
} as const;

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

export type BudgetNotificationOperatorType = (typeof BudgetNotificationOperatorType)[keyof typeof BudgetNotificationOperatorType];

export const BudgetOperatorType = {
    In: "In",
} as const;

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

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

export const ChartType = {
    Area: "Area",
    Line: "Line",
    StackedColumn: "StackedColumn",
    GroupedColumn: "GroupedColumn",
    Table: "Table",
} as const;

export type ChartType = (typeof ChartType)[keyof typeof ChartType];

export const CostAllocationPolicyType = {
    FixedProportion: "FixedProportion",
} as const;

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

export type Frequency = (typeof Frequency)[keyof typeof Frequency];

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

export const SettingsKind = {
    Taginheritance: "taginheritance",
} as const;

export type SettingsKind = (typeof SettingsKind)[keyof typeof SettingsKind];

export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const SystemAssignedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type SystemAssignedServiceIdentityType = (typeof SystemAssignedServiceIdentityType)[keyof typeof SystemAssignedServiceIdentityType];

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

export type TimeGrainType = (typeof TimeGrainType)[keyof typeof TimeGrainType];

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
