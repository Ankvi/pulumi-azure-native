import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a cluster pool.
 */
export function getClusterPool(args: GetClusterPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hdinsight/v20231101preview:getClusterPool", {
        "clusterPoolName": args.clusterPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterPoolArgs {
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
 * Cluster pool.
 */
export interface GetClusterPoolResult {
    /**
     * Properties of underlying AKS cluster.
     */
    readonly aksClusterProfile: types.outputs.ClusterPoolResourcePropertiesResponseAksClusterProfile;
    /**
     * A resource group created by AKS, to hold the infrastructure resources created by AKS on-behalf of customers. It is generated by cluster pool name and managed resource group name by pattern: MC_{managedResourceGroupName}_{clusterPoolName}_{region}
     */
    readonly aksManagedResourceGroupName: string;
    /**
     * CLuster pool profile.
     */
    readonly clusterPoolProfile?: types.outputs.ClusterPoolResourcePropertiesResponseClusterPoolProfile;
    /**
     * CLuster pool compute profile.
     */
    readonly computeProfile: types.outputs.ClusterPoolResourcePropertiesResponseComputeProfile;
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
     * Cluster pool log analytics profile to enable OMS agent for AKS cluster.
     */
    readonly logAnalyticsProfile?: types.outputs.ClusterPoolResourcePropertiesResponseLogAnalyticsProfile;
    /**
     * A resource group created by RP, to hold the resources created by RP on-behalf of customers. It will also be used to generate aksManagedResourceGroupName by pattern: MC_{managedResourceGroupName}_{clusterPoolName}_{region}. Please make sure it meets resource group name restriction.
     */
    readonly managedResourceGroupName?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Cluster pool network profile.
     */
    readonly networkProfile?: types.outputs.ClusterPoolResourcePropertiesResponseNetworkProfile;
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
 * Gets a cluster pool.
 */
export function getClusterPoolOutput(args: GetClusterPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterPoolResult> {
    return pulumi.output(args).apply((a: any) => getClusterPool(a, opts))
}

export interface GetClusterPoolOutputArgs {
    /**
     * The name of the cluster pool.
     */
    clusterPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}