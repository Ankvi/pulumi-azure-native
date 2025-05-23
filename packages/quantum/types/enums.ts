export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ProviderStatus = {
    /**
     * The provider is successfully provisioned.
     */
    Succeeded: "Succeeded",
    /**
     * The provider is starting provisioning.
     */
    Launching: "Launching",
    /**
     * The provider is updating.
     */
    Updating: "Updating",
    /**
     * The provider is deleting.
     */
    Deleting: "Deleting",
    /**
     * The provider is deleted.
     */
    Deleted: "Deleted",
    /**
     * The provider is failed.
     */
    Failed: "Failed",
} as const;

/**
 * Provisioning status field
 */
export type ProviderStatus = (typeof ProviderStatus)[keyof typeof ProviderStatus];
