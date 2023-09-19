export const DomainJoinType = {
    HybridAzureADJoin: "HybridAzureADJoin",
    AzureADJoin: "AzureADJoin",
} as const;

export type DomainJoinType = (typeof DomainJoinType)[keyof typeof DomainJoinType];

export const EnvironmentTypeEnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EnvironmentTypeEnableStatus = (typeof EnvironmentTypeEnableStatus)[keyof typeof EnvironmentTypeEnableStatus];

export const HibernateSupport = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type HibernateSupport = (typeof HibernateSupport)[keyof typeof HibernateSupport];

export const LicenseType = {
    Windows_Client: "Windows_Client",
} as const;

export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const LocalAdminStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type LocalAdminStatus = (typeof LocalAdminStatus)[keyof typeof LocalAdminStatus];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ScheduleEnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ScheduleEnableStatus = (typeof ScheduleEnableStatus)[keyof typeof ScheduleEnableStatus];

export const ScheduledFrequency = {
    Daily: "Daily",
} as const;

export type ScheduledFrequency = (typeof ScheduledFrequency)[keyof typeof ScheduledFrequency];

export const ScheduledType = {
    StopDevBox: "StopDevBox",
} as const;

export type ScheduledType = (typeof ScheduledType)[keyof typeof ScheduledType];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const StopOnDisconnectEnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type StopOnDisconnectEnableStatus = (typeof StopOnDisconnectEnableStatus)[keyof typeof StopOnDisconnectEnableStatus];
