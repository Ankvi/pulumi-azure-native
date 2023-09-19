export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const KeySource = {
    Microsoft_CognitiveServices: "Microsoft.CognitiveServices",
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const NetworkRuleAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type NetworkRuleAction = (typeof NetworkRuleAction)[keyof typeof NetworkRuleAction];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];
