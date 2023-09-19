export const AzureSkuName = {
    S1: "S1",
} as const;

export type AzureSkuName = (typeof AzureSkuName)[keyof typeof AzureSkuName];

export const AzureSkuTier = {
    Standard: "Standard",
} as const;

export type AzureSkuTier = (typeof AzureSkuTier)[keyof typeof AzureSkuTier];

export const PersistedConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PersistedConnectionStatus = (typeof PersistedConnectionStatus)[keyof typeof PersistedConnectionStatus];

export const ResourceProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

export type ResourceProvisioningState = (typeof ResourceProvisioningState)[keyof typeof ResourceProvisioningState];
