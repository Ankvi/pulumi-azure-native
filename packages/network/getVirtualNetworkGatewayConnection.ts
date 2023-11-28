import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified virtual network gateway connection by resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2016-06-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01.
 */
export function getVirtualNetworkGatewayConnection(args: GetVirtualNetworkGatewayConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayConnection", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayConnectionName": args.virtualNetworkGatewayConnectionName,
    }, opts);
}

export interface GetVirtualNetworkGatewayConnectionArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network gateway connection.
     */
    virtualNetworkGatewayConnectionName: string;
}

/**
 * A common class for general resource information.
 */
export interface GetVirtualNetworkGatewayConnectionResult {
    /**
     * The authorizationKey.
     */
    readonly authorizationKey?: string;
    /**
     * The connection mode for this connection.
     */
    readonly connectionMode?: string;
    /**
     * Connection protocol used for this connection.
     */
    readonly connectionProtocol?: string;
    /**
     * Virtual Network Gateway connection status.
     */
    readonly connectionStatus: string;
    /**
     * Gateway connection type.
     */
    readonly connectionType: string;
    /**
     * The dead peer detection timeout of this connection in seconds.
     */
    readonly dpdTimeoutSeconds?: number;
    /**
     * The egress bytes transferred in this connection.
     */
    readonly egressBytesTransferred: number;
    /**
     * List of egress NatRules.
     */
    readonly egressNatRules?: types.outputs.SubResourceResponse[];
    /**
     * EnableBgp flag.
     */
    readonly enableBgp?: boolean;
    /**
     * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
     */
    readonly enablePrivateLinkFastPath?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Bypass ExpressRoute Gateway for data forwarding.
     */
    readonly expressRouteGatewayBypass?: boolean;
    /**
     * GatewayCustomBgpIpAddresses to be used for virtual network gateway Connection.
     */
    readonly gatewayCustomBgpIpAddresses?: types.outputs.GatewayCustomBgpIpAddressIpConfigurationResponse[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The ingress bytes transferred in this connection.
     */
    readonly ingressBytesTransferred: number;
    /**
     * List of ingress NatRules.
     */
    readonly ingressNatRules?: types.outputs.SubResourceResponse[];
    /**
     * The IPSec Policies to be considered by this connection.
     */
    readonly ipsecPolicies?: types.outputs.IpsecPolicyResponse[];
    /**
     * The reference to local network gateway resource.
     */
    readonly localNetworkGateway2?: types.outputs.LocalNetworkGatewayResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The reference to peerings resource.
     */
    readonly peer?: types.outputs.SubResourceResponse;
    /**
     * The provisioning state of the virtual network gateway connection resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the virtual network gateway connection resource.
     */
    readonly resourceGuid: string;
    /**
     * The routing weight.
     */
    readonly routingWeight?: number;
    /**
     * The IPSec shared key.
     */
    readonly sharedKey?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    readonly trafficSelectorPolicies?: types.outputs.TrafficSelectorPolicyResponse[];
    /**
     * Collection of all tunnels' connection health status.
     */
    readonly tunnelConnectionStatus: types.outputs.TunnelConnectionHealthResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Use private local Azure IP for the connection.
     */
    readonly useLocalAzureIpAddress?: boolean;
    /**
     * Enable policy-based traffic selectors.
     */
    readonly usePolicyBasedTrafficSelectors?: boolean;
    /**
     * The reference to virtual network gateway resource.
     */
    readonly virtualNetworkGateway1: types.outputs.VirtualNetworkGatewayResponse;
    /**
     * The reference to virtual network gateway resource.
     */
    readonly virtualNetworkGateway2?: types.outputs.VirtualNetworkGatewayResponse;
}
/**
 * Gets the specified virtual network gateway connection by resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2016-06-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01.
 */
export function getVirtualNetworkGatewayConnectionOutput(args: GetVirtualNetworkGatewayConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayConnectionResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkGatewayConnection(a, opts))
}

export interface GetVirtualNetworkGatewayConnectionOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway connection.
     */
    virtualNetworkGatewayConnectionName: pulumi.Input<string>;
}
