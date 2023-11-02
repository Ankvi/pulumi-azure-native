export const AllowedContentLevel = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

/**
 * Level at which content is filtered.
 */
export type AllowedContentLevel = (typeof AllowedContentLevel)[keyof typeof AllowedContentLevel];

export const DeploymentModelVersionUpgradeOption = {
    OnceNewDefaultVersionAvailable: "OnceNewDefaultVersionAvailable",
    OnceCurrentVersionExpired: "OnceCurrentVersionExpired",
    NoAutoUpgrade: "NoAutoUpgrade",
} as const;

/**
 * Deployment model version upgrade option.
 */
export type DeploymentModelVersionUpgradeOption = (typeof DeploymentModelVersionUpgradeOption)[keyof typeof DeploymentModelVersionUpgradeOption];

export const DeploymentScaleType = {
    Standard: "Standard",
    Manual: "Manual",
} as const;

/**
 * Deployment scale type.
 */
export type DeploymentScaleType = (typeof DeploymentScaleType)[keyof typeof DeploymentScaleType];

export const EncryptionScopeState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The encryptionScope state.
 */
export type EncryptionScopeState = (typeof EncryptionScopeState)[keyof typeof EncryptionScopeState];

export const HostingModel = {
    Web: "Web",
    ConnectedContainer: "ConnectedContainer",
    DisconnectedContainer: "DisconnectedContainer",
    ProvisionedWeb: "ProvisionedWeb",
} as const;

/**
 * Account hosting model.
 */
export type HostingModel = (typeof HostingModel)[keyof typeof HostingModel];

export const KeySource = {
    Microsoft_CognitiveServices: "Microsoft.CognitiveServices",
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

/**
 * Enumerates the possible value of keySource for Encryption
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const NetworkRuleAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
 */
export type NetworkRuleAction = (typeof NetworkRuleAction)[keyof typeof NetworkRuleAction];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public endpoint access is allowed for this account.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RaiPolicyContentSource = {
    Prompt: "Prompt",
    Completion: "Completion",
} as const;

/**
 * Content source to apply the Content Filters.
 */
export type RaiPolicyContentSource = (typeof RaiPolicyContentSource)[keyof typeof RaiPolicyContentSource];

export const RaiPolicyMode = {
    Default: "Default",
    Deferred: "Deferred",
    Blocking: "Blocking",
} as const;

/**
 * Content Filters mode.
 */
export type RaiPolicyMode = (typeof RaiPolicyMode)[keyof typeof RaiPolicyMode];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RoutingMethods = {
    Priority: "Priority",
    Weighted: "Weighted",
    Performance: "Performance",
} as const;

/**
 * Multiregion routing methods.
 */
export type RoutingMethods = (typeof RoutingMethods)[keyof typeof RoutingMethods];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    Enterprise: "Enterprise",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
