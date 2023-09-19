export const KustomizationValidationType = {
    None: "none",
    Client: "client",
    Server: "server",
} as const;

export type KustomizationValidationType = (typeof KustomizationValidationType)[keyof typeof KustomizationValidationType];

export const ScopeType = {
    Cluster: "cluster",
    Namespace: "namespace",
} as const;

export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType];

export const SourceKindType = {
    GitRepository: "GitRepository",
} as const;

export type SourceKindType = (typeof SourceKindType)[keyof typeof SourceKindType];
