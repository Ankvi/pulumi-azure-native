import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * API Management gateway resource SKU properties.
 */
export interface ApiManagementGatewaySkuPropertiesResponse {
    /**
     * Capacity of the SKU (number of deployed units of the SKU)
     */
    capacity?: number;
    /**
     * Name of the Sku.
     */
    name: string;
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

export interface BackendBaseParametersResponsePool {
    /**
     * The list of backend entities belonging to a pool.
     */
    services?: BackendPoolItemResponse[];
}

/**
 * The configuration of the backend circuit breaker
 */
export interface BackendCircuitBreakerResponse {
    /**
     * The rules for tripping the backend.
     */
    rules?: CircuitBreakerRuleResponse[];
}

/**
 * Information regarding how the gateway should integrate with backend systems.
 */
export interface BackendConfigurationResponse {
    /**
     * The default hostname of the data-plane gateway to which requests can be sent.
     */
    subnet?: BackendSubnetConfigurationResponse;
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
 * Backend pool service information
 */
export interface BackendPoolItemResponse {
    /**
     * The unique ARM id of the backend entity. The ARM id should refer to an already existing backend entity.
     */
    id: string;
    /**
     * The priority of the backend entity in the backend pool. Must be between 0 and 100. It can be also null if the value not specified.
     */
    priority?: number;
    /**
     * The weight of the backend entity in the backend pool. Must be between 0 and 100. It can be also null if the value not specified.
     */
    weight?: number;
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
 * Information regarding how the subnet to which the gateway should be injected.
 */
export interface BackendSubnetConfigurationResponse {
    /**
     * The ARM ID of the subnet in which the backend systems are hosted.
     */
    id?: string;
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
    statusCodeRanges?: FailureStatusCodeRangeResponse[];
}

/**
 * Rule configuration to trip the backend.
 */
export interface CircuitBreakerRuleResponse {
    /**
     * flag to accept Retry-After header from the backend.
     */
    acceptRetryAfter?: boolean;
    /**
     * The conditions for tripping the circuit breaker.
     */
    failureCondition?: CircuitBreakerFailureConditionResponse;
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
 * Information regarding how the gateway should be exposed.
 */
export interface FrontendConfigurationResponse {
    /**
     * The default hostname of the data-plane gateway to which requests can be sent. This is only applicable for API gateway with Standard SKU.
     */
    defaultHostname: string;
}

/**
 * Information regarding the Configuration API of the API Management gateway. This is only applicable for API gateway with Standard SKU.
 */
export interface GatewayConfigurationApiResponse {
    /**
     * Hostname to which the agent connects to propagate configuration to the cloud.
     */
    hostname: string;
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
 * Diagnostic settings for Large Language Models
 */
export interface LLMDiagnosticSettingsResponse {
    /**
     * Specifies whether default diagnostic should be enabled for Large Language Models or not.
     */
    logs?: string;
    /**
     * Diagnostic settings for Large Language Models requests.
     */
    requests?: LLMMessageDiagnosticSettingsResponse;
    /**
     * Diagnostic settings for Large Language Models responses.
     */
    responses?: LLMMessageDiagnosticSettingsResponse;
}

/**
 * Diagnostic settings for Large Language Models Messages
 */
export interface LLMMessageDiagnosticSettingsResponse {
    /**
     * Maximum size of message to logs in bytes. The default size is 32KB.
     */
    maxSizeInBytes?: number;
    /**
     * Specifies which message should be logged. Currently there is only 'all' option.
     */
    messages?: string;
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
