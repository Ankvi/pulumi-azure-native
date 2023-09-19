export const SecurityAlertPolicyState = {
    New: "New",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SecurityAlertPolicyState = (typeof SecurityAlertPolicyState)[keyof typeof SecurityAlertPolicyState];
