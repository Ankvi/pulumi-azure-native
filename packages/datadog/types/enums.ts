export const ManagedIdentityTypes = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type ManagedIdentityTypes = (typeof ManagedIdentityTypes)[keyof typeof ManagedIdentityTypes];

export const MonitoringStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type MonitoringStatus = (typeof MonitoringStatus)[keyof typeof MonitoringStatus];
