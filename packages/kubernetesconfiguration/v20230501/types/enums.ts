export const AKSIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * The identity type.
 */
export type AKSIdentityType = (typeof AKSIdentityType)[keyof typeof AKSIdentityType];

export const LevelType = {
    Error: "Error",
    Warning: "Warning",
    Information: "Information",
} as const;

/**
 * Level of the status.
 */
export type LevelType = (typeof LevelType)[keyof typeof LevelType];

export const OperatorScopeType = {
    Cluster: "cluster",
    Namespace: "namespace",
} as const;

/**
 * Scope at which the operator will be installed.
 */
export type OperatorScopeType = (typeof OperatorScopeType)[keyof typeof OperatorScopeType];

export const OperatorType = {
    Flux: "Flux",
} as const;

/**
 * Type of the operator
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

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
    AzureBlob: "AzureBlob",
} as const;

/**
 * Source Kind to pull the configuration data from.
 */
export type SourceKindType = (typeof SourceKindType)[keyof typeof SourceKindType];
