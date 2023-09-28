export const MasterSitePropertiesPublicNetworkAccess = {
    /**
     * NotSpecified value.
     */
    NotSpecified: "NotSpecified",
    /**
     * Enabled value.
     */
    Enabled: "Enabled",
    /**
     * Disabled value.
     */
    Disabled: "Disabled",
} as const;

/**
 * Gets or sets the state of public network access.
 */
export type MasterSitePropertiesPublicNetworkAccess = (typeof MasterSitePropertiesPublicNetworkAccess)[keyof typeof MasterSitePropertiesPublicNetworkAccess];

export const PrivateLinkServiceConnectionStateStatus = {
    /**
     * Approved value.
     */
    Approved: "Approved",
    /**
     * Pending value.
     */
    Pending: "Pending",
    /**
     * Rejected value.
     */
    Rejected: "Rejected",
    /**
     * Disconnected value.
     */
    Disconnected: "Disconnected",
} as const;

/**
 * state status
 */
export type PrivateLinkServiceConnectionStateStatus = (typeof PrivateLinkServiceConnectionStateStatus)[keyof typeof PrivateLinkServiceConnectionStateStatus];

export const ProvisioningState = {
    /**
     * Created value.
     */
    Created: "Created",
    /**
     * Updated value.
     */
    Updated: "Updated",
    /**
     * Running value.
     */
    Running: "Running",
    /**
     * Completed value.
     */
    Completed: "Completed",
    /**
     * Failed value.
     */
    Failed: "Failed",
    /**
     * Succeeded value.
     */
    Succeeded: "Succeeded",
    /**
     * Canceled value.
     */
    Canceled: "Canceled",
} as const;

/**
 * The status of the last operation.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const SqlSitePropertiesDiscoveryScenario = {
    /**
     * Migrate value.
     */
    Migrate: "Migrate",
    /**
     * DR value.
     */
    DR: "DR",
} as const;

/**
 * Gets or sets the discovery scenario.
 */
export type SqlSitePropertiesDiscoveryScenario = (typeof SqlSitePropertiesDiscoveryScenario)[keyof typeof SqlSitePropertiesDiscoveryScenario];

export const WebAppSitePropertiesDiscoveryScenario = {
    /**
     * Migrate value.
     */
    Migrate: "Migrate",
    /**
     * DR value.
     */
    DR: "DR",
} as const;

/**
 * Gets or sets the discovery scenario.
 */
export type WebAppSitePropertiesDiscoveryScenario = (typeof WebAppSitePropertiesDiscoveryScenario)[keyof typeof WebAppSitePropertiesDiscoveryScenario];
