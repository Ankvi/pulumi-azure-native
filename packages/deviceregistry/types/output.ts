import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the Asset Endpoint Profile properties.
 */
export interface AssetEndpointProfilePropertiesResponse {
    /**
     * Contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
     */
    additionalConfiguration?: string;
    /**
     * Provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
     */
    targetAddress: string;
    /**
     * Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device.
     */
    transportAuthentication?: AssetEndpointProfilePropertiesResponseTransportAuthentication;
    /**
     * Defines the client authentication mechanism to the server.
     */
    userAuthentication?: AssetEndpointProfilePropertiesResponseUserAuthentication;
    /**
     * Globally unique, immutable, non-reusable id.
     */
    uuid: string;
}
/**
 * assetEndpointProfilePropertiesResponseProvideDefaults sets the appropriate defaults for AssetEndpointProfilePropertiesResponse
 */
export function assetEndpointProfilePropertiesResponseProvideDefaults(val: AssetEndpointProfilePropertiesResponse): AssetEndpointProfilePropertiesResponse {
    return {
        ...val,
        userAuthentication: (val.userAuthentication ? assetEndpointProfilePropertiesResponseUserAuthenticationProvideDefaults(val.userAuthentication) : undefined),
    };
}

export interface AssetEndpointProfilePropertiesResponseOwnCertificates {
    /**
     * Secret Reference Name (Pfx or Pem password)
     */
    certPasswordReference?: string;
    /**
     * Secret Reference name (cert and private key).
     */
    certSecretReference?: string;
    /**
     * Certificate thumbprint.
     */
    certThumbprint?: string;
}

/**
 * Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device.
 */
export interface AssetEndpointProfilePropertiesResponseTransportAuthentication {
    /**
     * Defines a reference to a secret which contains all certificates and private keys that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys.
     */
    ownCertificates: AssetEndpointProfilePropertiesResponseOwnCertificates[];
}

/**
 * Defines the client authentication mechanism to the server.
 */
export interface AssetEndpointProfilePropertiesResponseUserAuthentication {
    /**
     * Defines the mode to authenticate the user of the client at the server.
     */
    mode: string;
    /**
     * Defines the username and password references when UsernamePassword user authentication mode is selected.
     */
    usernamePasswordCredentials?: AssetEndpointProfilePropertiesResponseUsernamePasswordCredentials;
    /**
     * Defines the certificate reference when Certificate user authentication mode is selected.
     */
    x509Credentials?: AssetEndpointProfilePropertiesResponseX509Credentials;
}
/**
 * assetEndpointProfilePropertiesResponseUserAuthenticationProvideDefaults sets the appropriate defaults for AssetEndpointProfilePropertiesResponseUserAuthentication
 */
export function assetEndpointProfilePropertiesResponseUserAuthenticationProvideDefaults(val: AssetEndpointProfilePropertiesResponseUserAuthentication): AssetEndpointProfilePropertiesResponseUserAuthentication {
    return {
        ...val,
        mode: (val.mode) ?? "Certificate",
    };
}

/**
 * Defines the username and password references when UsernamePassword user authentication mode is selected.
 */
export interface AssetEndpointProfilePropertiesResponseUsernamePasswordCredentials {
    /**
     * A reference to secret containing the password.
     */
    passwordReference: string;
    /**
     * A reference to secret containing the username.
     */
    usernameReference: string;
}

/**
 * Defines the certificate reference when Certificate user authentication mode is selected.
 */
export interface AssetEndpointProfilePropertiesResponseX509Credentials {
    /**
     * A reference to secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).
     */
    certificateReference: string;
}

/**
 * The extended location.
 */
export interface AssetEndpointProfileResponseExtendedLocation {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

export interface AssetPropertiesResponseDataPoints {
    /**
     * The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1.
     */
    capabilityId?: string;
    /**
     * Protocol-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: string;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: string;
    /**
     * The name of the data point.
     */
    name?: string;
    /**
     * An indication of how the data point should be mapped to OpenTelemetry.
     */
    observabilityMode?: string;
}
/**
 * assetPropertiesResponseDataPointsProvideDefaults sets the appropriate defaults for AssetPropertiesResponseDataPoints
 */
export function assetPropertiesResponseDataPointsProvideDefaults(val: AssetPropertiesResponseDataPoints): AssetPropertiesResponseDataPoints {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "none",
    };
}

export interface AssetPropertiesResponseErrors {
    /**
     * Error code for classification of errors (ex: 400, 404, 500, etc.).
     */
    code?: number;
    /**
     * Human readable helpful error message to provide additional context for error (ex: “capability Id 'foo' does not exist”).
     */
    message?: string;
}

export interface AssetPropertiesResponseEvents {
    /**
     * The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1.
     */
    capabilityId?: string;
    /**
     * Protocol-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: string;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: string;
    /**
     * The name of the event.
     */
    name?: string;
    /**
     * An indication of how the event should be mapped to OpenTelemetry.
     */
    observabilityMode?: string;
}
/**
 * assetPropertiesResponseEventsProvideDefaults sets the appropriate defaults for AssetPropertiesResponseEvents
 */
export function assetPropertiesResponseEventsProvideDefaults(val: AssetPropertiesResponseEvents): AssetPropertiesResponseEvents {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "none",
    };
}

/**
 * Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
 */
export interface AssetPropertiesResponseStatus {
    /**
     * Array object to transfer and persist errors that originate from the Edge.
     */
    errors?: AssetPropertiesResponseErrors[];
    /**
     * A read only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (Edge) state of the Asset. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.
     */
    version?: number;
}

/**
 * The extended location.
 */
export interface AssetResponseExtendedLocation {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * Asset resource properties.
 */
export interface AssetResponseProperties {
    /**
     * A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must have the format <ModuleCR.metadata.namespace>/<ModuleCR.metadata.name>.
     */
    assetEndpointProfileUri: string;
    /**
     * Resource path to asset type (model) definition.
     */
    assetType?: string;
    /**
     * A set of key-value pairs that contain custom attributes set by the customer.
     */
    attributes?: any;
    /**
     * Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration. See below for more details for the definition of the dataPoints element.
     */
    dataPoints?: AssetPropertiesResponseDataPoints[];
    /**
     * Protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol.
     */
    defaultDataPointsConfiguration?: string;
    /**
     * Protocol-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol.
     */
    defaultEventsConfiguration?: string;
    /**
     * Human-readable description of the asset.
     */
    description?: string;
    /**
     * Human-readable display name.
     */
    displayName?: string;
    /**
     * Reference to the documentation.
     */
    documentationUri?: string;
    /**
     * Enabled/Disabled status of the asset.
     */
    enabled?: boolean;
    /**
     * Array of events that are part of the asset. Each event can reference an asset type capability and have per-event configuration. See below for more details about the definition of the events element.
     */
    events?: AssetPropertiesResponseEvents[];
    /**
     * Asset id provided by the customer.
     */
    externalAssetId?: string;
    /**
     * Revision number of the hardware.
     */
    hardwareRevision?: string;
    /**
     * Asset manufacturer name.
     */
    manufacturer?: string;
    /**
     * Asset manufacturer URI.
     */
    manufacturerUri?: string;
    /**
     * Asset model name.
     */
    model?: string;
    /**
     * Asset product code.
     */
    productCode?: string;
    /**
     * Provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Asset serial number.
     */
    serialNumber?: string;
    /**
     * Revision number of the software.
     */
    softwareRevision?: string;
    /**
     * Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
     */
    status: AssetPropertiesResponseStatus;
    /**
     * Globally unique, immutable, non-reusable id.
     */
    uuid: string;
    /**
     * An integer that is incremented each time the resource is modified.
     */
    version: number;
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
