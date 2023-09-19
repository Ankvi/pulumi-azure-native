export const WebTestKind = {
    Ping: "ping",
    Multistep: "multistep",
    Standard: "standard",
} as const;

export type WebTestKind = (typeof WebTestKind)[keyof typeof WebTestKind];
