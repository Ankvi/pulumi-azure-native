export const DeploymentModelVersionUpgradeOption = {
    OnceNewDefaultVersionAvailable: "OnceNewDefaultVersionAvailable",
    OnceCurrentVersionExpired: "OnceCurrentVersionExpired",
    NoAutoUpgrade: "NoAutoUpgrade",
} as const;

export type DeploymentModelVersionUpgradeOption = (typeof DeploymentModelVersionUpgradeOption)[keyof typeof DeploymentModelVersionUpgradeOption];

export const DeploymentScaleType = {
    Standard: "Standard",
    Manual: "Manual",
} as const;

export type DeploymentScaleType = (typeof DeploymentScaleType)[keyof typeof DeploymentScaleType];

export const HostingModel = {
    Web: "Web",
    ConnectedContainer: "ConnectedContainer",
    DisconnectedContainer: "DisconnectedContainer",
    ProvisionedWeb: "ProvisionedWeb",
} as const;

export type HostingModel = (typeof HostingModel)[keyof typeof HostingModel];

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
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RoutingMethods = {
    Priority: "Priority",
    Weighted: "Weighted",
    Performance: "Performance",
} as const;

export type RoutingMethods = (typeof RoutingMethods)[keyof typeof RoutingMethods];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    Enterprise: "Enterprise",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];