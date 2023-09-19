import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authorization header information.
     */
    export interface BackendAuthorizationHeaderCredentialsArgs {
        /**
         * Authentication Parameter value.
         */
        parameter: pulumi.Input<string>;
        /**
         * Authentication Scheme name.
         */
        scheme: pulumi.Input<string>;
    }

    /**
     * Details of the Credentials used to connect to Backend.
     */
    export interface BackendCredentialsContractArgs {
        /**
         * Authorization header authentication
         */
        authorization?: pulumi.Input<BackendAuthorizationHeaderCredentialsArgs>;
        /**
         * List of Client Certificate Thumbprint.
         */
        certificate?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Header Parameter description.
         */
        header?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
        /**
         * Query Parameter description.
         */
        query?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    }

    /**
     * Properties specific to the Backend Type.
     */
    export interface BackendPropertiesArgs {
        /**
         * Backend Service Fabric Cluster Properties
         */
        serviceFabricCluster?: pulumi.Input<BackendServiceFabricClusterPropertiesArgs>;
    }

    /**
     * Details of the Backend WebProxy Server to use in the Request to Backend.
     */
    export interface BackendProxyContractArgs {
        /**
         * Password to connect to the WebProxy Server
         */
        password?: pulumi.Input<string>;
        /**
         * WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
         */
        url: pulumi.Input<string>;
        /**
         * Username to connect to the WebProxy server
         */
        username?: pulumi.Input<string>;
    }

    /**
     * Properties of the Service Fabric Type Backend.
     */
    export interface BackendServiceFabricClusterPropertiesArgs {
        /**
         * The client certificate thumbprint for the management endpoint.
         */
        clientCertificatethumbprint: pulumi.Input<string>;
        /**
         * The cluster management endpoint.
         */
        managementEndpoints: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Maximum number of retries while attempting resolve the partition.
         */
        maxPartitionResolutionRetries?: pulumi.Input<number>;
        /**
         * Thumbprints of certificates cluster management service uses for tls communication
         */
        serverCertificateThumbprints?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Server X509 Certificate Names Collection
         */
        serverX509Names?: pulumi.Input<pulumi.Input<X509CertificateNameArgs>[]>;
    }

    /**
     * Properties controlling TLS Certificate Validation.
     */
    export interface BackendTlsPropertiesArgs {
        /**
         * Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
         */
        validateCertificateChain?: pulumi.Input<boolean>;
        /**
         * Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
         */
        validateCertificateName?: pulumi.Input<boolean>;
    }
    /**
     * backendTlsPropertiesArgsProvideDefaults sets the appropriate defaults for BackendTlsPropertiesArgs
     */
    export function backendTlsPropertiesArgsProvideDefaults(val: BackendTlsPropertiesArgs): BackendTlsPropertiesArgs {
        return {
            ...val,
            validateCertificateChain: (val.validateCertificateChain) ?? true,
            validateCertificateName: (val.validateCertificateName) ?? true,
        };
    }

    /**
     * User identity details.
     */
    export interface UserIdentityContractArgs {
        /**
         * Identifier value within provider.
         */
        id?: pulumi.Input<string>;
        /**
         * Identity provider name.
         */
        provider?: pulumi.Input<string>;
    }

    /**
     * Properties of server X509Names.
     */
    export interface X509CertificateNameArgs {
        /**
         * Thumbprint for the Issuer of the Certificate.
         */
        issuerCertificateThumbprint?: pulumi.Input<string>;
        /**
         * Common Name of the Certificate.
         */
        name?: pulumi.Input<string>;
    }
