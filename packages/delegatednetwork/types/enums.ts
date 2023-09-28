export const OrchestratorKind = {
    Kubernetes: "Kubernetes",
} as const;

/**
 * The kind of workbook. Choices are user and shared.
 */
export type OrchestratorKind = (typeof OrchestratorKind)[keyof typeof OrchestratorKind];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for orchestrator cluster. Type 'SystemAssigned' will use an implicitly created identity orchestrator clusters
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
