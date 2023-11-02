export const CatalogSyncType = {
    Manual: "Manual",
    Scheduled: "Scheduled",
} as const;

/**
 * Indicates the type of sync that is configured for the catalog.
 */
export type CatalogSyncType = (typeof CatalogSyncType)[keyof typeof CatalogSyncType];

export const DomainJoinType = {
    HybridAzureADJoin: "HybridAzureADJoin",
    AzureADJoin: "AzureADJoin",
} as const;

/**
 * AAD Join type.
 */
export type DomainJoinType = (typeof DomainJoinType)[keyof typeof DomainJoinType];

export const EnvironmentTypeEnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Defines whether this Environment Type can be used in this Project.
 */
export type EnvironmentTypeEnableStatus = (typeof EnvironmentTypeEnableStatus)[keyof typeof EnvironmentTypeEnableStatus];

export const HibernateSupport = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Indicates whether Dev Boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more see https://aka.ms/devbox/hibernate
 */
export type HibernateSupport = (typeof HibernateSupport)[keyof typeof HibernateSupport];

export const IdentityType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
    DelegatedResourceIdentity: "delegatedResourceIdentity",
} as const;

/**
 * Values can be systemAssignedIdentity or userAssignedIdentity
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const LicenseType = {
    Windows_Client: "Windows_Client",
} as const;

/**
 * Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created.
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const LocalAdminStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box.
 */
export type LocalAdminStatus = (typeof LocalAdminStatus)[keyof typeof LocalAdminStatus];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ScheduleEnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Indicates whether or not this scheduled task is enabled.
 */
export type ScheduleEnableStatus = (typeof ScheduleEnableStatus)[keyof typeof ScheduleEnableStatus];

export const ScheduledFrequency = {
    Daily: "Daily",
} as const;

/**
 * The frequency of this scheduled task.
 */
export type ScheduledFrequency = (typeof ScheduledFrequency)[keyof typeof ScheduledFrequency];

export const ScheduledType = {
    StopDevBox: "StopDevBox",
} as const;

/**
 * Supported type this scheduled task represents.
 */
export type ScheduledType = (typeof ScheduledType)[keyof typeof ScheduledType];

export const SingleSignOnStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Indicates whether Dev Boxes in this pool are created with single sign on enabled. The also requires that single sign on be enabled on the tenant.
 */
export type SingleSignOnStatus = (typeof SingleSignOnStatus)[keyof typeof SingleSignOnStatus];

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

export const StopOnDisconnectEnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether the feature to stop the Dev Box on disconnect once the grace period has lapsed is enabled.
 */
export type StopOnDisconnectEnableStatus = (typeof StopOnDisconnectEnableStatus)[keyof typeof StopOnDisconnectEnableStatus];

export const VirtualNetworkType = {
    Managed: "Managed",
    Unmanaged: "Unmanaged",
} as const;

/**
 * Indicates whether the pool uses a Virtual Network managed by Microsoft or a customer provided network.
 */
export type VirtualNetworkType = (typeof VirtualNetworkType)[keyof typeof VirtualNetworkType];
