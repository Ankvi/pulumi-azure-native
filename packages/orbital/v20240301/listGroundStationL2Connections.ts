import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of L2 Connections attached to an ground station.
 */
export function listGroundStationL2Connections(args: ListGroundStationL2ConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<ListGroundStationL2ConnectionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital/v20240301:listGroundStationL2Connections", {
        "groundStationName": args.groundStationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListGroundStationL2ConnectionsArgs {
    /**
     * Ground Station name.
     */
    groundStationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for an API service call that lists the resource IDs of resources associated with another resource.
 */
export interface ListGroundStationL2ConnectionsResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * A list of Azure Resource IDs.
     */
    readonly value?: types.outputs.ResourceIdListResultResponseValue[];
}
/**
 * Returns a list of L2 Connections attached to an ground station.
 */
export function listGroundStationL2ConnectionsOutput(args: ListGroundStationL2ConnectionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGroundStationL2ConnectionsResult> {
    return pulumi.output(args).apply((a: any) => listGroundStationL2Connections(a, opts))
}

export interface ListGroundStationL2ConnectionsOutputArgs {
    /**
     * Ground Station name.
     */
    groundStationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}