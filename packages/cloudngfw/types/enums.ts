export const ActionEnum = {
    Allow: "Allow",
    DenySilent: "DenySilent",
    DenyResetServer: "DenyResetServer",
    DenyResetBoth: "DenyResetBoth",
} as const;

/**
 * rule action
 */
export type ActionEnum = (typeof ActionEnum)[keyof typeof ActionEnum];

export const BillingCycle = {
    WEEKLY: "WEEKLY",
    MONTHLY: "MONTHLY",
} as const;

/**
 * different billing cycles like MONTHLY/WEEKLY
 */
export type BillingCycle = (typeof BillingCycle)[keyof typeof BillingCycle];

export const BooleanEnum = {
    TRUE: "TRUE",
    FALSE: "FALSE",
} as const;

/**
 * cidr should not be 'any'
 */
export type BooleanEnum = (typeof BooleanEnum)[keyof typeof BooleanEnum];

export const DNSProxy = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
} as const;

/**
 * Enable DNS proxy, disabled by default
 */
export type DNSProxy = (typeof DNSProxy)[keyof typeof DNSProxy];

export const DecryptionRuleTypeEnum = {
    SSLOutboundInspection: "SSLOutboundInspection",
    SSLInboundInspection: "SSLInboundInspection",
    None: "None",
} as const;

/**
 * enable or disable decryption
 */
export type DecryptionRuleTypeEnum = (typeof DecryptionRuleTypeEnum)[keyof typeof DecryptionRuleTypeEnum];

export const DefaultMode = {
    IPS: "IPS",
    FIREWALL: "FIREWALL",
    NONE: "NONE",
} as const;

/**
 * Mode for default rules creation
 */
export type DefaultMode = (typeof DefaultMode)[keyof typeof DefaultMode];

export const EgressNat = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
} as const;

/**
 * Enable egress NAT, enabled by default
 */
export type EgressNat = (typeof EgressNat)[keyof typeof EgressNat];

export const EnabledDNSType = {
    CUSTOM: "CUSTOM",
    AZURE: "AZURE",
} as const;

/**
 * Enabled DNS proxy type, disabled by default
 */
export type EnabledDNSType = (typeof EnabledDNSType)[keyof typeof EnabledDNSType];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAndUserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The type of managed identity assigned to this resource.
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const MarketplaceSubscriptionStatus = {
    PendingFulfillmentStart: "PendingFulfillmentStart",
    Subscribed: "Subscribed",
    Suspended: "Suspended",
    Unsubscribed: "Unsubscribed",
    NotStarted: "NotStarted",
    FulfillmentRequested: "FulfillmentRequested",
} as const;

/**
 * Marketplace Subscription Status
 */
export type MarketplaceSubscriptionStatus = (typeof MarketplaceSubscriptionStatus)[keyof typeof MarketplaceSubscriptionStatus];

export const NetworkType = {
    VNET: "VNET",
    VWAN: "VWAN",
} as const;

/**
 * vnet or vwan, cannot be updated
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

export const ProtocolType = {
    TCP: "TCP",
    UDP: "UDP",
} as const;

/**
 * Protocol Type
 */
export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

export const ScopeType = {
    LOCAL: "LOCAL",
    GLOBAL: "GLOBAL",
} as const;

/**
 * Rulestack Type
 */
export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType];

export const StateEnum = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
} as const;

/**
 * state of this rule
 */
export type StateEnum = (typeof StateEnum)[keyof typeof StateEnum];

export const UsageType = {
    PAYG: "PAYG",
    COMMITTED: "COMMITTED",
} as const;

/**
 * different usage type like PAYG/COMMITTED
 */
export type UsageType = (typeof UsageType)[keyof typeof UsageType];
