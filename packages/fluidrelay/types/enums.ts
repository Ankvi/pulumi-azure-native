export const CmkIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Values can be SystemAssigned or UserAssigned
 */
export type CmkIdentityType = (typeof CmkIdentityType)[keyof typeof CmkIdentityType];

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
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const StorageSKU = {
    Standard: "standard",
    Basic: "basic",
} as const;

/**
 * Sku of the storage associated with the resource
 */
export type StorageSKU = (typeof StorageSKU)[keyof typeof StorageSKU];
