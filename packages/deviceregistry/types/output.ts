import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the asset endpoint profile status error properties.
 */
export interface AssetEndpointProfileStatusErrorResponse {
    /**
     * Error code for classification of errors (ex: 400, 404, 500, etc.).
     */
    code: number;
    /**
     * Human readable helpful error message to provide additional context for error (ex: “targetAddress 'foo' is not a valid url”).
     */
    message: string;
}

/**
 * Defines the asset endpoint profile status properties.
 */
export interface AssetEndpointProfileStatusResponse {
    /**
     * Array object to transfer and persist errors that originate from the Edge.
     */
    errors: AssetEndpointProfileStatusErrorResponse[];
}

/**
 * Defines the asset status dataset properties.
 */
export interface AssetStatusDatasetResponse {
    /**
     * The message schema reference object.
     */
    messageSchemaReference: MessageSchemaReferenceResponse;
    /**
     * The name of the dataset. Must be unique within the status.datasets array. This name is used to correlate between the spec and status dataset information.
     */
    name: string;
}

/**
 * Defines the asset status error properties.
 */
export interface AssetStatusErrorResponse {
    /**
     * Error code for classification of errors (ex: 400, 404, 500, etc.).
     */
    code: number;
    /**
     * Human readable helpful error message to provide additional context for error (ex: “capability Id 'foo' does not exist”).
     */
    message: string;
}

/**
 * Defines the asset status event properties.
 */
export interface AssetStatusEventResponse {
    /**
     * The message schema reference object.
     */
    messageSchemaReference: MessageSchemaReferenceResponse;
    /**
     * The name of the event. Must be unique within the status.events array. This name is used to correlate between the spec and status event information.
     */
    name: string;
}

/**
 * Defines the asset status properties.
 */
export interface AssetStatusResponse {
    /**
     * Array of dataset statuses that describe the status of each dataset.
     */
    datasets: AssetStatusDatasetResponse[];
    /**
     * Array object to transfer and persist errors that originate from the Edge.
     */
    errors: AssetStatusErrorResponse[];
    /**
     * Array of event statuses that describe the status of each event.
     */
    events: AssetStatusEventResponse[];
    /**
     * A read only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (Edge) state of the Asset. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.
     */
    version: number;
}

/**
 * Definition of the client authentication mechanism to the server.
 */
export interface AuthenticationResponse {
    /**
     * Defines the method to authenticate the user of the client at the server.
     */
    method: string;
    /**
     * Defines the username and password references when UsernamePassword user authentication mode is selected.
     */
    usernamePasswordCredentials?: UsernamePasswordCredentialsResponse;
    /**
     * Defines the certificate reference when Certificate user authentication mode is selected.
     */
    x509Credentials?: X509CredentialsResponse;
}
/**
 * authenticationResponseProvideDefaults sets the appropriate defaults for AuthenticationResponse
 */
export function authenticationResponseProvideDefaults(val: AuthenticationResponse): AuthenticationResponse {
    return {
        ...val,
        method: (val.method) ?? "Certificate",
    };
}

/**
 * The configuration for a MQTT broker state store destination.
 */
export interface BrokerStateStoreDestinationConfigurationResponse {
    /**
     * The MQTT broker state store destination key.
     */
    key: string;
}

/**
 * Defines the data point properties.
 */
export interface DataPointResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: string;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: string;
    /**
     * The name of the data point.
     */
    name: string;
    /**
     * An indication of how the data point should be mapped to OpenTelemetry.
     */
    observabilityMode?: string;
}
/**
 * dataPointResponseProvideDefaults sets the appropriate defaults for DataPointResponse
 */
export function dataPointResponseProvideDefaults(val: DataPointResponse): DataPointResponse {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "None",
    };
}

/**
 * The type for a MQTT broker state store destination.
 */
export interface DatasetBrokerStateStoreDestinationResponse {
    /**
     * The MQTT broker state store destination configuration.
     */
    configuration: BrokerStateStoreDestinationConfigurationResponse;
    /**
     * The set of supported dataset destinations for an asset.
     * Expected value is 'BrokerStateStore'.
     */
    target: "BrokerStateStore";
}

/**
 * The type for a MQTT destination.
 */
export interface DatasetMqttDestinationResponse {
    /**
     * The MQTT destination configuration.
     */
    configuration: MqttDestinationConfigurationResponse;
    /**
     * The set of supported dataset destinations for an asset.
     * Expected value is 'Mqtt'.
     */
    target: "Mqtt";
}
/**
 * datasetMqttDestinationResponseProvideDefaults sets the appropriate defaults for DatasetMqttDestinationResponse
 */
export function datasetMqttDestinationResponseProvideDefaults(val: DatasetMqttDestinationResponse): DatasetMqttDestinationResponse {
    return {
        ...val,
        configuration: mqttDestinationConfigurationResponseProvideDefaults(val.configuration),
    };
}

/**
 * Defines the dataset properties.
 */
export interface DatasetResponse {
    /**
     * Array of data points that are part of the dataset. Each data point can have per-data point configuration.
     */
    dataPoints?: DataPointResponse[];
    /**
     * Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset.
     */
    datasetConfiguration?: string;
    /**
     * Name of the dataset.
     */
    name: string;
    /**
     * Object that describes the topic information for the specific dataset.
     */
    topic?: TopicResponse;
}
/**
 * datasetResponseProvideDefaults sets the appropriate defaults for DatasetResponse
 */
export function datasetResponseProvideDefaults(val: DatasetResponse): DatasetResponse {
    return {
        ...val,
        topic: (val.topic ? topicResponseProvideDefaults(val.topic) : undefined),
    };
}

/**
 * The type for a storage destination.
 */
export interface DatasetStorageDestinationResponse {
    /**
     * The storage destination configuration.
     */
    configuration: StorageDestinationConfigurationResponse;
    /**
     * The set of supported dataset destinations for an asset.
     * Expected value is 'Storage'.
     */
    target: "Storage";
}

/**
 * Device messaging endpoint model.
 */
export interface DeviceMessagingEndpointResponse {
    /**
     * The endpoint address to connect to.
     */
    address: string;
    /**
     * Type of connection used for the messaging endpoint.
     */
    endpointType?: string;
}

/**
 * Defines which device and endpoint to use for this asset
 */
export interface DeviceRefResponse {
    /**
     * Name of the device resource
     */
    deviceName: string;
    /**
     * The name of endpoint to use
     */
    endpointName: string;
}

/**
 * Defines the device status properties.
 */
export interface DeviceStatusEndpointResponse {
    /**
     * Defines the error related to this endpoint.
     */
    error: StatusErrorResponse;
}

/**
 * Defines the device status for inbound/outbound endpoints.
 */
export interface DeviceStatusEndpointsResponse {
    /**
     * KeyValue pair representing status of inbound endpoints.
     */
    inbound: {[key: string]: DeviceStatusEndpointResponse};
}

/**
 * Defines the device status properties.
 */
export interface DeviceStatusResponse {
    /**
     * Defines the device status config properties.
     */
    config: StatusConfigResponse;
    /**
     * Defines the device status for inbound/outbound endpoints.
     */
    endpoints: DeviceStatusEndpointsResponse;
}

/**
 * Defines the data point properties.
 */
export interface DiscoveredDataPointResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: string;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: string;
    /**
     * UTC timestamp indicating when the data point was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * The name of the data point.
     */
    name: string;
}

/**
 * Defines the dataset properties.
 */
export interface DiscoveredDatasetResponse {
    /**
     * Array of data points that are part of the dataset. Each data point can have per-data point configuration.
     */
    dataPoints?: DiscoveredDataPointResponse[];
    /**
     * Stringified JSON that contains connector-specific properties that describes configuration for the specific dataset.
     */
    datasetConfiguration?: string;
    /**
     * Name of the dataset.
     */
    name: string;
    /**
     * Object that describes the topic information for the specific dataset.
     */
    topic?: TopicResponse;
}
/**
 * discoveredDatasetResponseProvideDefaults sets the appropriate defaults for DiscoveredDatasetResponse
 */
export function discoveredDatasetResponseProvideDefaults(val: DiscoveredDatasetResponse): DiscoveredDatasetResponse {
    return {
        ...val,
        topic: (val.topic ? topicResponseProvideDefaults(val.topic) : undefined),
    };
}

/**
 * Defines the event properties.
 */
export interface DiscoveredEventResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: string;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: string;
    /**
     * UTC timestamp indicating when the event was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * The name of the event.
     */
    name: string;
    /**
     * Object that describes the topic information for the specific event.
     */
    topic?: TopicResponse;
}
/**
 * discoveredEventResponseProvideDefaults sets the appropriate defaults for DiscoveredEventResponse
 */
export function discoveredEventResponseProvideDefaults(val: DiscoveredEventResponse): DiscoveredEventResponse {
    return {
        ...val,
        topic: (val.topic ? topicResponseProvideDefaults(val.topic) : undefined),
    };
}

/**
 * An endpoint to connect to the device.
 */
export interface DiscoveredInboundEndpointsResponse {
    /**
     * Stringified JSON that contains configuration to be used by the connector (e.g., OPC UA, ONVIF).
     */
    additionalConfiguration?: string;
    /**
     * The endpoint address & port. This can be either an IP address (e.g., 192.168.1.1) or a fully qualified domain name (FQDN, e.g., server.example.com).
     */
    address: string;
    /**
     * Type of connection endpoint.
     */
    endpointType: string;
    /**
     * The timestamp (in UTC) when the endpoint was discovered.
     */
    lastUpdatedOn?: string;
    /**
     * List of supported authentication methods supported by device for Inbound connections.
     */
    supportedAuthenticationMethods?: string[];
    /**
     * Protocol version associated with the endpoint e.g. 1 or 2 for endpointType Microsoft.HTTP, and 3.5 or 5.0 for endpointType Microsoft.Mqtt etc.
     */
    version?: string;
}

/**
 * Connection endpoint URL a device can use to connect to a service.
 */
export interface DiscoveredMessagingEndpointsResponse {
    /**
     * Set of endpoints to connect to the device.
     */
    inbound?: {[key: string]: DiscoveredInboundEndpointsResponse};
    /**
     * Set of endpoints a device can connect to.
     */
    outbound?: DiscoveredOutboundEndpointsResponse;
}

/**
 * Property bag contains the device's outbound endpoints
 */
export interface DiscoveredOutboundEndpointsResponse {
    /**
     * Endpoints the device can connect to.
     */
    assigned: {[key: string]: DeviceMessagingEndpointResponse};
}

/**
 * Defines the error details properties.
 */
export interface ErrorDetailsResponse {
    /**
     * Multi-part error code for classification and root causing of errors (ex: 400.200.100.432).
     */
    code: string;
    /**
     * Unique identifier for the transaction to aid in debugging.
     */
    correlationId: string;
    /**
     * Human-readable helpful detailed text context for debugging (ex: “The following mechanisms are supported...”).
     */
    info: string;
    /**
     * Human-readable helpful error message to provide additional context for error (ex: “Authentication method not supported”).
     */
    message: string;
}

/**
 * The type for a MQTT destination.
 */
export interface EventMqttDestinationResponse {
    /**
     * The MQTT destination configuration.
     */
    configuration: MqttDestinationConfigurationResponse;
    /**
     * The set of supported event destinations for an asset.
     * Expected value is 'Mqtt'.
     */
    target: "Mqtt";
}
/**
 * eventMqttDestinationResponseProvideDefaults sets the appropriate defaults for EventMqttDestinationResponse
 */
export function eventMqttDestinationResponseProvideDefaults(val: EventMqttDestinationResponse): EventMqttDestinationResponse {
    return {
        ...val,
        configuration: mqttDestinationConfigurationResponseProvideDefaults(val.configuration),
    };
}

/**
 * Defines the event properties.
 */
export interface EventResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: string;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: string;
    /**
     * The name of the event.
     */
    name: string;
    /**
     * An indication of how the event should be mapped to OpenTelemetry.
     */
    observabilityMode?: string;
    /**
     * Object that describes the topic information for the specific event.
     */
    topic?: TopicResponse;
}
/**
 * eventResponseProvideDefaults sets the appropriate defaults for EventResponse
 */
export function eventResponseProvideDefaults(val: EventResponse): EventResponse {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "None",
        topic: (val.topic ? topicResponseProvideDefaults(val.topic) : undefined),
    };
}

/**
 * The type for a storage destination.
 */
export interface EventStorageDestinationResponse {
    /**
     * The storage destination configuration.
     */
    configuration: StorageDestinationConfigurationResponse;
    /**
     * The set of supported event destinations for an asset.
     * Expected value is 'Storage'.
     */
    target: "Storage";
}

/**
 * The extended location.
 */
export interface ExtendedLocationResponse {
    /**
     * The extended location name.
     */
    name: string;
    /**
     * The extended location type.
     */
    type: string;
}

/**
 * Definition of the client authentication mechanism to the host.
 */
export interface HostAuthenticationResponse {
    /**
     * Defines the method to authenticate the user of the client at the server.
     */
    method: string;
    /**
     * Defines the username and password references when UsernamePassword user authentication mode is selected.
     */
    usernamePasswordCredentials?: UsernamePasswordCredentialsResponse;
    /**
     * Defines the certificate reference when Certificate user authentication mode is selected.
     */
    x509Credentials?: X509CredentialsResponse;
}
/**
 * hostAuthenticationResponseProvideDefaults sets the appropriate defaults for HostAuthenticationResponse
 */
export function hostAuthenticationResponseProvideDefaults(val: HostAuthenticationResponse): HostAuthenticationResponse {
    return {
        ...val,
        method: (val.method) ?? "Certificate",
    };
}

/**
 * An endpoint to connect to the device.
 */
export interface InboundEndpointsResponse {
    /**
     * Stringified JSON that contains configuration to be used by the connector (e.g., OPC UA, ONVIF).
     */
    additionalConfiguration?: string;
    /**
     * The endpoint address & port. This can be either an IP address (e.g., 192.168.1.1) or a fully qualified domain name (FQDN, e.g., server.example.com).
     */
    address: string;
    /**
     * Defines the client authentication mechanism to the server.
     */
    authentication?: HostAuthenticationResponse;
    /**
     * Type of connection endpoint.
     */
    endpointType: string;
    /**
     * Defines server trust settings for the endpoint.
     */
    trustSettings?: TrustSettingsResponse;
    /**
     * Protocol version associated with the endpoint e.g. 1 or 2 for endpointType Microsoft.HTTP, and 3.5 or 5.0 for endpointType Microsoft.Mqtt etc.
     */
    version?: string;
}
/**
 * inboundEndpointsResponseProvideDefaults sets the appropriate defaults for InboundEndpointsResponse
 */
export function inboundEndpointsResponseProvideDefaults(val: InboundEndpointsResponse): InboundEndpointsResponse {
    return {
        ...val,
        authentication: (val.authentication ? hostAuthenticationResponseProvideDefaults(val.authentication) : undefined),
    };
}

/**
 * Defines the action properties.
 */
export interface ManagementActionResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the action.
     */
    actionConfiguration?: string;
    /**
     * The type of the action.
     */
    actionType?: string;
    /**
     * Name of the action.
     */
    name: string;
    /**
     * The target URI on which a client can invoke the specific action.
     */
    targetUri: string;
    /**
     * Response timeout for the action.
     */
    timeoutInSeconds?: number;
    /**
     * The MQTT topic path on which a client will receive the request for the action.
     */
    topic?: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}
/**
 * managementActionResponseProvideDefaults sets the appropriate defaults for ManagementActionResponse
 */
export function managementActionResponseProvideDefaults(val: ManagementActionResponse): ManagementActionResponse {
    return {
        ...val,
        actionType: (val.actionType) ?? "Call",
    };
}

/**
 * Defines the management group properties.
 */
export interface ManagementGroupResponse {
    /**
     * Array of actions that are part of the management group. Each action can have an individual configuration.
     */
    actions?: ManagementActionResponse[];
    /**
     * Default response timeout for all actions that are part of the management group.
     */
    defaultTimeoutInSeconds?: number;
    /**
     * Default MQTT topic path on which a client will receive the request for all actions that are part of the management group.
     */
    defaultTopic?: string;
    /**
     * Stringified JSON that contains connector-specific configuration for the management group.
     */
    managementGroupConfiguration?: string;
    /**
     * Name of the management group.
     */
    name: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}
/**
 * managementGroupResponseProvideDefaults sets the appropriate defaults for ManagementGroupResponse
 */
export function managementGroupResponseProvideDefaults(val: ManagementGroupResponse): ManagementGroupResponse {
    return {
        ...val,
        defaultTimeoutInSeconds: (val.defaultTimeoutInSeconds) ?? 100,
    };
}

/**
 * Defines the message schema reference properties.
 */
export interface MessageSchemaReferenceResponse {
    /**
     * The message schema name.
     */
    schemaName: string;
    /**
     * The message schema registry namespace.
     */
    schemaRegistryNamespace: string;
    /**
     * The message schema version.
     */
    schemaVersion: string;
}

/**
 * Namespace messaging endpoint model used by a device to connect to a service.
 */
export interface MessagingEndpointResponse {
    /**
     * The endpoint address to connect to.
     */
    address: string;
    /**
     * Type of connection used for messaging endpoint.
     */
    endpointType?: string;
    /**
     * The messaging endpoint Azure resource Id.
     */
    resourceId?: string;
}

/**
 * Connection endpoint URL a device can use to connect to a service.
 */
export interface MessagingEndpointsResponse {
    /**
     * Set of endpoints to connect to the device.
     */
    inbound?: {[key: string]: InboundEndpointsResponse};
    /**
     * Set of endpoints a device can connect to.
     */
    outbound?: OutboundEndpointsResponse;
}

/**
 * The namespace messaging endpoints model.
 */
export interface MessagingResponse {
    /**
     * Dictionary of messaging endpoints.
     */
    endpoints?: {[key: string]: MessagingEndpointResponse};
}

/**
 * The configuration for a MQTT destination.
 */
export interface MqttDestinationConfigurationResponse {
    /**
     * The MQTT QoS setting. Defaults to QoS 1.
     */
    qos?: string;
    /**
     * When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.
     */
    retain?: string;
    /**
     * The MQTT topic.
     */
    topic: string;
    /**
     * The MQTT TTL setting.
     */
    ttl?: number;
}
/**
 * mqttDestinationConfigurationResponseProvideDefaults sets the appropriate defaults for MqttDestinationConfigurationResponse
 */
export function mqttDestinationConfigurationResponseProvideDefaults(val: MqttDestinationConfigurationResponse): MqttDestinationConfigurationResponse {
    return {
        ...val,
        qos: (val.qos) ?? "Qos1",
        retain: (val.retain) ?? "Never",
    };
}

/**
 * Defines the asset status dataset properties.
 */
export interface NamespaceAssetStatusDatasetResponse {
    /**
     * Object to transfer and persist errors that originate from the edge.
     */
    error: StatusErrorResponse;
    /**
     * The message schema reference object.
     */
    messageSchemaReference: NamespaceMessageSchemaReferenceResponse;
    /**
     * The name of the dataset. Must be unique within the status.datasets array. This name is used to correlate between the spec and status dataset information.
     */
    name: string;
}

/**
 * Defines the asset status event properties.
 */
export interface NamespaceAssetStatusEventResponse {
    /**
     * Object to transfer and persist errors that originate from the edge.
     */
    error: StatusErrorResponse;
    /**
     * The message schema reference object.
     */
    messageSchemaReference: NamespaceMessageSchemaReferenceResponse;
    /**
     * The name of the event. Must be unique within the status.events array. This name is used to correlate between the spec and status event information.
     */
    name: string;
}

/**
 * Defines the asset status action properties.
 */
export interface NamespaceAssetStatusManagementActionResponse {
    /**
     * Object to transfer and persist errors that originate from the edge.
     */
    error: StatusErrorResponse;
    /**
     * The name of the action. Must be unique within the status.actions array. This name is used to correlate between the spec and status event information.
     */
    name: string;
    /**
     * The request message schema reference object for the action.
     */
    requestMessageSchemaReference: NamespaceMessageSchemaReferenceResponse;
    /**
     * The response message schema reference object for the action.
     */
    responseMessageSchemaReference: NamespaceMessageSchemaReferenceResponse;
}

/**
 * Defines the asset status management group properties.
 */
export interface NamespaceAssetStatusManagementGroupResponse {
    /**
     * Array of action statuses that describe the status of each action.
     */
    actions: NamespaceAssetStatusManagementActionResponse[];
    /**
     * The name of the management group. Must be unique within the status.managementGroups array. This name is used to correlate between the spec and status event information.
     */
    name: string;
}

/**
 * Defines the asset status properties.
 */
export interface NamespaceAssetStatusResponse {
    /**
     * Defines the asset status config properties.
     */
    config: StatusConfigResponse;
    /**
     * Array of dataset statuses that describe the status of each dataset.
     */
    datasets: NamespaceAssetStatusDatasetResponse[];
    /**
     * Array of event statuses that describe the status of each event.
     */
    events: NamespaceAssetStatusEventResponse[];
    /**
     * Array of management group statuses that describe the status of each management group.
     */
    managementGroups: NamespaceAssetStatusManagementGroupResponse[];
    /**
     * Array of stream statuses that describe the status of each stream.
     */
    streams: NamespaceAssetStatusStreamResponse[];
}

/**
 * Defines the asset status stream properties.
 */
export interface NamespaceAssetStatusStreamResponse {
    /**
     * Object to transfer and persist errors that originate from the edge.
     */
    error: StatusErrorResponse;
    /**
     * The message schema reference object.
     */
    messageSchemaReference: NamespaceMessageSchemaReferenceResponse;
    /**
     * The name of the stream. Must be unique within the status.streams array. This name is used to correlate between the spec and status event information.
     */
    name: string;
}

/**
 * Defines the dataset data point properties.
 */
export interface NamespaceDatasetDataPointResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: string;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: string;
    /**
     * The name of the data point.
     */
    name: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}

/**
 * Defines the dataset properties.
 */
export interface NamespaceDatasetResponse {
    /**
     * Array of data points that are part of the dataset. Each data point can have per-data point configuration.
     */
    dataPoints?: NamespaceDatasetDataPointResponse[];
    /**
     * Reference to a data source for a given dataset.
     */
    dataSource?: string;
    /**
     * Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset.
     */
    datasetConfiguration?: string;
    /**
     * Destinations for a dataset.
     */
    destinations?: (DatasetBrokerStateStoreDestinationResponse | DatasetMqttDestinationResponse | DatasetStorageDestinationResponse)[];
    /**
     * Name of the dataset.
     */
    name: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}

/**
 * Defines the discovered dataset data point properties.
 */
export interface NamespaceDiscoveredDatasetDataPointResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: string;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: string;
    /**
     * UTC timestamp indicating when the data point was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * The name of the data point.
     */
    name: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}

/**
 * Defines the dataset properties.
 */
export interface NamespaceDiscoveredDatasetResponse {
    /**
     * Array of data points that are part of the dataset. Each data point can have per-data point configuration.
     */
    dataPoints?: NamespaceDiscoveredDatasetDataPointResponse[];
    /**
     * Reference to a data source for a given dataset.
     */
    dataSource?: string;
    /**
     * Stringified JSON that contains connector-specific properties that describes configuration for the specific dataset.
     */
    datasetConfiguration?: string;
    /**
     * Destinations for a dataset.
     */
    destinations?: (DatasetBrokerStateStoreDestinationResponse | DatasetMqttDestinationResponse | DatasetStorageDestinationResponse)[];
    /**
     * Timestamp (in UTC) indicating when the dataset was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * Name of the dataset.
     */
    name: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}

/**
 * Defines the discovered event data point properties.
 */
export interface NamespaceDiscoveredEventDataPointResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: string;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: string;
    /**
     * UTC timestamp indicating when the data point was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * The name of the data point.
     */
    name: string;
}

/**
 * Defines the event properties.
 */
export interface NamespaceDiscoveredEventResponse {
    /**
     * Array of data points that are part of the event. Each data point can have a per-data point configuration.
     */
    dataPoints?: NamespaceDiscoveredEventDataPointResponse[];
    /**
     * Destinations for an event.
     */
    destinations?: (EventMqttDestinationResponse | EventStorageDestinationResponse)[];
    /**
     * Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: string;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: string;
    /**
     * UTC timestamp indicating when the event was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * The name of the event.
     */
    name: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}

/**
 * Defines the action properties.
 */
export interface NamespaceDiscoveredManagementActionResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the action.
     */
    actionConfiguration?: string;
    /**
     * The type of the action.
     */
    actionType?: string;
    /**
     * Timestamp (in UTC) indicating when the management action was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * Name of the action.
     */
    name: string;
    /**
     * The target URI on which a client can invoke the specific action.
     */
    targetUri: string;
    /**
     * Response timeout for the action.
     */
    timeoutInSeconds?: number;
    /**
     * The MQTT topic path on which a client will receive the request for the action.
     */
    topic?: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}
/**
 * namespaceDiscoveredManagementActionResponseProvideDefaults sets the appropriate defaults for NamespaceDiscoveredManagementActionResponse
 */
export function namespaceDiscoveredManagementActionResponseProvideDefaults(val: NamespaceDiscoveredManagementActionResponse): NamespaceDiscoveredManagementActionResponse {
    return {
        ...val,
        actionType: (val.actionType) ?? "Call",
    };
}

/**
 * Defines the management group properties.
 */
export interface NamespaceDiscoveredManagementGroupResponse {
    /**
     * Array of actions that are part of the management group. Each action can have an individual configuration.
     */
    actions?: NamespaceDiscoveredManagementActionResponse[];
    /**
     * Default response timeout for all actions that are part of the management group.
     */
    defaultTimeoutInSeconds?: number;
    /**
     * Default MQTT topic path on which a client will receive the request for all actions that are part of the management group.
     */
    defaultTopic?: string;
    /**
     * Timestamp (in UTC) indicating when the management group was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * Stringified JSON that contains connector-specific configuration for the management group.
     */
    managementGroupConfiguration?: string;
    /**
     * Name of the management group.
     */
    name: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}
/**
 * namespaceDiscoveredManagementGroupResponseProvideDefaults sets the appropriate defaults for NamespaceDiscoveredManagementGroupResponse
 */
export function namespaceDiscoveredManagementGroupResponseProvideDefaults(val: NamespaceDiscoveredManagementGroupResponse): NamespaceDiscoveredManagementGroupResponse {
    return {
        ...val,
        defaultTimeoutInSeconds: (val.defaultTimeoutInSeconds) ?? 100,
    };
}

/**
 * Defines the stream properties.
 */
export interface NamespaceDiscoveredStreamResponse {
    /**
     * Destinations for a stream.
     */
    destinations?: (StreamMqttDestinationResponse | StreamStorageDestinationResponse)[];
    /**
     * Timestamp (in UTC) indicating when the stream was added or modified.
     */
    lastUpdatedOn?: string;
    /**
     * Name of the stream definition.
     */
    name: string;
    /**
     * Stringified JSON that contains connector-specific configuration for the specific stream.
     */
    streamConfiguration?: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}

/**
 * Defines the event data point properties.
 */
export interface NamespaceEventDataPointResponse {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: string;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: string;
    /**
     * The name of the data point.
     */
    name: string;
}

/**
 * Defines the event properties.
 */
export interface NamespaceEventResponse {
    /**
     * Array of data points that are part of the event. Each data point can have a per-data point configuration.
     */
    dataPoints?: NamespaceEventDataPointResponse[];
    /**
     * Destinations for an event.
     */
    destinations?: (EventMqttDestinationResponse | EventStorageDestinationResponse)[];
    /**
     * Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: string;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: string;
    /**
     * The name of the event.
     */
    name: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}

/**
 * Defines the message schema reference properties.
 */
export interface NamespaceMessageSchemaReferenceResponse {
    /**
     * The message schema name.
     */
    schemaName: string;
    /**
     * The message schema registry namespace.
     */
    schemaRegistryNamespace: string;
    /**
     * The message schema version.
     */
    schemaVersion: string;
}

/**
 * Defines the stream properties.
 */
export interface NamespaceStreamResponse {
    /**
     * Destinations for a stream.
     */
    destinations?: (StreamMqttDestinationResponse | StreamStorageDestinationResponse)[];
    /**
     * Name of the stream definition.
     */
    name: string;
    /**
     * Stringified JSON that contains connector-specific configuration for the specific stream.
     */
    streamConfiguration?: string;
    /**
     * URI or type definition ID.
     */
    typeRef?: string;
}

/**
 * Property bag contains the device's outbound endpoints
 */
export interface OutboundEndpointsResponse {
    /**
     * Endpoints the device can connect to.
     */
    assigned: {[key: string]: DeviceMessagingEndpointResponse};
    /**
     * Set of most recently removed endpoints.
     */
    unassigned?: {[key: string]: DeviceMessagingEndpointResponse};
}

/**
 * Defines the status config properties.
 */
export interface StatusConfigResponse {
    /**
     * Object to transfer and persist errors that originate from the edge.
     */
    error: StatusErrorResponse;
    /**
     * A read-only timestamp indicating the last time the configuration has been modified from the perspective of the current actual (edge) state of the CRD. Edge would be the only writer of this value and would sync back up to the cloud.
     */
    lastTransitionTime: string;
    /**
     * A read-only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (edge) state of the CRD. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.
     */
    version: number;
}

/**
 * Defines the status config error properties.
 */
export interface StatusErrorResponse {
    /**
     * Error code for classification of errors (ex: '400', '404', '500', etc.).
     */
    code: string;
    /**
     * Array of error details that describe the status of each error.
     */
    details: ErrorDetailsResponse[];
    /**
     * Human-readable helpful error message to provide additional context for error (e.g.,: “Capability ID 'foo' does not exist”).
     */
    message: string;
}

/**
 * The configuration for a storage destination.
 */
export interface StorageDestinationConfigurationResponse {
    /**
     * The storage destination path.
     */
    path: string;
}

/**
 * The type for a MQTT destination.
 */
export interface StreamMqttDestinationResponse {
    /**
     * The MQTT destination configuration.
     */
    configuration: MqttDestinationConfigurationResponse;
    /**
     * The set of supported stream destinations for an asset.
     * Expected value is 'Mqtt'.
     */
    target: "Mqtt";
}
/**
 * streamMqttDestinationResponseProvideDefaults sets the appropriate defaults for StreamMqttDestinationResponse
 */
export function streamMqttDestinationResponseProvideDefaults(val: StreamMqttDestinationResponse): StreamMqttDestinationResponse {
    return {
        ...val,
        configuration: mqttDestinationConfigurationResponseProvideDefaults(val.configuration),
    };
}

/**
 * The type for a storage destination.
 */
export interface StreamStorageDestinationResponse {
    /**
     * The storage destination configuration.
     */
    configuration: StorageDestinationConfigurationResponse;
    /**
     * The set of supported stream destinations for an asset.
     * Expected value is 'Storage'.
     */
    target: "Storage";
}

/**
 * Managed service identity (either system assigned, or none)
 */
export interface SystemAssignedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (either system assigned, or none).
     */
    type: string;
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
 * Object that describes the topic information.
 */
export interface TopicResponse {
    /**
     * The topic path for messages published to an MQTT broker.
     */
    path: string;
    /**
     * When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.
     */
    retain?: string;
}
/**
 * topicResponseProvideDefaults sets the appropriate defaults for TopicResponse
 */
export function topicResponseProvideDefaults(val: TopicResponse): TopicResponse {
    return {
        ...val,
        retain: (val.retain) ?? "Never",
    };
}

/**
 * Defines server trust settings for an endpoint.
 */
export interface TrustSettingsResponse {
    /**
     * Defines a secret reference for certificates to trust.
     */
    trustList?: string;
}

/**
 * The credentials for authentication mode UsernamePassword.
 */
export interface UsernamePasswordCredentialsResponse {
    /**
     * The name of the secret containing the password.
     */
    passwordSecretName: string;
    /**
     * The name of the secret containing the username.
     */
    usernameSecretName: string;
}

/**
 * The x509 certificate for authentication mode Certificate.
 */
export interface X509CredentialsResponse {
    /**
     * The name of the secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).
     */
    certificateSecretName: string;
}
