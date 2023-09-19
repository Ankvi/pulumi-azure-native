import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified virtual network peering.
 */
export function getVirtualNetworkPeering(args: GetVirtualNetworkPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkPeeringResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190601:getVirtualNetworkPeering", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
        "virtualNetworkPeeringName": args.virtualNetworkPeeringName,
    }, opts);
}

export interface GetVirtualNetworkPeeringArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
    /**
     * The name of the virtual network peering.
     */
    virtualNetworkPeeringName: string;
}

/**
 * Peerings in a virtual network resource.
 */
export interface GetVirtualNetworkPeeringResult {
    /**
     * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
     */
    readonly allowForwardedTraffic?: boolean;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    readonly allowGatewayTransit?: boolean;
    /**
     * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
     */
    readonly allowVirtualNetworkAccess?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The status of the virtual network peering.
     */
    readonly peeringState?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The reference of the remote virtual network address space.
     */
    readonly remoteAddressSpace?: types.outputs.AddressSpaceResponse;
    /**
     * The reference of the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
     */
    readonly remoteVirtualNetwork?: types.outputs.SubResourceResponse;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    readonly useRemoteGateways?: boolean;
}
/**
 * Gets the specified virtual network peering.
 */
export function getVirtualNetworkPeeringOutput(args: GetVirtualNetworkPeeringOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkPeeringResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkPeering(a, opts))
}

export interface GetVirtualNetworkPeeringOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
    /**
     * The name of the virtual network peering.
     */
    virtualNetworkPeeringName: pulumi.Input<string>;
}
