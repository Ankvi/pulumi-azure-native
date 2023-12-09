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

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the Azure Bare Metal Storage Instance. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Azure Bare Metal Storage Instance.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
