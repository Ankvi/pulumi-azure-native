export const AssociationType = {
    Subnets: "subnets",
} as const;

/**
 * Association Type
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];
