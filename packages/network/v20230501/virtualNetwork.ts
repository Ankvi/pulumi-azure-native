import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Virtual Network resource.
 */
export class VirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetwork {
        return new VirtualNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230501:VirtualNetwork';

    /**
     * Returns true if the given object is an instance of VirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetwork.__pulumiType;
    }

    /**
     * The AddressSpace that contains an array of IP address ranges that can be used by subnets.
     */
    public readonly addressSpace!: pulumi.Output<types.outputs.network.v20230501.AddressSpaceResponse | undefined>;
    /**
     * Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
     */
    public readonly bgpCommunities!: pulumi.Output<types.outputs.network.v20230501.VirtualNetworkBgpCommunitiesResponse | undefined>;
    /**
     * The DDoS protection plan associated with the virtual network.
     */
    public readonly ddosProtectionPlan!: pulumi.Output<types.outputs.network.v20230501.SubResourceResponse | undefined>;
    /**
     * The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
     */
    public readonly dhcpOptions!: pulumi.Output<types.outputs.network.v20230501.DhcpOptionsResponse | undefined>;
    /**
     * Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
     */
    public readonly enableDdosProtection!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if VM protection is enabled for all the subnets in the virtual network.
     */
    public readonly enableVmProtection!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet.
     */
    public readonly encryption!: pulumi.Output<types.outputs.network.v20230501.VirtualNetworkEncryptionResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the virtual network.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.network.v20230501.ExtendedLocationResponse | undefined>;
    /**
     * A collection of references to flow log resources.
     */
    public /*out*/ readonly flowLogs!: pulumi.Output<types.outputs.network.v20230501.FlowLogResponse[]>;
    /**
     * The FlowTimeout value (in minutes) for the Virtual Network
     */
    public readonly flowTimeoutInMinutes!: pulumi.Output<number | undefined>;
    /**
     * Array of IpAllocation which reference this VNET.
     */
    public readonly ipAllocations!: pulumi.Output<types.outputs.network.v20230501.SubResourceResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the virtual network resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resourceGuid property of the Virtual Network resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * A list of subnets in a Virtual Network.
     */
    public readonly subnets!: pulumi.Output<types.outputs.network.v20230501.SubnetResponse[] | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of peerings in a Virtual Network.
     */
    public readonly virtualNetworkPeerings!: pulumi.Output<types.outputs.network.v20230501.VirtualNetworkPeeringResponse[] | undefined>;

    /**
     * Create a VirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addressSpace"] = args ? args.addressSpace : undefined;
            resourceInputs["bgpCommunities"] = args ? args.bgpCommunities : undefined;
            resourceInputs["ddosProtectionPlan"] = args ? args.ddosProtectionPlan : undefined;
            resourceInputs["dhcpOptions"] = args ? args.dhcpOptions : undefined;
            resourceInputs["enableDdosProtection"] = (args ? args.enableDdosProtection : undefined) ?? false;
            resourceInputs["enableVmProtection"] = (args ? args.enableVmProtection : undefined) ?? false;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["flowTimeoutInMinutes"] = args ? args.flowTimeoutInMinutes : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipAllocations"] = args ? args.ipAllocations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnets"] = args ? args.subnets : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
            resourceInputs["virtualNetworkPeerings"] = args ? args.virtualNetworkPeerings : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["flowLogs"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressSpace"] = undefined /*out*/;
            resourceInputs["bgpCommunities"] = undefined /*out*/;
            resourceInputs["ddosProtectionPlan"] = undefined /*out*/;
            resourceInputs["dhcpOptions"] = undefined /*out*/;
            resourceInputs["enableDdosProtection"] = undefined /*out*/;
            resourceInputs["enableVmProtection"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["flowLogs"] = undefined /*out*/;
            resourceInputs["flowTimeoutInMinutes"] = undefined /*out*/;
            resourceInputs["ipAllocations"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkPeerings"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:VirtualNetwork" }, { type: "azure-native:network/v20150501preview:VirtualNetwork" }, { type: "azure-native:network/v20150615:VirtualNetwork" }, { type: "azure-native:network/v20160330:VirtualNetwork" }, { type: "azure-native:network/v20160601:VirtualNetwork" }, { type: "azure-native:network/v20160901:VirtualNetwork" }, { type: "azure-native:network/v20161201:VirtualNetwork" }, { type: "azure-native:network/v20170301:VirtualNetwork" }, { type: "azure-native:network/v20170601:VirtualNetwork" }, { type: "azure-native:network/v20170801:VirtualNetwork" }, { type: "azure-native:network/v20170901:VirtualNetwork" }, { type: "azure-native:network/v20171001:VirtualNetwork" }, { type: "azure-native:network/v20171101:VirtualNetwork" }, { type: "azure-native:network/v20180101:VirtualNetwork" }, { type: "azure-native:network/v20180201:VirtualNetwork" }, { type: "azure-native:network/v20180401:VirtualNetwork" }, { type: "azure-native:network/v20180601:VirtualNetwork" }, { type: "azure-native:network/v20180701:VirtualNetwork" }, { type: "azure-native:network/v20180801:VirtualNetwork" }, { type: "azure-native:network/v20181001:VirtualNetwork" }, { type: "azure-native:network/v20181101:VirtualNetwork" }, { type: "azure-native:network/v20181201:VirtualNetwork" }, { type: "azure-native:network/v20190201:VirtualNetwork" }, { type: "azure-native:network/v20190401:VirtualNetwork" }, { type: "azure-native:network/v20190601:VirtualNetwork" }, { type: "azure-native:network/v20190701:VirtualNetwork" }, { type: "azure-native:network/v20190801:VirtualNetwork" }, { type: "azure-native:network/v20190901:VirtualNetwork" }, { type: "azure-native:network/v20191101:VirtualNetwork" }, { type: "azure-native:network/v20191201:VirtualNetwork" }, { type: "azure-native:network/v20200301:VirtualNetwork" }, { type: "azure-native:network/v20200401:VirtualNetwork" }, { type: "azure-native:network/v20200501:VirtualNetwork" }, { type: "azure-native:network/v20200601:VirtualNetwork" }, { type: "azure-native:network/v20200701:VirtualNetwork" }, { type: "azure-native:network/v20200801:VirtualNetwork" }, { type: "azure-native:network/v20201101:VirtualNetwork" }, { type: "azure-native:network/v20210201:VirtualNetwork" }, { type: "azure-native:network/v20210301:VirtualNetwork" }, { type: "azure-native:network/v20210501:VirtualNetwork" }, { type: "azure-native:network/v20210801:VirtualNetwork" }, { type: "azure-native:network/v20220101:VirtualNetwork" }, { type: "azure-native:network/v20220501:VirtualNetwork" }, { type: "azure-native:network/v20220701:VirtualNetwork" }, { type: "azure-native:network/v20220901:VirtualNetwork" }, { type: "azure-native:network/v20221101:VirtualNetwork" }, { type: "azure-native:network/v20230201:VirtualNetwork" }, { type: "azure-native:network/v20230401:VirtualNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetwork resource.
 */
export interface VirtualNetworkArgs {
    /**
     * The AddressSpace that contains an array of IP address ranges that can be used by subnets.
     */
    addressSpace?: pulumi.Input<types.inputs.network.v20230501.AddressSpaceArgs>;
    /**
     * Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
     */
    bgpCommunities?: pulumi.Input<types.inputs.network.v20230501.VirtualNetworkBgpCommunitiesArgs>;
    /**
     * The DDoS protection plan associated with the virtual network.
     */
    ddosProtectionPlan?: pulumi.Input<types.inputs.network.v20230501.SubResourceArgs>;
    /**
     * The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
     */
    dhcpOptions?: pulumi.Input<types.inputs.network.v20230501.DhcpOptionsArgs>;
    /**
     * Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
     */
    enableDdosProtection?: pulumi.Input<boolean>;
    /**
     * Indicates if VM protection is enabled for all the subnets in the virtual network.
     */
    enableVmProtection?: pulumi.Input<boolean>;
    /**
     * Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet.
     */
    encryption?: pulumi.Input<types.inputs.network.v20230501.VirtualNetworkEncryptionArgs>;
    /**
     * The extended location of the virtual network.
     */
    extendedLocation?: pulumi.Input<types.inputs.network.v20230501.ExtendedLocationArgs>;
    /**
     * The FlowTimeout value (in minutes) for the Virtual Network
     */
    flowTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Array of IpAllocation which reference this VNET.
     */
    ipAllocations?: pulumi.Input<pulumi.Input<types.inputs.network.v20230501.SubResourceArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of subnets in a Virtual Network.
     */
    subnets?: pulumi.Input<pulumi.Input<types.inputs.network.v20230501.SubnetArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName?: pulumi.Input<string>;
    /**
     * A list of peerings in a Virtual Network.
     */
    virtualNetworkPeerings?: pulumi.Input<pulumi.Input<types.inputs.network.v20230501.VirtualNetworkPeeringArgs>[]>;
}
