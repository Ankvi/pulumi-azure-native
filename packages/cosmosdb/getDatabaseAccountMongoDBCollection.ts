import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the MongoDB collection under an existing Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDatabaseAccountMongoDBCollection(args: GetDatabaseAccountMongoDBCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAccountMongoDBCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getDatabaseAccountMongoDBCollection", {
        "accountName": args.accountName,
        "collectionName": args.collectionName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseAccountMongoDBCollectionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * Cosmos DB collection name.
     */
    collectionName: string;
    /**
     * Cosmos DB database name.
     */
    databaseName: string;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB MongoDB collection.
 */
export interface GetDatabaseAccountMongoDBCollectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * List of index keys
     */
    readonly indexes?: types.outputs.MongoIndexResponse[];
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * A key-value pair of shard keys to be applied for the request.
     */
    readonly shardKey?: {[key: string]: string};
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
 * Gets the MongoDB collection under an existing Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDatabaseAccountMongoDBCollectionOutput(args: GetDatabaseAccountMongoDBCollectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseAccountMongoDBCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getDatabaseAccountMongoDBCollection", {
        "accountName": args.accountName,
        "collectionName": args.collectionName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseAccountMongoDBCollectionOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB collection name.
     */
    collectionName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}