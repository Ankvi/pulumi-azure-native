export const ConnectionMode = {
    All: "All",
    ReadOnly: "ReadOnly",
} as const;

/**
 * How the read-write server's participation in the query pool is controlled.<br/>It can have the following values: <ul><li>readOnly - indicates that the read-write server is intended not to participate in query operations</li><li>all - indicates that the read-write server can participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in error.
 */
export type ConnectionMode = (typeof ConnectionMode)[keyof typeof ConnectionMode];

export const SkuTier = {
    Development: "Development",
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * The name of the Azure pricing tier to which the SKU applies.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
