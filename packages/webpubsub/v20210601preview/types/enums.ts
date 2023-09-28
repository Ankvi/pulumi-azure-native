export const ACLAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Default action when no other rule matches
 */
export type ACLAction = (typeof ACLAction)[keyof typeof ACLAction];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Represent the identity type: systemAssigned, userAssigned, None
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const UpstreamAuthType = {
    None: "None",
    ManagedIdentity: "ManagedIdentity",
} as const;

/**
 * Gets or sets the type of auth. None or ManagedIdentity is supported now.
 */
export type UpstreamAuthType = (typeof UpstreamAuthType)[keyof typeof UpstreamAuthType];

export const WebPubSubRequestType = {
    ClientConnection: "ClientConnection",
    ServerConnection: "ServerConnection",
    RESTAPI: "RESTAPI",
    Trace: "Trace",
} as const;

/**
 * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
 */
export type WebPubSubRequestType = (typeof WebPubSubRequestType)[keyof typeof WebPubSubRequestType];

export const WebPubSubSkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Optional tier of this particular SKU. 'Standard' or 'Free'. 
 * 
 * `Basic` is deprecated, use `Standard` instead.
 */
export type WebPubSubSkuTier = (typeof WebPubSubSkuTier)[keyof typeof WebPubSubSkuTier];
