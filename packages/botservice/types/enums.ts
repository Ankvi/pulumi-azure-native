export const Kind = {
    Sdk: "sdk",
    Designer: "designer",
    Bot: "bot",
    Function: "function",
    Azurebot: "azurebot",
} as const;

/**
 * Required. Gets or sets the Kind of the resource.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const MsaAppType = {
    UserAssignedMSI: "UserAssignedMSI",
    SingleTenant: "SingleTenant",
    MultiTenant: "MultiTenant",
} as const;

/**
 * Microsoft App Type for the bot
 */
export type MsaAppType = (typeof MsaAppType)[keyof typeof MsaAppType];

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
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * Whether the bot is in an isolated network
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SkuName = {
    F0: "F0",
    S1: "S1",
} as const;

/**
 * The sku name
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
