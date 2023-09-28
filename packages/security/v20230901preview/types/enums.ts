export const AutoDiscovery = {
    Disabled: "Disabled",
    Enabled: "Enabled",
    NotApplicable: "NotApplicable",
} as const;

/**
 * AutoDiscovery states.
 */
export type AutoDiscovery = (typeof AutoDiscovery)[keyof typeof AutoDiscovery];

export const DevOpsProvisioningState = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Pending: "Pending",
    PendingDeletion: "PendingDeletion",
    DeletionSuccess: "DeletionSuccess",
    DeletionFailure: "DeletionFailure",
} as const;

/**
 * The provisioning state of the resource.
 * 
 * Pending - Provisioning pending.
 * Failed - Provisioning failed.
 * Succeeded - Successful provisioning.
 * Canceled - Provisioning canceled.
 * PendingDeletion - Deletion pending.
 * DeletionSuccess - Deletion successful.
 * DeletionFailure - Deletion failure.
 */
export type DevOpsProvisioningState = (typeof DevOpsProvisioningState)[keyof typeof DevOpsProvisioningState];
