export const Distro = {
    AKSEdge: "AKSEdge",
} as const;

/**
 * Represents a supported Fabric/Infra. (AKSEdge etc...).
 */
export type Distro = (typeof Distro)[keyof typeof Distro];

export const Provider = {
    VMWare: "VMWare",
    HCI: "HCI",
    SCVMM: "SCVMM",
} as const;

/**
 * Information about the connected appliance.
 */
export type Provider = (typeof Provider)[keyof typeof Provider];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
