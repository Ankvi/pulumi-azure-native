import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided name.
 */
export function getMongoDBResourceMongoDBDatabase(args: GetMongoDBResourceMongoDBDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetMongoDBResourceMongoDBDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20231115:getMongoDBResourceMongoDBDatabase", {
        "accountName": args.accountName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMongoDBResourceMongoDBDatabaseArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * Cosmos DB database name.
     */
    databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB MongoDB database.
 */
export interface GetMongoDBResourceMongoDBDatabaseResult {
    /**
     * The unique resource identifier of the ARM resource.
     */
    readonly id: string;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    readonly options?: types.outputs.MongoDBDatabaseGetPropertiesResponseOptions;
    readonly resource?: types.outputs.MongoDBDatabaseGetPropertiesResponseResource;
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
 * Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided name.
 */
export function getMongoDBResourceMongoDBDatabaseOutput(args: GetMongoDBResourceMongoDBDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongoDBResourceMongoDBDatabaseResult> {
    return pulumi.output(args).apply((a: any) => getMongoDBResourceMongoDBDatabase(a, opts))
}

export interface GetMongoDBResourceMongoDBDatabaseOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
