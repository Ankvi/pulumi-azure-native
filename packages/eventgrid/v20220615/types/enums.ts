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

/**
 * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
 */
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

/**
 * Provisioning state of the channel.
 */
export type ChannelProvisioningState = (typeof ChannelProvisioningState)[keyof typeof ChannelProvisioningState];

export const ChannelType = {
    PartnerTopic: "PartnerTopic",
} as const;

/**
 * The type of the event channel which represents the direction flow of events.
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

export const DataResidencyBoundary = {
    WithinGeopair: "WithinGeopair",
    WithinRegion: "WithinRegion",
} as const;

/**
 * Data Residency Boundary of the resource.
 */
export type DataResidencyBoundary = (typeof DataResidencyBoundary)[keyof typeof DataResidencyBoundary];

export const DeadLetterEndPointType = {
    StorageBlob: "StorageBlob",
} as const;

/**
 * Type of the endpoint for the dead letter destination
 */
export type DeadLetterEndPointType = (typeof DeadLetterEndPointType)[keyof typeof DeadLetterEndPointType];

export const DeliveryAttributeMappingType = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * Type of the delivery attribute or header name.
 */
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

/**
 * Type of the endpoint for the event subscription destination.
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const EventDefinitionKind = {
    Inline: "Inline",
} as const;

/**
 * The kind of event type used.
 */
export type EventDefinitionKind = (typeof EventDefinitionKind)[keyof typeof EventDefinitionKind];

export const EventDeliverySchema = {
    EventGridSchema: "EventGridSchema",
    CustomInputSchema: "CustomInputSchema",
    CloudEventSchemaV1_0: "CloudEventSchemaV1_0",
} as const;

/**
 * The event delivery schema for the event subscription.
 */
export type EventDeliverySchema = (typeof EventDeliverySchema)[keyof typeof EventDeliverySchema];

export const EventSubscriptionIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
 */
export type EventSubscriptionIdentityType = (typeof EventSubscriptionIdentityType)[keyof typeof EventSubscriptionIdentityType];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InputSchema = {
    EventGridSchema: "EventGridSchema",
    CustomEventSchema: "CustomEventSchema",
    CloudEventSchemaV1_0: "CloudEventSchemaV1_0",
} as const;

/**
 * This determines the format that Event Grid should expect for incoming events published to the topic.
 */
export type InputSchema = (typeof InputSchema)[keyof typeof InputSchema];

export const InputSchemaMappingType = {
    Json: "Json",
} as const;

/**
 * Type of the custom mapping
 */
export type InputSchemaMappingType = (typeof InputSchemaMappingType)[keyof typeof InputSchemaMappingType];

export const IpActionType = {
    Allow: "Allow",
} as const;

/**
 * Action to perform based on the match or no match of the IpMask.
 */
export type IpActionType = (typeof IpActionType)[keyof typeof IpActionType];

export const PartnerConfigurationProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

/**
 * Provisioning state of the partner configuration.
 */
export type PartnerConfigurationProvisioningState = (typeof PartnerConfigurationProvisioningState)[keyof typeof PartnerConfigurationProvisioningState];

export const PartnerTopicActivationState = {
    NeverActivated: "NeverActivated",
    Activated: "Activated",
    Deactivated: "Deactivated",
} as const;

/**
 * Activation state of the partner topic.
 */
export type PartnerTopicActivationState = (typeof PartnerTopicActivationState)[keyof typeof PartnerTopicActivationState];

export const PartnerTopicRoutingMode = {
    SourceEventAttribute: "SourceEventAttribute",
    ChannelNameHeader: "ChannelNameHeader",
} as const;

/**
 * This determines if events published to this partner namespace should use the source attribute in the event payload
 * or use the channel name in the header when matching to the partner topic. If none is specified, source attribute routing will be used to match the partner topic.
 */
export type PartnerTopicRoutingMode = (typeof PartnerTopicRoutingMode)[keyof typeof PartnerTopicRoutingMode];

export const PersistedConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Status of the connection.
 */
export type PersistedConnectionStatus = (typeof PersistedConnectionStatus)[keyof typeof PersistedConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * This determines if traffic is allowed over public network. By default it is enabled. 
 * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ReadinessState = {
    NeverActivated: "NeverActivated",
    Activated: "Activated",
} as const;

/**
 * The readiness state of the corresponding partner topic.
 */
export type ReadinessState = (typeof ReadinessState)[keyof typeof ReadinessState];

export const ResourceProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

/**
 * Provisioning state of the Private Endpoint Connection.
 */
export type ResourceProvisioningState = (typeof ResourceProvisioningState)[keyof typeof ResourceProvisioningState];
