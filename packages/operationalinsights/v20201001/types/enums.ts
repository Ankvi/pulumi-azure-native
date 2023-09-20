export const PublicNetworkAccessType = {
    /**
     * Enables connectivity to Log Analytics through public DNS.
     */
    Enabled: "Enabled",
    /**
     * Disables public connectivity to Log Analytics through public DNS.
     */
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const WorkspaceEntityStatus = {
    Creating: "Creating",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Deleting: "Deleting",
    ProvisioningAccount: "ProvisioningAccount",
    Updating: "Updating",
} as const;

export type WorkspaceEntityStatus = (typeof WorkspaceEntityStatus)[keyof typeof WorkspaceEntityStatus];

export const WorkspaceSkuNameEnum = {
    Free: "Free",
    Standard: "Standard",
    Premium: "Premium",
    PerNode: "PerNode",
    PerGB2018: "PerGB2018",
    Standalone: "Standalone",
    CapacityReservation: "CapacityReservation",
    LACluster: "LACluster",
} as const;

export type WorkspaceSkuNameEnum = (typeof WorkspaceSkuNameEnum)[keyof typeof WorkspaceSkuNameEnum];