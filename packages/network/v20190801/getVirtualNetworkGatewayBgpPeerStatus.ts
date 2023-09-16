import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
 */
export function getVirtualNetworkGatewayBgpPeerStatus(args: GetVirtualNetworkGatewayBgpPeerStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayBgpPeerStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190801:getVirtualNetworkGatewayBgpPeerStatus", {
        "peer": args.peer,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayBgpPeerStatusArgs {
    /**
     * The IP address of the peer to retrieve the status of.
     */
    peer?: string;
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
 * Response for list BGP peer status API service call.
 */
export interface GetVirtualNetworkGatewayBgpPeerStatusResult {
    /**
     * List of BGP peers.
     */
    readonly value?: types.outputs.network.v20190801.BgpPeerStatusResponse[];
}
/**
 * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
 */
export function getVirtualNetworkGatewayBgpPeerStatusOutput(args: GetVirtualNetworkGatewayBgpPeerStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayBgpPeerStatusResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkGatewayBgpPeerStatus(a, opts))
}

export interface GetVirtualNetworkGatewayBgpPeerStatusOutputArgs {
    /**
     * The IP address of the peer to retrieve the status of.
     */
    peer?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}
