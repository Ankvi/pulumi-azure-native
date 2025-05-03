export const PurgeableOrchestrationState = {
    /**
     * The orchestration is completed
     */
    Completed: "Completed",
    /**
     * The orchestration is failed
     */
    Failed: "Failed",
    /**
     * The orchestration is terminated
     */
    Terminated: "Terminated",
    /**
     * The orchestration is canceled
     */
    Canceled: "Canceled",
} as const;

/**
 * The orchestration state to which this policy applies. If omitted, the policy applies to all purgeable orchestration states.
 */
export type PurgeableOrchestrationState = (typeof PurgeableOrchestrationState)[keyof typeof PurgeableOrchestrationState];
