import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * External OAuth authorization server settings.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AuthorizationServer extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizationServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AuthorizationServer {
        return new AuthorizationServer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:AuthorizationServer';

    /**
     * Returns true if the given object is an instance of AuthorizationServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizationServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthorizationServer.__pulumiType;
    }

    /**
     * OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
     */
    public readonly authorizationEndpoint!: pulumi.Output<string>;
    /**
     * HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
     */
    public readonly authorizationMethods!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Specifies the mechanism by which access token is passed to the API. 
     */
    public readonly bearerTokenSendingMethods!: pulumi.Output<string[] | undefined>;
    /**
     * Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
     */
    public readonly clientAuthenticationMethod!: pulumi.Output<string[] | undefined>;
    /**
     * Client or app id registered with this authorization server.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
     */
    public readonly clientRegistrationEndpoint!: pulumi.Output<string>;
    /**
     * Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    /**
     * Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
     */
    public readonly defaultScope!: pulumi.Output<string | undefined>;
    /**
     * Description of the authorization server. Can contain HTML formatting tags.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * User-friendly authorization server name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Form of an authorization grant, which the client uses to request the access token.
     */
    public readonly grantTypes!: pulumi.Output<string[]>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
     */
    public readonly resourceOwnerPassword!: pulumi.Output<string | undefined>;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
     */
    public readonly resourceOwnerUsername!: pulumi.Output<string | undefined>;
    /**
     * If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
     */
    public readonly supportState!: pulumi.Output<boolean | undefined>;
    /**
     * Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
     */
    public readonly tokenBodyParameters!: pulumi.Output<types.outputs.TokenBodyParameterContractResponse[] | undefined>;
    /**
     * OAuth token endpoint. Contains absolute URI to entity being referenced.
     */
    public readonly tokenEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * If true, the authorization server will be used in the API documentation in the developer portal. False by default if no value is provided.
     */
    public readonly useInApiDocumentation!: pulumi.Output<boolean | undefined>;
    /**
     * If true, the authorization server may be used in the developer portal test console. True by default if no value is provided.
     */
    public readonly useInTestConsole!: pulumi.Output<boolean | undefined>;

    /**
     * Create a AuthorizationServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.authorizationEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationEndpoint'");
            }
            if ((!args || args.clientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientId'");
            }
            if ((!args || args.clientRegistrationEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientRegistrationEndpoint'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.grantTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'grantTypes'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["authorizationEndpoint"] = args ? args.authorizationEndpoint : undefined;
            resourceInputs["authorizationMethods"] = args ? args.authorizationMethods : undefined;
            resourceInputs["authsid"] = args ? args.authsid : undefined;
            resourceInputs["bearerTokenSendingMethods"] = args ? args.bearerTokenSendingMethods : undefined;
            resourceInputs["clientAuthenticationMethod"] = args ? args.clientAuthenticationMethod : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientRegistrationEndpoint"] = args ? args.clientRegistrationEndpoint : undefined;
            resourceInputs["clientSecret"] = args ? args.clientSecret : undefined;
            resourceInputs["defaultScope"] = args ? args.defaultScope : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["grantTypes"] = args ? args.grantTypes : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceOwnerPassword"] = args ? args.resourceOwnerPassword : undefined;
            resourceInputs["resourceOwnerUsername"] = args ? args.resourceOwnerUsername : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["supportState"] = args ? args.supportState : undefined;
            resourceInputs["tokenBodyParameters"] = args ? args.tokenBodyParameters : undefined;
            resourceInputs["tokenEndpoint"] = args ? args.tokenEndpoint : undefined;
            resourceInputs["useInApiDocumentation"] = args ? args.useInApiDocumentation : undefined;
            resourceInputs["useInTestConsole"] = args ? args.useInTestConsole : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationEndpoint"] = undefined /*out*/;
            resourceInputs["authorizationMethods"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["bearerTokenSendingMethods"] = undefined /*out*/;
            resourceInputs["clientAuthenticationMethod"] = undefined /*out*/;
            resourceInputs["clientId"] = undefined /*out*/;
            resourceInputs["clientRegistrationEndpoint"] = undefined /*out*/;
            resourceInputs["clientSecret"] = undefined /*out*/;
            resourceInputs["defaultScope"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["grantTypes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceOwnerPassword"] = undefined /*out*/;
            resourceInputs["resourceOwnerUsername"] = undefined /*out*/;
            resourceInputs["supportState"] = undefined /*out*/;
            resourceInputs["tokenBodyParameters"] = undefined /*out*/;
            resourceInputs["tokenEndpoint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useInApiDocumentation"] = undefined /*out*/;
            resourceInputs["useInTestConsole"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20160707:AuthorizationServer" }, { type: "azure-native:apimanagement/v20161010:AuthorizationServer" }, { type: "azure-native:apimanagement/v20170301:AuthorizationServer" }, { type: "azure-native:apimanagement/v20180101:AuthorizationServer" }, { type: "azure-native:apimanagement/v20180601preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20190101:AuthorizationServer" }, { type: "azure-native:apimanagement/v20191201:AuthorizationServer" }, { type: "azure-native:apimanagement/v20191201preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20200601preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20201201:AuthorizationServer" }, { type: "azure-native:apimanagement/v20210101preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20210401preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20210801:AuthorizationServer" }, { type: "azure-native:apimanagement/v20211201preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20220401preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20220801:AuthorizationServer" }, { type: "azure-native:apimanagement/v20220901preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20230301preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20230501preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20230901preview:AuthorizationServer" }, { type: "azure-native:apimanagement/v20240501:AuthorizationServer" }, { type: "azure-native:apimanagement/v20240601preview:AuthorizationServer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AuthorizationServer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AuthorizationServer resource.
 */
export interface AuthorizationServerArgs {
    /**
     * OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
     */
    authorizationEndpoint: pulumi.Input<string>;
    /**
     * HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
     */
    authorizationMethods?: pulumi.Input<pulumi.Input<types.enums.AuthorizationMethod>[]>;
    /**
     * Identifier of the authorization server.
     */
    authsid?: pulumi.Input<string>;
    /**
     * Specifies the mechanism by which access token is passed to the API. 
     */
    bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string | types.enums.BearerTokenSendingMethod>[]>;
    /**
     * Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
     */
    clientAuthenticationMethod?: pulumi.Input<pulumi.Input<string | types.enums.ClientAuthenticationMethod>[]>;
    /**
     * Client or app id registered with this authorization server.
     */
    clientId: pulumi.Input<string>;
    /**
     * Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
     */
    clientRegistrationEndpoint: pulumi.Input<string>;
    /**
     * Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
     */
    defaultScope?: pulumi.Input<string>;
    /**
     * Description of the authorization server. Can contain HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * User-friendly authorization server name.
     */
    displayName: pulumi.Input<string>;
    /**
     * Form of an authorization grant, which the client uses to request the access token.
     */
    grantTypes: pulumi.Input<pulumi.Input<string | types.enums.GrantType>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
     */
    resourceOwnerPassword?: pulumi.Input<string>;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
     */
    resourceOwnerUsername?: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
     */
    supportState?: pulumi.Input<boolean>;
    /**
     * Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
     */
    tokenBodyParameters?: pulumi.Input<pulumi.Input<types.inputs.TokenBodyParameterContractArgs>[]>;
    /**
     * OAuth token endpoint. Contains absolute URI to entity being referenced.
     */
    tokenEndpoint?: pulumi.Input<string>;
    /**
     * If true, the authorization server will be used in the API documentation in the developer portal. False by default if no value is provided.
     */
    useInApiDocumentation?: pulumi.Input<boolean>;
    /**
     * If true, the authorization server may be used in the developer portal test console. True by default if no value is provided.
     */
    useInTestConsole?: pulumi.Input<boolean>;
}