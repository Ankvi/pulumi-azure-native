import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Asset sink.
     */
    export interface MediaGraphAssetSinkResponse {
        /**
         * Asset name.
         */
        assetName: string;
        /**
         * Sink inputs.
         */
        inputs: string[];
        /**
         * Sink name.
         */
        name: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphAssetSink'.
         */
        odataType: "#Microsoft.Media.MediaGraphAssetSink";
    }

    /**
     * An endpoint to connect to with no encryption in transit.
     */
    export interface MediaGraphClearEndpointResponse {
        /**
         * Polymorphic credentials to present to the endpoint.
         */
        credentials?: MediaGraphUsernamePasswordCredentialsResponse;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphClearEndpoint'.
         */
        odataType: "#Microsoft.Media.MediaGraphClearEndpoint";
        /**
         * Url for the endpoint.
         */
        url: string;
    }

    /**
     * A list of PEM formatted certificates.
     */
    export interface MediaGraphPemCertificateListResponse {
        /**
         * PEM formatted public certificates, one per entry.
         */
        certificates: string[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphPemCertificateList'.
         */
        odataType: "#Microsoft.Media.MediaGraphPemCertificateList";
    }

    /**
     * RTSP source.
     */
    export interface MediaGraphRtspSourceResponse {
        /**
         * RTSP endpoint of the stream being connected to.
         */
        endpoint: MediaGraphClearEndpointResponse | MediaGraphTlsEndpointResponse;
        /**
         * Source name.
         */
        name: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphRtspSource'.
         */
        odataType: "#Microsoft.Media.MediaGraphRtspSource";
        /**
         * Underlying RTSP transport. This can be used to enable or disable HTTP tunneling.
         */
        transport: string;
    }

    /**
     * An endpoint which must be connected over TLS/SSL.
     */
    export interface MediaGraphTlsEndpointResponse {
        /**
         * Polymorphic credentials to present to the endpoint.
         */
        credentials?: MediaGraphUsernamePasswordCredentialsResponse;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphTlsEndpoint'.
         */
        odataType: "#Microsoft.Media.MediaGraphTlsEndpoint";
        /**
         * What certificates should be trusted when authenticating a TLS connection. Null designates that Azure Media's source of trust should be used.
         */
        trustedCertificates?: MediaGraphPemCertificateListResponse;
        /**
         * Url for the endpoint.
         */
        url: string;
        /**
         * Validation options to use when authenticating a TLS connection. By default, strict validation is used.
         */
        validationOptions?: MediaGraphTlsValidationOptionsResponse;
    }

    /**
     * Options for controlling the authentication of TLS endpoints.
     */
    export interface MediaGraphTlsValidationOptionsResponse {
        /**
         * Ignore the host name (common name) during validation.
         */
        ignoreHostname: boolean;
        /**
         * Ignore the integrity of the certificate chain at the current time.
         */
        ignoreSignature: boolean;
    }

    /**
     * Username/password credential pair.
     */
    export interface MediaGraphUsernamePasswordCredentialsResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphUsernamePasswordCredentials'.
         */
        odataType: "#Microsoft.Media.MediaGraphUsernamePasswordCredentials";
        /**
         * Password for a username/password pair.
         */
        password: string;
        /**
         * Username for a username/password pair.
         */
        username: string;
    }
