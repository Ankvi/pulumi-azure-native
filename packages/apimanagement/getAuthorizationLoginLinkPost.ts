import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets authorization login links.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getAuthorizationLoginLinkPost(args: GetAuthorizationLoginLinkPostArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationLoginLinkPostResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getAuthorizationLoginLinkPost", {
        "authorizationId": args.authorizationId,
        "authorizationProviderId": args.authorizationProviderId,
        "postLoginRedirectUrl": args.postLoginRedirectUrl,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAuthorizationLoginLinkPostArgs {
    /**
     * Identifier of the authorization.
     */
    authorizationId: string;
    /**
     * Identifier of the authorization provider.
     */
    authorizationProviderId: string;
    /**
     * The redirect URL after login has completed.
     */
    postLoginRedirectUrl?: string;
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
 * Authorization login response contract.
 */
export interface GetAuthorizationLoginLinkPostResult {
    /**
     * The login link
     */
    readonly loginLink?: string;
}
/**
 * Gets authorization login links.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getAuthorizationLoginLinkPostOutput(args: GetAuthorizationLoginLinkPostOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthorizationLoginLinkPostResult> {
    return pulumi.output(args).apply((a: any) => getAuthorizationLoginLinkPost(a, opts))
}

export interface GetAuthorizationLoginLinkPostOutputArgs {
    /**
     * Identifier of the authorization.
     */
    authorizationId: pulumi.Input<string>;
    /**
     * Identifier of the authorization provider.
     */
    authorizationProviderId: pulumi.Input<string>;
    /**
     * The redirect URL after login has completed.
     */
    postLoginRedirectUrl?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}