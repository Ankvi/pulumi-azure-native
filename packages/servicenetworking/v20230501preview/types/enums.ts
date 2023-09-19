export const AssociationType = {
    Subnets: "subnets",
} as const;

export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];
