export const ManagedIdentityTypes = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type ManagedIdentityTypes = (typeof ManagedIdentityTypes)[keyof typeof ManagedIdentityTypes];

export const MarketplaceSubscriptionStatus = {
    Active: "Active",
    Suspended: "Suspended",
} as const;

export type MarketplaceSubscriptionStatus = (typeof MarketplaceSubscriptionStatus)[keyof typeof MarketplaceSubscriptionStatus];

export const MonitoringStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type MonitoringStatus = (typeof MonitoringStatus)[keyof typeof MonitoringStatus];

export const TagAction = {
    Include: "Include",
    Exclude: "Exclude",
} as const;

export type TagAction = (typeof TagAction)[keyof typeof TagAction];
