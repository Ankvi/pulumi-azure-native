export const WebTestKind = {
    Ping: "ping",
    Multistep: "multistep",
} as const;

/**
 * The kind of WebTest that this web test watches. Choices are ping and multistep.
 */
export type WebTestKind = (typeof WebTestKind)[keyof typeof WebTestKind];

export const WebTestKindEnum = {
    Ping: "ping",
    Multistep: "multistep",
    Basic: "basic",
    Standard: "standard",
} as const;

/**
 * The kind of web test this is, valid choices are ping, multistep, basic, and standard.
 */
export type WebTestKindEnum = (typeof WebTestKindEnum)[keyof typeof WebTestKindEnum];
