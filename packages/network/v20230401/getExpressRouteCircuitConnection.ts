import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified Express Route Circuit Connection from the specified express route circuit.
 */
export function getExpressRouteCircuitConnection(args: GetExpressRouteCircuitConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getExpressRouteCircuitConnection", {
        "circuitName": args.circuitName,
        "connectionName": args.connectionName,
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitConnectionArgs {
    /**
     * The name of the express route circuit.
     */
    circuitName: string;
    /**
     * The name of the express route circuit connection.
     */
    connectionName: string;
    /**
     * The name of the peering.
     */
    peeringName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
 */
export interface GetExpressRouteCircuitConnectionResult {
    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    readonly addressPrefix?: string;
    /**
     * The authorization key.
     */
    readonly authorizationKey?: string;
    /**
     * Express Route Circuit connection state.
     */
    readonly circuitConnectionStatus: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    readonly expressRouteCircuitPeering?: types.outputs.network.v20230401.SubResourceResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * IPv6 Address PrefixProperties of the express route circuit connection.
     */
    readonly ipv6CircuitConnectionConfig?: types.outputs.network.v20230401.Ipv6CircuitConnectionConfigResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    readonly peerExpressRouteCircuitPeering?: types.outputs.network.v20230401.SubResourceResponse;
    /**
     * The provisioning state of the express route circuit connection resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the specified Express Route Circuit Connection from the specified express route circuit.
 */
export function getExpressRouteCircuitConnectionOutput(args: GetExpressRouteCircuitConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressRouteCircuitConnectionResult> {
    return pulumi.output(args).apply((a: any) => getExpressRouteCircuitConnection(a, opts))
}

export interface GetExpressRouteCircuitConnectionOutputArgs {
    /**
     * The name of the express route circuit.
     */
    circuitName: pulumi.Input<string>;
    /**
     * The name of the express route circuit connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
