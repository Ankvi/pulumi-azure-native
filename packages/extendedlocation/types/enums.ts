export const HostType = {
    Kubernetes: "Kubernetes",
} as const;

export type HostType = (typeof HostType)[keyof typeof HostType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
