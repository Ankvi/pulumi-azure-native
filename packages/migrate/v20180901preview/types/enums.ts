export const ProvisioningState = {
    Accepted: "Accepted",
    Creating: "Creating",
    Deleting: "Deleting",
    Failed: "Failed",
    Moving: "Moving",
    Succeeded: "Succeeded",
} as const;

/**
 * Provisioning state of the migrate project.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];
