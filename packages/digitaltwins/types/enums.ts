export const AuthenticationType = {
    KeyBased: "KeyBased",
    IdentityBased: "IdentityBased",
} as const;

/**
 * Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const ConnectionType = {
    AzureDataExplorer: "AzureDataExplorer",
} as const;

/**
 * The type of time series connection resource.
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

export const DigitalTwinsIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The type of Managed Identity used by the DigitalTwinsInstance.
 */
export type DigitalTwinsIdentityType = (typeof DigitalTwinsIdentityType)[keyof typeof DigitalTwinsIdentityType];

export const EndpointType = {
    EventHub: "EventHub",
    EventGrid: "EventGrid",
    ServiceBus: "ServiceBus",
} as const;

/**
 * The type of Digital Twins endpoint
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * The type of managed identity used.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The status of a private endpoint connection.
 */
export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Public network access for the DigitalTwinsInstance.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RecordPropertyAndItemRemovals = {
    True: "true",
    False: "false",
} as const;

/**
 * Specifies whether or not to record twin / relationship property and item removals, including removals of indexed or keyed values (such as map entries, array elements, etc.). This feature is de-activated unless explicitly set to 'true'. Setting this property to 'true' will generate an additional column in the property events table in ADX.
 */
export type RecordPropertyAndItemRemovals = (typeof RecordPropertyAndItemRemovals)[keyof typeof RecordPropertyAndItemRemovals];
