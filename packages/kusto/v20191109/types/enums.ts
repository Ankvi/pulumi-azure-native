export const Kind = {
    ReadWrite: "ReadWrite",
    ReadOnlyFollowing: "ReadOnlyFollowing",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];
