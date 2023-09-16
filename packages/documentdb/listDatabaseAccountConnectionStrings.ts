import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the connection strings for the specified Azure Cosmos DB database account.
 * Azure REST API version: 2023-04-15.
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
    readonly connectionStrings?: types.outputs.documentdb.DatabaseAccountConnectionStringResponse[];
}
/**
 * Lists the connection strings for the specified Azure Cosmos DB database account.
 * Azure REST API version: 2023-04-15.
 */
export function listDatabaseAccountConnectionStringsOutput(args: ListDatabaseAccountConnectionStringsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDatabaseAccountConnectionStringsResult> {
    return pulumi.output(args).apply((a: any) => listDatabaseAccountConnectionStrings(a, opts))
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
