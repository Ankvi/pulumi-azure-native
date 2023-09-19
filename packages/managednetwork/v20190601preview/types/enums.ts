export const Kind = {
    Connectivity: "Connectivity",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const Type = {
    HubAndSpokeTopology: "HubAndSpokeTopology",
    MeshTopology: "MeshTopology",
} as const;

export type Type = (typeof Type)[keyof typeof Type];
