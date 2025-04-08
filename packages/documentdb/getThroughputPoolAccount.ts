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
export function getThroughputPoolAccount(args: GetThroughputPoolAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetThroughputPoolAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getThroughputPoolAccount", {
        "resourceGroupName": args.resourceGroupName,
        "throughputPoolAccountName": args.throughputPoolAccountName,
        "throughputPoolName": args.throughputPoolName,
    }, opts);
}

export interface GetThroughputPoolAccountArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Cosmos DB global database account in a Throughput Pool
     */
    throughputPoolAccountName: string;
    /**
     * Cosmos DB Throughput Pool name.
     */
    throughputPoolName: string;
}

/**
 * An Azure Cosmos DB Throughputpool Account
 */
export interface GetThroughputPoolAccountResult {
    /**
     * The instance id of global database account in the throughputPool.
     */
    readonly accountInstanceId: string;
    /**
     * The location of  global database account in the throughputPool.
     */
    readonly accountLocation?: string;
    /**
     * The resource identifier of global database account in the throughputPool.
     */
    readonly accountResourceIdentifier?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A provisioning state of the ThroughputPool Account.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
export function getThroughputPoolAccountOutput(args: GetThroughputPoolAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetThroughputPoolAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:getThroughputPoolAccount", {
        "resourceGroupName": args.resourceGroupName,
        "throughputPoolAccountName": args.throughputPoolAccountName,
        "throughputPoolName": args.throughputPoolName,
    }, opts);
}

export interface GetThroughputPoolAccountOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB global database account in a Throughput Pool
     */
    throughputPoolAccountName: pulumi.Input<string>;
    /**
     * Cosmos DB Throughput Pool name.
     */
    throughputPoolName: pulumi.Input<string>;
}