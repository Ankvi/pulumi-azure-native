import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the access keys for the RedisEnterprise database.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2020-10-01-preview, 2021-02-01-preview, 2021-03-01, 2021-08-01, 2022-01-01, 2022-11-01-preview, 2023-03-01-preview, 2023-07-01, 2023-08-01-preview, 2023-10-01-preview, 2023-11-01, 2024-02-01, 2024-06-01-preview, 2024-09-01-preview, 2024-10-01, 2025-04-01, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redisenterprise [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listDatabaseKeys(args: ListDatabaseKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabaseKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redisenterprise:listDatabaseKeys", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDatabaseKeysArgs {
    /**
     * The name of the Redis Enterprise cluster.
     */
    clusterName: string;
    /**
     * The name of the Redis Enterprise database.
     */
    databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The secret access keys used for authenticating connections to redis
 */
export interface ListDatabaseKeysResult {
    /**
     * The current primary key that clients can use to authenticate
     */
    readonly primaryKey: string;
    /**
     * The current secondary key that clients can use to authenticate
     */
    readonly secondaryKey: string;
}
/**
 * Retrieves the access keys for the RedisEnterprise database.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2020-10-01-preview, 2021-02-01-preview, 2021-03-01, 2021-08-01, 2022-01-01, 2022-11-01-preview, 2023-03-01-preview, 2023-07-01, 2023-08-01-preview, 2023-10-01-preview, 2023-11-01, 2024-02-01, 2024-06-01-preview, 2024-09-01-preview, 2024-10-01, 2025-04-01, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redisenterprise [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listDatabaseKeysOutput(args: ListDatabaseKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDatabaseKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redisenterprise:listDatabaseKeys", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDatabaseKeysOutputArgs {
    /**
     * The name of the Redis Enterprise cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the Redis Enterprise database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}