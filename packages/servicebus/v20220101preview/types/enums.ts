export const AccessRights = {
    Manage: "Manage",
    Send: "Send",
    Listen: "Listen",
} as const;

export type AccessRights = (typeof AccessRights)[keyof typeof AccessRights];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const EndPointProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

export type EndPointProvisioningState = (typeof EndPointProvisioningState)[keyof typeof EndPointProvisioningState];

export const EntityStatus = {
    Active: "Active",
    Disabled: "Disabled",
    Restoring: "Restoring",
    SendDisabled: "SendDisabled",
    ReceiveDisabled: "ReceiveDisabled",
    Creating: "Creating",
    Deleting: "Deleting",
    Renaming: "Renaming",
    Unknown: "Unknown",
} as const;

export type EntityStatus = (typeof EntityStatus)[keyof typeof EntityStatus];

export const FilterType = {
    SqlFilter: "SqlFilter",
    CorrelationFilter: "CorrelationFilter",
} as const;

export type FilterType = (typeof FilterType)[keyof typeof FilterType];

export const KeySource = {
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NetworkRuleIPAction = {
    Allow: "Allow",
} as const;

export type NetworkRuleIPAction = (typeof NetworkRuleIPAction)[keyof typeof NetworkRuleIPAction];

export const PrivateLinkConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateLinkConnectionStatus = (typeof PrivateLinkConnectionStatus)[keyof typeof PrivateLinkConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const PublicNetworkAccessFlag = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessFlag = (typeof PublicNetworkAccessFlag)[keyof typeof PublicNetworkAccessFlag];

export const SkuName = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const TlsVersion = {
    TlsVersion_1_0: "1.0",
    TlsVersion_1_1: "1.1",
    TlsVersion_1_2: "1.2",
} as const;

export type TlsVersion = (typeof TlsVersion)[keyof typeof TlsVersion];
