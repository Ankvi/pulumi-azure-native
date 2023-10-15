export const ManagedIdentityTypes = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * Managed identity type.
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

export const ProvisioningState = {
    Accepted: "Accepted",
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Deleted: "Deleted",
    NotSpecified: "NotSpecified",
} as const;

/**
 * Provisioning state of the monitoring tag rules.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const TagAction = {
    Include: "Include",
    Exclude: "Exclude",
} as const;

/**
 * Valid actions for a filtering tag.
 */
export type TagAction = (typeof TagAction)[keyof typeof TagAction];
