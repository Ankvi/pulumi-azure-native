export const ResourceDiscoveryMode = {
    /**
     * Remediate resources that are already known to be non-compliant.
     */
    ExistingNonCompliant: "ExistingNonCompliant",
    /**
     * Re-evaluate the compliance state of resources and then remediate the resources found to be non-compliant.
     */
    ReEvaluateCompliance: "ReEvaluateCompliance",
} as const;

export type ResourceDiscoveryMode = (typeof ResourceDiscoveryMode)[keyof typeof ResourceDiscoveryMode];
