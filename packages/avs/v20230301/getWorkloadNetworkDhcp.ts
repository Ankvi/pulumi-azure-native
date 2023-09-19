import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NSX DHCP
 */
export function getWorkloadNetworkDhcp(args: GetWorkloadNetworkDhcpArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkDhcpResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230301:getWorkloadNetworkDhcp", {
        "dhcpId": args.dhcpId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkDhcpArgs {
    /**
     * NSX DHCP identifier. Generally the same as the DHCP display name
     */
    dhcpId: string;
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
 * NSX DHCP
 */
export interface GetWorkloadNetworkDhcpResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * DHCP properties.
     */
    readonly properties: types.outputs.WorkloadNetworkDhcpRelayResponse | types.outputs.WorkloadNetworkDhcpServerResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * NSX DHCP
 */
export function getWorkloadNetworkDhcpOutput(args: GetWorkloadNetworkDhcpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkDhcpResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkDhcp(a, opts))
}

export interface GetWorkloadNetworkDhcpOutputArgs {
    /**
     * NSX DHCP identifier. Generally the same as the DHCP display name
     */
    dhcpId: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
