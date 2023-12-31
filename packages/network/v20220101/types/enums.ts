export const DdosCustomPolicyProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Syn: "Syn",
} as const;

/**
 * The protocol for which the DDoS protection policy is being customized.
 */
export type DdosCustomPolicyProtocol = (typeof DdosCustomPolicyProtocol)[keyof typeof DdosCustomPolicyProtocol];

export const DdosCustomPolicyTriggerSensitivityOverride = {
    Relaxed: "Relaxed",
    Low: "Low",
    Default: "Default",
    High: "High",
} as const;

/**
 * The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic.
 */
export type DdosCustomPolicyTriggerSensitivityOverride = (typeof DdosCustomPolicyTriggerSensitivityOverride)[keyof typeof DdosCustomPolicyTriggerSensitivityOverride];
