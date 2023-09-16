import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the authorization provider specified by its identifier.
 * Azure REST API version: 2022-08-01.
 */
export function getAuthorizationProvider(args: GetAuthorizationProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getAuthorizationProvider", {
        "authorizationProviderId": args.authorizationProviderId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAuthorizationProviderArgs {
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
 * Authorization Provider contract.
 */
export interface GetAuthorizationProviderResult {
    /**
     * Authorization Provider name. Must be 1 to 300 characters long.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity provider name. Must be 1 to 300 characters long.
     */
    readonly identityProvider?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * OAuth2 settings
     */
    readonly oauth2?: types.outputs.apimanagement.AuthorizationProviderOAuth2SettingsResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the authorization provider specified by its identifier.
 * Azure REST API version: 2022-08-01.
 */
export function getAuthorizationProviderOutput(args: GetAuthorizationProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthorizationProviderResult> {
    return pulumi.output(args).apply((a: any) => getAuthorizationProvider(a, opts))
}

export interface GetAuthorizationProviderOutputArgs {
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
