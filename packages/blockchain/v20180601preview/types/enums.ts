export const BlockchainProtocol = {
    NotSpecified: "NotSpecified",
    Parity: "Parity",
    Quorum: "Quorum",
    Corda: "Corda",
} as const;

/**
 * Gets or sets the blockchain protocol.
 */
export type BlockchainProtocol = (typeof BlockchainProtocol)[keyof typeof BlockchainProtocol];
