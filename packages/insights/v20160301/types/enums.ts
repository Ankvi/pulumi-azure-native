export const ConditionOperator = {
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

/**
 * the operator used to compare the data and the threshold.
 */
export type ConditionOperator = (typeof ConditionOperator)[keyof typeof ConditionOperator];

export const TimeAggregationOperator = {
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
    Last: "Last",
} as const;

/**
 * the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric.
 */
export type TimeAggregationOperator = (typeof TimeAggregationOperator)[keyof typeof TimeAggregationOperator];
