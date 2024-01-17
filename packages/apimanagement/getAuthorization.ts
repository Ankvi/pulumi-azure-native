import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the authorization specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getAuthorization(args: GetAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getAuthorization", {
        "authorizationId": args.authorizationId,
        "authorizationProviderId": args.authorizationProviderId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAuthorizationArgs {
    /**
     * Identifier of the authorization.
     */
    authorizationId: string;
    /**
     * Identifier of the authorization provider.
     */
    authorizationProviderId: string;
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
 * Authorization contract.
 */
export interface GetAuthorizationResult {
    /**
     * Authorization type options
     */
    readonly authorizationType?: string;
    /**
     * Authorization error details.
     */
    readonly error?: types.outputs.AuthorizationErrorResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * OAuth2 grant type options
     */
    readonly oAuth2GrantType?: string;
    /**
     * Authorization parameters
     */
    readonly parameters?: {[key: string]: string};
    /**
     * Status of the Authorization
     */
    readonly status?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the authorization specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getAuthorizationOutput(args: GetAuthorizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthorizationResult> {
    return pulumi.output(args).apply((a: any) => getAuthorization(a, opts))
}

export interface GetAuthorizationOutputArgs {
    /**
     * Identifier of the authorization.
     */
    authorizationId: pulumi.Input<string>;
    /**
     * Identifier of the authorization provider.
     */
    authorizationProviderId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
