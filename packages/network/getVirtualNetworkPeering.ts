import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified virtual network peering.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * If we need to verify the provisioning state of the remote gateway.
     */
    readonly doNotVerifyRemoteGateways?: boolean;
    /**
     * Whether only Ipv6 address space is peered for subnet peering.
     */
    readonly enableOnlyIPv6Peering?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The local address space of the local virtual network that is peered.
     */
    readonly localAddressSpace?: types.outputs.AddressSpaceResponse;
    /**
     * List of local subnet names that are subnet peered with remote virtual network.
     */
    readonly localSubnetNames?: string[];
    /**
     * The current local address space of the local virtual network that is peered.
     */
    readonly localVirtualNetworkAddressSpace?: types.outputs.AddressSpaceResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Whether complete virtual network address space is peered.
     */
    readonly peerCompleteVnets?: boolean;
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
     * List of remote subnet names from remote virtual network that are subnet peered.
     */
    readonly remoteSubnetNames?: string[];
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
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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