import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Virtual Router Peering.
 */
export function getVirtualRouterPeering(args: GetVirtualRouterPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualRouterPeeringResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230501:getVirtualRouterPeering", {
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
        "virtualRouterName": args.virtualRouterName,
    }, opts);
}

export interface GetVirtualRouterPeeringArgs {
    /**
     * The name of the Virtual Router Peering.
     */
    peeringName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the Virtual Router.
     */
    virtualRouterName: string;
}

/**
 * Virtual Router Peering resource.
 */
export interface GetVirtualRouterPeeringResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Name of the virtual router peering that is unique within a virtual router.
     */
    readonly name?: string;
    /**
     * Peer ASN.
     */
    readonly peerAsn?: number;
    /**
     * Peer IP.
     */
    readonly peerIp?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Peering type.
     */
    readonly type: string;
}
/**
 * Gets the specified Virtual Router Peering.
 */
export function getVirtualRouterPeeringOutput(args: GetVirtualRouterPeeringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualRouterPeeringResult> {
    return pulumi.output(args).apply((a: any) => getVirtualRouterPeering(a, opts))
}

export interface GetVirtualRouterPeeringOutputArgs {
    /**
     * The name of the Virtual Router Peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Router.
     */
    virtualRouterName: pulumi.Input<string>;
}