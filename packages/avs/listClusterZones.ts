import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of all zones and associated hosts for a cluster
 * Azure REST API version: 2022-05-01.
 */
export function listClusterZones(args: ListClusterZonesArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterZonesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:listClusterZones", {
        "clusterName": args.clusterName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListClusterZonesArgs {
    /**
     * Name of the cluster in the private cloud
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
 * List of all zones and associated hosts for a cluster
 */
export interface ListClusterZonesResult {
    /**
     * Zone and associated hosts info
     */
    readonly zones?: types.outputs.avs.ClusterZoneResponse[];
}
/**
 * List of all zones and associated hosts for a cluster
 * Azure REST API version: 2022-05-01.
 */
export function listClusterZonesOutput(args: ListClusterZonesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListClusterZonesResult> {
    return pulumi.output(args).apply((a: any) => listClusterZones(a, opts))
}

export interface ListClusterZonesOutputArgs {
    /**
     * Name of the cluster in the private cloud
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
