export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ProvisioningState = {
    /**
     * Represents a succeeded operation.
     */
    Succeeded: "Succeeded",
    /**
     * Represents a failed operation.
     */
    Failed: "Failed",
    /**
     * Represents a canceled operation.
     */
    Canceled: "Canceled",
    /**
     * Represents a pending operation.
     */
    Provisioning: "Provisioning",
    /**
     * Represents a pending operation.
     */
    Updating: "Updating",
    /**
     * Represents an operation under deletion.
     */
    Deleting: "Deleting",
    /**
     * Represents an accepted operation.
     */
    Accepted: "Accepted",
} as const;

/**
 * The status of the current operation.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];
