import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace apimanagement {
    /**
     * Description of an additional API Management resource location.
     */
    export interface AdditionalLocationResponse {
        /**
         * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
         */
        disableGateway?: boolean;
        /**
         * Gateway URL of the API Management service in the Region.
         */
        gatewayRegionalUrl: string;
        /**
         * The location name of the additional region among Azure Data center regions.
         */
        location: string;
        /**
         * Property can be used to enable NAT Gateway for this API Management service.
         */
        natGatewayState?: string;
        /**
         * Outbound public IPV4 address prefixes associated with NAT Gateway deployed service. Available only for Premium SKU on stv2 platform.
         */
        outboundPublicIPAddresses: string[];
        /**
         * Compute Platform Version running the service.
         */
        platformVersion: string;
        /**
         * Private Static Load Balanced IP addresses of the API Management service which is deployed in an Internal Virtual Network in a particular additional location. Available only for Basic, Standard, Premium and Isolated SKU.
         */
        privateIPAddresses: string[];
        /**
         * Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard, Premium and Isolated SKU.
         */
        publicIPAddresses: string[];
        /**
         * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
         */
        publicIpAddressId?: string;
        /**
         * SKU properties of the API Management service.
         */
        sku: ApiManagementServiceSkuPropertiesResponse;
        /**
         * Virtual network configuration for the location.
         */
        virtualNetworkConfiguration?: VirtualNetworkConfigurationResponse;
        /**
         * A list of availability zones denoting where the resource needs to come from.
         */
        zones?: string[];
    }
    /**
     * additionalLocationResponseProvideDefaults sets the appropriate defaults for AdditionalLocationResponse
     */
    export function additionalLocationResponseProvideDefaults(val: AdditionalLocationResponse): AdditionalLocationResponse {
        return {
            ...val,
            disableGateway: (val.disableGateway) ?? false,
            natGatewayState: (val.natGatewayState) ?? "Disabled",
        };
    }

    /**
     * API contact information
     */
    export interface ApiContactInformationResponse {
        /**
         * The email address of the contact person/organization. MUST be in the format of an email address
         */
        email?: string;
        /**
         * The identifying name of the contact person/organization
         */
        name?: string;
        /**
         * The URL pointing to the contact information. MUST be in the format of a URL
         */
        url?: string;
    }

    /**
     * API license information
     */
    export interface ApiLicenseInformationResponse {
        /**
         * The license name used for the API
         */
        name?: string;
        /**
         * A URL to the license used for the API. MUST be in the format of a URL
         */
        url?: string;
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
         * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
         */
        type: string;
        /**
         * The list of user identities associated with the resource. The user identity 
         * dictionary key references will be ARM resource ids in the form: 
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
         *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
    }

    /**
     * API Management service resource SKU properties.
     */
    export interface ApiManagementServiceSkuPropertiesResponse {
        /**
         * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
         */
        capacity: number;
        /**
         * Name of the Sku.
         */
        name: string;
    }

    /**
     * Control Plane Apis version constraint for the API Management service.
     */
    export interface ApiVersionConstraintResponse {
        /**
         * Limit control plane API calls to API Management service with version equal to or newer than this value.
         */
        minApiVersion?: string;
    }

    /**
     * An API Version Set contains the common configuration for a set of API Versions relating 
     */
    export interface ApiVersionSetContractDetailsResponse {
        /**
         * Description of API Version Set.
         */
        description?: string;
        /**
         * Identifier for existing API Version Set. Omit this value to create a new Version Set.
         */
        id?: string;
        /**
         * The display Name of the API Version Set.
         */
        name?: string;
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
        versioningScheme?: string;
    }

    /**
     * A wrapper for an ARM resource id
     */
    export interface ArmIdWrapperResponse {
        id: string;
    }

    /**
     * API Authentication Settings.
     */
    export interface AuthenticationSettingsContractResponse {
        /**
         * OAuth2 Authentication settings
         */
        oAuth2?: OAuth2AuthenticationSettingsContractResponse;
        /**
         * Collection of OAuth2 authentication settings included into this API.
         */
        oAuth2AuthenticationSettings?: OAuth2AuthenticationSettingsContractResponse[];
        /**
         * OpenID Connect Authentication Settings
         */
        openid?: OpenIdAuthenticationSettingsContractResponse;
        /**
         * Collection of Open ID Connect authentication settings included into this API.
         */
        openidAuthenticationSettings?: OpenIdAuthenticationSettingsContractResponse[];
    }

    /**
     * Authorization error details.
     */
    export interface AuthorizationErrorResponse {
        /**
         * Error code
         */
        code?: string;
        /**
         * Error message
         */
        message?: string;
    }

    /**
     * Authorization Provider oauth2 grant types settings
     */
    export interface AuthorizationProviderOAuth2GrantTypesResponse {
        /**
         * OAuth2 authorization code grant parameters
         */
        authorizationCode?: {[key: string]: string};
        /**
         * OAuth2 client credential grant parameters
         */
        clientCredentials?: {[key: string]: string};
    }

    /**
     * OAuth2 settings details
     */
    export interface AuthorizationProviderOAuth2SettingsResponse {
        /**
         * OAuth2 settings
         */
        grantTypes?: AuthorizationProviderOAuth2GrantTypesResponse;
        /**
         * Redirect URL to be set in the OAuth application.
         */
        redirectUrl?: string;
    }

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
         * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
         */
        certificate?: string[];
        /**
         * List of Client Certificate Ids.
         */
        certificateIds?: string[];
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
         * The client certificate id for the management endpoint.
         */
        clientCertificateId?: string;
        /**
         * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
         */
        clientCertificatethumbprint?: string;
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
     * Body logging settings.
     */
    export interface BodyDiagnosticSettingsResponse {
        /**
         * Number of request body bytes to log.
         */
        bytes?: number;
    }

    /**
     * Certificate configuration which consist of non-trusted intermediates and root certificates.
     */
    export interface CertificateConfigurationResponse {
        /**
         * Certificate information.
         */
        certificate?: CertificateInformationResponse;
        /**
         * Certificate Password.
         */
        certificatePassword?: string;
        /**
         * Base64 Encoded certificate.
         */
        encodedCertificate?: string;
        /**
         * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
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

    export interface DataMaskingEntityResponse {
        /**
         * Data masking mode.
         */
        mode?: string;
        /**
         * The name of an entity to mask (e.g. a name of a header or a query parameter).
         */
        value?: string;
    }

    export interface DataMaskingResponse {
        /**
         * Masking settings for headers
         */
        headers?: DataMaskingEntityResponse[];
        /**
         * Masking settings for Url query parameters
         */
        queryParams?: DataMaskingEntityResponse[];
    }

    /**
     * Email Template Parameter contract.
     */
    export interface EmailTemplateParametersContractPropertiesResponse {
        /**
         * Template parameter description.
         */
        description?: string;
        /**
         * Template parameter name.
         */
        name?: string;
        /**
         * Template parameter title.
         */
        title?: string;
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
         * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
         */
        externalId?: string;
        /**
         * Group type.
         */
        type?: string;
    }

    /**
     * Custom hostname configuration.
     */
    export interface HostnameConfigurationResponse {
        /**
         * Certificate information.
         */
        certificate?: CertificateInformationResponse;
        /**
         * Certificate Password.
         */
        certificatePassword?: string;
        /**
         * Certificate Source.
         */
        certificateSource?: string;
        /**
         * Certificate Status.
         */
        certificateStatus?: string;
        /**
         * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
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
         * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
         */
        identityClientId?: string;
        /**
         * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
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
     * Http message diagnostic settings.
     */
    export interface HttpMessageDiagnosticResponse {
        /**
         * Body logging settings.
         */
        body?: BodyDiagnosticSettingsResponse;
        /**
         * Data masking settings.
         */
        dataMasking?: DataMaskingResponse;
        /**
         * Array of HTTP Headers to log.
         */
        headers?: string[];
    }

    /**
     * KeyVault contract details.
     */
    export interface KeyVaultContractPropertiesResponse {
        /**
         * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
         */
        identityClientId?: string;
        /**
         * Last time sync and refresh status of secret from key vault.
         */
        lastStatus?: KeyVaultLastAccessStatusContractPropertiesResponse;
        /**
         * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
         */
        secretIdentifier?: string;
    }

    /**
     * Issue contract Update Properties.
     */
    export interface KeyVaultLastAccessStatusContractPropertiesResponse {
        /**
         * Last status code for sync and refresh of secret from key vault.
         */
        code?: string;
        /**
         * Details of the error else empty.
         */
        message?: string;
        /**
         * Last time secret was accessed. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
         */
        timeStampUtc?: string;
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
     * API OAuth2 Authentication settings details.
     */
    export interface OpenIdAuthenticationSettingsContractResponse {
        /**
         * How to send token to the server.
         */
        bearerTokenSendingMethods?: string[];
        /**
         * OAuth authorization server identifier.
         */
        openidProviderId?: string;
    }

    /**
     * Operation parameters details.
     */
    export interface ParameterContractResponse {
        /**
         * Default parameter value.
         */
        defaultValue?: string;
        /**
         * Parameter description.
         */
        description?: string;
        /**
         * Exampled defined for the parameter.
         */
        examples?: {[key: string]: ParameterExampleContractResponse};
        /**
         * Parameter name.
         */
        name: string;
        /**
         * Specifies whether parameter is required or not.
         */
        required?: boolean;
        /**
         * Schema identifier.
         */
        schemaId?: string;
        /**
         * Parameter type.
         */
        type: string;
        /**
         * Type name defined by the schema.
         */
        typeName?: string;
        /**
         * Parameter values.
         */
        values?: string[];
    }

    /**
     * Parameter example.
     */
    export interface ParameterExampleContractResponse {
        /**
         * Long description for the example
         */
        description?: string;
        /**
         * A URL that points to the literal example
         */
        externalValue?: string;
        /**
         * Short description for the example
         */
        summary?: string;
        /**
         * Example value. May be a primitive value, or an object.
         */
        value?: any;
    }

    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    export interface PipelineDiagnosticSettingsResponse {
        /**
         * Diagnostic settings for request.
         */
        request?: HttpMessageDiagnosticResponse;
        /**
         * Diagnostic settings for response.
         */
        response?: HttpMessageDiagnosticResponse;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Remote Private Endpoint Connection resource.
     */
    export interface RemotePrivateEndpointConnectionWrapperResponse {
        /**
         * All the Group ids.
         */
        groupIds: string[];
        /**
         * Private Endpoint connection resource id
         */
        id?: string;
        /**
         * Private Endpoint Connection Name
         */
        name?: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: ArmIdWrapperResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * Private Endpoint Connection Resource Type
         */
        type?: string;
    }

    /**
     * Operation request/response representation details.
     */
    export interface RepresentationContractResponse {
        /**
         * Specifies a registered or custom content type for this representation, e.g. application/xml.
         */
        contentType: string;
        /**
         * Exampled defined for the representation.
         */
        examples?: {[key: string]: ParameterExampleContractResponse};
        /**
         * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
         */
        formParameters?: ParameterContractResponse[];
        /**
         * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
         */
        schemaId?: string;
        /**
         * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
         */
        typeName?: string;
    }

    /**
     * Operation request details.
     */
    export interface RequestContractResponse {
        /**
         * Operation request description.
         */
        description?: string;
        /**
         * Collection of operation request headers.
         */
        headers?: ParameterContractResponse[];
        /**
         * Collection of operation request query parameters.
         */
        queryParameters?: ParameterContractResponse[];
        /**
         * Collection of operation request representations.
         */
        representations?: RepresentationContractResponse[];
    }

    export interface ResourceCollectionResponseValue {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Resource location data properties.
     */
    export interface ResourceLocationDataContractResponse {
        /**
         * The city or locality where the resource is located.
         */
        city?: string;
        /**
         * The country or region where the resource is located.
         */
        countryOrRegion?: string;
        /**
         * The district, state, or province where the resource is located.
         */
        district?: string;
        /**
         * A canonical name for the geographic or physical location.
         */
        name: string;
    }

    /**
     * Operation response details.
     */
    export interface ResponseContractResponse {
        /**
         * Operation response description.
         */
        description?: string;
        /**
         * Collection of operation response headers.
         */
        headers?: ParameterContractResponse[];
        /**
         * Collection of operation response representations.
         */
        representations?: RepresentationContractResponse[];
        /**
         * Operation response HTTP status code.
         */
        statusCode: number;
    }

    /**
     * Sampling settings for Diagnostic.
     */
    export interface SamplingSettingsResponse {
        /**
         * Rate of sampling for fixed-rate sampling.
         */
        percentage?: number;
        /**
         * Sampling type.
         */
        samplingType?: string;
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    /**
     * OAuth acquire token request body parameter (www-url-form-encoded).
     */
    export interface TokenBodyParameterContractResponse {
        /**
         * body parameter name.
         */
        name: string;
        /**
         * body parameter value.
         */
        value: string;
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

    export interface UserIdentityPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId?: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: string;
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

    /**
     * Wiki documentation details.
     */
    export interface WikiDocumentationContractResponse {
        /**
         * Documentation Identifier
         */
        documentationId?: string;
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

    export namespace v20161010 {
        /**
         * Description of an additional API Management resource location.
         */
        export interface AdditionalRegionResponse {
            /**
             * The location name of the additional region among Azure Data center regions.
             */
            location: string;
            /**
             * The SKU type in the location.
             */
            skuType: string;
            /**
             * The SKU Unit count at the location. The maximum SKU Unit count depends on the SkuType. Maximum allowed for Developer SKU is 1, for Standard SKU is 4, and for Premium SKU is 10, at a location.
             */
            skuUnitCount?: number;
            /**
             * Static IP addresses of the location's virtual machines.
             */
            staticIPs: string[];
            /**
             * Virtual network configuration for the location.
             */
            vpnconfiguration?: v20161010.VirtualNetworkConfigurationResponse;
        }
        /**
         * additionalRegionResponseProvideDefaults sets the appropriate defaults for AdditionalRegionResponse
         */
        export function additionalRegionResponseProvideDefaults(val: AdditionalRegionResponse): AdditionalRegionResponse {
            return {
                ...val,
                skuUnitCount: (val.skuUnitCount) ?? 1,
            };
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
         * Custom hostname configuration.
         */
        export interface HostnameConfigurationResponse {
            /**
             * Certificate information.
             */
            certificate: v20161010.CertificateInformationResponse;
            /**
             * Hostname.
             */
            hostname: string;
            /**
             * Hostname type.
             */
            type: string;
        }

        /**
         * Configuration of a virtual network to which API Management service is deployed.
         */
        export interface VirtualNetworkConfigurationResponse {
            /**
             * The location of the virtual network.
             */
            location?: string;
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

    }

    export namespace v20170301 {
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
            sku: v20170301.ApiManagementServiceSkuPropertiesResponse;
            /**
             * Static IP addresses of the location's virtual machines.
             */
            staticIps: string[];
            /**
             * Virtual network configuration for the location.
             */
            virtualNetworkConfiguration?: v20170301.VirtualNetworkConfigurationResponse;
        }
        /**
         * additionalLocationResponseProvideDefaults sets the appropriate defaults for AdditionalLocationResponse
         */
        export function additionalLocationResponseProvideDefaults(val: AdditionalLocationResponse): AdditionalLocationResponse {
            return {
                ...val,
                sku: v20170301.apiManagementServiceSkuPropertiesResponseProvideDefaults(val.sku),
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
            oAuth2?: v20170301.OAuth2AuthenticationSettingsContractResponse;
        }

        /**
         * Certificate configuration which consist of non-trusted intermediates and root certificates.
         */
        export interface CertificateConfigurationResponse {
            /**
             * Certificate information.
             */
            certificate: v20170301.CertificateInformationResponse;
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
            certificate: v20170301.CertificateInformationResponse;
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

    }

    export namespace v20180101 {
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
            authorization?: v20180101.BackendAuthorizationHeaderCredentialsResponse;
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
            serviceFabricCluster?: v20180101.BackendServiceFabricClusterPropertiesResponse;
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
            serverX509Names?: v20180101.X509CertificateNameResponse[];
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

    }

    export namespace v20180601preview {
        /**
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsResponse {
            /**
             * Description of API Version Set.
             */
            description?: string;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: string;
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
            versioningScheme?: string;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractResponse {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: v20180601preview.OAuth2AuthenticationSettingsContractResponse;
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: v20180601preview.OpenIdAuthenticationSettingsContractResponse;
            /**
             * Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products.
             */
            subscriptionKeyRequired?: boolean;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractResponse {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: string[];
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: string;
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

    }

    export namespace v20190101 {
        /**
         * Body logging settings.
         */
        export interface BodyDiagnosticSettingsResponse {
            /**
             * Number of request body bytes to log.
             */
            bytes?: number;
        }

        /**
         * Http message diagnostic settings.
         */
        export interface HttpMessageDiagnosticResponse {
            /**
             * Body logging settings.
             */
            body?: v20190101.BodyDiagnosticSettingsResponse;
            /**
             * Array of HTTP Headers to log.
             */
            headers?: string[];
        }

        /**
         * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
         */
        export interface PipelineDiagnosticSettingsResponse {
            /**
             * Diagnostic settings for request.
             */
            request?: v20190101.HttpMessageDiagnosticResponse;
            /**
             * Diagnostic settings for response.
             */
            response?: v20190101.HttpMessageDiagnosticResponse;
        }

        /**
         * Sampling settings for Diagnostic.
         */
        export interface SamplingSettingsResponse {
            /**
             * Rate of sampling for fixed-rate sampling.
             */
            percentage?: number;
            /**
             * Sampling type.
             */
            samplingType?: string;
        }

    }

    export namespace v20201201 {
        /**
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsResponse {
            /**
             * Description of API Version Set.
             */
            description?: string;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: string;
            /**
             * The display Name of the API Version Set.
             */
            name?: string;
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
            versioningScheme?: string;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractResponse {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: v20201201.OAuth2AuthenticationSettingsContractResponse;
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: v20201201.OpenIdAuthenticationSettingsContractResponse;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractResponse {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: string[];
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: string;
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

    }

    export namespace v20220801 {
        /**
         * Description of an additional API Management resource location.
         */
        export interface AdditionalLocationResponse {
            /**
             * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
             */
            disableGateway?: boolean;
            /**
             * Gateway URL of the API Management service in the Region.
             */
            gatewayRegionalUrl: string;
            /**
             * The location name of the additional region among Azure Data center regions.
             */
            location: string;
            /**
             * Property can be used to enable NAT Gateway for this API Management service.
             */
            natGatewayState?: string;
            /**
             * Outbound public IPV4 address prefixes associated with NAT Gateway deployed service. Available only for Premium SKU on stv2 platform.
             */
            outboundPublicIPAddresses: string[];
            /**
             * Compute Platform Version running the service.
             */
            platformVersion: string;
            /**
             * Private Static Load Balanced IP addresses of the API Management service which is deployed in an Internal Virtual Network in a particular additional location. Available only for Basic, Standard, Premium and Isolated SKU.
             */
            privateIPAddresses: string[];
            /**
             * Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard, Premium and Isolated SKU.
             */
            publicIPAddresses: string[];
            /**
             * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
             */
            publicIpAddressId?: string;
            /**
             * SKU properties of the API Management service.
             */
            sku: v20220801.ApiManagementServiceSkuPropertiesResponse;
            /**
             * Virtual network configuration for the location.
             */
            virtualNetworkConfiguration?: v20220801.VirtualNetworkConfigurationResponse;
            /**
             * A list of availability zones denoting where the resource needs to come from.
             */
            zones?: string[];
        }
        /**
         * additionalLocationResponseProvideDefaults sets the appropriate defaults for AdditionalLocationResponse
         */
        export function additionalLocationResponseProvideDefaults(val: AdditionalLocationResponse): AdditionalLocationResponse {
            return {
                ...val,
                disableGateway: (val.disableGateway) ?? false,
                natGatewayState: (val.natGatewayState) ?? "Disabled",
            };
        }

        /**
         * API contact information
         */
        export interface ApiContactInformationResponse {
            /**
             * The email address of the contact person/organization. MUST be in the format of an email address
             */
            email?: string;
            /**
             * The identifying name of the contact person/organization
             */
            name?: string;
            /**
             * The URL pointing to the contact information. MUST be in the format of a URL
             */
            url?: string;
        }

        /**
         * API license information
         */
        export interface ApiLicenseInformationResponse {
            /**
             * The license name used for the API
             */
            name?: string;
            /**
             * A URL to the license used for the API. MUST be in the format of a URL
             */
            url?: string;
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
             * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type: string;
            /**
             * The list of user identities associated with the resource. The user identity 
             * dictionary key references will be ARM resource ids in the form: 
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
             *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20220801.UserIdentityPropertiesResponse};
        }

        /**
         * API Management service resource SKU properties.
         */
        export interface ApiManagementServiceSkuPropertiesResponse {
            /**
             * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
             */
            capacity: number;
            /**
             * Name of the Sku.
             */
            name: string;
        }

        /**
         * Control Plane Apis version constraint for the API Management service.
         */
        export interface ApiVersionConstraintResponse {
            /**
             * Limit control plane API calls to API Management service with version equal to or newer than this value.
             */
            minApiVersion?: string;
        }

        /**
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsResponse {
            /**
             * Description of API Version Set.
             */
            description?: string;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: string;
            /**
             * The display Name of the API Version Set.
             */
            name?: string;
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
            versioningScheme?: string;
        }

        /**
         * A wrapper for an ARM resource id
         */
        export interface ArmIdWrapperResponse {
            id: string;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractResponse {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: v20220801.OAuth2AuthenticationSettingsContractResponse;
            /**
             * Collection of OAuth2 authentication settings included into this API.
             */
            oAuth2AuthenticationSettings?: v20220801.OAuth2AuthenticationSettingsContractResponse[];
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: v20220801.OpenIdAuthenticationSettingsContractResponse;
            /**
             * Collection of Open ID Connect authentication settings included into this API.
             */
            openidAuthenticationSettings?: v20220801.OpenIdAuthenticationSettingsContractResponse[];
        }

        /**
         * Authorization error details.
         */
        export interface AuthorizationErrorResponse {
            /**
             * Error code
             */
            code?: string;
            /**
             * Error message
             */
            message?: string;
        }

        /**
         * Authorization Provider oauth2 grant types settings
         */
        export interface AuthorizationProviderOAuth2GrantTypesResponse {
            /**
             * OAuth2 authorization code grant parameters
             */
            authorizationCode?: {[key: string]: string};
            /**
             * OAuth2 client credential grant parameters
             */
            clientCredentials?: {[key: string]: string};
        }

        /**
         * OAuth2 settings details
         */
        export interface AuthorizationProviderOAuth2SettingsResponse {
            /**
             * OAuth2 settings
             */
            grantTypes?: v20220801.AuthorizationProviderOAuth2GrantTypesResponse;
            /**
             * Redirect URL to be set in the OAuth application.
             */
            redirectUrl?: string;
        }

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
            authorization?: v20220801.BackendAuthorizationHeaderCredentialsResponse;
            /**
             * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
             */
            certificate?: string[];
            /**
             * List of Client Certificate Ids.
             */
            certificateIds?: string[];
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
            serviceFabricCluster?: v20220801.BackendServiceFabricClusterPropertiesResponse;
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
             * The client certificate id for the management endpoint.
             */
            clientCertificateId?: string;
            /**
             * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
             */
            clientCertificatethumbprint?: string;
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
            serverX509Names?: v20220801.X509CertificateNameResponse[];
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
         * Body logging settings.
         */
        export interface BodyDiagnosticSettingsResponse {
            /**
             * Number of request body bytes to log.
             */
            bytes?: number;
        }

        /**
         * Certificate configuration which consist of non-trusted intermediates and root certificates.
         */
        export interface CertificateConfigurationResponse {
            /**
             * Certificate information.
             */
            certificate?: v20220801.CertificateInformationResponse;
            /**
             * Certificate Password.
             */
            certificatePassword?: string;
            /**
             * Base64 Encoded certificate.
             */
            encodedCertificate?: string;
            /**
             * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
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

        export interface DataMaskingEntityResponse {
            /**
             * Data masking mode.
             */
            mode?: string;
            /**
             * The name of an entity to mask (e.g. a name of a header or a query parameter).
             */
            value?: string;
        }

        export interface DataMaskingResponse {
            /**
             * Masking settings for headers
             */
            headers?: v20220801.DataMaskingEntityResponse[];
            /**
             * Masking settings for Url query parameters
             */
            queryParams?: v20220801.DataMaskingEntityResponse[];
        }

        /**
         * Email Template Parameter contract.
         */
        export interface EmailTemplateParametersContractPropertiesResponse {
            /**
             * Template parameter description.
             */
            description?: string;
            /**
             * Template parameter name.
             */
            name?: string;
            /**
             * Template parameter title.
             */
            title?: string;
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
             * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
             */
            externalId?: string;
            /**
             * Group type.
             */
            type?: string;
        }

        /**
         * Custom hostname configuration.
         */
        export interface HostnameConfigurationResponse {
            /**
             * Certificate information.
             */
            certificate?: v20220801.CertificateInformationResponse;
            /**
             * Certificate Password.
             */
            certificatePassword?: string;
            /**
             * Certificate Source.
             */
            certificateSource?: string;
            /**
             * Certificate Status.
             */
            certificateStatus?: string;
            /**
             * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
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
             * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
             */
            identityClientId?: string;
            /**
             * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
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
         * Http message diagnostic settings.
         */
        export interface HttpMessageDiagnosticResponse {
            /**
             * Body logging settings.
             */
            body?: v20220801.BodyDiagnosticSettingsResponse;
            /**
             * Data masking settings.
             */
            dataMasking?: v20220801.DataMaskingResponse;
            /**
             * Array of HTTP Headers to log.
             */
            headers?: string[];
        }

        /**
         * KeyVault contract details.
         */
        export interface KeyVaultContractPropertiesResponse {
            /**
             * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
             */
            identityClientId?: string;
            /**
             * Last time sync and refresh status of secret from key vault.
             */
            lastStatus?: v20220801.KeyVaultLastAccessStatusContractPropertiesResponse;
            /**
             * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
             */
            secretIdentifier?: string;
        }

        /**
         * Issue contract Update Properties.
         */
        export interface KeyVaultLastAccessStatusContractPropertiesResponse {
            /**
             * Last status code for sync and refresh of secret from key vault.
             */
            code?: string;
            /**
             * Details of the error else empty.
             */
            message?: string;
            /**
             * Last time secret was accessed. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
             */
            timeStampUtc?: string;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractResponse {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: string[];
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: string;
        }

        /**
         * Operation parameters details.
         */
        export interface ParameterContractResponse {
            /**
             * Default parameter value.
             */
            defaultValue?: string;
            /**
             * Parameter description.
             */
            description?: string;
            /**
             * Exampled defined for the parameter.
             */
            examples?: {[key: string]: v20220801.ParameterExampleContractResponse};
            /**
             * Parameter name.
             */
            name: string;
            /**
             * Specifies whether parameter is required or not.
             */
            required?: boolean;
            /**
             * Schema identifier.
             */
            schemaId?: string;
            /**
             * Parameter type.
             */
            type: string;
            /**
             * Type name defined by the schema.
             */
            typeName?: string;
            /**
             * Parameter values.
             */
            values?: string[];
        }

        /**
         * Parameter example.
         */
        export interface ParameterExampleContractResponse {
            /**
             * Long description for the example
             */
            description?: string;
            /**
             * A URL that points to the literal example
             */
            externalValue?: string;
            /**
             * Short description for the example
             */
            summary?: string;
            /**
             * Example value. May be a primitive value, or an object.
             */
            value?: any;
        }

        /**
         * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
         */
        export interface PipelineDiagnosticSettingsResponse {
            /**
             * Diagnostic settings for request.
             */
            request?: v20220801.HttpMessageDiagnosticResponse;
            /**
             * Diagnostic settings for response.
             */
            response?: v20220801.HttpMessageDiagnosticResponse;
        }

        /**
         * The Private Endpoint resource.
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for Private Endpoint
             */
            id: string;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: string;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: string;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: string;
        }

        /**
         * Remote Private Endpoint Connection resource.
         */
        export interface RemotePrivateEndpointConnectionWrapperResponse {
            /**
             * All the Group ids.
             */
            groupIds: string[];
            /**
             * Private Endpoint connection resource id
             */
            id?: string;
            /**
             * Private Endpoint Connection Name
             */
            name?: string;
            /**
             * The resource of private end point.
             */
            privateEndpoint?: v20220801.ArmIdWrapperResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: v20220801.PrivateLinkServiceConnectionStateResponse;
            /**
             * The provisioning state of the private endpoint connection resource.
             */
            provisioningState: string;
            /**
             * Private Endpoint Connection Resource Type
             */
            type?: string;
        }

        /**
         * Operation request/response representation details.
         */
        export interface RepresentationContractResponse {
            /**
             * Specifies a registered or custom content type for this representation, e.g. application/xml.
             */
            contentType: string;
            /**
             * Exampled defined for the representation.
             */
            examples?: {[key: string]: v20220801.ParameterExampleContractResponse};
            /**
             * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
             */
            formParameters?: v20220801.ParameterContractResponse[];
            /**
             * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            schemaId?: string;
            /**
             * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            typeName?: string;
        }

        /**
         * Operation request details.
         */
        export interface RequestContractResponse {
            /**
             * Operation request description.
             */
            description?: string;
            /**
             * Collection of operation request headers.
             */
            headers?: v20220801.ParameterContractResponse[];
            /**
             * Collection of operation request query parameters.
             */
            queryParameters?: v20220801.ParameterContractResponse[];
            /**
             * Collection of operation request representations.
             */
            representations?: v20220801.RepresentationContractResponse[];
        }

        export interface ResourceCollectionResponseValue {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
        }

        /**
         * Resource location data properties.
         */
        export interface ResourceLocationDataContractResponse {
            /**
             * The city or locality where the resource is located.
             */
            city?: string;
            /**
             * The country or region where the resource is located.
             */
            countryOrRegion?: string;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: string;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: string;
        }

        /**
         * Operation response details.
         */
        export interface ResponseContractResponse {
            /**
             * Operation response description.
             */
            description?: string;
            /**
             * Collection of operation response headers.
             */
            headers?: v20220801.ParameterContractResponse[];
            /**
             * Collection of operation response representations.
             */
            representations?: v20220801.RepresentationContractResponse[];
            /**
             * Operation response HTTP status code.
             */
            statusCode: number;
        }

        /**
         * Sampling settings for Diagnostic.
         */
        export interface SamplingSettingsResponse {
            /**
             * Rate of sampling for fixed-rate sampling.
             */
            percentage?: number;
            /**
             * Sampling type.
             */
            samplingType?: string;
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
         * Metadata pertaining to creation and last modification of the resource.
         */
        export interface SystemDataResponse {
            /**
             * The timestamp of resource creation (UTC).
             */
            createdAt?: string;
            /**
             * The identity that created the resource.
             */
            createdBy?: string;
            /**
             * The type of identity that created the resource.
             */
            createdByType?: string;
            /**
             * The timestamp of resource last modification (UTC)
             */
            lastModifiedAt?: string;
            /**
             * The identity that last modified the resource.
             */
            lastModifiedBy?: string;
            /**
             * The type of identity that last modified the resource.
             */
            lastModifiedByType?: string;
        }

        /**
         * OAuth acquire token request body parameter (www-url-form-encoded).
         */
        export interface TokenBodyParameterContractResponse {
            /**
             * body parameter name.
             */
            name: string;
            /**
             * body parameter value.
             */
            value: string;
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

        export interface UserIdentityPropertiesResponse {
            /**
             * The client id of user assigned identity.
             */
            clientId?: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId?: string;
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

        /**
         * Wiki documentation details.
         */
        export interface WikiDocumentationContractResponse {
            /**
             * Documentation Identifier
             */
            documentationId?: string;
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

    }

    export namespace v20220901preview {
        /**
         * Description of an additional API Management resource location.
         */
        export interface AdditionalLocationResponse {
            /**
             * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
             */
            disableGateway?: boolean;
            /**
             * Gateway URL of the API Management service in the Region.
             */
            gatewayRegionalUrl: string;
            /**
             * The location name of the additional region among Azure Data center regions.
             */
            location: string;
            /**
             * Property can be used to enable NAT Gateway for this API Management service.
             */
            natGatewayState?: string;
            /**
             * Outbound public IPV4 address prefixes associated with NAT Gateway deployed service. Available only for Premium SKU on stv2 platform.
             */
            outboundPublicIPAddresses: string[];
            /**
             * Compute Platform Version running the service.
             */
            platformVersion: string;
            /**
             * Private Static Load Balanced IP addresses of the API Management service which is deployed in an Internal Virtual Network in a particular additional location. Available only for Basic, Standard, Premium and Isolated SKU.
             */
            privateIPAddresses: string[];
            /**
             * Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard, Premium and Isolated SKU.
             */
            publicIPAddresses: string[];
            /**
             * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
             */
            publicIpAddressId?: string;
            /**
             * SKU properties of the API Management service.
             */
            sku: v20220901preview.ApiManagementServiceSkuPropertiesResponse;
            /**
             * Virtual network configuration for the location.
             */
            virtualNetworkConfiguration?: v20220901preview.VirtualNetworkConfigurationResponse;
            /**
             * A list of availability zones denoting where the resource needs to come from.
             */
            zones?: string[];
        }
        /**
         * additionalLocationResponseProvideDefaults sets the appropriate defaults for AdditionalLocationResponse
         */
        export function additionalLocationResponseProvideDefaults(val: AdditionalLocationResponse): AdditionalLocationResponse {
            return {
                ...val,
                disableGateway: (val.disableGateway) ?? false,
                natGatewayState: (val.natGatewayState) ?? "Disabled",
            };
        }

        /**
         * API contact information
         */
        export interface ApiContactInformationResponse {
            /**
             * The email address of the contact person/organization. MUST be in the format of an email address
             */
            email?: string;
            /**
             * The identifying name of the contact person/organization
             */
            name?: string;
            /**
             * The URL pointing to the contact information. MUST be in the format of a URL
             */
            url?: string;
        }

        /**
         * API license information
         */
        export interface ApiLicenseInformationResponse {
            /**
             * The license name used for the API
             */
            name?: string;
            /**
             * A URL to the license used for the API. MUST be in the format of a URL
             */
            url?: string;
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
             * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type: string;
            /**
             * The list of user identities associated with the resource. The user identity 
             * dictionary key references will be ARM resource ids in the form: 
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
             *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20220901preview.UserIdentityPropertiesResponse};
        }

        /**
         * API Management service resource SKU properties.
         */
        export interface ApiManagementServiceSkuPropertiesResponse {
            /**
             * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
             */
            capacity: number;
            /**
             * Name of the Sku.
             */
            name: string;
        }

        /**
         * Control Plane Apis version constraint for the API Management service.
         */
        export interface ApiVersionConstraintResponse {
            /**
             * Limit control plane API calls to API Management service with version equal to or newer than this value.
             */
            minApiVersion?: string;
        }

        /**
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsResponse {
            /**
             * Description of API Version Set.
             */
            description?: string;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: string;
            /**
             * The display Name of the API Version Set.
             */
            name?: string;
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
            versioningScheme?: string;
        }

        /**
         * A wrapper for an ARM resource id
         */
        export interface ArmIdWrapperResponse {
            id: string;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractResponse {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: v20220901preview.OAuth2AuthenticationSettingsContractResponse;
            /**
             * Collection of OAuth2 authentication settings included into this API.
             */
            oAuth2AuthenticationSettings?: v20220901preview.OAuth2AuthenticationSettingsContractResponse[];
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: v20220901preview.OpenIdAuthenticationSettingsContractResponse;
            /**
             * Collection of Open ID Connect authentication settings included into this API.
             */
            openidAuthenticationSettings?: v20220901preview.OpenIdAuthenticationSettingsContractResponse[];
        }

        /**
         * Authorization error details.
         */
        export interface AuthorizationErrorResponse {
            /**
             * Error code
             */
            code?: string;
            /**
             * Error message
             */
            message?: string;
        }

        /**
         * Authorization Provider oauth2 grant types settings
         */
        export interface AuthorizationProviderOAuth2GrantTypesResponse {
            /**
             * OAuth2 authorization code grant parameters
             */
            authorizationCode?: {[key: string]: string};
            /**
             * OAuth2 client credential grant parameters
             */
            clientCredentials?: {[key: string]: string};
        }

        /**
         * OAuth2 settings details
         */
        export interface AuthorizationProviderOAuth2SettingsResponse {
            /**
             * OAuth2 settings
             */
            grantTypes?: v20220901preview.AuthorizationProviderOAuth2GrantTypesResponse;
            /**
             * Redirect URL to be set in the OAuth application.
             */
            redirectUrl?: string;
        }

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
         * The configuration of the backend circuit breaker
         */
        export interface BackendCircuitBreakerResponse {
            /**
             * The rules for tripping the backend.
             */
            rules?: v20220901preview.CircuitBreakerRuleResponse[];
        }

        /**
         * Details of the Credentials used to connect to Backend.
         */
        export interface BackendCredentialsContractResponse {
            /**
             * Authorization header authentication
             */
            authorization?: v20220901preview.BackendAuthorizationHeaderCredentialsResponse;
            /**
             * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
             */
            certificate?: string[];
            /**
             * List of Client Certificate Ids.
             */
            certificateIds?: string[];
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
            serviceFabricCluster?: v20220901preview.BackendServiceFabricClusterPropertiesResponse;
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
             * The client certificate id for the management endpoint.
             */
            clientCertificateId?: string;
            /**
             * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
             */
            clientCertificatethumbprint?: string;
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
            serverX509Names?: v20220901preview.X509CertificateNameResponse[];
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
         * Body logging settings.
         */
        export interface BodyDiagnosticSettingsResponse {
            /**
             * Number of request body bytes to log.
             */
            bytes?: number;
        }

        /**
         * Certificate configuration which consist of non-trusted intermediates and root certificates.
         */
        export interface CertificateConfigurationResponse {
            /**
             * Certificate information.
             */
            certificate?: v20220901preview.CertificateInformationResponse;
            /**
             * Certificate Password.
             */
            certificatePassword?: string;
            /**
             * Base64 Encoded certificate.
             */
            encodedCertificate?: string;
            /**
             * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
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
         * The trip conditions of the circuit breaker
         */
        export interface CircuitBreakerFailureConditionResponse {
            /**
             * The threshold for opening the circuit.
             */
            count?: number;
            /**
             * The error reasons which are considered as failure.
             */
            errorReasons?: string[];
            /**
             * The interval during which the failures are counted.
             */
            interval?: string;
            /**
             * The threshold for opening the circuit.
             */
            percentage?: number;
            /**
             * The status code ranges which are considered as failure.
             */
            statusCodeRanges?: v20220901preview.FailureStatusCodeRangeResponse[];
        }

        /**
         * Rule configuration to trip the backend.
         */
        export interface CircuitBreakerRuleResponse {
            /**
             * The conditions for tripping the circuit breaker.
             */
            failureCondition?: v20220901preview.CircuitBreakerFailureConditionResponse;
            /**
             * The rule name.
             */
            name?: string;
            /**
             * The duration for which the circuit will be tripped.
             */
            tripDuration?: string;
        }

        export interface DataMaskingEntityResponse {
            /**
             * Data masking mode.
             */
            mode?: string;
            /**
             * The name of an entity to mask (e.g. a name of a header or a query parameter).
             */
            value?: string;
        }

        export interface DataMaskingResponse {
            /**
             * Masking settings for headers
             */
            headers?: v20220901preview.DataMaskingEntityResponse[];
            /**
             * Masking settings for Url query parameters
             */
            queryParams?: v20220901preview.DataMaskingEntityResponse[];
        }

        /**
         * Email Template Parameter contract.
         */
        export interface EmailTemplateParametersContractPropertiesResponse {
            /**
             * Template parameter description.
             */
            description?: string;
            /**
             * Template parameter name.
             */
            name?: string;
            /**
             * Template parameter title.
             */
            title?: string;
        }

        /**
         * The failure http status code range
         */
        export interface FailureStatusCodeRangeResponse {
            /**
             * The maximum http status code.
             */
            max?: number;
            /**
             * The minimum http status code.
             */
            min?: number;
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
             * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
             */
            externalId?: string;
            /**
             * Group type.
             */
            type?: string;
        }

        /**
         * Custom hostname configuration.
         */
        export interface HostnameConfigurationResponse {
            /**
             * Certificate information.
             */
            certificate?: v20220901preview.CertificateInformationResponse;
            /**
             * Certificate Password.
             */
            certificatePassword?: string;
            /**
             * Certificate Source.
             */
            certificateSource?: string;
            /**
             * Certificate Status.
             */
            certificateStatus?: string;
            /**
             * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
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
             * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
             */
            identityClientId?: string;
            /**
             * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
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
         * Http message diagnostic settings.
         */
        export interface HttpMessageDiagnosticResponse {
            /**
             * Body logging settings.
             */
            body?: v20220901preview.BodyDiagnosticSettingsResponse;
            /**
             * Data masking settings.
             */
            dataMasking?: v20220901preview.DataMaskingResponse;
            /**
             * Array of HTTP Headers to log.
             */
            headers?: string[];
        }

        /**
         * KeyVault contract details.
         */
        export interface KeyVaultContractPropertiesResponse {
            /**
             * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
             */
            identityClientId?: string;
            /**
             * Last time sync and refresh status of secret from key vault.
             */
            lastStatus?: v20220901preview.KeyVaultLastAccessStatusContractPropertiesResponse;
            /**
             * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
             */
            secretIdentifier?: string;
        }

        /**
         * Issue contract Update Properties.
         */
        export interface KeyVaultLastAccessStatusContractPropertiesResponse {
            /**
             * Last status code for sync and refresh of secret from key vault.
             */
            code?: string;
            /**
             * Details of the error else empty.
             */
            message?: string;
            /**
             * Last time secret was accessed. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
             */
            timeStampUtc?: string;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractResponse {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: string[];
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: string;
        }

        /**
         * Operation parameters details.
         */
        export interface ParameterContractResponse {
            /**
             * Default parameter value.
             */
            defaultValue?: string;
            /**
             * Parameter description.
             */
            description?: string;
            /**
             * Exampled defined for the parameter.
             */
            examples?: {[key: string]: v20220901preview.ParameterExampleContractResponse};
            /**
             * Parameter name.
             */
            name: string;
            /**
             * Specifies whether parameter is required or not.
             */
            required?: boolean;
            /**
             * Schema identifier.
             */
            schemaId?: string;
            /**
             * Parameter type.
             */
            type: string;
            /**
             * Type name defined by the schema.
             */
            typeName?: string;
            /**
             * Parameter values.
             */
            values?: string[];
        }

        /**
         * Parameter example.
         */
        export interface ParameterExampleContractResponse {
            /**
             * Long description for the example
             */
            description?: string;
            /**
             * A URL that points to the literal example
             */
            externalValue?: string;
            /**
             * Short description for the example
             */
            summary?: string;
            /**
             * Example value. May be a primitive value, or an object.
             */
            value?: any;
        }

        /**
         * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
         */
        export interface PipelineDiagnosticSettingsResponse {
            /**
             * Diagnostic settings for request.
             */
            request?: v20220901preview.HttpMessageDiagnosticResponse;
            /**
             * Diagnostic settings for response.
             */
            response?: v20220901preview.HttpMessageDiagnosticResponse;
        }

        /**
         * The Private Endpoint resource.
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for Private Endpoint
             */
            id: string;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: string;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: string;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: string;
        }

        /**
         * Remote Private Endpoint Connection resource.
         */
        export interface RemotePrivateEndpointConnectionWrapperResponse {
            /**
             * All the Group ids.
             */
            groupIds: string[];
            /**
             * Private Endpoint connection resource id
             */
            id?: string;
            /**
             * Private Endpoint Connection Name
             */
            name?: string;
            /**
             * The resource of private end point.
             */
            privateEndpoint?: v20220901preview.ArmIdWrapperResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: v20220901preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * The provisioning state of the private endpoint connection resource.
             */
            provisioningState: string;
            /**
             * Private Endpoint Connection Resource Type
             */
            type?: string;
        }

        /**
         * Operation request/response representation details.
         */
        export interface RepresentationContractResponse {
            /**
             * Specifies a registered or custom content type for this representation, e.g. application/xml.
             */
            contentType: string;
            /**
             * Exampled defined for the representation.
             */
            examples?: {[key: string]: v20220901preview.ParameterExampleContractResponse};
            /**
             * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
             */
            formParameters?: v20220901preview.ParameterContractResponse[];
            /**
             * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            schemaId?: string;
            /**
             * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            typeName?: string;
        }

        /**
         * Operation request details.
         */
        export interface RequestContractResponse {
            /**
             * Operation request description.
             */
            description?: string;
            /**
             * Collection of operation request headers.
             */
            headers?: v20220901preview.ParameterContractResponse[];
            /**
             * Collection of operation request query parameters.
             */
            queryParameters?: v20220901preview.ParameterContractResponse[];
            /**
             * Collection of operation request representations.
             */
            representations?: v20220901preview.RepresentationContractResponse[];
        }

        export interface ResourceCollectionResponseValue {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
        }

        /**
         * Resource location data properties.
         */
        export interface ResourceLocationDataContractResponse {
            /**
             * The city or locality where the resource is located.
             */
            city?: string;
            /**
             * The country or region where the resource is located.
             */
            countryOrRegion?: string;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: string;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: string;
        }

        /**
         * Operation response details.
         */
        export interface ResponseContractResponse {
            /**
             * Operation response description.
             */
            description?: string;
            /**
             * Collection of operation response headers.
             */
            headers?: v20220901preview.ParameterContractResponse[];
            /**
             * Collection of operation response representations.
             */
            representations?: v20220901preview.RepresentationContractResponse[];
            /**
             * Operation response HTTP status code.
             */
            statusCode: number;
        }

        /**
         * Sampling settings for Diagnostic.
         */
        export interface SamplingSettingsResponse {
            /**
             * Rate of sampling for fixed-rate sampling.
             */
            percentage?: number;
            /**
             * Sampling type.
             */
            samplingType?: string;
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
         * Metadata pertaining to creation and last modification of the resource.
         */
        export interface SystemDataResponse {
            /**
             * The timestamp of resource creation (UTC).
             */
            createdAt?: string;
            /**
             * The identity that created the resource.
             */
            createdBy?: string;
            /**
             * The type of identity that created the resource.
             */
            createdByType?: string;
            /**
             * The timestamp of resource last modification (UTC)
             */
            lastModifiedAt?: string;
            /**
             * The identity that last modified the resource.
             */
            lastModifiedBy?: string;
            /**
             * The type of identity that last modified the resource.
             */
            lastModifiedByType?: string;
        }

        /**
         * OAuth acquire token request body parameter (www-url-form-encoded).
         */
        export interface TokenBodyParameterContractResponse {
            /**
             * body parameter name.
             */
            name: string;
            /**
             * body parameter value.
             */
            value: string;
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

        export interface UserIdentityPropertiesResponse {
            /**
             * The client id of user assigned identity.
             */
            clientId?: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId?: string;
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

        /**
         * Wiki documentation details.
         */
        export interface WikiDocumentationContractResponse {
            /**
             * Documentation Identifier
             */
            documentationId?: string;
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

    }

    export namespace v20230301preview {
        /**
         * Description of an additional API Management resource location.
         */
        export interface AdditionalLocationResponse {
            /**
             * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
             */
            disableGateway?: boolean;
            /**
             * Gateway URL of the API Management service in the Region.
             */
            gatewayRegionalUrl: string;
            /**
             * The location name of the additional region among Azure Data center regions.
             */
            location: string;
            /**
             * Property can be used to enable NAT Gateway for this API Management service.
             */
            natGatewayState?: string;
            /**
             * Outbound public IPV4 address prefixes associated with NAT Gateway deployed service. Available only for Premium SKU on stv2 platform.
             */
            outboundPublicIPAddresses: string[];
            /**
             * Compute Platform Version running the service.
             */
            platformVersion: string;
            /**
             * Private Static Load Balanced IP addresses of the API Management service which is deployed in an Internal Virtual Network in a particular additional location. Available only for Basic, Standard, Premium and Isolated SKU.
             */
            privateIPAddresses: string[];
            /**
             * Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard, Premium and Isolated SKU.
             */
            publicIPAddresses: string[];
            /**
             * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
             */
            publicIpAddressId?: string;
            /**
             * SKU properties of the API Management service.
             */
            sku: v20230301preview.ApiManagementServiceSkuPropertiesResponse;
            /**
             * Virtual network configuration for the location.
             */
            virtualNetworkConfiguration?: v20230301preview.VirtualNetworkConfigurationResponse;
            /**
             * A list of availability zones denoting where the resource needs to come from.
             */
            zones?: string[];
        }
        /**
         * additionalLocationResponseProvideDefaults sets the appropriate defaults for AdditionalLocationResponse
         */
        export function additionalLocationResponseProvideDefaults(val: AdditionalLocationResponse): AdditionalLocationResponse {
            return {
                ...val,
                disableGateway: (val.disableGateway) ?? false,
                natGatewayState: (val.natGatewayState) ?? "Disabled",
            };
        }

        /**
         * API contact information
         */
        export interface ApiContactInformationResponse {
            /**
             * The email address of the contact person/organization. MUST be in the format of an email address
             */
            email?: string;
            /**
             * The identifying name of the contact person/organization
             */
            name?: string;
            /**
             * The URL pointing to the contact information. MUST be in the format of a URL
             */
            url?: string;
        }

        /**
         * API license information
         */
        export interface ApiLicenseInformationResponse {
            /**
             * The license name used for the API
             */
            name?: string;
            /**
             * A URL to the license used for the API. MUST be in the format of a URL
             */
            url?: string;
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
             * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
             */
            type: string;
            /**
             * The list of user identities associated with the resource. The user identity 
             * dictionary key references will be ARM resource ids in the form: 
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
             *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20230301preview.UserIdentityPropertiesResponse};
        }

        /**
         * API Management service resource SKU properties.
         */
        export interface ApiManagementServiceSkuPropertiesResponse {
            /**
             * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
             */
            capacity: number;
            /**
             * Name of the Sku.
             */
            name: string;
        }

        /**
         * Control Plane Apis version constraint for the API Management service.
         */
        export interface ApiVersionConstraintResponse {
            /**
             * Limit control plane API calls to API Management service with version equal to or newer than this value.
             */
            minApiVersion?: string;
        }

        /**
         * An API Version Set contains the common configuration for a set of API Versions relating 
         */
        export interface ApiVersionSetContractDetailsResponse {
            /**
             * Description of API Version Set.
             */
            description?: string;
            /**
             * Identifier for existing API Version Set. Omit this value to create a new Version Set.
             */
            id?: string;
            /**
             * The display Name of the API Version Set.
             */
            name?: string;
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
            versioningScheme?: string;
        }

        /**
         * A wrapper for an ARM resource id
         */
        export interface ArmIdWrapperResponse {
            id: string;
        }

        /**
         * API Authentication Settings.
         */
        export interface AuthenticationSettingsContractResponse {
            /**
             * OAuth2 Authentication settings
             */
            oAuth2?: v20230301preview.OAuth2AuthenticationSettingsContractResponse;
            /**
             * Collection of OAuth2 authentication settings included into this API.
             */
            oAuth2AuthenticationSettings?: v20230301preview.OAuth2AuthenticationSettingsContractResponse[];
            /**
             * OpenID Connect Authentication Settings
             */
            openid?: v20230301preview.OpenIdAuthenticationSettingsContractResponse;
            /**
             * Collection of Open ID Connect authentication settings included into this API.
             */
            openidAuthenticationSettings?: v20230301preview.OpenIdAuthenticationSettingsContractResponse[];
        }

        /**
         * Authorization error details.
         */
        export interface AuthorizationErrorResponse {
            /**
             * Error code
             */
            code?: string;
            /**
             * Error message
             */
            message?: string;
        }

        /**
         * Authorization Provider oauth2 grant types settings
         */
        export interface AuthorizationProviderOAuth2GrantTypesResponse {
            /**
             * OAuth2 authorization code grant parameters
             */
            authorizationCode?: {[key: string]: string};
            /**
             * OAuth2 client credential grant parameters
             */
            clientCredentials?: {[key: string]: string};
        }

        /**
         * OAuth2 settings details
         */
        export interface AuthorizationProviderOAuth2SettingsResponse {
            /**
             * OAuth2 settings
             */
            grantTypes?: v20230301preview.AuthorizationProviderOAuth2GrantTypesResponse;
            /**
             * Redirect URL to be set in the OAuth application.
             */
            redirectUrl?: string;
        }

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
         * The configuration of the backend circuit breaker
         */
        export interface BackendCircuitBreakerResponse {
            /**
             * The rules for tripping the backend.
             */
            rules?: v20230301preview.CircuitBreakerRuleResponse[];
        }

        /**
         * Details of the Credentials used to connect to Backend.
         */
        export interface BackendCredentialsContractResponse {
            /**
             * Authorization header authentication
             */
            authorization?: v20230301preview.BackendAuthorizationHeaderCredentialsResponse;
            /**
             * List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided.
             */
            certificate?: string[];
            /**
             * List of Client Certificate Ids.
             */
            certificateIds?: string[];
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
            serviceFabricCluster?: v20230301preview.BackendServiceFabricClusterPropertiesResponse;
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
             * The client certificate id for the management endpoint.
             */
            clientCertificateId?: string;
            /**
             * The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided
             */
            clientCertificatethumbprint?: string;
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
            serverX509Names?: v20230301preview.X509CertificateNameResponse[];
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
         * Body logging settings.
         */
        export interface BodyDiagnosticSettingsResponse {
            /**
             * Number of request body bytes to log.
             */
            bytes?: number;
        }

        /**
         * Certificate configuration which consist of non-trusted intermediates and root certificates.
         */
        export interface CertificateConfigurationResponse {
            /**
             * Certificate information.
             */
            certificate?: v20230301preview.CertificateInformationResponse;
            /**
             * Certificate Password.
             */
            certificatePassword?: string;
            /**
             * Base64 Encoded certificate.
             */
            encodedCertificate?: string;
            /**
             * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
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
         * The trip conditions of the circuit breaker
         */
        export interface CircuitBreakerFailureConditionResponse {
            /**
             * The threshold for opening the circuit.
             */
            count?: number;
            /**
             * The error reasons which are considered as failure.
             */
            errorReasons?: string[];
            /**
             * The interval during which the failures are counted.
             */
            interval?: string;
            /**
             * The threshold for opening the circuit.
             */
            percentage?: number;
            /**
             * The status code ranges which are considered as failure.
             */
            statusCodeRanges?: v20230301preview.FailureStatusCodeRangeResponse[];
        }

        /**
         * Rule configuration to trip the backend.
         */
        export interface CircuitBreakerRuleResponse {
            /**
             * The conditions for tripping the circuit breaker.
             */
            failureCondition?: v20230301preview.CircuitBreakerFailureConditionResponse;
            /**
             * The rule name.
             */
            name?: string;
            /**
             * The duration for which the circuit will be tripped.
             */
            tripDuration?: string;
        }

        /**
         * Information regarding the Configuration API of the API Management service.
         */
        export interface ConfigurationApiResponse {
            /**
             * Indication whether or not the legacy Configuration API (v1) should be exposed on the API Management service. Value is optional but must be 'Enabled' or 'Disabled'. If 'Disabled', legacy Configuration API (v1) will not be available for self-hosted gateways. Default value is 'Enabled'
             */
            legacyApi?: string;
        }
        /**
         * configurationApiResponseProvideDefaults sets the appropriate defaults for ConfigurationApiResponse
         */
        export function configurationApiResponseProvideDefaults(val: ConfigurationApiResponse): ConfigurationApiResponse {
            return {
                ...val,
                legacyApi: (val.legacyApi) ?? "Enabled",
            };
        }

        export interface DataMaskingEntityResponse {
            /**
             * Data masking mode.
             */
            mode?: string;
            /**
             * The name of an entity to mask (e.g. a name of a header or a query parameter).
             */
            value?: string;
        }

        export interface DataMaskingResponse {
            /**
             * Masking settings for headers
             */
            headers?: v20230301preview.DataMaskingEntityResponse[];
            /**
             * Masking settings for Url query parameters
             */
            queryParams?: v20230301preview.DataMaskingEntityResponse[];
        }

        /**
         * Email Template Parameter contract.
         */
        export interface EmailTemplateParametersContractPropertiesResponse {
            /**
             * Template parameter description.
             */
            description?: string;
            /**
             * Template parameter name.
             */
            name?: string;
            /**
             * Template parameter title.
             */
            title?: string;
        }

        /**
         * The failure http status code range
         */
        export interface FailureStatusCodeRangeResponse {
            /**
             * The maximum http status code.
             */
            max?: number;
            /**
             * The minimum http status code.
             */
            min?: number;
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
             * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
             */
            externalId?: string;
            /**
             * Group type.
             */
            type?: string;
        }

        /**
         * Custom hostname configuration.
         */
        export interface HostnameConfigurationResponse {
            /**
             * Certificate information.
             */
            certificate?: v20230301preview.CertificateInformationResponse;
            /**
             * Certificate Password.
             */
            certificatePassword?: string;
            /**
             * Certificate Source.
             */
            certificateSource?: string;
            /**
             * Certificate Status.
             */
            certificateStatus?: string;
            /**
             * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
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
             * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
             */
            identityClientId?: string;
            /**
             * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of type *application/x-pkcs12*
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
         * Http message diagnostic settings.
         */
        export interface HttpMessageDiagnosticResponse {
            /**
             * Body logging settings.
             */
            body?: v20230301preview.BodyDiagnosticSettingsResponse;
            /**
             * Data masking settings.
             */
            dataMasking?: v20230301preview.DataMaskingResponse;
            /**
             * Array of HTTP Headers to log.
             */
            headers?: string[];
        }

        /**
         * KeyVault contract details.
         */
        export interface KeyVaultContractPropertiesResponse {
            /**
             * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
             */
            identityClientId?: string;
            /**
             * Last time sync and refresh status of secret from key vault.
             */
            lastStatus?: v20230301preview.KeyVaultLastAccessStatusContractPropertiesResponse;
            /**
             * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
             */
            secretIdentifier?: string;
        }

        /**
         * Issue contract Update Properties.
         */
        export interface KeyVaultLastAccessStatusContractPropertiesResponse {
            /**
             * Last status code for sync and refresh of secret from key vault.
             */
            code?: string;
            /**
             * Details of the error else empty.
             */
            message?: string;
            /**
             * Last time secret was accessed. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
             */
            timeStampUtc?: string;
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
         * API OAuth2 Authentication settings details.
         */
        export interface OpenIdAuthenticationSettingsContractResponse {
            /**
             * How to send token to the server.
             */
            bearerTokenSendingMethods?: string[];
            /**
             * OAuth authorization server identifier.
             */
            openidProviderId?: string;
        }

        /**
         * Operation parameters details.
         */
        export interface ParameterContractResponse {
            /**
             * Default parameter value.
             */
            defaultValue?: string;
            /**
             * Parameter description.
             */
            description?: string;
            /**
             * Exampled defined for the parameter.
             */
            examples?: {[key: string]: v20230301preview.ParameterExampleContractResponse};
            /**
             * Parameter name.
             */
            name: string;
            /**
             * Specifies whether parameter is required or not.
             */
            required?: boolean;
            /**
             * Schema identifier.
             */
            schemaId?: string;
            /**
             * Parameter type.
             */
            type: string;
            /**
             * Type name defined by the schema.
             */
            typeName?: string;
            /**
             * Parameter values.
             */
            values?: string[];
        }

        /**
         * Parameter example.
         */
        export interface ParameterExampleContractResponse {
            /**
             * Long description for the example
             */
            description?: string;
            /**
             * A URL that points to the literal example
             */
            externalValue?: string;
            /**
             * Short description for the example
             */
            summary?: string;
            /**
             * Example value. May be a primitive value, or an object.
             */
            value?: any;
        }

        /**
         * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
         */
        export interface PipelineDiagnosticSettingsResponse {
            /**
             * Diagnostic settings for request.
             */
            request?: v20230301preview.HttpMessageDiagnosticResponse;
            /**
             * Diagnostic settings for response.
             */
            response?: v20230301preview.HttpMessageDiagnosticResponse;
        }

        /**
         * The Private Endpoint resource.
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for Private Endpoint
             */
            id: string;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: string;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: string;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: string;
        }

        /**
         * Remote Private Endpoint Connection resource.
         */
        export interface RemotePrivateEndpointConnectionWrapperResponse {
            /**
             * All the Group ids.
             */
            groupIds: string[];
            /**
             * Private Endpoint connection resource id
             */
            id?: string;
            /**
             * Private Endpoint Connection Name
             */
            name?: string;
            /**
             * The resource of private end point.
             */
            privateEndpoint?: v20230301preview.ArmIdWrapperResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: v20230301preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * The provisioning state of the private endpoint connection resource.
             */
            provisioningState: string;
            /**
             * Private Endpoint Connection Resource Type
             */
            type?: string;
        }

        /**
         * Operation request/response representation details.
         */
        export interface RepresentationContractResponse {
            /**
             * Specifies a registered or custom content type for this representation, e.g. application/xml.
             */
            contentType: string;
            /**
             * Exampled defined for the representation.
             */
            examples?: {[key: string]: v20230301preview.ParameterExampleContractResponse};
            /**
             * Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
             */
            formParameters?: v20230301preview.ParameterContractResponse[];
            /**
             * Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            schemaId?: string;
            /**
             * Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
             */
            typeName?: string;
        }

        /**
         * Operation request details.
         */
        export interface RequestContractResponse {
            /**
             * Operation request description.
             */
            description?: string;
            /**
             * Collection of operation request headers.
             */
            headers?: v20230301preview.ParameterContractResponse[];
            /**
             * Collection of operation request query parameters.
             */
            queryParameters?: v20230301preview.ParameterContractResponse[];
            /**
             * Collection of operation request representations.
             */
            representations?: v20230301preview.RepresentationContractResponse[];
        }

        export interface ResourceCollectionResponseValue {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
        }

        /**
         * Resource location data properties.
         */
        export interface ResourceLocationDataContractResponse {
            /**
             * The city or locality where the resource is located.
             */
            city?: string;
            /**
             * The country or region where the resource is located.
             */
            countryOrRegion?: string;
            /**
             * The district, state, or province where the resource is located.
             */
            district?: string;
            /**
             * A canonical name for the geographic or physical location.
             */
            name: string;
        }

        /**
         * Operation response details.
         */
        export interface ResponseContractResponse {
            /**
             * Operation response description.
             */
            description?: string;
            /**
             * Collection of operation response headers.
             */
            headers?: v20230301preview.ParameterContractResponse[];
            /**
             * Collection of operation response representations.
             */
            representations?: v20230301preview.RepresentationContractResponse[];
            /**
             * Operation response HTTP status code.
             */
            statusCode: number;
        }

        /**
         * Sampling settings for Diagnostic.
         */
        export interface SamplingSettingsResponse {
            /**
             * Rate of sampling for fixed-rate sampling.
             */
            percentage?: number;
            /**
             * Sampling type.
             */
            samplingType?: string;
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
         * Metadata pertaining to creation and last modification of the resource.
         */
        export interface SystemDataResponse {
            /**
             * The timestamp of resource creation (UTC).
             */
            createdAt?: string;
            /**
             * The identity that created the resource.
             */
            createdBy?: string;
            /**
             * The type of identity that created the resource.
             */
            createdByType?: string;
            /**
             * The timestamp of resource last modification (UTC)
             */
            lastModifiedAt?: string;
            /**
             * The identity that last modified the resource.
             */
            lastModifiedBy?: string;
            /**
             * The type of identity that last modified the resource.
             */
            lastModifiedByType?: string;
        }

        /**
         * OAuth acquire token request body parameter (www-url-form-encoded).
         */
        export interface TokenBodyParameterContractResponse {
            /**
             * body parameter name.
             */
            name: string;
            /**
             * body parameter value.
             */
            value: string;
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

        export interface UserIdentityPropertiesResponse {
            /**
             * The client id of user assigned identity.
             */
            clientId?: string;
            /**
             * The principal id of user assigned identity.
             */
            principalId?: string;
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

        /**
         * Wiki documentation details.
         */
        export interface WikiDocumentationContractResponse {
            /**
             * Documentation Identifier
             */
            documentationId?: string;
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

    }
}
