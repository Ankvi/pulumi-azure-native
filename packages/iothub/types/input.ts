import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface ArmIdentityArgs {
    /**
     * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The description of an X509 CA Certificate.
 */
export interface CertificatePropertiesArgs {
    /**
     * The certificate content
     */
    certificate?: pulumi.Input<string>;
    /**
     * Determines whether certificate has been verified.
     */
    isVerified?: pulumi.Input<boolean>;
}

/**
 * The IoT hub cloud-to-device messaging properties.
 */
export interface CloudToDevicePropertiesArgs {
    /**
     * The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    defaultTtlAsIso8601?: pulumi.Input<string>;
    /**
     * The properties of the feedback queue for cloud-to-device messages.
     */
    feedback?: pulumi.Input<FeedbackPropertiesArgs>;
    /**
     * The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    maxDeliveryCount?: pulumi.Input<number>;
}

/**
 * The properties of an enrichment that your IoT hub applies to messages delivered to endpoints.
 */
export interface EnrichmentPropertiesArgs {
    /**
     * The list of endpoints for which the enrichment is applied to the message.
     */
    endpointNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The key or name for the enrichment property.
     */
    key: pulumi.Input<string>;
    /**
     * The value for the enrichment property.
     */
    value: pulumi.Input<string>;
}

/**
 * The EventHub consumer group name.
 */
export interface EventHubConsumerGroupNameArgs {
    /**
     * EventHub consumer group name
     */
    name: pulumi.Input<string>;
}

/**
 * The properties of the provisioned Event Hub-compatible endpoint used by the IoT hub.
 */
export interface EventHubPropertiesArgs {
    /**
     * The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages.
     */
    partitionCount?: pulumi.Input<number>;
    /**
     * The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages
     */
    retentionTimeInDays?: pulumi.Input<number>;
}

/**
 * The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint.
 */
export interface FallbackRoutePropertiesArgs {
    /**
     * The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
     */
    condition?: pulumi.Input<string>;
    /**
     * The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed.
     */
    endpointNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Used to specify whether the fallback route is enabled.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The source to which the routing rule is to be applied to. For example, DeviceMessages
     */
    source: pulumi.Input<string | enums.RoutingSource>;
}

/**
 * The properties of the feedback queue for cloud-to-device messages.
 */
export interface FeedbackPropertiesArgs {
    /**
     * The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    lockDurationAsIso8601?: pulumi.Input<string>;
    /**
     * The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    maxDeliveryCount?: pulumi.Input<number>;
    /**
     * The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    ttlAsIso8601?: pulumi.Input<string>;
}

/**
 * The properties of an IoT hub.
 */
export interface IotHubPropertiesArgs {
    /**
     * List of allowed FQDNs(Fully Qualified Domain Name) for egress from Iot Hub.
     */
    allowedFqdnList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The shared access policies you can use to secure a connection to the IoT hub.
     */
    authorizationPolicies?: pulumi.Input<pulumi.Input<SharedAccessSignatureAuthorizationRuleArgs>[]>;
    /**
     * The IoT hub cloud-to-device messaging properties.
     */
    cloudToDevice?: pulumi.Input<CloudToDevicePropertiesArgs>;
    /**
     * IoT hub comments.
     */
    comments?: pulumi.Input<string>;
    /**
     * If true, all device(including Edge devices but excluding modules) scoped SAS keys cannot be used for authentication.
     */
    disableDeviceSAS?: pulumi.Input<boolean>;
    /**
     * If true, SAS tokens with Iot hub scoped SAS keys cannot be used for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * If true, all module scoped SAS keys cannot be used for authentication.
     */
    disableModuleSAS?: pulumi.Input<boolean>;
    /**
     * This property when set to true, will enable data residency, thus, disabling disaster recovery.
     */
    enableDataResidency?: pulumi.Input<boolean>;
    /**
     * If True, file upload notifications are enabled.
     */
    enableFileUploadNotifications?: pulumi.Input<boolean>;
    /**
     * The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
     */
    eventHubEndpoints?: pulumi.Input<{[key: string]: pulumi.Input<EventHubPropertiesArgs>}>;
    /**
     * The capabilities and features enabled for the IoT hub.
     */
    features?: pulumi.Input<string | enums.Capabilities>;
    /**
     * The IP filter rules.
     */
    ipFilterRules?: pulumi.Input<pulumi.Input<IpFilterRuleArgs>[]>;
    /**
     * The messaging endpoint properties for the file upload notification queue.
     */
    messagingEndpoints?: pulumi.Input<{[key: string]: pulumi.Input<MessagingEndpointPropertiesArgs>}>;
    /**
     * Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected.
     */
    minTlsVersion?: pulumi.Input<string>;
    /**
     * Network Rule Set Properties of IotHub
     */
    networkRuleSets?: pulumi.Input<NetworkRuleSetPropertiesArgs>;
    /**
     * Private endpoint connections created on this IotHub
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<PrivateEndpointConnectionArgs>[]>;
    /**
     * Whether requests from Public Network are allowed
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
    /**
     * If true, egress from IotHub will be restricted to only the allowed FQDNs that are configured via allowedFqdnList.
     */
    restrictOutboundNetworkAccess?: pulumi.Input<boolean>;
    /**
     * The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
     */
    routing?: pulumi.Input<RoutingPropertiesArgs>;
    /**
     * The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.
     */
    storageEndpoints?: pulumi.Input<{[key: string]: pulumi.Input<StorageEndpointPropertiesArgs>}>;
}
/**
 * iotHubPropertiesArgsProvideDefaults sets the appropriate defaults for IotHubPropertiesArgs
 */
export function iotHubPropertiesArgsProvideDefaults(val: IotHubPropertiesArgs): IotHubPropertiesArgs {
    return {
        ...val,
        networkRuleSets: (val.networkRuleSets ? pulumi.output(val.networkRuleSets).apply(networkRuleSetPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * Information about the SKU of the IoT hub.
 */
export interface IotHubSkuInfoArgs {
    /**
     * The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The name of the SKU.
     */
    name: pulumi.Input<string | enums.IotHubSku>;
}

/**
 * The IP filter rules for the IoT hub.
 */
export interface IpFilterRuleArgs {
    /**
     * The desired action for requests captured by this rule.
     */
    action: pulumi.Input<enums.IpFilterActionType>;
    /**
     * The name of the IP filter rule.
     */
    filterName: pulumi.Input<string>;
    /**
     * A string that contains the IP address range in CIDR notation for the rule.
     */
    ipMask: pulumi.Input<string>;
}

/**
 * The properties of the Managed identity.
 */
export interface ManagedIdentityArgs {
    /**
     * The user assigned identity.
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * The properties of the messaging endpoints used by this IoT hub.
 */
export interface MessagingEndpointPropertiesArgs {
    /**
     * The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
     */
    lockDurationAsIso8601?: pulumi.Input<string>;
    /**
     * The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
     */
    maxDeliveryCount?: pulumi.Input<number>;
    /**
     * The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
     */
    ttlAsIso8601?: pulumi.Input<string>;
}

/**
 * IP Rule to be applied as part of Network Rule Set
 */
export interface NetworkRuleSetIpRuleArgs {
    /**
     * IP Filter Action
     */
    action?: pulumi.Input<string | enums.NetworkRuleIPAction>;
    /**
     * Name of the IP filter rule.
     */
    filterName: pulumi.Input<string>;
    /**
     * A string that contains the IP address range in CIDR notation for the rule.
     */
    ipMask: pulumi.Input<string>;
}
/**
 * networkRuleSetIpRuleArgsProvideDefaults sets the appropriate defaults for NetworkRuleSetIpRuleArgs
 */
export function networkRuleSetIpRuleArgsProvideDefaults(val: NetworkRuleSetIpRuleArgs): NetworkRuleSetIpRuleArgs {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}

/**
 * Network Rule Set Properties of IotHub
 */
export interface NetworkRuleSetPropertiesArgs {
    /**
     * If True, then Network Rule Set is also applied to BuiltIn EventHub EndPoint of IotHub
     */
    applyToBuiltInEventHubEndpoint: pulumi.Input<boolean>;
    /**
     * Default Action for Network Rule Set
     */
    defaultAction?: pulumi.Input<string | enums.DefaultAction>;
    /**
     * List of IP Rules
     */
    ipRules: pulumi.Input<pulumi.Input<NetworkRuleSetIpRuleArgs>[]>;
}
/**
 * networkRuleSetPropertiesArgsProvideDefaults sets the appropriate defaults for NetworkRuleSetPropertiesArgs
 */
export function networkRuleSetPropertiesArgsProvideDefaults(val: NetworkRuleSetPropertiesArgs): NetworkRuleSetPropertiesArgs {
    return {
        ...val,
        defaultAction: (val.defaultAction) ?? "Deny",
    };
}

/**
 * The private endpoint connection of an IotHub
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The properties of a private endpoint connection
     */
    properties: pulumi.Input<PrivateEndpointConnectionPropertiesArgs>;
}

/**
 * The properties of a private endpoint connection
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * The current state of a private endpoint connection
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * The current state of a private endpoint connection
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Actions required for a private endpoint connection
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The description for the current state of a private endpoint connection
     */
    description: pulumi.Input<string>;
    /**
     * The status of a private endpoint connection
     */
    status: pulumi.Input<string | enums.PrivateLinkServiceConnectionStatus>;
}

/**
 * The properties of a routing rule that your IoT hub uses to route messages to endpoints.
 */
export interface RoutePropertiesArgs {
    /**
     * The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
     */
    condition?: pulumi.Input<string>;
    /**
     * The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
     */
    endpointNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Used to specify whether a route is enabled.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
     */
    name: pulumi.Input<string>;
    /**
     * The source that the routing rule is to be applied to, such as DeviceMessages.
     */
    source: pulumi.Input<string | enums.RoutingSource>;
}

/**
 * The properties related to a cosmos DB sql container endpoint.
 */
export interface RoutingCosmosDBSqlApiPropertiesArgs {
    /**
     * Method used to authenticate against the cosmos DB sql container endpoint
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * The name of the cosmos DB sql container in the cosmos DB database.
     */
    containerName: pulumi.Input<string>;
    /**
     * The name of the cosmos DB database in the cosmos DB account.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The url of the cosmos DB account. It must include the protocol https://
     */
    endpointUri: pulumi.Input<string>;
    /**
     * Managed identity properties of routing cosmos DB container endpoint.
     */
    identity?: pulumi.Input<ManagedIdentityArgs>;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the partition key associated with this cosmos DB sql container if one exists. This is an optional parameter.
     */
    partitionKeyName?: pulumi.Input<string>;
    /**
     * The template for generating a synthetic partition key value for use with this cosmos DB sql container. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. This parameter is only required if PartitionKeyName is specified.
     */
    partitionKeyTemplate?: pulumi.Input<string>;
    /**
     * The primary key of the cosmos DB account.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The name of the resource group of the cosmos DB account.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The secondary key of the cosmos DB account.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * The subscription identifier of the cosmos DB account.
     */
    subscriptionId?: pulumi.Input<string>;
}

/**
 * The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs.
 */
export interface RoutingEndpointsArgs {
    /**
     * The list of Cosmos DB container endpoints that IoT hub routes messages to, based on the routing rules.
     */
    cosmosDBSqlContainers?: pulumi.Input<pulumi.Input<RoutingCosmosDBSqlApiPropertiesArgs>[]>;
    /**
     * The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
     */
    eventHubs?: pulumi.Input<pulumi.Input<RoutingEventHubPropertiesArgs>[]>;
    /**
     * The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
     */
    serviceBusQueues?: pulumi.Input<pulumi.Input<RoutingServiceBusQueueEndpointPropertiesArgs>[]>;
    /**
     * The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
     */
    serviceBusTopics?: pulumi.Input<pulumi.Input<RoutingServiceBusTopicEndpointPropertiesArgs>[]>;
    /**
     * The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.
     */
    storageContainers?: pulumi.Input<pulumi.Input<RoutingStorageContainerPropertiesArgs>[]>;
}

/**
 * The properties related to an event hub endpoint.
 */
export interface RoutingEventHubPropertiesArgs {
    /**
     * Method used to authenticate against the event hub endpoint
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * The connection string of the event hub endpoint. 
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The url of the event hub endpoint. It must include the protocol sb://
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * Event hub name on the event hub namespace
     */
    entityPath?: pulumi.Input<string>;
    /**
     * Id of the event hub endpoint
     */
    id?: pulumi.Input<string>;
    /**
     * Managed identity properties of routing event hub endpoint.
     */
    identity?: pulumi.Input<ManagedIdentityArgs>;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group of the event hub endpoint.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The subscription identifier of the event hub endpoint.
     */
    subscriptionId?: pulumi.Input<string>;
}

/**
 * The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
 */
export interface RoutingPropertiesArgs {
    /**
     * The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs.
     */
    endpoints?: pulumi.Input<RoutingEndpointsArgs>;
    /**
     * The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid
     */
    enrichments?: pulumi.Input<pulumi.Input<EnrichmentPropertiesArgs>[]>;
    /**
     * The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not present in the template, the fallback route is disabled by default.
     */
    fallbackRoute?: pulumi.Input<FallbackRoutePropertiesArgs>;
    /**
     * The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.
     */
    routes?: pulumi.Input<pulumi.Input<RoutePropertiesArgs>[]>;
}

/**
 * The properties related to service bus queue endpoint types.
 */
export interface RoutingServiceBusQueueEndpointPropertiesArgs {
    /**
     * Method used to authenticate against the service bus queue endpoint
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * The connection string of the service bus queue endpoint.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The url of the service bus queue endpoint. It must include the protocol sb://
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * Queue name on the service bus namespace
     */
    entityPath?: pulumi.Input<string>;
    /**
     * Id of the service bus queue endpoint
     */
    id?: pulumi.Input<string>;
    /**
     * Managed identity properties of routing service bus queue endpoint.
     */
    identity?: pulumi.Input<ManagedIdentityArgs>;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group of the service bus queue endpoint.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The subscription identifier of the service bus queue endpoint.
     */
    subscriptionId?: pulumi.Input<string>;
}

/**
 * The properties related to service bus topic endpoint types.
 */
export interface RoutingServiceBusTopicEndpointPropertiesArgs {
    /**
     * Method used to authenticate against the service bus topic endpoint
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * The connection string of the service bus topic endpoint.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The url of the service bus topic endpoint. It must include the protocol sb://
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * Queue name on the service bus topic
     */
    entityPath?: pulumi.Input<string>;
    /**
     * Id of the service bus topic endpoint
     */
    id?: pulumi.Input<string>;
    /**
     * Managed identity properties of routing service bus topic endpoint.
     */
    identity?: pulumi.Input<ManagedIdentityArgs>;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group of the service bus topic endpoint.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The subscription identifier of the service bus topic endpoint.
     */
    subscriptionId?: pulumi.Input<string>;
}

/**
 * The properties related to a storage container endpoint.
 */
export interface RoutingStorageContainerPropertiesArgs {
    /**
     * Method used to authenticate against the storage endpoint
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
     */
    batchFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * The connection string of the storage account.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The name of storage container in the storage account.
     */
    containerName: pulumi.Input<string>;
    /**
     * Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'.
     */
    encoding?: pulumi.Input<string>;
    /**
     * The url of the storage endpoint. It must include the protocol https://
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered.
     */
    fileNameFormat?: pulumi.Input<string>;
    /**
     * Id of the storage container endpoint
     */
    id?: pulumi.Input<string>;
    /**
     * Managed identity properties of routing storage endpoint.
     */
    identity?: pulumi.Input<ManagedIdentityArgs>;
    /**
     * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
     */
    maxChunkSizeInBytes?: pulumi.Input<number>;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group of the storage account.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The subscription identifier of the storage account.
     */
    subscriptionId?: pulumi.Input<string>;
}

/**
 * The properties of an IoT hub shared access policy.
 */
export interface SharedAccessSignatureAuthorizationRuleArgs {
    /**
     * The name of the shared access policy.
     */
    keyName: pulumi.Input<string>;
    /**
     * The primary key.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The permissions assigned to the shared access policy.
     */
    rights: pulumi.Input<enums.AccessRights>;
    /**
     * The secondary key.
     */
    secondaryKey?: pulumi.Input<string>;
}

/**
 * The properties of the Azure Storage endpoint for file upload.
 */
export interface StorageEndpointPropertiesArgs {
    /**
     * Specifies authentication type being used for connecting to the storage account.
     */
    authenticationType?: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * The connection string for the Azure Storage account to which files are uploaded.
     */
    connectionString: pulumi.Input<string>;
    /**
     * The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified.
     */
    containerName: pulumi.Input<string>;
    /**
     * Managed identity properties of storage endpoint for file upload.
     */
    identity?: pulumi.Input<ManagedIdentityArgs>;
    /**
     * The period of time for which the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options.
     */
    sasTtlAsIso8601?: pulumi.Input<string>;
}
