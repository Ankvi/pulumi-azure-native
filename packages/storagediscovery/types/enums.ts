export const StorageDiscoveryResourceType = {
    /**
     * Storage Account Resource Type
     */
    StorageAccounts: "Microsoft.Storage/storageAccounts",
} as const;

/**
 * Storage Discovery Resource Type
 */
export type StorageDiscoveryResourceType = (typeof StorageDiscoveryResourceType)[keyof typeof StorageDiscoveryResourceType];

export const StorageDiscoverySku = {
    /**
     * Standard Sku
     */
    Standard: "Standard",
    /**
     * Free Sku
     */
    Free: "Free",
} as const;

/**
 * The storage discovery sku
 */
export type StorageDiscoverySku = (typeof StorageDiscoverySku)[keyof typeof StorageDiscoverySku];
