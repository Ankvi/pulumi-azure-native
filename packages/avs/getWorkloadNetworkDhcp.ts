import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NSX DHCP
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2021-01-01-preview, 2023-03-01, 2023-09-01.
 */
export function getWorkloadNetworkDhcp(args: GetWorkloadNetworkDhcpArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkDhcpResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getWorkloadNetworkDhcp", {
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
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2021-01-01-preview, 2023-03-01, 2023-09-01.
 */
export function getWorkloadNetworkDhcpOutput(args: GetWorkloadNetworkDhcpOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkloadNetworkDhcpResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getWorkloadNetworkDhcp", {
        "dhcpId": args.dhcpId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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