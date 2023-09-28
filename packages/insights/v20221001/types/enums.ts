export const ComparisonOperationType = {
    Equals: "Equals",
    NotEquals: "NotEquals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

/**
 * the operator that is used to compare the metric data and the threshold.
 */
export type ComparisonOperationType = (typeof ComparisonOperationType)[keyof typeof ComparisonOperationType];

export const MetricStatisticType = {
    Average: "Average",
    Min: "Min",
    Max: "Max",
    Sum: "Sum",
    Count: "Count",
} as const;

/**
 * the metric statistic type. How the metrics from multiple instances are combined.
 */
export type MetricStatisticType = (typeof MetricStatisticType)[keyof typeof MetricStatisticType];

export const OperationType = {
    Scale: "Scale",
} as const;

/**
 * the operation associated with the notification and its value must be "scale"
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

export const PredictiveAutoscalePolicyScaleMode = {
    Disabled: "Disabled",
    ForecastOnly: "ForecastOnly",
    Enabled: "Enabled",
} as const;

/**
 * the predictive autoscale mode
 */
export type PredictiveAutoscalePolicyScaleMode = (typeof PredictiveAutoscalePolicyScaleMode)[keyof typeof PredictiveAutoscalePolicyScaleMode];

export const RecurrenceFrequency = {
    None: "None",
    Second: "Second",
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
    Year: "Year",
} as const;

/**
 * the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
 */
export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const ScaleDirection = {
    None: "None",
    Increase: "Increase",
    Decrease: "Decrease",
} as const;

/**
 * the scale direction. Whether the scaling action increases or decreases the number of instances.
 */
export type ScaleDirection = (typeof ScaleDirection)[keyof typeof ScaleDirection];

export const ScaleRuleMetricDimensionOperationType = {
    Equals: "Equals",
    NotEquals: "NotEquals",
} as const;

/**
 * the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
 */
export type ScaleRuleMetricDimensionOperationType = (typeof ScaleRuleMetricDimensionOperationType)[keyof typeof ScaleRuleMetricDimensionOperationType];

export const ScaleType = {
    ChangeCount: "ChangeCount",
    PercentChangeCount: "PercentChangeCount",
    ExactCount: "ExactCount",
    ServiceAllowedNextValue: "ServiceAllowedNextValue",
} as const;

/**
 * the type of action that should occur when the scale rule fires.
 */
export type ScaleType = (typeof ScaleType)[keyof typeof ScaleType];

export const TimeAggregationType = {
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
    Count: "Count",
    Last: "Last",
} as const;

/**
 * time aggregation type. How the data that is collected should be combined over time. The default value is Average.
 */
export type TimeAggregationType = (typeof TimeAggregationType)[keyof typeof TimeAggregationType];
