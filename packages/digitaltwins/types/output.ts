import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of a time series database connection to Azure Data Explorer with data being sent via an EventHub.
 */
export interface AzureDataExplorerConnectionPropertiesResponse {
    /**
     * The name of the Azure Data Explorer database.
     */
    adxDatabaseName: string;
    /**
     * The URI of the Azure Data Explorer endpoint.
     */
    adxEndpointUri: string;
    /**
     * The name of the Azure Data Explorer table used for recording relationship lifecycle events. The table will not be created if this property is left unspecified.
     */
    adxRelationshipLifecycleEventsTableName?: string;
    /**
     * The resource ID of the Azure Data Explorer cluster.
     */
    adxResourceId: string;
    /**
     * The name of the Azure Data Explorer table used for storing updates to properties of twins and relationships. Defaults to AdtPropertyEvents.
     */
    adxTableName?: string;
    /**
     * The name of the Azure Data Explorer table used for recording twin lifecycle events. The table will not be created if this property is left unspecified.
     */
    adxTwinLifecycleEventsTableName?: string;
    /**
     * The type of time series connection resource.
     * Expected value is 'AzureDataExplorer'.
     */
    connectionType: "AzureDataExplorer";
    /**
     * The EventHub consumer group to use when ADX reads from EventHub. Defaults to $Default.
     */
    eventHubConsumerGroup?: string;
    /**
     * The URL of the EventHub namespace for identity-based authentication. It must include the protocol sb://
     */
    eventHubEndpointUri: string;
    /**
     * The EventHub name in the EventHub namespace for identity-based authentication.
     */
    eventHubEntityPath: string;
    /**
     * The resource ID of the EventHub namespace.
     */
    eventHubNamespaceResourceId: string;
    /**
     * Managed identity properties for the time series database connection resource.
     */
    identity?: ManagedIdentityReferenceResponse;
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * Specifies whether or not to record twin / relationship property and item removals, including removals of indexed or keyed values (such as map entries, array elements, etc.). This feature is de-activated unless explicitly set to 'true'. Setting this property to 'true' will generate an additional column in the property events table in ADX.
     */
    recordPropertyAndItemRemovals?: string;
}
/**
 * azureDataExplorerConnectionPropertiesResponseProvideDefaults sets the appropriate defaults for AzureDataExplorerConnectionPropertiesResponse
 */
export function azureDataExplorerConnectionPropertiesResponseProvideDefaults(val: AzureDataExplorerConnectionPropertiesResponse): AzureDataExplorerConnectionPropertiesResponse {
    return {
        ...val,
        adxTableName: (val.adxTableName) ?? "AdtPropertyEvents",
        eventHubConsumerGroup: (val.eventHubConsumerGroup) ?? "$Default",
        recordPropertyAndItemRemovals: (val.recordPropertyAndItemRemovals) ?? "false",
    };
}

/**
 * The properties of a private endpoint connection.
 */
export interface ConnectionPropertiesResponse {
    /**
     * The list of group ids for the private endpoint connection.
     */
    groupIds?: string[];
    /**
     * The private endpoint.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * The connection state.
     */
    privateLinkServiceConnectionState?: ConnectionPropertiesResponsePrivateLinkServiceConnectionState;
    /**
     * The provisioning state.
     */
    provisioningState: string;
}

/**
 * The connection state.
 */
export interface ConnectionPropertiesResponsePrivateLinkServiceConnectionState {
    /**
     * Actions required for a private endpoint connection.
     */
    actionsRequired?: string;
    /**
     * The description for the current state of a private endpoint connection.
     */
    description: string;
    /**
     * The status of a private endpoint connection.
     */
    status: string;
}

/**
 * The managed identity for the DigitalTwinsInstance.
 */
export interface DigitalTwinsIdentityResponse {
    /**
     * The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
     */
    principalId: string;
    /**
     * The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
     */
    tenantId: string;
    /**
     * The type of Managed Identity used by the DigitalTwinsInstance.
     */
    type?: string;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     * .
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Properties related to EventGrid.
 */
export interface EventGridResponse {
    /**
     * EventGrid secondary accesskey. Will be obfuscated during read.
     */
    accessKey1: string;
    /**
     * EventGrid secondary accesskey. Will be obfuscated during read.
     */
    accessKey2?: string;
    /**
     * Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
     */
    authenticationType?: string;
    /**
     * Time when the Endpoint was added to DigitalTwinsInstance.
     */
    createdTime: string;
    /**
     * Dead letter storage secret for key-based authentication. Will be obfuscated during read.
     */
    deadLetterSecret?: string;
    /**
     * Dead letter storage URL for identity-based authentication.
     */
    deadLetterUri?: string;
    /**
     * The type of Digital Twins endpoint
     * Expected value is 'EventGrid'.
     */
    endpointType: "EventGrid";
    /**
     * Managed identity properties for the endpoint.
     */
    identity?: ManagedIdentityReferenceResponse;
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * EventGrid Topic Endpoint.
     */
    topicEndpoint: string;
}

/**
 * Properties related to EventHub.
 */
export interface EventHubResponse {
    /**
     * Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
     */
    authenticationType?: string;
    /**
     * PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
     */
    connectionStringPrimaryKey?: string;
    /**
     * SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
     */
    connectionStringSecondaryKey?: string;
    /**
     * Time when the Endpoint was added to DigitalTwinsInstance.
     */
    createdTime: string;
    /**
     * Dead letter storage secret for key-based authentication. Will be obfuscated during read.
     */
    deadLetterSecret?: string;
    /**
     * Dead letter storage URL for identity-based authentication.
     */
    deadLetterUri?: string;
    /**
     * The type of Digital Twins endpoint
     * Expected value is 'EventHub'.
     */
    endpointType: "EventHub";
    /**
     * The URL of the EventHub namespace for identity-based authentication. It must include the protocol 'sb://'.
     */
    endpointUri?: string;
    /**
     * The EventHub name in the EventHub namespace for identity-based authentication.
     */
    entityPath?: string;
    /**
     * Managed identity properties for the endpoint.
     */
    identity?: ManagedIdentityReferenceResponse;
    /**
     * The provisioning state.
     */
    provisioningState: string;
}

/**
 * The properties of the Managed Identity.
 */
export interface ManagedIdentityReferenceResponse {
    /**
     * The type of managed identity used.
     */
    type?: string;
    /**
     * The user identity ARM resource id if the managed identity type is 'UserAssigned'.
     */
    userAssignedIdentity?: string;
}

/**
 * The private endpoint connection of a Digital Twin.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The resource identifier.
     */
    id: string;
    /**
     * The resource name.
     */
    name: string;
    /**
     * The connection properties.
     */
    properties: ConnectionPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the private endpoint connection.
     */
    systemData: SystemDataResponse;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * The private endpoint property of a private endpoint connection.
 */
export interface PrivateEndpointResponse {
    /**
     * The resource identifier.
     */
    id: string;
}

/**
 * Properties related to ServiceBus.
 */
export interface ServiceBusResponse {
    /**
     * Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
     */
    authenticationType?: string;
    /**
     * Time when the Endpoint was added to DigitalTwinsInstance.
     */
    createdTime: string;
    /**
     * Dead letter storage secret for key-based authentication. Will be obfuscated during read.
     */
    deadLetterSecret?: string;
    /**
     * Dead letter storage URL for identity-based authentication.
     */
    deadLetterUri?: string;
    /**
     * The type of Digital Twins endpoint
     * Expected value is 'ServiceBus'.
     */
    endpointType: "ServiceBus";
    /**
     * The URL of the ServiceBus namespace for identity-based authentication. It must include the protocol 'sb://'.
     */
    endpointUri?: string;
    /**
     * The ServiceBus Topic name for identity-based authentication.
     */
    entityPath?: string;
    /**
     * Managed identity properties for the endpoint.
     */
    identity?: ManagedIdentityReferenceResponse;
    /**
     * PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
     */
    primaryConnectionString?: string;
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
     */
    secondaryConnectionString?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * The information about the user assigned identity.
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client id of the User Assigned Identity Resource.
     */
    clientId: string;
    /**
     * The object id of the User Assigned Identity Resource.
     */
    principalId: string;
}
