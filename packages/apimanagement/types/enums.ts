export const AlwaysLog = {
    /**
     * Always log all erroneous request regardless of sampling settings.
     */
    AllErrors: "allErrors",
} as const;

export type AlwaysLog = (typeof AlwaysLog)[keyof typeof AlwaysLog];

export const ApiType = {
    Http: "http",
    Soap: "soap",
    Websocket: "websocket",
    Graphql: "graphql",
} as const;

export type ApiType = (typeof ApiType)[keyof typeof ApiType];

export const ApimIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

export type ApimIdentityType = (typeof ApimIdentityType)[keyof typeof ApimIdentityType];

export const AppType = {
    /**
     * User create request was sent by legacy developer portal.
     */
    Portal: "portal",
    /**
     * User create request was sent by new developer portal.
     */
    DeveloperPortal: "developerPortal",
} as const;

export type AppType = (typeof AppType)[keyof typeof AppType];

export const AuthorizationMethod = {
    HEAD: "HEAD",
    OPTIONS: "OPTIONS",
    TRACE: "TRACE",
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
} as const;

export type AuthorizationMethod = (typeof AuthorizationMethod)[keyof typeof AuthorizationMethod];

export const AuthorizationType = {
    /**
     * OAuth2 authorization type
     */
    OAuth2: "OAuth2",
} as const;

export type AuthorizationType = (typeof AuthorizationType)[keyof typeof AuthorizationType];

export const BackendProtocol = {
    /**
     * The Backend is a RESTful service.
     */
    Http: "http",
    /**
     * The Backend is a SOAP service.
     */
    Soap: "soap",
} as const;

export type BackendProtocol = (typeof BackendProtocol)[keyof typeof BackendProtocol];

export const BearerTokenSendingMethod = {
    AuthorizationHeader: "authorizationHeader",
    Query: "query",
} as const;

export type BearerTokenSendingMethod = (typeof BearerTokenSendingMethod)[keyof typeof BearerTokenSendingMethod];

export const BearerTokenSendingMethods = {
    /**
     * Access token will be transmitted in the Authorization header using Bearer schema
     */
    AuthorizationHeader: "authorizationHeader",
    /**
     * Access token will be transmitted as query parameters.
     */
    Query: "query",
} as const;

export type BearerTokenSendingMethods = (typeof BearerTokenSendingMethods)[keyof typeof BearerTokenSendingMethods];

export const CertificateSource = {
    Managed: "Managed",
    KeyVault: "KeyVault",
    Custom: "Custom",
    BuiltIn: "BuiltIn",
} as const;

export type CertificateSource = (typeof CertificateSource)[keyof typeof CertificateSource];

export const CertificateStatus = {
    Completed: "Completed",
    Failed: "Failed",
    InProgress: "InProgress",
} as const;

export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

export const ClientAuthenticationMethod = {
    /**
     * Basic Client Authentication method.
     */
    Basic: "Basic",
    /**
     * Body based Authentication method.
     */
    Body: "Body",
} as const;

export type ClientAuthenticationMethod = (typeof ClientAuthenticationMethod)[keyof typeof ClientAuthenticationMethod];

export const Confirmation = {
    /**
     * Send an e-mail to the user confirming they have successfully signed up.
     */
    Signup: "signup",
    /**
     * Send an e-mail inviting the user to sign-up and complete registration.
     */
    Invite: "invite",
} as const;

export type Confirmation = (typeof Confirmation)[keyof typeof Confirmation];

export const ContentFormat = {
    /**
     * The contents are inline and Content type is a WADL document.
     */
    Wadl_xml: "wadl-xml",
    /**
     * The WADL document is hosted on a publicly accessible internet address.
     */
    Wadl_link_json: "wadl-link-json",
    /**
     * The contents are inline and Content Type is a OpenAPI 2.0 JSON Document.
     */
    Swagger_json: "swagger-json",
    /**
     * The OpenAPI 2.0 JSON document is hosted on a publicly accessible internet address.
     */
    Swagger_link_json: "swagger-link-json",
    /**
     * The contents are inline and the document is a WSDL/Soap document.
     */
    Wsdl: "wsdl",
    /**
     * The WSDL document is hosted on a publicly accessible internet address.
     */
    Wsdl_link: "wsdl-link",
    /**
     * The contents are inline and Content Type is a OpenAPI 3.0 YAML Document.
     */
    Openapi: "openapi",
    /**
     * The contents are inline and Content Type is a OpenAPI 3.0 JSON Document.
     */
    Openapi_json: "openapi+json",
    /**
     * The OpenAPI 3.0 YAML document is hosted on a publicly accessible internet address.
     */
    Openapi_link: "openapi-link",
    /**
     * The OpenAPI 3.0 JSON document is hosted on a publicly accessible internet address.
     */
    Openapi_json_link: "openapi+json-link",
    /**
     * The GraphQL API endpoint hosted on a publicly accessible internet address.
     */
    Graphql_link: "graphql-link",
} as const;

export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat];

export const DataMaskingMode = {
    /**
     * Mask the value of an entity.
     */
    Mask: "Mask",
    /**
     * Hide the presence of an entity.
     */
    Hide: "Hide",
} as const;

export type DataMaskingMode = (typeof DataMaskingMode)[keyof typeof DataMaskingMode];

export const GatewayListDebugCredentialsContractPurpose = {
    /**
     * The tracing purpose.
     */
    Tracing: "tracing",
} as const;

export type GatewayListDebugCredentialsContractPurpose = (typeof GatewayListDebugCredentialsContractPurpose)[keyof typeof GatewayListDebugCredentialsContractPurpose];

export const GrantType = {
    /**
     * Authorization Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.1.
     */
    AuthorizationCode: "authorizationCode",
    /**
     * Implicit Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.2.
     */
    Implicit: "implicit",
    /**
     * Resource Owner Password Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.3.
     */
    ResourceOwnerPassword: "resourceOwnerPassword",
    /**
     * Client Credentials Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.4.
     */
    ClientCredentials: "clientCredentials",
} as const;

export type GrantType = (typeof GrantType)[keyof typeof GrantType];

export const GroupType = {
    Custom: "custom",
    System: "system",
    External: "external",
} as const;

export type GroupType = (typeof GroupType)[keyof typeof GroupType];

export const HostnameType = {
    Proxy: "Proxy",
    Portal: "Portal",
    Management: "Management",
    Scm: "Scm",
    DeveloperPortal: "DeveloperPortal",
} as const;

export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

export const HttpCorrelationProtocol = {
    /**
     * Do not read and inject correlation headers.
     */
    None: "None",
    /**
     * Inject Request-Id and Request-Context headers with request correlation data. See https://github.com/dotnet/corefx/blob/master/src/System.Diagnostics.DiagnosticSource/src/HttpCorrelationProtocol.md.
     */
    Legacy: "Legacy",
    /**
     * Inject Trace Context headers. See https://w3c.github.io/trace-context.
     */
    W3C: "W3C",
} as const;

export type HttpCorrelationProtocol = (typeof HttpCorrelationProtocol)[keyof typeof HttpCorrelationProtocol];

export const IdentityProviderType = {
    /**
     * Facebook as Identity provider.
     */
    Facebook: "facebook",
    /**
     * Google as Identity provider.
     */
    Google: "google",
    /**
     * Microsoft Live as Identity provider.
     */
    Microsoft: "microsoft",
    /**
     * Twitter as Identity provider.
     */
    Twitter: "twitter",
    /**
     * Azure Active Directory as Identity provider.
     */
    Aad: "aad",
    /**
     * Azure Active Directory B2C as Identity provider.
     */
    AadB2C: "aadB2C",
} as const;

export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

export const KeyType = {
    Primary: "primary",
    Secondary: "secondary",
} as const;

export type KeyType = (typeof KeyType)[keyof typeof KeyType];

export const LoggerType = {
    /**
     * Azure Event Hub as log destination.
     */
    AzureEventHub: "azureEventHub",
    /**
     * Azure Application Insights as log destination.
     */
    ApplicationInsights: "applicationInsights",
    /**
     * Azure Monitor
     */
    AzureMonitor: "azureMonitor",
} as const;

export type LoggerType = (typeof LoggerType)[keyof typeof LoggerType];

export const NatGatewayState = {
    /**
     * Nat Gateway is enabled for the service.
     */
    Enabled: "Enabled",
    /**
     * Nat Gateway is disabled for the service.
     */
    Disabled: "Disabled",
} as const;

export type NatGatewayState = (typeof NatGatewayState)[keyof typeof NatGatewayState];

export const OAuth2GrantType = {
    /**
     * Authorization Code grant
     */
    AuthorizationCode: "AuthorizationCode",
    /**
     * Client Credential grant
     */
    ClientCredentials: "ClientCredentials",
} as const;

export type OAuth2GrantType = (typeof OAuth2GrantType)[keyof typeof OAuth2GrantType];

export const OperationNameFormat = {
    /**
     * API_NAME;rev=API_REVISION - OPERATION_NAME
     */
    Name: "Name",
    /**
     * HTTP_VERB URL
     */
    Url: "Url",
} as const;

export type OperationNameFormat = (typeof OperationNameFormat)[keyof typeof OperationNameFormat];

export const PolicyContentFormat = {
    /**
     * The contents are inline and Content type is an XML document.
     */
    Xml: "xml",
    /**
     * The policy XML document is hosted on a HTTP endpoint accessible from the API Management service.
     */
    Xml_link: "xml-link",
    /**
     * The contents are inline and Content type is a non XML encoded policy document.
     */
    Rawxml: "rawxml",
    /**
     * The policy document is not XML encoded and is hosted on a HTTP endpoint accessible from the API Management service.
     */
    Rawxml_link: "rawxml-link",
} as const;

export type PolicyContentFormat = (typeof PolicyContentFormat)[keyof typeof PolicyContentFormat];

export const PolicyFragmentContentFormat = {
    /**
     * The contents are inline and Content type is an XML document.
     */
    Xml: "xml",
    /**
     * The contents are inline and Content type is a non XML encoded policy document.
     */
    Rawxml: "rawxml",
} as const;

export type PolicyFragmentContentFormat = (typeof PolicyFragmentContentFormat)[keyof typeof PolicyFragmentContentFormat];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ProductState = {
    NotPublished: "notPublished",
    Published: "published",
} as const;

export type ProductState = (typeof ProductState)[keyof typeof ProductState];

export const Protocol = {
    Http: "http",
    Https: "https",
    Ws: "ws",
    Wss: "wss",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const ProvisioningState = {
    Created: "created",
} as const;

export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SamplingType = {
    /**
     * Fixed-rate sampling.
     */
    Fixed: "fixed",
} as const;

export type SamplingType = (typeof SamplingType)[keyof typeof SamplingType];

export const SchemaType = {
    /**
     * XML schema type.
     */
    Xml: "xml",
    /**
     * Json schema type.
     */
    Json: "json",
} as const;

export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

export const SkuType = {
    /**
     * Developer SKU of Api Management.
     */
    Developer: "Developer",
    /**
     * Standard SKU of Api Management.
     */
    Standard: "Standard",
    /**
     * Premium SKU of Api Management.
     */
    Premium: "Premium",
    /**
     * Basic SKU of Api Management.
     */
    Basic: "Basic",
    /**
     * Consumption SKU of Api Management.
     */
    Consumption: "Consumption",
    /**
     * Isolated SKU of Api Management.
     */
    Isolated: "Isolated",
} as const;

export type SkuType = (typeof SkuType)[keyof typeof SkuType];

export const SoapApiType = {
    /**
     * Imports a SOAP API having a RESTful front end.
     */
    SoapToRest: "http",
    /**
     * Imports the SOAP API having a SOAP front end.
     */
    SoapPassThrough: "soap",
    /**
     * Imports the API having a Websocket front end.
     */
    WebSocket: "websocket",
    /**
     * Imports the API having a GraphQL front end.
     */
    GraphQL: "graphql",
} as const;

export type SoapApiType = (typeof SoapApiType)[keyof typeof SoapApiType];

export const State = {
    /**
     * The issue is proposed.
     */
    Proposed: "proposed",
    /**
     * The issue is opened.
     */
    Open: "open",
    /**
     * The issue was removed.
     */
    Removed: "removed",
    /**
     * The issue is now resolved.
     */
    Resolved: "resolved",
    /**
     * The issue was closed.
     */
    Closed: "closed",
} as const;

export type State = (typeof State)[keyof typeof State];

export const SubscriptionState = {
    Suspended: "suspended",
    Active: "active",
    Expired: "expired",
    Submitted: "submitted",
    Rejected: "rejected",
    Cancelled: "cancelled",
} as const;

export type SubscriptionState = (typeof SubscriptionState)[keyof typeof SubscriptionState];

export const TranslateRequiredQueryParametersConduct = {
    /**
     * Translates required query parameters to template ones. Is a default value
     */
    Template: "template",
    /**
     * Leaves required query parameters as they are (no translation done).
     */
    Query: "query",
} as const;

export type TranslateRequiredQueryParametersConduct = (typeof TranslateRequiredQueryParametersConduct)[keyof typeof TranslateRequiredQueryParametersConduct];

export const UserState = {
    /**
     * User state is active.
     */
    Active: "active",
    /**
     * User is blocked. Blocked users cannot authenticate at developer portal or call API.
     */
    Blocked: "blocked",
    /**
     * User account is pending. Requires identity confirmation before it can be made active.
     */
    Pending: "pending",
    /**
     * User account is closed. All identities and related entities are removed.
     */
    Deleted: "deleted",
} as const;

export type UserState = (typeof UserState)[keyof typeof UserState];

export const Verbosity = {
    /**
     * All the traces emitted by trace policies will be sent to the logger attached to this diagnostic instance.
     */
    Verbose: "verbose",
    /**
     * Traces with 'severity' set to 'information' and 'error' will be sent to the logger attached to this diagnostic instance.
     */
    Information: "information",
    /**
     * Only traces with 'severity' set to 'error' will be sent to the logger attached to this diagnostic instance.
     */
    Error: "error",
} as const;

export type Verbosity = (typeof Verbosity)[keyof typeof Verbosity];

export const VersioningScheme = {
    /**
     * The API Version is passed in a path segment.
     */
    Segment: "Segment",
    /**
     * The API Version is passed in a query parameter.
     */
    Query: "Query",
    /**
     * The API Version is passed in a HTTP header.
     */
    Header: "Header",
} as const;

export type VersioningScheme = (typeof VersioningScheme)[keyof typeof VersioningScheme];

export const VirtualNetworkType = {
    /**
     * The service is not part of any Virtual Network.
     */
    None: "None",
    /**
     * The service is part of Virtual Network and it is accessible from Internet.
     */
    External: "External",
    /**
     * The service is part of Virtual Network and it is only accessible from within the virtual network.
     */
    Internal: "Internal",
} as const;

export type VirtualNetworkType = (typeof VirtualNetworkType)[keyof typeof VirtualNetworkType];
