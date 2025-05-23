import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the authorization server specified by its identifier.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAuthorizationServer(args: GetAuthorizationServerArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getAuthorizationServer", {
        "authsid": args.authsid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAuthorizationServerArgs {
    /**
     * Identifier of the authorization server.
     */
    authsid: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * External OAuth authorization server settings.
 */
export interface GetAuthorizationServerResult {
    /**
     * OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
     */
    readonly authorizationEndpoint: string;
    /**
     * HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
     */
    readonly authorizationMethods?: string[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Specifies the mechanism by which access token is passed to the API. 
     */
    readonly bearerTokenSendingMethods?: string[];
    /**
     * Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
     */
    readonly clientAuthenticationMethod?: string[];
    /**
     * Client or app id registered with this authorization server.
     */
    readonly clientId: string;
    /**
     * Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
     */
    readonly clientRegistrationEndpoint: string;
    /**
     * Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly clientSecret?: string;
    /**
     * Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
     */
    readonly defaultScope?: string;
    /**
     * Description of the authorization server. Can contain HTML formatting tags.
     */
    readonly description?: string;
    /**
     * User-friendly authorization server name.
     */
    readonly displayName: string;
    /**
     * Form of an authorization grant, which the client uses to request the access token.
     */
    readonly grantTypes: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
     */
    readonly resourceOwnerPassword?: string;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
     */
    readonly resourceOwnerUsername?: string;
    /**
     * If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
     */
    readonly supportState?: boolean;
    /**
     * Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
     */
    readonly tokenBodyParameters?: types.outputs.TokenBodyParameterContractResponse[];
    /**
     * OAuth token endpoint. Contains absolute URI to entity being referenced.
     */
    readonly tokenEndpoint?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * If true, the authorization server will be used in the API documentation in the developer portal. False by default if no value is provided.
     */
    readonly useInApiDocumentation?: boolean;
    /**
     * If true, the authorization server may be used in the developer portal test console. True by default if no value is provided.
     */
    readonly useInTestConsole?: boolean;
}
/**
 * Gets the details of the authorization server specified by its identifier.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAuthorizationServerOutput(args: GetAuthorizationServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAuthorizationServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getAuthorizationServer", {
        "authsid": args.authsid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAuthorizationServerOutputArgs {
    /**
     * Identifier of the authorization server.
     */
    authsid: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}