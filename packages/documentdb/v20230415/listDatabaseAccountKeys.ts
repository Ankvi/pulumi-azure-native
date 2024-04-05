import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists the access keys for the specified Azure Cosmos DB database account.
 */
export function listDatabaseAccountKeys(args: ListDatabaseAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabaseAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20230415:listDatabaseAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDatabaseAccountKeysArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The access keys for the given database account.
 */
export interface ListDatabaseAccountKeysResult {
    /**
     * Base 64 encoded value of the primary read-write key.
     */
    readonly primaryMasterKey: string;
    /**
     * Base 64 encoded value of the primary read-only key.
     */
    readonly primaryReadonlyMasterKey: string;
    /**
     * Base 64 encoded value of the secondary read-write key.
     */
    readonly secondaryMasterKey: string;
    /**
     * Base 64 encoded value of the secondary read-only key.
     */
    readonly secondaryReadonlyMasterKey: string;
}
/**
 * Lists the access keys for the specified Azure Cosmos DB database account.
 */
export function listDatabaseAccountKeysOutput(args: ListDatabaseAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDatabaseAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listDatabaseAccountKeys(a, opts))
}

export interface ListDatabaseAccountKeysOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}