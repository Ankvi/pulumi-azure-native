export const HybridLicenseType = {
    None: "None",
    AzureHybridBenefit: "AzureHybridBenefit",
} as const;

export type HybridLicenseType = (typeof HybridLicenseType)[keyof typeof HybridLicenseType];

export const ManagedIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];
