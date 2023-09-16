import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the client secret details of the OpenID Connect Provider.
 */
export function listOpenIdConnectProviderSecrets(args: ListOpenIdConnectProviderSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListOpenIdConnectProviderSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220901preview:listOpenIdConnectProviderSecrets", {
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
 */
export function listOpenIdConnectProviderSecretsOutput(args: ListOpenIdConnectProviderSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListOpenIdConnectProviderSecretsResult> {
    return pulumi.output(args).apply((a: any) => listOpenIdConnectProviderSecrets(a, opts))
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
