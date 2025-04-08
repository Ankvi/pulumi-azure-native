export const AssociationType = {
    /**
     * Association of Type Subnet
     */
    Subnets: "subnets",
} as const;

/**
 * Association Type
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];
