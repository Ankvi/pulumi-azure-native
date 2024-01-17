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

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const SigningKey = {
    PrimaryKey: "primaryKey",
    SecondaryKey: "secondaryKey",
} as const;

/**
 * The Map account key to use for signing.
 */
export type SigningKey = (typeof SigningKey)[keyof typeof SigningKey];
