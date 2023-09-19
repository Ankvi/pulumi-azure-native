import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VpnSite Resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01
 */
export class VpnSite extends pulumi.CustomResource {
    /**
     * Get an existing VpnSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnSite {
        return new VpnSite(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VpnSite';

    /**
     * Returns true if the given object is an instance of VpnSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnSite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnSite.__pulumiType;
    }

    /**
     * The AddressSpace that contains an array of IP address ranges.
     */
    public readonly addressSpace!: pulumi.Output<types.outputs.AddressSpaceResponse | undefined>;
    /**
     * The set of bgp properties.
     */
    public readonly bgpProperties!: pulumi.Output<types.outputs.BgpSettingsResponse | undefined>;
    /**
     * The device properties.
     */
    public readonly deviceProperties!: pulumi.Output<types.outputs.DevicePropertiesResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The ip-address for the vpn-site.
     */
    public readonly ipAddress!: pulumi.Output<string | undefined>;
    /**
     * IsSecuritySite flag.
     */
    public readonly isSecuritySite!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Office365 Policy.
     */
    public readonly o365Policy!: pulumi.Output<types.outputs.O365PolicyPropertiesResponse | undefined>;
    /**
     * The provisioning state of the VPN site resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The key for vpn-site that can be used for connections.
     */
    public readonly siteKey!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VirtualWAN to which the vpnSite belongs.
     */
    public readonly virtualWan!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * List of all vpn site links.
     */
    public readonly vpnSiteLinks!: pulumi.Output<types.outputs.VpnSiteLinkResponse[] | undefined>;

    /**
     * Create a VpnSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnSiteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addressSpace"] = args ? args.addressSpace : undefined;
            resourceInputs["bgpProperties"] = args ? args.bgpProperties : undefined;
            resourceInputs["deviceProperties"] = args ? args.deviceProperties : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["isSecuritySite"] = args ? args.isSecuritySite : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["o365Policy"] = args ? args.o365Policy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["siteKey"] = args ? args.siteKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualWan"] = args ? args.virtualWan : undefined;
            resourceInputs["vpnSiteLinks"] = args ? args.vpnSiteLinks : undefined;
            resourceInputs["vpnSiteName"] = args ? args.vpnSiteName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressSpace"] = undefined /*out*/;
            resourceInputs["bgpProperties"] = undefined /*out*/;
            resourceInputs["deviceProperties"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["isSecuritySite"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["o365Policy"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["siteKey"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualWan"] = undefined /*out*/;
            resourceInputs["vpnSiteLinks"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180401:VpnSite" }, { type: "azure-native:network/v20180601:VpnSite" }, { type: "azure-native:network/v20180701:VpnSite" }, { type: "azure-native:network/v20180801:VpnSite" }, { type: "azure-native:network/v20181001:VpnSite" }, { type: "azure-native:network/v20181101:VpnSite" }, { type: "azure-native:network/v20181201:VpnSite" }, { type: "azure-native:network/v20190201:VpnSite" }, { type: "azure-native:network/v20190401:VpnSite" }, { type: "azure-native:network/v20190601:VpnSite" }, { type: "azure-native:network/v20190701:VpnSite" }, { type: "azure-native:network/v20190801:VpnSite" }, { type: "azure-native:network/v20190901:VpnSite" }, { type: "azure-native:network/v20191101:VpnSite" }, { type: "azure-native:network/v20191201:VpnSite" }, { type: "azure-native:network/v20200301:VpnSite" }, { type: "azure-native:network/v20200401:VpnSite" }, { type: "azure-native:network/v20200501:VpnSite" }, { type: "azure-native:network/v20200601:VpnSite" }, { type: "azure-native:network/v20200701:VpnSite" }, { type: "azure-native:network/v20200801:VpnSite" }, { type: "azure-native:network/v20201101:VpnSite" }, { type: "azure-native:network/v20210201:VpnSite" }, { type: "azure-native:network/v20210301:VpnSite" }, { type: "azure-native:network/v20210501:VpnSite" }, { type: "azure-native:network/v20210801:VpnSite" }, { type: "azure-native:network/v20220101:VpnSite" }, { type: "azure-native:network/v20220501:VpnSite" }, { type: "azure-native:network/v20220701:VpnSite" }, { type: "azure-native:network/v20220901:VpnSite" }, { type: "azure-native:network/v20221101:VpnSite" }, { type: "azure-native:network/v20230201:VpnSite" }, { type: "azure-native:network/v20230401:VpnSite" }, { type: "azure-native:network/v20230501:VpnSite" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VpnSite.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VpnSite resource.
 */
export interface VpnSiteArgs {
    /**
     * The AddressSpace that contains an array of IP address ranges.
     */
    addressSpace?: pulumi.Input<types.inputs.AddressSpaceArgs>;
    /**
     * The set of bgp properties.
     */
    bgpProperties?: pulumi.Input<types.inputs.BgpSettingsArgs>;
    /**
     * The device properties.
     */
    deviceProperties?: pulumi.Input<types.inputs.DevicePropertiesArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The ip-address for the vpn-site.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * IsSecuritySite flag.
     */
    isSecuritySite?: pulumi.Input<boolean>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Office365 Policy.
     */
    o365Policy?: pulumi.Input<types.inputs.O365PolicyPropertiesArgs>;
    /**
     * The resource group name of the VpnSite.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The key for vpn-site that can be used for connections.
     */
    siteKey?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VirtualWAN to which the vpnSite belongs.
     */
    virtualWan?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * List of all vpn site links.
     */
    vpnSiteLinks?: pulumi.Input<pulumi.Input<types.inputs.VpnSiteLinkArgs>[]>;
    /**
     * The name of the VpnSite being created or updated.
     */
    vpnSiteName?: pulumi.Input<string>;
}
