import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Log Analytics cluster instance.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights/v20210601:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * Name of the Log Analytics Cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The top level Log Analytics cluster resource container.
 */
export interface GetClusterResult {
    /**
     * The list of Log Analytics workspaces associated with the cluster
     */
    readonly associatedWorkspaces?: types.outputs.AssociatedWorkspaceResponse[];
    /**
     * The cluster's billing type.
     */
    readonly billingType?: string;
    /**
     * Additional properties for capacity reservation
     */
    readonly capacityReservationProperties?: types.outputs.CapacityReservationPropertiesResponse;
    /**
     * The ID associated with the cluster.
     */
    readonly clusterId: string;
    /**
     * The cluster creation time
     */
    readonly createdDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
     */
    readonly isAvailabilityZonesEnabled?: boolean;
    /**
     * The associated key properties.
     */
    readonly keyVaultProperties?: types.outputs.KeyVaultPropertiesResponse;
    /**
     * The last time the cluster was updated.
     */
    readonly lastModifiedDate: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the cluster.
     */
    readonly provisioningState: string;
    /**
     * The sku properties.
     */
    readonly sku?: types.outputs.ClusterSkuResponse;
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
 * Gets a Log Analytics cluster instance.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult> {
    return pulumi.output(args).apply((a: any) => getCluster(a, opts))
}

export interface GetClusterOutputArgs {
    /**
     * Name of the Log Analytics Cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
