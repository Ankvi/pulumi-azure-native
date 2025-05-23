import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of a time series database connection to Azure Data Explorer with data being sent via an EventHub.
 */
export interface AzureDataExplorerConnectionPropertiesArgs {
    /**
     * The name of the Azure Data Explorer database.
     */
    adxDatabaseName: pulumi.Input<string>;
    /**
     * The URI of the Azure Data Explorer endpoint.
     */
    adxEndpointUri: pulumi.Input<string>;
    /**
     * The name of the Azure Data Explorer table used for recording relationship lifecycle events. The table will not be created if this property is left unspecified.
     */
    adxRelationshipLifecycleEventsTableName?: pulumi.Input<string>;
    /**
     * The resource ID of the Azure Data Explorer cluster.
     */
    adxResourceId: pulumi.Input<string>;
    /**
     * The name of the Azure Data Explorer table used for storing updates to properties of twins and relationships. Defaults to AdtPropertyEvents.
     */
    adxTableName?: pulumi.Input<string>;
    /**
     * The name of the Azure Data Explorer table used for recording twin lifecycle events. The table will not be created if this property is left unspecified.
     */
    adxTwinLifecycleEventsTableName?: pulumi.Input<string>;
    /**
     * The type of time series connection resource.
     * Expected value is 'AzureDataExplorer'.
     */
    connectionType: pulumi.Input<"AzureDataExplorer">;
    /**
     * The EventHub consumer group to use when ADX reads from EventHub. Defaults to $Default.
     */
    eventHubConsumerGroup?: pulumi.Input<string>;
    /**
     * The URL of the EventHub namespace for identity-based authentication. It must include the protocol sb://
     */
    eventHubEndpointUri: pulumi.Input<string>;
    /**
     * The EventHub name in the EventHub namespace for identity-based authentication.
     */
    eventHubEntityPath: pulumi.Input<string>;
    /**
     * The resource ID of the EventHub namespace.
     */
    eventHubNamespaceResourceId: pulumi.Input<string>;
    /**
     * Managed identity properties for the time series database connection resource.
     */
    identity?: pulumi.Input<ManagedIdentityReferenceArgs>;
    /**
     * Specifies whether or not to record twin / relationship property and item removals, including removals of indexed or keyed values (such as map entries, array elements, etc.). This feature is de-activated unless explicitly set to 'true'. Setting this property to 'true' will generate an additional column in the property events table in ADX.
     */
    recordPropertyAndItemRemovals?: pulumi.Input<string | enums.RecordPropertyAndItemRemovals>;
}
/**
 * azureDataExplorerConnectionPropertiesArgsProvideDefaults sets the appropriate defaults for AzureDataExplorerConnectionPropertiesArgs
 */
export function azureDataExplorerConnectionPropertiesArgsProvideDefaults(val: AzureDataExplorerConnectionPropertiesArgs): AzureDataExplorerConnectionPropertiesArgs {
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
export interface ConnectionPropertiesArgs {
    /**
     * The list of group ids for the private endpoint connection.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The connection state.
     */
    privateLinkServiceConnectionState?: pulumi.Input<ConnectionPropertiesPrivateLinkServiceConnectionStateArgs>;
}

/**
 * The connection state.
 */
export interface ConnectionPropertiesPrivateLinkServiceConnectionStateArgs {
    /**
     * Actions required for a private endpoint connection.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The description for the current state of a private endpoint connection.
     */
    description: pulumi.Input<string>;
    /**
     * The status of a private endpoint connection.
     */
    status: pulumi.Input<string | enums.PrivateLinkServiceConnectionStatus>;
}

/**
 * The managed identity for the DigitalTwinsInstance.
 */
export interface DigitalTwinsIdentityArgs {
    /**
     * The type of Managed Identity used by the DigitalTwinsInstance.
     */
    type?: pulumi.Input<string | enums.DigitalTwinsIdentityType>;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     * .
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties related to EventGrid.
 */
export interface EventGridArgs {
    /**
     * EventGrid secondary accesskey. Will be obfuscated during read.
     */
    accessKey1: pulumi.Input<string>;
    /**
     * EventGrid secondary accesskey. Will be obfuscated during read.
     */
    accessKey2?: pulumi.Input<string>;
    /**
     * Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * Dead letter storage secret for key-based authentication. Will be obfuscated during read.
     */
    deadLetterSecret?: pulumi.Input<string>;
    /**
     * Dead letter storage URL for identity-based authentication.
     */
    deadLetterUri?: pulumi.Input<string>;
    /**
     * The type of Digital Twins endpoint
     * Expected value is 'EventGrid'.
     */
    endpointType: pulumi.Input<"EventGrid">;
    /**
     * Managed identity properties for the endpoint.
     */
    identity?: pulumi.Input<ManagedIdentityReferenceArgs>;
    /**
     * EventGrid Topic Endpoint.
     */
    topicEndpoint: pulumi.Input<string>;
}

/**
 * Properties related to EventHub.
 */
export interface EventHubArgs {
    /**
     * Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
     */
    connectionStringPrimaryKey?: pulumi.Input<string>;
    /**
     * SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
     */
    connectionStringSecondaryKey?: pulumi.Input<string>;
    /**
     * Dead letter storage secret for key-based authentication. Will be obfuscated during read.
     */
    deadLetterSecret?: pulumi.Input<string>;
    /**
     * Dead letter storage URL for identity-based authentication.
     */
    deadLetterUri?: pulumi.Input<string>;
    /**
     * The type of Digital Twins endpoint
     * Expected value is 'EventHub'.
     */
    endpointType: pulumi.Input<"EventHub">;
    /**
     * The URL of the EventHub namespace for identity-based authentication. It must include the protocol 'sb://'.
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * The EventHub name in the EventHub namespace for identity-based authentication.
     */
    entityPath?: pulumi.Input<string>;
    /**
     * Managed identity properties for the endpoint.
     */
    identity?: pulumi.Input<ManagedIdentityReferenceArgs>;
}

/**
 * The properties of the Managed Identity.
 */
export interface ManagedIdentityReferenceArgs {
    /**
     * The type of managed identity used.
     */
    type?: pulumi.Input<string | enums.IdentityType>;
    /**
     * The user identity ARM resource id if the managed identity type is 'UserAssigned'.
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * The private endpoint connection of a Digital Twin.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The connection properties.
     */
    properties: pulumi.Input<ConnectionPropertiesArgs>;
}

/**
 * Properties related to ServiceBus.
 */
export interface ServiceBusArgs {
    /**
     * Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * Dead letter storage secret for key-based authentication. Will be obfuscated during read.
     */
    deadLetterSecret?: pulumi.Input<string>;
    /**
     * Dead letter storage URL for identity-based authentication.
     */
    deadLetterUri?: pulumi.Input<string>;
    /**
     * The type of Digital Twins endpoint
     * Expected value is 'ServiceBus'.
     */
    endpointType: pulumi.Input<"ServiceBus">;
    /**
     * The URL of the ServiceBus namespace for identity-based authentication. It must include the protocol 'sb://'.
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * The ServiceBus Topic name for identity-based authentication.
     */
    entityPath?: pulumi.Input<string>;
    /**
     * Managed identity properties for the endpoint.
     */
    identity?: pulumi.Input<ManagedIdentityReferenceArgs>;
    /**
     * PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
     */
    secondaryConnectionString?: pulumi.Input<string>;
}
