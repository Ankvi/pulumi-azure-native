export const AzureFirewallThreatIntelMode = {
    Alert: "Alert",
    Deny: "Deny",
    Off: "Off",
} as const;

export type AzureFirewallThreatIntelMode = (typeof AzureFirewallThreatIntelMode)[keyof typeof AzureFirewallThreatIntelMode];

export const FirewallPolicyIDPSQuerySortOrder = {
    Ascending: "Ascending",
    Descending: "Descending",
} as const;

export type FirewallPolicyIDPSQuerySortOrder = (typeof FirewallPolicyIDPSQuerySortOrder)[keyof typeof FirewallPolicyIDPSQuerySortOrder];

export const FirewallPolicyIntrusionDetectionProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    ICMP: "ICMP",
    ANY: "ANY",
} as const;

export type FirewallPolicyIntrusionDetectionProtocol = (typeof FirewallPolicyIntrusionDetectionProtocol)[keyof typeof FirewallPolicyIntrusionDetectionProtocol];

export const FirewallPolicyIntrusionDetectionStateType = {
    Off: "Off",
    Alert: "Alert",
    Deny: "Deny",
} as const;

export type FirewallPolicyIntrusionDetectionStateType = (typeof FirewallPolicyIntrusionDetectionStateType)[keyof typeof FirewallPolicyIntrusionDetectionStateType];

export const FirewallPolicySkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
} as const;

export type FirewallPolicySkuTier = (typeof FirewallPolicySkuTier)[keyof typeof FirewallPolicySkuTier];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];