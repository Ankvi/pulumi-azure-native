export const ConditionOperator = {
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

export type ConditionOperator = (typeof ConditionOperator)[keyof typeof ConditionOperator];

export const TimeAggregationOperator = {
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
    Last: "Last",
} as const;

export type TimeAggregationOperator = (typeof TimeAggregationOperator)[keyof typeof TimeAggregationOperator];
