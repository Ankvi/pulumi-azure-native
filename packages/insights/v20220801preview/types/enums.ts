export const ConditionOperator = {
    Equals: "Equals",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    LessThan: "LessThan",
    LessThanOrEqual: "LessThanOrEqual",
} as const;

/**
 * The criteria operator. Relevant and required only for rules of the kind LogAlert.
 */
export type ConditionOperator = (typeof ConditionOperator)[keyof typeof ConditionOperator];

export const DimensionOperator = {
    Include: "Include",
    Exclude: "Exclude",
} as const;

/**
 * Operator for dimension values
 */
export type DimensionOperator = (typeof DimensionOperator)[keyof typeof DimensionOperator];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

/**
 * Type of managed service identity.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const Kind = {
    LogAlert: "LogAlert",
    LogToMetric: "LogToMetric",
} as const;

/**
 * Indicates the type of scheduled query rule. The default is LogAlert.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * This determines if traffic is allowed over public network. By default it is enabled.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const TimeAggregation = {
    Count: "Count",
    Average: "Average",
    Minimum: "Minimum",
    Maximum: "Maximum",
    Total: "Total",
} as const;

/**
 * Aggregation type. Relevant and required only for rules of the kind LogAlert.
 */
export type TimeAggregation = (typeof TimeAggregation)[keyof typeof TimeAggregation];
