import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NSX Segment
 * Azure REST API version: 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getWorkloadNetworkSegment(args: GetWorkloadNetworkSegmentArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkSegmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getWorkloadNetworkSegment", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
        "segmentId": args.segmentId,
    }, opts);
}

export interface GetWorkloadNetworkSegmentArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * NSX Segment identifier. Generally the same as the Segment's display name
     */
    segmentId: string;
}

/**
 * NSX Segment
 */
export interface GetWorkloadNetworkSegmentResult {
    /**
     * Gateway which to connect segment to.
     */
    readonly connectedGateway?: string;
    /**
     * Display name of the segment.
     */
    readonly displayName?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Port Vif which segment is associated with.
     */
    readonly portVif: types.outputs.WorkloadNetworkSegmentPortVifResponse[];
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * NSX revision number.
     */
    readonly revision?: number;
    /**
     * Segment status.
     */
    readonly status: string;
    /**
     * Subnet which to connect segment to.
     */
    readonly subnet?: types.outputs.WorkloadNetworkSegmentSubnetResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * NSX Segment
 * Azure REST API version: 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getWorkloadNetworkSegmentOutput(args: GetWorkloadNetworkSegmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkSegmentResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkSegment(a, opts))
}

export interface GetWorkloadNetworkSegmentOutputArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * NSX Segment identifier. Generally the same as the Segment's display name
     */
    segmentId: pulumi.Input<string>;
}