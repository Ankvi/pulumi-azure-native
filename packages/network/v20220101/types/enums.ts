export const DdosCustomPolicyProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Syn: "Syn",
} as const;

export type DdosCustomPolicyProtocol = (typeof DdosCustomPolicyProtocol)[keyof typeof DdosCustomPolicyProtocol];

export const DdosCustomPolicyTriggerSensitivityOverride = {
    Relaxed: "Relaxed",
    Low: "Low",
    Default: "Default",
    High: "High",
} as const;

export type DdosCustomPolicyTriggerSensitivityOverride = (typeof DdosCustomPolicyTriggerSensitivityOverride)[keyof typeof DdosCustomPolicyTriggerSensitivityOverride];
