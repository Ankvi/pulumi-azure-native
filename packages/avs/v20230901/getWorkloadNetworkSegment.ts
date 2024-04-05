import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadNetworkSegment
 */
export function getWorkloadNetworkSegment(args: GetWorkloadNetworkSegmentArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkSegmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getWorkloadNetworkSegment", {
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
     * The ID of the NSX Segment
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a WorkloadNetworkSegment
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
     * The ID of the NSX Segment
     */
    segmentId: pulumi.Input<string>;
}