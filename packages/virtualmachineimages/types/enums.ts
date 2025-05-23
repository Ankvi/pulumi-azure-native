export const AutoRunState = {
    /**
     * Autorun is enabled
     */
    AutoRunEnabled: "Enabled",
    /**
     * Autorun is disabled
     */
    AutoRunDisabled: "Disabled",
} as const;

/**
 * Enabling this field will trigger an automatic build on image template creation or update.
 */
export type AutoRunState = (typeof AutoRunState)[keyof typeof AutoRunState];

export const OnBuildError = {
    Cleanup: "cleanup",
    Abort: "abort",
} as const;

/**
 * If there is a validation error and this field is set to 'cleanup', the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a validation error and this field is set to 'abort', the build VM will be preserved.
 */
export type OnBuildError = (typeof OnBuildError)[keyof typeof OnBuildError];

export const ResourceIdentityType = {
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the image template. The type 'None' will remove any identities from the image template.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SharedImageStorageAccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
} as const;

/**
 * Specifies the storage account type to be used to store the image in this region. Omit to use the default (Standard_LRS).
 */
export type SharedImageStorageAccountType = (typeof SharedImageStorageAccountType)[keyof typeof SharedImageStorageAccountType];

export const VMBootOptimizationState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enabling this field will improve VM boot time by optimizing the final customized image output.
 */
export type VMBootOptimizationState = (typeof VMBootOptimizationState)[keyof typeof VMBootOptimizationState];
