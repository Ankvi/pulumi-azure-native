export const PublicNetworkAccess = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Gets or sets the public network access.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const Type = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * Identity Type
 */
export type Type = (typeof Type)[keyof typeof Type];
