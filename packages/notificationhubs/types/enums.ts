export const AccessRights = {
    Manage: "Manage",
    Send: "Send",
    Listen: "Listen",
} as const;

export type AccessRights = (typeof AccessRights)[keyof typeof AccessRights];

export const NamespaceStatus = {
    Created: "Created",
    Creating: "Creating",
    Suspended: "Suspended",
    Deleting: "Deleting",
} as const;

export type NamespaceStatus = (typeof NamespaceStatus)[keyof typeof NamespaceStatus];

export const NamespaceType = {
    Messaging: "Messaging",
    NotificationHub: "NotificationHub",
} as const;

export type NamespaceType = (typeof NamespaceType)[keyof typeof NamespaceType];

export const OperationProvisioningState = {
    Unknown: "Unknown",
    InProgress: "InProgress",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Pending: "Pending",
    Disabled: "Disabled",
} as const;

export type OperationProvisioningState = (typeof OperationProvisioningState)[keyof typeof OperationProvisioningState];

export const PrivateEndpointConnectionProvisioningState = {
    Unknown: "Unknown",
    Succeeded: "Succeeded",
    Creating: "Creating",
    Updating: "Updating",
    UpdatingByProxy: "UpdatingByProxy",
    Deleting: "Deleting",
    DeletingByProxy: "DeletingByProxy",
    Deleted: "Deleted",
} as const;

export type PrivateEndpointConnectionProvisioningState = (typeof PrivateEndpointConnectionProvisioningState)[keyof typeof PrivateEndpointConnectionProvisioningState];

export const PrivateLinkConnectionStatus = {
    Disconnected: "Disconnected",
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateLinkConnectionStatus = (typeof PrivateLinkConnectionStatus)[keyof typeof PrivateLinkConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ReplicationRegion = {
    Default: "Default",
    WestUs2: "WestUs2",
    NorthEurope: "NorthEurope",
    AustraliaEast: "AustraliaEast",
    BrazilSouth: "BrazilSouth",
    SouthEastAsia: "SouthEastAsia",
    SouthAfricaNorth: "SouthAfricaNorth",
    None: "None",
} as const;

export type ReplicationRegion = (typeof ReplicationRegion)[keyof typeof ReplicationRegion];

export const SkuName = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const ZoneRedundancyPreference = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type ZoneRedundancyPreference = (typeof ZoneRedundancyPreference)[keyof typeof ZoneRedundancyPreference];
