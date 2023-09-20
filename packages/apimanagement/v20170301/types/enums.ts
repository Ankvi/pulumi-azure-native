export const ApiType = {
    Http: "http",
    Soap: "soap",
} as const;

export type ApiType = (typeof ApiType)[keyof typeof ApiType];

export const ApimIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

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

export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat];

export const HostnameType = {
    Proxy: "Proxy",
    Portal: "Portal",
    Management: "Management",
    Scm: "Scm",
} as const;

export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

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
} as const;

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