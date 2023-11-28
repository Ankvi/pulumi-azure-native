export const ReconciliationPolicies = {
    /**
     * Allows resource to reconcile periodically.
     */
    Periodic: "periodic",
} as const;

/**
 * Policy type
 */
export type ReconciliationPolicies = (typeof ReconciliationPolicies)[keyof typeof ReconciliationPolicies];
