export const ActionRuleStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicates if the given action rule is enabled or disabled
 */
export type ActionRuleStatus = (typeof ActionRuleStatus)[keyof typeof ActionRuleStatus];

export const ActionRuleType = {
    Suppression: "Suppression",
    ActionGroup: "ActionGroup",
    Diagnostics: "Diagnostics",
} as const;

/**
 * Indicates type of action rule
 */
export type ActionRuleType = (typeof ActionRuleType)[keyof typeof ActionRuleType];

export const Operator = {
    Equals: "Equals",
    NotEquals: "NotEquals",
    Contains: "Contains",
    DoesNotContain: "DoesNotContain",
} as const;

/**
 * operator for a given condition
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

export const ScopeType = {
    ResourceGroup: "ResourceGroup",
    Resource: "Resource",
    Subscription: "Subscription",
} as const;

/**
 * type of target scope
 */
export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType];

export const SuppressionType = {
    Always: "Always",
    Once: "Once",
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
} as const;

/**
 * Specifies when the suppression should be applied
 */
export type SuppressionType = (typeof SuppressionType)[keyof typeof SuppressionType];
