export const LockLevel = {
    NotSpecified: "NotSpecified",
    CanNotDelete: "CanNotDelete",
    ReadOnly: "ReadOnly",
} as const;

export type LockLevel = (typeof LockLevel)[keyof typeof LockLevel];

export const PublicNetworkAccessOptions = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessOptions = (typeof PublicNetworkAccessOptions)[keyof typeof PublicNetworkAccessOptions];
