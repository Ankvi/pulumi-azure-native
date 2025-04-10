import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the connection strings for the specified Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2021-04-01-preview, 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function listDatabaseAccountConnectionStrings(args: ListDatabaseAccountConnectionStringsArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabaseAccountConnectionStringsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:listDatabaseAccountConnectionStrings", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDatabaseAccountConnectionStringsArgs {
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
 * The connection strings for the given database account.
 */
export interface ListDatabaseAccountConnectionStringsResult {
    /**
     * An array that contains the connection strings for the Cosmos DB account.
     */
    readonly connectionStrings?: types.outputs.DatabaseAccountConnectionStringResponse[];
}
/**
 * Lists the connection strings for the specified Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2021-04-01-preview, 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function listDatabaseAccountConnectionStringsOutput(args: ListDatabaseAccountConnectionStringsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDatabaseAccountConnectionStringsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:listDatabaseAccountConnectionStrings", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDatabaseAccountConnectionStringsOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}