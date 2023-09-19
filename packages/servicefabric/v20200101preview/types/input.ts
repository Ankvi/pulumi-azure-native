import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The settings to enable AAD authentication on the cluster.
     */
    export interface AzureActiveDirectoryArgs {
        /**
         * Azure active directory client application id.
         */
        clientApplication?: pulumi.Input<string>;
        /**
         * Azure active directory cluster application id.
         */
        clusterApplication?: pulumi.Input<string>;
        /**
         * Azure active directory tenant id.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Client Certificate definition.
     */
    export interface ClientCertificateArgs {
        /**
         * Certificate Common name.
         */
        commonName?: pulumi.Input<string>;
        /**
         * Whether the certificate is admin or not.
         */
        isAdmin: pulumi.Input<boolean>;
        /**
         * Issuer thumbprint for the certificate. Only used together with CommonName.
         */
        issuerThumbprint?: pulumi.Input<string>;
        /**
         * Certificate Thumbprint.
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * Describes a load balancing rule.
     */
    export interface LoadBalancingRuleArgs {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: pulumi.Input<number>;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
         */
        frontendPort: pulumi.Input<number>;
        /**
         * the reference to the load balancer probe used by the load balancing rule.
         */
        probeProtocol: pulumi.Input<string | enums.ProbeProtocol>;
        /**
         * The probe request path. Only supported for HTTP/HTTPS probes.
         */
        probeRequestPath?: pulumi.Input<string>;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol: pulumi.Input<string | enums.Protocol>;
    }

    /**
     * Describes a parameter in fabric settings of the cluster.
     */
    export interface SettingsParameterDescriptionArgs {
        /**
         * The parameter name of fabric setting.
         */
        name: pulumi.Input<string>;
        /**
         * The parameter value of fabric setting.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Describes a section in the fabric settings of the cluster.
     */
    export interface SettingsSectionDescriptionArgs {
        /**
         * The section name of the fabric settings.
         */
        name: pulumi.Input<string>;
        /**
         * The collection of parameters in the section.
         */
        parameters: pulumi.Input<pulumi.Input<SettingsParameterDescriptionArgs>[]>;
    }

    /**
     * Sku definition
     */
    export interface SkuArgs {
        /**
         * Sku Name.
         */
        name: pulumi.Input<string>;
    }
