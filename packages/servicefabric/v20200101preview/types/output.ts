import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The settings to enable AAD authentication on the cluster.
     */
    export interface AzureActiveDirectoryResponse {
        /**
         * Azure active directory client application id.
         */
        clientApplication?: string;
        /**
         * Azure active directory cluster application id.
         */
        clusterApplication?: string;
        /**
         * Azure active directory tenant id.
         */
        tenantId?: string;
    }

    /**
     * Client Certificate definition.
     */
    export interface ClientCertificateResponse {
        /**
         * Certificate Common name.
         */
        commonName?: string;
        /**
         * Whether the certificate is admin or not.
         */
        isAdmin: boolean;
        /**
         * Issuer thumbprint for the certificate. Only used together with CommonName.
         */
        issuerThumbprint?: string;
        /**
         * Certificate Thumbprint.
         */
        thumbprint?: string;
    }

    /**
     * Describes a load balancing rule.
     */
    export interface LoadBalancingRuleResponse {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: number;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
         */
        frontendPort: number;
        /**
         * the reference to the load balancer probe used by the load balancing rule.
         */
        probeProtocol: string;
        /**
         * The probe request path. Only supported for HTTP/HTTPS probes.
         */
        probeRequestPath?: string;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol: string;
    }

    /**
     * Describes a parameter in fabric settings of the cluster.
     */
    export interface SettingsParameterDescriptionResponse {
        /**
         * The parameter name of fabric setting.
         */
        name: string;
        /**
         * The parameter value of fabric setting.
         */
        value: string;
    }

    /**
     * Describes a section in the fabric settings of the cluster.
     */
    export interface SettingsSectionDescriptionResponse {
        /**
         * The section name of the fabric settings.
         */
        name: string;
        /**
         * The collection of parameters in the section.
         */
        parameters: SettingsParameterDescriptionResponse[];
    }

    /**
     * Sku definition
     */
    export interface SkuResponse {
        /**
         * Sku Name.
         */
        name: string;
    }
