// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// Export sub-modules:
import * as v20220701 from "./v20220701";

export {
    v20220701,
};

export const ResourceIdentityType = {
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SharedImageStorageAccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
} as const;

export type SharedImageStorageAccountType = (typeof SharedImageStorageAccountType)[keyof typeof SharedImageStorageAccountType];

export const VMBootOptimizationState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type VMBootOptimizationState = (typeof VMBootOptimizationState)[keyof typeof VMBootOptimizationState];
