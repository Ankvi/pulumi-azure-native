import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists the access keys for the specified Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2021-04-01-preview, 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function listDatabaseAccountKeys(args: ListDatabaseAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabaseAccountKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:listDatabaseAccountKeys", {
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
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2021-04-01-preview, 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function listDatabaseAccountKeysOutput(args: ListDatabaseAccountKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDatabaseAccountKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:listDatabaseAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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