import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface ApiConnectionDefinitionResponseProperties {
        api?: ApiReferenceResponse;
        /**
         * Timestamp of last connection change
         */
        changedTime?: string;
        /**
         * Timestamp of the connection creation
         */
        createdTime?: string;
        /**
         * Dictionary of custom parameter values
         */
        customParameterValues?: {[key: string]: string};
        /**
         * Display name
         */
        displayName?: string;
        /**
         * Dictionary of nonsecret parameter values
         */
        nonSecretParameterValues?: {[key: string]: string};
        /**
         * Dictionary of parameter values
         */
        parameterValues?: {[key: string]: string};
        /**
         * Status of the connection
         */
        statuses?: ConnectionStatusDefinitionResponse[];
        /**
         * Links to test the API connection
         */
        testLinks?: ApiConnectionTestLinkResponse[];
    }

    /**
     * API connection properties
     */
    export interface ApiConnectionTestLinkResponse {
        /**
         * HTTP Method
         */
        method?: string;
        /**
         * Test link request URI
         */
        requestUri?: string;
    }

    /**
     * OAuth settings for the API
     */
    export interface ApiOAuthSettingsParameterResponse {
        /**
         * Options available to this parameter
         */
        options?: any;
        /**
         * UI definitions per culture as caller can specify the culture
         */
        uiDefinition?: any;
        /**
         * Value of the setting
         */
        value?: string;
    }

    /**
     * OAuth settings for the connection provider
     */
    export interface ApiOAuthSettingsResponse {
        /**
         * Resource provider client id
         */
        clientId?: string;
        /**
         * Client Secret needed for OAuth
         */
        clientSecret?: string;
        /**
         * OAuth parameters key is the name of parameter
         */
        customParameters?: {[key: string]: ApiOAuthSettingsParameterResponse};
        /**
         * Identity provider
         */
        identityProvider?: string;
        /**
         * Read only properties for this oauth setting.
         */
        properties?: any;
        /**
         * Url
         */
        redirectUrl?: string;
        /**
         * OAuth scopes
         */
        scopes?: string[];
    }

    export interface ApiReferenceResponse {
        /**
         * Brand color
         */
        brandColor?: string;
        /**
         * The custom API description
         */
        description?: string;
        /**
         * The display name
         */
        displayName?: string;
        /**
         * The icon URI
         */
        iconUri?: string;
        /**
         * Resource reference id
         */
        id?: string;
        /**
         * The name of the API
         */
        name?: string;
        /**
         * The JSON representation of the swagger
         */
        swagger?: any;
        /**
         * Resource reference type
         */
        type?: string;
    }

    /**
     * The API backend service
     */
    export interface ApiResourceBackendServiceResponse {
        /**
         * The service URL
         */
        serviceUrl?: string;
    }

    /**
     * API Definitions
     */
    export interface ApiResourceDefinitionsResponse {
        /**
         * The modified swagger URL
         */
        modifiedSwaggerUrl?: string;
        /**
         * The original swagger URL
         */
        originalSwaggerUrl?: string;
    }

    /**
     * Connection error
     */
    export interface ConnectionErrorResponse {
        /**
         * Code of the status
         */
        code?: string;
        /**
         * Resource ETag
         */
        etag?: string;
        /**
         * Resource id
         */
        id: string;
        /**
         * Resource location
         */
        location?: string;
        /**
         * Description of the status
         */
        message?: string;
        /**
         * Resource name
         */
        name: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Resource type
         */
        type: string;
    }

    export interface ConnectionGatewayDefinitionResponseProperties {
        /**
         * The URI of the backend
         */
        backendUri?: string;
        /**
         * The gateway installation reference
         */
        connectionGatewayInstallation?: ConnectionGatewayReferenceResponse;
        /**
         * The gateway admin
         */
        contactInformation?: string[];
        /**
         * The gateway description
         */
        description?: string;
        /**
         * The gateway display name
         */
        displayName?: string;
        /**
         * The machine name of the gateway
         */
        machineName?: string;
        /**
         * The gateway status
         */
        status?: any;
    }

    /**
     * The gateway installation reference
     */
    export interface ConnectionGatewayReferenceResponse {
        /**
         * Resource reference id
         */
        id?: string;
        /**
         * Resource reference location
         */
        location?: string;
        /**
         * Resource reference name
         */
        name?: string;
        /**
         * Resource reference type
         */
        type?: string;
    }

    /**
     * Connection provider parameters
     */
    export interface ConnectionParameterResponse {
        /**
         * OAuth settings for the connection provider
         */
        oAuthSettings?: ApiOAuthSettingsResponse;
        /**
         * Type of the parameter
         */
        type?: string;
    }

    /**
     * Connection status
     */
    export interface ConnectionStatusDefinitionResponse {
        /**
         * Connection error
         */
        error?: ConnectionErrorResponse;
        /**
         * The gateway status
         */
        status?: string;
        /**
         * Target of the error
         */
        target?: string;
    }

    /**
     * A consent link
     */
    export interface ConsentLinkDefinitionResponse {
        /**
         * Display name of the parameter in the connection provider's OAuth settings
         */
        displayName?: string;
        /**
         * URI for first party login
         */
        firstPartyLoginUri?: string;
        /**
         * URI for the consent link
         */
        link?: string;
        /**
         * Status of the link
         */
        status?: string;
    }

    /**
     * Custom API properties
     */
    export interface CustomApiPropertiesDefinitionResponse {
        /**
         * API Definitions
         */
        apiDefinitions?: ApiResourceDefinitionsResponse;
        /**
         * The API type
         */
        apiType?: string;
        /**
         * The API backend service
         */
        backendService?: ApiResourceBackendServiceResponse;
        /**
         * Brand color
         */
        brandColor?: string;
        /**
         * The custom API capabilities
         */
        capabilities?: string[];
        /**
         * Connection parameters
         */
        connectionParameters?: {[key: string]: ConnectionParameterResponse};
        /**
         * The custom API description
         */
        description?: string;
        /**
         * The display name
         */
        displayName?: string;
        /**
         * The icon URI
         */
        iconUri?: string;
        /**
         * Runtime URLs
         */
        runtimeUrls?: string[];
        /**
         * The JSON representation of the swagger
         */
        swagger?: any;
        /**
         * The WSDL definition
         */
        wsdlDefinition?: WsdlDefinitionResponse;
    }

    /**
     * The WSDL definition
     */
    export interface WsdlDefinitionResponse {
        /**
         * The WSDL content
         */
        content?: string;
        /**
         * The WSDL import method
         */
        importMethod?: string;
        /**
         * The service with name and endpoint names
         */
        service?: WsdlServiceResponse;
        /**
         * The WSDL URL
         */
        url?: string;
    }

    /**
     * The service with name and endpoint names
     */
    export interface WsdlServiceResponse {
        /**
         * List of the endpoints' qualified names
         */
        endpointQualifiedNames?: string[];
        /**
         * The service's qualified name
         */
        qualifiedName: string;
    }
