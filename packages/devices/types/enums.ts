export const AccessRights = {
    RegistryRead: "RegistryRead",
    RegistryWrite: "RegistryWrite",
    ServiceConnect: "ServiceConnect",
    DeviceConnect: "DeviceConnect",
    RegistryRead_RegistryWrite: "RegistryRead, RegistryWrite",
    RegistryRead_ServiceConnect: "RegistryRead, ServiceConnect",
    RegistryRead_DeviceConnect: "RegistryRead, DeviceConnect",
    RegistryWrite_ServiceConnect: "RegistryWrite, ServiceConnect",
    RegistryWrite_DeviceConnect: "RegistryWrite, DeviceConnect",
    ServiceConnect_DeviceConnect: "ServiceConnect, DeviceConnect",
    RegistryRead_RegistryWrite_ServiceConnect: "RegistryRead, RegistryWrite, ServiceConnect",
    RegistryRead_RegistryWrite_DeviceConnect: "RegistryRead, RegistryWrite, DeviceConnect",
    RegistryRead_ServiceConnect_DeviceConnect: "RegistryRead, ServiceConnect, DeviceConnect",
    RegistryWrite_ServiceConnect_DeviceConnect: "RegistryWrite, ServiceConnect, DeviceConnect",
    RegistryRead_RegistryWrite_ServiceConnect_DeviceConnect: "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect",
} as const;

export type AccessRights = (typeof AccessRights)[keyof typeof AccessRights];

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

export const AuthenticationType = {
    KeyBased: "keyBased",
    IdentityBased: "identityBased",
} as const;

export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const Capabilities = {
    None: "None",
    DeviceManagement: "DeviceManagement",
} as const;

export type Capabilities = (typeof Capabilities)[keyof typeof Capabilities];

export const DefaultAction = {
    Deny: "Deny",
    Allow: "Allow",
} as const;

export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const IotDpsSku = {
    S1: "S1",
} as const;

export type IotDpsSku = (typeof IotDpsSku)[keyof typeof IotDpsSku];

export const IotHubSku = {
    F1: "F1",
    S1: "S1",
    S2: "S2",
    S3: "S3",
    B1: "B1",
    B2: "B2",
    B3: "B3",
} as const;

export type IotHubSku = (typeof IotHubSku)[keyof typeof IotHubSku];

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

export const NetworkRuleIPAction = {
    Allow: "Allow",
} as const;

export type NetworkRuleIPAction = (typeof NetworkRuleIPAction)[keyof typeof NetworkRuleIPAction];

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

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RoutingSource = {
    Invalid: "Invalid",
    DeviceMessages: "DeviceMessages",
    TwinChangeEvents: "TwinChangeEvents",
    DeviceLifecycleEvents: "DeviceLifecycleEvents",
    DeviceJobLifecycleEvents: "DeviceJobLifecycleEvents",
    DigitalTwinChangeEvents: "DigitalTwinChangeEvents",
    DeviceConnectionStateEvents: "DeviceConnectionStateEvents",
    MqttBrokerMessages: "MqttBrokerMessages",
} as const;

export type RoutingSource = (typeof RoutingSource)[keyof typeof RoutingSource];

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
