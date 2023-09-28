export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

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
