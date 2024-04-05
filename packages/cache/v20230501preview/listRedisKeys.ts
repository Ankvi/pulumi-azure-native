import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
 */
export function listRedisKeys(args: ListRedisKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListRedisKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache/v20230501preview:listRedisKeys", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListRedisKeysArgs {
    /**
     * The name of the Redis cache.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Redis cache access keys.
 */
export interface ListRedisKeysResult {
    /**
     * The current primary key that clients can use to authenticate with Redis cache.
     */
    readonly primaryKey: string;
    /**
     * The current secondary key that clients can use to authenticate with Redis cache.
     */
    readonly secondaryKey: string;
}
/**
 * Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
 */
export function listRedisKeysOutput(args: ListRedisKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListRedisKeysResult> {
    return pulumi.output(args).apply((a: any) => listRedisKeys(a, opts))
}

export interface ListRedisKeysOutputArgs {
    /**
     * The name of the Redis cache.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}