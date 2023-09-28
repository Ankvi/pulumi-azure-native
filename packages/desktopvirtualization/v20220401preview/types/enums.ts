export const ApplicationGroupType = {
    RemoteApp: "RemoteApp",
    Desktop: "Desktop",
} as const;

/**
 * Resource Type of ApplicationGroup.
 */
export type ApplicationGroupType = (typeof ApplicationGroupType)[keyof typeof ApplicationGroupType];

export const DayOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * Day of the week.
 */
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

/**
 * HostPool type for desktop.
 */
export type HostPoolType = (typeof HostPoolType)[keyof typeof HostPoolType];

export const HostpoolPublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    EnabledForSessionHostsOnly: "EnabledForSessionHostsOnly",
    EnabledForClientsOnly: "EnabledForClientsOnly",
} as const;

/**
 * Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints
 */
export type HostpoolPublicNetworkAccess = (typeof HostpoolPublicNetworkAccess)[keyof typeof HostpoolPublicNetworkAccess];

export const LoadBalancerType = {
    BreadthFirst: "BreadthFirst",
    DepthFirst: "DepthFirst",
    Persistent: "Persistent",
} as const;

/**
 * The type of the load balancer.
 */
export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const Operation = {
    /**
     * Start the migration.
     */
    Start: "Start",
    /**
     * Revoke the migration.
     */
    Revoke: "Revoke",
    /**
     * Complete the migration.
     */
    Complete: "Complete",
    /**
     * Hide the hostpool.
     */
    Hide: "Hide",
    /**
     * Unhide the hostpool.
     */
    Unhide: "Unhide",
} as const;

/**
 * The type of operation for migration.
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

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

export const RegistrationTokenOperation = {
    Delete: "Delete",
    None: "None",
    Update: "Update",
} as const;

/**
 * The type of resetting the token.
 */
export type RegistrationTokenOperation = (typeof RegistrationTokenOperation)[keyof typeof RegistrationTokenOperation];

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
