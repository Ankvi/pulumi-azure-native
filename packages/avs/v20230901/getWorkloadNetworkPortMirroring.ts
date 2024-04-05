import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadNetworkPortMirroring
 */
export function getWorkloadNetworkPortMirroring(args: GetWorkloadNetworkPortMirroringArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkPortMirroringResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getWorkloadNetworkPortMirroring", {
        "portMirroringId": args.portMirroringId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkPortMirroringArgs {
    /**
     * ID of the NSX port mirroring profile.
     */
    portMirroringId: string;
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
 * NSX Port Mirroring
 */
export interface GetWorkloadNetworkPortMirroringResult {
    /**
     * Destination VM Group.
     */
    readonly destination?: string;
    /**
     * Direction of port mirroring profile.
     */
    readonly direction?: string;
    /**
     * Display name of the port mirroring profile.
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
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * NSX revision number.
     */
    readonly revision?: number;
    /**
     * Source VM Group.
     */
    readonly source?: string;
    /**
     * Port Mirroring Status.
     */
    readonly status: string;
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
 * Get a WorkloadNetworkPortMirroring
 */
export function getWorkloadNetworkPortMirroringOutput(args: GetWorkloadNetworkPortMirroringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkPortMirroringResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkPortMirroring(a, opts))
}

export interface GetWorkloadNetworkPortMirroringOutputArgs {
    /**
     * ID of the NSX port mirroring profile.
     */
    portMirroringId: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}