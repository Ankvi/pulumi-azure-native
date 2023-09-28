export const ApiType = {
    Http: "http",
    Soap: "soap",
} as const;

/**
 * Type of API.
 */
export type ApiType = (typeof ApiType)[keyof typeof ApiType];

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

/**
 * Form of an authorization grant, which the client uses to request the access token.
 */
export type BearerTokenSendingMethods = (typeof BearerTokenSendingMethods)[keyof typeof BearerTokenSendingMethods];

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
} as const;

/**
 * Format of the Content in which the API is getting imported.
 */
export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat];

export const Protocol = {
    Http: "http",
    Https: "https",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const SoapApiType = {
    /**
     * Imports a SOAP API having a RESTful front end.
     */
    SoapToRest: "http",
    /**
     * Imports the Soap API having a SOAP front end.
     */
    SoapPassThrough: "soap",
} as const;

/**
 * Type of Api to create. 
 *  * `http` creates a SOAP to REST API 
 *  * `soap` creates a SOAP pass-through API .
 */
export type SoapApiType = (typeof SoapApiType)[keyof typeof SoapApiType];
