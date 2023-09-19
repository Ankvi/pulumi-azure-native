import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Description of an additional API Management resource location.
     */
    export interface AdditionalLocationResponse {
        /**
         * Gateway URL of the API Management service in the Region.
         */
        gatewayRegionalUrl: string;
        /**
         * The location name of the additional region among Azure Data center regions.
         */
        location: string;
        /**
         * SKU properties of the API Management service.
         */
        sku: ApiManagementServiceSkuPropertiesResponse;
        /**
         * Static IP addresses of the location's virtual machines.
         */
        staticIps: string[];
        /**
         * Virtual network configuration for the location.
         */
        virtualNetworkConfiguration?: VirtualNetworkConfigurationResponse;
    }
    /**
     * additionalLocationResponseProvideDefaults sets the appropriate defaults for AdditionalLocationResponse
     */
    export function additionalLocationResponseProvideDefaults(val: AdditionalLocationResponse): AdditionalLocationResponse {
        return {
            ...val,
            sku: apiManagementServiceSkuPropertiesResponseProvideDefaults(val.sku),
        };
    }

    /**
     * Identity properties of the Api Management service resource.
     */
    export interface ApiManagementServiceIdentityResponse {
        /**
         * The principal id of the identity.
         */
        principalId: string;
        /**
         * The client tenant id of the identity.
         */
        tenantId: string;
        /**
         * The identity type. Currently the only supported type is 'SystemAssigned'.
         */
        type: string;
    }

    /**
     * API Management service resource SKU properties.
     */
    export interface ApiManagementServiceSkuPropertiesResponse {
        /**
         * Capacity of the SKU (number of deployed units of the SKU). The default value is 1.
         */
        capacity?: number;
        /**
         * Name of the Sku.
         */
        name: string;
    }
    /**
     * apiManagementServiceSkuPropertiesResponseProvideDefaults sets the appropriate defaults for ApiManagementServiceSkuPropertiesResponse
     */
    export function apiManagementServiceSkuPropertiesResponseProvideDefaults(val: ApiManagementServiceSkuPropertiesResponse): ApiManagementServiceSkuPropertiesResponse {
        return {
            ...val,
            capacity: (val.capacity) ?? 1,
        };
    }

    /**
     * Api Version Set Contract details.
     */
    export interface ApiVersionSetContractResponse {
        /**
         * Description of API Version Set.
         */
        description?: string;
        /**
         * Name of API Version Set
         */
        displayName: string;
        /**
         * Resource ID.
         */
        id: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * Resource type for API Management resource.
         */
        type: string;
        /**
         * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
         */
        versionHeaderName?: string;
        /**
         * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
         */
        versionQueryName?: string;
        /**
         * An value that determines where the API Version identifier will be located in a HTTP request.
         */
        versioningScheme: string;
    }

    /**
     * API Authentication Settings.
     */
    export interface AuthenticationSettingsContractResponse {
        /**
         * OAuth2 Authentication settings
         */
        oAuth2?: OAuth2AuthenticationSettingsContractResponse;
    }

    /**
     * Certificate configuration which consist of non-trusted intermediates and root certificates.
     */
    export interface CertificateConfigurationResponse {
        /**
         * Certificate information.
         */
        certificate: CertificateInformationResponse;
        /**
         * Certificate Password.
         */
        certificatePassword?: string;
        /**
         * Base64 Encoded certificate.
         */
        encodedCertificate?: string;
        /**
         * The local certificate store location. Only Root and CertificateAuthority are valid locations.
         */
        storeName: string;
    }

    /**
     * SSL certificate information.
     */
    export interface CertificateInformationResponse {
        /**
         * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
         */
        expiry: string;
        /**
         * Subject of the certificate.
         */
        subject: string;
        /**
         * Thumbprint of the certificate.
         */
        thumbprint: string;
    }

    /**
     * Contract details.
     */
    export interface GroupContractResponse {
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
         * Resource ID.
         */
        id: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * Resource type for API Management resource.
         */
        type: string;
    }

    /**
     * Custom hostname configuration.
     */
    export interface HostnameConfigurationResponse {
        /**
         * Certificate information.
         */
        certificate: CertificateInformationResponse;
        /**
         * Certificate Password.
         */
        certificatePassword?: string;
        /**
         * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to Proxy Hostname Type.
         */
        defaultSslBinding?: boolean;
        /**
         * Base64 Encoded certificate.
         */
        encodedCertificate?: string;
        /**
         * Hostname to configure on the Api Management service.
         */
        hostName: string;
        /**
         * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with MSI. The secret should be of type *application/x-pkcs12*
         */
        keyVaultId?: string;
        /**
         * Specify true to always negotiate client certificate on the hostname. Default Value is false.
         */
        negotiateClientCertificate?: boolean;
        /**
         * Hostname type.
         */
        type: string;
    }
    /**
     * hostnameConfigurationResponseProvideDefaults sets the appropriate defaults for HostnameConfigurationResponse
     */
    export function hostnameConfigurationResponseProvideDefaults(val: HostnameConfigurationResponse): HostnameConfigurationResponse {
        return {
            ...val,
            defaultSslBinding: (val.defaultSslBinding) ?? false,
            negotiateClientCertificate: (val.negotiateClientCertificate) ?? false,
        };
    }

    /**
     * Sampling settings contract.
     */
    export interface LoggerSamplingContractResponse {
        /**
         * Rate re-evaluation interval in ISO8601 format.
         */
        evaluationInterval?: string;
        /**
         * Initial sampling rate.
         */
        initialPercentage?: number;
        /**
         * Maximum allowed rate of sampling.
         */
        maxPercentage?: number;
        /**
         * Target rate of telemetry items per second.
         */
        maxTelemetryItemsPerSecond?: number;
        /**
         * Minimum allowed rate of sampling.
         */
        minPercentage?: number;
        /**
         * Moving average ration assigned to most recent value.
         */
        movingAverageRatio?: number;
        /**
         * Rate of sampling for fixed-rate sampling.
         */
        percentage?: number;
        /**
         * Duration in ISO8601 format after which it's allowed to lower the sampling rate.
         */
        percentageDecreaseTimeout?: string;
        /**
         * Duration in ISO8601 format after which it's allowed to increase the sampling rate.
         */
        percentageIncreaseTimeout?: string;
        /**
         * Sampling type.
         */
        samplingType?: string;
    }

    /**
     * API OAuth2 Authentication settings details.
     */
    export interface OAuth2AuthenticationSettingsContractResponse {
        /**
         * OAuth authorization server identifier.
         */
        authorizationServerId?: string;
        /**
         * operations scope.
         */
        scope?: string;
    }

    /**
     * Subscription key parameter names details.
     */
    export interface SubscriptionKeyParameterNamesContractResponse {
        /**
         * Subscription key header name.
         */
        header?: string;
        /**
         * Subscription key query string parameter name.
         */
        query?: string;
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
     * Configuration of a virtual network to which API Management service is deployed.
     */
    export interface VirtualNetworkConfigurationResponse {
        /**
         * The full resource ID of a subnet in a virtual network to deploy the API Management service in.
         */
        subnetResourceId?: string;
        /**
         * The name of the subnet.
         */
        subnetname: string;
        /**
         * The virtual network ID. This is typically a GUID. Expect a null GUID by default.
         */
        vnetid: string;
    }
