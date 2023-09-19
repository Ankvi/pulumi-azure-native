export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];
