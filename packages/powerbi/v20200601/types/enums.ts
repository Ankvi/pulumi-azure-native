export const PersistedConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Status of the connection.
 */
export type PersistedConnectionStatus = (typeof PersistedConnectionStatus)[keyof typeof PersistedConnectionStatus];

export const ResourceProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

/**
 * Provisioning state of the Private Endpoint Connection.
 */
export type ResourceProvisioningState = (typeof ResourceProvisioningState)[keyof typeof ResourceProvisioningState];
