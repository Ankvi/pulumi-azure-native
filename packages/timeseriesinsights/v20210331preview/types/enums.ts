export const EnvironmentKind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

export type EnvironmentKind = (typeof EnvironmentKind)[keyof typeof EnvironmentKind];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PropertyType = {
    String: "String",
} as const;

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

export const PublicNetworkAccess = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SkuName = {
    S1: "S1",
    S2: "S2",
    P1: "P1",
    L1: "L1",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];
