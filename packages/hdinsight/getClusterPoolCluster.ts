import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a HDInsight cluster.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hdinsight [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterPoolCluster(args: GetClusterPoolClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterPoolClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hdinsight:getClusterPoolCluster", {
        "clusterName": args.clusterName,
        "clusterPoolName": args.clusterPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterPoolClusterArgs {
    /**
     * The name of the HDInsight cluster.
     */
    clusterName: string;
    /**
     * The name of the cluster pool.
     */
    clusterPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The cluster.
 */
export interface GetClusterPoolClusterResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Cluster profile.
     */
    readonly clusterProfile: types.outputs.ClusterProfileResponse;
    /**
     * The type of cluster.
     */
    readonly clusterType: string;
    /**
     * The compute profile.
     */
    readonly computeProfile: types.outputs.ClusterPoolComputeProfileResponse;
    /**
     * A unique id generated by the RP to identify the resource.
     */
    readonly deploymentId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Business status of the resource.
     */
    readonly status: string;
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
 * Gets a HDInsight cluster.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hdinsight [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterPoolClusterOutput(args: GetClusterPoolClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterPoolClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hdinsight:getClusterPoolCluster", {
        "clusterName": args.clusterName,
        "clusterPoolName": args.clusterPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterPoolClusterOutputArgs {
    /**
     * The name of the HDInsight cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the cluster pool.
     */
    clusterPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}