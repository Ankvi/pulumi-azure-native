import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the client secret details of the OpenID Connect Provider.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listOpenIdConnectProviderSecrets(args: ListOpenIdConnectProviderSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListOpenIdConnectProviderSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:listOpenIdConnectProviderSecrets", {
        "opid": args.opid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListOpenIdConnectProviderSecretsArgs {
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
 * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
 */
export interface ListOpenIdConnectProviderSecretsResult {
    /**
     * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
     */
    readonly clientSecret?: string;
}
/**
 * Gets the client secret details of the OpenID Connect Provider.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listOpenIdConnectProviderSecretsOutput(args: ListOpenIdConnectProviderSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListOpenIdConnectProviderSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:listOpenIdConnectProviderSecrets", {
        "opid": args.opid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListOpenIdConnectProviderSecretsOutputArgs {
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