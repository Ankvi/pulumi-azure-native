export const Kind = {
    User: "user",
    Shared: "shared",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];
