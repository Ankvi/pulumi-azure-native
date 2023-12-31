import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Asset sink.
     */
    export interface MediaGraphAssetSinkArgs {
        /**
         * Asset name.
         */
        assetName: pulumi.Input<string>;
        /**
         * Sink inputs.
         */
        inputs: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Sink name.
         */
        name: pulumi.Input<string>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphAssetSink'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.MediaGraphAssetSink">;
    }

    /**
     * An endpoint to connect to with no encryption in transit.
     */
    export interface MediaGraphClearEndpointArgs {
        /**
         * Polymorphic credentials to present to the endpoint.
         */
        credentials?: pulumi.Input<MediaGraphUsernamePasswordCredentialsArgs>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphClearEndpoint'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.MediaGraphClearEndpoint">;
        /**
         * Url for the endpoint.
         */
        url: pulumi.Input<string>;
    }

    /**
     * A list of PEM formatted certificates.
     */
    export interface MediaGraphPemCertificateListArgs {
        /**
         * PEM formatted public certificates, one per entry.
         */
        certificates: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphPemCertificateList'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.MediaGraphPemCertificateList">;
    }

    /**
     * RTSP source.
     */
    export interface MediaGraphRtspSourceArgs {
        /**
         * RTSP endpoint of the stream being connected to.
         */
        endpoint: pulumi.Input<MediaGraphClearEndpointArgs | MediaGraphTlsEndpointArgs>;
        /**
         * Source name.
         */
        name: pulumi.Input<string>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphRtspSource'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.MediaGraphRtspSource">;
        /**
         * Underlying RTSP transport. This can be used to enable or disable HTTP tunneling.
         */
        transport: pulumi.Input<string | enums.MediaGraphRtspTransport>;
    }

    /**
     * An endpoint which must be connected over TLS/SSL.
     */
    export interface MediaGraphTlsEndpointArgs {
        /**
         * Polymorphic credentials to present to the endpoint.
         */
        credentials?: pulumi.Input<MediaGraphUsernamePasswordCredentialsArgs>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphTlsEndpoint'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.MediaGraphTlsEndpoint">;
        /**
         * What certificates should be trusted when authenticating a TLS connection. Null designates that Azure Media's source of trust should be used.
         */
        trustedCertificates?: pulumi.Input<MediaGraphPemCertificateListArgs>;
        /**
         * Url for the endpoint.
         */
        url: pulumi.Input<string>;
        /**
         * Validation options to use when authenticating a TLS connection. By default, strict validation is used.
         */
        validationOptions?: pulumi.Input<MediaGraphTlsValidationOptionsArgs>;
    }

    /**
     * Options for controlling the authentication of TLS endpoints.
     */
    export interface MediaGraphTlsValidationOptionsArgs {
        /**
         * Ignore the host name (common name) during validation.
         */
        ignoreHostname: pulumi.Input<boolean>;
        /**
         * Ignore the integrity of the certificate chain at the current time.
         */
        ignoreSignature: pulumi.Input<boolean>;
    }

    /**
     * Username/password credential pair.
     */
    export interface MediaGraphUsernamePasswordCredentialsArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphUsernamePasswordCredentials'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.MediaGraphUsernamePasswordCredentials">;
        /**
         * Password for a username/password pair.
         */
        password: pulumi.Input<string>;
        /**
         * Username for a username/password pair.
         */
        username: pulumi.Input<string>;
    }
