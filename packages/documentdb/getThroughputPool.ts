import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB Throughput Pool
 *
 * Uses Azure REST API version 2023-11-15-preview.
 *
 * Other available API versions: 2024-02-15-preview, 2024-05-15-preview, 2024-09-01-preview, 2024-12-01-preview.
 */
export function getThroughputPool(args: GetThroughputPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetThroughputPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getThroughputPool", {
        "resourceGroupName": args.resourceGroupName,
        "throughputPoolName": args.throughputPoolName,
    }, opts);
}

export interface GetThroughputPoolArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Cosmos DB Throughput Pool name.
     */
    throughputPoolName: string;
}

/**
 * An Azure Cosmos DB Throughputpool.
 */
export interface GetThroughputPoolResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Value for throughput to be shared among CosmosDB resources in the pool.
     */
    readonly maxThroughput?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A provisioning state of the ThroughputPool.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves the properties of an existing Azure Cosmos DB Throughput Pool
 *
 * Uses Azure REST API version 2023-11-15-preview.
 *
 * Other available API versions: 2024-02-15-preview, 2024-05-15-preview, 2024-09-01-preview, 2024-12-01-preview.
 */
export function getThroughputPoolOutput(args: GetThroughputPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetThroughputPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:getThroughputPool", {
        "resourceGroupName": args.resourceGroupName,
        "throughputPoolName": args.throughputPoolName,
    }, opts);
}

export interface GetThroughputPoolOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB Throughput Pool name.
     */
    throughputPoolName: pulumi.Input<string>;
}