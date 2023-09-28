export const KustomizationValidationType = {
    None: "none",
    Client: "client",
    Server: "server",
} as const;

/**
 * Specify whether to validate the Kubernetes objects referenced in the Kustomization before applying them to the cluster.
 */
export type KustomizationValidationType = (typeof KustomizationValidationType)[keyof typeof KustomizationValidationType];

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
} as const;

/**
 * Source Kind to pull the configuration data from.
 */
export type SourceKindType = (typeof SourceKindType)[keyof typeof SourceKindType];
