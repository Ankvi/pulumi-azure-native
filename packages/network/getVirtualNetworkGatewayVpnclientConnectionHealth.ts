import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get VPN client connection health detail per P2S client connection of the virtual network gateway in the specified resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getVirtualNetworkGatewayVpnclientConnectionHealth(args: GetVirtualNetworkGatewayVpnclientConnectionHealthArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayVpnclientConnectionHealthResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayVpnclientConnectionHealth", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayVpnclientConnectionHealthArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: string;
}

/**
 * List of virtual network gateway vpn client connection health.
 */
export interface GetVirtualNetworkGatewayVpnclientConnectionHealthResult {
    /**
     * List of vpn client connection health.
     */
    readonly value?: types.outputs.VpnClientConnectionHealthDetailResponse[];
}
/**
 * Get VPN client connection health detail per P2S client connection of the virtual network gateway in the specified resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getVirtualNetworkGatewayVpnclientConnectionHealthOutput(args: GetVirtualNetworkGatewayVpnclientConnectionHealthOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayVpnclientConnectionHealthResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetworkGatewayVpnclientConnectionHealth", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayVpnclientConnectionHealthOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}