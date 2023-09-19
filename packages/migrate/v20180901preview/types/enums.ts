export const ProvisioningState = {
    Accepted: "Accepted",
    Creating: "Creating",
    Deleting: "Deleting",
    Failed: "Failed",
    Moving: "Moving",
    Succeeded: "Succeeded",
} as const;

export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];
