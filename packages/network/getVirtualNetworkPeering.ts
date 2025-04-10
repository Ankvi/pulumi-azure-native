import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified virtual network peering.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getVirtualNetworkPeering(args: GetVirtualNetworkPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkPeeringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkPeering", {
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
     * If we need to verify the provisioning state of the remote gateway.
     */
    readonly doNotVerifyRemoteGateways?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
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
     * The peering sync status of the virtual network peering.
     */
    readonly peeringSyncLevel?: string;
    /**
     * The provisioning state of the virtual network peering resource.
     */
    readonly provisioningState: string;
    /**
     * The reference to the address space peered with the remote virtual network.
     */
    readonly remoteAddressSpace?: types.outputs.AddressSpaceResponse;
    /**
     * The reference to the remote virtual network's Bgp Communities.
     */
    readonly remoteBgpCommunities?: types.outputs.VirtualNetworkBgpCommunitiesResponse;
    /**
     * The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
     */
    readonly remoteVirtualNetwork?: types.outputs.SubResourceResponse;
    /**
     * The reference to the current address space of the remote virtual network.
     */
    readonly remoteVirtualNetworkAddressSpace?: types.outputs.AddressSpaceResponse;
    /**
     * The reference to the remote virtual network's encryption
     */
    readonly remoteVirtualNetworkEncryption: types.outputs.VirtualNetworkEncryptionResponse;
    /**
     * The resourceGuid property of the Virtual Network peering resource.
     */
    readonly resourceGuid: string;
    /**
     * Resource type.
     */
    readonly type?: string;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    readonly useRemoteGateways?: boolean;
}
/**
 * Gets the specified virtual network peering.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getVirtualNetworkPeeringOutput(args: GetVirtualNetworkPeeringOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkPeeringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetworkPeering", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
        "virtualNetworkPeeringName": args.virtualNetworkPeeringName,
    }, opts);
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