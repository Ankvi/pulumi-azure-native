export const ActionRuleStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ActionRuleStatus = (typeof ActionRuleStatus)[keyof typeof ActionRuleStatus];

export const ActionRuleType = {
    Suppression: "Suppression",
    ActionGroup: "ActionGroup",
    Diagnostics: "Diagnostics",
} as const;

export type ActionRuleType = (typeof ActionRuleType)[keyof typeof ActionRuleType];

export const Operator = {
    Equals: "Equals",
    NotEquals: "NotEquals",
    Contains: "Contains",
    DoesNotContain: "DoesNotContain",
} as const;

export type Operator = (typeof Operator)[keyof typeof Operator];

export const ScopeType = {
    ResourceGroup: "ResourceGroup",
    Resource: "Resource",
    Subscription: "Subscription",
} as const;

export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType];

export const SuppressionType = {
    Always: "Always",
    Once: "Once",
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
} as const;

export type SuppressionType = (typeof SuppressionType)[keyof typeof SuppressionType];