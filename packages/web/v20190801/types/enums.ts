export const AccessControlEntryAction = {
    Permit: "Permit",
    Deny: "Deny",
} as const;

export type AccessControlEntryAction = (typeof AccessControlEntryAction)[keyof typeof AccessControlEntryAction];

export const ComputeModeOptions = {
    Shared: "Shared",
    Dedicated: "Dedicated",
    Dynamic: "Dynamic",
} as const;

export type ComputeModeOptions = (typeof ComputeModeOptions)[keyof typeof ComputeModeOptions];

export const InternalLoadBalancingMode = {
    None: "None",
    Web: "Web",
    Publishing: "Publishing",
} as const;

export type InternalLoadBalancingMode = (typeof InternalLoadBalancingMode)[keyof typeof InternalLoadBalancingMode];
