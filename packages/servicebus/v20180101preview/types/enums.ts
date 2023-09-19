export const IPAction = {
    Accept: "Accept",
    Reject: "Reject",
} as const;

export type IPAction = (typeof IPAction)[keyof typeof IPAction];
