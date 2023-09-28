export const WebTestKind = {
    Ping: "ping",
    Multistep: "multistep",
    Standard: "standard",
} as const;

/**
 * The kind of web test this is, valid choices are ping, multistep and standard.
 */
export type WebTestKind = (typeof WebTestKind)[keyof typeof WebTestKind];
