import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VirtualWAN Resource.
 */
export class VirtualWAN extends pulumi.CustomResource {
    /**
     * Get an existing VirtualWAN resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualWAN {
        return new VirtualWAN(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20180701:VirtualWAN';

    /**
     * Returns true if the given object is an instance of VirtualWAN.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualWAN {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualWAN.__pulumiType;
    }

    /**
     * Vpn encryption to be disabled or not.
     */
    public readonly disableVpnEncryption!: pulumi.Output<boolean | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
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
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of VirtualHubs in the VirtualWAN.
     */
    public /*out*/ readonly virtualHubs!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    public /*out*/ readonly vpnSites!: pulumi.Output<types.outputs.SubResourceResponse[]>;

    /**
     * Create a VirtualWAN resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualWANArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["disableVpnEncryption"] = args ? args.disableVpnEncryption : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualWANName"] = args ? args.virtualWANName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHubs"] = undefined /*out*/;
            resourceInputs["vpnSites"] = undefined /*out*/;
        } else {
            resourceInputs["disableVpnEncryption"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHubs"] = undefined /*out*/;
            resourceInputs["vpnSites"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:VirtualWAN" }, { type: "azure-native:network/v20180401:VirtualWAN" }, { type: "azure-native:network/v20180601:VirtualWAN" }, { type: "azure-native:network/v20180801:VirtualWAN" }, { type: "azure-native:network/v20181001:VirtualWAN" }, { type: "azure-native:network/v20181101:VirtualWAN" }, { type: "azure-native:network/v20181201:VirtualWAN" }, { type: "azure-native:network/v20190201:VirtualWAN" }, { type: "azure-native:network/v20190401:VirtualWAN" }, { type: "azure-native:network/v20190601:VirtualWAN" }, { type: "azure-native:network/v20190701:VirtualWAN" }, { type: "azure-native:network/v20190801:VirtualWAN" }, { type: "azure-native:network/v20190901:VirtualWAN" }, { type: "azure-native:network/v20191101:VirtualWAN" }, { type: "azure-native:network/v20191201:VirtualWAN" }, { type: "azure-native:network/v20200301:VirtualWAN" }, { type: "azure-native:network/v20200401:VirtualWAN" }, { type: "azure-native:network/v20200501:VirtualWAN" }, { type: "azure-native:network/v20200601:VirtualWAN" }, { type: "azure-native:network/v20200701:VirtualWAN" }, { type: "azure-native:network/v20200801:VirtualWAN" }, { type: "azure-native:network/v20201101:VirtualWAN" }, { type: "azure-native:network/v20210201:VirtualWAN" }, { type: "azure-native:network/v20210301:VirtualWAN" }, { type: "azure-native:network/v20210501:VirtualWAN" }, { type: "azure-native:network/v20210801:VirtualWAN" }, { type: "azure-native:network/v20220101:VirtualWAN" }, { type: "azure-native:network/v20220501:VirtualWAN" }, { type: "azure-native:network/v20220701:VirtualWAN" }, { type: "azure-native:network/v20220901:VirtualWAN" }, { type: "azure-native:network/v20221101:VirtualWAN" }, { type: "azure-native:network/v20230201:VirtualWAN" }, { type: "azure-native:network/v20230401:VirtualWAN" }, { type: "azure-native:network/v20230501:VirtualWAN" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualWAN.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualWAN resource.
 */
export interface VirtualWANArgs {
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
     * The name of the VirtualWAN being created or updated.
     */
    virtualWANName?: pulumi.Input<string>;
}
