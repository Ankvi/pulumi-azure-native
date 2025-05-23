import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Cassandra view under an existing Azure Cosmos DB database account.
 *
 * Uses Azure REST API version 2024-12-01-preview.
 *
 * Other available API versions: 2021-07-01-preview, 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15-preview, 2022-08-15-preview, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15-preview, 2023-09-15-preview, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15-preview, 2024-09-01-preview, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCassandraResourceCassandraView(args: GetCassandraResourceCassandraViewArgs, opts?: pulumi.InvokeOptions): Promise<GetCassandraResourceCassandraViewResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getCassandraResourceCassandraView", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The unique resource identifier of the ARM resource.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    readonly options?: types.outputs.CassandraViewGetPropertiesResponseOptions;
    readonly resource?: types.outputs.CassandraViewGetPropertiesResponseResource;
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
 *
 * Uses Azure REST API version 2024-12-01-preview.
 *
 * Other available API versions: 2021-07-01-preview, 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15-preview, 2022-08-15-preview, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15-preview, 2023-09-15-preview, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15-preview, 2024-09-01-preview, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCassandraResourceCassandraViewOutput(args: GetCassandraResourceCassandraViewOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCassandraResourceCassandraViewResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getCassandraResourceCassandraView", {
        "accountName": args.accountName,
        "keyspaceName": args.keyspaceName,
        "resourceGroupName": args.resourceGroupName,
        "viewName": args.viewName,
    }, opts);
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