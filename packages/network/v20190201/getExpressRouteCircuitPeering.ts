import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified peering for the express route circuit.
 */
export function getExpressRouteCircuitPeering(args: GetExpressRouteCircuitPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitPeeringResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190201:getExpressRouteCircuitPeering", {
        "circuitName": args.circuitName,
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitPeeringArgs {
    /**
     * The name of the express route circuit.
     */
    circuitName: string;
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
 * Peering in an ExpressRouteCircuit resource.
 */
export interface GetExpressRouteCircuitPeeringResult {
    /**
     * The Azure ASN.
     */
    readonly azureASN?: number;
    /**
     * The list of circuit connections associated with Azure Private Peering for this circuit.
     */
    readonly connections?: types.outputs.network.v20190201.ExpressRouteCircuitConnectionResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The ExpressRoute connection.
     */
    readonly expressRouteConnection?: types.outputs.network.v20190201.ExpressRouteConnectionIdResponse;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The IPv6 peering configuration.
     */
    readonly ipv6PeeringConfig?: types.outputs.network.v20190201.Ipv6ExpressRouteCircuitPeeringConfigResponse;
    /**
     * Gets whether the provider or the customer last modified the peering.
     */
    readonly lastModifiedBy?: string;
    /**
     * The Microsoft peering configuration.
     */
    readonly microsoftPeeringConfig?: types.outputs.network.v20190201.ExpressRouteCircuitPeeringConfigResponse;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The peer ASN.
     */
    readonly peerASN?: number;
    /**
     * The list of peered circuit connections associated with Azure Private Peering for this circuit.
     */
    readonly peeredConnections: types.outputs.network.v20190201.PeerExpressRouteCircuitConnectionResponse[];
    /**
     * The peering type.
     */
    readonly peeringType?: string;
    /**
     * The primary port.
     */
    readonly primaryAzurePort?: string;
    /**
     * The primary address prefix.
     */
    readonly primaryPeerAddressPrefix?: string;
    /**
     * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * The reference of the RouteFilter resource.
     */
    readonly routeFilter?: types.outputs.network.v20190201.RouteFilterResponse;
    /**
     * The secondary port.
     */
    readonly secondaryAzurePort?: string;
    /**
     * The secondary address prefix.
     */
    readonly secondaryPeerAddressPrefix?: string;
    /**
     * The shared key.
     */
    readonly sharedKey?: string;
    /**
     * The peering state.
     */
    readonly state?: string;
    /**
     * Gets peering stats.
     */
    readonly stats?: types.outputs.network.v20190201.ExpressRouteCircuitStatsResponse;
    /**
     * The VLAN ID.
     */
    readonly vlanId?: number;
}
/**
 * Gets the specified peering for the express route circuit.
 */
export function getExpressRouteCircuitPeeringOutput(args: GetExpressRouteCircuitPeeringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressRouteCircuitPeeringResult> {
    return pulumi.output(args).apply((a: any) => getExpressRouteCircuitPeering(a, opts))
}

export interface GetExpressRouteCircuitPeeringOutputArgs {
    /**
     * The name of the express route circuit.
     */
    circuitName: pulumi.Input<string>;
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
