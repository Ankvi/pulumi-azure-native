export const ScopeType = {
    Cluster: "cluster",
    Namespace: "namespace",
} as const;

export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType];

export const SourceKindType = {
    GitRepository: "GitRepository",
    Bucket: "Bucket",
} as const;

export type SourceKindType = (typeof SourceKindType)[keyof typeof SourceKindType];
