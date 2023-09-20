export const Kind = {
    Sdk: "sdk",
    Designer: "designer",
    Bot: "bot",
    Function: "function",
    Azurebot: "azurebot",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const MsaAppType = {
    UserAssignedMSI: "UserAssignedMSI",
    SingleTenant: "SingleTenant",
    MultiTenant: "MultiTenant",
} as const;

export type MsaAppType = (typeof MsaAppType)[keyof typeof MsaAppType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SkuName = {
    F0: "F0",
    S1: "S1",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];