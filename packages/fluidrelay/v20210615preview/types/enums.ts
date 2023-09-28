export const ProvisioningState = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
} as const;

/**
 * Provision states for FluidRelay RP
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
