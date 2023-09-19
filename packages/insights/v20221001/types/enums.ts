export const ComparisonOperationType = {
    Equals: "Equals",
    NotEquals: "NotEquals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

export type ComparisonOperationType = (typeof ComparisonOperationType)[keyof typeof ComparisonOperationType];

export const MetricStatisticType = {
    Average: "Average",
    Min: "Min",
    Max: "Max",
    Sum: "Sum",
    Count: "Count",
} as const;

export type MetricStatisticType = (typeof MetricStatisticType)[keyof typeof MetricStatisticType];

export const OperationType = {
    Scale: "Scale",
} as const;

export type OperationType = (typeof OperationType)[keyof typeof OperationType];

export const PredictiveAutoscalePolicyScaleMode = {
    Disabled: "Disabled",
    ForecastOnly: "ForecastOnly",
    Enabled: "Enabled",
} as const;

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

export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const ScaleDirection = {
    None: "None",
    Increase: "Increase",
    Decrease: "Decrease",
} as const;

export type ScaleDirection = (typeof ScaleDirection)[keyof typeof ScaleDirection];

export const ScaleRuleMetricDimensionOperationType = {
    Equals: "Equals",
    NotEquals: "NotEquals",
} as const;

export type ScaleRuleMetricDimensionOperationType = (typeof ScaleRuleMetricDimensionOperationType)[keyof typeof ScaleRuleMetricDimensionOperationType];

export const ScaleType = {
    ChangeCount: "ChangeCount",
    PercentChangeCount: "PercentChangeCount",
    ExactCount: "ExactCount",
    ServiceAllowedNextValue: "ServiceAllowedNextValue",
} as const;

export type ScaleType = (typeof ScaleType)[keyof typeof ScaleType];

export const TimeAggregationType = {
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
    Count: "Count",
    Last: "Last",
} as const;

export type TimeAggregationType = (typeof TimeAggregationType)[keyof typeof TimeAggregationType];
