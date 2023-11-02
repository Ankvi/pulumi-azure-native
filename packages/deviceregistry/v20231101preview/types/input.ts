import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The extended location.
     */
    export interface AssetEndpointProfileExtendedLocationArgs {
        /**
         * The extended location name.
         */
        name?: pulumi.Input<string>;
        /**
         * The extended location type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Defines the Asset Endpoint Profile properties.
     */
    export interface AssetEndpointProfilePropertiesArgs {
        /**
         * Contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
         */
        additionalConfiguration?: pulumi.Input<string>;
        /**
         * The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
         */
        targetAddress: pulumi.Input<string>;
        /**
         * Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device.
         */
        transportAuthentication?: pulumi.Input<AssetEndpointProfilePropertiesTransportAuthenticationArgs>;
        /**
         * Defines the client authentication mechanism to the server.
         */
        userAuthentication?: pulumi.Input<AssetEndpointProfilePropertiesUserAuthenticationArgs>;
    }
    /**
     * assetEndpointProfilePropertiesArgsProvideDefaults sets the appropriate defaults for AssetEndpointProfilePropertiesArgs
     */
    export function assetEndpointProfilePropertiesArgsProvideDefaults(val: AssetEndpointProfilePropertiesArgs): AssetEndpointProfilePropertiesArgs {
        return {
            ...val,
            userAuthentication: (val.userAuthentication ? pulumi.output(val.userAuthentication).apply(assetEndpointProfilePropertiesUserAuthenticationArgsProvideDefaults) : undefined),
        };
    }

    export interface AssetEndpointProfilePropertiesOwnCertificatesArgs {
        /**
         * Secret Reference Name (Pfx or Pem password)
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
     * Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device.
     */
    export interface AssetEndpointProfilePropertiesTransportAuthenticationArgs {
        /**
         * Defines a reference to a secret which contains all certificates and private keys that can be used by the southbound connector connecting to the shop floor/OT device. The accepted extensions are .der for certificates and .pfx/.pem for private keys.
         */
        ownCertificates: pulumi.Input<pulumi.Input<AssetEndpointProfilePropertiesOwnCertificatesArgs>[]>;
    }

    /**
     * Defines the client authentication mechanism to the server.
     */
    export interface AssetEndpointProfilePropertiesUserAuthenticationArgs {
        /**
         * Defines the mode to authenticate the user of the client at the server.
         */
        mode: pulumi.Input<string | enums.Mode>;
        /**
         * Defines the username and password references when UsernamePassword user authentication mode is selected.
         */
        usernamePasswordCredentials?: pulumi.Input<AssetEndpointProfilePropertiesUsernamePasswordCredentialsArgs>;
        /**
         * Defines the certificate reference when Certificate user authentication mode is selected.
         */
        x509Credentials?: pulumi.Input<AssetEndpointProfilePropertiesX509CredentialsArgs>;
    }
    /**
     * assetEndpointProfilePropertiesUserAuthenticationArgsProvideDefaults sets the appropriate defaults for AssetEndpointProfilePropertiesUserAuthenticationArgs
     */
    export function assetEndpointProfilePropertiesUserAuthenticationArgsProvideDefaults(val: AssetEndpointProfilePropertiesUserAuthenticationArgs): AssetEndpointProfilePropertiesUserAuthenticationArgs {
        return {
            ...val,
            mode: (val.mode) ?? "Certificate",
        };
    }

    /**
     * Defines the username and password references when UsernamePassword user authentication mode is selected.
     */
    export interface AssetEndpointProfilePropertiesUsernamePasswordCredentialsArgs {
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
     * Defines the certificate reference when Certificate user authentication mode is selected.
     */
    export interface AssetEndpointProfilePropertiesX509CredentialsArgs {
        /**
         * A reference to secret containing the certificate and private key (e.g. stored as .der/.pem or .der/.pfx).
         */
        certificateReference: pulumi.Input<string>;
    }

    /**
     * The extended location.
     */
    export interface AssetExtendedLocationArgs {
        /**
         * The extended location name.
         */
        name?: pulumi.Input<string>;
        /**
         * The extended location type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Asset resource properties.
     */
    export interface AssetPropertiesArgs {
        /**
         * A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must have the format <ModuleCR.metadata.namespace>/<ModuleCR.metadata.name>.
         */
        assetEndpointProfileUri: pulumi.Input<string>;
        /**
         * Resource path to asset type (model) definition.
         */
        assetType?: pulumi.Input<string>;
        /**
         * A set of key-value pairs that contain custom attributes set by the customer.
         */
        attributes?: any;
        /**
         * Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration. See below for more details for the definition of the dataPoints element.
         */
        dataPoints?: pulumi.Input<pulumi.Input<AssetPropertiesDataPointsArgs>[]>;
        /**
         * Protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol.
         */
        defaultDataPointsConfiguration?: pulumi.Input<string>;
        /**
         * Protocol-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here. This assumes that each asset instance has one protocol.
         */
        defaultEventsConfiguration?: pulumi.Input<string>;
        /**
         * Human-readable description of the asset.
         */
        description?: pulumi.Input<string>;
        /**
         * Human-readable display name.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Reference to the documentation.
         */
        documentationUri?: pulumi.Input<string>;
        /**
         * Enabled/Disabled status of the asset.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Array of events that are part of the asset. Each event can reference an asset type capability and have per-event configuration. See below for more details about the definition of the events element.
         */
        events?: pulumi.Input<pulumi.Input<AssetPropertiesEventsArgs>[]>;
        /**
         * Asset id provided by the customer.
         */
        externalAssetId?: pulumi.Input<string>;
        /**
         * Revision number of the hardware.
         */
        hardwareRevision?: pulumi.Input<string>;
        /**
         * Asset manufacturer name.
         */
        manufacturer?: pulumi.Input<string>;
        /**
         * Asset manufacturer URI.
         */
        manufacturerUri?: pulumi.Input<string>;
        /**
         * Asset model name.
         */
        model?: pulumi.Input<string>;
        /**
         * Asset product code.
         */
        productCode?: pulumi.Input<string>;
        /**
         * Asset serial number.
         */
        serialNumber?: pulumi.Input<string>;
        /**
         * Revision number of the software.
         */
        softwareRevision?: pulumi.Input<string>;
    }

    export interface AssetPropertiesDataPointsArgs {
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
     * assetPropertiesDataPointsArgsProvideDefaults sets the appropriate defaults for AssetPropertiesDataPointsArgs
     */
    export function assetPropertiesDataPointsArgsProvideDefaults(val: AssetPropertiesDataPointsArgs): AssetPropertiesDataPointsArgs {
        return {
            ...val,
            observabilityMode: (val.observabilityMode) ?? "none",
        };
    }

    export interface AssetPropertiesEventsArgs {
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
     * assetPropertiesEventsArgsProvideDefaults sets the appropriate defaults for AssetPropertiesEventsArgs
     */
    export function assetPropertiesEventsArgsProvideDefaults(val: AssetPropertiesEventsArgs): AssetPropertiesEventsArgs {
        return {
            ...val,
            observabilityMode: (val.observabilityMode) ?? "none",
        };
    }
