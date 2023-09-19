export const Distro = {
    AKSEdge: "AKSEdge",
} as const;

export type Distro = (typeof Distro)[keyof typeof Distro];

export const Provider = {
    VMWare: "VMWare",
    HCI: "HCI",
    SCVMM: "SCVMM",
} as const;

export type Provider = (typeof Provider)[keyof typeof Provider];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
