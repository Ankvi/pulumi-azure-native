export const ApiType = {
    Http: "http",
    Soap: "soap",
} as const;

/**
 * Type of API.
 */
export type ApiType = (typeof ApiType)[keyof typeof ApiType];

export const ApimIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type. Currently the only supported type is 'SystemAssigned'.
 */
export type ApimIdentityType = (typeof ApimIdentityType)[keyof typeof ApimIdentityType];

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

/**
 * Determines the type of confirmation e-mail that will be sent to the newly created user.
 */
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
     * The contents are inline and Content Type is a OpenApi 2.0 Document.
     */
    Swagger_json: "swagger-json",
    /**
     * The Open Api 2.0 document is hosted on a publicly accessible internet address.
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
} as const;

/**
 * Format of the Content in which the API is getting imported.
 */
export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat];

export const HostnameType = {
    Proxy: "Proxy",
    Portal: "Portal",
    Management: "Management",
    Scm: "Scm",
} as const;

/**
 * Hostname type.
 */
export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

export const KeyType = {
    Primary: "primary",
    Secondary: "secondary",
} as const;

/**
 * The Key to be used to generate token for user.
 */
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
} as const;

/**
 * Logger type.
 */
export type LoggerType = (typeof LoggerType)[keyof typeof LoggerType];

export const Protocol = {
    Http: "http",
    Https: "https",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const SamplingType = {
    /**
     * Fixed-rate sampling.
     */
    Fixed: "fixed",
    /**
     * Sampling with a dynamically adjustable rate.
     */
    Adaptive: "adaptive",
} as const;

/**
 * Sampling type.
 */
export type SamplingType = (typeof SamplingType)[keyof typeof SamplingType];

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
} as const;

/**
 * Name of the Sku.
 */
export type SkuType = (typeof SkuType)[keyof typeof SkuType];

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

/**
 * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
 */
export type UserState = (typeof UserState)[keyof typeof UserState];

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

/**
 * An value that determines where the API Version identifier will be located in a HTTP request.
 */
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

/**
 * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
 */
export type VirtualNetworkType = (typeof VirtualNetworkType)[keyof typeof VirtualNetworkType];
