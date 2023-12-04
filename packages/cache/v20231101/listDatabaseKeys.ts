import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the access keys for the RedisEnterprise database.
 */
export function listDatabaseKeys(args: ListDatabaseKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabaseKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache/v20231101:listDatabaseKeys", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDatabaseKeysArgs {
    /**
     * The name of the RedisEnterprise cluster.
     */
    clusterName: string;
    /**
     * The name of the database.
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
 */
export function listDatabaseKeysOutput(args: ListDatabaseKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDatabaseKeysResult> {
    return pulumi.output(args).apply((a: any) => listDatabaseKeys(a, opts))
}

export interface ListDatabaseKeysOutputArgs {
    /**
     * The name of the RedisEnterprise cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}