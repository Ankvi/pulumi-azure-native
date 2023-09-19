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
