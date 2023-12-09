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

export const ActionType = {
    AddActionGroups: "AddActionGroups",
    RemoveAllActionGroups: "RemoveAllActionGroups",
} as const;

/**
 * Action that should be applied.
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const AlertRuleState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The alert rule state.
 */
export type AlertRuleState = (typeof AlertRuleState)[keyof typeof AlertRuleState];

export const DaysOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

/**
 * Days of week.
 */
export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek];

export const Field = {
    Severity: "Severity",
    MonitorService: "MonitorService",
    MonitorCondition: "MonitorCondition",
    SignalType: "SignalType",
    TargetResourceType: "TargetResourceType",
    TargetResource: "TargetResource",
    TargetResourceGroup: "TargetResourceGroup",
    AlertRuleId: "AlertRuleId",
    AlertRuleName: "AlertRuleName",
    Description: "Description",
    AlertContext: "AlertContext",
} as const;

/**
 * Field for a given condition.
 */
export type Field = (typeof Field)[keyof typeof Field];

export const Operator = {
    Equals: "Equals",
    NotEquals: "NotEquals",
    Contains: "Contains",
    DoesNotContain: "DoesNotContain",
} as const;

/**
 * Operator for a given condition.
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

export const RecurrenceType = {
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
} as const;

/**
 * Specifies when the recurrence should be applied.
 */
export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];

export const ScopeType = {
    ResourceGroup: "ResourceGroup",
    Resource: "Resource",
    Subscription: "Subscription",
} as const;

/**
 * type of target scope
 */
export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType];

export const Severity = {
    Sev0: "Sev0",
    Sev1: "Sev1",
    Sev2: "Sev2",
    Sev3: "Sev3",
    Sev4: "Sev4",
} as const;

/**
 * The alert rule severity.
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

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
