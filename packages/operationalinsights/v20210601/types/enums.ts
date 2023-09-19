export const BillingType = {
    Cluster: "Cluster",
    Workspaces: "Workspaces",
} as const;

export type BillingType = (typeof BillingType)[keyof typeof BillingType];

export const ClusterSkuNameEnum = {
    CapacityReservation: "CapacityReservation",
} as const;

export type ClusterSkuNameEnum = (typeof ClusterSkuNameEnum)[keyof typeof ClusterSkuNameEnum];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

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
