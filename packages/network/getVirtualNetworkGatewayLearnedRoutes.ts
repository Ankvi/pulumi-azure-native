import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2016-09-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getVirtualNetworkGatewayLearnedRoutes(args: GetVirtualNetworkGatewayLearnedRoutesArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayLearnedRoutesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayLearnedRoutes", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayLearnedRoutesArgs {
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
export interface GetVirtualNetworkGatewayLearnedRoutesResult {
    /**
     * List of gateway routes.
     */
    readonly value?: types.outputs.GatewayRouteResponse[];
}
/**
 * This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2016-09-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getVirtualNetworkGatewayLearnedRoutesOutput(args: GetVirtualNetworkGatewayLearnedRoutesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayLearnedRoutesResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkGatewayLearnedRoutes(a, opts))
}

export interface GetVirtualNetworkGatewayLearnedRoutesOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}