import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of L2 Connections attached to an edge site.
 */
export function listEdgeSiteL2Connections(args: ListEdgeSiteL2ConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<ListEdgeSiteL2ConnectionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital/v20240301:listEdgeSiteL2Connections", {
        "edgeSiteName": args.edgeSiteName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListEdgeSiteL2ConnectionsArgs {
    /**
     * Edge site name.
     */
    edgeSiteName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for an API service call that lists the resource IDs of resources associated with another resource.
 */
export interface ListEdgeSiteL2ConnectionsResult {
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
 * Returns a list of L2 Connections attached to an edge site.
 */
export function listEdgeSiteL2ConnectionsOutput(args: ListEdgeSiteL2ConnectionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListEdgeSiteL2ConnectionsResult> {
    return pulumi.output(args).apply((a: any) => listEdgeSiteL2Connections(a, opts))
}

export interface ListEdgeSiteL2ConnectionsOutputArgs {
    /**
     * Edge site name.
     */
    edgeSiteName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}