export const ApplicationGroupType = {
    RemoteApp: "RemoteApp",
    Desktop: "Desktop",
} as const;

/**
 * Resource Type of ApplicationGroup.
 */
export type ApplicationGroupType = (typeof ApplicationGroupType)[keyof typeof ApplicationGroupType];

export const CommandLineSetting = {
    DoNotAllow: "DoNotAllow",
    Allow: "Allow",
    Require: "Require",
} as const;

/**
 * Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
 */
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

export const FailHealthCheckOnStagingFailure = {
    Unhealthy: "Unhealthy",
    NeedsAssistance: "NeedsAssistance",
    DoNotFail: "DoNotFail",
} as const;

/**
 * Parameter indicating how the health check should behave if this package fails staging
 */
export type FailHealthCheckOnStagingFailure = (typeof FailHealthCheckOnStagingFailure)[keyof typeof FailHealthCheckOnStagingFailure];

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

/**
 * HostPool type for desktop.
 */
export type HostPoolType = (typeof HostPoolType)[keyof typeof HostPoolType];

export const LoadBalancerType = {
    BreadthFirst: "BreadthFirst",
    DepthFirst: "DepthFirst",
    Persistent: "Persistent",
} as const;

/**
 * The type of the load balancer.
 */
export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const PackageTimestamped = {
    Timestamped: "Timestamped",
    NotTimestamped: "NotTimestamped",
} as const;

/**
 * Is package timestamped so it can ignore the certificate expiry date
 */
export type PackageTimestamped = (typeof PackageTimestamped)[keyof typeof PackageTimestamped];

export const PersonalDesktopAssignmentType = {
    Automatic: "Automatic",
    Direct: "Direct",
} as const;

/**
 * PersonalDesktopAssignment type for HostPool.
 */
export type PersonalDesktopAssignmentType = (typeof PersonalDesktopAssignmentType)[keyof typeof PersonalDesktopAssignmentType];

export const PreferredAppGroupType = {
    None: "None",
    Desktop: "Desktop",
    RailApplications: "RailApplications",
} as const;

/**
 * The type of preferred application group type, default to Desktop Application Group
 */
export type PreferredAppGroupType = (typeof PreferredAppGroupType)[keyof typeof PreferredAppGroupType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const RegistrationTokenOperation = {
    Delete: "Delete",
    None: "None",
    Update: "Update",
} as const;

/**
 * The type of resetting the token.
 */
export type RegistrationTokenOperation = (typeof RegistrationTokenOperation)[keyof typeof RegistrationTokenOperation];

export const RemoteApplicationType = {
    InBuilt: "InBuilt",
    MsixApplication: "MsixApplication",
} as const;

/**
 * Resource Type of Application.
 */
export type RemoteApplicationType = (typeof RemoteApplicationType)[keyof typeof RemoteApplicationType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SSOSecretType = {
    SharedKey: "SharedKey",
    Certificate: "Certificate",
    SharedKeyInKeyVault: "SharedKeyInKeyVault",
    CertificateInKeyVault: "CertificateInKeyVault",
} as const;

/**
 * The type of single sign on Secret Type.
 */
export type SSOSecretType = (typeof SSOSecretType)[keyof typeof SSOSecretType];

export const ScalingHostPoolType = {
    /**
     * Users get a new (random) SessionHost every time it connects to the HostPool.
     */
    Pooled: "Pooled",
} as const;

/**
 * HostPool type for desktop.
 */
export type ScalingHostPoolType = (typeof ScalingHostPoolType)[keyof typeof ScalingHostPoolType];

export const SessionHandlingOperation = {
    None: "None",
    Deallocate: "Deallocate",
    Hibernate: "Hibernate",
} as const;

/**
 * Action to be taken after a logoff during the ramp up period.
 */
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

/**
 * The type of maintenance for session host components.
 */
export type SessionHostComponentUpdateType = (typeof SessionHostComponentUpdateType)[keyof typeof SessionHostComponentUpdateType];

export const SessionHostLoadBalancingAlgorithm = {
    BreadthFirst: "BreadthFirst",
    DepthFirst: "DepthFirst",
} as const;

/**
 * Load balancing algorithm for ramp up period.
 */
export type SessionHostLoadBalancingAlgorithm = (typeof SessionHostLoadBalancingAlgorithm)[keyof typeof SessionHostLoadBalancingAlgorithm];

export const SetStartVMOnConnect = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * The desired configuration of Start VM On Connect for the hostpool during the ramp up phase. If this is disabled, session hosts must be turned on using rampUpAutoStartHosts or by turning them on manually.
 */
export type SetStartVMOnConnect = (typeof SetStartVMOnConnect)[keyof typeof SetStartVMOnConnect];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
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

/**
 * The desired startup behavior during the ramp up period for personal vms in the hostpool.
 */
export type StartupBehavior = (typeof StartupBehavior)[keyof typeof StartupBehavior];

export const StopHostsWhen = {
    ZeroSessions: "ZeroSessions",
    ZeroActiveSessions: "ZeroActiveSessions",
} as const;

/**
 * Specifies when to stop hosts during ramp down period.
 */
export type StopHostsWhen = (typeof StopHostsWhen)[keyof typeof StopHostsWhen];
