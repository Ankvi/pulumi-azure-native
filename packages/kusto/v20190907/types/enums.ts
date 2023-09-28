export const Kind = {
    ReadWrite: "ReadWrite",
    ReadOnlyFollowing: "ReadOnlyFollowing",
} as const;

/**
 * Kind of the database
 */
export type Kind = (typeof Kind)[keyof typeof Kind];
