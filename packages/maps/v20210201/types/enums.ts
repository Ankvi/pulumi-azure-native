export const Kind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

/**
 * Get or Set Kind property.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const Name = {
    S0: "S0",
    S1: "S1",
    G2: "G2",
} as const;

/**
 * The name of the SKU, in standard format (such as S0).
 */
export type Name = (typeof Name)[keyof typeof Name];
