export const EnterprisePolicyKind = {
    Lockbox: "Lockbox",
    PrivateEndpoint: "PrivateEndpoint",
    Encryption: "Encryption",
    NetworkInjection: "NetworkInjection",
    Identity: "Identity",
} as const;

/**
 * The kind (type) of Enterprise Policy.
 */
export type EnterprisePolicyKind = (typeof EnterprisePolicyKind)[keyof typeof EnterprisePolicyKind];

export const HealthStatus = {
    Undetermined: "Undetermined",
    Healthy: "Healthy",
    Warning: "Warning",
    Unhealthy: "Unhealthy",
} as const;

/**
 * The health status of the resource.
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the EnterprisePolicy. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const State = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    NotConfigured: "NotConfigured",
} as const;

/**
 * lockbox configuration
 */
export type State = (typeof State)[keyof typeof State];
