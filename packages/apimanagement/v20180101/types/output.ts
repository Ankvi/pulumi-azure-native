import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authorization header information.
     */
    export interface BackendAuthorizationHeaderCredentialsResponse {
        /**
         * Authentication Parameter value.
         */
        parameter: string;
        /**
         * Authentication Scheme name.
         */
        scheme: string;
    }

    /**
     * Details of the Credentials used to connect to Backend.
     */
    export interface BackendCredentialsContractResponse {
        /**
         * Authorization header authentication
         */
        authorization?: BackendAuthorizationHeaderCredentialsResponse;
        /**
         * List of Client Certificate Thumbprint.
         */
        certificate?: string[];
        /**
         * Header Parameter description.
         */
        header?: {[key: string]: string[]};
        /**
         * Query Parameter description.
         */
        query?: {[key: string]: string[]};
    }

    /**
     * Properties specific to the Backend Type.
     */
    export interface BackendPropertiesResponse {
        /**
         * Backend Service Fabric Cluster Properties
         */
        serviceFabricCluster?: BackendServiceFabricClusterPropertiesResponse;
    }

    /**
     * Details of the Backend WebProxy Server to use in the Request to Backend.
     */
    export interface BackendProxyContractResponse {
        /**
         * Password to connect to the WebProxy Server
         */
        password?: string;
        /**
         * WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
         */
        url: string;
        /**
         * Username to connect to the WebProxy server
         */
        username?: string;
    }

    /**
     * Properties of the Service Fabric Type Backend.
     */
    export interface BackendServiceFabricClusterPropertiesResponse {
        /**
         * The client certificate thumbprint for the management endpoint.
         */
        clientCertificatethumbprint: string;
        /**
         * The cluster management endpoint.
         */
        managementEndpoints: string[];
        /**
         * Maximum number of retries while attempting resolve the partition.
         */
        maxPartitionResolutionRetries?: number;
        /**
         * Thumbprints of certificates cluster management service uses for tls communication
         */
        serverCertificateThumbprints?: string[];
        /**
         * Server X509 Certificate Names Collection
         */
        serverX509Names?: X509CertificateNameResponse[];
    }

    /**
     * Properties controlling TLS Certificate Validation.
     */
    export interface BackendTlsPropertiesResponse {
        /**
         * Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
         */
        validateCertificateChain?: boolean;
        /**
         * Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
         */
        validateCertificateName?: boolean;
    }
    /**
     * backendTlsPropertiesResponseProvideDefaults sets the appropriate defaults for BackendTlsPropertiesResponse
     */
    export function backendTlsPropertiesResponseProvideDefaults(val: BackendTlsPropertiesResponse): BackendTlsPropertiesResponse {
        return {
            ...val,
            validateCertificateChain: (val.validateCertificateChain) ?? true,
            validateCertificateName: (val.validateCertificateName) ?? true,
        };
    }

    /**
     * Group contract Properties.
     */
    export interface GroupContractPropertiesResponse {
        /**
         * true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
         */
        builtIn: boolean;
        /**
         * Group description. Can contain HTML formatting tags.
         */
        description?: string;
        /**
         * Group name.
         */
        displayName: string;
        /**
         * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
         */
        externalId?: string;
        /**
         * Group type.
         */
        type?: string;
    }

    /**
     * User identity details.
     */
    export interface UserIdentityContractResponse {
        /**
         * Identifier value within provider.
         */
        id?: string;
        /**
         * Identity provider name.
         */
        provider?: string;
    }

    /**
     * Properties of server X509Names.
     */
    export interface X509CertificateNameResponse {
        /**
         * Thumbprint for the Issuer of the Certificate.
         */
        issuerCertificateThumbprint?: string;
        /**
         * Common Name of the Certificate.
         */
        name?: string;
    }
