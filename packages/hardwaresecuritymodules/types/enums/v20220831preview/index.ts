// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const CloudHsmClusterSkuFamily = {
    B: "B",
} as const;

export type CloudHsmClusterSkuFamily = (typeof CloudHsmClusterSkuFamily)[keyof typeof CloudHsmClusterSkuFamily];

export const CloudHsmClusterSkuName = {
    Standard_B1: "Standard_B1",
    Standard_B10: "Standard B10",
} as const;

export type CloudHsmClusterSkuName = (typeof CloudHsmClusterSkuName)[keyof typeof CloudHsmClusterSkuName];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ProvisioningState = {
    Provisioning: "Provisioning",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Deleting: "Deleting",
    Canceled: "Canceled",
} as const;

export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];
