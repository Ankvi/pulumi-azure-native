import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A common class for general resource information.
 */
export class VirtualNetworkGateway extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkGateway {
        return new VirtualNetworkGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230201:VirtualNetworkGateway';

    /**
     * Returns true if the given object is an instance of VirtualNetworkGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkGateway.__pulumiType;
    }

    /**
     * ActiveActive flag.
     */
    public readonly activeActive!: pulumi.Output<boolean | undefined>;
    /**
     * Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet
     */
    public readonly adminState!: pulumi.Output<string | undefined>;
    /**
     * Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN.
     */
    public readonly allowRemoteVnetTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * Configures this gateway to accept traffic from remote Virtual WAN networks.
     */
    public readonly allowVirtualWanTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    public readonly bgpSettings!: pulumi.Output<types.outputs.network.v20230201.BgpSettingsResponse | undefined>;
    /**
     * The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    public readonly customRoutes!: pulumi.Output<types.outputs.network.v20230201.AddressSpaceResponse | undefined>;
    /**
     * disableIPSecReplayProtection flag.
     */
    public readonly disableIPSecReplayProtection!: pulumi.Output<boolean | undefined>;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    public readonly enableBgp!: pulumi.Output<boolean | undefined>;
    /**
     * EnableBgpRouteTranslationForNat flag.
     */
    public readonly enableBgpRouteTranslationForNat!: pulumi.Output<boolean | undefined>;
    /**
     * Whether dns forwarding is enabled or not.
     */
    public readonly enableDnsForwarding!: pulumi.Output<boolean | undefined>;
    /**
     * Whether private IP needs to be enabled on this gateway for connections or not.
     */
    public readonly enablePrivateIpAddress!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of type local virtual network gateway.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.network.v20230201.ExtendedLocationResponse | undefined>;
    /**
     * The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    public readonly gatewayDefaultSite!: pulumi.Output<types.outputs.network.v20230201.SubResourceResponse | undefined>;
    /**
     * The type of this virtual network gateway.
     */
    public readonly gatewayType!: pulumi.Output<string | undefined>;
    /**
     * The IP address allocated by the gateway to which dns requests can be sent.
     */
    public /*out*/ readonly inboundDnsForwardingEndpoint!: pulumi.Output<string>;
    /**
     * IP configurations for virtual network gateway.
     */
    public readonly ipConfigurations!: pulumi.Output<types.outputs.network.v20230201.VirtualNetworkGatewayIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * NatRules for virtual network gateway.
     */
    public readonly natRules!: pulumi.Output<types.outputs.network.v20230201.VirtualNetworkGatewayNatRuleResponse[] | undefined>;
    /**
     * The provisioning state of the virtual network gateway resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the virtual network gateway resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    public readonly sku!: pulumi.Output<types.outputs.network.v20230201.VirtualNetworkGatewaySkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet.
     */
    public readonly vNetExtendedLocationResourceId!: pulumi.Output<string | undefined>;
    /**
     * The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway.
     */
    public readonly virtualNetworkGatewayPolicyGroups!: pulumi.Output<types.outputs.network.v20230201.VirtualNetworkGatewayPolicyGroupResponse[] | undefined>;
    /**
     * The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    public readonly vpnClientConfiguration!: pulumi.Output<types.outputs.network.v20230201.VpnClientConfigurationResponse | undefined>;
    /**
     * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     */
    public readonly vpnGatewayGeneration!: pulumi.Output<string | undefined>;
    /**
     * The type of this virtual network gateway.
     */
    public readonly vpnType!: pulumi.Output<string | undefined>;

    /**
     * Create a VirtualNetworkGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["activeActive"] = args ? args.activeActive : undefined;
            resourceInputs["adminState"] = args ? args.adminState : undefined;
            resourceInputs["allowRemoteVnetTraffic"] = args ? args.allowRemoteVnetTraffic : undefined;
            resourceInputs["allowVirtualWanTraffic"] = args ? args.allowVirtualWanTraffic : undefined;
            resourceInputs["bgpSettings"] = args ? args.bgpSettings : undefined;
            resourceInputs["customRoutes"] = args ? args.customRoutes : undefined;
            resourceInputs["disableIPSecReplayProtection"] = args ? args.disableIPSecReplayProtection : undefined;
            resourceInputs["enableBgp"] = args ? args.enableBgp : undefined;
            resourceInputs["enableBgpRouteTranslationForNat"] = args ? args.enableBgpRouteTranslationForNat : undefined;
            resourceInputs["enableDnsForwarding"] = args ? args.enableDnsForwarding : undefined;
            resourceInputs["enablePrivateIpAddress"] = args ? args.enablePrivateIpAddress : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["gatewayDefaultSite"] = args ? args.gatewayDefaultSite : undefined;
            resourceInputs["gatewayType"] = args ? args.gatewayType : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["natRules"] = args ? args.natRules : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vNetExtendedLocationResourceId"] = args ? args.vNetExtendedLocationResourceId : undefined;
            resourceInputs["virtualNetworkGatewayName"] = args ? args.virtualNetworkGatewayName : undefined;
            resourceInputs["virtualNetworkGatewayPolicyGroups"] = args ? args.virtualNetworkGatewayPolicyGroups : undefined;
            resourceInputs["vpnClientConfiguration"] = args ? args.vpnClientConfiguration : undefined;
            resourceInputs["vpnGatewayGeneration"] = args ? args.vpnGatewayGeneration : undefined;
            resourceInputs["vpnType"] = args ? args.vpnType : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["inboundDnsForwardingEndpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activeActive"] = undefined /*out*/;
            resourceInputs["adminState"] = undefined /*out*/;
            resourceInputs["allowRemoteVnetTraffic"] = undefined /*out*/;
            resourceInputs["allowVirtualWanTraffic"] = undefined /*out*/;
            resourceInputs["bgpSettings"] = undefined /*out*/;
            resourceInputs["customRoutes"] = undefined /*out*/;
            resourceInputs["disableIPSecReplayProtection"] = undefined /*out*/;
            resourceInputs["enableBgp"] = undefined /*out*/;
            resourceInputs["enableBgpRouteTranslationForNat"] = undefined /*out*/;
            resourceInputs["enableDnsForwarding"] = undefined /*out*/;
            resourceInputs["enablePrivateIpAddress"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["gatewayDefaultSite"] = undefined /*out*/;
            resourceInputs["gatewayType"] = undefined /*out*/;
            resourceInputs["inboundDnsForwardingEndpoint"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["natRules"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vNetExtendedLocationResourceId"] = undefined /*out*/;
            resourceInputs["virtualNetworkGatewayPolicyGroups"] = undefined /*out*/;
            resourceInputs["vpnClientConfiguration"] = undefined /*out*/;
            resourceInputs["vpnGatewayGeneration"] = undefined /*out*/;
            resourceInputs["vpnType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:VirtualNetworkGateway" }, { type: "azure-native:network/v20150615:VirtualNetworkGateway" }, { type: "azure-native:network/v20160330:VirtualNetworkGateway" }, { type: "azure-native:network/v20160601:VirtualNetworkGateway" }, { type: "azure-native:network/v20160901:VirtualNetworkGateway" }, { type: "azure-native:network/v20161201:VirtualNetworkGateway" }, { type: "azure-native:network/v20170301:VirtualNetworkGateway" }, { type: "azure-native:network/v20170601:VirtualNetworkGateway" }, { type: "azure-native:network/v20170801:VirtualNetworkGateway" }, { type: "azure-native:network/v20170901:VirtualNetworkGateway" }, { type: "azure-native:network/v20171001:VirtualNetworkGateway" }, { type: "azure-native:network/v20171101:VirtualNetworkGateway" }, { type: "azure-native:network/v20180101:VirtualNetworkGateway" }, { type: "azure-native:network/v20180201:VirtualNetworkGateway" }, { type: "azure-native:network/v20180401:VirtualNetworkGateway" }, { type: "azure-native:network/v20180601:VirtualNetworkGateway" }, { type: "azure-native:network/v20180701:VirtualNetworkGateway" }, { type: "azure-native:network/v20180801:VirtualNetworkGateway" }, { type: "azure-native:network/v20181001:VirtualNetworkGateway" }, { type: "azure-native:network/v20181101:VirtualNetworkGateway" }, { type: "azure-native:network/v20181201:VirtualNetworkGateway" }, { type: "azure-native:network/v20190201:VirtualNetworkGateway" }, { type: "azure-native:network/v20190401:VirtualNetworkGateway" }, { type: "azure-native:network/v20190601:VirtualNetworkGateway" }, { type: "azure-native:network/v20190701:VirtualNetworkGateway" }, { type: "azure-native:network/v20190801:VirtualNetworkGateway" }, { type: "azure-native:network/v20190901:VirtualNetworkGateway" }, { type: "azure-native:network/v20191101:VirtualNetworkGateway" }, { type: "azure-native:network/v20191201:VirtualNetworkGateway" }, { type: "azure-native:network/v20200301:VirtualNetworkGateway" }, { type: "azure-native:network/v20200401:VirtualNetworkGateway" }, { type: "azure-native:network/v20200501:VirtualNetworkGateway" }, { type: "azure-native:network/v20200601:VirtualNetworkGateway" }, { type: "azure-native:network/v20200701:VirtualNetworkGateway" }, { type: "azure-native:network/v20200801:VirtualNetworkGateway" }, { type: "azure-native:network/v20201101:VirtualNetworkGateway" }, { type: "azure-native:network/v20210201:VirtualNetworkGateway" }, { type: "azure-native:network/v20210301:VirtualNetworkGateway" }, { type: "azure-native:network/v20210501:VirtualNetworkGateway" }, { type: "azure-native:network/v20210801:VirtualNetworkGateway" }, { type: "azure-native:network/v20220101:VirtualNetworkGateway" }, { type: "azure-native:network/v20220501:VirtualNetworkGateway" }, { type: "azure-native:network/v20220701:VirtualNetworkGateway" }, { type: "azure-native:network/v20220901:VirtualNetworkGateway" }, { type: "azure-native:network/v20221101:VirtualNetworkGateway" }, { type: "azure-native:network/v20230401:VirtualNetworkGateway" }, { type: "azure-native:network/v20230501:VirtualNetworkGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetworkGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetworkGateway resource.
 */
export interface VirtualNetworkGatewayArgs {
    /**
     * ActiveActive flag.
     */
    activeActive?: pulumi.Input<boolean>;
    /**
     * Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet
     */
    adminState?: pulumi.Input<string | types.enums.v20230201.AdminState>;
    /**
     * Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN.
     */
    allowRemoteVnetTraffic?: pulumi.Input<boolean>;
    /**
     * Configures this gateway to accept traffic from remote Virtual WAN networks.
     */
    allowVirtualWanTraffic?: pulumi.Input<boolean>;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    bgpSettings?: pulumi.Input<types.inputs.network.v20230201.BgpSettingsArgs>;
    /**
     * The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    customRoutes?: pulumi.Input<types.inputs.network.v20230201.AddressSpaceArgs>;
    /**
     * disableIPSecReplayProtection flag.
     */
    disableIPSecReplayProtection?: pulumi.Input<boolean>;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    enableBgp?: pulumi.Input<boolean>;
    /**
     * EnableBgpRouteTranslationForNat flag.
     */
    enableBgpRouteTranslationForNat?: pulumi.Input<boolean>;
    /**
     * Whether dns forwarding is enabled or not.
     */
    enableDnsForwarding?: pulumi.Input<boolean>;
    /**
     * Whether private IP needs to be enabled on this gateway for connections or not.
     */
    enablePrivateIpAddress?: pulumi.Input<boolean>;
    /**
     * The extended location of type local virtual network gateway.
     */
    extendedLocation?: pulumi.Input<types.inputs.network.v20230201.ExtendedLocationArgs>;
    /**
     * The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    gatewayDefaultSite?: pulumi.Input<types.inputs.network.v20230201.SubResourceArgs>;
    /**
     * The type of this virtual network gateway.
     */
    gatewayType?: pulumi.Input<string | types.enums.v20230201.VirtualNetworkGatewayType>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * IP configurations for virtual network gateway.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<types.inputs.network.v20230201.VirtualNetworkGatewayIPConfigurationArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * NatRules for virtual network gateway.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    natRules?: pulumi.Input<pulumi.Input<types.inputs.network.v20230201.VirtualNetworkGatewayNatRuleArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    sku?: pulumi.Input<types.inputs.network.v20230201.VirtualNetworkGatewaySkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet.
     */
    vNetExtendedLocationResourceId?: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName?: pulumi.Input<string>;
    /**
     * The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway.
     */
    virtualNetworkGatewayPolicyGroups?: pulumi.Input<pulumi.Input<types.inputs.network.v20230201.VirtualNetworkGatewayPolicyGroupArgs>[]>;
    /**
     * The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    vpnClientConfiguration?: pulumi.Input<types.inputs.network.v20230201.VpnClientConfigurationArgs>;
    /**
     * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     */
    vpnGatewayGeneration?: pulumi.Input<string | types.enums.v20230201.VpnGatewayGeneration>;
    /**
     * The type of this virtual network gateway.
     */
    vpnType?: pulumi.Input<string | types.enums.v20230201.VpnType>;
}
