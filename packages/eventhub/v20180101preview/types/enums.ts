export const IPAction = {
    Accept: "Accept",
    Reject: "Reject",
} as const;

/**
 * The IP Filter Action
 */
export type IPAction = (typeof IPAction)[keyof typeof IPAction];
