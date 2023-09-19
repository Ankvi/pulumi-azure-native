export const BlockchainProtocol = {
    NotSpecified: "NotSpecified",
    Parity: "Parity",
    Quorum: "Quorum",
    Corda: "Corda",
} as const;

export type BlockchainProtocol = (typeof BlockchainProtocol)[keyof typeof BlockchainProtocol];
