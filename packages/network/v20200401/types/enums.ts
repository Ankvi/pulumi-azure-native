export const AzureFirewallApplicationRuleProtocolType = {
    Http: "Http",
    Https: "Https",
    Mssql: "Mssql",
} as const;

export type AzureFirewallApplicationRuleProtocolType = (typeof AzureFirewallApplicationRuleProtocolType)[keyof typeof AzureFirewallApplicationRuleProtocolType];

export const AzureFirewallNatRCActionType = {
    Snat: "Snat",
    Dnat: "Dnat",
} as const;

export type AzureFirewallNatRCActionType = (typeof AzureFirewallNatRCActionType)[keyof typeof AzureFirewallNatRCActionType];

export const AzureFirewallNetworkRuleProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

export type AzureFirewallNetworkRuleProtocol = (typeof AzureFirewallNetworkRuleProtocol)[keyof typeof AzureFirewallNetworkRuleProtocol];

export const AzureFirewallRCActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type AzureFirewallRCActionType = (typeof AzureFirewallRCActionType)[keyof typeof AzureFirewallRCActionType];

export const AzureFirewallSkuName = {
    AZFW_VNet: "AZFW_VNet",
    AZFW_Hub: "AZFW_Hub",
} as const;

export type AzureFirewallSkuName = (typeof AzureFirewallSkuName)[keyof typeof AzureFirewallSkuName];

export const AzureFirewallSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type AzureFirewallSkuTier = (typeof AzureFirewallSkuTier)[keyof typeof AzureFirewallSkuTier];

export const AzureFirewallThreatIntelMode = {
    Alert: "Alert",
    Deny: "Deny",
    Off: "Off",
} as const;

export type AzureFirewallThreatIntelMode = (typeof AzureFirewallThreatIntelMode)[keyof typeof AzureFirewallThreatIntelMode];

export const FirewallPolicyFilterRuleActionType = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type FirewallPolicyFilterRuleActionType = (typeof FirewallPolicyFilterRuleActionType)[keyof typeof FirewallPolicyFilterRuleActionType];

export const FirewallPolicyNatRuleActionType = {
    DNAT: "DNAT",
} as const;

export type FirewallPolicyNatRuleActionType = (typeof FirewallPolicyNatRuleActionType)[keyof typeof FirewallPolicyNatRuleActionType];

export const FirewallPolicyRuleConditionApplicationProtocolType = {
    Http: "Http",
    Https: "Https",
} as const;

export type FirewallPolicyRuleConditionApplicationProtocolType = (typeof FirewallPolicyRuleConditionApplicationProtocolType)[keyof typeof FirewallPolicyRuleConditionApplicationProtocolType];

export const FirewallPolicyRuleConditionNetworkProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    Any: "Any",
    ICMP: "ICMP",
} as const;

export type FirewallPolicyRuleConditionNetworkProtocol = (typeof FirewallPolicyRuleConditionNetworkProtocol)[keyof typeof FirewallPolicyRuleConditionNetworkProtocol];

export const FirewallPolicyRuleConditionType = {
    ApplicationRuleCondition: "ApplicationRuleCondition",
    NetworkRuleCondition: "NetworkRuleCondition",
    NatRuleCondition: "NatRuleCondition",
} as const;

export type FirewallPolicyRuleConditionType = (typeof FirewallPolicyRuleConditionType)[keyof typeof FirewallPolicyRuleConditionType];

export const FirewallPolicyRuleType = {
    FirewallPolicyNatRule: "FirewallPolicyNatRule",
    FirewallPolicyFilterRule: "FirewallPolicyFilterRule",
} as const;

export type FirewallPolicyRuleType = (typeof FirewallPolicyRuleType)[keyof typeof FirewallPolicyRuleType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
