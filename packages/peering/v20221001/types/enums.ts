export const DirectPeeringType = {
    Edge: "Edge",
    Transit: "Transit",
    Cdn: "Cdn",
    Internal: "Internal",
    Ix: "Ix",
    IxRs: "IxRs",
    Voice: "Voice",
    EdgeZoneForOperators: "EdgeZoneForOperators",
} as const;

/**
 * The type of direct peering.
 */
export type DirectPeeringType = (typeof DirectPeeringType)[keyof typeof DirectPeeringType];

export const Kind = {
    Direct: "Direct",
    Exchange: "Exchange",
} as const;

/**
 * The kind of the peering.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const Role = {
    Noc: "Noc",
    Policy: "Policy",
    Technical: "Technical",
    Service: "Service",
    Escalation: "Escalation",
    Other: "Other",
} as const;

/**
 * The role of the contact.
 */
export type Role = (typeof Role)[keyof typeof Role];

export const SessionAddressProvider = {
    Microsoft: "Microsoft",
    Peer: "Peer",
} as const;

/**
 * The field indicating if Microsoft provides session ip addresses.
 */
export type SessionAddressProvider = (typeof SessionAddressProvider)[keyof typeof SessionAddressProvider];
