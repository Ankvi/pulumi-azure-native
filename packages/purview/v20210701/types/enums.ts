export const PublicNetworkAccess = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Gets or sets the public network access.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const Status = {
    Unknown: "Unknown",
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The status.
 */
export type Status = (typeof Status)[keyof typeof Status];

export const Type = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Identity Type
 */
export type Type = (typeof Type)[keyof typeof Type];
