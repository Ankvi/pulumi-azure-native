export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SkuName = {
    F0: "F0",
    S1: "S1",
    C0: "C0",
    PES: "PES",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];
