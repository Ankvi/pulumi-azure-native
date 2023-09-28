export const HostType = {
    Kubernetes: "Kubernetes",
} as const;

/**
 * Type of host the Custom Locations is referencing (Kubernetes, etc...).
 */
export type HostType = (typeof HostType)[keyof typeof HostType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
