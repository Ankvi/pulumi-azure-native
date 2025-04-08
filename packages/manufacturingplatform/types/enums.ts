export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const RedundancyState = {
    /**
     * Resource is zone redundant
     */
    Zonal: "Zonal",
    /**
     * Resource is not redundant
     */
    None: "None",
} as const;

/**
 * Zone redundancy state for resources
 */
export type RedundancyState = (typeof RedundancyState)[keyof typeof RedundancyState];

export const ResourceState = {
    /**
     * Resource is in active state
     */
    Active: "Active",
    /**
     * Resource is in inactive state
     */
    Inactive: "Inactive",
} as const;

/**
 * State of the resource
 */
export type ResourceState = (typeof ResourceState)[keyof typeof ResourceState];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
