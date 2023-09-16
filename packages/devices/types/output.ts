import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace devices {
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
         * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
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
         * base-64 representation of X509 certificate .cer file or just .pem file content.
         */
        certificate?: string;
        /**
         * The certificate's creation date and time.
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
     * The encryption properties for the IoT hub.
     */
    export interface EncryptionPropertiesDescriptionResponse {
        /**
         * The source of the key.
         */
        keySource?: string;
        /**
         * The properties of the KeyVault key.
         */
        keyVaultProperties?: KeyVaultKeyPropertiesResponse[];
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
     * the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
     */
    export interface IotDpsPropertiesDescriptionResponse {
        /**
         * Allocation policy to be used by this provisioning service.
         */
        allocationPolicy?: string;
        /**
         * List of authorization keys for a provisioning service.
         */
        authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse[];
        /**
         * Device endpoint for this provisioning service.
         */
        deviceProvisioningHostName: string;
        /**
         * Optional.
         * Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery.
         */
        enableDataResidency?: boolean;
        /**
         * Unique identifier of this provisioning service.
         */
        idScope: string;
        /**
         * List of IoT hubs associated with this provisioning service.
         */
        iotHubs?: IotHubDefinitionDescriptionResponse[];
        /**
         * The IP filter rules.
         */
        ipFilterRules?: TargetIpFilterRuleResponse[];
        /**
         * Portal endpoint to enable CORS for this provisioning service.
         */
        portalOperationsHostName?: string;
        /**
         * Private endpoint connections created on this IotHub
         */
        privateEndpointConnections?: PrivateEndpointConnectionResponse[];
        /**
         * The ARM provisioning state of the provisioning service.
         */
        provisioningState?: string;
        /**
         * Whether requests from Public Network are allowed
         */
        publicNetworkAccess?: string;
        /**
         * Service endpoint for provisioning service.
         */
        serviceOperationsHostName: string;
        /**
         * Current state of the provisioning service.
         */
        state?: string;
    }

    /**
     * List of possible provisioning service SKUs.
     */
    export interface IotDpsSkuInfoResponse {
        /**
         * The number of units to provision
         */
        capacity?: number;
        /**
         * Sku name.
         */
        name?: string;
        /**
         * Pricing tier name of the provisioning service.
         */
        tier: string;
    }

    /**
     * Description of the IoT hub.
     */
    export interface IotHubDefinitionDescriptionResponse {
        /**
         * weight to apply for a given iot h.
         */
        allocationWeight?: number;
        /**
         * flag for applying allocationPolicy or not for a given iot hub.
         */
        applyAllocationPolicy?: boolean;
        /**
         * Connection string of the IoT hub.
         */
        connectionString: string;
        /**
         * ARM region of the IoT hub.
         */
        location: string;
        /**
         * Host name of the IoT hub.
         */
        name: string;
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
         * The device streams properties of iothub.
         */
        deviceStreams?: IotHubPropertiesResponseDeviceStreams;
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
         * The encryption properties for the IoT hub.
         */
        encryption?: EncryptionPropertiesDescriptionResponse;
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
         * This property store root certificate related information
         */
        rootCertificate?: RootCertificatePropertiesResponse;
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
     * The device streams properties of iothub.
     */
    export interface IotHubPropertiesResponseDeviceStreams {
        /**
         * List of Device Streams Endpoints.
         */
        streamingEndpoints?: string[];
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
     * The properties of the KeyVault key.
     */
    export interface KeyVaultKeyPropertiesResponse {
        /**
         * Managed identity properties of KeyVault Key.
         */
        identity?: ManagedIdentityResponse;
        /**
         * The identifier of the key.
         */
        keyIdentifier?: string;
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
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData?: SystemDataResponse;
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
     * This property store root certificate related information
     */
    export interface RootCertificatePropertiesResponse {
        /**
         * This property when set to true, hub will use G2 cert; while it's set to false, hub uses Baltimore Cert.
         */
        enableRootCertificateV2?: boolean;
        /**
         * the last update time to root certificate flag.
         */
        lastUpdatedTimeUtc: string;
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
     * The properties related to a cosmos DB sql collection endpoint.
     */
    export interface RoutingCosmosDBSqlApiPropertiesResponse {
        /**
         * Method used to authenticate against the cosmos DB sql collection endpoint
         */
        authenticationType?: string;
        /**
         * The name of the cosmos DB sql collection in the cosmos DB database.
         */
        collectionName: string;
        /**
         * The name of the cosmos DB database in the cosmos DB account.
         */
        databaseName: string;
        /**
         * The url of the cosmos DB account. It must include the protocol https://
         */
        endpointUri: string;
        /**
         * Id of the cosmos DB sql collection endpoint
         */
        id?: string;
        /**
         * Managed identity properties of routing cosmos DB collection endpoint.
         */
        identity?: ManagedIdentityResponse;
        /**
         * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
         */
        name: string;
        /**
         * The name of the partition key associated with this cosmos DB sql collection if one exists. This is an optional parameter.
         */
        partitionKeyName?: string;
        /**
         * The template for generating a synthetic partition key value for use with this cosmos DB sql collection. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. This parameter is only required if PartitionKeyName is specified.
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
         * The list of Cosmos DB collection endpoints that IoT hub routes messages to, based on the routing rules.
         */
        cosmosDBSqlCollections?: RoutingCosmosDBSqlApiPropertiesResponse[];
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
         * The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint.
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
     * Description of the shared access key.
     */
    export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse {
        /**
         * Name of the key.
         */
        keyName: string;
        /**
         * Primary SAS key value.
         */
        primaryKey?: string;
        /**
         * Rights that this key has.
         */
        rights: string;
        /**
         * Secondary SAS key value.
         */
        secondaryKey?: string;
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

    /**
     * The IP filter rules for a provisioning Service.
     */
    export interface TargetIpFilterRuleResponse {
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
        /**
         * Target for requests captured by this rule.
         */
        target?: string;
    }

    export namespace v20200401 {
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
            isVerified: boolean;
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

    }

    export namespace v20200901preview {
        /**
         * The set of ARM identities associated with the IoT DPS resource.
         */
        export interface ArmIdentityResponse {
            /**
             * Identity type. Only allowed values are SystemAssigned and UserAssigned. Comma separated if both for ex: SystemAssigned,UserAssigned.
             */
            identityType?: string;
            /**
             * Principal Id
             */
            principalId: string;
            /**
             * Tenant Id
             */
            tenantId: string;
            /**
             * The set of UserAssigned identities associated with the IoT DPS resource.
             */
            userAssignedIdentities?: {[key: string]: v20200901preview.ArmUserIdentityResponse};
        }

        /**
         * The ARM UserAssigned identity information
         */
        export interface ArmUserIdentityResponse {
            /**
             * Client Id
             */
            clientId: string;
            /**
             * Principal Id
             */
            principalId: string;
        }

        /**
         * The properties of the identity used to access the key encryption key in KeyVault.
         */
        export interface EncryptionKeyIdentityResponse {
            /**
             * The user assigned identity.
             */
            userAssignedIdentity?: string;
        }

        /**
         * The customer-managed encryption key (CMK) properties for the IoT DPS instance.
         */
        export interface EncryptionPropertiesDescriptionResponse {
            /**
             * The identity used to access the encryption key in KeyVault.
             */
            identity?: v20200901preview.EncryptionKeyIdentityResponse;
            /**
             * The source of the encryption key. Typically, Microsoft.KeyVault
             */
            keySource?: string;
            /**
             * The properties of the encryption key configured in KeyVault.
             */
            keyVaultProperties?: v20200901preview.KeyVaultKeyPropertiesResponse[];
        }

        /**
         * the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
         */
        export interface IotDpsPropertiesDescriptionResponse {
            /**
             * Allocation policy to be used by this provisioning service.
             */
            allocationPolicy?: string;
            /**
             * List of authorization keys for a provisioning service.
             */
            authorizationPolicies?: v20200901preview.SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse[];
            /**
             * Device endpoint for this provisioning service.
             */
            deviceProvisioningHostName: string;
            /**
             * The encryption properties for the IoT DPS instance.
             */
            encryption?: v20200901preview.EncryptionPropertiesDescriptionResponse;
            /**
             * Unique identifier of this provisioning service.
             */
            idScope: string;
            /**
             * List of IoT hubs associated with this provisioning service.
             */
            iotHubs?: v20200901preview.IotHubDefinitionDescriptionResponse[];
            /**
             * The IP filter rules.
             */
            ipFilterRules?: v20200901preview.TargetIpFilterRuleResponse[];
            /**
             * Private endpoint connections created on this IotHub
             */
            privateEndpointConnections?: v20200901preview.PrivateEndpointConnectionResponse[];
            /**
             * The ARM provisioning state of the provisioning service.
             */
            provisioningState?: string;
            /**
             * Whether requests from Public Network are allowed
             */
            publicNetworkAccess?: string;
            /**
             * Service endpoint for provisioning service.
             */
            serviceOperationsHostName: string;
            /**
             * Current state of the provisioning service.
             */
            state?: string;
        }

        /**
         * List of possible provisioning service SKUs.
         */
        export interface IotDpsSkuInfoResponse {
            /**
             * The number of units to provision
             */
            capacity?: number;
            /**
             * Sku name.
             */
            name?: string;
            /**
             * Pricing tier name of the provisioning service.
             */
            tier: string;
        }

        /**
         * Description of the IoT hub.
         */
        export interface IotHubDefinitionDescriptionResponse {
            /**
             * weight to apply for a given iot h.
             */
            allocationWeight?: number;
            /**
             * flag for applying allocationPolicy or not for a given iot hub.
             */
            applyAllocationPolicy?: boolean;
            /**
             * Connection string of the IoT hub.
             */
            connectionString: string;
            /**
             * ARM region of the IoT hub.
             */
            location: string;
            /**
             * Host name of the IoT hub.
             */
            name: string;
        }

        /**
         * The properties of the KeyVault key.
         */
        export interface KeyVaultKeyPropertiesResponse {
            /**
             * The identifier of the key.
             */
            keyIdentifier?: string;
        }

        /**
         * The properties of a private endpoint connection
         */
        export interface PrivateEndpointConnectionPropertiesResponse {
            /**
             * The private endpoint property of a private endpoint connection
             */
            privateEndpoint?: v20200901preview.PrivateEndpointResponse;
            /**
             * The current state of a private endpoint connection
             */
            privateLinkServiceConnectionState: v20200901preview.PrivateLinkServiceConnectionStateResponse;
        }

        /**
         * The private endpoint connection of a provisioning service
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
            properties: v20200901preview.PrivateEndpointConnectionPropertiesResponse;
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
         * Description of the shared access key.
         */
        export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse {
            /**
             * Name of the key.
             */
            keyName: string;
            /**
             * Primary SAS key value.
             */
            primaryKey?: string;
            /**
             * Rights that this key has.
             */
            rights: string;
            /**
             * Secondary SAS key value.
             */
            secondaryKey?: string;
        }

        /**
         * The IP filter rules for a provisioning Service.
         */
        export interface TargetIpFilterRuleResponse {
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
            /**
             * Target for requests captured by this rule.
             */
            target?: string;
        }

    }

    export namespace v20210303preview {
    }

    export namespace v20211015 {
        /**
         * The description of an X509 CA Certificate.
         */
        export interface CertificatePropertiesResponse {
            /**
             * base-64 representation of X509 certificate .cer file or just .pem file content.
             */
            certificate: string;
            /**
             * The certificate's creation date and time.
             */
            created: string;
            /**
             * The certificate's expiration date and time.
             */
            expiry: string;
            /**
             * Determines whether certificate has been verified.
             */
            isVerified: boolean;
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

    }

    export namespace v20220430preview {
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
             * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type?: string;
            userAssignedIdentities?: {[key: string]: v20220430preview.ArmUserIdentityResponse};
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
            feedback?: v20220430preview.FeedbackPropertiesResponse;
            /**
             * The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
             */
            maxDeliveryCount?: number;
        }

        /**
         * The encryption properties for the IoT hub.
         */
        export interface EncryptionPropertiesDescriptionResponse {
            /**
             * The source of the key.
             */
            keySource?: string;
            /**
             * The properties of the KeyVault key.
             */
            keyVaultProperties?: v20220430preview.KeyVaultKeyPropertiesResponse[];
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
            authorizationPolicies?: v20220430preview.SharedAccessSignatureAuthorizationRuleResponse[];
            /**
             * The IoT hub cloud-to-device messaging properties.
             */
            cloudToDevice?: v20220430preview.CloudToDevicePropertiesResponse;
            /**
             * IoT hub comments.
             */
            comments?: string;
            /**
             * The device streams properties of iothub.
             */
            deviceStreams?: v20220430preview.IotHubPropertiesResponseDeviceStreams;
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
             * The encryption properties for the IoT hub.
             */
            encryption?: v20220430preview.EncryptionPropertiesDescriptionResponse;
            /**
             * The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
             */
            eventHubEndpoints?: {[key: string]: v20220430preview.EventHubPropertiesResponse};
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
            ipFilterRules?: v20220430preview.IpFilterRuleResponse[];
            /**
             * Primary and secondary location for iot hub
             */
            locations: v20220430preview.IotHubLocationDescriptionResponse[];
            /**
             * The messaging endpoint properties for the file upload notification queue.
             */
            messagingEndpoints?: {[key: string]: v20220430preview.MessagingEndpointPropertiesResponse};
            /**
             * Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected.
             */
            minTlsVersion?: string;
            /**
             * Network Rule Set Properties of IotHub
             */
            networkRuleSets?: v20220430preview.NetworkRuleSetPropertiesResponse;
            /**
             * Private endpoint connections created on this IotHub
             */
            privateEndpointConnections?: v20220430preview.PrivateEndpointConnectionResponse[];
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
             * This property store root certificate related information
             */
            rootCertificate?: v20220430preview.RootCertificatePropertiesResponse;
            /**
             * The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
             */
            routing?: v20220430preview.RoutingPropertiesResponse;
            /**
             * The hub state.
             */
            state: string;
            /**
             * The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.
             */
            storageEndpoints?: {[key: string]: v20220430preview.StorageEndpointPropertiesResponse};
        }
        /**
         * iotHubPropertiesResponseProvideDefaults sets the appropriate defaults for IotHubPropertiesResponse
         */
        export function iotHubPropertiesResponseProvideDefaults(val: IotHubPropertiesResponse): IotHubPropertiesResponse {
            return {
                ...val,
                networkRuleSets: (val.networkRuleSets ? v20220430preview.networkRuleSetPropertiesResponseProvideDefaults(val.networkRuleSets) : undefined),
            };
        }

        /**
         * The device streams properties of iothub.
         */
        export interface IotHubPropertiesResponseDeviceStreams {
            /**
             * List of Device Streams Endpoints.
             */
            streamingEndpoints?: string[];
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
         * The properties of the KeyVault key.
         */
        export interface KeyVaultKeyPropertiesResponse {
            /**
             * Managed identity properties of KeyVault Key.
             */
            identity?: v20220430preview.ManagedIdentityResponse;
            /**
             * The identifier of the key.
             */
            keyIdentifier?: string;
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
            ipRules: v20220430preview.NetworkRuleSetIpRuleResponse[];
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
            privateEndpoint?: v20220430preview.PrivateEndpointResponse;
            /**
             * The current state of a private endpoint connection
             */
            privateLinkServiceConnectionState: v20220430preview.PrivateLinkServiceConnectionStateResponse;
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
            properties: v20220430preview.PrivateEndpointConnectionPropertiesResponse;
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
         * This property store root certificate related information
         */
        export interface RootCertificatePropertiesResponse {
            /**
             * This property when set to true, hub will use G2 cert; while it's set to false, hub uses Baltimore Cert.
             */
            enableRootCertificateV2?: boolean;
            /**
             * the last update time to root certificate flag.
             */
            lastUpdatedTimeUtc: string;
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
         * The properties related to a cosmos DB sql collection endpoint.
         */
        export interface RoutingCosmosDBSqlApiPropertiesResponse {
            /**
             * Method used to authenticate against the cosmos DB sql collection endpoint
             */
            authenticationType?: string;
            /**
             * The name of the cosmos DB sql collection in the cosmos DB database.
             */
            collectionName: string;
            /**
             * The name of the cosmos DB database in the cosmos DB account.
             */
            databaseName: string;
            /**
             * The url of the cosmos DB account. It must include the protocol https://
             */
            endpointUri: string;
            /**
             * Id of the cosmos DB sql collection endpoint
             */
            id?: string;
            /**
             * Managed identity properties of routing cosmos DB collection endpoint.
             */
            identity?: v20220430preview.ManagedIdentityResponse;
            /**
             * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
             */
            name: string;
            /**
             * The name of the partition key associated with this cosmos DB sql collection if one exists. This is an optional parameter.
             */
            partitionKeyName?: string;
            /**
             * The template for generating a synthetic partition key value for use with this cosmos DB sql collection. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. This parameter is only required if PartitionKeyName is specified.
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
             * The list of Cosmos DB collection endpoints that IoT hub routes messages to, based on the routing rules.
             */
            cosmosDBSqlCollections?: v20220430preview.RoutingCosmosDBSqlApiPropertiesResponse[];
            /**
             * The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
             */
            eventHubs?: v20220430preview.RoutingEventHubPropertiesResponse[];
            /**
             * The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
             */
            serviceBusQueues?: v20220430preview.RoutingServiceBusQueueEndpointPropertiesResponse[];
            /**
             * The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
             */
            serviceBusTopics?: v20220430preview.RoutingServiceBusTopicEndpointPropertiesResponse[];
            /**
             * The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.
             */
            storageContainers?: v20220430preview.RoutingStorageContainerPropertiesResponse[];
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
            identity?: v20220430preview.ManagedIdentityResponse;
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
            endpoints?: v20220430preview.RoutingEndpointsResponse;
            /**
             * The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid
             */
            enrichments?: v20220430preview.EnrichmentPropertiesResponse[];
            /**
             * The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint.
             */
            fallbackRoute?: v20220430preview.FallbackRoutePropertiesResponse;
            /**
             * The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.
             */
            routes?: v20220430preview.RoutePropertiesResponse[];
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
            identity?: v20220430preview.ManagedIdentityResponse;
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
            identity?: v20220430preview.ManagedIdentityResponse;
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
            identity?: v20220430preview.ManagedIdentityResponse;
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
            identity?: v20220430preview.ManagedIdentityResponse;
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

    }

    export namespace v20221115preview {
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
             * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type?: string;
            userAssignedIdentities?: {[key: string]: v20221115preview.ArmUserIdentityResponse};
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
            feedback?: v20221115preview.FeedbackPropertiesResponse;
            /**
             * The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
             */
            maxDeliveryCount?: number;
        }

        /**
         * The encryption properties for the IoT hub.
         */
        export interface EncryptionPropertiesDescriptionResponse {
            /**
             * The source of the key.
             */
            keySource?: string;
            /**
             * The properties of the KeyVault key.
             */
            keyVaultProperties?: v20221115preview.KeyVaultKeyPropertiesResponse[];
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
            authorizationPolicies?: v20221115preview.SharedAccessSignatureAuthorizationRuleResponse[];
            /**
             * The IoT hub cloud-to-device messaging properties.
             */
            cloudToDevice?: v20221115preview.CloudToDevicePropertiesResponse;
            /**
             * IoT hub comments.
             */
            comments?: string;
            /**
             * The device streams properties of iothub.
             */
            deviceStreams?: v20221115preview.IotHubPropertiesResponseDeviceStreams;
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
             * The encryption properties for the IoT hub.
             */
            encryption?: v20221115preview.EncryptionPropertiesDescriptionResponse;
            /**
             * The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
             */
            eventHubEndpoints?: {[key: string]: v20221115preview.EventHubPropertiesResponse};
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
            ipFilterRules?: v20221115preview.IpFilterRuleResponse[];
            /**
             * This property specifies the IP Version the hub is currently utilizing.
             */
            ipVersion?: string;
            /**
             * Primary and secondary location for iot hub
             */
            locations: v20221115preview.IotHubLocationDescriptionResponse[];
            /**
             * The messaging endpoint properties for the file upload notification queue.
             */
            messagingEndpoints?: {[key: string]: v20221115preview.MessagingEndpointPropertiesResponse};
            /**
             * Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected.
             */
            minTlsVersion?: string;
            /**
             * Network Rule Set Properties of IotHub
             */
            networkRuleSets?: v20221115preview.NetworkRuleSetPropertiesResponse;
            /**
             * Private endpoint connections created on this IotHub
             */
            privateEndpointConnections?: v20221115preview.PrivateEndpointConnectionResponse[];
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
             * This property store root certificate related information
             */
            rootCertificate?: v20221115preview.RootCertificatePropertiesResponse;
            /**
             * The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
             */
            routing?: v20221115preview.RoutingPropertiesResponse;
            /**
             * The hub state.
             */
            state: string;
            /**
             * The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.
             */
            storageEndpoints?: {[key: string]: v20221115preview.StorageEndpointPropertiesResponse};
        }
        /**
         * iotHubPropertiesResponseProvideDefaults sets the appropriate defaults for IotHubPropertiesResponse
         */
        export function iotHubPropertiesResponseProvideDefaults(val: IotHubPropertiesResponse): IotHubPropertiesResponse {
            return {
                ...val,
                networkRuleSets: (val.networkRuleSets ? v20221115preview.networkRuleSetPropertiesResponseProvideDefaults(val.networkRuleSets) : undefined),
            };
        }

        /**
         * The device streams properties of iothub.
         */
        export interface IotHubPropertiesResponseDeviceStreams {
            /**
             * List of Device Streams Endpoints.
             */
            streamingEndpoints?: string[];
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
         * The properties of the KeyVault key.
         */
        export interface KeyVaultKeyPropertiesResponse {
            /**
             * Managed identity properties of KeyVault Key.
             */
            identity?: v20221115preview.ManagedIdentityResponse;
            /**
             * The identifier of the key.
             */
            keyIdentifier?: string;
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
            ipRules: v20221115preview.NetworkRuleSetIpRuleResponse[];
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
            privateEndpoint?: v20221115preview.PrivateEndpointResponse;
            /**
             * The current state of a private endpoint connection
             */
            privateLinkServiceConnectionState: v20221115preview.PrivateLinkServiceConnectionStateResponse;
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
            properties: v20221115preview.PrivateEndpointConnectionPropertiesResponse;
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
         * This property store root certificate related information
         */
        export interface RootCertificatePropertiesResponse {
            /**
             * This property when set to true, hub will use G2 cert; while it's set to false, hub uses Baltimore Cert.
             */
            enableRootCertificateV2?: boolean;
            /**
             * the last update time to root certificate flag.
             */
            lastUpdatedTimeUtc: string;
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
         * The properties related to a cosmos DB sql collection endpoint.
         */
        export interface RoutingCosmosDBSqlApiPropertiesResponse {
            /**
             * Method used to authenticate against the cosmos DB sql collection endpoint
             */
            authenticationType?: string;
            /**
             * The name of the cosmos DB sql collection in the cosmos DB database.
             */
            collectionName: string;
            /**
             * The name of the cosmos DB database in the cosmos DB account.
             */
            databaseName: string;
            /**
             * The url of the cosmos DB account. It must include the protocol https://
             */
            endpointUri: string;
            /**
             * Id of the cosmos DB sql collection endpoint
             */
            id?: string;
            /**
             * Managed identity properties of routing cosmos DB collection endpoint.
             */
            identity?: v20221115preview.ManagedIdentityResponse;
            /**
             * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
             */
            name: string;
            /**
             * The name of the partition key associated with this cosmos DB sql collection if one exists. This is an optional parameter.
             */
            partitionKeyName?: string;
            /**
             * The template for generating a synthetic partition key value for use with this cosmos DB sql collection. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. This parameter is only required if PartitionKeyName is specified.
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
             * The list of Cosmos DB collection endpoints that IoT hub routes messages to, based on the routing rules.
             */
            cosmosDBSqlCollections?: v20221115preview.RoutingCosmosDBSqlApiPropertiesResponse[];
            /**
             * The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
             */
            eventHubs?: v20221115preview.RoutingEventHubPropertiesResponse[];
            /**
             * The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
             */
            serviceBusQueues?: v20221115preview.RoutingServiceBusQueueEndpointPropertiesResponse[];
            /**
             * The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
             */
            serviceBusTopics?: v20221115preview.RoutingServiceBusTopicEndpointPropertiesResponse[];
            /**
             * The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.
             */
            storageContainers?: v20221115preview.RoutingStorageContainerPropertiesResponse[];
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
            identity?: v20221115preview.ManagedIdentityResponse;
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
            endpoints?: v20221115preview.RoutingEndpointsResponse;
            /**
             * The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid
             */
            enrichments?: v20221115preview.EnrichmentPropertiesResponse[];
            /**
             * The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint.
             */
            fallbackRoute?: v20221115preview.FallbackRoutePropertiesResponse;
            /**
             * The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.
             */
            routes?: v20221115preview.RoutePropertiesResponse[];
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
            identity?: v20221115preview.ManagedIdentityResponse;
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
            identity?: v20221115preview.ManagedIdentityResponse;
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
            identity?: v20221115preview.ManagedIdentityResponse;
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
            identity?: v20221115preview.ManagedIdentityResponse;
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

    }

    export namespace v20221212 {
        /**
         * The description of an X509 CA Certificate.
         */
        export interface CertificatePropertiesResponse {
            /**
             * base-64 representation of X509 certificate .cer file or just .pem file content.
             */
            certificate?: string;
            /**
             * The certificate's creation date and time.
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
         * the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
         */
        export interface IotDpsPropertiesDescriptionResponse {
            /**
             * Allocation policy to be used by this provisioning service.
             */
            allocationPolicy?: string;
            /**
             * List of authorization keys for a provisioning service.
             */
            authorizationPolicies?: v20221212.SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse[];
            /**
             * Device endpoint for this provisioning service.
             */
            deviceProvisioningHostName: string;
            /**
             * Optional.
             * Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery.
             */
            enableDataResidency?: boolean;
            /**
             * Unique identifier of this provisioning service.
             */
            idScope: string;
            /**
             * List of IoT hubs associated with this provisioning service.
             */
            iotHubs?: v20221212.IotHubDefinitionDescriptionResponse[];
            /**
             * The IP filter rules.
             */
            ipFilterRules?: v20221212.TargetIpFilterRuleResponse[];
            /**
             * Portal endpoint to enable CORS for this provisioning service.
             */
            portalOperationsHostName?: string;
            /**
             * Private endpoint connections created on this IotHub
             */
            privateEndpointConnections?: v20221212.PrivateEndpointConnectionResponse[];
            /**
             * The ARM provisioning state of the provisioning service.
             */
            provisioningState?: string;
            /**
             * Whether requests from Public Network are allowed
             */
            publicNetworkAccess?: string;
            /**
             * Service endpoint for provisioning service.
             */
            serviceOperationsHostName: string;
            /**
             * Current state of the provisioning service.
             */
            state?: string;
        }

        /**
         * List of possible provisioning service SKUs.
         */
        export interface IotDpsSkuInfoResponse {
            /**
             * The number of units to provision
             */
            capacity?: number;
            /**
             * Sku name.
             */
            name?: string;
            /**
             * Pricing tier name of the provisioning service.
             */
            tier: string;
        }

        /**
         * Description of the IoT hub.
         */
        export interface IotHubDefinitionDescriptionResponse {
            /**
             * weight to apply for a given iot h.
             */
            allocationWeight?: number;
            /**
             * flag for applying allocationPolicy or not for a given iot hub.
             */
            applyAllocationPolicy?: boolean;
            /**
             * Connection string of the IoT hub.
             */
            connectionString: string;
            /**
             * ARM region of the IoT hub.
             */
            location: string;
            /**
             * Host name of the IoT hub.
             */
            name: string;
        }

        /**
         * The properties of a private endpoint connection
         */
        export interface PrivateEndpointConnectionPropertiesResponse {
            /**
             * The private endpoint property of a private endpoint connection
             */
            privateEndpoint?: v20221212.PrivateEndpointResponse;
            /**
             * The current state of a private endpoint connection
             */
            privateLinkServiceConnectionState: v20221212.PrivateLinkServiceConnectionStateResponse;
        }

        /**
         * The private endpoint connection of a provisioning service
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
            properties: v20221212.PrivateEndpointConnectionPropertiesResponse;
            /**
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20221212.SystemDataResponse;
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
         * Description of the shared access key.
         */
        export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse {
            /**
             * Name of the key.
             */
            keyName: string;
            /**
             * Primary SAS key value.
             */
            primaryKey?: string;
            /**
             * Rights that this key has.
             */
            rights: string;
            /**
             * Secondary SAS key value.
             */
            secondaryKey?: string;
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
         * The IP filter rules for a provisioning Service.
         */
        export interface TargetIpFilterRuleResponse {
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
            /**
             * Target for requests captured by this rule.
             */
            target?: string;
        }

    }

    export namespace v20230301preview {
        /**
         * The description of an X509 CA Certificate.
         */
        export interface CertificatePropertiesResponse {
            /**
             * base-64 representation of X509 certificate .cer file or just .pem file content.
             */
            certificate?: string;
            /**
             * The certificate's creation date and time.
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
         * the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
         */
        export interface IotDpsPropertiesDescriptionResponse {
            /**
             * Allocation policy to be used by this provisioning service.
             */
            allocationPolicy?: string;
            /**
             * List of authorization keys for a provisioning service.
             */
            authorizationPolicies?: v20230301preview.SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse[];
            /**
             * Device endpoint for this provisioning service.
             */
            deviceProvisioningHostName: string;
            /**
             * Optional.
             * Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery.
             */
            enableDataResidency?: boolean;
            /**
             * Unique identifier of this provisioning service.
             */
            idScope: string;
            /**
             * List of IoT hubs associated with this provisioning service.
             */
            iotHubs?: v20230301preview.IotHubDefinitionDescriptionResponse[];
            /**
             * The IP filter rules.
             */
            ipFilterRules?: v20230301preview.TargetIpFilterRuleResponse[];
            /**
             * Portal endpoint to enable CORS for this provisioning service.
             */
            portalOperationsHostName?: string;
            /**
             * Private endpoint connections created on this IotHub
             */
            privateEndpointConnections?: v20230301preview.PrivateEndpointConnectionResponse[];
            /**
             * The ARM provisioning state of the provisioning service.
             */
            provisioningState?: string;
            /**
             * Whether requests from Public Network are allowed
             */
            publicNetworkAccess?: string;
            /**
             * Service endpoint for provisioning service.
             */
            serviceOperationsHostName: string;
            /**
             * Current state of the provisioning service.
             */
            state?: string;
        }

        /**
         * List of possible provisioning service SKUs.
         */
        export interface IotDpsSkuInfoResponse {
            /**
             * The number of units to provision
             */
            capacity?: number;
            /**
             * Sku name.
             */
            name?: string;
            /**
             * Pricing tier name of the provisioning service.
             */
            tier: string;
        }

        /**
         * Description of the IoT hub.
         */
        export interface IotHubDefinitionDescriptionResponse {
            /**
             * weight to apply for a given iot h.
             */
            allocationWeight?: number;
            /**
             * flag for applying allocationPolicy or not for a given iot hub.
             */
            applyAllocationPolicy?: boolean;
            /**
             * Connection string of the IoT hub.
             */
            connectionString: string;
            /**
             * ARM region of the IoT hub.
             */
            location: string;
            /**
             * Host name of the IoT hub.
             */
            name: string;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityResponse {
            /**
             * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            principalId: string;
            /**
             * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            tenantId: string;
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: string;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: {[key: string]: v20230301preview.UserAssignedIdentityResponse};
        }

        /**
         * The properties of a private endpoint connection
         */
        export interface PrivateEndpointConnectionPropertiesResponse {
            /**
             * The private endpoint property of a private endpoint connection
             */
            privateEndpoint?: v20230301preview.PrivateEndpointResponse;
            /**
             * The current state of a private endpoint connection
             */
            privateLinkServiceConnectionState: v20230301preview.PrivateLinkServiceConnectionStateResponse;
        }

        /**
         * The private endpoint connection of a provisioning service
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
            properties: v20230301preview.PrivateEndpointConnectionPropertiesResponse;
            /**
             * Metadata pertaining to creation and last modification of the resource.
             */
            systemData: v20230301preview.SystemDataResponse;
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
         * Description of the shared access key.
         */
        export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse {
            /**
             * Name of the key.
             */
            keyName: string;
            /**
             * Primary SAS key value.
             */
            primaryKey?: string;
            /**
             * Rights that this key has.
             */
            rights: string;
            /**
             * Secondary SAS key value.
             */
            secondaryKey?: string;
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
         * The IP filter rules for a provisioning Service.
         */
        export interface TargetIpFilterRuleResponse {
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
            /**
             * Target for requests captured by this rule.
             */
            target?: string;
        }

        /**
         * User assigned identity properties
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the assigned identity.
             */
            clientId: string;
            /**
             * The principal ID of the assigned identity.
             */
            principalId: string;
        }

    }

    export namespace v20230630 {
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
            userAssignedIdentities?: {[key: string]: v20230630.ArmUserIdentityResponse};
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
            feedback?: v20230630.FeedbackPropertiesResponse;
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
            authorizationPolicies?: v20230630.SharedAccessSignatureAuthorizationRuleResponse[];
            /**
             * The IoT hub cloud-to-device messaging properties.
             */
            cloudToDevice?: v20230630.CloudToDevicePropertiesResponse;
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
            eventHubEndpoints?: {[key: string]: v20230630.EventHubPropertiesResponse};
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
            ipFilterRules?: v20230630.IpFilterRuleResponse[];
            /**
             * Primary and secondary location for iot hub
             */
            locations: v20230630.IotHubLocationDescriptionResponse[];
            /**
             * The messaging endpoint properties for the file upload notification queue.
             */
            messagingEndpoints?: {[key: string]: v20230630.MessagingEndpointPropertiesResponse};
            /**
             * Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected.
             */
            minTlsVersion?: string;
            /**
             * Network Rule Set Properties of IotHub
             */
            networkRuleSets?: v20230630.NetworkRuleSetPropertiesResponse;
            /**
             * Private endpoint connections created on this IotHub
             */
            privateEndpointConnections?: v20230630.PrivateEndpointConnectionResponse[];
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
            routing?: v20230630.RoutingPropertiesResponse;
            /**
             * The hub state.
             */
            state: string;
            /**
             * The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.
             */
            storageEndpoints?: {[key: string]: v20230630.StorageEndpointPropertiesResponse};
        }
        /**
         * iotHubPropertiesResponseProvideDefaults sets the appropriate defaults for IotHubPropertiesResponse
         */
        export function iotHubPropertiesResponseProvideDefaults(val: IotHubPropertiesResponse): IotHubPropertiesResponse {
            return {
                ...val,
                networkRuleSets: (val.networkRuleSets ? v20230630.networkRuleSetPropertiesResponseProvideDefaults(val.networkRuleSets) : undefined),
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
            ipRules: v20230630.NetworkRuleSetIpRuleResponse[];
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
            privateEndpoint?: v20230630.PrivateEndpointResponse;
            /**
             * The current state of a private endpoint connection
             */
            privateLinkServiceConnectionState: v20230630.PrivateLinkServiceConnectionStateResponse;
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
            properties: v20230630.PrivateEndpointConnectionPropertiesResponse;
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
            identity?: v20230630.ManagedIdentityResponse;
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
            cosmosDBSqlContainers?: v20230630.RoutingCosmosDBSqlApiPropertiesResponse[];
            /**
             * The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
             */
            eventHubs?: v20230630.RoutingEventHubPropertiesResponse[];
            /**
             * The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
             */
            serviceBusQueues?: v20230630.RoutingServiceBusQueueEndpointPropertiesResponse[];
            /**
             * The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
             */
            serviceBusTopics?: v20230630.RoutingServiceBusTopicEndpointPropertiesResponse[];
            /**
             * The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.
             */
            storageContainers?: v20230630.RoutingStorageContainerPropertiesResponse[];
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
            identity?: v20230630.ManagedIdentityResponse;
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
            endpoints?: v20230630.RoutingEndpointsResponse;
            /**
             * The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid
             */
            enrichments?: v20230630.EnrichmentPropertiesResponse[];
            /**
             * The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not present in the template, the fallback route is disabled by default.
             */
            fallbackRoute?: v20230630.FallbackRoutePropertiesResponse;
            /**
             * The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.
             */
            routes?: v20230630.RoutePropertiesResponse[];
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
            identity?: v20230630.ManagedIdentityResponse;
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
            identity?: v20230630.ManagedIdentityResponse;
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
            identity?: v20230630.ManagedIdentityResponse;
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
            identity?: v20230630.ManagedIdentityResponse;
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

    }

    export namespace v20230630preview {
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
             * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type?: string;
            userAssignedIdentities?: {[key: string]: v20230630preview.ArmUserIdentityResponse};
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
            feedback?: v20230630preview.FeedbackPropertiesResponse;
            /**
             * The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
             */
            maxDeliveryCount?: number;
        }

        /**
         * The encryption properties for the IoT hub.
         */
        export interface EncryptionPropertiesDescriptionResponse {
            /**
             * The source of the key.
             */
            keySource?: string;
            /**
             * The properties of the KeyVault key.
             */
            keyVaultProperties?: v20230630preview.KeyVaultKeyPropertiesResponse[];
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
            authorizationPolicies?: v20230630preview.SharedAccessSignatureAuthorizationRuleResponse[];
            /**
             * The IoT hub cloud-to-device messaging properties.
             */
            cloudToDevice?: v20230630preview.CloudToDevicePropertiesResponse;
            /**
             * IoT hub comments.
             */
            comments?: string;
            /**
             * The device streams properties of iothub.
             */
            deviceStreams?: v20230630preview.IotHubPropertiesResponseDeviceStreams;
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
             * The encryption properties for the IoT hub.
             */
            encryption?: v20230630preview.EncryptionPropertiesDescriptionResponse;
            /**
             * The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
             */
            eventHubEndpoints?: {[key: string]: v20230630preview.EventHubPropertiesResponse};
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
            ipFilterRules?: v20230630preview.IpFilterRuleResponse[];
            /**
             * This property specifies the IP Version the hub is currently utilizing.
             */
            ipVersion?: string;
            /**
             * Primary and secondary location for iot hub
             */
            locations: v20230630preview.IotHubLocationDescriptionResponse[];
            /**
             * The messaging endpoint properties for the file upload notification queue.
             */
            messagingEndpoints?: {[key: string]: v20230630preview.MessagingEndpointPropertiesResponse};
            /**
             * Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected.
             */
            minTlsVersion?: string;
            /**
             * Network Rule Set Properties of IotHub
             */
            networkRuleSets?: v20230630preview.NetworkRuleSetPropertiesResponse;
            /**
             * Private endpoint connections created on this IotHub
             */
            privateEndpointConnections?: v20230630preview.PrivateEndpointConnectionResponse[];
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
             * This property store root certificate related information
             */
            rootCertificate?: v20230630preview.RootCertificatePropertiesResponse;
            /**
             * The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
             */
            routing?: v20230630preview.RoutingPropertiesResponse;
            /**
             * The hub state.
             */
            state: string;
            /**
             * The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.
             */
            storageEndpoints?: {[key: string]: v20230630preview.StorageEndpointPropertiesResponse};
        }
        /**
         * iotHubPropertiesResponseProvideDefaults sets the appropriate defaults for IotHubPropertiesResponse
         */
        export function iotHubPropertiesResponseProvideDefaults(val: IotHubPropertiesResponse): IotHubPropertiesResponse {
            return {
                ...val,
                networkRuleSets: (val.networkRuleSets ? v20230630preview.networkRuleSetPropertiesResponseProvideDefaults(val.networkRuleSets) : undefined),
            };
        }

        /**
         * The device streams properties of iothub.
         */
        export interface IotHubPropertiesResponseDeviceStreams {
            /**
             * List of Device Streams Endpoints.
             */
            streamingEndpoints?: string[];
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
         * The properties of the KeyVault key.
         */
        export interface KeyVaultKeyPropertiesResponse {
            /**
             * Managed identity properties of KeyVault Key.
             */
            identity?: v20230630preview.ManagedIdentityResponse;
            /**
             * The identifier of the key.
             */
            keyIdentifier?: string;
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
            ipRules: v20230630preview.NetworkRuleSetIpRuleResponse[];
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
            privateEndpoint?: v20230630preview.PrivateEndpointResponse;
            /**
             * The current state of a private endpoint connection
             */
            privateLinkServiceConnectionState: v20230630preview.PrivateLinkServiceConnectionStateResponse;
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
            properties: v20230630preview.PrivateEndpointConnectionPropertiesResponse;
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
         * This property store root certificate related information
         */
        export interface RootCertificatePropertiesResponse {
            /**
             * This property when set to true, hub will use G2 cert; while it's set to false, hub uses Baltimore Cert.
             */
            enableRootCertificateV2?: boolean;
            /**
             * the last update time to root certificate flag.
             */
            lastUpdatedTimeUtc: string;
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
            id?: string;
            /**
             * Managed identity properties of routing cosmos DB container endpoint.
             */
            identity?: v20230630preview.ManagedIdentityResponse;
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
            cosmosDBSqlContainers?: v20230630preview.RoutingCosmosDBSqlApiPropertiesResponse[];
            /**
             * The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
             */
            eventHubs?: v20230630preview.RoutingEventHubPropertiesResponse[];
            /**
             * The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
             */
            serviceBusQueues?: v20230630preview.RoutingServiceBusQueueEndpointPropertiesResponse[];
            /**
             * The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
             */
            serviceBusTopics?: v20230630preview.RoutingServiceBusTopicEndpointPropertiesResponse[];
            /**
             * The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.
             */
            storageContainers?: v20230630preview.RoutingStorageContainerPropertiesResponse[];
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
            identity?: v20230630preview.ManagedIdentityResponse;
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
            endpoints?: v20230630preview.RoutingEndpointsResponse;
            /**
             * The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid
             */
            enrichments?: v20230630preview.EnrichmentPropertiesResponse[];
            /**
             * The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint.
             */
            fallbackRoute?: v20230630preview.FallbackRoutePropertiesResponse;
            /**
             * The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.
             */
            routes?: v20230630preview.RoutePropertiesResponse[];
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
            identity?: v20230630preview.ManagedIdentityResponse;
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
            identity?: v20230630preview.ManagedIdentityResponse;
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
            identity?: v20230630preview.ManagedIdentityResponse;
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
            identity?: v20230630preview.ManagedIdentityResponse;
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

    }
}
