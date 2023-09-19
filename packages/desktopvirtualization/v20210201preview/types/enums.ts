export const HostPoolType = {
    /**
     * Users will be assigned a SessionHost either by administrators (PersonalDesktopAssignmentType = Direct) or upon connecting to the pool (PersonalDesktopAssignmentType = Automatic). They will always be redirected to their assigned SessionHost.
     */
    Personal: "Personal",
    /**
     * Users get a new (random) SessionHost every time it connects to the HostPool.
     */
    Pooled: "Pooled",
    /**
     * Users assign their own machines, load balancing logic remains the same as Personal. PersonalDesktopAssignmentType must be Direct.
     */
    BYODesktop: "BYODesktop",
} as const;

export type HostPoolType = (typeof HostPoolType)[keyof typeof HostPoolType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SessionHostLoadBalancingAlgorithm = {
    BreadthFirst: "BreadthFirst",
    DepthFirst: "DepthFirst",
} as const;

export type SessionHostLoadBalancingAlgorithm = (typeof SessionHostLoadBalancingAlgorithm)[keyof typeof SessionHostLoadBalancingAlgorithm];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const StopHostsWhen = {
    ZeroSessions: "ZeroSessions",
    ZeroActiveSessions: "ZeroActiveSessions",
} as const;

export type StopHostsWhen = (typeof StopHostsWhen)[keyof typeof StopHostsWhen];
