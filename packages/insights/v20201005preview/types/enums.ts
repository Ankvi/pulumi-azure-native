export const WebTestKind = {
    Ping: "ping",
    Multistep: "multistep",
} as const;

export type WebTestKind = (typeof WebTestKind)[keyof typeof WebTestKind];

export const WebTestKindEnum = {
    Ping: "ping",
    Multistep: "multistep",
    Basic: "basic",
    Standard: "standard",
} as const;

export type WebTestKindEnum = (typeof WebTestKindEnum)[keyof typeof WebTestKindEnum];
