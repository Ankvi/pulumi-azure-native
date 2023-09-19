export const ConditionOperator = {
    Equals: "Equals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

export type ConditionOperator = (typeof ConditionOperator)[keyof typeof ConditionOperator];

export const DimensionOperator = {
    Include: "Include",
    Exclude: "Exclude",
} as const;

export type DimensionOperator = (typeof DimensionOperator)[keyof typeof DimensionOperator];

export const TimeAggregation = {
    Count: "Count",
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
} as const;

export type TimeAggregation = (typeof TimeAggregation)[keyof typeof TimeAggregation];
