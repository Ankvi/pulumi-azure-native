export const DiskPoolTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Determines the SKU of VM deployed for Disk pool
 */
export type DiskPoolTier = (typeof DiskPoolTier)[keyof typeof DiskPoolTier];
