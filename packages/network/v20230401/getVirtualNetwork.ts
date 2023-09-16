import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified virtual network by resource group.
 */
export function getVirtualNetwork(args: GetVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getVirtualNetwork", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface GetVirtualNetworkArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
}

/**
 * Virtual Network resource.
 */
export interface GetVirtualNetworkResult {
    /**
     * The AddressSpace that contains an array of IP address ranges that can be used by subnets.
     */
    readonly addressSpace?: types.outputs.network.v20230401.AddressSpaceResponse;
    /**
     * Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
     */
    readonly bgpCommunities?: types.outputs.network.v20230401.VirtualNetworkBgpCommunitiesResponse;
    /**
     * The DDoS protection plan associated with the virtual network.
     */
    readonly ddosProtectionPlan?: types.outputs.network.v20230401.SubResourceResponse;
    /**
     * The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
     */
    readonly dhcpOptions?: types.outputs.network.v20230401.DhcpOptionsResponse;
    /**
     * Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
     */
    readonly enableDdosProtection?: boolean;
    /**
     * Indicates if VM protection is enabled for all the subnets in the virtual network.
     */
    readonly enableVmProtection?: boolean;
    /**
     * Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet.
     */
    readonly encryption?: types.outputs.network.v20230401.VirtualNetworkEncryptionResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of the virtual network.
     */
    readonly extendedLocation?: types.outputs.network.v20230401.ExtendedLocationResponse;
    /**
     * A collection of references to flow log resources.
     */
    readonly flowLogs: types.outputs.network.v20230401.FlowLogResponse[];
    /**
     * The FlowTimeout value (in minutes) for the Virtual Network
     */
    readonly flowTimeoutInMinutes?: number;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Array of IpAllocation which reference this VNET.
     */
    readonly ipAllocations?: types.outputs.network.v20230401.SubResourceResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the virtual network resource.
     */
    readonly provisioningState: string;
    /**
     * The resourceGuid property of the Virtual Network resource.
     */
    readonly resourceGuid: string;
    /**
     * A list of subnets in a Virtual Network.
     */
    readonly subnets?: types.outputs.network.v20230401.SubnetResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * A list of peerings in a Virtual Network.
     */
    readonly virtualNetworkPeerings?: types.outputs.network.v20230401.VirtualNetworkPeeringResponse[];
}
/**
 * Gets the specified virtual network by resource group.
 */
export function getVirtualNetworkOutput(args: GetVirtualNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetwork(a, opts))
}

export interface GetVirtualNetworkOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}
