import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided name.
 */
export function getCassandraResourceCassandraKeyspace(args: GetCassandraResourceCassandraKeyspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetCassandraResourceCassandraKeyspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20230915:getCassandraResourceCassandraKeyspace", {
        "accountName": args.accountName,
        "keyspaceName": args.keyspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCassandraResourceCassandraKeyspaceArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * Cosmos DB keyspace name.
     */
    keyspaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB Cassandra keyspace.
 */
export interface GetCassandraResourceCassandraKeyspaceResult {
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
    readonly options?: types.outputs.CassandraKeyspaceGetPropertiesResponseOptions;
    readonly resource?: types.outputs.CassandraKeyspaceGetPropertiesResponseResource;
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
 * Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided name.
 */
export function getCassandraResourceCassandraKeyspaceOutput(args: GetCassandraResourceCassandraKeyspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCassandraResourceCassandraKeyspaceResult> {
    return pulumi.output(args).apply((a: any) => getCassandraResourceCassandraKeyspace(a, opts))
}

export interface GetCassandraResourceCassandraKeyspaceOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB keyspace name.
     */
    keyspaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
