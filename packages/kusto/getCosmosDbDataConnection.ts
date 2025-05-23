import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns a data connection.
 *
 * Uses Azure REST API version 2024-04-13.
 */
export function getCosmosDbDataConnection(args: GetCosmosDbDataConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetCosmosDbDataConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:getCosmosDbDataConnection", {
        "clusterName": args.clusterName,
        "dataConnectionName": args.dataConnectionName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCosmosDbDataConnectionArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the data connection.
     */
    dataConnectionName: string;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Class representing a CosmosDb data connection.
 */
export interface GetCosmosDbDataConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource ID of the Cosmos DB account used to create the data connection.
     */
    readonly cosmosDbAccountResourceId: string;
    /**
     * The name of an existing container in the Cosmos DB database.
     */
    readonly cosmosDbContainer: string;
    /**
     * The name of an existing database in the Cosmos DB account.
     */
    readonly cosmosDbDatabase: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'CosmosDb'.
     */
    readonly kind: "CosmosDb";
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The object ID of the managed identity resource.
     */
    readonly managedIdentityObjectId: string;
    /**
     * The resource ID of a managed system or user-assigned identity. The identity is used to authenticate with Cosmos DB.
     */
    readonly managedIdentityResourceId: string;
    /**
     * The name of an existing mapping rule to use when ingesting the retrieved data.
     */
    readonly mappingRuleName?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Optional. If defined, the data connection retrieves Cosmos DB documents created or updated after the specified retrieval start date.
     */
    readonly retrievalStartDate?: string;
    /**
     * The case-sensitive name of the existing target table in your cluster. Retrieved data is ingested into this table.
     */
    readonly tableName: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns a data connection.
 *
 * Uses Azure REST API version 2024-04-13.
 */
export function getCosmosDbDataConnectionOutput(args: GetCosmosDbDataConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCosmosDbDataConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:getCosmosDbDataConnection", {
        "clusterName": args.clusterName,
        "dataConnectionName": args.dataConnectionName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCosmosDbDataConnectionOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the data connection.
     */
    dataConnectionName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}