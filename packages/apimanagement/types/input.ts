import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace apimanagement {
    /**
     * Description of an additional API Management resource location.
     */
    export interface AdditionalLocationArgs {
        /**
         * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
         */
        disableGateway?: pulumi.Input<boolean>;
        /**
         * The location name of the additional region among Azure Data center regions.
         */
        location: pulumi.Input<string>;
        /**
         * Property can be used to enable NAT Gateway for this API Management service.
         */
        natGatewayState?: pulumi.Input<string | enums.NatGatewayState>;
        /**
         * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
         */
        publicIpAddressId?: pulumi.Input<string>;
        /**
         * SKU properties of the API Management service.
         */
        sku: pulumi.Input<ApiManagementServiceSkuPropertiesArgs>;
        /**
         * Virtual network configuration for the location.
         */
        virtualNetworkConfiguration?: pulumi.Input<VirtualNetworkConfigurationArgs>;
        /**
         * A list of availability zones denoting where the resource needs to come from.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }
    /**
     * additionalLocationArgsProvideDefaults sets the appropriate defaults for AdditionalLocationArgs
     */
    export function additionalLocationArgsProvideDefaults(val: AdditionalLocationArgs): AdditionalLocationArgs {
        return {
            ...val,
            disableGateway: (val.disableGateway) ?? false,
            natGatewayState: (val.natGatewayState) ?? "Disabled",
        };
    }

    /**
     * API contact information
     */
    export interface ApiContactInformationArgs {
        /**
         * The email address of the contact person/organization. MUST be in the format of an email address
         */
        email?: pulumi.Input<string>;
        /**
         * The identifying name of the contact person/organization
         */
        name?: pulumi.Input<string>;
        /**
         * The URL pointing to the contact information. MUST be in the format of a URL
         */
        url?: pulumi.Input<string>;
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
     * API license information
     */
    export interface ApiLicenseInformationArgs {
        /**
         * The license name used for the API
         */
        name?: pulumi.Input<string>;
        /**
         * A URL to the license used for the API. MUST be in the format of a URL
         */
        url?: pulumi.Input<string>;
    }

    /**
     * Identity properties of the Api Management service resource.
     */
    export interface ApiManagementServiceIdentityArgs {
        /**
         * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
         */
        type: pulumi.Input<string | enums.ApimIdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity 
         * dictionary key references will be ARM resource ids in the form: 
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
         *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityPropertiesArgs>}>;
    }

    /**
     * API Management service resource SKU properties.
     */
    export interface ApiManagementServiceSkuPropertiesArgs {
        /**
         * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
         */
        capacity: pulumi.Input<number>;
        /**
         * Name of the Sku.
         */
        name: pulumi.Input<string | enums.SkuType>;
    }

    /**
     * Control Plane Apis version constraint for the API Management service.
     */
    export interface ApiVersionConstraintArgs {
        /**
         * Limit control plane API calls to API Management service with version equal to or newer than this value.
         */
        minApiVersion?: pulumi.Input<string>;
    }

    /**
     * An API Version Set contains the common configuration for a set of API Versions relating 
     */
    export interface ApiVersionSetContractDetailsArgs {
        /**
         * Description of API Version Set.
         */
        description?: pulumi.Input<string>;
        /**
         * Identifier for existing API Version Set. Omit this value to create a new Version Set.
         */
        id?: pulumi.Input<string>;
        /**
         * The display Name of the API Version Set.
         */
        name?: pulumi.Input<string>;
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
        versioningScheme?: pulumi.Input<string | enums.VersioningScheme>;
    }

    /**
     * API Authentication Settings.
     */
    export interface AuthenticationSettingsContractArgs {
        /**
         * OAuth2 Authentication settings
         */
        oAuth2?: pulumi.Input<OAuth2AuthenticationSettingsContractArgs>;
        /**
         * Collection of OAuth2 authentication settings included into this API.
         */
        oAuth2AuthenticationSettings?: pulumi.Input<pulumi.Input<OAuth2AuthenticationSettingsContractArgs>[]>;
        /**
         * OpenID Connect Authentication Settings
         */
        openid?: pulumi.Input<OpenIdAuthenticationSettingsContractArgs>;
        /**
         * Collection of Open ID Connect authentication settings included into this API.
         */
        openidAuthenticationSettings?: pulumi.Input<pulumi.Input<OpenIdAuthenticationSettingsContractArgs>[]>;
    }

    /**
     * Authorization error details.
     */
    export interface AuthorizationErrorArgs {
        /**
         * Error code
         */
        code?: pulumi.Input<string>;
        /**
         * Error message
         */
        message?: pulumi.Input<string>;
    }

    /**
     * Authorization Provider oauth2 grant types settings
     */
    export interface AuthorizationProviderOAuth2GrantTypesArgs {
        /**
         * OAuth2 authorization code grant parameters
         */
        authorizationCode?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * OAuth2 client credential grant parameters
         */
        clientCredentials?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * OAuth2 settings details
     */
    export interface AuthorizationProviderOAuth2SettingsArgs {
        /**
         * OAuth2 settings
         */
        grantTypes?: pulumi.Input<AuthorizationProviderOAuth2GrantTypesArgs>;
        /**
         * Redirect URL to be set in the OAuth application.
         */
        redirectUrl?: pulumi.Input<string>;
    }

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
         * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
         */
        certificate?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of Client Certificate Ids.
         */
        certificateIds?: pulumi.Input<pulumi.Input<string>[]>;
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
         * The client certificate id for the management endpoint.
         */
        clientCertificateId?: pulumi.Input<string>;
        /**
         * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
         */
        clientCertificatethumbprint?: pulumi.Input<string>;
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
     * Body logging settings.
     */
    export interface BodyDiagnosticSettingsArgs {
        /**
         * Number of request body bytes to log.
         */
        bytes?: pulumi.Input<number>;
    }

    /**
     * Certificate configuration which consist of non-trusted intermediates and root certificates.
     */
    export interface CertificateConfigurationArgs {
        /**
         * Certificate information.
         */
        certificate?: pulumi.Input<CertificateInformationArgs>;
        /**
         * Certificate Password.
         */
        certificatePassword?: pulumi.Input<string>;
        /**
         * Base64 Encoded certificate.
         */
        encodedCertificate?: pulumi.Input<string>;
        /**
         * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
         */
        storeName: pulumi.Input<string>;
    }

    /**
     * SSL certificate information.
     */
    export interface CertificateInformationArgs {
        /**
         * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
         */
        expiry: pulumi.Input<string>;
        /**
         * Subject of the certificate.
         */
        subject: pulumi.Input<string>;
        /**
         * Thumbprint of the certificate.
         */
        thumbprint: pulumi.Input<string>;
    }

    export interface DataMaskingArgs {
        /**
         * Masking settings for headers
         */
        headers?: pulumi.Input<pulumi.Input<DataMaskingEntityArgs>[]>;
        /**
         * Masking settings for Url query parameters
         */
        queryParams?: pulumi.Input<pulumi.Input<DataMaskingEntityArgs>[]>;
    }

    export interface DataMaskingEntityArgs {
        /**
         * Data masking mode.
         */
        mode?: pulumi.Input<string | enums.DataMaskingMode>;
        /**
         * The name of an entity to mask (e.g. a name of a header or a query parameter).
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Email Template Parameter contract.
     */
    export interface EmailTemplateParametersContractPropertiesArgs {
        /**
         * Template parameter description.
         */
        description?: pulumi.Input<string>;
        /**
         * Template parameter name.
         */
        name?: pulumi.Input<string>;
        /**
         * Template parameter title.
         */
        title?: pulumi.Input<string>;
    }

    /**
     * Custom hostname configuration.
     */
    export interface HostnameConfigurationArgs {
        /**
         * Certificate information.
         */
        certificate?: pulumi.Input<CertificateInformationArgs>;
        /**
         * Certificate Password.
         */
        certificatePassword?: pulumi.Input<string>;
        /**
         * Certificate Source.
         */
        certificateSource?: pulumi.Input<string | enums.CertificateSource>;
        /**
         * Certificate Status.
         */
        certificateStatus?: pulumi.Input<string | enums.CertificateStatus>;
        /**
         * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
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
         * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
         */
        identityClientId?: pulumi.Input<string>;
        /**
         * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
         */
        keyVaultId?: pulumi.Input<string>;
        /**
         * Specify true to always negotiate client certificate on the hostname. Default Value is false.
         */
        negotiateClientCertificate?: pulumi.Input<boolean>;
        /**
         * Hostname type.
         */
        type: pulumi.Input<string | enums.HostnameType>;
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
     * Http message diagnostic settings.
     */
    export interface HttpMessageDiagnosticArgs {
        /**
         * Body logging settings.
         */
        body?: pulumi.Input<BodyDiagnosticSettingsArgs>;
        /**
         * Data masking settings.
         */
        dataMasking?: pulumi.Input<DataMaskingArgs>;
        /**
         * Array of HTTP Headers to log.
         */
        headers?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Create keyVault contract details.
     */
    export interface KeyVaultContractCreatePropertiesArgs {
        /**
         * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
         */
        identityClientId?: pulumi.Input<string>;
        /**
         * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
         */
        secretIdentifier?: pulumi.Input<string>;
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
     * API OAuth2 Authentication settings details.
     */
    export interface OpenIdAuthenticationSettingsContractArgs {
        /**
         * How to send token to the server.
         */
        bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string | enums.BearerTokenSendingMethods>[]>;
        /**
         * OAuth authorization server identifier.
         */
        openidProviderId?: pulumi.Input<string>;
    }

    /**
     * Operation parameters details.
     */
    export interface ParameterContractArgs {
        /**
         * Default parameter value.
         */
        defaultValue?: pulumi.Input<string>;
        /**
         * Parameter description.
         */
        description?: pulumi.Input<string>;
        /**
         * Exampled defined for the parameter.
         */
        examples?: pulumi.Input<{[key: string]: pulumi.Input<ParameterExampleContractArgs>}>;
        /**
         * Parameter name.
         */
        name: pulumi.Input<string>;
        /**
         * Specifies whether parameter is required or not.
         */
        required?: pulumi.Input<boolean>;
        /**
         * Schema identifier.
         */
        schemaId?: pulumi.Input<string>;
        /**
         * Parameter type.
         */
        type: pulumi.Input<string>;
        /**
         * Type name defined by the schema.
         */
        typeName?: pulumi.Input<string>;
        /**
         * Parameter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Parameter example.
     */
    export interface ParameterExampleContractArgs {
        /**
         * Long description for the example
         */
        description?: pulumi.Input<string>;
        /**
         * A URL that points to the literal example
         */
        externalValue?: pulumi.Input<string>;
        /**
         * Short description for the example
         */
        summary?: pulumi.Input<string>;
        /**
         * Example value. May be a primitive value, or an object.
         */
        value?: any;
    }

    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    export interface PipelineDiagnosticSettingsArgs {
        /**
         * Diagnostic settings for request.
         */
        request?: pulumi.Input<HttpMessageDiagnosticArgs>;
        /**
         * Diagnostic settings for response.
         */
        response?: pulumi.Input<HttpMessageDiagnosticArgs>;
    }

    /**
     * The connection state of the private endpoint connection.
     */
    export interface PrivateEndpointConnectionRequestPropertiesArgs {
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * Remote Private Endpoint Connection resource.
     */
    export interface RemotePrivateEndpointConnectionWrapperArgs {
        /**
         * Private Endpoint connection resource id
         */
        id?: pulumi.Input<string>;
        /**
         * Private Endpoint Connection Name
         */
        name?: pulumi.Input<string>;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
        /**
         * Private Endpoint Connection Resource Type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Operation request/response representation details.
     */
    export interface RepresentationContractArgs {
        /**
         * Specifies a registered or custom content type for this representation, e.g. application/xml.
         */
        contentType: pulumi.Input<string>;
        /**
         * Exampled defined for the representation.
         */
        examples?: pulumi.Input<{[key: string]: pulumi.Input<ParameterExampleContractArgs>}>;
        /**
         * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
         */
        formParameters?: pulumi.Input<pulumi.Input<ParameterContractArgs>[]>;
        /**
         * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
         */
        schemaId?: pulumi.Input<string>;
        /**
         * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
         */
        typeName?: pulumi.Input<string>;
    }

    /**
     * Operation request details.
     */
    export interface RequestContractArgs {
        /**
         * Operation request description.
         */
        description?: pulumi.Input<string>;
        /**
         * Collection of operation request headers.
         */
        headers?: pulumi.Input<pulumi.Input<ParameterContractArgs>[]>;
        /**
         * Collection of operation request query parameters.
         */
        queryParameters?: pulumi.Input<pulumi.Input<ParameterContractArgs>[]>;
        /**
         * Collection of operation request representations.
         */
        representations?: pulumi.Input<pulumi.Input<RepresentationContractArgs>[]>;
    }

    /**
     * Resource location data properties.
     */
    export interface ResourceLocationDataContractArgs {
        /**
         * The city or locality where the resource is located.
         */
        city?: pulumi.Input<string>;
        /**
         * The country or region where the resource is located.
         */
        countryOrRegion?: pulumi.Input<string>;
        /**
         * The district, state, or province where the resource is located.
         */
        district?: pulumi.Input<string>;
        /**
         * A canonical name for the geographic or physical location.
         */
        name: pulumi.Input<string>;
    }

    /**
     * Operation response details.
     */
    export interface ResponseContractArgs {
        /**
         * Operation response description.
         */
        description?: pulumi.Input<string>;
        /**
         * Collection of operation response headers.
         */
        headers?: pulumi.Input<pulumi.Input<ParameterContractArgs>[]>;
        /**
         * Collection of operation response representations.
         */
        representations?: pulumi.Input<pulumi.Input<RepresentationContractArgs>[]>;
        /**
         * Operation response HTTP status code.
         */
        statusCode: pulumi.Input<number>;
    }

    /**
     * Sampling settings for Diagnostic.
     */
    export interface SamplingSettingsArgs {
        /**
         * Rate of sampling for fixed-rate sampling.
         */
        percentage?: pulumi.Input<number>;
        /**
         * Sampling type.
         */
        samplingType?: pulumi.Input<string | enums.SamplingType>;
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
     * OAuth acquire token request body parameter (www-url-form-encoded).
     */
    export interface TokenBodyParameterContractArgs {
        /**
         * body parameter name.
         */
        name: pulumi.Input<string>;
        /**
         * body parameter value.
         */
        value: pulumi.Input<string>;
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

    export interface UserIdentityPropertiesArgs {
        /**
         * The client id of user assigned identity.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: pulumi.Input<string>;
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

    /**
     * Wiki documentation details.
     */
    export interface WikiDocumentationContractArgs {
        /**
         * Documentation Identifier
         */
        documentationId?: pulumi.Input<string>;
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

    export namespace v20161010 {
        /**
         * Description of an additional API Management resource location.
         */
        export interface AdditionalRegionArgs {
            /**
             * The location name of the additional region among Azure Data center regions.
             */
            location: pulumi.Input<string>;
            /**
             * The SKU type in the location.
             */
            skuType: pulumi.Input<enums.v20161010.SkuType>;
            /**
             * The SKU Unit count at the location. The maximum SKU Unit count depends on the SkuType. Maximum allowed for Developer SKU is 1, for Standard SKU is 4, and for Premium SKU is 10, at a location.
             */
            skuUnitCount?: pulumi.Input<number>;
            /**
             * Virtual network configuration for the location.
             */
            vpnconfiguration?: pulumi.Input<v20161010.VirtualNetworkConfigurationArgs>;
        }
        /**
         * additionalRegionArgsProvideDefaults sets the appropriate defaults for AdditionalRegionArgs
         */
        export function additionalRegionArgsProvideDefaults(val: AdditionalRegionArgs): AdditionalRegionArgs {
            return {
                ...val,
                skuUnitCount: (val.skuUnitCount) ?? 1,
            };
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
            name: pulumi.Input<enums.v20161010.SkuType>;
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
         * SSL certificate information.
         */
        export interface CertificateInformationArgs {
            /**
             * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
             */
            expiry: pulumi.Input<string>;
            /**
             * Subject of the certificate.
             */
            subject: pulumi.Input<string>;
            /**
             * Thumbprint of the certificate.
             */
            thumbprint: pulumi.Input<string>;
        }

        /**
         * Custom hostname configuration.
         */
        export interface HostnameConfigurationArgs {
            /**
             * Certificate information.
             */
            certificate: pulumi.Input<v20161010.CertificateInformationArgs>;
            /**
             * Hostname.
             */
            hostname: pulumi.Input<string>;
            /**
             * Hostname type.
             */
            type: pulumi.Input<enums.v20161010.HostnameType>;
        }

        /**
         * Configuration of a virtual network to which API Management service is deployed.
         */
        export interface VirtualNetworkConfigurationArgs {
            /**
             * The location of the virtual network.
             */
            location?: pulumi.Input<string>;
            /**
             * The full resource ID of a subnet in a virtual network to deploy the API Management service in.
             */
            subnetResourceId?: pulumi.Input<string>;
        }

    }

    export namespace v20170301 {
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
            sku: pulumi.Input<v20170301.ApiManagementServiceSkuPropertiesArgs>;
            /**
             * Virtual network configuration for the location.
             */
            virtualNetworkConfiguration?: pulumi.Input<v20170301.VirtualNetworkConfigurationArgs>;
        }
        /**
         * additionalLocationArgsProvideDefaults sets the appropriate defaults for AdditionalLocationArgs
         */
        export function additionalLocationArgsProvideDefaults(val: AdditionalLocationArgs): AdditionalLocationArgs {
            return {
                ...val,
                sku: pulumi.output(val.sku).apply(v20170301.apiManagementServiceSkuPropertiesArgsProvideDefaults),
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
            type: pulumi.Input<string | enums.v20170301.ApimIdentityType>;
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
            name: pulumi.Input<string | enums.v20170301.SkuType>;
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
            versioningScheme: pulumi.Input<string | enums.v20170301.VersioningScheme>;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractArgs {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: pulumi.Input<v20170301.OAuth2AuthenticationSettingsContractArgs>;
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
            type: pulumi.Input<enums.v20170301.HostnameType>;
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
            samplingType?: pulumi.Input<string | enums.v20170301.SamplingType>;
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

    }

    export namespace v20180101 {
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
            authorization?: pulumi.Input<v20180101.BackendAuthorizationHeaderCredentialsArgs>;
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
            serviceFabricCluster?: pulumi.Input<v20180101.BackendServiceFabricClusterPropertiesArgs>;
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
            serverX509Names?: pulumi.Input<pulumi.Input<v20180101.X509CertificateNameArgs>[]>;
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

    }

    export namespace v20180601preview {
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
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsArgs {
            /**
             * Description of API Version Set.
             */
            description?: pulumi.Input<string>;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: pulumi.Input<string>;
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
            versioningScheme?: pulumi.Input<string>;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractArgs {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: pulumi.Input<v20180601preview.OAuth2AuthenticationSettingsContractArgs>;
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: pulumi.Input<v20180601preview.OpenIdAuthenticationSettingsContractArgs>;
            /**
             * Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products.
             */
            subscriptionKeyRequired?: pulumi.Input<boolean>;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractArgs {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string | enums.v20180601preview.BearerTokenSendingMethods>[]>;
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: pulumi.Input<string>;
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

    }

    export namespace v20190101 {
        /**
         * Body logging settings.
         */
        export interface BodyDiagnosticSettingsArgs {
            /**
             * Number of request body bytes to log.
             */
            bytes?: pulumi.Input<number>;
        }

        /**
         * Http message diagnostic settings.
         */
        export interface HttpMessageDiagnosticArgs {
            /**
             * Body logging settings.
             */
            body?: pulumi.Input<v20190101.BodyDiagnosticSettingsArgs>;
            /**
             * Array of HTTP Headers to log.
             */
            headers?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
         */
        export interface PipelineDiagnosticSettingsArgs {
            /**
             * Diagnostic settings for request.
             */
            request?: pulumi.Input<v20190101.HttpMessageDiagnosticArgs>;
            /**
             * Diagnostic settings for response.
             */
            response?: pulumi.Input<v20190101.HttpMessageDiagnosticArgs>;
        }

        /**
         * Sampling settings for Diagnostic.
         */
        export interface SamplingSettingsArgs {
            /**
             * Rate of sampling for fixed-rate sampling.
             */
            percentage?: pulumi.Input<number>;
            /**
             * Sampling type.
             */
            samplingType?: pulumi.Input<string | enums.v20190101.SamplingType>;
        }

    }

    export namespace v20201201 {
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
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsArgs {
            /**
             * Description of API Version Set.
             */
            description?: pulumi.Input<string>;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: pulumi.Input<string>;
            /**
             * The display Name of the API Version Set.
             */
            name?: pulumi.Input<string>;
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
            versioningScheme?: pulumi.Input<string>;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractArgs {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: pulumi.Input<v20201201.OAuth2AuthenticationSettingsContractArgs>;
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: pulumi.Input<v20201201.OpenIdAuthenticationSettingsContractArgs>;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractArgs {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string | enums.v20201201.BearerTokenSendingMethods>[]>;
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: pulumi.Input<string>;
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

    }

    export namespace v20220801 {
        /**
         * Description of an additional API Management resource location.
         */
        export interface AdditionalLocationArgs {
            /**
             * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
             */
            disableGateway?: pulumi.Input<boolean>;
            /**
             * The location name of the additional region among Azure Data center regions.
             */
            location: pulumi.Input<string>;
            /**
             * Property can be used to enable NAT Gateway for this API Management service.
             */
            natGatewayState?: pulumi.Input<string | enums.v20220801.NatGatewayState>;
            /**
             * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
             */
            publicIpAddressId?: pulumi.Input<string>;
            /**
             * SKU properties of the API Management service.
             */
            sku: pulumi.Input<v20220801.ApiManagementServiceSkuPropertiesArgs>;
            /**
             * Virtual network configuration for the location.
             */
            virtualNetworkConfiguration?: pulumi.Input<v20220801.VirtualNetworkConfigurationArgs>;
            /**
             * A list of availability zones denoting where the resource needs to come from.
             */
            zones?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * additionalLocationArgsProvideDefaults sets the appropriate defaults for AdditionalLocationArgs
         */
        export function additionalLocationArgsProvideDefaults(val: AdditionalLocationArgs): AdditionalLocationArgs {
            return {
                ...val,
                disableGateway: (val.disableGateway) ?? false,
                natGatewayState: (val.natGatewayState) ?? "Disabled",
            };
        }

        /**
         * API contact information
         */
        export interface ApiContactInformationArgs {
            /**
             * The email address of the contact person/organization. MUST be in the format of an email address
             */
            email?: pulumi.Input<string>;
            /**
             * The identifying name of the contact person/organization
             */
            name?: pulumi.Input<string>;
            /**
             * The URL pointing to the contact information. MUST be in the format of a URL
             */
            url?: pulumi.Input<string>;
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
         * API license information
         */
        export interface ApiLicenseInformationArgs {
            /**
             * The license name used for the API
             */
            name?: pulumi.Input<string>;
            /**
             * A URL to the license used for the API. MUST be in the format of a URL
             */
            url?: pulumi.Input<string>;
        }

        /**
         * Identity properties of the Api Management service resource.
         */
        export interface ApiManagementServiceIdentityArgs {
            /**
             * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type: pulumi.Input<string | enums.v20220801.ApimIdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity 
             * dictionary key references will be ARM resource ids in the form: 
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
             *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20220801.UserIdentityPropertiesArgs>}>;
        }

        /**
         * API Management service resource SKU properties.
         */
        export interface ApiManagementServiceSkuPropertiesArgs {
            /**
             * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
             */
            capacity: pulumi.Input<number>;
            /**
             * Name of the Sku.
             */
            name: pulumi.Input<string | enums.v20220801.SkuType>;
        }

        /**
         * Control Plane Apis version constraint for the API Management service.
         */
        export interface ApiVersionConstraintArgs {
            /**
             * Limit control plane API calls to API Management service with version equal to or newer than this value.
             */
            minApiVersion?: pulumi.Input<string>;
        }

        /**
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsArgs {
            /**
             * Description of API Version Set.
             */
            description?: pulumi.Input<string>;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: pulumi.Input<string>;
            /**
             * The display Name of the API Version Set.
             */
            name?: pulumi.Input<string>;
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
            versioningScheme?: pulumi.Input<string | enums.v20220801.VersioningScheme>;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractArgs {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: pulumi.Input<v20220801.OAuth2AuthenticationSettingsContractArgs>;
            /**
             * Collection of OAuth2 authentication settings included into this API.
             */
            oAuth2AuthenticationSettings?: pulumi.Input<pulumi.Input<v20220801.OAuth2AuthenticationSettingsContractArgs>[]>;
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: pulumi.Input<v20220801.OpenIdAuthenticationSettingsContractArgs>;
            /**
             * Collection of Open ID Connect authentication settings included into this API.
             */
            openidAuthenticationSettings?: pulumi.Input<pulumi.Input<v20220801.OpenIdAuthenticationSettingsContractArgs>[]>;
        }

        /**
         * Authorization error details.
         */
        export interface AuthorizationErrorArgs {
            /**
             * Error code
             */
            code?: pulumi.Input<string>;
            /**
             * Error message
             */
            message?: pulumi.Input<string>;
        }

        /**
         * Authorization Provider oauth2 grant types settings
         */
        export interface AuthorizationProviderOAuth2GrantTypesArgs {
            /**
             * OAuth2 authorization code grant parameters
             */
            authorizationCode?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * OAuth2 client credential grant parameters
             */
            clientCredentials?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * OAuth2 settings details
         */
        export interface AuthorizationProviderOAuth2SettingsArgs {
            /**
             * OAuth2 settings
             */
            grantTypes?: pulumi.Input<v20220801.AuthorizationProviderOAuth2GrantTypesArgs>;
            /**
             * Redirect URL to be set in the OAuth application.
             */
            redirectUrl?: pulumi.Input<string>;
        }

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
            authorization?: pulumi.Input<v20220801.BackendAuthorizationHeaderCredentialsArgs>;
            /**
             * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
             */
            certificate?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of Client Certificate Ids.
             */
            certificateIds?: pulumi.Input<pulumi.Input<string>[]>;
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
            serviceFabricCluster?: pulumi.Input<v20220801.BackendServiceFabricClusterPropertiesArgs>;
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
             * The client certificate id for the management endpoint.
             */
            clientCertificateId?: pulumi.Input<string>;
            /**
             * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
             */
            clientCertificatethumbprint?: pulumi.Input<string>;
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
            serverX509Names?: pulumi.Input<pulumi.Input<v20220801.X509CertificateNameArgs>[]>;
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
         * Body logging settings.
         */
        export interface BodyDiagnosticSettingsArgs {
            /**
             * Number of request body bytes to log.
             */
            bytes?: pulumi.Input<number>;
        }

        /**
         * Certificate configuration which consist of non-trusted intermediates and root certificates.
         */
        export interface CertificateConfigurationArgs {
            /**
             * Certificate information.
             */
            certificate?: pulumi.Input<v20220801.CertificateInformationArgs>;
            /**
             * Certificate Password.
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * Base64 Encoded certificate.
             */
            encodedCertificate?: pulumi.Input<string>;
            /**
             * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
             */
            storeName: pulumi.Input<string>;
        }

        /**
         * SSL certificate information.
         */
        export interface CertificateInformationArgs {
            /**
             * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
             */
            expiry: pulumi.Input<string>;
            /**
             * Subject of the certificate.
             */
            subject: pulumi.Input<string>;
            /**
             * Thumbprint of the certificate.
             */
            thumbprint: pulumi.Input<string>;
        }

        export interface DataMaskingArgs {
            /**
             * Masking settings for headers
             */
            headers?: pulumi.Input<pulumi.Input<v20220801.DataMaskingEntityArgs>[]>;
            /**
             * Masking settings for Url query parameters
             */
            queryParams?: pulumi.Input<pulumi.Input<v20220801.DataMaskingEntityArgs>[]>;
        }

        export interface DataMaskingEntityArgs {
            /**
             * Data masking mode.
             */
            mode?: pulumi.Input<string | enums.v20220801.DataMaskingMode>;
            /**
             * The name of an entity to mask (e.g. a name of a header or a query parameter).
             */
            value?: pulumi.Input<string>;
        }

        /**
         * Email Template Parameter contract.
         */
        export interface EmailTemplateParametersContractPropertiesArgs {
            /**
             * Template parameter description.
             */
            description?: pulumi.Input<string>;
            /**
             * Template parameter name.
             */
            name?: pulumi.Input<string>;
            /**
             * Template parameter title.
             */
            title?: pulumi.Input<string>;
        }

        /**
         * Custom hostname configuration.
         */
        export interface HostnameConfigurationArgs {
            /**
             * Certificate information.
             */
            certificate?: pulumi.Input<v20220801.CertificateInformationArgs>;
            /**
             * Certificate Password.
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * Certificate Source.
             */
            certificateSource?: pulumi.Input<string | enums.v20220801.CertificateSource>;
            /**
             * Certificate Status.
             */
            certificateStatus?: pulumi.Input<string | enums.v20220801.CertificateStatus>;
            /**
             * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
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
             * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
             */
            identityClientId?: pulumi.Input<string>;
            /**
             * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
             */
            keyVaultId?: pulumi.Input<string>;
            /**
             * Specify true to always negotiate client certificate on the hostname. Default Value is false.
             */
            negotiateClientCertificate?: pulumi.Input<boolean>;
            /**
             * Hostname type.
             */
            type: pulumi.Input<string | enums.v20220801.HostnameType>;
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
         * Http message diagnostic settings.
         */
        export interface HttpMessageDiagnosticArgs {
            /**
             * Body logging settings.
             */
            body?: pulumi.Input<v20220801.BodyDiagnosticSettingsArgs>;
            /**
             * Data masking settings.
             */
            dataMasking?: pulumi.Input<v20220801.DataMaskingArgs>;
            /**
             * Array of HTTP Headers to log.
             */
            headers?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Create keyVault contract details.
         */
        export interface KeyVaultContractCreatePropertiesArgs {
            /**
             * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
             */
            identityClientId?: pulumi.Input<string>;
            /**
             * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
             */
            secretIdentifier?: pulumi.Input<string>;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractArgs {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string | enums.v20220801.BearerTokenSendingMethods>[]>;
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: pulumi.Input<string>;
        }

        /**
         * Operation parameters details.
         */
        export interface ParameterContractArgs {
            /**
             * Default parameter value.
             */
            defaultValue?: pulumi.Input<string>;
            /**
             * Parameter description.
             */
            description?: pulumi.Input<string>;
            /**
             * Exampled defined for the parameter.
             */
            examples?: pulumi.Input<{[key: string]: pulumi.Input<v20220801.ParameterExampleContractArgs>}>;
            /**
             * Parameter name.
             */
            name: pulumi.Input<string>;
            /**
             * Specifies whether parameter is required or not.
             */
            required?: pulumi.Input<boolean>;
            /**
             * Schema identifier.
             */
            schemaId?: pulumi.Input<string>;
            /**
             * Parameter type.
             */
            type: pulumi.Input<string>;
            /**
             * Type name defined by the schema.
             */
            typeName?: pulumi.Input<string>;
            /**
             * Parameter values.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Parameter example.
         */
        export interface ParameterExampleContractArgs {
            /**
             * Long description for the example
             */
            description?: pulumi.Input<string>;
            /**
             * A URL that points to the literal example
             */
            externalValue?: pulumi.Input<string>;
            /**
             * Short description for the example
             */
            summary?: pulumi.Input<string>;
            /**
             * Example value. May be a primitive value, or an object.
             */
            value?: any;
        }

        /**
         * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
         */
        export interface PipelineDiagnosticSettingsArgs {
            /**
             * Diagnostic settings for request.
             */
            request?: pulumi.Input<v20220801.HttpMessageDiagnosticArgs>;
            /**
             * Diagnostic settings for response.
             */
            response?: pulumi.Input<v20220801.HttpMessageDiagnosticArgs>;
        }

        /**
         * The connection state of the private endpoint connection.
         */
        export interface PrivateEndpointConnectionRequestPropertiesArgs {
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20220801.PrivateLinkServiceConnectionStateArgs>;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: pulumi.Input<string>;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: pulumi.Input<string | enums.v20220801.PrivateEndpointServiceConnectionStatus>;
        }

        /**
         * Remote Private Endpoint Connection resource.
         */
        export interface RemotePrivateEndpointConnectionWrapperArgs {
            /**
             * Private Endpoint connection resource id
             */
            id?: pulumi.Input<string>;
            /**
             * Private Endpoint Connection Name
             */
            name?: pulumi.Input<string>;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: pulumi.Input<v20220801.PrivateLinkServiceConnectionStateArgs>;
            /**
             * Private Endpoint Connection Resource Type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Operation request/response representation details.
         */
        export interface RepresentationContractArgs {
            /**
             * Specifies a registered or custom content type for this representation, e.g. application/xml.
             */
            contentType: pulumi.Input<string>;
            /**
             * Exampled defined for the representation.
             */
            examples?: pulumi.Input<{[key: string]: pulumi.Input<v20220801.ParameterExampleContractArgs>}>;
            /**
             * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
             */
            formParameters?: pulumi.Input<pulumi.Input<v20220801.ParameterContractArgs>[]>;
            /**
             * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            schemaId?: pulumi.Input<string>;
            /**
             * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            typeName?: pulumi.Input<string>;
        }

        /**
         * Operation request details.
         */
        export interface RequestContractArgs {
            /**
             * Operation request description.
             */
            description?: pulumi.Input<string>;
            /**
             * Collection of operation request headers.
             */
            headers?: pulumi.Input<pulumi.Input<v20220801.ParameterContractArgs>[]>;
            /**
             * Collection of operation request query parameters.
             */
            queryParameters?: pulumi.Input<pulumi.Input<v20220801.ParameterContractArgs>[]>;
            /**
             * Collection of operation request representations.
             */
            representations?: pulumi.Input<pulumi.Input<v20220801.RepresentationContractArgs>[]>;
        }

        /**
         * Resource location data properties.
         */
        export interface ResourceLocationDataContractArgs {
            /**
             * The city or locality where the resource is located.
             */
            city?: pulumi.Input<string>;
            /**
             * The country or region where the resource is located.
             */
            countryOrRegion?: pulumi.Input<string>;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: pulumi.Input<string>;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Operation response details.
         */
        export interface ResponseContractArgs {
            /**
             * Operation response description.
             */
            description?: pulumi.Input<string>;
            /**
             * Collection of operation response headers.
             */
            headers?: pulumi.Input<pulumi.Input<v20220801.ParameterContractArgs>[]>;
            /**
             * Collection of operation response representations.
             */
            representations?: pulumi.Input<pulumi.Input<v20220801.RepresentationContractArgs>[]>;
            /**
             * Operation response HTTP status code.
             */
            statusCode: pulumi.Input<number>;
        }

        /**
         * Sampling settings for Diagnostic.
         */
        export interface SamplingSettingsArgs {
            /**
             * Rate of sampling for fixed-rate sampling.
             */
            percentage?: pulumi.Input<number>;
            /**
             * Sampling type.
             */
            samplingType?: pulumi.Input<string | enums.v20220801.SamplingType>;
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
         * OAuth acquire token request body parameter (www-url-form-encoded).
         */
        export interface TokenBodyParameterContractArgs {
            /**
             * body parameter name.
             */
            name: pulumi.Input<string>;
            /**
             * body parameter value.
             */
            value: pulumi.Input<string>;
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

        export interface UserIdentityPropertiesArgs {
            /**
             * The client id of user assigned identity.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The principal id of user assigned identity.
             */
            principalId?: pulumi.Input<string>;
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

        /**
         * Wiki documentation details.
         */
        export interface WikiDocumentationContractArgs {
            /**
             * Documentation Identifier
             */
            documentationId?: pulumi.Input<string>;
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

    }

    export namespace v20220901preview {
        /**
         * Description of an additional API Management resource location.
         */
        export interface AdditionalLocationArgs {
            /**
             * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
             */
            disableGateway?: pulumi.Input<boolean>;
            /**
             * The location name of the additional region among Azure Data center regions.
             */
            location: pulumi.Input<string>;
            /**
             * Property can be used to enable NAT Gateway for this API Management service.
             */
            natGatewayState?: pulumi.Input<string | enums.v20220901preview.NatGatewayState>;
            /**
             * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
             */
            publicIpAddressId?: pulumi.Input<string>;
            /**
             * SKU properties of the API Management service.
             */
            sku: pulumi.Input<v20220901preview.ApiManagementServiceSkuPropertiesArgs>;
            /**
             * Virtual network configuration for the location.
             */
            virtualNetworkConfiguration?: pulumi.Input<v20220901preview.VirtualNetworkConfigurationArgs>;
            /**
             * A list of availability zones denoting where the resource needs to come from.
             */
            zones?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * additionalLocationArgsProvideDefaults sets the appropriate defaults for AdditionalLocationArgs
         */
        export function additionalLocationArgsProvideDefaults(val: AdditionalLocationArgs): AdditionalLocationArgs {
            return {
                ...val,
                disableGateway: (val.disableGateway) ?? false,
                natGatewayState: (val.natGatewayState) ?? "Disabled",
            };
        }

        /**
         * API contact information
         */
        export interface ApiContactInformationArgs {
            /**
             * The email address of the contact person/organization. MUST be in the format of an email address
             */
            email?: pulumi.Input<string>;
            /**
             * The identifying name of the contact person/organization
             */
            name?: pulumi.Input<string>;
            /**
             * The URL pointing to the contact information. MUST be in the format of a URL
             */
            url?: pulumi.Input<string>;
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
         * API license information
         */
        export interface ApiLicenseInformationArgs {
            /**
             * The license name used for the API
             */
            name?: pulumi.Input<string>;
            /**
             * A URL to the license used for the API. MUST be in the format of a URL
             */
            url?: pulumi.Input<string>;
        }

        /**
         * Identity properties of the Api Management service resource.
         */
        export interface ApiManagementServiceIdentityArgs {
            /**
             * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type: pulumi.Input<string | enums.v20220901preview.ApimIdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity 
             * dictionary key references will be ARM resource ids in the form: 
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
             *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20220901preview.UserIdentityPropertiesArgs>}>;
        }

        /**
         * API Management service resource SKU properties.
         */
        export interface ApiManagementServiceSkuPropertiesArgs {
            /**
             * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
             */
            capacity: pulumi.Input<number>;
            /**
             * Name of the Sku.
             */
            name: pulumi.Input<string | enums.v20220901preview.SkuType>;
        }

        /**
         * Control Plane Apis version constraint for the API Management service.
         */
        export interface ApiVersionConstraintArgs {
            /**
             * Limit control plane API calls to API Management service with version equal to or newer than this value.
             */
            minApiVersion?: pulumi.Input<string>;
        }

        /**
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsArgs {
            /**
             * Description of API Version Set.
             */
            description?: pulumi.Input<string>;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: pulumi.Input<string>;
            /**
             * The display Name of the API Version Set.
             */
            name?: pulumi.Input<string>;
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
            versioningScheme?: pulumi.Input<string | enums.v20220901preview.VersioningScheme>;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractArgs {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: pulumi.Input<v20220901preview.OAuth2AuthenticationSettingsContractArgs>;
            /**
             * Collection of OAuth2 authentication settings included into this API.
             */
            oAuth2AuthenticationSettings?: pulumi.Input<pulumi.Input<v20220901preview.OAuth2AuthenticationSettingsContractArgs>[]>;
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: pulumi.Input<v20220901preview.OpenIdAuthenticationSettingsContractArgs>;
            /**
             * Collection of Open ID Connect authentication settings included into this API.
             */
            openidAuthenticationSettings?: pulumi.Input<pulumi.Input<v20220901preview.OpenIdAuthenticationSettingsContractArgs>[]>;
        }

        /**
         * Authorization error details.
         */
        export interface AuthorizationErrorArgs {
            /**
             * Error code
             */
            code?: pulumi.Input<string>;
            /**
             * Error message
             */
            message?: pulumi.Input<string>;
        }

        /**
         * Authorization Provider oauth2 grant types settings
         */
        export interface AuthorizationProviderOAuth2GrantTypesArgs {
            /**
             * OAuth2 authorization code grant parameters
             */
            authorizationCode?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * OAuth2 client credential grant parameters
             */
            clientCredentials?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * OAuth2 settings details
         */
        export interface AuthorizationProviderOAuth2SettingsArgs {
            /**
             * OAuth2 settings
             */
            grantTypes?: pulumi.Input<v20220901preview.AuthorizationProviderOAuth2GrantTypesArgs>;
            /**
             * Redirect URL to be set in the OAuth application.
             */
            redirectUrl?: pulumi.Input<string>;
        }

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
         * The configuration of the backend circuit breaker
         */
        export interface BackendCircuitBreakerArgs {
            /**
             * The rules for tripping the backend.
             */
            rules?: pulumi.Input<pulumi.Input<v20220901preview.CircuitBreakerRuleArgs>[]>;
        }

        /**
         * Details of the Credentials used to connect to Backend.
         */
        export interface BackendCredentialsContractArgs {
            /**
             * Authorization header authentication
             */
            authorization?: pulumi.Input<v20220901preview.BackendAuthorizationHeaderCredentialsArgs>;
            /**
             * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
             */
            certificate?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of Client Certificate Ids.
             */
            certificateIds?: pulumi.Input<pulumi.Input<string>[]>;
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
            serviceFabricCluster?: pulumi.Input<v20220901preview.BackendServiceFabricClusterPropertiesArgs>;
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
             * The client certificate id for the management endpoint.
             */
            clientCertificateId?: pulumi.Input<string>;
            /**
             * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
             */
            clientCertificatethumbprint?: pulumi.Input<string>;
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
            serverX509Names?: pulumi.Input<pulumi.Input<v20220901preview.X509CertificateNameArgs>[]>;
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
         * Body logging settings.
         */
        export interface BodyDiagnosticSettingsArgs {
            /**
             * Number of request body bytes to log.
             */
            bytes?: pulumi.Input<number>;
        }

        /**
         * Certificate configuration which consist of non-trusted intermediates and root certificates.
         */
        export interface CertificateConfigurationArgs {
            /**
             * Certificate information.
             */
            certificate?: pulumi.Input<v20220901preview.CertificateInformationArgs>;
            /**
             * Certificate Password.
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * Base64 Encoded certificate.
             */
            encodedCertificate?: pulumi.Input<string>;
            /**
             * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
             */
            storeName: pulumi.Input<string>;
        }

        /**
         * SSL certificate information.
         */
        export interface CertificateInformationArgs {
            /**
             * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
             */
            expiry: pulumi.Input<string>;
            /**
             * Subject of the certificate.
             */
            subject: pulumi.Input<string>;
            /**
             * Thumbprint of the certificate.
             */
            thumbprint: pulumi.Input<string>;
        }

        /**
         * The trip conditions of the circuit breaker
         */
        export interface CircuitBreakerFailureConditionArgs {
            /**
             * The threshold for opening the circuit.
             */
            count?: pulumi.Input<number>;
            /**
             * The error reasons which are considered as failure.
             */
            errorReasons?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The interval during which the failures are counted.
             */
            interval?: pulumi.Input<string>;
            /**
             * The threshold for opening the circuit.
             */
            percentage?: pulumi.Input<number>;
            /**
             * The status code ranges which are considered as failure.
             */
            statusCodeRanges?: pulumi.Input<pulumi.Input<v20220901preview.FailureStatusCodeRangeArgs>[]>;
        }

        /**
         * Rule configuration to trip the backend.
         */
        export interface CircuitBreakerRuleArgs {
            /**
             * The conditions for tripping the circuit breaker.
             */
            failureCondition?: pulumi.Input<v20220901preview.CircuitBreakerFailureConditionArgs>;
            /**
             * The rule name.
             */
            name?: pulumi.Input<string>;
            /**
             * The duration for which the circuit will be tripped.
             */
            tripDuration?: pulumi.Input<string>;
        }

        export interface DataMaskingArgs {
            /**
             * Masking settings for headers
             */
            headers?: pulumi.Input<pulumi.Input<v20220901preview.DataMaskingEntityArgs>[]>;
            /**
             * Masking settings for Url query parameters
             */
            queryParams?: pulumi.Input<pulumi.Input<v20220901preview.DataMaskingEntityArgs>[]>;
        }

        export interface DataMaskingEntityArgs {
            /**
             * Data masking mode.
             */
            mode?: pulumi.Input<string | enums.v20220901preview.DataMaskingMode>;
            /**
             * The name of an entity to mask (e.g. a name of a header or a query parameter).
             */
            value?: pulumi.Input<string>;
        }

        /**
         * Email Template Parameter contract.
         */
        export interface EmailTemplateParametersContractPropertiesArgs {
            /**
             * Template parameter description.
             */
            description?: pulumi.Input<string>;
            /**
             * Template parameter name.
             */
            name?: pulumi.Input<string>;
            /**
             * Template parameter title.
             */
            title?: pulumi.Input<string>;
        }

        /**
         * The failure http status code range
         */
        export interface FailureStatusCodeRangeArgs {
            /**
             * The maximum http status code.
             */
            max?: pulumi.Input<number>;
            /**
             * The minimum http status code.
             */
            min?: pulumi.Input<number>;
        }

        /**
         * Custom hostname configuration.
         */
        export interface HostnameConfigurationArgs {
            /**
             * Certificate information.
             */
            certificate?: pulumi.Input<v20220901preview.CertificateInformationArgs>;
            /**
             * Certificate Password.
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * Certificate Source.
             */
            certificateSource?: pulumi.Input<string | enums.v20220901preview.CertificateSource>;
            /**
             * Certificate Status.
             */
            certificateStatus?: pulumi.Input<string | enums.v20220901preview.CertificateStatus>;
            /**
             * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
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
             * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
             */
            identityClientId?: pulumi.Input<string>;
            /**
             * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
             */
            keyVaultId?: pulumi.Input<string>;
            /**
             * Specify true to always negotiate client certificate on the hostname. Default Value is false.
             */
            negotiateClientCertificate?: pulumi.Input<boolean>;
            /**
             * Hostname type.
             */
            type: pulumi.Input<string | enums.v20220901preview.HostnameType>;
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
         * Http message diagnostic settings.
         */
        export interface HttpMessageDiagnosticArgs {
            /**
             * Body logging settings.
             */
            body?: pulumi.Input<v20220901preview.BodyDiagnosticSettingsArgs>;
            /**
             * Data masking settings.
             */
            dataMasking?: pulumi.Input<v20220901preview.DataMaskingArgs>;
            /**
             * Array of HTTP Headers to log.
             */
            headers?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Create keyVault contract details.
         */
        export interface KeyVaultContractCreatePropertiesArgs {
            /**
             * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
             */
            identityClientId?: pulumi.Input<string>;
            /**
             * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
             */
            secretIdentifier?: pulumi.Input<string>;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractArgs {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string | enums.v20220901preview.BearerTokenSendingMethods>[]>;
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: pulumi.Input<string>;
        }

        /**
         * Operation parameters details.
         */
        export interface ParameterContractArgs {
            /**
             * Default parameter value.
             */
            defaultValue?: pulumi.Input<string>;
            /**
             * Parameter description.
             */
            description?: pulumi.Input<string>;
            /**
             * Exampled defined for the parameter.
             */
            examples?: pulumi.Input<{[key: string]: pulumi.Input<v20220901preview.ParameterExampleContractArgs>}>;
            /**
             * Parameter name.
             */
            name: pulumi.Input<string>;
            /**
             * Specifies whether parameter is required or not.
             */
            required?: pulumi.Input<boolean>;
            /**
             * Schema identifier.
             */
            schemaId?: pulumi.Input<string>;
            /**
             * Parameter type.
             */
            type: pulumi.Input<string>;
            /**
             * Type name defined by the schema.
             */
            typeName?: pulumi.Input<string>;
            /**
             * Parameter values.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Parameter example.
         */
        export interface ParameterExampleContractArgs {
            /**
             * Long description for the example
             */
            description?: pulumi.Input<string>;
            /**
             * A URL that points to the literal example
             */
            externalValue?: pulumi.Input<string>;
            /**
             * Short description for the example
             */
            summary?: pulumi.Input<string>;
            /**
             * Example value. May be a primitive value, or an object.
             */
            value?: any;
        }

        /**
         * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
         */
        export interface PipelineDiagnosticSettingsArgs {
            /**
             * Diagnostic settings for request.
             */
            request?: pulumi.Input<v20220901preview.HttpMessageDiagnosticArgs>;
            /**
             * Diagnostic settings for response.
             */
            response?: pulumi.Input<v20220901preview.HttpMessageDiagnosticArgs>;
        }

        /**
         * The connection state of the private endpoint connection.
         */
        export interface PrivateEndpointConnectionRequestPropertiesArgs {
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20220901preview.PrivateLinkServiceConnectionStateArgs>;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: pulumi.Input<string>;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: pulumi.Input<string | enums.v20220901preview.PrivateEndpointServiceConnectionStatus>;
        }

        /**
         * Remote Private Endpoint Connection resource.
         */
        export interface RemotePrivateEndpointConnectionWrapperArgs {
            /**
             * Private Endpoint connection resource id
             */
            id?: pulumi.Input<string>;
            /**
             * Private Endpoint Connection Name
             */
            name?: pulumi.Input<string>;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: pulumi.Input<v20220901preview.PrivateLinkServiceConnectionStateArgs>;
            /**
             * Private Endpoint Connection Resource Type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Operation request/response representation details.
         */
        export interface RepresentationContractArgs {
            /**
             * Specifies a registered or custom content type for this representation, e.g. application/xml.
             */
            contentType: pulumi.Input<string>;
            /**
             * Exampled defined for the representation.
             */
            examples?: pulumi.Input<{[key: string]: pulumi.Input<v20220901preview.ParameterExampleContractArgs>}>;
            /**
             * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
             */
            formParameters?: pulumi.Input<pulumi.Input<v20220901preview.ParameterContractArgs>[]>;
            /**
             * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            schemaId?: pulumi.Input<string>;
            /**
             * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            typeName?: pulumi.Input<string>;
        }

        /**
         * Operation request details.
         */
        export interface RequestContractArgs {
            /**
             * Operation request description.
             */
            description?: pulumi.Input<string>;
            /**
             * Collection of operation request headers.
             */
            headers?: pulumi.Input<pulumi.Input<v20220901preview.ParameterContractArgs>[]>;
            /**
             * Collection of operation request query parameters.
             */
            queryParameters?: pulumi.Input<pulumi.Input<v20220901preview.ParameterContractArgs>[]>;
            /**
             * Collection of operation request representations.
             */
            representations?: pulumi.Input<pulumi.Input<v20220901preview.RepresentationContractArgs>[]>;
        }

        /**
         * Resource location data properties.
         */
        export interface ResourceLocationDataContractArgs {
            /**
             * The city or locality where the resource is located.
             */
            city?: pulumi.Input<string>;
            /**
             * The country or region where the resource is located.
             */
            countryOrRegion?: pulumi.Input<string>;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: pulumi.Input<string>;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Operation response details.
         */
        export interface ResponseContractArgs {
            /**
             * Operation response description.
             */
            description?: pulumi.Input<string>;
            /**
             * Collection of operation response headers.
             */
            headers?: pulumi.Input<pulumi.Input<v20220901preview.ParameterContractArgs>[]>;
            /**
             * Collection of operation response representations.
             */
            representations?: pulumi.Input<pulumi.Input<v20220901preview.RepresentationContractArgs>[]>;
            /**
             * Operation response HTTP status code.
             */
            statusCode: pulumi.Input<number>;
        }

        /**
         * Sampling settings for Diagnostic.
         */
        export interface SamplingSettingsArgs {
            /**
             * Rate of sampling for fixed-rate sampling.
             */
            percentage?: pulumi.Input<number>;
            /**
             * Sampling type.
             */
            samplingType?: pulumi.Input<string | enums.v20220901preview.SamplingType>;
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
         * OAuth acquire token request body parameter (www-url-form-encoded).
         */
        export interface TokenBodyParameterContractArgs {
            /**
             * body parameter name.
             */
            name: pulumi.Input<string>;
            /**
             * body parameter value.
             */
            value: pulumi.Input<string>;
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

        export interface UserIdentityPropertiesArgs {
            /**
             * The client id of user assigned identity.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The principal id of user assigned identity.
             */
            principalId?: pulumi.Input<string>;
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

        /**
         * Wiki documentation details.
         */
        export interface WikiDocumentationContractArgs {
            /**
             * Documentation Identifier
             */
            documentationId?: pulumi.Input<string>;
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

    }

    export namespace v20230301preview {
        /**
         * Description of an additional API Management resource location.
         */
        export interface AdditionalLocationArgs {
            /**
             * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
             */
            disableGateway?: pulumi.Input<boolean>;
            /**
             * The location name of the additional region among Azure Data center regions.
             */
            location: pulumi.Input<string>;
            /**
             * Property can be used to enable NAT Gateway for this API Management service.
             */
            natGatewayState?: pulumi.Input<string | enums.v20230301preview.NatGatewayState>;
            /**
             * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
             */
            publicIpAddressId?: pulumi.Input<string>;
            /**
             * SKU properties of the API Management service.
             */
            sku: pulumi.Input<v20230301preview.ApiManagementServiceSkuPropertiesArgs>;
            /**
             * Virtual network configuration for the location.
             */
            virtualNetworkConfiguration?: pulumi.Input<v20230301preview.VirtualNetworkConfigurationArgs>;
            /**
             * A list of availability zones denoting where the resource needs to come from.
             */
            zones?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * additionalLocationArgsProvideDefaults sets the appropriate defaults for AdditionalLocationArgs
         */
        export function additionalLocationArgsProvideDefaults(val: AdditionalLocationArgs): AdditionalLocationArgs {
            return {
                ...val,
                disableGateway: (val.disableGateway) ?? false,
                natGatewayState: (val.natGatewayState) ?? "Disabled",
            };
        }

        /**
         * API contact information
         */
        export interface ApiContactInformationArgs {
            /**
             * The email address of the contact person/organization. MUST be in the format of an email address
             */
            email?: pulumi.Input<string>;
            /**
             * The identifying name of the contact person/organization
             */
            name?: pulumi.Input<string>;
            /**
             * The URL pointing to the contact information. MUST be in the format of a URL
             */
            url?: pulumi.Input<string>;
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
         * API license information
         */
        export interface ApiLicenseInformationArgs {
            /**
             * The license name used for the API
             */
            name?: pulumi.Input<string>;
            /**
             * A URL to the license used for the API. MUST be in the format of a URL
             */
            url?: pulumi.Input<string>;
        }

        /**
         * Identity properties of the Api Management service resource.
         */
        export interface ApiManagementServiceIdentityArgs {
            /**
             * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type: pulumi.Input<string | enums.v20230301preview.ApimIdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity 
             * dictionary key references will be ARM resource ids in the form: 
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
             *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<v20230301preview.UserIdentityPropertiesArgs>}>;
        }

        /**
         * API Management service resource SKU properties.
         */
        export interface ApiManagementServiceSkuPropertiesArgs {
            /**
             * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
             */
            capacity: pulumi.Input<number>;
            /**
             * Name of the Sku.
             */
            name: pulumi.Input<string | enums.v20230301preview.SkuType>;
        }

        /**
         * Control Plane Apis version constraint for the API Management service.
         */
        export interface ApiVersionConstraintArgs {
            /**
             * Limit control plane API calls to API Management service with version equal to or newer than this value.
             */
            minApiVersion?: pulumi.Input<string>;
        }

        /**
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsArgs {
            /**
             * Description of API Version Set.
             */
            description?: pulumi.Input<string>;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: pulumi.Input<string>;
            /**
             * The display Name of the API Version Set.
             */
            name?: pulumi.Input<string>;
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
            versioningScheme?: pulumi.Input<string | enums.v20230301preview.VersioningScheme>;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractArgs {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: pulumi.Input<v20230301preview.OAuth2AuthenticationSettingsContractArgs>;
            /**
             * Collection of OAuth2 authentication settings included into this API.
             */
            oAuth2AuthenticationSettings?: pulumi.Input<pulumi.Input<v20230301preview.OAuth2AuthenticationSettingsContractArgs>[]>;
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: pulumi.Input<v20230301preview.OpenIdAuthenticationSettingsContractArgs>;
            /**
             * Collection of Open ID Connect authentication settings included into this API.
             */
            openidAuthenticationSettings?: pulumi.Input<pulumi.Input<v20230301preview.OpenIdAuthenticationSettingsContractArgs>[]>;
        }

        /**
         * Authorization error details.
         */
        export interface AuthorizationErrorArgs {
            /**
             * Error code
             */
            code?: pulumi.Input<string>;
            /**
             * Error message
             */
            message?: pulumi.Input<string>;
        }

        /**
         * Authorization Provider oauth2 grant types settings
         */
        export interface AuthorizationProviderOAuth2GrantTypesArgs {
            /**
             * OAuth2 authorization code grant parameters
             */
            authorizationCode?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * OAuth2 client credential grant parameters
             */
            clientCredentials?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        }

        /**
         * OAuth2 settings details
         */
        export interface AuthorizationProviderOAuth2SettingsArgs {
            /**
             * OAuth2 settings
             */
            grantTypes?: pulumi.Input<v20230301preview.AuthorizationProviderOAuth2GrantTypesArgs>;
            /**
             * Redirect URL to be set in the OAuth application.
             */
            redirectUrl?: pulumi.Input<string>;
        }

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
         * The configuration of the backend circuit breaker
         */
        export interface BackendCircuitBreakerArgs {
            /**
             * The rules for tripping the backend.
             */
            rules?: pulumi.Input<pulumi.Input<v20230301preview.CircuitBreakerRuleArgs>[]>;
        }

        /**
         * Details of the Credentials used to connect to Backend.
         */
        export interface BackendCredentialsContractArgs {
            /**
             * Authorization header authentication
             */
            authorization?: pulumi.Input<v20230301preview.BackendAuthorizationHeaderCredentialsArgs>;
            /**
             * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
             */
            certificate?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of Client Certificate Ids.
             */
            certificateIds?: pulumi.Input<pulumi.Input<string>[]>;
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
            serviceFabricCluster?: pulumi.Input<v20230301preview.BackendServiceFabricClusterPropertiesArgs>;
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
             * The client certificate id for the management endpoint.
             */
            clientCertificateId?: pulumi.Input<string>;
            /**
             * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
             */
            clientCertificatethumbprint?: pulumi.Input<string>;
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
            serverX509Names?: pulumi.Input<pulumi.Input<v20230301preview.X509CertificateNameArgs>[]>;
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
         * Body logging settings.
         */
        export interface BodyDiagnosticSettingsArgs {
            /**
             * Number of request body bytes to log.
             */
            bytes?: pulumi.Input<number>;
        }

        /**
         * Certificate configuration which consist of non-trusted intermediates and root certificates.
         */
        export interface CertificateConfigurationArgs {
            /**
             * Certificate information.
             */
            certificate?: pulumi.Input<v20230301preview.CertificateInformationArgs>;
            /**
             * Certificate Password.
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * Base64 Encoded certificate.
             */
            encodedCertificate?: pulumi.Input<string>;
            /**
             * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
             */
            storeName: pulumi.Input<string>;
        }

        /**
         * SSL certificate information.
         */
        export interface CertificateInformationArgs {
            /**
             * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
             */
            expiry: pulumi.Input<string>;
            /**
             * Subject of the certificate.
             */
            subject: pulumi.Input<string>;
            /**
             * Thumbprint of the certificate.
             */
            thumbprint: pulumi.Input<string>;
        }

        /**
         * The trip conditions of the circuit breaker
         */
        export interface CircuitBreakerFailureConditionArgs {
            /**
             * The threshold for opening the circuit.
             */
            count?: pulumi.Input<number>;
            /**
             * The error reasons which are considered as failure.
             */
            errorReasons?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The interval during which the failures are counted.
             */
            interval?: pulumi.Input<string>;
            /**
             * The threshold for opening the circuit.
             */
            percentage?: pulumi.Input<number>;
            /**
             * The status code ranges which are considered as failure.
             */
            statusCodeRanges?: pulumi.Input<pulumi.Input<v20230301preview.FailureStatusCodeRangeArgs>[]>;
        }

        /**
         * Rule configuration to trip the backend.
         */
        export interface CircuitBreakerRuleArgs {
            /**
             * The conditions for tripping the circuit breaker.
             */
            failureCondition?: pulumi.Input<v20230301preview.CircuitBreakerFailureConditionArgs>;
            /**
             * The rule name.
             */
            name?: pulumi.Input<string>;
            /**
             * The duration for which the circuit will be tripped.
             */
            tripDuration?: pulumi.Input<string>;
        }

        /**
         * Information regarding the Configuration API of the API Management service.
         */
        export interface ConfigurationApiArgs {
            /**
             * Indication whether or not the legacy Configuration API (v1) should be exposed on the API Management service. Value is optional but must be 'Enabled' or 'Disabled'. If 'Disabled', legacy Configuration API (v1) will not be available for self-hosted gateways. Default value is 'Enabled'
             */
            legacyApi?: pulumi.Input<string | enums.v20230301preview.LegacyApiState>;
        }
        /**
         * configurationApiArgsProvideDefaults sets the appropriate defaults for ConfigurationApiArgs
         */
        export function configurationApiArgsProvideDefaults(val: ConfigurationApiArgs): ConfigurationApiArgs {
            return {
                ...val,
                legacyApi: (val.legacyApi) ?? "Enabled",
            };
        }

        export interface DataMaskingArgs {
            /**
             * Masking settings for headers
             */
            headers?: pulumi.Input<pulumi.Input<v20230301preview.DataMaskingEntityArgs>[]>;
            /**
             * Masking settings for Url query parameters
             */
            queryParams?: pulumi.Input<pulumi.Input<v20230301preview.DataMaskingEntityArgs>[]>;
        }

        export interface DataMaskingEntityArgs {
            /**
             * Data masking mode.
             */
            mode?: pulumi.Input<string | enums.v20230301preview.DataMaskingMode>;
            /**
             * The name of an entity to mask (e.g. a name of a header or a query parameter).
             */
            value?: pulumi.Input<string>;
        }

        /**
         * Email Template Parameter contract.
         */
        export interface EmailTemplateParametersContractPropertiesArgs {
            /**
             * Template parameter description.
             */
            description?: pulumi.Input<string>;
            /**
             * Template parameter name.
             */
            name?: pulumi.Input<string>;
            /**
             * Template parameter title.
             */
            title?: pulumi.Input<string>;
        }

        /**
         * The failure http status code range
         */
        export interface FailureStatusCodeRangeArgs {
            /**
             * The maximum http status code.
             */
            max?: pulumi.Input<number>;
            /**
             * The minimum http status code.
             */
            min?: pulumi.Input<number>;
        }

        /**
         * Custom hostname configuration.
         */
        export interface HostnameConfigurationArgs {
            /**
             * Certificate information.
             */
            certificate?: pulumi.Input<v20230301preview.CertificateInformationArgs>;
            /**
             * Certificate Password.
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * Certificate Source.
             */
            certificateSource?: pulumi.Input<string | enums.v20230301preview.CertificateSource>;
            /**
             * Certificate Status.
             */
            certificateStatus?: pulumi.Input<string | enums.v20230301preview.CertificateStatus>;
            /**
             * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
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
             * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
             */
            identityClientId?: pulumi.Input<string>;
            /**
             * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
             */
            keyVaultId?: pulumi.Input<string>;
            /**
             * Specify true to always negotiate client certificate on the hostname. Default Value is false.
             */
            negotiateClientCertificate?: pulumi.Input<boolean>;
            /**
             * Hostname type.
             */
            type: pulumi.Input<string | enums.v20230301preview.HostnameType>;
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
         * Http message diagnostic settings.
         */
        export interface HttpMessageDiagnosticArgs {
            /**
             * Body logging settings.
             */
            body?: pulumi.Input<v20230301preview.BodyDiagnosticSettingsArgs>;
            /**
             * Data masking settings.
             */
            dataMasking?: pulumi.Input<v20230301preview.DataMaskingArgs>;
            /**
             * Array of HTTP Headers to log.
             */
            headers?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Create keyVault contract details.
         */
        export interface KeyVaultContractCreatePropertiesArgs {
            /**
             * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
             */
            identityClientId?: pulumi.Input<string>;
            /**
             * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
             */
            secretIdentifier?: pulumi.Input<string>;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractArgs {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string | enums.v20230301preview.BearerTokenSendingMethods>[]>;
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: pulumi.Input<string>;
        }

        /**
         * Operation parameters details.
         */
        export interface ParameterContractArgs {
            /**
             * Default parameter value.
             */
            defaultValue?: pulumi.Input<string>;
            /**
             * Parameter description.
             */
            description?: pulumi.Input<string>;
            /**
             * Exampled defined for the parameter.
             */
            examples?: pulumi.Input<{[key: string]: pulumi.Input<v20230301preview.ParameterExampleContractArgs>}>;
            /**
             * Parameter name.
             */
            name: pulumi.Input<string>;
            /**
             * Specifies whether parameter is required or not.
             */
            required?: pulumi.Input<boolean>;
            /**
             * Schema identifier.
             */
            schemaId?: pulumi.Input<string>;
            /**
             * Parameter type.
             */
            type: pulumi.Input<string>;
            /**
             * Type name defined by the schema.
             */
            typeName?: pulumi.Input<string>;
            /**
             * Parameter values.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Parameter example.
         */
        export interface ParameterExampleContractArgs {
            /**
             * Long description for the example
             */
            description?: pulumi.Input<string>;
            /**
             * A URL that points to the literal example
             */
            externalValue?: pulumi.Input<string>;
            /**
             * Short description for the example
             */
            summary?: pulumi.Input<string>;
            /**
             * Example value. May be a primitive value, or an object.
             */
            value?: any;
        }

        /**
         * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
         */
        export interface PipelineDiagnosticSettingsArgs {
            /**
             * Diagnostic settings for request.
             */
            request?: pulumi.Input<v20230301preview.HttpMessageDiagnosticArgs>;
            /**
             * Diagnostic settings for response.
             */
            response?: pulumi.Input<v20230301preview.HttpMessageDiagnosticArgs>;
        }

        /**
         * The connection state of the private endpoint connection.
         */
        export interface PrivateEndpointConnectionRequestPropertiesArgs {
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState?: pulumi.Input<v20230301preview.PrivateLinkServiceConnectionStateArgs>;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: pulumi.Input<string>;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: pulumi.Input<string | enums.v20230301preview.PrivateEndpointServiceConnectionStatus>;
        }

        /**
         * Remote Private Endpoint Connection resource.
         */
        export interface RemotePrivateEndpointConnectionWrapperArgs {
            /**
             * Private Endpoint connection resource id
             */
            id?: pulumi.Input<string>;
            /**
             * Private Endpoint Connection Name
             */
            name?: pulumi.Input<string>;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: pulumi.Input<v20230301preview.PrivateLinkServiceConnectionStateArgs>;
            /**
             * Private Endpoint Connection Resource Type
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Operation request/response representation details.
         */
        export interface RepresentationContractArgs {
            /**
             * Specifies a registered or custom content type for this representation, e.g. application/xml.
             */
            contentType: pulumi.Input<string>;
            /**
             * Exampled defined for the representation.
             */
            examples?: pulumi.Input<{[key: string]: pulumi.Input<v20230301preview.ParameterExampleContractArgs>}>;
            /**
             * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
             */
            formParameters?: pulumi.Input<pulumi.Input<v20230301preview.ParameterContractArgs>[]>;
            /**
             * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            schemaId?: pulumi.Input<string>;
            /**
             * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            typeName?: pulumi.Input<string>;
        }

        /**
         * Operation request details.
         */
        export interface RequestContractArgs {
            /**
             * Operation request description.
             */
            description?: pulumi.Input<string>;
            /**
             * Collection of operation request headers.
             */
            headers?: pulumi.Input<pulumi.Input<v20230301preview.ParameterContractArgs>[]>;
            /**
             * Collection of operation request query parameters.
             */
            queryParameters?: pulumi.Input<pulumi.Input<v20230301preview.ParameterContractArgs>[]>;
            /**
             * Collection of operation request representations.
             */
            representations?: pulumi.Input<pulumi.Input<v20230301preview.RepresentationContractArgs>[]>;
        }

        /**
         * Resource location data properties.
         */
        export interface ResourceLocationDataContractArgs {
            /**
             * The city or locality where the resource is located.
             */
            city?: pulumi.Input<string>;
            /**
             * The country or region where the resource is located.
             */
            countryOrRegion?: pulumi.Input<string>;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: pulumi.Input<string>;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Operation response details.
         */
        export interface ResponseContractArgs {
            /**
             * Operation response description.
             */
            description?: pulumi.Input<string>;
            /**
             * Collection of operation response headers.
             */
            headers?: pulumi.Input<pulumi.Input<v20230301preview.ParameterContractArgs>[]>;
            /**
             * Collection of operation response representations.
             */
            representations?: pulumi.Input<pulumi.Input<v20230301preview.RepresentationContractArgs>[]>;
            /**
             * Operation response HTTP status code.
             */
            statusCode: pulumi.Input<number>;
        }

        /**
         * Sampling settings for Diagnostic.
         */
        export interface SamplingSettingsArgs {
            /**
             * Rate of sampling for fixed-rate sampling.
             */
            percentage?: pulumi.Input<number>;
            /**
             * Sampling type.
             */
            samplingType?: pulumi.Input<string | enums.v20230301preview.SamplingType>;
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
         * OAuth acquire token request body parameter (www-url-form-encoded).
         */
        export interface TokenBodyParameterContractArgs {
            /**
             * body parameter name.
             */
            name: pulumi.Input<string>;
            /**
             * body parameter value.
             */
            value: pulumi.Input<string>;
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

        export interface UserIdentityPropertiesArgs {
            /**
             * The client id of user assigned identity.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The principal id of user assigned identity.
             */
            principalId?: pulumi.Input<string>;
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

        /**
         * Wiki documentation details.
         */
        export interface WikiDocumentationContractArgs {
            /**
             * Documentation Identifier
             */
            documentationId?: pulumi.Input<string>;
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

    }
}
