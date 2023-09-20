export const ApplicationGroupType = {
    RemoteApp: "RemoteApp",
    Desktop: "Desktop",
} as const;

export type ApplicationGroupType = (typeof ApplicationGroupType)[keyof typeof ApplicationGroupType];

export const CommandLineSetting = {
    DoNotAllow: "DoNotAllow",
    Allow: "Allow",
    Require: "Require",
} as const;

export type CommandLineSetting = (typeof CommandLineSetting)[keyof typeof CommandLineSetting];

export const DayOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

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

export const LoadBalancerType = {
    BreadthFirst: "BreadthFirst",
    DepthFirst: "DepthFirst",
    Persistent: "Persistent",
} as const;

export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const PersonalDesktopAssignmentType = {
    Automatic: "Automatic",
    Direct: "Direct",
} as const;

export type PersonalDesktopAssignmentType = (typeof PersonalDesktopAssignmentType)[keyof typeof PersonalDesktopAssignmentType];

export const PreferredAppGroupType = {
    None: "None",
    Desktop: "Desktop",
    RailApplications: "RailApplications",
} as const;

export type PreferredAppGroupType = (typeof PreferredAppGroupType)[keyof typeof PreferredAppGroupType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const RegistrationTokenOperation = {
    Delete: "Delete",
    None: "None",
    Update: "Update",
} as const;

export type RegistrationTokenOperation = (typeof RegistrationTokenOperation)[keyof typeof RegistrationTokenOperation];

export const RemoteApplicationType = {
    InBuilt: "InBuilt",
    MsixApplication: "MsixApplication",
} as const;

export type RemoteApplicationType = (typeof RemoteApplicationType)[keyof typeof RemoteApplicationType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SSOSecretType = {
    SharedKey: "SharedKey",
    Certificate: "Certificate",
    SharedKeyInKeyVault: "SharedKeyInKeyVault",
    CertificateInKeyVault: "CertificateInKeyVault",
} as const;

export type SSOSecretType = (typeof SSOSecretType)[keyof typeof SSOSecretType];

export const ScalingHostPoolType = {
    /**
     * Users get a new (random) SessionHost every time it connects to the HostPool.
     */
    Pooled: "Pooled",
} as const;

export type ScalingHostPoolType = (typeof ScalingHostPoolType)[keyof typeof ScalingHostPoolType];

export const SessionHandlingOperation = {
    None: "None",
    Deallocate: "Deallocate",
} as const;

export type SessionHandlingOperation = (typeof SessionHandlingOperation)[keyof typeof SessionHandlingOperation];

export const SessionHostComponentUpdateType = {
    /**
     * Agent and other agent side components are delivery schedule is controlled by WVD Infra.
     */
    Default: "Default",
    /**
     * TenantAdmin have opted in for Scheduled Component Update feature.
     */
    Scheduled: "Scheduled",
} as const;

export type SessionHostComponentUpdateType = (typeof SessionHostComponentUpdateType)[keyof typeof SessionHostComponentUpdateType];

export const SessionHostLoadBalancingAlgorithm = {
    BreadthFirst: "BreadthFirst",
    DepthFirst: "DepthFirst",
} as const;

export type SessionHostLoadBalancingAlgorithm = (typeof SessionHostLoadBalancingAlgorithm)[keyof typeof SessionHostLoadBalancingAlgorithm];

export const SetStartVMOnConnect = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

export type SetStartVMOnConnect = (typeof SetStartVMOnConnect)[keyof typeof SetStartVMOnConnect];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const StartupBehavior = {
    /**
     * Session hosts will not be started by the service. This setting depends on Start VM on Connect to be enabled to start the session hosts.
     */
    None: "None",
    /**
     * Session hosts with an assigned user will be started during Ramp Up
     */
    WithAssignedUser: "WithAssignedUser",
    /**
     * All personal session hosts in the hostpool will be started during ramp up.
     */
    All: "All",
} as const;

export type StartupBehavior = (typeof StartupBehavior)[keyof typeof StartupBehavior];

export const StopHostsWhen = {
    ZeroSessions: "ZeroSessions",
    ZeroActiveSessions: "ZeroActiveSessions",
} as const;

export type StopHostsWhen = (typeof StopHostsWhen)[keyof typeof StopHostsWhen];