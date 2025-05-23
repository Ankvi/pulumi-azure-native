import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Peerings in a virtual network resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualNetworkPeering extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkPeering {
        return new VirtualNetworkPeering(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualNetworkPeering';

    /**
     * Returns true if the given object is an instance of VirtualNetworkPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkPeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkPeering.__pulumiType;
    }

    /**
     * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
     */
    public readonly allowForwardedTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    public readonly allowGatewayTransit!: pulumi.Output<boolean | undefined>;
    /**
     * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
     */
    public readonly allowVirtualNetworkAccess!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * If we need to verify the provisioning state of the remote gateway.
     */
    public readonly doNotVerifyRemoteGateways!: pulumi.Output<boolean | undefined>;
    /**
     * Whether only Ipv6 address space is peered for subnet peering.
     */
    public readonly enableOnlyIPv6Peering!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The local address space of the local virtual network that is peered.
     */
    public readonly localAddressSpace!: pulumi.Output<types.outputs.AddressSpaceResponse | undefined>;
    /**
     * List of local subnet names that are subnet peered with remote virtual network.
     */
    public readonly localSubnetNames!: pulumi.Output<string[] | undefined>;
    /**
     * The current local address space of the local virtual network that is peered.
     */
    public readonly localVirtualNetworkAddressSpace!: pulumi.Output<types.outputs.AddressSpaceResponse | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Whether complete virtual network address space is peered.
     */
    public readonly peerCompleteVnets!: pulumi.Output<boolean | undefined>;
    /**
     * The status of the virtual network peering.
     */
    public readonly peeringState!: pulumi.Output<string | undefined>;
    /**
     * The peering sync status of the virtual network peering.
     */
    public readonly peeringSyncLevel!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the virtual network peering resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The reference to the address space peered with the remote virtual network.
     */
    public readonly remoteAddressSpace!: pulumi.Output<types.outputs.AddressSpaceResponse | undefined>;
    /**
     * The reference to the remote virtual network's Bgp Communities.
     */
    public readonly remoteBgpCommunities!: pulumi.Output<types.outputs.VirtualNetworkBgpCommunitiesResponse | undefined>;
    /**
     * List of remote subnet names from remote virtual network that are subnet peered.
     */
    public readonly remoteSubnetNames!: pulumi.Output<string[] | undefined>;
    /**
     * The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
     */
    public readonly remoteVirtualNetwork!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The reference to the current address space of the remote virtual network.
     */
    public readonly remoteVirtualNetworkAddressSpace!: pulumi.Output<types.outputs.AddressSpaceResponse | undefined>;
    /**
     * The reference to the remote virtual network's encryption
     */
    public /*out*/ readonly remoteVirtualNetworkEncryption!: pulumi.Output<types.outputs.VirtualNetworkEncryptionResponse>;
    /**
     * The resourceGuid property of the Virtual Network peering resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    public readonly useRemoteGateways!: pulumi.Output<boolean | undefined>;

    /**
     * Create a VirtualNetworkPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkPeeringArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetworkName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkName'");
            }
            resourceInputs["allowForwardedTraffic"] = args ? args.allowForwardedTraffic : undefined;
            resourceInputs["allowGatewayTransit"] = args ? args.allowGatewayTransit : undefined;
            resourceInputs["allowVirtualNetworkAccess"] = args ? args.allowVirtualNetworkAccess : undefined;
            resourceInputs["doNotVerifyRemoteGateways"] = args ? args.doNotVerifyRemoteGateways : undefined;
            resourceInputs["enableOnlyIPv6Peering"] = args ? args.enableOnlyIPv6Peering : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["localAddressSpace"] = args ? args.localAddressSpace : undefined;
            resourceInputs["localSubnetNames"] = args ? args.localSubnetNames : undefined;
            resourceInputs["localVirtualNetworkAddressSpace"] = args ? args.localVirtualNetworkAddressSpace : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peerCompleteVnets"] = args ? args.peerCompleteVnets : undefined;
            resourceInputs["peeringState"] = args ? args.peeringState : undefined;
            resourceInputs["peeringSyncLevel"] = args ? args.peeringSyncLevel : undefined;
            resourceInputs["remoteAddressSpace"] = args ? args.remoteAddressSpace : undefined;
            resourceInputs["remoteBgpCommunities"] = args ? args.remoteBgpCommunities : undefined;
            resourceInputs["remoteSubnetNames"] = args ? args.remoteSubnetNames : undefined;
            resourceInputs["remoteVirtualNetwork"] = args ? args.remoteVirtualNetwork : undefined;
            resourceInputs["remoteVirtualNetworkAddressSpace"] = args ? args.remoteVirtualNetworkAddressSpace : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["syncRemoteAddressSpace"] = args ? args.syncRemoteAddressSpace : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["useRemoteGateways"] = args ? args.useRemoteGateways : undefined;
            resourceInputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
            resourceInputs["virtualNetworkPeeringName"] = args ? args.virtualNetworkPeeringName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteVirtualNetworkEncryption"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
        } else {
            resourceInputs["allowForwardedTraffic"] = undefined /*out*/;
            resourceInputs["allowGatewayTransit"] = undefined /*out*/;
            resourceInputs["allowVirtualNetworkAccess"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["doNotVerifyRemoteGateways"] = undefined /*out*/;
            resourceInputs["enableOnlyIPv6Peering"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["localAddressSpace"] = undefined /*out*/;
            resourceInputs["localSubnetNames"] = undefined /*out*/;
            resourceInputs["localVirtualNetworkAddressSpace"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerCompleteVnets"] = undefined /*out*/;
            resourceInputs["peeringState"] = undefined /*out*/;
            resourceInputs["peeringSyncLevel"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteAddressSpace"] = undefined /*out*/;
            resourceInputs["remoteBgpCommunities"] = undefined /*out*/;
            resourceInputs["remoteSubnetNames"] = undefined /*out*/;
            resourceInputs["remoteVirtualNetwork"] = undefined /*out*/;
            resourceInputs["remoteVirtualNetworkAddressSpace"] = undefined /*out*/;
            resourceInputs["remoteVirtualNetworkEncryption"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useRemoteGateways"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20160601:VirtualNetworkPeering" }, { type: "azure-native:network/v20160901:VirtualNetworkPeering" }, { type: "azure-native:network/v20161201:VirtualNetworkPeering" }, { type: "azure-native:network/v20170301:VirtualNetworkPeering" }, { type: "azure-native:network/v20170601:VirtualNetworkPeering" }, { type: "azure-native:network/v20170801:VirtualNetworkPeering" }, { type: "azure-native:network/v20170901:VirtualNetworkPeering" }, { type: "azure-native:network/v20171001:VirtualNetworkPeering" }, { type: "azure-native:network/v20171101:VirtualNetworkPeering" }, { type: "azure-native:network/v20180101:VirtualNetworkPeering" }, { type: "azure-native:network/v20180201:VirtualNetworkPeering" }, { type: "azure-native:network/v20180401:VirtualNetworkPeering" }, { type: "azure-native:network/v20180601:VirtualNetworkPeering" }, { type: "azure-native:network/v20180701:VirtualNetworkPeering" }, { type: "azure-native:network/v20180801:VirtualNetworkPeering" }, { type: "azure-native:network/v20181001:VirtualNetworkPeering" }, { type: "azure-native:network/v20181101:VirtualNetworkPeering" }, { type: "azure-native:network/v20181201:VirtualNetworkPeering" }, { type: "azure-native:network/v20190201:VirtualNetworkPeering" }, { type: "azure-native:network/v20190401:VirtualNetworkPeering" }, { type: "azure-native:network/v20190601:VirtualNetworkPeering" }, { type: "azure-native:network/v20190701:VirtualNetworkPeering" }, { type: "azure-native:network/v20190801:VirtualNetworkPeering" }, { type: "azure-native:network/v20190901:VirtualNetworkPeering" }, { type: "azure-native:network/v20191101:VirtualNetworkPeering" }, { type: "azure-native:network/v20191201:VirtualNetworkPeering" }, { type: "azure-native:network/v20200301:VirtualNetworkPeering" }, { type: "azure-native:network/v20200401:VirtualNetworkPeering" }, { type: "azure-native:network/v20200501:VirtualNetworkPeering" }, { type: "azure-native:network/v20200601:VirtualNetworkPeering" }, { type: "azure-native:network/v20200701:VirtualNetworkPeering" }, { type: "azure-native:network/v20200801:VirtualNetworkPeering" }, { type: "azure-native:network/v20201101:VirtualNetworkPeering" }, { type: "azure-native:network/v20210201:VirtualNetworkPeering" }, { type: "azure-native:network/v20210301:VirtualNetworkPeering" }, { type: "azure-native:network/v20210501:VirtualNetworkPeering" }, { type: "azure-native:network/v20210801:VirtualNetworkPeering" }, { type: "azure-native:network/v20220101:VirtualNetworkPeering" }, { type: "azure-native:network/v20220501:VirtualNetworkPeering" }, { type: "azure-native:network/v20220701:VirtualNetworkPeering" }, { type: "azure-native:network/v20220901:VirtualNetworkPeering" }, { type: "azure-native:network/v20221101:VirtualNetworkPeering" }, { type: "azure-native:network/v20230201:VirtualNetworkPeering" }, { type: "azure-native:network/v20230401:VirtualNetworkPeering" }, { type: "azure-native:network/v20230501:VirtualNetworkPeering" }, { type: "azure-native:network/v20230601:VirtualNetworkPeering" }, { type: "azure-native:network/v20230901:VirtualNetworkPeering" }, { type: "azure-native:network/v20231101:VirtualNetworkPeering" }, { type: "azure-native:network/v20240101:VirtualNetworkPeering" }, { type: "azure-native:network/v20240301:VirtualNetworkPeering" }, { type: "azure-native:network/v20240501:VirtualNetworkPeering" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetworkPeering.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetworkPeering resource.
 */
export interface VirtualNetworkPeeringArgs {
    /**
     * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
     */
    allowForwardedTraffic?: pulumi.Input<boolean>;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    allowGatewayTransit?: pulumi.Input<boolean>;
    /**
     * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
     */
    allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    /**
     * If we need to verify the provisioning state of the remote gateway.
     */
    doNotVerifyRemoteGateways?: pulumi.Input<boolean>;
    /**
     * Whether only Ipv6 address space is peered for subnet peering.
     */
    enableOnlyIPv6Peering?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The local address space of the local virtual network that is peered.
     */
    localAddressSpace?: pulumi.Input<types.inputs.AddressSpaceArgs>;
    /**
     * List of local subnet names that are subnet peered with remote virtual network.
     */
    localSubnetNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The current local address space of the local virtual network that is peered.
     */
    localVirtualNetworkAddressSpace?: pulumi.Input<types.inputs.AddressSpaceArgs>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether complete virtual network address space is peered.
     */
    peerCompleteVnets?: pulumi.Input<boolean>;
    /**
     * The status of the virtual network peering.
     */
    peeringState?: pulumi.Input<string | types.enums.VirtualNetworkPeeringState>;
    /**
     * The peering sync status of the virtual network peering.
     */
    peeringSyncLevel?: pulumi.Input<string | types.enums.VirtualNetworkPeeringLevel>;
    /**
     * The reference to the address space peered with the remote virtual network.
     */
    remoteAddressSpace?: pulumi.Input<types.inputs.AddressSpaceArgs>;
    /**
     * The reference to the remote virtual network's Bgp Communities.
     */
    remoteBgpCommunities?: pulumi.Input<types.inputs.VirtualNetworkBgpCommunitiesArgs>;
    /**
     * List of remote subnet names from remote virtual network that are subnet peered.
     */
    remoteSubnetNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
     */
    remoteVirtualNetwork?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The reference to the current address space of the remote virtual network.
     */
    remoteVirtualNetworkAddressSpace?: pulumi.Input<types.inputs.AddressSpaceArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter indicates the intention to sync the peering with the current address space on the remote vNet after it's updated.
     */
    syncRemoteAddressSpace?: pulumi.Input<string>;
    /**
     * Resource type.
     */
    type?: pulumi.Input<string>;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    useRemoteGateways?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
    /**
     * The name of the peering.
     */
    virtualNetworkPeeringName?: pulumi.Input<string>;
}