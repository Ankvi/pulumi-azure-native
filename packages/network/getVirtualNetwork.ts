import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified virtual network by resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetwork(args: GetVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetwork", {
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
    readonly addressSpace?: types.outputs.AddressSpaceResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
     */
    readonly bgpCommunities?: types.outputs.VirtualNetworkBgpCommunitiesResponse;
    /**
     * The DDoS protection plan associated with the virtual network.
     */
    readonly ddosProtectionPlan?: types.outputs.SubResourceResponse;
    /**
     * The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
     */
    readonly dhcpOptions?: types.outputs.DhcpOptionsResponse;
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
    readonly encryption?: types.outputs.VirtualNetworkEncryptionResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of the virtual network.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * A collection of references to flow log resources.
     */
    readonly flowLogs: types.outputs.FlowLogResponse[];
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
    readonly ipAllocations?: types.outputs.SubResourceResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Private Endpoint VNet Policies.
     */
    readonly privateEndpointVNetPolicies?: string;
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
    readonly subnets?: types.outputs.SubnetResponse[];
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
    readonly virtualNetworkPeerings?: types.outputs.VirtualNetworkPeeringResponse[];
}
/**
 * Gets the specified virtual network by resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkOutput(args: GetVirtualNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetwork", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
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