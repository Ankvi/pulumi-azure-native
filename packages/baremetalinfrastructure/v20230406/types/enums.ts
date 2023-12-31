export const ProvisioningState = {
    Accepted: "Accepted",
    Creating: "Creating",
    Updating: "Updating",
    Failed: "Failed",
    Succeeded: "Succeeded",
    Deleting: "Deleting",
    Canceled: "Canceled",
    Migrating: "Migrating",
} as const;

/**
 * State of provisioning of the AzureBareMetalStorageInstance
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];
