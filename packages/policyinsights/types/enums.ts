export const ComplianceState = {
    /**
     * The resource is in compliance with the policy.
     */
    Compliant: "Compliant",
    /**
     * The resource is not in compliance with the policy.
     */
    NonCompliant: "NonCompliant",
    /**
     * The compliance state of the resource is not known.
     */
    Unknown: "Unknown",
} as const;

export type ComplianceState = (typeof ComplianceState)[keyof typeof ComplianceState];

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
