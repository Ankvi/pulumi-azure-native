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

/**
 * The upgrade type.
 * Full requires the KubernetesVersion property to be set.
 * NodeImageOnly requires the KubernetesVersion property not to be set.
 */
export type ManagedClusterUpgradeType = (typeof ManagedClusterUpgradeType)[keyof typeof ManagedClusterUpgradeType];
