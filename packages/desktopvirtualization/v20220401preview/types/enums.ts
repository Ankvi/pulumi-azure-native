export const ApplicationGroupType = {
    RemoteApp: "RemoteApp",
    Desktop: "Desktop",
} as const;

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

export const HostpoolPublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    EnabledForSessionHostsOnly: "EnabledForSessionHostsOnly",
    EnabledForClientsOnly: "EnabledForClientsOnly",
} as const;

export type HostpoolPublicNetworkAccess = (typeof HostpoolPublicNetworkAccess)[keyof typeof HostpoolPublicNetworkAccess];

export const LoadBalancerType = {
    BreadthFirst: "BreadthFirst",
    DepthFirst: "DepthFirst",
    Persistent: "Persistent",
} as const;

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

export type Operation = (typeof Operation)[keyof typeof Operation];

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

export const RegistrationTokenOperation = {
    Delete: "Delete",
    None: "None",
    Update: "Update",
} as const;

export type RegistrationTokenOperation = (typeof RegistrationTokenOperation)[keyof typeof RegistrationTokenOperation];

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

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];