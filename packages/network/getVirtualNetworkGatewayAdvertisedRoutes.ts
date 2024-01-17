import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2016-09-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getVirtualNetworkGatewayAdvertisedRoutes(args: GetVirtualNetworkGatewayAdvertisedRoutesArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayAdvertisedRoutesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayAdvertisedRoutes", {
        "peer": args.peer,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayAdvertisedRoutesArgs {
    /**
     * The IP address of the peer.
     */
    peer: string;
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
 * List of virtual network gateway routes.
 */
export interface GetVirtualNetworkGatewayAdvertisedRoutesResult {
    /**
     * List of gateway routes.
     */
    readonly value?: types.outputs.GatewayRouteResponse[];
}
/**
 * This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2016-09-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getVirtualNetworkGatewayAdvertisedRoutesOutput(args: GetVirtualNetworkGatewayAdvertisedRoutesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayAdvertisedRoutesResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkGatewayAdvertisedRoutes(a, opts))
}

export interface GetVirtualNetworkGatewayAdvertisedRoutesOutputArgs {
    /**
     * The IP address of the peer.
     */
    peer: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}
