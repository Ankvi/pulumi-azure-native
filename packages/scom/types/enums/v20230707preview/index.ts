// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


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
