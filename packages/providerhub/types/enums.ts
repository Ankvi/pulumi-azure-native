export const EndpointType = {
    NotSpecified: "NotSpecified",
    Canary: "Canary",
    Production: "Production",
    TestInProduction: "TestInProduction",
} as const;

export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const ExtensionCategory = {
    NotSpecified: "NotSpecified",
    ResourceCreationValidate: "ResourceCreationValidate",
    ResourceCreationBegin: "ResourceCreationBegin",
    ResourceCreationCompleted: "ResourceCreationCompleted",
    ResourceReadValidate: "ResourceReadValidate",
    ResourceReadBegin: "ResourceReadBegin",
    ResourcePatchValidate: "ResourcePatchValidate",
    ResourcePatchCompleted: "ResourcePatchCompleted",
    ResourceDeletionValidate: "ResourceDeletionValidate",
    ResourceDeletionBegin: "ResourceDeletionBegin",
    ResourceDeletionCompleted: "ResourceDeletionCompleted",
    ResourcePostAction: "ResourcePostAction",
    SubscriptionLifecycleNotification: "SubscriptionLifecycleNotification",
    ResourcePatchBegin: "ResourcePatchBegin",
    ResourceMoveBegin: "ResourceMoveBegin",
    ResourceMoveCompleted: "ResourceMoveCompleted",
} as const;

export type ExtensionCategory = (typeof ExtensionCategory)[keyof typeof ExtensionCategory];

export const ExtensionOptionType = {
    NotSpecified: "NotSpecified",
    DoNotMergeExistingReadOnlyAndSecretProperties: "DoNotMergeExistingReadOnlyAndSecretProperties",
    IncludeInternalMetadata: "IncludeInternalMetadata",
} as const;

export type ExtensionOptionType = (typeof ExtensionOptionType)[keyof typeof ExtensionOptionType];

export const FeaturesPolicy = {
    Any: "Any",
    All: "All",
} as const;

export type FeaturesPolicy = (typeof FeaturesPolicy)[keyof typeof FeaturesPolicy];

export const IdentityManagementTypes = {
    NotSpecified: "NotSpecified",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    Actor: "Actor",
    DelegatedResourceIdentity: "DelegatedResourceIdentity",
} as const;

export type IdentityManagementTypes = (typeof IdentityManagementTypes)[keyof typeof IdentityManagementTypes];

export const LoggingDetails = {
    None: "None",
    Body: "Body",
} as const;

export type LoggingDetails = (typeof LoggingDetails)[keyof typeof LoggingDetails];

export const LoggingDirections = {
    None: "None",
    Request: "Request",
    Response: "Response",
} as const;

export type LoggingDirections = (typeof LoggingDirections)[keyof typeof LoggingDirections];

export const MessageScope = {
    NotSpecified: "NotSpecified",
    RegisteredSubscriptions: "RegisteredSubscriptions",
} as const;

export type MessageScope = (typeof MessageScope)[keyof typeof MessageScope];

export const NotificationMode = {
    NotSpecified: "NotSpecified",
    EventHub: "EventHub",
    WebHook: "WebHook",
} as const;

export type NotificationMode = (typeof NotificationMode)[keyof typeof NotificationMode];

export const OptInHeaderType = {
    NotSpecified: "NotSpecified",
    SignedUserToken: "SignedUserToken",
    ClientGroupMembership: "ClientGroupMembership",
    SignedAuxiliaryTokens: "SignedAuxiliaryTokens",
    UnboundedClientGroupMembership: "UnboundedClientGroupMembership",
} as const;

export type OptInHeaderType = (typeof OptInHeaderType)[keyof typeof OptInHeaderType];

export const Policy = {
    NotSpecified: "NotSpecified",
    SynchronizeBeginExtension: "SynchronizeBeginExtension",
} as const;

export type Policy = (typeof Policy)[keyof typeof Policy];

export const PreflightOption = {
    None: "None",
    ContinueDeploymentOnFailure: "ContinueDeploymentOnFailure",
    DefaultValidationOnly: "DefaultValidationOnly",
} as const;

export type PreflightOption = (typeof PreflightOption)[keyof typeof PreflightOption];

export const ProvisioningState = {
    NotSpecified: "NotSpecified",
    Accepted: "Accepted",
    Running: "Running",
    Creating: "Creating",
    Created: "Created",
    Deleting: "Deleting",
    Deleted: "Deleted",
    Canceled: "Canceled",
    Failed: "Failed",
    Succeeded: "Succeeded",
    MovingResources: "MovingResources",
    TransientFailure: "TransientFailure",
    RolloutInProgress: "RolloutInProgress",
} as const;

export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const Readiness = {
    ClosingDown: "ClosingDown",
    Deprecated: "Deprecated",
    GA: "GA",
    InDevelopment: "InDevelopment",
    InternalOnly: "InternalOnly",
    PrivatePreview: "PrivatePreview",
    PublicPreview: "PublicPreview",
    RemovedFromARM: "RemovedFromARM",
    Retired: "Retired",
} as const;

export type Readiness = (typeof Readiness)[keyof typeof Readiness];

export const Regionality = {
    NotSpecified: "NotSpecified",
    Global: "Global",
    Regional: "Regional",
} as const;

export type Regionality = (typeof Regionality)[keyof typeof Regionality];

export const ResourceDeletionPolicy = {
    NotSpecified: "NotSpecified",
    CascadeDeleteAll: "CascadeDeleteAll",
    CascadeDeleteProxyOnlyChildren: "CascadeDeleteProxyOnlyChildren",
} as const;

export type ResourceDeletionPolicy = (typeof ResourceDeletionPolicy)[keyof typeof ResourceDeletionPolicy];

export const ResourceProviderCapabilitiesEffect = {
    NotSpecified: "NotSpecified",
    Allow: "Allow",
    Disallow: "Disallow",
} as const;

export type ResourceProviderCapabilitiesEffect = (typeof ResourceProviderCapabilitiesEffect)[keyof typeof ResourceProviderCapabilitiesEffect];

export const ResourceProviderType = {
    NotSpecified: "NotSpecified",
    Internal: "Internal",
    External: "External",
    Hidden: "Hidden",
    RegistrationFree: "RegistrationFree",
    LegacyRegistrationRequired: "LegacyRegistrationRequired",
    TenantOnly: "TenantOnly",
    AuthorizationFree: "AuthorizationFree",
} as const;

export type ResourceProviderType = (typeof ResourceProviderType)[keyof typeof ResourceProviderType];

export const RoutingType = {
    Default: "Default",
    ProxyOnly: "ProxyOnly",
    HostBased: "HostBased",
    Extension: "Extension",
    Tenant: "Tenant",
    Fanout: "Fanout",
    LocationBased: "LocationBased",
    Failover: "Failover",
    CascadeExtension: "CascadeExtension",
} as const;

export type RoutingType = (typeof RoutingType)[keyof typeof RoutingType];

export const SkuScaleType = {
    None: "None",
    Manual: "Manual",
    Automatic: "Automatic",
} as const;

export type SkuScaleType = (typeof SkuScaleType)[keyof typeof SkuScaleType];

export const SubscriptionNotificationOperation = {
    NotDefined: "NotDefined",
    DeleteAllResources: "DeleteAllResources",
    SoftDeleteAllResources: "SoftDeleteAllResources",
    NoOp: "NoOp",
    BillingCancellation: "BillingCancellation",
    UndoSoftDelete: "UndoSoftDelete",
} as const;

export type SubscriptionNotificationOperation = (typeof SubscriptionNotificationOperation)[keyof typeof SubscriptionNotificationOperation];

export const SubscriptionReregistrationResult = {
    NotApplicable: "NotApplicable",
    ConditionalUpdate: "ConditionalUpdate",
    ForcedUpdate: "ForcedUpdate",
    Failed: "Failed",
} as const;

export type SubscriptionReregistrationResult = (typeof SubscriptionReregistrationResult)[keyof typeof SubscriptionReregistrationResult];

export const SubscriptionState = {
    NotDefined: "NotDefined",
    Enabled: "Enabled",
    Warned: "Warned",
    PastDue: "PastDue",
    Disabled: "Disabled",
    Deleted: "Deleted",
} as const;

export type SubscriptionState = (typeof SubscriptionState)[keyof typeof SubscriptionState];

export const SubscriptionTransitioningState = {
    Registered: "Registered",
    Unregistered: "Unregistered",
    Warned: "Warned",
    Suspended: "Suspended",
    Deleted: "Deleted",
    WarnedToRegistered: "WarnedToRegistered",
    WarnedToSuspended: "WarnedToSuspended",
    WarnedToDeleted: "WarnedToDeleted",
    WarnedToUnregistered: "WarnedToUnregistered",
    SuspendedToRegistered: "SuspendedToRegistered",
    SuspendedToWarned: "SuspendedToWarned",
    SuspendedToDeleted: "SuspendedToDeleted",
    SuspendedToUnregistered: "SuspendedToUnregistered",
} as const;

export type SubscriptionTransitioningState = (typeof SubscriptionTransitioningState)[keyof typeof SubscriptionTransitioningState];

export const ThrottlingMetricType = {
    NotSpecified: "NotSpecified",
    NumberOfRequests: "NumberOfRequests",
    NumberOfResources: "NumberOfResources",
} as const;

export type ThrottlingMetricType = (typeof ThrottlingMetricType)[keyof typeof ThrottlingMetricType];

export const TrafficRegionCategory = {
    NotSpecified: "NotSpecified",
    Canary: "Canary",
    LowTraffic: "LowTraffic",
    MediumTraffic: "MediumTraffic",
    HighTraffic: "HighTraffic",
    None: "None",
    RestOfTheWorldGroupOne: "RestOfTheWorldGroupOne",
    RestOfTheWorldGroupTwo: "RestOfTheWorldGroupTwo",
} as const;

export type TrafficRegionCategory = (typeof TrafficRegionCategory)[keyof typeof TrafficRegionCategory];
