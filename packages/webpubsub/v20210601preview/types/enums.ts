export const ACLAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type ACLAction = (typeof ACLAction)[keyof typeof ACLAction];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const UpstreamAuthType = {
    None: "None",
    ManagedIdentity: "ManagedIdentity",
} as const;

export type UpstreamAuthType = (typeof UpstreamAuthType)[keyof typeof UpstreamAuthType];

export const WebPubSubRequestType = {
    ClientConnection: "ClientConnection",
    ServerConnection: "ServerConnection",
    RESTAPI: "RESTAPI",
    Trace: "Trace",
} as const;

export type WebPubSubRequestType = (typeof WebPubSubRequestType)[keyof typeof WebPubSubRequestType];

export const WebPubSubSkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type WebPubSubSkuTier = (typeof WebPubSubSkuTier)[keyof typeof WebPubSubSkuTier];