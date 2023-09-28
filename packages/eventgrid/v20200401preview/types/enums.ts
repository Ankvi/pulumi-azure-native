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

export const Sku = {
    Basic: "Basic",
    Premium: "Premium",
} as const;

/**
 * The Sku name of the resource. The possible values are: Basic or Premium.
 */
export type Sku = (typeof Sku)[keyof typeof Sku];
