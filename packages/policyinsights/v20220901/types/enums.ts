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

/**
 * The compliance state that should be set on the resource.
 */
export type ComplianceState = (typeof ComplianceState)[keyof typeof ComplianceState];
