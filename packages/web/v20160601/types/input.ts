import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface ApiConnectionDefinitionPropertiesArgs {
        api?: pulumi.Input<ApiReferenceArgs>;
        /**
         * Timestamp of last connection change
         */
        changedTime?: pulumi.Input<string>;
        /**
         * Timestamp of the connection creation
         */
        createdTime?: pulumi.Input<string>;
        /**
         * Dictionary of custom parameter values
         */
        customParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Display name
         */
        displayName?: pulumi.Input<string>;
        /**
         * Dictionary of nonsecret parameter values
         */
        nonSecretParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Dictionary of parameter values
         */
        parameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Status of the connection
         */
        statuses?: pulumi.Input<pulumi.Input<ConnectionStatusDefinitionArgs>[]>;
        /**
         * Links to test the API connection
         */
        testLinks?: pulumi.Input<pulumi.Input<ApiConnectionTestLinkArgs>[]>;
    }

    /**
     * API connection properties
     */
    export interface ApiConnectionTestLinkArgs {
        /**
         * HTTP Method
         */
        method?: pulumi.Input<string>;
        /**
         * Test link request URI
         */
        requestUri?: pulumi.Input<string>;
    }

    /**
     * OAuth settings for the connection provider
     */
    export interface ApiOAuthSettingsArgs {
        /**
         * Resource provider client id
         */
        clientId?: pulumi.Input<string>;
        /**
         * Client Secret needed for OAuth
         */
        clientSecret?: pulumi.Input<string>;
        /**
         * OAuth parameters key is the name of parameter
         */
        customParameters?: pulumi.Input<{[key: string]: pulumi.Input<ApiOAuthSettingsParameterArgs>}>;
        /**
         * Identity provider
         */
        identityProvider?: pulumi.Input<string>;
        /**
         * Read only properties for this oauth setting.
         */
        properties?: any;
        /**
         * Url
         */
        redirectUrl?: pulumi.Input<string>;
        /**
         * OAuth scopes
         */
        scopes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * OAuth settings for the API
     */
    export interface ApiOAuthSettingsParameterArgs {
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
        value?: pulumi.Input<string>;
    }

    export interface ApiReferenceArgs {
        /**
         * Brand color
         */
        brandColor?: pulumi.Input<string>;
        /**
         * The custom API description
         */
        description?: pulumi.Input<string>;
        /**
         * The display name
         */
        displayName?: pulumi.Input<string>;
        /**
         * The icon URI
         */
        iconUri?: pulumi.Input<string>;
        /**
         * Resource reference id
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the API
         */
        name?: pulumi.Input<string>;
        /**
         * The JSON representation of the swagger
         */
        swagger?: any;
        /**
         * Resource reference type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * The API backend service
     */
    export interface ApiResourceBackendServiceArgs {
        /**
         * The service URL
         */
        serviceUrl?: pulumi.Input<string>;
    }

    /**
     * API Definitions
     */
    export interface ApiResourceDefinitionsArgs {
        /**
         * The modified swagger URL
         */
        modifiedSwaggerUrl?: pulumi.Input<string>;
        /**
         * The original swagger URL
         */
        originalSwaggerUrl?: pulumi.Input<string>;
    }

    /**
     * Connection error
     */
    export interface ConnectionErrorArgs {
        /**
         * Code of the status
         */
        code?: pulumi.Input<string>;
        /**
         * Resource ETag
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource location
         */
        location?: pulumi.Input<string>;
        /**
         * Description of the status
         */
        message?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    export interface ConnectionGatewayDefinitionPropertiesArgs {
        /**
         * The URI of the backend
         */
        backendUri?: pulumi.Input<string>;
        /**
         * The gateway installation reference
         */
        connectionGatewayInstallation?: pulumi.Input<ConnectionGatewayReferenceArgs>;
        /**
         * The gateway admin
         */
        contactInformation?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The gateway description
         */
        description?: pulumi.Input<string>;
        /**
         * The gateway display name
         */
        displayName?: pulumi.Input<string>;
        /**
         * The machine name of the gateway
         */
        machineName?: pulumi.Input<string>;
        /**
         * The gateway status
         */
        status?: any;
    }

    /**
     * The gateway installation reference
     */
    export interface ConnectionGatewayReferenceArgs {
        /**
         * Resource reference id
         */
        id?: pulumi.Input<string>;
        /**
         * Resource reference location
         */
        location?: pulumi.Input<string>;
        /**
         * Resource reference name
         */
        name?: pulumi.Input<string>;
        /**
         * Resource reference type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Connection provider parameters
     */
    export interface ConnectionParameterArgs {
        /**
         * OAuth settings for the connection provider
         */
        oAuthSettings?: pulumi.Input<ApiOAuthSettingsArgs>;
        /**
         * Type of the parameter
         */
        type?: pulumi.Input<enums.ConnectionParameterType>;
    }

    /**
     * Connection status
     */
    export interface ConnectionStatusDefinitionArgs {
        /**
         * Connection error
         */
        error?: pulumi.Input<ConnectionErrorArgs>;
        /**
         * The gateway status
         */
        status?: pulumi.Input<string>;
        /**
         * Target of the error
         */
        target?: pulumi.Input<string>;
    }

    /**
     * Consent link definition
     */
    export interface ConsentLinkParameterDefinition {
        /**
         * AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount
         */
        objectId?: string;
        /**
         * Name of the parameter in the connection provider's OAuth settings
         */
        parameterName?: string;
        /**
         * Name of the parameter in the connection provider's OAuth settings
         */
        redirectUrl?: string;
        /**
         * The tenant id
         */
        tenantId?: string;
    }

    /**
     * Consent link definition
     */
    export interface ConsentLinkParameterDefinitionArgs {
        /**
         * AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount
         */
        objectId?: pulumi.Input<string>;
        /**
         * Name of the parameter in the connection provider's OAuth settings
         */
        parameterName?: pulumi.Input<string>;
        /**
         * Name of the parameter in the connection provider's OAuth settings
         */
        redirectUrl?: pulumi.Input<string>;
        /**
         * The tenant id
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Custom API properties
     */
    export interface CustomApiPropertiesDefinitionArgs {
        /**
         * API Definitions
         */
        apiDefinitions?: pulumi.Input<ApiResourceDefinitionsArgs>;
        /**
         * The API type
         */
        apiType?: pulumi.Input<string | enums.ApiType>;
        /**
         * The API backend service
         */
        backendService?: pulumi.Input<ApiResourceBackendServiceArgs>;
        /**
         * Brand color
         */
        brandColor?: pulumi.Input<string>;
        /**
         * The custom API capabilities
         */
        capabilities?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Connection parameters
         */
        connectionParameters?: pulumi.Input<{[key: string]: pulumi.Input<ConnectionParameterArgs>}>;
        /**
         * The custom API description
         */
        description?: pulumi.Input<string>;
        /**
         * The display name
         */
        displayName?: pulumi.Input<string>;
        /**
         * The icon URI
         */
        iconUri?: pulumi.Input<string>;
        /**
         * Runtime URLs
         */
        runtimeUrls?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The JSON representation of the swagger
         */
        swagger?: any;
        /**
         * The WSDL definition
         */
        wsdlDefinition?: pulumi.Input<WsdlDefinitionArgs>;
    }

    /**
     * The WSDL definition
     */
    export interface WsdlDefinitionArgs {
        /**
         * The WSDL content
         */
        content?: pulumi.Input<string>;
        /**
         * The WSDL import method
         */
        importMethod?: pulumi.Input<string | enums.WsdlImportMethod>;
        /**
         * The service with name and endpoint names
         */
        service?: pulumi.Input<WsdlServiceArgs>;
        /**
         * The WSDL URL
         */
        url?: pulumi.Input<string>;
    }

    /**
     * The service with name and endpoint names
     */
    export interface WsdlService {
        /**
         * List of the endpoints' qualified names
         */
        endpointQualifiedNames?: string[];
        /**
         * The service's qualified name
         */
        qualifiedName: string;
    }

    /**
     * The service with name and endpoint names
     */
    export interface WsdlServiceArgs {
        /**
         * List of the endpoints' qualified names
         */
        endpointQualifiedNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The service's qualified name
         */
        qualifiedName: pulumi.Input<string>;
    }
