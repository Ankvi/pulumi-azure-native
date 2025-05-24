import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Cluster
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01, 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getCluster", {
        "clusterName": args.clusterName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * Name of the cluster
     */
    clusterName: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A cluster resource
 */
export interface GetClusterResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The identity
     */
    readonly clusterId: number;
    /**
     * The cluster size
     */
    readonly clusterSize?: number;
    /**
     * The hosts
     */
    readonly hosts?: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The state of the cluster provisioning
     */
    readonly provisioningState: string;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Name of the vsan datastore associated with the cluster
     */
    readonly vsanDatastoreName?: string;
}
/**
 * Get a Cluster
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01, 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getCluster", {
        "clusterName": args.clusterName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterOutputArgs {
    /**
     * Name of the cluster
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}