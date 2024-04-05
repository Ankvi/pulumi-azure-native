import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified peering for the ExpressRouteCrossConnection.
 */
export function getExpressRouteCrossConnectionPeering(args: GetExpressRouteCrossConnectionPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCrossConnectionPeeringResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190801:getExpressRouteCrossConnectionPeering", {
        "crossConnectionName": args.crossConnectionName,
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCrossConnectionPeeringArgs {
    /**
     * The name of the ExpressRouteCrossConnection.
     */
    crossConnectionName: string;
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
 * Peering in an ExpressRoute Cross Connection resource.
 */
export interface GetExpressRouteCrossConnectionPeeringResult {
    /**
     * The Azure ASN.
     */
    readonly azureASN: number;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
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
    readonly ipv6PeeringConfig?: types.outputs.Ipv6ExpressRouteCircuitPeeringConfigResponse;
    /**
     * Who was the last to modify the peering.
     */
    readonly lastModifiedBy?: string;
    /**
     * The Microsoft peering configuration.
     */
    readonly microsoftPeeringConfig?: types.outputs.ExpressRouteCircuitPeeringConfigResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The peer ASN.
     */
    readonly peerASN?: number;
    /**
     * The peering type.
     */
    readonly peeringType?: string;
    /**
     * The primary port.
     */
    readonly primaryAzurePort: string;
    /**
     * The primary address prefix.
     */
    readonly primaryPeerAddressPrefix?: string;
    /**
     * The provisioning state of the express route cross connection peering resource.
     */
    readonly provisioningState: string;
    /**
     * The secondary port.
     */
    readonly secondaryAzurePort: string;
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
     * The VLAN ID.
     */
    readonly vlanId?: number;
}
/**
 * Gets the specified peering for the ExpressRouteCrossConnection.
 */
export function getExpressRouteCrossConnectionPeeringOutput(args: GetExpressRouteCrossConnectionPeeringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressRouteCrossConnectionPeeringResult> {
    return pulumi.output(args).apply((a: any) => getExpressRouteCrossConnectionPeering(a, opts))
}

export interface GetExpressRouteCrossConnectionPeeringOutputArgs {
    /**
     * The name of the ExpressRouteCrossConnection.
     */
    crossConnectionName: pulumi.Input<string>;
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}