import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the detailed information about an access policy of a redis cache
 */
export function getAccessPolicy(args: GetAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache/v20230801:getAccessPolicy", {
        "accessPolicyName": args.accessPolicyName,
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyArgs {
    /**
     * The name of the access policy that is being added to the Redis cache.
     */
    accessPolicyName: string;
    /**
     * The name of the Redis cache.
     */
    cacheName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response to get/put access policy.
 */
export interface GetAccessPolicyResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Permissions for the access policy. Learn how to configure permissions at https://aka.ms/redis/AADPreRequisites
     */
    readonly permissions: string;
    /**
     * Provisioning state of access policy
     */
    readonly provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the detailed information about an access policy of a redis cache
 */
export function getAccessPolicyOutput(args: GetAccessPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessPolicyResult> {
    return pulumi.output(args).apply((a: any) => getAccessPolicy(a, opts))
}

export interface GetAccessPolicyOutputArgs {
    /**
     * The name of the access policy that is being added to the Redis cache.
     */
    accessPolicyName: pulumi.Input<string>;
    /**
     * The name of the Redis cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}