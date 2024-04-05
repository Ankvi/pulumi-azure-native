import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get VPN client connection health detail per P2S client connection of the virtual network gateway in the specified resource group.
 */
export function getVirtualNetworkGatewayVpnclientConnectionHealth(args: GetVirtualNetworkGatewayVpnclientConnectionHealthArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayVpnclientConnectionHealthResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:getVirtualNetworkGatewayVpnclientConnectionHealth", {
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
 */
export function getVirtualNetworkGatewayVpnclientConnectionHealthOutput(args: GetVirtualNetworkGatewayVpnclientConnectionHealthOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayVpnclientConnectionHealthResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkGatewayVpnclientConnectionHealth(a, opts))
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