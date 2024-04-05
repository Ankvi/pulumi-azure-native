import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the authorization access policy specified by its identifier.
 */
export function getAuthorizationAccessPolicy(args: GetAuthorizationAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationAccessPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getAuthorizationAccessPolicy", {
        "authorizationAccessPolicyId": args.authorizationAccessPolicyId,
        "authorizationId": args.authorizationId,
        "authorizationProviderId": args.authorizationProviderId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAuthorizationAccessPolicyArgs {
    /**
     * Identifier of the authorization access policy.
     */
    authorizationAccessPolicyId: string;
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
 * Authorization access policy contract.
 */
export interface GetAuthorizationAccessPolicyResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Object Id
     */
    readonly objectId?: string;
    /**
     * The Tenant Id
     */
    readonly tenantId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the authorization access policy specified by its identifier.
 */
export function getAuthorizationAccessPolicyOutput(args: GetAuthorizationAccessPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthorizationAccessPolicyResult> {
    return pulumi.output(args).apply((a: any) => getAuthorizationAccessPolicy(a, opts))
}

export interface GetAuthorizationAccessPolicyOutputArgs {
    /**
     * Identifier of the authorization access policy.
     */
    authorizationAccessPolicyId: pulumi.Input<string>;
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