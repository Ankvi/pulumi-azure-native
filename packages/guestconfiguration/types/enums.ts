export const AssignmentType = {
    Audit: "Audit",
    DeployAndAutoCorrect: "DeployAndAutoCorrect",
    ApplyAndAutoCorrect: "ApplyAndAutoCorrect",
    ApplyAndMonitor: "ApplyAndMonitor",
} as const;

/**
 * Specifies the assignment type and execution of the configuration. Possible values are Audit, DeployAndAutoCorrect, ApplyAndAutoCorrect and ApplyAndMonitor.
 */
export type AssignmentType = (typeof AssignmentType)[keyof typeof AssignmentType];

export const Kind = {
    DSC: "DSC",
} as const;

/**
 * Kind of the guest configuration. For example:DSC
 */
export type Kind = (typeof Kind)[keyof typeof Kind];
