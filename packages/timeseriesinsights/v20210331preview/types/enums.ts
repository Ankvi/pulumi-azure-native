export const EnvironmentKind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

/**
 * The kind of the environment.
 */
export type EnvironmentKind = (typeof EnvironmentKind)[keyof typeof EnvironmentKind];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PropertyType = {
    String: "String",
} as const;

/**
 * The type of the property.
 */
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

export const PublicNetworkAccess = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SkuName = {
    S1: "S1",
    S2: "S2",
    P1: "P1",
    L1: "L1",
} as const;

/**
 * The name of this SKU.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
