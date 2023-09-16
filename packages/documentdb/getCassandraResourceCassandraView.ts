import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Cassandra view under an existing Azure Cosmos DB database account.
 * Azure REST API version: 2023-03-15-preview.
 */
export function getCassandraResourceCassandraView(args: GetCassandraResourceCassandraViewArgs, opts?: pulumi.InvokeOptions): Promise<GetCassandraResourceCassandraViewResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getCassandraResourceCassandraView", {
        "accountName": args.accountName,
        "keyspaceName": args.keyspaceName,
        "resourceGroupName": args.resourceGroupName,
        "viewName": args.viewName,
    }, opts);
}

export interface GetCassandraResourceCassandraViewArgs {
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
    /**
     * Cosmos DB view name.
     */
    viewName: string;
}

/**
 * An Azure Cosmos DB Cassandra view.
 */
export interface GetCassandraResourceCassandraViewResult {
    /**
     * The unique resource identifier of the ARM resource.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.documentdb.ManagedServiceIdentityResponse;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    readonly options?: types.outputs.documentdb.CassandraViewGetPropertiesResponseOptions;
    readonly resource?: types.outputs.documentdb.CassandraViewGetPropertiesResponseResource;
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
 * Gets the Cassandra view under an existing Azure Cosmos DB database account.
 * Azure REST API version: 2023-03-15-preview.
 */
export function getCassandraResourceCassandraViewOutput(args: GetCassandraResourceCassandraViewOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCassandraResourceCassandraViewResult> {
    return pulumi.output(args).apply((a: any) => getCassandraResourceCassandraView(a, opts))
}

export interface GetCassandraResourceCassandraViewOutputArgs {
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
    /**
     * Cosmos DB view name.
     */
    viewName: pulumi.Input<string>;
}
