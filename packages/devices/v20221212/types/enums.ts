export const AccessRightsDescription = {
    ServiceConfig: "ServiceConfig",
    EnrollmentRead: "EnrollmentRead",
    EnrollmentWrite: "EnrollmentWrite",
    DeviceConnect: "DeviceConnect",
    RegistrationStatusRead: "RegistrationStatusRead",
    RegistrationStatusWrite: "RegistrationStatusWrite",
} as const;

/**
 * Rights that this key has.
 */
export type AccessRightsDescription = (typeof AccessRightsDescription)[keyof typeof AccessRightsDescription];

export const AllocationPolicy = {
    Hashed: "Hashed",
    GeoLatency: "GeoLatency",
    Static: "Static",
} as const;

/**
 * Allocation policy to be used by this provisioning service.
 */
export type AllocationPolicy = (typeof AllocationPolicy)[keyof typeof AllocationPolicy];

export const IotDpsSku = {
    S1: "S1",
} as const;

/**
 * Sku name.
 */
export type IotDpsSku = (typeof IotDpsSku)[keyof typeof IotDpsSku];

export const IpFilterActionType = {
    Accept: "Accept",
    Reject: "Reject",
} as const;

/**
 * The desired action for requests captured by this rule.
 */
export type IpFilterActionType = (typeof IpFilterActionType)[keyof typeof IpFilterActionType];

export const IpFilterTargetType = {
    All: "all",
    ServiceApi: "serviceApi",
    DeviceApi: "deviceApi",
} as const;

/**
 * Target for requests captured by this rule.
 */
export type IpFilterTargetType = (typeof IpFilterTargetType)[keyof typeof IpFilterTargetType];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The status of a private endpoint connection
 */
export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether requests from Public Network are allowed
 */
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

/**
 * Current state of the provisioning service.
 */
export type State = (typeof State)[keyof typeof State];
