import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface ArmIdentityResponse {
    /**
     * Principal Id
     */
    principalId: string;
    /**
     * Tenant Id
     */
    tenantId: string;
    /**
     * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
     */
    type?: string;
    userAssignedIdentities?: {[key: string]: ArmUserIdentityResponse};
}

export interface ArmUserIdentityResponse {
    clientId: string;
    principalId: string;
}

/**
 * The description of an X509 CA Certificate.
 */
export interface CertificatePropertiesResponse {
    /**
     * The certificate content
     */
    certificate?: string;
    /**
     * The certificate's create date and time.
     */
    created: string;
    /**
     * The certificate's expiration date and time.
     */
    expiry: string;
    /**
     * Determines whether certificate has been verified.
     */
    isVerified?: boolean;
    /**
     * The certificate's subject name.
     */
    subject: string;
    /**
     * The certificate's thumbprint.
     */
    thumbprint: string;
    /**
     * The certificate's last update date and time.
     */
    updated: string;
}

/**
 * The IoT hub cloud-to-device messaging properties.
 */
export interface CloudToDevicePropertiesResponse {
    /**
     * The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    defaultTtlAsIso8601?: string;
    /**
     * The properties of the feedback queue for cloud-to-device messages.
     */
    feedback?: FeedbackPropertiesResponse;
    /**
     * The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    maxDeliveryCount?: number;
}

/**
 * The properties of an enrichment that your IoT hub applies to messages delivered to endpoints.
 */
export interface EnrichmentPropertiesResponse {
    /**
     * The list of endpoints for which the enrichment is applied to the message.
     */
    endpointNames: string[];
    /**
     * The key or name for the enrichment property.
     */
    key: string;
    /**
     * The value for the enrichment property.
     */
    value: string;
}

/**
 * The properties of the provisioned Event Hub-compatible endpoint used by the IoT hub.
 */
export interface EventHubPropertiesResponse {
    /**
     * The Event Hub-compatible endpoint.
     */
    endpoint: string;
    /**
     * The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages.
     */
    partitionCount?: number;
    /**
     * The partition ids in the Event Hub-compatible endpoint.
     */
    partitionIds: string[];
    /**
     * The Event Hub-compatible name.
     */
    path: string;
    /**
     * The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages
     */
    retentionTimeInDays?: number;
}

/**
 * The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint.
 */
export interface FallbackRoutePropertiesResponse {
    /**
     * The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
     */
    condition?: string;
    /**
     * The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed.
     */
    endpointNames: string[];
    /**
     * Used to specify whether the fallback route is enabled.
     */
    isEnabled: boolean;
    /**
     * The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
     */
    name?: string;
    /**
     * The source to which the routing rule is to be applied to. For example, DeviceMessages
     */
    source: string;
}

/**
 * The properties of the feedback queue for cloud-to-device messages.
 */
export interface FeedbackPropertiesResponse {
    /**
     * The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    lockDurationAsIso8601?: string;
    /**
     * The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    maxDeliveryCount?: number;
    /**
     * The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
     */
    ttlAsIso8601?: string;
}

/**
 * Public representation of one of the locations where a resource is provisioned.
 */
export interface IotHubLocationDescriptionResponse {
    /**
     * The name of the Azure region
     */
    location?: string;
    /**
     * The role of the region, can be either primary or secondary. The primary region is where the IoT hub is currently provisioned. The secondary region is the Azure disaster recovery (DR) paired region and also the region where the IoT hub can failover to.
     */
    role?: string;
}

/**
 * The properties of an IoT hub.
 */
export interface IotHubPropertiesResponse {
    /**
     * List of allowed FQDNs(Fully Qualified Domain Name) for egress from Iot Hub.
     */
    allowedFqdnList?: string[];
    /**
     * The shared access policies you can use to secure a connection to the IoT hub.
     */
    authorizationPolicies?: SharedAccessSignatureAuthorizationRuleResponse[];
    /**
     * The IoT hub cloud-to-device messaging properties.
     */
    cloudToDevice?: CloudToDevicePropertiesResponse;
    /**
     * IoT hub comments.
     */
    comments?: string;
    /**
     * If true, all device(including Edge devices but excluding modules) scoped SAS keys cannot be used for authentication.
     */
    disableDeviceSAS?: boolean;
    /**
     * If true, SAS tokens with Iot hub scoped SAS keys cannot be used for authentication.
     */
    disableLocalAuth?: boolean;
    /**
     * If true, all module scoped SAS keys cannot be used for authentication.
     */
    disableModuleSAS?: boolean;
    /**
     * This property when set to true, will enable data residency, thus, disabling disaster recovery.
     */
    enableDataResidency?: boolean;
    /**
     * If True, file upload notifications are enabled.
     */
    enableFileUploadNotifications?: boolean;
    /**
     * The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
     */
    eventHubEndpoints?: {[key: string]: EventHubPropertiesResponse};
    /**
     * The capabilities and features enabled for the IoT hub.
     */
    features?: string;
    /**
     * The name of the host.
     */
    hostName: string;
    /**
     * The IP filter rules.
     */
    ipFilterRules?: IpFilterRuleResponse[];
    /**
     * Primary and secondary location for iot hub
     */
    locations: IotHubLocationDescriptionResponse[];
    /**
     * The messaging endpoint properties for the file upload notification queue.
     */
    messagingEndpoints?: {[key: string]: MessagingEndpointPropertiesResponse};
    /**
     * Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected.
     */
    minTlsVersion?: string;
    /**
     * Network Rule Set Properties of IotHub
     */
    networkRuleSets?: NetworkRuleSetPropertiesResponse;
    /**
     * Private endpoint connections created on this IotHub
     */
    privateEndpointConnections?: PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state.
     */
    provisioningState: string;
    /**
     * Whether requests from Public Network are allowed
     */
    publicNetworkAccess?: string;
    /**
     * If true, egress from IotHub will be restricted to only the allowed FQDNs that are configured via allowedFqdnList.
     */
    restrictOutboundNetworkAccess?: boolean;
    /**
     * The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
     */
    routing?: RoutingPropertiesResponse;
    /**
     * The hub state.
     */
    state: string;
    /**
     * The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.
     */
    storageEndpoints?: {[key: string]: StorageEndpointPropertiesResponse};
}
/**
 * iotHubPropertiesResponseProvideDefaults sets the appropriate defaults for IotHubPropertiesResponse
 */
export function iotHubPropertiesResponseProvideDefaults(val: IotHubPropertiesResponse): IotHubPropertiesResponse {
    return {
        ...val,
        networkRuleSets: (val.networkRuleSets ? networkRuleSetPropertiesResponseProvideDefaults(val.networkRuleSets) : undefined),
    };
}

/**
 * Information about the SKU of the IoT hub.
 */
export interface IotHubSkuInfoResponse {
    /**
     * The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits.
     */
    capacity?: number;
    /**
     * The name of the SKU.
     */
    name: string;
    /**
     * The billing tier for the IoT hub.
     */
    tier: string;
}

/**
 * The IP filter rules for the IoT hub.
 */
export interface IpFilterRuleResponse {
    /**
     * The desired action for requests captured by this rule.
     */
    action: string;
    /**
     * The name of the IP filter rule.
     */
    filterName: string;
    /**
     * A string that contains the IP address range in CIDR notation for the rule.
     */
    ipMask: string;
}

/**
 * The properties of the Managed identity.
 */
export interface ManagedIdentityResponse {
    /**
     * The user assigned identity.
     */
    userAssignedIdentity?: string;
}

/**
 * The properties of the messaging endpoints used by this IoT hub.
 */
export interface MessagingEndpointPropertiesResponse {
    /**
     * The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
     */
    lockDurationAsIso8601?: string;
    /**
     * The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
     */
    maxDeliveryCount?: number;
    /**
     * The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
     */
    ttlAsIso8601?: string;
}

/**
 * IP Rule to be applied as part of Network Rule Set
 */
export interface NetworkRuleSetIpRuleResponse {
    /**
     * IP Filter Action
     */
    action?: string;
    /**
     * Name of the IP filter rule.
     */
    filterName: string;
    /**
     * A string that contains the IP address range in CIDR notation for the rule.
     */
    ipMask: string;
}
/**
 * networkRuleSetIpRuleResponseProvideDefaults sets the appropriate defaults for NetworkRuleSetIpRuleResponse
 */
export function networkRuleSetIpRuleResponseProvideDefaults(val: NetworkRuleSetIpRuleResponse): NetworkRuleSetIpRuleResponse {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}

/**
 * Network Rule Set Properties of IotHub
 */
export interface NetworkRuleSetPropertiesResponse {
    /**
     * If True, then Network Rule Set is also applied to BuiltIn EventHub EndPoint of IotHub
     */
    applyToBuiltInEventHubEndpoint: boolean;
    /**
     * Default Action for Network Rule Set
     */
    defaultAction?: string;
    /**
     * List of IP Rules
     */
    ipRules: NetworkRuleSetIpRuleResponse[];
}
/**
 * networkRuleSetPropertiesResponseProvideDefaults sets the appropriate defaults for NetworkRuleSetPropertiesResponse
 */
export function networkRuleSetPropertiesResponseProvideDefaults(val: NetworkRuleSetPropertiesResponse): NetworkRuleSetPropertiesResponse {
    return {
        ...val,
        defaultAction: (val.defaultAction) ?? "Deny",
    };
}

/**
 * The properties of a private endpoint connection
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * The private endpoint property of a private endpoint connection
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * The current state of a private endpoint connection
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
}

/**
 * The private endpoint connection of an IotHub
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
     * The properties of a private endpoint connection
     */
    properties: PrivateEndpointConnectionPropertiesResponse;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * The private endpoint property of a private endpoint connection
 */
export interface PrivateEndpointResponse {
    /**
     * The resource identifier.
     */
    id: string;
}

/**
 * The current state of a private endpoint connection
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * Actions required for a private endpoint connection
     */
    actionsRequired?: string;
    /**
     * The description for the current state of a private endpoint connection
     */
    description: string;
    /**
     * The status of a private endpoint connection
     */
    status: string;
}

/**
 * The properties of a routing rule that your IoT hub uses to route messages to endpoints.
 */
export interface RoutePropertiesResponse {
    /**
     * The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
     */
    condition?: string;
    /**
     * The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
     */
    endpointNames: string[];
    /**
     * Used to specify whether a route is enabled.
     */
    isEnabled: boolean;
    /**
     * The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
     */
    name: string;
    /**
     * The source that the routing rule is to be applied to, such as DeviceMessages.
     */
    source: string;
}

/**
 * The properties related to a cosmos DB sql container endpoint.
 */
export interface RoutingCosmosDBSqlApiPropertiesResponse {
    /**
     * Method used to authenticate against the cosmos DB sql container endpoint
     */
    authenticationType?: string;
    /**
     * The name of the cosmos DB sql container in the cosmos DB database.
     */
    containerName: string;
    /**
     * The name of the cosmos DB database in the cosmos DB account.
     */
    databaseName: string;
    /**
     * The url of the cosmos DB account. It must include the protocol https://
     */
    endpointUri: string;
    /**
     * Id of the cosmos DB sql container endpoint
     */
    id: string;
    /**
     * Managed identity properties of routing cosmos DB container endpoint.
     */
    identity?: ManagedIdentityResponse;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
     */
    name: string;
    /**
     * The name of the partition key associated with this cosmos DB sql container if one exists. This is an optional parameter.
     */
    partitionKeyName?: string;
    /**
     * The template for generating a synthetic partition key value for use with this cosmos DB sql container. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. This parameter is only required if PartitionKeyName is specified.
     */
    partitionKeyTemplate?: string;
    /**
     * The primary key of the cosmos DB account.
     */
    primaryKey?: string;
    /**
     * The name of the resource group of the cosmos DB account.
     */
    resourceGroup?: string;
    /**
     * The secondary key of the cosmos DB account.
     */
    secondaryKey?: string;
    /**
     * The subscription identifier of the cosmos DB account.
     */
    subscriptionId?: string;
}

/**
 * The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs.
 */
export interface RoutingEndpointsResponse {
    /**
     * The list of Cosmos DB container endpoints that IoT hub routes messages to, based on the routing rules.
     */
    cosmosDBSqlContainers?: RoutingCosmosDBSqlApiPropertiesResponse[];
    /**
     * The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
     */
    eventHubs?: RoutingEventHubPropertiesResponse[];
    /**
     * The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
     */
    serviceBusQueues?: RoutingServiceBusQueueEndpointPropertiesResponse[];
    /**
     * The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
     */
    serviceBusTopics?: RoutingServiceBusTopicEndpointPropertiesResponse[];
    /**
     * The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.
     */
    storageContainers?: RoutingStorageContainerPropertiesResponse[];
}

/**
 * The properties related to an event hub endpoint.
 */
export interface RoutingEventHubPropertiesResponse {
    /**
     * Method used to authenticate against the event hub endpoint
     */
    authenticationType?: string;
    /**
     * The connection string of the event hub endpoint. 
     */
    connectionString?: string;
    /**
     * The url of the event hub endpoint. It must include the protocol sb://
     */
    endpointUri?: string;
    /**
     * Event hub name on the event hub namespace
     */
    entityPath?: string;
    /**
     * Id of the event hub endpoint
     */
    id?: string;
    /**
     * Managed identity properties of routing event hub endpoint.
     */
    identity?: ManagedIdentityResponse;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
     */
    name: string;
    /**
     * The name of the resource group of the event hub endpoint.
     */
    resourceGroup?: string;
    /**
     * The subscription identifier of the event hub endpoint.
     */
    subscriptionId?: string;
}

/**
 * The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
 */
export interface RoutingPropertiesResponse {
    /**
     * The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs.
     */
    endpoints?: RoutingEndpointsResponse;
    /**
     * The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid
     */
    enrichments?: EnrichmentPropertiesResponse[];
    /**
     * The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not present in the template, the fallback route is disabled by default.
     */
    fallbackRoute?: FallbackRoutePropertiesResponse;
    /**
     * The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.
     */
    routes?: RoutePropertiesResponse[];
}

/**
 * The properties related to service bus queue endpoint types.
 */
export interface RoutingServiceBusQueueEndpointPropertiesResponse {
    /**
     * Method used to authenticate against the service bus queue endpoint
     */
    authenticationType?: string;
    /**
     * The connection string of the service bus queue endpoint.
     */
    connectionString?: string;
    /**
     * The url of the service bus queue endpoint. It must include the protocol sb://
     */
    endpointUri?: string;
    /**
     * Queue name on the service bus namespace
     */
    entityPath?: string;
    /**
     * Id of the service bus queue endpoint
     */
    id?: string;
    /**
     * Managed identity properties of routing service bus queue endpoint.
     */
    identity?: ManagedIdentityResponse;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name.
     */
    name: string;
    /**
     * The name of the resource group of the service bus queue endpoint.
     */
    resourceGroup?: string;
    /**
     * The subscription identifier of the service bus queue endpoint.
     */
    subscriptionId?: string;
}

/**
 * The properties related to service bus topic endpoint types.
 */
export interface RoutingServiceBusTopicEndpointPropertiesResponse {
    /**
     * Method used to authenticate against the service bus topic endpoint
     */
    authenticationType?: string;
    /**
     * The connection string of the service bus topic endpoint.
     */
    connectionString?: string;
    /**
     * The url of the service bus topic endpoint. It must include the protocol sb://
     */
    endpointUri?: string;
    /**
     * Queue name on the service bus topic
     */
    entityPath?: string;
    /**
     * Id of the service bus topic endpoint
     */
    id?: string;
    /**
     * Managed identity properties of routing service bus topic endpoint.
     */
    identity?: ManagedIdentityResponse;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name.
     */
    name: string;
    /**
     * The name of the resource group of the service bus topic endpoint.
     */
    resourceGroup?: string;
    /**
     * The subscription identifier of the service bus topic endpoint.
     */
    subscriptionId?: string;
}

/**
 * The properties related to a storage container endpoint.
 */
export interface RoutingStorageContainerPropertiesResponse {
    /**
     * Method used to authenticate against the storage endpoint
     */
    authenticationType?: string;
    /**
     * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
     */
    batchFrequencyInSeconds?: number;
    /**
     * The connection string of the storage account.
     */
    connectionString?: string;
    /**
     * The name of storage container in the storage account.
     */
    containerName: string;
    /**
     * Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'.
     */
    encoding?: string;
    /**
     * The url of the storage endpoint. It must include the protocol https://
     */
    endpointUri?: string;
    /**
     * File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered.
     */
    fileNameFormat?: string;
    /**
     * Id of the storage container endpoint
     */
    id?: string;
    /**
     * Managed identity properties of routing storage endpoint.
     */
    identity?: ManagedIdentityResponse;
    /**
     * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
     */
    maxChunkSizeInBytes?: number;
    /**
     * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
     */
    name: string;
    /**
     * The name of the resource group of the storage account.
     */
    resourceGroup?: string;
    /**
     * The subscription identifier of the storage account.
     */
    subscriptionId?: string;
}

/**
 * The properties of an IoT hub shared access policy.
 */
export interface SharedAccessSignatureAuthorizationRuleResponse {
    /**
     * The name of the shared access policy.
     */
    keyName: string;
    /**
     * The primary key.
     */
    primaryKey?: string;
    /**
     * The permissions assigned to the shared access policy.
     */
    rights: string;
    /**
     * The secondary key.
     */
    secondaryKey?: string;
}

/**
 * The properties of the Azure Storage endpoint for file upload.
 */
export interface StorageEndpointPropertiesResponse {
    /**
     * Specifies authentication type being used for connecting to the storage account.
     */
    authenticationType?: string;
    /**
     * The connection string for the Azure Storage account to which files are uploaded.
     */
    connectionString: string;
    /**
     * The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified.
     */
    containerName: string;
    /**
     * Managed identity properties of storage endpoint for file upload.
     */
    identity?: ManagedIdentityResponse;
    /**
     * The period of time for which the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options.
     */
    sasTtlAsIso8601?: string;
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
