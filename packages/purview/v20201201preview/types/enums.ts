export const PublicNetworkAccess = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const Type = {
    SystemAssigned: "SystemAssigned",
} as const;

export type Type = (typeof Type)[keyof typeof Type];
