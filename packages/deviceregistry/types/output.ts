import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the asset status error properties.
 */
export interface AssetStatusErrorResponse {
    /**
     * Error code for classification of errors (ex: 400, 404, 500, etc.).
     */
    code?: number;
    /**
     * Human readable helpful error message to provide additional context for error (ex: “capability Id 'foo' does not exist”).
     */
    message?: string;
}

/**
 * Defines the asset status properties.
 */
export interface AssetStatusResponse {
    /**
     * Array object to transfer and persist errors that originate from the Edge.
     */
    errors?: AssetStatusErrorResponse[];
    /**
     * A read only incremental counter indicating the number of times the configuration has been modified from the perspective of the current actual (Edge) state of the Asset. Edge would be the only writer of this value and would sync back up to the cloud. In steady state, this should equal version.
     */
    version?: number;
}

/**
 * Defines the data point properties.
 */
export interface DataPointResponse {
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
 * dataPointResponseProvideDefaults sets the appropriate defaults for DataPointResponse
 */
export function dataPointResponseProvideDefaults(val: DataPointResponse): DataPointResponse {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "none",
    };
}

/**
 * Defines the event properties.
 */
export interface EventResponse {
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
 * eventResponseProvideDefaults sets the appropriate defaults for EventResponse
 */
export function eventResponseProvideDefaults(val: EventResponse): EventResponse {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "none",
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
 * Certificate or private key that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys.
 */
export interface OwnCertificateResponse {
    /**
     * Secret Reference Name (Pfx or Pem password).
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
 * Definition of the authentication mechanism for the southbound connector.
 */
export interface TransportAuthenticationResponse {
    /**
     * Defines a reference to a secret which contains all certificates and private keys that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys.
     */
    ownCertificates: OwnCertificateResponse[];
}

/**
 * Definition of the client authentication mechanism to the server.
 */
export interface UserAuthenticationResponse {
    /**
     * Defines the mode to authenticate the user of the client at the server.
     */
    mode: string;
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
 * userAuthenticationResponseProvideDefaults sets the appropriate defaults for UserAuthenticationResponse
 */
export function userAuthenticationResponseProvideDefaults(val: UserAuthenticationResponse): UserAuthenticationResponse {
    return {
        ...val,
        mode: (val.mode) ?? "Certificate",
    };
}

/**
 * The credentials for authentication mode UsernamePassword.
 */
export interface UsernamePasswordCredentialsResponse {
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
 * The x509 certificate for authentication mode Certificate.
 */
export interface X509CredentialsResponse {
    /**
     * A reference to secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).
     */
    certificateReference: string;
}
