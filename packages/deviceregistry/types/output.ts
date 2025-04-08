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
