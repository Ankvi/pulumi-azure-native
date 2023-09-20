export const AccessRights = {
    Manage: "Manage",
    Send: "Send",
    Listen: "Listen",
} as const;

export type AccessRights = (typeof AccessRights)[keyof typeof AccessRights];

export const EndPointProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

export type EndPointProvisioningState = (typeof EndPointProvisioningState)[keyof typeof EndPointProvisioningState];

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

export const Relaytype = {
    NetTcp: "NetTcp",
    Http: "Http",
} as const;

export type Relaytype = (typeof Relaytype)[keyof typeof Relaytype];

export const SkuName = {
    Standard: "Standard",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Standard: "Standard",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];