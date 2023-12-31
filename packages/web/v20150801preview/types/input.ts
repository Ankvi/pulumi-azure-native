import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * API Management
     */
    export interface ApiEntityArgs {
        /**
         * API definition Url - url where the swagger can be downloaded from
         */
        apiDefinitionUrl?: pulumi.Input<string>;
        /**
         * Backend service definition
         */
        backendService?: pulumi.Input<BackendServiceDefinitionArgs>;
        /**
         * Capabilities
         */
        capabilities?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Timestamp of last connection change.
         */
        changedTime?: pulumi.Input<string>;
        /**
         * Connection parameters
         */
        connectionParameters?: pulumi.Input<{[key: string]: pulumi.Input<ConnectionParameterArgs>}>;
        /**
         * Timestamp of the connection creation
         */
        createdTime?: pulumi.Input<string>;
        /**
         * the URL path of this API when exposed via APIM
         */
        generalInformation?: pulumi.Input<GeneralApiInformationArgs>;
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Free form object for the data caller wants to store
         */
        metadata?: any;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * the URL path of this API when exposed via APIM
         */
        path?: pulumi.Input<string>;
        /**
         * API policies
         */
        policies?: pulumi.Input<ApiPoliciesArgs>;
        /**
         * Protocols supported by the front end - http/https
         */
        protocols?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Read only property returning the runtime endpoints where the API can be called
         */
        runtimeUrls?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
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
     * OAuth Settings Parameter
     */
    export interface ApiOAuthSettingsParameterArgs {
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
        value?: pulumi.Input<string>;
    }

    /**
     * API policies
     */
    export interface ApiPoliciesArgs {
        /**
         * Content of xml policy
         */
        content?: pulumi.Input<string>;
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * The plan object in an ARM, represents a marketplace plan
     */
    export interface ArmPlanArgs {
        /**
         * The name
         */
        name?: pulumi.Input<string>;
        /**
         * The product
         */
        product?: pulumi.Input<string>;
        /**
         * The promotion code
         */
        promotionCode?: pulumi.Input<string>;
        /**
         * The publisher
         */
        publisher?: pulumi.Input<string>;
        /**
         * Version of product
         */
        version?: pulumi.Input<string>;
    }

    /**
     * API definitions with backend urls
     */
    export interface BackendServiceDefinitionArgs {
        /**
         * Service Urls per Hosting environment
         */
        hostingEnvironmentServiceUrls?: pulumi.Input<pulumi.Input<HostingEnvironmentServiceDescriptionsArgs>[]>;
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * Url from which the swagger payload will be fetched
         */
        serviceUrl?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Connection error
     */
    export interface ConnectionErrorArgs {
        /**
         * code of the status
         */
        code?: pulumi.Input<string>;
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Description of the status
         */
        message?: pulumi.Input<string>;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * connection provider parameters
     */
    export interface ConnectionParameterArgs {
        /**
         * Default parameter value
         */
        defaultValue?: any;
        /**
         * Settings defining OAuth flow for the back end provider
         */
        oAuthSettings?: pulumi.Input<ApiOAuthSettingsArgs>;
        /**
         * Type of the parameter
         */
        type?: pulumi.Input<enums.ConnectionParameterType>;
        /**
         * UI definitions
         */
        uiDefinition?: any;
    }

    /**
     * Connection status
     */
    export interface ConnectionStatusArgs {
        /**
         * Error details
         */
        error?: pulumi.Input<ConnectionErrorArgs>;
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * Status
         */
        status?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Target of the error
         */
        target?: pulumi.Input<string>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
    }

    export interface ConsentLinkInputParameter {
        /**
         * AAD OID (user or group) if the principal type is ActiveDirectory.
         *             MSA PUID if the principal type is MicrosoftAccount.
         */
        objectId?: string;
        /**
         * Name of the parameter in the connection provider's oauthSettings
         */
        parameterName?: string;
        /**
         * Principal type
         */
        principalType?: enums.PrincipalType;
        /**
         * Name of the parameter in the connection provider's oauthSettings
         */
        redirectUrl?: string;
        /**
         * Tenant Id
         */
        tenantId?: string;
    }

    export interface ConsentLinkInputParameterArgs {
        /**
         * AAD OID (user or group) if the principal type is ActiveDirectory.
         *             MSA PUID if the principal type is MicrosoftAccount.
         */
        objectId?: pulumi.Input<string>;
        /**
         * Name of the parameter in the connection provider's oauthSettings
         */
        parameterName?: pulumi.Input<string>;
        /**
         * Principal type
         */
        principalType?: pulumi.Input<enums.PrincipalType>;
        /**
         * Name of the parameter in the connection provider's oauthSettings
         */
        redirectUrl?: pulumi.Input<string>;
        /**
         * Tenant Id
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Custom logging setting value
     */
    export interface CustomLoginSettingValueArgs {
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * Option selected for this custom login setting value
         */
        option?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * expanded parent object for expansion
     */
    export interface ExpandedParentApiEntityArgs {
        /**
         * Id of connection provider
         */
        entity?: pulumi.Input<ResponseMessageEnvelopeApiEntityArgs>;
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * General API information
     */
    export interface GeneralApiInformationArgs {
        /**
         * DefaultConnectionNameTemplate
         */
        connectionDisplayName?: pulumi.Input<string>;
        /**
         * ConnectionPortalUrl
         */
        connectionPortalUrl?: any;
        /**
         * Description
         */
        description?: pulumi.Input<string>;
        /**
         * Display Name
         */
        displayName?: pulumi.Input<string>;
        /**
         * Icon Url
         */
        iconUrl?: pulumi.Input<string>;
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * a public accessible url of the Terms Of Use Url of this API
         */
        termsOfUseUrl?: pulumi.Input<string>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Back end service per ASE
     */
    export interface HostingEnvironmentServiceDescriptionsArgs {
        /**
         * Host Id
         */
        hostId?: pulumi.Input<string>;
        /**
         * Hosting environment Id
         */
        hostingEnvironmentId?: pulumi.Input<string>;
        /**
         * service url to use
         */
        serviceUrl?: pulumi.Input<string>;
        /**
         * When the backend url is in same ASE, for performance reason this flag can be set to true
         *             If WebApp.DisableHostNames is also set it improves the security by making the back end accessible only 
         *             via API calls
         *             Note: calls will fail if this option is used but back end is not on the same ASE
         */
        useInternalRouting?: pulumi.Input<boolean>;
    }

    /**
     * Custom logging setting values
     */
    export interface ParameterCustomLoginSettingValuesArgs {
        /**
         * Custom parameters.
         */
        customParameters?: pulumi.Input<{[key: string]: pulumi.Input<CustomLoginSettingValueArgs>}>;
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
        /**
         * Kind of resource
         */
        kind?: pulumi.Input<string>;
        /**
         * Resource Location
         */
        location: pulumi.Input<string>;
        /**
         * Resource Name
         */
        name?: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Resource type
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Message envelope that contains the common Azure resource manager properties and the resource provider specific content
     */
    export interface ResponseMessageEnvelopeApiEntityArgs {
        /**
         * Resource Id. Typically id is populated only for responses to GET requests. Caller is responsible for passing in this
         *             value for GET requests only.
         *             For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}
         */
        id?: pulumi.Input<string>;
        /**
         * Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia
         */
        location?: pulumi.Input<string>;
        /**
         * Name of resource
         */
        name?: pulumi.Input<string>;
        /**
         * Azure resource manager plan
         */
        plan?: pulumi.Input<ArmPlanArgs>;
        /**
         * Resource specific properties
         */
        properties?: pulumi.Input<ApiEntityArgs>;
        /**
         * Sku description of the resource
         */
        sku?: pulumi.Input<SkuDescriptionArgs>;
        /**
         * Tags associated with resource
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Type of resource e.g Microsoft.Web/sites
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Describes a sku for a scalable resource
     */
    export interface SkuDescriptionArgs {
        /**
         * Current number of instances assigned to the resource
         */
        capacity?: pulumi.Input<number>;
        /**
         * Family code of the resource sku
         */
        family?: pulumi.Input<string>;
        /**
         * Name of the resource sku
         */
        name?: pulumi.Input<string>;
        /**
         * Size specifier of the resource sku
         */
        size?: pulumi.Input<string>;
        /**
         * Service Tier of the resource sku
         */
        tier?: pulumi.Input<string>;
    }
