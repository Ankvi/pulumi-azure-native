export const CategoryType = {
    Cost: "Cost",
    Usage: "Usage",
} as const;

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

export const NotificationOperatorType = {
    EqualTo: "EqualTo",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
} as const;

export type NotificationOperatorType = (typeof NotificationOperatorType)[keyof typeof NotificationOperatorType];

export const OperatorType = {
    In: "In",
    Contains: "Contains",
} as const;

export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const TimeGrainType = {
    Monthly: "Monthly",
    Quarterly: "Quarterly",
    Annually: "Annually",
} as const;

export type TimeGrainType = (typeof TimeGrainType)[keyof typeof TimeGrainType];
