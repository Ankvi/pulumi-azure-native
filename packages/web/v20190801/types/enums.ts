export const AccessControlEntryAction = {
    Permit: "Permit",
    Deny: "Deny",
} as const;

/**
 * Action object.
 */
export type AccessControlEntryAction = (typeof AccessControlEntryAction)[keyof typeof AccessControlEntryAction];

export const ComputeModeOptions = {
    Shared: "Shared",
    Dedicated: "Dedicated",
    Dynamic: "Dynamic",
} as const;

/**
 * Shared or dedicated app hosting.
 */
export type ComputeModeOptions = (typeof ComputeModeOptions)[keyof typeof ComputeModeOptions];

export const InternalLoadBalancingMode = {
    None: "None",
    Web: "Web",
    Publishing: "Publishing",
} as const;

/**
 * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
 */
export type InternalLoadBalancingMode = (typeof InternalLoadBalancingMode)[keyof typeof InternalLoadBalancingMode];
