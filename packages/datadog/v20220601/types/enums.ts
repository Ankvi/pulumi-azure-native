export const ManagedIdentityTypes = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Identity type
 */
export type ManagedIdentityTypes = (typeof ManagedIdentityTypes)[keyof typeof ManagedIdentityTypes];

export const MonitoringStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Flag specifying if the resource monitoring is enabled or disabled.
 */
export type MonitoringStatus = (typeof MonitoringStatus)[keyof typeof MonitoringStatus];
