export const Kind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const Name = {
    S0: "S0",
    S1: "S1",
    G2: "G2",
} as const;

export type Name = (typeof Name)[keyof typeof Name];
