export const AppSku = {
    ST0: "ST0",
    ST1: "ST1",
    ST2: "ST2",
} as const;

/**
 * The name of the SKU.
 */
export type AppSku = (typeof AppSku)[keyof typeof AppSku];

export const NetworkAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The default network action to apply.
 */
export type NetworkAction = (typeof NetworkAction)[keyof typeof NetworkAction];

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
 * Whether requests from the public network are allowed.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SystemAssignedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * Type of managed service identity (either system assigned, or none).
 */
export type SystemAssignedServiceIdentityType = (typeof SystemAssignedServiceIdentityType)[keyof typeof SystemAssignedServiceIdentityType];
