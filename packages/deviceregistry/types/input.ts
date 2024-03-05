import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the data point properties.
 */
export interface DataPointArgs {
    /**
     * The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1.
     */
    capabilityId?: pulumi.Input<string>;
    /**
     * Protocol-specific configuration for the data point. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    dataPointConfiguration?: pulumi.Input<string>;
    /**
     * The address of the source of the data in the asset (e.g. URL) so that a client can access the data source on the asset.
     */
    dataSource: pulumi.Input<string>;
    /**
     * The name of the data point.
     */
    name?: pulumi.Input<string>;
    /**
     * An indication of how the data point should be mapped to OpenTelemetry.
     */
    observabilityMode?: pulumi.Input<string | enums.DataPointsObservabilityMode>;
}
/**
 * dataPointArgsProvideDefaults sets the appropriate defaults for DataPointArgs
 */
export function dataPointArgsProvideDefaults(val: DataPointArgs): DataPointArgs {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "none",
    };
}

/**
 * Defines the event properties.
 */
export interface EventArgs {
    /**
     * The path to the type definition of the capability (e.g. DTMI, OPC UA information model node id, etc.), for example dtmi:com:example:Robot:_contents:__prop1;1.
     */
    capabilityId?: pulumi.Input<string>;
    /**
     * Protocol-specific configuration for the event. For OPC UA, this could include configuration like, publishingInterval, samplingInterval, and queueSize.
     */
    eventConfiguration?: pulumi.Input<string>;
    /**
     * The address of the notifier of the event in the asset (e.g. URL) so that a client can access the event on the asset.
     */
    eventNotifier: pulumi.Input<string>;
    /**
     * The name of the event.
     */
    name?: pulumi.Input<string>;
    /**
     * An indication of how the event should be mapped to OpenTelemetry.
     */
    observabilityMode?: pulumi.Input<string | enums.EventsObservabilityMode>;
}
/**
 * eventArgsProvideDefaults sets the appropriate defaults for EventArgs
 */
export function eventArgsProvideDefaults(val: EventArgs): EventArgs {
    return {
        ...val,
        observabilityMode: (val.observabilityMode) ?? "none",
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
 * Certificate or private key that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys.
 */
export interface OwnCertificateArgs {
    /**
     * Secret Reference Name (Pfx or Pem password).
     */
    certPasswordReference?: pulumi.Input<string>;
    /**
     * Secret Reference name (cert and private key).
     */
    certSecretReference?: pulumi.Input<string>;
    /**
     * Certificate thumbprint.
     */
    certThumbprint?: pulumi.Input<string>;
}

/**
 * Definition of the authentication mechanism for the southbound connector.
 */
export interface TransportAuthenticationArgs {
    /**
     * Defines a reference to a secret which contains all certificates and private keys that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys.
     */
    ownCertificates: pulumi.Input<pulumi.Input<OwnCertificateArgs>[]>;
}

/**
 * Definition of the client authentication mechanism to the server.
 */
export interface UserAuthenticationArgs {
    /**
     * Defines the mode to authenticate the user of the client at the server.
     */
    mode: pulumi.Input<string | enums.UserAuthenticationMode>;
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
 * userAuthenticationArgsProvideDefaults sets the appropriate defaults for UserAuthenticationArgs
 */
export function userAuthenticationArgsProvideDefaults(val: UserAuthenticationArgs): UserAuthenticationArgs {
    return {
        ...val,
        mode: (val.mode) ?? "Certificate",
    };
}

/**
 * The credentials for authentication mode UsernamePassword.
 */
export interface UsernamePasswordCredentialsArgs {
    /**
     * A reference to secret containing the password.
     */
    passwordReference: pulumi.Input<string>;
    /**
     * A reference to secret containing the username.
     */
    usernameReference: pulumi.Input<string>;
}

/**
 * The x509 certificate for authentication mode Certificate.
 */
export interface X509CredentialsArgs {
    /**
     * A reference to secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).
     */
    certificateReference: pulumi.Input<string>;
}
