export const ScopeType = {
    Cluster: "cluster",
    Namespace: "namespace",
} as const;

/**
 * Scope at which the operator will be installed.
 */
export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType];

export const SourceKindType = {
    GitRepository: "GitRepository",
    Bucket: "Bucket",
} as const;

/**
 * Source Kind to pull the configuration data from.
 */
export type SourceKindType = (typeof SourceKindType)[keyof typeof SourceKindType];
