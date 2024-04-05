import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified ExpressRouteConnection.
 */
export function getExpressRouteConnection(args: GetExpressRouteConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230501:getExpressRouteConnection", {
        "connectionName": args.connectionName,
        "expressRouteGatewayName": args.expressRouteGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteConnectionArgs {
    /**
     * The name of the ExpressRoute connection.
     */
    connectionName: string;
    /**
     * The name of the ExpressRoute gateway.
     */
    expressRouteGatewayName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * ExpressRouteConnection resource.
 */
export interface GetExpressRouteConnectionResult {
    /**
     * Authorization key to establish the connection.
     */
    readonly authorizationKey?: string;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: boolean;
    /**
     * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
     */
    readonly enablePrivateLinkFastPath?: boolean;
    /**
     * The ExpressRoute circuit peering.
     */
    readonly expressRouteCircuitPeering: types.outputs.ExpressRouteCircuitPeeringIdResponse;
    /**
     * Enable FastPath to vWan Firewall hub.
     */
    readonly expressRouteGatewayBypass?: boolean;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the express route connection resource.
     */
    readonly provisioningState: string;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: types.outputs.RoutingConfigurationResponse;
    /**
     * The routing weight associated to the connection.
     */
    readonly routingWeight?: number;
}
/**
 * Gets the specified ExpressRouteConnection.
 */
export function getExpressRouteConnectionOutput(args: GetExpressRouteConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressRouteConnectionResult> {
    return pulumi.output(args).apply((a: any) => getExpressRouteConnection(a, opts))
}

export interface GetExpressRouteConnectionOutputArgs {
    /**
     * The name of the ExpressRoute connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the ExpressRoute gateway.
     */
    expressRouteGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}