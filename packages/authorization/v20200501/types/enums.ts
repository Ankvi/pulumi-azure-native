export const LockLevel = {
    NotSpecified: "NotSpecified",
    CanNotDelete: "CanNotDelete",
    ReadOnly: "ReadOnly",
} as const;

/**
 * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
 */
export type LockLevel = (typeof LockLevel)[keyof typeof LockLevel];

export const PublicNetworkAccessOptions = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessOptions = (typeof PublicNetworkAccessOptions)[keyof typeof PublicNetworkAccessOptions];
