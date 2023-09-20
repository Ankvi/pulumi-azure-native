export const AccessRightsDescription = {
    ServiceConfig: "ServiceConfig",
    EnrollmentRead: "EnrollmentRead",
    EnrollmentWrite: "EnrollmentWrite",
    DeviceConnect: "DeviceConnect",
    RegistrationStatusRead: "RegistrationStatusRead",
    RegistrationStatusWrite: "RegistrationStatusWrite",
} as const;

export type AccessRightsDescription = (typeof AccessRightsDescription)[keyof typeof AccessRightsDescription];

export const AllocationPolicy = {
    Hashed: "Hashed",
    GeoLatency: "GeoLatency",
    Static: "Static",
} as const;

export type AllocationPolicy = (typeof AllocationPolicy)[keyof typeof AllocationPolicy];

export const IotDpsSku = {
    S1: "S1",
} as const;

export type IotDpsSku = (typeof IotDpsSku)[keyof typeof IotDpsSku];

export const IpFilterActionType = {
    Accept: "Accept",
    Reject: "Reject",
} as const;

export type IpFilterActionType = (typeof IpFilterActionType)[keyof typeof IpFilterActionType];

export const IpFilterTargetType = {
    All: "all",
    ServiceApi: "serviceApi",
    DeviceApi: "deviceApi",
} as const;

export type IpFilterTargetType = (typeof IpFilterTargetType)[keyof typeof IpFilterTargetType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const State = {
    Activating: "Activating",
    Active: "Active",
    Deleting: "Deleting",
    Deleted: "Deleted",
    ActivationFailed: "ActivationFailed",
    DeletionFailed: "DeletionFailed",
    Transitioning: "Transitioning",
    Suspending: "Suspending",
    Suspended: "Suspended",
    Resuming: "Resuming",
    FailingOver: "FailingOver",
    FailoverFailed: "FailoverFailed",
} as const;

export type State = (typeof State)[keyof typeof State];