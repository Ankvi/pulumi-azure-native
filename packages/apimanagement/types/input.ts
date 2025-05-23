import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * API Management gateway resource SKU properties.
 */
export interface ApiManagementGatewaySkuPropertiesArgs {
    /**
     * Capacity of the SKU (number of deployed units of the SKU)
     */
    capacity?: pulumi.Input<number>;
    /**
     * Name of the Sku.
     */
    name: pulumi.Input<string | enums.ApiGatewaySkuType>;
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

export interface BackendBaseParametersPoolArgs {
    /**
     * The list of backend entities belonging to a pool.
     */
    services?: pulumi.Input<pulumi.Input<BackendPoolItemArgs>[]>;
}

/**
 * The configuration of the backend circuit breaker
 */
export interface BackendCircuitBreakerArgs {
    /**
     * The rules for tripping the backend.
     */
    rules?: pulumi.Input<pulumi.Input<CircuitBreakerRuleArgs>[]>;
}

/**
 * Information regarding how the gateway should integrate with backend systems.
 */
export interface BackendConfigurationArgs {
    /**
     * The default hostname of the data-plane gateway to which requests can be sent.
     */
    subnet?: pulumi.Input<BackendSubnetConfigurationArgs>;
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
 * Backend pool service information
 */
export interface BackendPoolItemArgs {
    /**
     * The unique ARM id of the backend entity. The ARM id should refer to an already existing backend entity.
     */
    id: pulumi.Input<string>;
    /**
     * The priority of the backend entity in the backend pool. Must be between 0 and 100. It can be also null if the value not specified.
     */
    priority?: pulumi.Input<number>;
    /**
     * The weight of the backend entity in the backend pool. Must be between 0 and 100. It can be also null if the value not specified.
     */
    weight?: pulumi.Input<number>;
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
 * Information regarding how the subnet to which the gateway should be injected.
 */
export interface BackendSubnetConfigurationArgs {
    /**
     * The ARM ID of the subnet in which the backend systems are hosted.
     */
    id?: pulumi.Input<string>;
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
    statusCodeRanges?: pulumi.Input<pulumi.Input<FailureStatusCodeRangeArgs>[]>;
}

/**
 * Rule configuration to trip the backend.
 */
export interface CircuitBreakerRuleArgs {
    /**
     * flag to accept Retry-After header from the backend.
     */
    acceptRetryAfter?: pulumi.Input<boolean>;
    /**
     * The conditions for tripping the circuit breaker.
     */
    failureCondition?: pulumi.Input<CircuitBreakerFailureConditionArgs>;
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
 * Diagnostic settings for Large Language Models
 */
export interface LLMDiagnosticSettingsArgs {
    /**
     * Specifies whether default diagnostic should be enabled for Large Language Models or not.
     */
    logs?: pulumi.Input<string | enums.LlmDiagnosticSettings>;
    /**
     * Diagnostic settings for Large Language Models requests.
     */
    requests?: pulumi.Input<LLMMessageDiagnosticSettingsArgs>;
    /**
     * Diagnostic settings for Large Language Models responses.
     */
    responses?: pulumi.Input<LLMMessageDiagnosticSettingsArgs>;
}

/**
 * Diagnostic settings for Large Language Models Messages
 */
export interface LLMMessageDiagnosticSettingsArgs {
    /**
     * Maximum size of message to logs in bytes. The default size is 32KB.
     */
    maxSizeInBytes?: pulumi.Input<number>;
    /**
     * Specifies which message should be logged. Currently there is only 'all' option.
     */
    messages?: pulumi.Input<string | enums.LlmMessageLogTypes>;
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
