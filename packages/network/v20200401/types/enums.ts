export const AzureFirewallApplicationRuleProtocolType = {
    Http: "Http",
    Https: "Https",
    Mssql: "Mssql",
} as const;

/**
 * Protocol type.
 */
export type AzureFirewallApplicationRuleProtocolType = (typeof AzureFirewallApplicationRuleProtocolType)[keyof typeof AzureFirewallApplicationRuleProtocolType];

export const AzureFirewallNatRCActionType = {
    Snat: "Snat",
    Dnat: "Dnat",
} as const;

/**
 * The type of action.
 */
export type AzureFirewallNatRCActionType = (typeof AzureFirewallNatRCActionType)[keyof typeof AzureFirewallNatRCActionType];

export const AzureFirewallNetworkRuleProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

/**
 * The protocol of a Network Rule resource.
 */
export type AzureFirewallNetworkRuleProtocol = (typeof AzureFirewallNetworkRuleProtocol)[keyof typeof AzureFirewallNetworkRuleProtocol];

export const AzureFirewallRCActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The type of action.
 */
export type AzureFirewallRCActionType = (typeof AzureFirewallRCActionType)[keyof typeof AzureFirewallRCActionType];

export const AzureFirewallSkuName = {
    AZFW_VNet: "AZFW_VNet",
    AZFW_Hub: "AZFW_Hub",
} as const;

/**
 * Name of an Azure Firewall SKU.
 */
export type AzureFirewallSkuName = (typeof AzureFirewallSkuName)[keyof typeof AzureFirewallSkuName];

export const AzureFirewallSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Tier of an Azure Firewall.
 */
export type AzureFirewallSkuTier = (typeof AzureFirewallSkuTier)[keyof typeof AzureFirewallSkuTier];

export const AzureFirewallThreatIntelMode = {
    Alert: "Alert",
    Deny: "Deny",
    Off: "Off",
} as const;

/**
 * The operation mode for Threat Intelligence.
 */
export type AzureFirewallThreatIntelMode = (typeof AzureFirewallThreatIntelMode)[keyof typeof AzureFirewallThreatIntelMode];

export const FirewallPolicyFilterRuleActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The type of action.
 */
export type FirewallPolicyFilterRuleActionType = (typeof FirewallPolicyFilterRuleActionType)[keyof typeof FirewallPolicyFilterRuleActionType];

export const FirewallPolicyNatRuleActionType = {
    DNAT: "DNAT",
} as const;

/**
 * The type of action.
 */
export type FirewallPolicyNatRuleActionType = (typeof FirewallPolicyNatRuleActionType)[keyof typeof FirewallPolicyNatRuleActionType];

export const FirewallPolicyRuleConditionApplicationProtocolType = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Protocol type.
 */
export type FirewallPolicyRuleConditionApplicationProtocolType = (typeof FirewallPolicyRuleConditionApplicationProtocolType)[keyof typeof FirewallPolicyRuleConditionApplicationProtocolType];

export const FirewallPolicyRuleConditionNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

/**
 * The Network protocol of a Rule condition.
 */
export type FirewallPolicyRuleConditionNetworkProtocol = (typeof FirewallPolicyRuleConditionNetworkProtocol)[keyof typeof FirewallPolicyRuleConditionNetworkProtocol];

export const FirewallPolicyRuleConditionType = {
    ApplicationRuleCondition: "ApplicationRuleCondition",
    NetworkRuleCondition: "NetworkRuleCondition",
    NatRuleCondition: "NatRuleCondition",
} as const;

/**
 * Rule Condition Type.
 */
export type FirewallPolicyRuleConditionType = (typeof FirewallPolicyRuleConditionType)[keyof typeof FirewallPolicyRuleConditionType];

export const FirewallPolicyRuleType = {
    FirewallPolicyNatRule: "FirewallPolicyNatRule",
    FirewallPolicyFilterRule: "FirewallPolicyFilterRule",
} as const;

/**
 * The type of the rule.
 */
export type FirewallPolicyRuleType = (typeof FirewallPolicyRuleType)[keyof typeof FirewallPolicyRuleType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
