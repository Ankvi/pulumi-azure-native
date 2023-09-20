export const ActionType = {
    AddActionGroups: "AddActionGroups",
    RemoveAllActionGroups: "RemoveAllActionGroups",
    CorrelateAlerts: "CorrelateAlerts",
} as const;

export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const DaysOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

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

export type Field = (typeof Field)[keyof typeof Field];

export const NotificationsForCorrelatedAlerts = {
    NotifyAlways: "NotifyAlways",
    SuppressAlways: "SuppressAlways",
} as const;

export type NotificationsForCorrelatedAlerts = (typeof NotificationsForCorrelatedAlerts)[keyof typeof NotificationsForCorrelatedAlerts];

export const Operator = {
    Equals: "Equals",
    NotEquals: "NotEquals",
    Contains: "Contains",
    DoesNotContain: "DoesNotContain",
} as const;

export type Operator = (typeof Operator)[keyof typeof Operator];

export const RecurrenceType = {
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
} as const;

export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];