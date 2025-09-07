import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Definition of the client authentication mechanism to the server.
 */
export interface AuthenticationArgs {
    /**
     * Defines the method to authenticate the user of the client at the server.
     */
    method: pulumi.Input<string | enums.AuthenticationMethod>;
    /**
     * Defines the username and password references when UsernamePassword user authentication mode is selected.
     */
    usernamePasswordCredentials?: pulumi.Input<UsernamePasswordCredentialsArgs>;
    /**
     * Defines the certificate reference when Certificate user authentication mode is selected.
     */
    x509Credentials?: pulumi.Input<X509CredentialsArgs>;
}
/**
 * authenticationArgsProvideDefaults sets the appropriate defaults for AuthenticationArgs
 */
export function authenticationArgsProvideDefaults(val: AuthenticationArgs): AuthenticationArgs {
    return {
        ...val,
        method: (val.method) ?? "Certificate",
    };
}

/**
 * The configuration for a MQTT broker state store destination.
 */
export interface BrokerStateStoreDestinationConfigurationArgs {
    /**
     * The MQTT broker state store destination key.
     */
    key: pulumi.Input<string>;
}

/**
 * Defines the data point properties.
 */
export interface DataPointArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: pulumi.Input<string>;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: pulumi.Input<string>;
    /**
     * The name of the data point.
     */
    name: pulumi.Input<string>;
    /**
     * An indication of how the data point should be mapped to OpenTelemetry.
     */
    observabilityMode?: pulumi.Input<string | enums.DataPointObservabilityMode>;
}
/**
 * dataPointArgsProvideDefaults sets the appropriate defaults for DataPointArgs
 */
export function dataPointArgsProvideDefaults(val: DataPointArgs): DataPointArgs {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "None",
    };
}

/**
 * Defines the dataset properties.
 */
export interface DatasetArgs {
    /**
     * Array of data points that are part of the dataset. Each data point can have per-data point configuration.
     */
    dataPoints?: pulumi.Input<pulumi.Input<DataPointArgs>[]>;
    /**
     * Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset.
     */
    datasetConfiguration?: pulumi.Input<string>;
    /**
     * Name of the dataset.
     */
    name: pulumi.Input<string>;
    /**
     * Object that describes the topic information for the specific dataset.
     */
    topic?: pulumi.Input<TopicArgs>;
}
/**
 * datasetArgsProvideDefaults sets the appropriate defaults for DatasetArgs
 */
export function datasetArgsProvideDefaults(val: DatasetArgs): DatasetArgs {
    return {
        ...val,
        topic: (val.topic ? pulumi.output(val.topic).apply(topicArgsProvideDefaults) : undefined),
    };
}

/**
 * The type for a MQTT broker state store destination.
 */
export interface DatasetBrokerStateStoreDestinationArgs {
    /**
     * The MQTT broker state store destination configuration.
     */
    configuration: pulumi.Input<BrokerStateStoreDestinationConfigurationArgs>;
    /**
     * The set of supported dataset destinations for an asset.
     * Expected value is 'BrokerStateStore'.
     */
    target: pulumi.Input<"BrokerStateStore">;
}

/**
 * The type for a MQTT destination.
 */
export interface DatasetMqttDestinationArgs {
    /**
     * The MQTT destination configuration.
     */
    configuration: pulumi.Input<MqttDestinationConfigurationArgs>;
    /**
     * The set of supported dataset destinations for an asset.
     * Expected value is 'Mqtt'.
     */
    target: pulumi.Input<"Mqtt">;
}
/**
 * datasetMqttDestinationArgsProvideDefaults sets the appropriate defaults for DatasetMqttDestinationArgs
 */
export function datasetMqttDestinationArgsProvideDefaults(val: DatasetMqttDestinationArgs): DatasetMqttDestinationArgs {
    return {
        ...val,
        configuration: pulumi.output(val.configuration).apply(mqttDestinationConfigurationArgsProvideDefaults),
    };
}

/**
 * The type for a storage destination.
 */
export interface DatasetStorageDestinationArgs {
    /**
     * The storage destination configuration.
     */
    configuration: pulumi.Input<StorageDestinationConfigurationArgs>;
    /**
     * The set of supported dataset destinations for an asset.
     * Expected value is 'Storage'.
     */
    target: pulumi.Input<"Storage">;
}

/**
 * Device messaging endpoint model.
 */
export interface DeviceMessagingEndpointArgs {
    /**
     * The endpoint address to connect to.
     */
    address: pulumi.Input<string>;
    /**
     * Type of connection used for the messaging endpoint.
     */
    endpointType?: pulumi.Input<string>;
}

/**
 * Defines which device and endpoint to use for this asset
 */
export interface DeviceRefArgs {
    /**
     * Name of the device resource
     */
    deviceName: pulumi.Input<string>;
    /**
     * The name of endpoint to use
     */
    endpointName: pulumi.Input<string>;
}

/**
 * Defines the data point properties.
 */
export interface DiscoveredDataPointArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: pulumi.Input<string>;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: pulumi.Input<string>;
    /**
     * UTC timestamp indicating when the data point was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * The name of the data point.
     */
    name: pulumi.Input<string>;
}

/**
 * Defines the dataset properties.
 */
export interface DiscoveredDatasetArgs {
    /**
     * Array of data points that are part of the dataset. Each data point can have per-data point configuration.
     */
    dataPoints?: pulumi.Input<pulumi.Input<DiscoveredDataPointArgs>[]>;
    /**
     * Stringified JSON that contains connector-specific properties that describes configuration for the specific dataset.
     */
    datasetConfiguration?: pulumi.Input<string>;
    /**
     * Name of the dataset.
     */
    name: pulumi.Input<string>;
    /**
     * Object that describes the topic information for the specific dataset.
     */
    topic?: pulumi.Input<TopicArgs>;
}
/**
 * discoveredDatasetArgsProvideDefaults sets the appropriate defaults for DiscoveredDatasetArgs
 */
export function discoveredDatasetArgsProvideDefaults(val: DiscoveredDatasetArgs): DiscoveredDatasetArgs {
    return {
        ...val,
        topic: (val.topic ? pulumi.output(val.topic).apply(topicArgsProvideDefaults) : undefined),
    };
}

/**
 * Defines the event properties.
 */
export interface DiscoveredEventArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: pulumi.Input<string>;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: pulumi.Input<string>;
    /**
     * UTC timestamp indicating when the event was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * The name of the event.
     */
    name: pulumi.Input<string>;
    /**
     * Object that describes the topic information for the specific event.
     */
    topic?: pulumi.Input<TopicArgs>;
}
/**
 * discoveredEventArgsProvideDefaults sets the appropriate defaults for DiscoveredEventArgs
 */
export function discoveredEventArgsProvideDefaults(val: DiscoveredEventArgs): DiscoveredEventArgs {
    return {
        ...val,
        topic: (val.topic ? pulumi.output(val.topic).apply(topicArgsProvideDefaults) : undefined),
    };
}

/**
 * An endpoint to connect to the device.
 */
export interface DiscoveredInboundEndpointsArgs {
    /**
     * Stringified JSON that contains configuration to be used by the connector (e.g., OPC UA, ONVIF).
     */
    additionalConfiguration?: pulumi.Input<string>;
    /**
     * The endpoint address & port. This can be either an IP address (e.g., 192.168.1.1) or a fully qualified domain name (FQDN, e.g., server.example.com).
     */
    address: pulumi.Input<string>;
    /**
     * Type of connection endpoint.
     */
    endpointType: pulumi.Input<string>;
    /**
     * The timestamp (in UTC) when the endpoint was discovered.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * List of supported authentication methods supported by device for Inbound connections.
     */
    supportedAuthenticationMethods?: pulumi.Input<pulumi.Input<string | enums.AuthenticationMethod>[]>;
    /**
     * Protocol version associated with the endpoint e.g. 1 or 2 for endpointType Microsoft.HTTP, and 3.5 or 5.0 for endpointType Microsoft.Mqtt etc.
     */
    version?: pulumi.Input<string>;
}

/**
 * Connection endpoint URL a device can use to connect to a service.
 */
export interface DiscoveredMessagingEndpointsArgs {
    /**
     * Set of endpoints to connect to the device.
     */
    inbound?: pulumi.Input<{[key: string]: pulumi.Input<DiscoveredInboundEndpointsArgs>}>;
    /**
     * Set of endpoints a device can connect to.
     */
    outbound?: pulumi.Input<DiscoveredOutboundEndpointsArgs>;
}

/**
 * Property bag contains the device's outbound endpoints
 */
export interface DiscoveredOutboundEndpointsArgs {
    /**
     * Endpoints the device can connect to.
     */
    assigned: pulumi.Input<{[key: string]: pulumi.Input<DeviceMessagingEndpointArgs>}>;
}

/**
 * Defines the event properties.
 */
export interface EventArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: pulumi.Input<string>;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: pulumi.Input<string>;
    /**
     * The name of the event.
     */
    name: pulumi.Input<string>;
    /**
     * An indication of how the event should be mapped to OpenTelemetry.
     */
    observabilityMode?: pulumi.Input<string | enums.EventObservabilityMode>;
    /**
     * Object that describes the topic information for the specific event.
     */
    topic?: pulumi.Input<TopicArgs>;
}
/**
 * eventArgsProvideDefaults sets the appropriate defaults for EventArgs
 */
export function eventArgsProvideDefaults(val: EventArgs): EventArgs {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "None",
        topic: (val.topic ? pulumi.output(val.topic).apply(topicArgsProvideDefaults) : undefined),
    };
}

/**
 * The type for a MQTT destination.
 */
export interface EventMqttDestinationArgs {
    /**
     * The MQTT destination configuration.
     */
    configuration: pulumi.Input<MqttDestinationConfigurationArgs>;
    /**
     * The set of supported event destinations for an asset.
     * Expected value is 'Mqtt'.
     */
    target: pulumi.Input<"Mqtt">;
}
/**
 * eventMqttDestinationArgsProvideDefaults sets the appropriate defaults for EventMqttDestinationArgs
 */
export function eventMqttDestinationArgsProvideDefaults(val: EventMqttDestinationArgs): EventMqttDestinationArgs {
    return {
        ...val,
        configuration: pulumi.output(val.configuration).apply(mqttDestinationConfigurationArgsProvideDefaults),
    };
}

/**
 * The type for a storage destination.
 */
export interface EventStorageDestinationArgs {
    /**
     * The storage destination configuration.
     */
    configuration: pulumi.Input<StorageDestinationConfigurationArgs>;
    /**
     * The set of supported event destinations for an asset.
     * Expected value is 'Storage'.
     */
    target: pulumi.Input<"Storage">;
}

/**
 * The extended location.
 */
export interface ExtendedLocationArgs {
    /**
     * The extended location name.
     */
    name: pulumi.Input<string>;
    /**
     * The extended location type.
     */
    type: pulumi.Input<string>;
}

/**
 * Definition of the client authentication mechanism to the host.
 */
export interface HostAuthenticationArgs {
    /**
     * Defines the method to authenticate the user of the client at the server.
     */
    method: pulumi.Input<string | enums.AuthenticationMethod>;
    /**
     * Defines the username and password references when UsernamePassword user authentication mode is selected.
     */
    usernamePasswordCredentials?: pulumi.Input<UsernamePasswordCredentialsArgs>;
    /**
     * Defines the certificate reference when Certificate user authentication mode is selected.
     */
    x509Credentials?: pulumi.Input<X509CredentialsArgs>;
}
/**
 * hostAuthenticationArgsProvideDefaults sets the appropriate defaults for HostAuthenticationArgs
 */
export function hostAuthenticationArgsProvideDefaults(val: HostAuthenticationArgs): HostAuthenticationArgs {
    return {
        ...val,
        method: (val.method) ?? "Certificate",
    };
}

/**
 * An endpoint to connect to the device.
 */
export interface InboundEndpointsArgs {
    /**
     * Stringified JSON that contains configuration to be used by the connector (e.g., OPC UA, ONVIF).
     */
    additionalConfiguration?: pulumi.Input<string>;
    /**
     * The endpoint address & port. This can be either an IP address (e.g., 192.168.1.1) or a fully qualified domain name (FQDN, e.g., server.example.com).
     */
    address: pulumi.Input<string>;
    /**
     * Defines the client authentication mechanism to the server.
     */
    authentication?: pulumi.Input<HostAuthenticationArgs>;
    /**
     * Type of connection endpoint.
     */
    endpointType: pulumi.Input<string>;
    /**
     * Defines server trust settings for the endpoint.
     */
    trustSettings?: pulumi.Input<TrustSettingsArgs>;
    /**
     * Protocol version associated with the endpoint e.g. 1 or 2 for endpointType Microsoft.HTTP, and 3.5 or 5.0 for endpointType Microsoft.Mqtt etc.
     */
    version?: pulumi.Input<string>;
}
/**
 * inboundEndpointsArgsProvideDefaults sets the appropriate defaults for InboundEndpointsArgs
 */
export function inboundEndpointsArgsProvideDefaults(val: InboundEndpointsArgs): InboundEndpointsArgs {
    return {
        ...val,
        authentication: (val.authentication ? pulumi.output(val.authentication).apply(hostAuthenticationArgsProvideDefaults) : undefined),
    };
}

/**
 * Defines the action properties.
 */
export interface ManagementActionArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the action.
     */
    actionConfiguration?: pulumi.Input<string>;
    /**
     * The type of the action.
     */
    actionType?: pulumi.Input<string | enums.ManagementActionType>;
    /**
     * Name of the action.
     */
    name: pulumi.Input<string>;
    /**
     * The target URI on which a client can invoke the specific action.
     */
    targetUri: pulumi.Input<string>;
    /**
     * Response timeout for the action.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * The MQTT topic path on which a client will receive the request for the action.
     */
    topic?: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}
/**
 * managementActionArgsProvideDefaults sets the appropriate defaults for ManagementActionArgs
 */
export function managementActionArgsProvideDefaults(val: ManagementActionArgs): ManagementActionArgs {
    return {
        ...val,
        actionType: (val.actionType) ?? "Call",
    };
}

/**
 * Defines the management group properties.
 */
export interface ManagementGroupArgs {
    /**
     * Array of actions that are part of the management group. Each action can have an individual configuration.
     */
    actions?: pulumi.Input<pulumi.Input<ManagementActionArgs>[]>;
    /**
     * Default response timeout for all actions that are part of the management group.
     */
    defaultTimeoutInSeconds?: pulumi.Input<number>;
    /**
     * Default MQTT topic path on which a client will receive the request for all actions that are part of the management group.
     */
    defaultTopic?: pulumi.Input<string>;
    /**
     * Stringified JSON that contains connector-specific configuration for the management group.
     */
    managementGroupConfiguration?: pulumi.Input<string>;
    /**
     * Name of the management group.
     */
    name: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}
/**
 * managementGroupArgsProvideDefaults sets the appropriate defaults for ManagementGroupArgs
 */
export function managementGroupArgsProvideDefaults(val: ManagementGroupArgs): ManagementGroupArgs {
    return {
        ...val,
        defaultTimeoutInSeconds: (val.defaultTimeoutInSeconds) ?? 100,
    };
}

/**
 * The namespace messaging endpoints model.
 */
export interface MessagingArgs {
    /**
     * Dictionary of messaging endpoints.
     */
    endpoints?: pulumi.Input<{[key: string]: pulumi.Input<MessagingEndpointArgs>}>;
}

/**
 * Namespace messaging endpoint model used by a device to connect to a service.
 */
export interface MessagingEndpointArgs {
    /**
     * The endpoint address to connect to.
     */
    address: pulumi.Input<string>;
    /**
     * Type of connection used for messaging endpoint.
     */
    endpointType?: pulumi.Input<string>;
    /**
     * The messaging endpoint Azure resource Id.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Connection endpoint URL a device can use to connect to a service.
 */
export interface MessagingEndpointsArgs {
    /**
     * Set of endpoints to connect to the device.
     */
    inbound?: pulumi.Input<{[key: string]: pulumi.Input<InboundEndpointsArgs>}>;
    /**
     * Set of endpoints a device can connect to.
     */
    outbound?: pulumi.Input<OutboundEndpointsArgs>;
}

/**
 * The configuration for a MQTT destination.
 */
export interface MqttDestinationConfigurationArgs {
    /**
     * The MQTT QoS setting. Defaults to QoS 1.
     */
    qos?: pulumi.Input<string | enums.MqttDestinationQos>;
    /**
     * When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.
     */
    retain?: pulumi.Input<string | enums.TopicRetainType>;
    /**
     * The MQTT topic.
     */
    topic: pulumi.Input<string>;
    /**
     * The MQTT TTL setting.
     */
    ttl?: pulumi.Input<number>;
}
/**
 * mqttDestinationConfigurationArgsProvideDefaults sets the appropriate defaults for MqttDestinationConfigurationArgs
 */
export function mqttDestinationConfigurationArgsProvideDefaults(val: MqttDestinationConfigurationArgs): MqttDestinationConfigurationArgs {
    return {
        ...val,
        qos: (val.qos) ?? "Qos1",
        retain: (val.retain) ?? "Never",
    };
}

/**
 * Defines the dataset properties.
 */
export interface NamespaceDatasetArgs {
    /**
     * Array of data points that are part of the dataset. Each data point can have per-data point configuration.
     */
    dataPoints?: pulumi.Input<pulumi.Input<NamespaceDatasetDataPointArgs>[]>;
    /**
     * Reference to a data source for a given dataset.
     */
    dataSource?: pulumi.Input<string>;
    /**
     * Stringified JSON that contains connector-specific JSON string that describes configuration for the specific dataset.
     */
    datasetConfiguration?: pulumi.Input<string>;
    /**
     * Destinations for a dataset.
     */
    destinations?: pulumi.Input<pulumi.Input<DatasetBrokerStateStoreDestinationArgs | DatasetMqttDestinationArgs | DatasetStorageDestinationArgs>[]>;
    /**
     * Name of the dataset.
     */
    name: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}

/**
 * Defines the dataset data point properties.
 */
export interface NamespaceDatasetDataPointArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: pulumi.Input<string>;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: pulumi.Input<string>;
    /**
     * The name of the data point.
     */
    name: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}

/**
 * Defines the dataset properties.
 */
export interface NamespaceDiscoveredDatasetArgs {
    /**
     * Array of data points that are part of the dataset. Each data point can have per-data point configuration.
     */
    dataPoints?: pulumi.Input<pulumi.Input<NamespaceDiscoveredDatasetDataPointArgs>[]>;
    /**
     * Reference to a data source for a given dataset.
     */
    dataSource?: pulumi.Input<string>;
    /**
     * Stringified JSON that contains connector-specific properties that describes configuration for the specific dataset.
     */
    datasetConfiguration?: pulumi.Input<string>;
    /**
     * Destinations for a dataset.
     */
    destinations?: pulumi.Input<pulumi.Input<DatasetBrokerStateStoreDestinationArgs | DatasetMqttDestinationArgs | DatasetStorageDestinationArgs>[]>;
    /**
     * Timestamp (in UTC) indicating when the dataset was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * Name of the dataset.
     */
    name: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}

/**
 * Defines the discovered dataset data point properties.
 */
export interface NamespaceDiscoveredDatasetDataPointArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: pulumi.Input<string>;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: pulumi.Input<string>;
    /**
     * UTC timestamp indicating when the data point was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * The name of the data point.
     */
    name: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}

/**
 * Defines the event properties.
 */
export interface NamespaceDiscoveredEventArgs {
    /**
     * Array of data points that are part of the event. Each data point can have a per-data point configuration.
     */
    dataPoints?: pulumi.Input<pulumi.Input<NamespaceDiscoveredEventDataPointArgs>[]>;
    /**
     * Destinations for an event.
     */
    destinations?: pulumi.Input<pulumi.Input<EventMqttDestinationArgs | EventStorageDestinationArgs>[]>;
    /**
     * Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: pulumi.Input<string>;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: pulumi.Input<string>;
    /**
     * UTC timestamp indicating when the event was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * The name of the event.
     */
    name: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}

/**
 * Defines the discovered event data point properties.
 */
export interface NamespaceDiscoveredEventDataPointArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: pulumi.Input<string>;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: pulumi.Input<string>;
    /**
     * UTC timestamp indicating when the data point was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * The name of the data point.
     */
    name: pulumi.Input<string>;
}

/**
 * Defines the action properties.
 */
export interface NamespaceDiscoveredManagementActionArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the action.
     */
    actionConfiguration?: pulumi.Input<string>;
    /**
     * The type of the action.
     */
    actionType?: pulumi.Input<string | enums.NamespaceDiscoveredManagementActionType>;
    /**
     * Timestamp (in UTC) indicating when the management action was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * Name of the action.
     */
    name: pulumi.Input<string>;
    /**
     * The target URI on which a client can invoke the specific action.
     */
    targetUri: pulumi.Input<string>;
    /**
     * Response timeout for the action.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * The MQTT topic path on which a client will receive the request for the action.
     */
    topic?: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}
/**
 * namespaceDiscoveredManagementActionArgsProvideDefaults sets the appropriate defaults for NamespaceDiscoveredManagementActionArgs
 */
export function namespaceDiscoveredManagementActionArgsProvideDefaults(val: NamespaceDiscoveredManagementActionArgs): NamespaceDiscoveredManagementActionArgs {
    return {
        ...val,
        actionType: (val.actionType) ?? "Call",
    };
}

/**
 * Defines the management group properties.
 */
export interface NamespaceDiscoveredManagementGroupArgs {
    /**
     * Array of actions that are part of the management group. Each action can have an individual configuration.
     */
    actions?: pulumi.Input<pulumi.Input<NamespaceDiscoveredManagementActionArgs>[]>;
    /**
     * Default response timeout for all actions that are part of the management group.
     */
    defaultTimeoutInSeconds?: pulumi.Input<number>;
    /**
     * Default MQTT topic path on which a client will receive the request for all actions that are part of the management group.
     */
    defaultTopic?: pulumi.Input<string>;
    /**
     * Timestamp (in UTC) indicating when the management group was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * Stringified JSON that contains connector-specific configuration for the management group.
     */
    managementGroupConfiguration?: pulumi.Input<string>;
    /**
     * Name of the management group.
     */
    name: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}
/**
 * namespaceDiscoveredManagementGroupArgsProvideDefaults sets the appropriate defaults for NamespaceDiscoveredManagementGroupArgs
 */
export function namespaceDiscoveredManagementGroupArgsProvideDefaults(val: NamespaceDiscoveredManagementGroupArgs): NamespaceDiscoveredManagementGroupArgs {
    return {
        ...val,
        defaultTimeoutInSeconds: (val.defaultTimeoutInSeconds) ?? 100,
    };
}

/**
 * Defines the stream properties.
 */
export interface NamespaceDiscoveredStreamArgs {
    /**
     * Destinations for a stream.
     */
    destinations?: pulumi.Input<pulumi.Input<StreamMqttDestinationArgs | StreamStorageDestinationArgs>[]>;
    /**
     * Timestamp (in UTC) indicating when the stream was added or modified.
     */
    lastUpdatedOn?: pulumi.Input<string>;
    /**
     * Name of the stream definition.
     */
    name: pulumi.Input<string>;
    /**
     * Stringified JSON that contains connector-specific configuration for the specific stream.
     */
    streamConfiguration?: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}

/**
 * Defines the event properties.
 */
export interface NamespaceEventArgs {
    /**
     * Array of data points that are part of the event. Each data point can have a per-data point configuration.
     */
    dataPoints?: pulumi.Input<pulumi.Input<NamespaceEventDataPointArgs>[]>;
    /**
     * Destinations for an event.
     */
    destinations?: pulumi.Input<pulumi.Input<EventMqttDestinationArgs | EventStorageDestinationArgs>[]>;
    /**
     * Stringified JSON that contains connector-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: pulumi.Input<string>;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: pulumi.Input<string>;
    /**
     * The name of the event.
     */
    name: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}

/**
 * Defines the event data point properties.
 */
export interface NamespaceEventDataPointArgs {
    /**
     * Stringified JSON that contains connector-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: pulumi.Input<string>;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: pulumi.Input<string>;
    /**
     * The name of the data point.
     */
    name: pulumi.Input<string>;
}

/**
 * Defines the stream properties.
 */
export interface NamespaceStreamArgs {
    /**
     * Destinations for a stream.
     */
    destinations?: pulumi.Input<pulumi.Input<StreamMqttDestinationArgs | StreamStorageDestinationArgs>[]>;
    /**
     * Name of the stream definition.
     */
    name: pulumi.Input<string>;
    /**
     * Stringified JSON that contains connector-specific configuration for the specific stream.
     */
    streamConfiguration?: pulumi.Input<string>;
    /**
     * URI or type definition ID.
     */
    typeRef?: pulumi.Input<string>;
}

/**
 * Property bag contains the device's outbound endpoints
 */
export interface OutboundEndpointsArgs {
    /**
     * Endpoints the device can connect to.
     */
    assigned: pulumi.Input<{[key: string]: pulumi.Input<DeviceMessagingEndpointArgs>}>;
    /**
     * Set of most recently removed endpoints.
     */
    unassigned?: pulumi.Input<{[key: string]: pulumi.Input<DeviceMessagingEndpointArgs>}>;
}

/**
 * The configuration for a storage destination.
 */
export interface StorageDestinationConfigurationArgs {
    /**
     * The storage destination path.
     */
    path: pulumi.Input<string>;
}

/**
 * The type for a MQTT destination.
 */
export interface StreamMqttDestinationArgs {
    /**
     * The MQTT destination configuration.
     */
    configuration: pulumi.Input<MqttDestinationConfigurationArgs>;
    /**
     * The set of supported stream destinations for an asset.
     * Expected value is 'Mqtt'.
     */
    target: pulumi.Input<"Mqtt">;
}
/**
 * streamMqttDestinationArgsProvideDefaults sets the appropriate defaults for StreamMqttDestinationArgs
 */
export function streamMqttDestinationArgsProvideDefaults(val: StreamMqttDestinationArgs): StreamMqttDestinationArgs {
    return {
        ...val,
        configuration: pulumi.output(val.configuration).apply(mqttDestinationConfigurationArgsProvideDefaults),
    };
}

/**
 * The type for a storage destination.
 */
export interface StreamStorageDestinationArgs {
    /**
     * The storage destination configuration.
     */
    configuration: pulumi.Input<StorageDestinationConfigurationArgs>;
    /**
     * The set of supported stream destinations for an asset.
     * Expected value is 'Storage'.
     */
    target: pulumi.Input<"Storage">;
}

/**
 * Managed service identity (either system assigned, or none)
 */
export interface SystemAssignedServiceIdentityArgs {
    /**
     * Type of managed service identity (either system assigned, or none).
     */
    type: pulumi.Input<string | enums.SystemAssignedServiceIdentityType>;
}

/**
 * Object that describes the topic information.
 */
export interface TopicArgs {
    /**
     * The topic path for messages published to an MQTT broker.
     */
    path: pulumi.Input<string>;
    /**
     * When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.
     */
    retain?: pulumi.Input<string | enums.TopicRetainType>;
}
/**
 * topicArgsProvideDefaults sets the appropriate defaults for TopicArgs
 */
export function topicArgsProvideDefaults(val: TopicArgs): TopicArgs {
    return {
        ...val,
        retain: (val.retain) ?? "Never",
    };
}

/**
 * Defines server trust settings for an endpoint.
 */
export interface TrustSettingsArgs {
    /**
     * Defines a secret reference for certificates to trust.
     */
    trustList?: pulumi.Input<string>;
}

/**
 * The credentials for authentication mode UsernamePassword.
 */
export interface UsernamePasswordCredentialsArgs {
    /**
     * The name of the secret containing the password.
     */
    passwordSecretName: pulumi.Input<string>;
    /**
     * The name of the secret containing the username.
     */
    usernameSecretName: pulumi.Input<string>;
}

/**
 * The x509 certificate for authentication mode Certificate.
 */
export interface X509CredentialsArgs {
    /**
     * The name of the secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).
     */
    certificateSecretName: pulumi.Input<string>;
}
