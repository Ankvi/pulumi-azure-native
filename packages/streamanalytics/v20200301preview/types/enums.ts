export const ClusterSkuName = {
    /**
     * The default SKU.
     */
    Default: "Default",
} as const;

export type ClusterSkuName = (typeof ClusterSkuName)[keyof typeof ClusterSkuName];
