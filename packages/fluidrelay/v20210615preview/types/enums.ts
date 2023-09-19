export const ProvisioningState = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
} as const;

export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
