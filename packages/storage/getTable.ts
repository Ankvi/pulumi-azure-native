import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the table with the specified table name, under the specified account if it exists.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01.
 */
export function getTable(args: GetTableArgs, opts?: pulumi.InvokeOptions): Promise<GetTableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getTable", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "tableName": args.tableName,
    }, opts);
}

export interface GetTableArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
     */
    tableName: string;
}

/**
 * Properties of the table, including Id, resource name, resource type.
 */
export interface GetTableResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of stored access policies specified on the table.
     */
    readonly signedIdentifiers?: types.outputs.TableSignedIdentifierResponse[];
    /**
     * Table name under the specified account
     */
    readonly tableName: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the table with the specified table name, under the specified account if it exists.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01.
 */
export function getTableOutput(args: GetTableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTableResult> {
    return pulumi.output(args).apply((a: any) => getTable(a, opts))
}

export interface GetTableOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
     */
    tableName: pulumi.Input<string>;
}