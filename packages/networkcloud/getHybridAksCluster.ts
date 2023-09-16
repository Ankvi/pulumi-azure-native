import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the additional details related to the provided Hybrid AKS provisioned cluster.
 * Azure REST API version: 2022-12-12-preview.
 */
export function getHybridAksCluster(args: GetHybridAksClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridAksClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getHybridAksCluster", {
        "hybridAksClusterName": args.hybridAksClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHybridAksClusterArgs {
    /**
     * The name of the Hybrid AKS cluster.
     */
    hybridAksClusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The details are specific to the Network Cloud use of the Hybrid AKS cluster.
 */
export interface GetHybridAksClusterResult {
    /**
     * The list of resource IDs for the workload networks associated with the Hybrid AKS cluster. It can be any of l2Networks, l3Networks, or trunkedNetworks resources. This field will also contain one cloudServicesNetwork and one defaultCniNetwork.
     */
    readonly associatedNetworkIds: string[];
    /**
     * The resource ID of the associated cloud services network.
     */
    readonly cloudServicesNetworkId: string;
    /**
     * The resource ID of the Network Cloud cluster hosting the Hybrid AKS cluster.
     */
    readonly clusterId: string;
    /**
     * The number of control plane node VMs.
     */
    readonly controlPlaneCount: number;
    /**
     * The list of node configurations detailing associated VMs that are part of the control plane nodes of this Hybrid AKS cluster.
     */
    readonly controlPlaneNodes: types.outputs.networkcloud.NodeConfigurationResponse[];
    /**
     * The resource ID of the associated default CNI network.
     */
    readonly defaultCniNetworkId: string;
    /**
     * The more detailed status of this Hybrid AKS cluster.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.networkcloud.ExtendedLocationResponse;
    /**
     * The resource ID of the Hybrid AKS cluster that this additional information is for.
     */
    readonly hybridAksProvisionedClusterId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The provisioning state of the Hybrid AKS cluster resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.networkcloud.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The resource IDs of volumes that are attached to the Hybrid AKS cluster.
     */
    readonly volumes: string[];
    /**
     * The number of worker node VMs.
     */
    readonly workerCount: number;
    /**
     * The list of node configurations detailing associated VMs that are part of the worker nodes of this Hybrid AKS cluster.
     */
    readonly workerNodes: types.outputs.networkcloud.NodeConfigurationResponse[];
}
/**
 * Get the additional details related to the provided Hybrid AKS provisioned cluster.
 * Azure REST API version: 2022-12-12-preview.
 */
export function getHybridAksClusterOutput(args: GetHybridAksClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHybridAksClusterResult> {
    return pulumi.output(args).apply((a: any) => getHybridAksCluster(a, opts))
}

export interface GetHybridAksClusterOutputArgs {
    /**
     * The name of the Hybrid AKS cluster.
     */
    hybridAksClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
