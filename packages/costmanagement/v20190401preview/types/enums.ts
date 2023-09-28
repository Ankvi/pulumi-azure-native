export const CategoryType = {
    Cost: "Cost",
    Usage: "Usage",
} as const;

/**
 * The category of the budget, whether the budget tracks cost or usage.
 */
export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

export const NotificationOperatorType = {
    EqualTo: "EqualTo",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
} as const;

/**
 * The comparison operator.
 */
export type NotificationOperatorType = (typeof NotificationOperatorType)[keyof typeof NotificationOperatorType];

export const OperatorType = {
    In: "In",
    Contains: "Contains",
} as const;

/**
 * The operator to use for comparison.
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const TimeGrainType = {
    Monthly: "Monthly",
    Quarterly: "Quarterly",
    Annually: "Annually",
} as const;

/**
 * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
 */
export type TimeGrainType = (typeof TimeGrainType)[keyof typeof TimeGrainType];
