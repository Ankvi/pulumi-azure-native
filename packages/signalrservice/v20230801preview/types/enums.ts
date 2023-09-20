export const ACLAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

export type ACLAction = (typeof ACLAction)[keyof typeof ACLAction];

export const FeatureFlags = {
    ServiceMode: "ServiceMode",
    EnableConnectivityLogs: "EnableConnectivityLogs",
    EnableMessagingLogs: "EnableMessagingLogs",
    EnableLiveTrace: "EnableLiveTrace",
} as const;

export type FeatureFlags = (typeof FeatureFlags)[keyof typeof FeatureFlags];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const ServiceKind = {
    SignalR: "SignalR",
    RawWebSockets: "RawWebSockets",
} as const;

export type ServiceKind = (typeof ServiceKind)[keyof typeof ServiceKind];

export const SignalRRequestType = {
    ClientConnection: "ClientConnection",
    ServerConnection: "ServerConnection",
    RESTAPI: "RESTAPI",
    Trace: "Trace",
} as const;

export type SignalRRequestType = (typeof SignalRRequestType)[keyof typeof SignalRRequestType];

export const SignalRSkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SignalRSkuTier = (typeof SignalRSkuTier)[keyof typeof SignalRSkuTier];

export const UpstreamAuthType = {
    None: "None",
    ManagedIdentity: "ManagedIdentity",
} as const;

export type UpstreamAuthType = (typeof UpstreamAuthType)[keyof typeof UpstreamAuthType];