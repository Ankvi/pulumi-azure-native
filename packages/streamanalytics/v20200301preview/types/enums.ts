export const ClusterSkuName = {
    /**
     * The default SKU.
     */
    Default: "Default",
} as const;

/**
 * Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests.
 */
export type ClusterSkuName = (typeof ClusterSkuName)[keyof typeof ClusterSkuName];
