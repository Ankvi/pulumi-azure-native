import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX Port Mirroring
 */
export function getWorkloadNetworkPortMirroring(args: GetWorkloadNetworkPortMirroringArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkPortMirroringResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230301:getWorkloadNetworkPortMirroring", {
        "portMirroringId": args.portMirroringId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkPortMirroringArgs {
    /**
     * NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name
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
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * NSX Port Mirroring
 */
export function getWorkloadNetworkPortMirroringOutput(args: GetWorkloadNetworkPortMirroringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkPortMirroringResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkPortMirroring(a, opts))
}

export interface GetWorkloadNetworkPortMirroringOutputArgs {
    /**
     * NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name
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
