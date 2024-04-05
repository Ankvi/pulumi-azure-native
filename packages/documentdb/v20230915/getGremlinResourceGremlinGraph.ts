import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
 */
export function getGremlinResourceGremlinGraph(args: GetGremlinResourceGremlinGraphArgs, opts?: pulumi.InvokeOptions): Promise<GetGremlinResourceGremlinGraphResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20230915:getGremlinResourceGremlinGraph", {
        "accountName": args.accountName,
        "databaseName": args.databaseName,
        "graphName": args.graphName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGremlinResourceGremlinGraphArgs {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB Gremlin graph.
 */
export interface GetGremlinResourceGremlinGraphResult {
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
    readonly options?: types.outputs.GremlinGraphGetPropertiesResponseOptions;
    readonly resource?: types.outputs.GremlinGraphGetPropertiesResponseResource;
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
 * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
 */
export function getGremlinResourceGremlinGraphOutput(args: GetGremlinResourceGremlinGraphOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGremlinResourceGremlinGraphResult> {
    return pulumi.output(args).apply((a: any) => getGremlinResourceGremlinGraph(a, opts))
}

export interface GetGremlinResourceGremlinGraphOutputArgs {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}