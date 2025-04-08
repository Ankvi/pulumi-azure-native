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
