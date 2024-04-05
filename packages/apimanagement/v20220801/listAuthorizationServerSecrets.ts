import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the client secret details of the authorization server.
 */
export function listAuthorizationServerSecrets(args: ListAuthorizationServerSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListAuthorizationServerSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220801:listAuthorizationServerSecrets", {
        "authsid": args.authsid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListAuthorizationServerSecretsArgs {
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
 * OAuth Server Secrets Contract.
 */
export interface ListAuthorizationServerSecretsResult {
    /**
     * oAuth Authorization Server Secrets.
     */
    readonly clientSecret?: string;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
     */
    readonly resourceOwnerPassword?: string;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
     */
    readonly resourceOwnerUsername?: string;
}
/**
 * Gets the client secret details of the authorization server.
 */
export function listAuthorizationServerSecretsOutput(args: ListAuthorizationServerSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAuthorizationServerSecretsResult> {
    return pulumi.output(args).apply((a: any) => listAuthorizationServerSecrets(a, opts))
}

export interface ListAuthorizationServerSecretsOutputArgs {
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