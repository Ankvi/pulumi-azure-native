export const AlertSeverity = {
    Zero: "0",
    One: "1",
    Two: "2",
    Three: "3",
    Four: "4",
} as const;

/**
 * Severity of the alert
 */
export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];

export const ConditionalOperator = {
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThanOrEqual: "LessThanOrEqual",
    GreaterThan: "GreaterThan",
    LessThan: "LessThan",
    Equal: "Equal",
} as const;

/**
 * Evaluation operation for rule - 'GreaterThan' or 'LessThan.
 */
export type ConditionalOperator = (typeof ConditionalOperator)[keyof typeof ConditionalOperator];

export const Enabled = {
    True: "true",
    False: "false",
} as const;

/**
 * The flag which indicates whether the Log Search rule is enabled. Value should be true or false
 */
export type Enabled = (typeof Enabled)[keyof typeof Enabled];

export const MetricTriggerType = {
    Consecutive: "Consecutive",
    Total: "Total",
} as const;

/**
 * Metric Trigger Type - 'Consecutive' or 'Total'
 */
export type MetricTriggerType = (typeof MetricTriggerType)[keyof typeof MetricTriggerType];

export const Operator = {
    Include: "Include",
} as const;

/**
 * Operator for dimension values
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

export const QueryType = {
    ResultCount: "ResultCount",
} as const;

/**
 * Set value to 'ResultCount' .
 */
export type QueryType = (typeof QueryType)[keyof typeof QueryType];
