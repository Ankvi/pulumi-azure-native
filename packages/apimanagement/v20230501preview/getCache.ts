import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the Cache specified by its identifier.
 */
export function getCache(args: GetCacheArgs, opts?: pulumi.InvokeOptions): Promise<GetCacheResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230501preview:getCache", {
        "cacheId": args.cacheId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetCacheArgs {
    /**
     * Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
     */
    cacheId: string;
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
 * Cache details.
 */
export interface GetCacheResult {
    /**
     * Runtime connection string to cache
     */
    readonly connectionString: string;
    /**
     * Cache description
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Original uri of entity in external system cache points to
     */
    readonly resourceId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Location identifier to use cache from (should be either 'default' or valid Azure region identifier)
     */
    readonly useFromLocation: string;
}
/**
 * Gets the details of the Cache specified by its identifier.
 */
export function getCacheOutput(args: GetCacheOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCacheResult> {
    return pulumi.output(args).apply((a: any) => getCache(a, opts))
}

export interface GetCacheOutputArgs {
    /**
     * Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
     */
    cacheId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}