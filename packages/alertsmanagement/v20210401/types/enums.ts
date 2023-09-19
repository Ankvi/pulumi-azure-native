export const AlertRuleState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type AlertRuleState = (typeof AlertRuleState)[keyof typeof AlertRuleState];

export const Severity = {
    Sev0: "Sev0",
    Sev1: "Sev1",
    Sev2: "Sev2",
    Sev3: "Sev3",
    Sev4: "Sev4",
} as const;

export type Severity = (typeof Severity)[keyof typeof Severity];
