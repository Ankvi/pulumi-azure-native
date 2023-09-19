export const AssociationType = {
    Subnets: "subnets",
} as const;

export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];

export const FrontendIPAddressVersion = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type FrontendIPAddressVersion = (typeof FrontendIPAddressVersion)[keyof typeof FrontendIPAddressVersion];

export const FrontendMode = {
    Public: "public",
} as const;

export type FrontendMode = (typeof FrontendMode)[keyof typeof FrontendMode];
