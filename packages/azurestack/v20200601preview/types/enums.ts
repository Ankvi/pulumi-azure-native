export const Location = {
    Global: "global",
} as const;

/**
 * Location of the resource.
 */
export type Location = (typeof Location)[keyof typeof Location];
