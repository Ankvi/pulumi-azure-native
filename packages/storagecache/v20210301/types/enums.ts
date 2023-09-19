export const CacheIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type CacheIdentityType = (typeof CacheIdentityType)[keyof typeof CacheIdentityType];

export const NfsAccessRuleAccess = {
    No: "no",
    Ro: "ro",
    Rw: "rw",
} as const;

export type NfsAccessRuleAccess = (typeof NfsAccessRuleAccess)[keyof typeof NfsAccessRuleAccess];

export const NfsAccessRuleScope = {
    Default: "default",
    Network: "network",
    Host: "host",
} as const;

export type NfsAccessRuleScope = (typeof NfsAccessRuleScope)[keyof typeof NfsAccessRuleScope];

export const ProvisioningStateType = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Cancelled: "Cancelled",
    Creating: "Creating",
    Deleting: "Deleting",
    Updating: "Updating",
} as const;

export type ProvisioningStateType = (typeof ProvisioningStateType)[keyof typeof ProvisioningStateType];

export const StorageTargetType = {
    Nfs3: "nfs3",
    Clfs: "clfs",
    Unknown: "unknown",
    BlobNfs: "blobNfs",
} as const;

export type StorageTargetType = (typeof StorageTargetType)[keyof typeof StorageTargetType];

export const UsernameSource = {
    AD: "AD",
    LDAP: "LDAP",
    File: "File",
    None: "None",
} as const;

export type UsernameSource = (typeof UsernameSource)[keyof typeof UsernameSource];
