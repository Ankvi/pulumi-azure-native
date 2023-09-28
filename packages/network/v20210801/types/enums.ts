export const AzureFirewallThreatIntelMode = {
    Alert: "Alert",
    Deny: "Deny",
    Off: "Off",
} as const;

/**
 * The operation mode for Threat Intelligence.
 */
export type AzureFirewallThreatIntelMode = (typeof AzureFirewallThreatIntelMode)[keyof typeof AzureFirewallThreatIntelMode];

export const FirewallPolicyIDPSQuerySortOrder = {
    Ascending: "Ascending",
    Descending: "Descending",
} as const;

/**
 * Describes if results should be in ascending/descending order
 */
export type FirewallPolicyIDPSQuerySortOrder = (typeof FirewallPolicyIDPSQuerySortOrder)[keyof typeof FirewallPolicyIDPSQuerySortOrder];

export const FirewallPolicyIntrusionDetectionProtocol = {
    TCP: "TCP",
    UDP: "UDP",
    ICMP: "ICMP",
    ANY: "ANY",
} as const;

/**
 * The rule bypass protocol.
 */
export type FirewallPolicyIntrusionDetectionProtocol = (typeof FirewallPolicyIntrusionDetectionProtocol)[keyof typeof FirewallPolicyIntrusionDetectionProtocol];

export const FirewallPolicyIntrusionDetectionStateType = {
    Off: "Off",
    Alert: "Alert",
    Deny: "Deny",
} as const;

/**
 * Intrusion detection general state.
 */
export type FirewallPolicyIntrusionDetectionStateType = (typeof FirewallPolicyIntrusionDetectionStateType)[keyof typeof FirewallPolicyIntrusionDetectionStateType];

export const FirewallPolicySkuTier = {
    Standard: "Standard",
    Premium: "Premium",
    Basic: "Basic",
} as const;

/**
 * Tier of Firewall Policy.
 */
export type FirewallPolicySkuTier = (typeof FirewallPolicySkuTier)[keyof typeof FirewallPolicySkuTier];

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
