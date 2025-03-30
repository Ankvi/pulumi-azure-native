import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VirtualWAN Resource.
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2020-11-01.
 *
 * Other available API versions: 2019-07-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class VirtualWan extends pulumi.CustomResource {
    /**
     * Get an existing VirtualWan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualWan {
        return new VirtualWan(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualWan';

    /**
     * Returns true if the given object is an instance of VirtualWan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualWan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualWan.__pulumiType;
    }

    /**
     * True if branch to branch traffic is allowed.
     */
    public readonly allowBranchToBranchTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * True if Vnet to Vnet traffic is allowed.
     */
    public readonly allowVnetToVnetTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * Vpn encryption to be disabled or not.
     */
    public readonly disableVpnEncryption!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The office local breakout category.
     */
    public /*out*/ readonly office365LocalBreakoutCategory!: pulumi.Output<string>;
    /**
     * The provisioning state of the virtual WAN resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * List of VirtualHubs in the VirtualWAN.
     */
    public /*out*/ readonly virtualHubs!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * List of VpnSites in the VirtualWAN.
     */
    public /*out*/ readonly vpnSites!: pulumi.Output<types.outputs.SubResourceResponse[]>;

    /**
     * Create a VirtualWan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualWanArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowBranchToBranchTraffic"] = args ? args.allowBranchToBranchTraffic : undefined;
            resourceInputs["allowVnetToVnetTraffic"] = args ? args.allowVnetToVnetTraffic : undefined;
            resourceInputs["disableVpnEncryption"] = args ? args.disableVpnEncryption : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["virtualWANName"] = args ? args.virtualWANName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["office365LocalBreakoutCategory"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["virtualHubs"] = undefined /*out*/;
            resourceInputs["vpnSites"] = undefined /*out*/;
        } else {
            resourceInputs["allowBranchToBranchTraffic"] = undefined /*out*/;
            resourceInputs["allowVnetToVnetTraffic"] = undefined /*out*/;
            resourceInputs["disableVpnEncryption"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["office365LocalBreakoutCategory"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHubs"] = undefined /*out*/;
            resourceInputs["vpnSites"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180401:VirtualWan" }, { type: "azure-native:network/v20180601:VirtualWan" }, { type: "azure-native:network/v20180701:VirtualWan" }, { type: "azure-native:network/v20180801:VirtualWan" }, { type: "azure-native:network/v20181001:VirtualWan" }, { type: "azure-native:network/v20181101:VirtualWan" }, { type: "azure-native:network/v20181201:VirtualWan" }, { type: "azure-native:network/v20190201:VirtualWan" }, { type: "azure-native:network/v20190401:VirtualWan" }, { type: "azure-native:network/v20190601:VirtualWan" }, { type: "azure-native:network/v20190701:VirtualWan" }, { type: "azure-native:network/v20190801:VirtualWan" }, { type: "azure-native:network/v20190901:VirtualWan" }, { type: "azure-native:network/v20191101:VirtualWan" }, { type: "azure-native:network/v20191201:VirtualWan" }, { type: "azure-native:network/v20200301:VirtualWan" }, { type: "azure-native:network/v20200401:VirtualWan" }, { type: "azure-native:network/v20200501:VirtualWan" }, { type: "azure-native:network/v20200601:VirtualWan" }, { type: "azure-native:network/v20200701:VirtualWan" }, { type: "azure-native:network/v20200801:VirtualWan" }, { type: "azure-native:network/v20201101:VirtualWan" }, { type: "azure-native:network/v20210201:VirtualWan" }, { type: "azure-native:network/v20210301:VirtualWan" }, { type: "azure-native:network/v20210501:VirtualWan" }, { type: "azure-native:network/v20210801:VirtualWan" }, { type: "azure-native:network/v20220101:VirtualWan" }, { type: "azure-native:network/v20220501:VirtualWan" }, { type: "azure-native:network/v20220701:VirtualWan" }, { type: "azure-native:network/v20220901:VirtualWan" }, { type: "azure-native:network/v20221101:VirtualWan" }, { type: "azure-native:network/v20230201:VirtualWan" }, { type: "azure-native:network/v20230401:VirtualWan" }, { type: "azure-native:network/v20230501:VirtualWan" }, { type: "azure-native:network/v20230601:VirtualWan" }, { type: "azure-native:network/v20230901:VirtualWan" }, { type: "azure-native:network/v20231101:VirtualWan" }, { type: "azure-native:network/v20240101:VirtualWan" }, { type: "azure-native:network/v20240301:VirtualWan" }, { type: "azure-native:network/v20240501:VirtualWan" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualWan.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualWan resource.
 */
export interface VirtualWanArgs {
    /**
     * True if branch to branch traffic is allowed.
     */
    allowBranchToBranchTraffic?: pulumi.Input<boolean>;
    /**
     * True if Vnet to Vnet traffic is allowed.
     */
    allowVnetToVnetTraffic?: pulumi.Input<boolean>;
    /**
     * Vpn encryption to be disabled or not.
     */
    disableVpnEncryption?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualWan.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The type of the VirtualWAN.
     */
    type?: pulumi.Input<string>;
    /**
     * The name of the VirtualWAN being created or updated.
     */
    virtualWANName?: pulumi.Input<string>;
}