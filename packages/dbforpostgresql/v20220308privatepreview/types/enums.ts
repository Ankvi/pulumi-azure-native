export const ServerVersion = {
    ServerVersion_14: "14",
    ServerVersion_13: "13",
    ServerVersion_12: "12",
    ServerVersion_11: "11",
} as const;

/**
 * PostgreSQL Server version.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const SkuTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * The tier of the particular SKU, e.g. Burstable.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
