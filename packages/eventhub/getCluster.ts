import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the resource description of the specified Event Hubs Cluster.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * The name of the Event Hubs Cluster.
     */
    clusterName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Single Event Hubs Cluster resource in List or Get operations.
 */
export interface GetClusterResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The UTC time when the Event Hubs Cluster was created.
     */
    readonly createdAt: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The metric ID of the cluster resource. Provided by the service and not modifiable by the user.
     */
    readonly metricId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the Cluster.
     */
    readonly provisioningState: string;
    /**
     * Properties of the cluster SKU.
     */
    readonly sku?: types.outputs.ClusterSkuResponse;
    /**
     * Status of the Cluster resource
     */
    readonly status: string;
    /**
     * A value that indicates whether Scaling is Supported.
     */
    readonly supportsScaling?: boolean;
    /**
     * The system meta data relating to this resource.
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
    /**
     * The UTC time when the Event Hubs Cluster was last updated.
     */
    readonly updatedAt: string;
}
/**
 * Gets the resource description of the specified Event Hubs Cluster.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventhub:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterOutputArgs {
    /**
     * The name of the Event Hubs Cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}