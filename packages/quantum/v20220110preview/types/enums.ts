export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const Status = {
    Succeeded: "Succeeded",
    Launching: "Launching",
    Updating: "Updating",
    Deleting: "Deleting",
    Deleted: "Deleted",
    Failed: "Failed",
} as const;

/**
 * Provisioning status field
 */
export type Status = (typeof Status)[keyof typeof Status];
