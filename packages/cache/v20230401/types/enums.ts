export const DayOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
    Everyday: "Everyday",
    Weekend: "Weekend",
} as const;

/**
 * Day of the week when a cache can be patched.
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

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
 * Whether or not public endpoint access is allowed for this cache.  Value is optional, but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'. Note: This setting is important for caches with private endpoints. It has *no effect* on caches that are joined to, or injected into, a virtual network subnet.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ReplicationRole = {
    Primary: "Primary",
    Secondary: "Secondary",
} as const;

/**
 * Role of the linked server.
 */
export type ReplicationRole = (typeof ReplicationRole)[keyof typeof ReplicationRole];

export const SkuFamily = {
    C: "C",
    P: "P",
} as const;

/**
 * The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
 */
export type SkuFamily = (typeof SkuFamily)[keyof typeof SkuFamily];

export const SkuName = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TlsVersion = {
    TlsVersion_1_0: "1.0",
    TlsVersion_1_1: "1.1",
    TlsVersion_1_2: "1.2",
} as const;

/**
 * Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
 */
export type TlsVersion = (typeof TlsVersion)[keyof typeof TlsVersion];
