export const CloudHsmClusterSkuFamily = {
    B: "B",
} as const;

/**
 * Sku family of the Cloud HSM Cluster
 */
export type CloudHsmClusterSkuFamily = (typeof CloudHsmClusterSkuFamily)[keyof typeof CloudHsmClusterSkuFamily];

export const CloudHsmClusterSkuName = {
    Standard_B1: "Standard_B1",
    Standard_B10: "Standard B10",
} as const;

/**
 * Sku name of the Cloud HSM Cluster
 */
export type CloudHsmClusterSkuName = (typeof CloudHsmClusterSkuName)[keyof typeof CloudHsmClusterSkuName];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ProvisioningState = {
    Provisioning: "Provisioning",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Deleting: "Deleting",
    Canceled: "Canceled",
} as const;

/**
 * The Cloud HSM Cluster's provisioningState
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];
