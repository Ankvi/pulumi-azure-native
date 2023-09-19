export const ManagedClusterUpgradeType = {
    /**
     * Full upgrades the control plane and all agent pools of the target ManagedClusters.
     */
    Full: "Full",
    /**
     * NodeImageOnly upgrades only the node images of the target ManagedClusters.
     */
    NodeImageOnly: "NodeImageOnly",
} as const;

export type ManagedClusterUpgradeType = (typeof ManagedClusterUpgradeType)[keyof typeof ManagedClusterUpgradeType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NodeImageSelectionType = {
    /**
     * Use the latest image version when upgrading nodes. Clusters may use different image versions (e.g., 'AKSUbuntu-1804gen2containerd-2021.10.12' and 'AKSUbuntu-1804gen2containerd-2021.10.19') because, for example, the latest available version is different in different regions.
     */
    Latest: "Latest",
    /**
     * The image versions to upgrade nodes to are selected as described below: for each node pool in managed clusters affected by the update run, the system selects the latest image version such that it is available across all other node pools (in all other clusters) of the same image type. As a result, all node pools of the same image type will be upgraded to the same image version. For example, if the latest image version for image type 'AKSUbuntu-1804gen2containerd' is 'AKSUbuntu-1804gen2containerd-2021.10.12' for a node pool in cluster A in region X, and is 'AKSUbuntu-1804gen2containerd-2021.10.17' for a node pool in cluster B in region Y, the system will upgrade both node pools to image version 'AKSUbuntu-1804gen2containerd-2021.10.12'.
     */
    Consistent: "Consistent",
} as const;

export type NodeImageSelectionType = (typeof NodeImageSelectionType)[keyof typeof NodeImageSelectionType];
