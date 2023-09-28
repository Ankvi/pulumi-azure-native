export const AuthenticationMode = {
    /**
     * The authentication mode using shared keys.
     */
    SharedKey: "SharedKey",
    /**
     * The authentication mode using Azure Active Directory.
     */
    AAD: "AAD",
    /**
     * The authentication mode using task authentication tokens.
     */
    TaskAuthenticationToken: "TaskAuthenticationToken",
} as const;

/**
 * The authentication mode for the Batch account.
 */
export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

export const AutoStorageAuthenticationMode = {
    /**
     * The Batch service will authenticate requests to auto-storage using storage account keys.
     */
    StorageKeys: "StorageKeys",
    /**
     * The Batch service will authenticate requests to auto-storage using the managed identity assigned to the Batch account.
     */
    BatchAccountManagedIdentity: "BatchAccountManagedIdentity",
} as const;

/**
 * The authentication mode which the Batch service will use to manage the auto-storage account.
 */
export type AutoStorageAuthenticationMode = (typeof AutoStorageAuthenticationMode)[keyof typeof AutoStorageAuthenticationMode];

export const KeySource = {
    /**
     * Batch creates and manages the encryption keys used to protect the account data.
     */
    Microsoft_Batch: "Microsoft.Batch",
    /**
     * The encryption keys used to protect the account data are stored in an external key vault. If this is set then the Batch Account identity must be set to `SystemAssigned` and a valid Key Identifier must also be supplied under the keyVaultProperties.
     */
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

/**
 * Type of the key source.
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const PoolAllocationMode = {
    /**
     * Pools will be allocated in subscriptions owned by the Batch service.
     */
    BatchService: "BatchService",
    /**
     * Pools will be allocated in a subscription owned by the user.
     */
    UserSubscription: "UserSubscription",
} as const;

/**
 * The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
 */
export type PoolAllocationMode = (typeof PoolAllocationMode)[keyof typeof PoolAllocationMode];

export const PublicNetworkAccessType = {
    /**
     * Enables connectivity to Azure Batch through public DNS.
     */
    Enabled: "Enabled",
    /**
     * Disables public connectivity and enables private connectivity to Azure Batch Service through private endpoint resource.
     */
    Disabled: "Disabled",
} as const;

/**
 * If not specified, the default value is 'enabled'.
 */
export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const ResourceIdentityType = {
    /**
     * Batch account has a system assigned identity with it.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Batch account has user assigned identities with it.
     */
    UserAssigned: "UserAssigned",
    /**
     * Batch account has no identity associated with it. Setting `None` in update account will remove existing identities.
     */
    None: "None",
} as const;

/**
 * The type of identity used for the Batch account.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
