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

export type DirectPeeringType = (typeof DirectPeeringType)[keyof typeof DirectPeeringType];

export const Kind = {
    Direct: "Direct",
    Exchange: "Exchange",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const Role = {
    Noc: "Noc",
    Policy: "Policy",
    Technical: "Technical",
    Service: "Service",
    Escalation: "Escalation",
    Other: "Other",
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const SessionAddressProvider = {
    Microsoft: "Microsoft",
    Peer: "Peer",
} as const;

export type SessionAddressProvider = (typeof SessionAddressProvider)[keyof typeof SessionAddressProvider];