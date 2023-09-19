export const AssignmentType = {
    Audit: "Audit",
    DeployAndAutoCorrect: "DeployAndAutoCorrect",
    ApplyAndAutoCorrect: "ApplyAndAutoCorrect",
    ApplyAndMonitor: "ApplyAndMonitor",
} as const;

export type AssignmentType = (typeof AssignmentType)[keyof typeof AssignmentType];

export const Kind = {
    DSC: "DSC",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];
