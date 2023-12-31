export const SecurityAlertPolicyState = {
    New: "New",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
 */
export type SecurityAlertPolicyState = (typeof SecurityAlertPolicyState)[keyof typeof SecurityAlertPolicyState];
