export const Location = {
    Global: "global",
} as const;

export type Location = (typeof Location)[keyof typeof Location];
