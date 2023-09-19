import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Description of an additional API Management resource location.
     */
    export interface AdditionalLocationArgs {
        /**
         * The location name of the additional region among Azure Data center regions.
         */
        location: pulumi.Input<string>;
        /**
         * SKU properties of the API Management service.
         */
        sku: pulumi.Input<ApiManagementServiceSkuPropertiesArgs>;
        /**
         * Virtual network configuration for the location.
         */
        virtualNetworkConfiguration?: pulumi.Input<VirtualNetworkConfigurationArgs>;
    }
    /**
     * additionalLocationArgsProvideDefaults sets the appropriate defaults for AdditionalLocationArgs
     */
    export function additionalLocationArgsProvideDefaults(val: AdditionalLocationArgs): AdditionalLocationArgs {
        return {
            ...val,
            sku: pulumi.output(val.sku).apply(apiManagementServiceSkuPropertiesArgsProvideDefaults),
        };
    }

    /**
     * Criteria to limit import of WSDL to a subset of the document.
     */
    export interface ApiCreateOrUpdatePropertiesWsdlSelectorArgs {
        /**
         * Name of endpoint(port) to import from WSDL
         */
        wsdlEndpointName?: pulumi.Input<string>;
        /**
         * Name of service to import from WSDL
         */
        wsdlServiceName?: pulumi.Input<string>;
    }

    /**
     * Identity properties of the Api Management service resource.
     */
    export interface ApiManagementServiceIdentityArgs {
        /**
         * The identity type. Currently the only supported type is 'SystemAssigned'.
         */
        type: pulumi.Input<string | enums.ApimIdentityType>;
    }

    /**
     * API Management service resource SKU properties.
     */
    export interface ApiManagementServiceSkuPropertiesArgs {
        /**
         * Capacity of the SKU (number of deployed units of the SKU). The default value is 1.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Name of the Sku.
         */
        name: pulumi.Input<string | enums.SkuType>;
    }
    /**
     * apiManagementServiceSkuPropertiesArgsProvideDefaults sets the appropriate defaults for ApiManagementServiceSkuPropertiesArgs
     */
    export function apiManagementServiceSkuPropertiesArgsProvideDefaults(val: ApiManagementServiceSkuPropertiesArgs): ApiManagementServiceSkuPropertiesArgs {
        return {
            ...val,
            capacity: (val.capacity) ?? 1,
        };
    }

    /**
     * Api Version Set Contract details.
     */
    export interface ApiVersionSetContractArgs {
        /**
         * Description of API Version Set.
         */
        description?: pulumi.Input<string>;
        /**
         * Name of API Version Set
         */
        displayName: pulumi.Input<string>;
        /**
         * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
         */
        versionHeaderName?: pulumi.Input<string>;
        /**
         * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
         */
        versionQueryName?: pulumi.Input<string>;
        /**
         * An value that determines where the API Version identifier will be located in a HTTP request.
         */
        versioningScheme: pulumi.Input<string | enums.VersioningScheme>;
    }

    /**
     * API Authentication Settings.
     */
    export interface AuthenticationSettingsContractArgs {
        /**
         * OAuth2 Authentication settings
         */
        oAuth2?: pulumi.Input<OAuth2AuthenticationSettingsContractArgs>;
    }

    /**
     * Certificate configuration which consist of non-trusted intermediates and root certificates.
     */
    export interface CertificateConfigurationArgs {
        /**
         * Certificate Password.
         */
        certificatePassword?: pulumi.Input<string>;
        /**
         * Base64 Encoded certificate.
         */
        encodedCertificate?: pulumi.Input<string>;
        /**
         * The local certificate store location. Only Root and CertificateAuthority are valid locations.
         */
        storeName: pulumi.Input<string>;
    }

    /**
     * Custom hostname configuration.
     */
    export interface HostnameConfigurationArgs {
        /**
         * Certificate Password.
         */
        certificatePassword?: pulumi.Input<string>;
        /**
         * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to Proxy Hostname Type.
         */
        defaultSslBinding?: pulumi.Input<boolean>;
        /**
         * Base64 Encoded certificate.
         */
        encodedCertificate?: pulumi.Input<string>;
        /**
         * Hostname to configure on the Api Management service.
         */
        hostName: pulumi.Input<string>;
        /**
         * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with MSI. The secret should be of type *application/x-pkcs12*
         */
        keyVaultId?: pulumi.Input<string>;
        /**
         * Specify true to always negotiate client certificate on the hostname. Default Value is false.
         */
        negotiateClientCertificate?: pulumi.Input<boolean>;
        /**
         * Hostname type.
         */
        type: pulumi.Input<enums.HostnameType>;
    }
    /**
     * hostnameConfigurationArgsProvideDefaults sets the appropriate defaults for HostnameConfigurationArgs
     */
    export function hostnameConfigurationArgsProvideDefaults(val: HostnameConfigurationArgs): HostnameConfigurationArgs {
        return {
            ...val,
            defaultSslBinding: (val.defaultSslBinding) ?? false,
            negotiateClientCertificate: (val.negotiateClientCertificate) ?? false,
        };
    }

    /**
     * Sampling settings contract.
     */
    export interface LoggerSamplingContractArgs {
        /**
         * Rate re-evaluation interval in ISO8601 format.
         */
        evaluationInterval?: pulumi.Input<string>;
        /**
         * Initial sampling rate.
         */
        initialPercentage?: pulumi.Input<number>;
        /**
         * Maximum allowed rate of sampling.
         */
        maxPercentage?: pulumi.Input<number>;
        /**
         * Target rate of telemetry items per second.
         */
        maxTelemetryItemsPerSecond?: pulumi.Input<number>;
        /**
         * Minimum allowed rate of sampling.
         */
        minPercentage?: pulumi.Input<number>;
        /**
         * Moving average ration assigned to most recent value.
         */
        movingAverageRatio?: pulumi.Input<number>;
        /**
         * Rate of sampling for fixed-rate sampling.
         */
        percentage?: pulumi.Input<number>;
        /**
         * Duration in ISO8601 format after which it's allowed to lower the sampling rate.
         */
        percentageDecreaseTimeout?: pulumi.Input<string>;
        /**
         * Duration in ISO8601 format after which it's allowed to increase the sampling rate.
         */
        percentageIncreaseTimeout?: pulumi.Input<string>;
        /**
         * Sampling type.
         */
        samplingType?: pulumi.Input<string | enums.SamplingType>;
    }

    /**
     * API OAuth2 Authentication settings details.
     */
    export interface OAuth2AuthenticationSettingsContractArgs {
        /**
         * OAuth authorization server identifier.
         */
        authorizationServerId?: pulumi.Input<string>;
        /**
         * operations scope.
         */
        scope?: pulumi.Input<string>;
    }

    /**
     * Subscription key parameter names details.
     */
    export interface SubscriptionKeyParameterNamesContractArgs {
        /**
         * Subscription key header name.
         */
        header?: pulumi.Input<string>;
        /**
         * Subscription key query string parameter name.
         */
        query?: pulumi.Input<string>;
    }

    /**
     * Configuration of a virtual network to which API Management service is deployed.
     */
    export interface VirtualNetworkConfigurationArgs {
        /**
         * The full resource ID of a subnet in a virtual network to deploy the API Management service in.
         */
        subnetResourceId?: pulumi.Input<string>;
    }
