import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDatabaseAccountGremlinGraph(args: GetDatabaseAccountGremlinGraphArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAccountGremlinGraphResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getDatabaseAccountGremlinGraph", {
        "accountName": args.accountName,
        "databaseName": args.databaseName,
        "graphName": args.graphName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseAccountGremlinGraphArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * Cosmos DB database name.
     */
    databaseName: string;
    /**
     * Cosmos DB graph name.
     */
    graphName: string;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB Gremlin graph.
 */
export interface GetDatabaseAccountGremlinGraphResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The conflict resolution policy for the graph.
     */
    readonly conflictResolutionPolicy?: types.outputs.ConflictResolutionPolicyResponse;
    /**
     * Default time to live
     */
    readonly defaultTtl?: number;
    /**
     * A system generated property representing the resource etag required for optimistic concurrency control.
     */
    readonly etag?: string;
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
     */
    readonly indexingPolicy?: types.outputs.IndexingPolicyResponse;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * The configuration of the partition key to be used for partitioning data into multiple partitions
     */
    readonly partitionKey?: types.outputs.ContainerPartitionKeyResponse;
    /**
     * A system generated property. A unique identifier.
     */
    readonly rid?: string;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {[key: string]: string};
    /**
     * A system generated property that denotes the last updated timestamp of the resource.
     */
    readonly ts?: any;
    /**
     * The type of Azure resource.
     */
    readonly type: string;
    /**
     * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
     */
    readonly uniqueKeyPolicy?: types.outputs.UniqueKeyPolicyResponse;
}
/**
 * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2016-03-31.
 *
 * Other available API versions: 2015-04-01, 2015-04-08, 2015-11-06, 2016-03-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDatabaseAccountGremlinGraphOutput(args: GetDatabaseAccountGremlinGraphOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseAccountGremlinGraphResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getDatabaseAccountGremlinGraph", {
        "accountName": args.accountName,
        "databaseName": args.databaseName,
        "graphName": args.graphName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseAccountGremlinGraphOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Cosmos DB graph name.
     */
    graphName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}