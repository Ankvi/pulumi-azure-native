import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getVirtualNetworkGatewayBgpPeerStatus(args: GetVirtualNetworkGatewayBgpPeerStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayBgpPeerStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayBgpPeerStatus", {
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
    readonly value?: types.outputs.BgpPeerStatusResponse[];
}
/**
 * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getVirtualNetworkGatewayBgpPeerStatusOutput(args: GetVirtualNetworkGatewayBgpPeerStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkGatewayBgpPeerStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetworkGatewayBgpPeerStatus", {
        "peer": args.peer,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
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