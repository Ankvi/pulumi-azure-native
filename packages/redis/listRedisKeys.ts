import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2015-08-01, 2016-04-01, 2017-02-01, 2017-10-01, 2018-03-01, 2019-07-01, 2020-06-01, 2020-12-01, 2021-06-01, 2022-05-01, 2022-06-01, 2023-04-01, 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listRedisKeys(args: ListRedisKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListRedisKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redis:listRedisKeys", {
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
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2015-08-01, 2016-04-01, 2017-02-01, 2017-10-01, 2018-03-01, 2019-07-01, 2020-06-01, 2020-12-01, 2021-06-01, 2022-05-01, 2022-06-01, 2023-04-01, 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listRedisKeysOutput(args: ListRedisKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListRedisKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redis:listRedisKeys", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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