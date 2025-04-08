export const ActionType = {
    Allow: "Allow",
    Alert: "Alert",
    Block: "Block",
} as const;

/**
 * The type of action to take.
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const BlockResponseCode = {
    SERVFAIL: "SERVFAIL",
} as const;

/**
 * The response code for block actions.
 */
export type BlockResponseCode = (typeof BlockResponseCode)[keyof typeof BlockResponseCode];

export const DnsSecurityRuleState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of DNS security rule.
 */
export type DnsSecurityRuleState = (typeof DnsSecurityRuleState)[keyof typeof DnsSecurityRuleState];

export const ForwardingRuleState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of forwarding rule.
 */
export type ForwardingRuleState = (typeof ForwardingRuleState)[keyof typeof ForwardingRuleState];

export const IpAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * Private IP address allocation method.
 */
export type IpAllocationMethod = (typeof IpAllocationMethod)[keyof typeof IpAllocationMethod];
