export const ApiType = {
    Http: "http",
    Soap: "soap",
} as const;

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
    /**
     * The contents are inline and Content Type is a OpenApi 3.0 Document in YAML format.
     */
    Openapi: "openapi",
    /**
     * The contents are inline and Content Type is a OpenApi 3.0 Document in JSON format.
     */
    Openapi_json: "openapi+json",
    /**
     * The Open Api 3.0 document is hosted on a publicly accessible internet address.
     */
    Openapi_link: "openapi-link",
} as const;

export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat];

export const PolicyContentFormat = {
    /**
     * The contents are inline and Content type is an XML document.
     */
    Xml: "xml",
    /**
     * The policy XML document is hosted on a http endpoint accessible from the API Management service.
     */
    Xml_link: "xml-link",
    /**
     * The contents are inline and Content type is a non XML encoded policy document.
     */
    Rawxml: "rawxml",
    /**
     * The policy document is not Xml encoded and is hosted on a http endpoint accessible from the API Management service.
     */
    Rawxml_link: "rawxml-link",
} as const;

export type PolicyContentFormat = (typeof PolicyContentFormat)[keyof typeof PolicyContentFormat];

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

export type SoapApiType = (typeof SoapApiType)[keyof typeof SoapApiType];
