export const OrchestratorKind = {
    Kubernetes: "Kubernetes",
} as const;

export type OrchestratorKind = (typeof OrchestratorKind)[keyof typeof OrchestratorKind];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
