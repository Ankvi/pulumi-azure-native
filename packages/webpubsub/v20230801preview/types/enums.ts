export const ACLAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Azure Networking ACL Action.
 */
export type ACLAction = (typeof ACLAction)[keyof typeof ACLAction];

export const EventListenerEndpointDiscriminator = {
    EventHub: "EventHub",
} as const;

export type EventListenerEndpointDiscriminator = (typeof EventListenerEndpointDiscriminator)[keyof typeof EventListenerEndpointDiscriminator];

export const EventListenerFilterDiscriminator = {
    EventName: "EventName",
} as const;

export type EventListenerFilterDiscriminator = (typeof EventListenerFilterDiscriminator)[keyof typeof EventListenerFilterDiscriminator];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Represents the identity type: systemAssigned, userAssigned, None
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const ServiceKind = {
    WebPubSub: "WebPubSub",
    SocketIO: "SocketIO",
} as const;

/**
 * The kind of the service
 */
export type ServiceKind = (typeof ServiceKind)[keyof typeof ServiceKind];

export const UpstreamAuthType = {
    None: "None",
    ManagedIdentity: "ManagedIdentity",
} as const;

/**
 * Upstream auth type enum.
 */
export type UpstreamAuthType = (typeof UpstreamAuthType)[keyof typeof UpstreamAuthType];

export const WebPubSubRequestType = {
    ClientConnection: "ClientConnection",
    ServerConnection: "ServerConnection",
    RESTAPI: "RESTAPI",
    Trace: "Trace",
} as const;

/**
 * The incoming request type to the service
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
