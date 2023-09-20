export const ClusterType = {
    SingleRack: "SingleRack",
    MultiRack: "MultiRack",
} as const;

export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

export const IpAllocationType = {
    IPV4: "IPV4",
    IPV6: "IPV6",
    DualStack: "DualStack",
} as const;

export type IpAllocationType = (typeof IpAllocationType)[keyof typeof IpAllocationType];

export const ValidationThresholdGrouping = {
    PerCluster: "PerCluster",
    PerRack: "PerRack",
} as const;

export type ValidationThresholdGrouping = (typeof ValidationThresholdGrouping)[keyof typeof ValidationThresholdGrouping];

export const ValidationThresholdType = {
    CountSuccess: "CountSuccess",
    PercentSuccess: "PercentSuccess",
} as const;

export type ValidationThresholdType = (typeof ValidationThresholdType)[keyof typeof ValidationThresholdType];