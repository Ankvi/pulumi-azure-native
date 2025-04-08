import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets specific OpenID Connect Provider without secrets.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOpenIdConnectProvider(args: GetOpenIdConnectProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenIdConnectProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getOpenIdConnectProvider", {
        "opid": args.opid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetOpenIdConnectProviderArgs {
    /**
     * Identifier of the OpenID Connect Provider.
     */
    opid: string;
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
 * OpenId Connect Provider details.
 */
export interface GetOpenIdConnectProviderResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Client ID of developer console which is the client application.
     */
    readonly clientId: string;
    /**
     * Client Secret of developer console which is the client application.
     */
    readonly clientSecret?: string;
    /**
     * User-friendly description of OpenID Connect Provider.
     */
    readonly description?: string;
    /**
     * User-friendly OpenID Connect Provider name.
     */
    readonly displayName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Metadata endpoint URI.
     */
    readonly metadataEndpoint: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * If true, the Open ID Connect provider will be used in the API documentation in the developer portal. False by default if no value is provided.
     */
    readonly useInApiDocumentation?: boolean;
    /**
     * If true, the Open ID Connect provider may be used in the developer portal test console. True by default if no value is provided.
     */
    readonly useInTestConsole?: boolean;
}
/**
 * Gets specific OpenID Connect Provider without secrets.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOpenIdConnectProviderOutput(args: GetOpenIdConnectProviderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOpenIdConnectProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getOpenIdConnectProvider", {
        "opid": args.opid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetOpenIdConnectProviderOutputArgs {
    /**
     * Identifier of the OpenID Connect Provider.
     */
    opid: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}