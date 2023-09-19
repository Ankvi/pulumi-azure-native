export const AlertSeverity = {
    Zero: "0",
    One: "1",
    Two: "2",
    Three: "3",
    Four: "4",
} as const;

export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];

export const ConditionalOperator = {
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThanOrEqual: "LessThanOrEqual",
    GreaterThan: "GreaterThan",
    LessThan: "LessThan",
    Equal: "Equal",
} as const;

export type ConditionalOperator = (typeof ConditionalOperator)[keyof typeof ConditionalOperator];

export const Enabled = {
    True: "true",
    False: "false",
} as const;

export type Enabled = (typeof Enabled)[keyof typeof Enabled];

export const MetricTriggerType = {
    Consecutive: "Consecutive",
    Total: "Total",
} as const;

export type MetricTriggerType = (typeof MetricTriggerType)[keyof typeof MetricTriggerType];

export const Operator = {
    Include: "Include",
} as const;

export type Operator = (typeof Operator)[keyof typeof Operator];

export const QueryType = {
    ResultCount: "ResultCount",
} as const;

export type QueryType = (typeof QueryType)[keyof typeof QueryType];
