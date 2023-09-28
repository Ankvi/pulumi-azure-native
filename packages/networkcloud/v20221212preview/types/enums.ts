export const ClusterType = {
    SingleRack: "SingleRack",
    MultiRack: "MultiRack",
} as const;

/**
 * The type of rack configuration for the cluster.
 */
export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

export const IpAllocationType = {
    IPV4: "IPV4",
    IPV6: "IPV6",
    DualStack: "DualStack",
} as const;

/**
 * The type of the IP address allocation.
 */
export type IpAllocationType = (typeof IpAllocationType)[keyof typeof IpAllocationType];

export const ValidationThresholdGrouping = {
    PerCluster: "PerCluster",
    PerRack: "PerRack",
} as const;

/**
 * Selection of how the type evaluation is applied to the cluster calculation.
 */
export type ValidationThresholdGrouping = (typeof ValidationThresholdGrouping)[keyof typeof ValidationThresholdGrouping];

export const ValidationThresholdType = {
    CountSuccess: "CountSuccess",
    PercentSuccess: "PercentSuccess",
} as const;

/**
 * Selection of how the threshold should be evaluated.
 */
export type ValidationThresholdType = (typeof ValidationThresholdType)[keyof typeof ValidationThresholdType];
