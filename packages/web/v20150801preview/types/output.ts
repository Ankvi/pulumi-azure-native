import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * API Management
     */
    export interface ApiEntityResponse {
        /**
         * API definition Url - url where the swagger can be downloaded from
         */
        apiDefinitionUrl?: string;
        /**
         * Backend service definition
         */
        backendService?: BackendServiceDefinitionResponse;
        /**
         * Capabilities
         */
        capabilities?: string[];
        /**
         * Timestamp of last connection change.
         */
        changedTime?: string;
        /**
         * Connection parameters
         */
        connectionParameters?: {[key: string]: ConnectionParameterResponse};
        /**
         * Timestamp of the connection creation
         */
        createdTime?: string;
        /**
         * the URL path of this API when exposed via APIM
         */
        generalInformation?: GeneralApiInformationResponse;
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Free form object for the data caller wants to store
         */
        metadata?: any;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * the URL path of this API when exposed via APIM
         */
        path?: string;
        /**
         * API policies
         */
        policies?: ApiPoliciesResponse;
        /**
         * Protocols supported by the front end - http/https
         */
        protocols?: string[];
        /**
         * Read only property returning the runtime endpoints where the API can be called
         */
        runtimeUrls?: string[];
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Resource type
         */
        type?: string;
    }

    /**
     * OAuth Settings Parameter
     */
    export interface ApiOAuthSettingsParameterResponse {
        /**
         * Read only: Options available to this parameter
         */
        options?: any;
        /**
         * UI definitions per culture as caller can specify the culture
         */
        uiDefinition?: any;
        /**
         * Value
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

    /**
     * API policies
     */
    export interface ApiPoliciesResponse {
        /**
         * Content of xml policy
         */
        content?: string;
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Resource type
         */
        type?: string;
    }

    /**
     * The plan object in an ARM, represents a marketplace plan
     */
    export interface ArmPlanResponse {
        /**
         * The name
         */
        name?: string;
        /**
         * The product
         */
        product?: string;
        /**
         * The promotion code
         */
        promotionCode?: string;
        /**
         * The publisher
         */
        publisher?: string;
        /**
         * Version of product
         */
        version?: string;
    }

    /**
     * API definitions with backend urls
     */
    export interface BackendServiceDefinitionResponse {
        /**
         * Service Urls per Hosting environment
         */
        hostingEnvironmentServiceUrls?: HostingEnvironmentServiceDescriptionsResponse[];
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * Url from which the swagger payload will be fetched
         */
        serviceUrl?: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Resource type
         */
        type?: string;
    }

    /**
     * Connection error
     */
    export interface ConnectionErrorResponse {
        /**
         * code of the status
         */
        code?: string;
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Description of the status
         */
        message?: string;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Resource type
         */
        type?: string;
    }

    /**
     * connection provider parameters
     */
    export interface ConnectionParameterResponse {
        /**
         * Default parameter value
         */
        defaultValue?: any;
        /**
         * Settings defining OAuth flow for the back end provider
         */
        oAuthSettings?: ApiOAuthSettingsResponse;
        /**
         * Type of the parameter
         */
        type?: string;
        /**
         * UI definitions
         */
        uiDefinition?: any;
    }

    /**
     * Connection status
     */
    export interface ConnectionStatusResponse {
        /**
         * Error details
         */
        error?: ConnectionErrorResponse;
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * Status
         */
        status?: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Target of the error
         */
        target?: string;
        /**
         * Resource type
         */
        type?: string;
    }

    export interface ConsentLinkResponse {
        /**
         * Display Name of the parameter in the connection provider's oauthSettings
         */
        displayName?: string;
        /**
         * Uri for first party login
         */
        firstPartyLoginUri?: string;
        /**
         * Uri for the consent link
         */
        link?: string;
        /**
         * Status of the link
         */
        status?: string;
    }

    /**
     * Custom logging setting value
     */
    export interface CustomLoginSettingValueResponse {
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * Option selected for this custom login setting value
         */
        option?: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Resource type
         */
        type?: string;
    }

    /**
     * expanded parent object for expansion
     */
    export interface ExpandedParentApiEntityResponse {
        /**
         * Id of connection provider
         */
        entity?: ResponseMessageEnvelopeApiEntityResponse;
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Resource type
         */
        type?: string;
    }

    /**
     * General API information
     */
    export interface GeneralApiInformationResponse {
        /**
         * DefaultConnectionNameTemplate
         */
        connectionDisplayName?: string;
        /**
         * ConnectionPortalUrl
         */
        connectionPortalUrl?: any;
        /**
         * Description
         */
        description?: string;
        /**
         * Display Name
         */
        displayName?: string;
        /**
         * Icon Url
         */
        iconUrl?: string;
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * a public accessible url of the Terms Of Use Url of this API
         */
        termsOfUseUrl?: string;
        /**
         * Resource type
         */
        type?: string;
    }

    /**
     * Back end service per ASE
     */
    export interface HostingEnvironmentServiceDescriptionsResponse {
        /**
         * Host Id
         */
        hostId?: string;
        /**
         * Hosting environment Id
         */
        hostingEnvironmentId?: string;
        /**
         * service url to use
         */
        serviceUrl?: string;
        /**
         * When the backend url is in same ASE, for performance reason this flag can be set to true
         *             If WebApp.DisableHostNames is also set it improves the security by making the back end accessible only 
         *             via API calls
         *             Note: calls will fail if this option is used but back end is not on the same ASE
         */
        useInternalRouting?: boolean;
    }

    /**
     * Custom logging setting values
     */
    export interface ParameterCustomLoginSettingValuesResponse {
        /**
         * Custom parameters.
         */
        customParameters?: {[key: string]: CustomLoginSettingValueResponse};
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Kind of resource
         */
        kind?: string;
        /**
         * Resource Location
         */
        location: string;
        /**
         * Resource Name
         */
        name?: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        /**
         * Resource type
         */
        type?: string;
    }

    /**
     * Message envelope that contains the common Azure resource manager properties and the resource provider specific content
     */
    export interface ResponseMessageEnvelopeApiEntityResponse {
        /**
         * Resource Id. Typically id is populated only for responses to GET requests. Caller is responsible for passing in this
         *             value for GET requests only.
         *             For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}
         */
        id?: string;
        /**
         * Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia
         */
        location?: string;
        /**
         * Name of resource
         */
        name?: string;
        /**
         * Azure resource manager plan
         */
        plan?: ArmPlanResponse;
        /**
         * Resource specific properties
         */
        properties?: ApiEntityResponse;
        /**
         * Sku description of the resource
         */
        sku?: SkuDescriptionResponse;
        /**
         * Tags associated with resource
         */
        tags?: {[key: string]: string};
        /**
         * Type of resource e.g Microsoft.Web/sites
         */
        type?: string;
    }

    /**
     * Describes a sku for a scalable resource
     */
    export interface SkuDescriptionResponse {
        /**
         * Current number of instances assigned to the resource
         */
        capacity?: number;
        /**
         * Family code of the resource sku
         */
        family?: string;
        /**
         * Name of the resource sku
         */
        name?: string;
        /**
         * Size specifier of the resource sku
         */
        size?: string;
        /**
         * Service Tier of the resource sku
         */
        tier?: string;
    }
