export const EnterprisePolicyKind = {
    Lockbox: "Lockbox",
    PrivateEndpoint: "PrivateEndpoint",
    Encryption: "Encryption",
    NetworkInjection: "NetworkInjection",
    Identity: "Identity",
} as const;

export type EnterprisePolicyKind = (typeof EnterprisePolicyKind)[keyof typeof EnterprisePolicyKind];

export const HealthStatus = {
    Undetermined: "Undetermined",
    Healthy: "Healthy",
    Warning: "Warning",
    Unhealthy: "Unhealthy",
} as const;

export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const State = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    NotConfigured: "NotConfigured",
} as const;

export type State = (typeof State)[keyof typeof State];