export const Kind = {
    Connectivity: "Connectivity",
} as const;

/**
 * Responsibility role under which this Managed Network Group will be created
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const Type = {
    HubAndSpokeTopology: "HubAndSpokeTopology",
    MeshTopology: "MeshTopology",
} as const;

/**
 * Gets or sets the connectivity type of a network structure policy
 */
export type Type = (typeof Type)[keyof typeof Type];
