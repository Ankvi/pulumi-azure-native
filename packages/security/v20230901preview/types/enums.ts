export const AutoDiscovery = {
    Disabled: "Disabled",
    Enabled: "Enabled",
    NotApplicable: "NotApplicable",
} as const;

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

export type DevOpsProvisioningState = (typeof DevOpsProvisioningState)[keyof typeof DevOpsProvisioningState];
