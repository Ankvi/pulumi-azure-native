export const AdvancedFilterOperatorType = {
    NumberIn: "NumberIn",
    NumberNotIn: "NumberNotIn",
    NumberLessThan: "NumberLessThan",
    NumberGreaterThan: "NumberGreaterThan",
    NumberLessThanOrEquals: "NumberLessThanOrEquals",
    NumberGreaterThanOrEquals: "NumberGreaterThanOrEquals",
    BoolEquals: "BoolEquals",
    StringIn: "StringIn",
    StringNotIn: "StringNotIn",
    StringBeginsWith: "StringBeginsWith",
    StringEndsWith: "StringEndsWith",
    StringContains: "StringContains",
    NumberInRange: "NumberInRange",
    NumberNotInRange: "NumberNotInRange",
    StringNotBeginsWith: "StringNotBeginsWith",
    StringNotEndsWith: "StringNotEndsWith",
    StringNotContains: "StringNotContains",
    IsNullOrUndefined: "IsNullOrUndefined",
    IsNotNull: "IsNotNull",
} as const;

export type AdvancedFilterOperatorType = (typeof AdvancedFilterOperatorType)[keyof typeof AdvancedFilterOperatorType];

export const ChannelProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
    IdleDueToMirroredPartnerTopicDeletion: "IdleDueToMirroredPartnerTopicDeletion",
} as const;

export type ChannelProvisioningState = (typeof ChannelProvisioningState)[keyof typeof ChannelProvisioningState];

export const ChannelType = {
    PartnerTopic: "PartnerTopic",
} as const;

export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

export const DataResidencyBoundary = {
    WithinGeopair: "WithinGeopair",
    WithinRegion: "WithinRegion",
} as const;

export type DataResidencyBoundary = (typeof DataResidencyBoundary)[keyof typeof DataResidencyBoundary];

export const DeadLetterEndPointType = {
    StorageBlob: "StorageBlob",
} as const;

export type DeadLetterEndPointType = (typeof DeadLetterEndPointType)[keyof typeof DeadLetterEndPointType];

export const DeliveryAttributeMappingType = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

export type DeliveryAttributeMappingType = (typeof DeliveryAttributeMappingType)[keyof typeof DeliveryAttributeMappingType];

export const EndpointType = {
    WebHook: "WebHook",
    EventHub: "EventHub",
    StorageQueue: "StorageQueue",
    HybridConnection: "HybridConnection",
    ServiceBusQueue: "ServiceBusQueue",
    ServiceBusTopic: "ServiceBusTopic",
    AzureFunction: "AzureFunction",
} as const;

export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const EventDefinitionKind = {
    Inline: "Inline",
} as const;

export type EventDefinitionKind = (typeof EventDefinitionKind)[keyof typeof EventDefinitionKind];

export const EventDeliverySchema = {
    EventGridSchema: "EventGridSchema",
    CustomInputSchema: "CustomInputSchema",
    CloudEventSchemaV1_0: "CloudEventSchemaV1_0",
} as const;

export type EventDeliverySchema = (typeof EventDeliverySchema)[keyof typeof EventDeliverySchema];

export const EventSubscriptionIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type EventSubscriptionIdentityType = (typeof EventSubscriptionIdentityType)[keyof typeof EventSubscriptionIdentityType];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InputSchema = {
    EventGridSchema: "EventGridSchema",
    CustomEventSchema: "CustomEventSchema",
    CloudEventSchemaV1_0: "CloudEventSchemaV1_0",
} as const;

export type InputSchema = (typeof InputSchema)[keyof typeof InputSchema];

export const InputSchemaMappingType = {
    Json: "Json",
} as const;

export type InputSchemaMappingType = (typeof InputSchemaMappingType)[keyof typeof InputSchemaMappingType];

export const IpActionType = {
    Allow: "Allow",
} as const;

export type IpActionType = (typeof IpActionType)[keyof typeof IpActionType];

export const PartnerConfigurationProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

export type PartnerConfigurationProvisioningState = (typeof PartnerConfigurationProvisioningState)[keyof typeof PartnerConfigurationProvisioningState];

export const PartnerTopicActivationState = {
    NeverActivated: "NeverActivated",
    Activated: "Activated",
    Deactivated: "Deactivated",
} as const;

export type PartnerTopicActivationState = (typeof PartnerTopicActivationState)[keyof typeof PartnerTopicActivationState];

export const PartnerTopicRoutingMode = {
    SourceEventAttribute: "SourceEventAttribute",
    ChannelNameHeader: "ChannelNameHeader",
} as const;

export type PartnerTopicRoutingMode = (typeof PartnerTopicRoutingMode)[keyof typeof PartnerTopicRoutingMode];

export const PersistedConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PersistedConnectionStatus = (typeof PersistedConnectionStatus)[keyof typeof PersistedConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ReadinessState = {
    NeverActivated: "NeverActivated",
    Activated: "Activated",
} as const;

export type ReadinessState = (typeof ReadinessState)[keyof typeof ReadinessState];

export const ResourceProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

export type ResourceProvisioningState = (typeof ResourceProvisioningState)[keyof typeof ResourceProvisioningState];