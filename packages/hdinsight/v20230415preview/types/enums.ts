export const DaysOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek];

export const DirectoryType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

export type DirectoryType = (typeof DirectoryType)[keyof typeof DirectoryType];

export const JsonWebKeyEncryptionAlgorithm = {
    RSA_OAEP: "RSA-OAEP",
    RSA_OAEP_256: "RSA-OAEP-256",
    RSA1_5: "RSA1_5",
} as const;

export type JsonWebKeyEncryptionAlgorithm = (typeof JsonWebKeyEncryptionAlgorithm)[keyof typeof JsonWebKeyEncryptionAlgorithm];

export const OSType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OSType = (typeof OSType)[keyof typeof OSType];

export const PrivateIPAllocationMethod = {
    Dynamic: "dynamic",
    Static: "static",
} as const;

export type PrivateIPAllocationMethod = (typeof PrivateIPAllocationMethod)[keyof typeof PrivateIPAllocationMethod];

export const PrivateLink = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type PrivateLink = (typeof PrivateLink)[keyof typeof PrivateLink];

export const PrivateLinkServiceConnectionStatus = {
    Approved: "Approved",
    Rejected: "Rejected",
    Pending: "Pending",
    Removed: "Removed",
} as const;

export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ResourceProviderConnection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

export type ResourceProviderConnection = (typeof ResourceProviderConnection)[keyof typeof ResourceProviderConnection];

export const Tier = {
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type Tier = (typeof Tier)[keyof typeof Tier];