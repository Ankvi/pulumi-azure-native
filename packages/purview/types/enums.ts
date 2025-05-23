export const AccountSkuName = {
    Standard: "Standard",
    Free: "Free",
} as const;

/**
 * Gets or sets the sku name.
 */
export type AccountSkuName = (typeof AccountSkuName)[keyof typeof AccountSkuName];

export const EventHubType = {
    Notification: "Notification",
    Hook: "Hook",
} as const;

/**
 * The event hub type.
 */
export type EventHubType = (typeof EventHubType)[keyof typeof EventHubType];

export const EventStreamingState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The state of the event streaming service
 */
export type EventStreamingState = (typeof EventStreamingState)[keyof typeof EventStreamingState];

export const EventStreamingType = {
    None: "None",
    Managed: "Managed",
    Azure: "Azure",
} as const;

/**
 * The event streaming service type
 */
export type EventStreamingType = (typeof EventStreamingType)[keyof typeof EventStreamingType];

export const KafkaConfigurationIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Identity Type.
 */
export type KafkaConfigurationIdentityType = (typeof KafkaConfigurationIdentityType)[keyof typeof KafkaConfigurationIdentityType];

export const ManagedEventHubState = {
    NotSpecified: "NotSpecified",
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Gets or sets the state of managed eventhub. If enabled managed eventhub will be created, if disabled the managed eventhub will be removed.
 */
export type ManagedEventHubState = (typeof ManagedEventHubState)[keyof typeof ManagedEventHubState];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Identity Type
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const PrivateEndpointConnectionStatus = {
    Unknown: "Unknown",
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The status.
 */
export type PrivateEndpointConnectionStatus = (typeof PrivateEndpointConnectionStatus)[keyof typeof PrivateEndpointConnectionStatus];

export const PublicNetworkAccess = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Gets or sets the public network access.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const TenantEndpointState = {
    NotSpecified: "NotSpecified",
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Gets or sets the state of tenant endpoint.
 */
export type TenantEndpointState = (typeof TenantEndpointState)[keyof typeof TenantEndpointState];
