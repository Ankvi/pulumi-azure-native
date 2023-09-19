export const InfrastructureEncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type InfrastructureEncryptionState = (typeof InfrastructureEncryptionState)[keyof typeof InfrastructureEncryptionState];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SkuName = {
    Standard: "Standard",
    RS0: "RS0",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];
