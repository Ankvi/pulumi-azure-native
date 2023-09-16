import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
 */
export function getTableResourceTable(args: GetTableResourceTableArgs, opts?: pulumi.InvokeOptions): Promise<GetTableResourceTableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20230315preview:getTableResourceTable", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "tableName": args.tableName,
    }, opts);
}

export interface GetTableResourceTableArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Cosmos DB table name.
     */
    tableName: string;
}

/**
 * An Azure Cosmos DB Table.
 */
export interface GetTableResourceTableResult {
    /**
     * The unique resource identifier of the ARM resource.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.documentdb.v20230315preview.ManagedServiceIdentityResponse;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    readonly options?: types.outputs.documentdb.v20230315preview.TableGetPropertiesResponseOptions;
    readonly resource?: types.outputs.documentdb.v20230315preview.TableGetPropertiesResponseResource;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
 */
export function getTableResourceTableOutput(args: GetTableResourceTableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTableResourceTableResult> {
    return pulumi.output(args).apply((a: any) => getTableResourceTable(a, opts))
}

export interface GetTableResourceTableOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB table name.
     */
    tableName: pulumi.Input<string>;
}
