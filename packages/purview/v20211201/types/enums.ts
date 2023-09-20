export const CredentialsType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type CredentialsType = (typeof CredentialsType)[keyof typeof CredentialsType];

export const EventHubType = {
    Notification: "Notification",
    Hook: "Hook",
} as const;

export type EventHubType = (typeof EventHubType)[keyof typeof EventHubType];

export const EventStreamingState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type EventStreamingState = (typeof EventStreamingState)[keyof typeof EventStreamingState];

export const EventStreamingType = {
    None: "None",
    Managed: "Managed",
    Azure: "Azure",
} as const;

export type EventStreamingType = (typeof EventStreamingType)[keyof typeof EventStreamingType];

export const ManagedEventHubState = {
    NotSpecified: "NotSpecified",
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ManagedEventHubState = (typeof ManagedEventHubState)[keyof typeof ManagedEventHubState];

export const ManagedResourcesPublicNetworkAccess = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ManagedResourcesPublicNetworkAccess = (typeof ManagedResourcesPublicNetworkAccess)[keyof typeof ManagedResourcesPublicNetworkAccess];

export const PublicNetworkAccess = {
    NotSpecified: "NotSpecified",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const Status = {
    Unknown: "Unknown",
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type Status = (typeof Status)[keyof typeof Status];

export const Type = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type Type = (typeof Type)[keyof typeof Type];