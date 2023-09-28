export const CacheIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the cache
 */
export type CacheIdentityType = (typeof CacheIdentityType)[keyof typeof CacheIdentityType];

export const NfsAccessRuleAccess = {
    No: "no",
    Ro: "ro",
    Rw: "rw",
} as const;

/**
 * Access allowed by this rule.
 */
export type NfsAccessRuleAccess = (typeof NfsAccessRuleAccess)[keyof typeof NfsAccessRuleAccess];

export const NfsAccessRuleScope = {
    Default: "default",
    Network: "network",
    Host: "host",
} as const;

/**
 * Scope for this rule. The scope and filter determine which clients match the rule.
 */
export type NfsAccessRuleScope = (typeof NfsAccessRuleScope)[keyof typeof NfsAccessRuleScope];

export const ProvisioningStateType = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Cancelled: "Cancelled",
    Creating: "Creating",
    Deleting: "Deleting",
    Updating: "Updating",
} as const;

/**
 * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
 */
export type ProvisioningStateType = (typeof ProvisioningStateType)[keyof typeof ProvisioningStateType];

export const StorageTargetType = {
    Nfs3: "nfs3",
    Clfs: "clfs",
    Unknown: "unknown",
    BlobNfs: "blobNfs",
} as const;

/**
 * Type of the Storage Target.
 */
export type StorageTargetType = (typeof StorageTargetType)[keyof typeof StorageTargetType];

export const UsernameSource = {
    AD: "AD",
    LDAP: "LDAP",
    File: "File",
    None: "None",
} as const;

/**
 * This setting determines how the cache gets username and group names for clients.
 */
export type UsernameSource = (typeof UsernameSource)[keyof typeof UsernameSource];
