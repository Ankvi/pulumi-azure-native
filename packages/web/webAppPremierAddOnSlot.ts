import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Premier add-on.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01.
 */
export class WebAppPremierAddOnSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppPremierAddOnSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppPremierAddOnSlot {
        return new WebAppPremierAddOnSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppPremierAddOnSlot';

    /**
     * Returns true if the given object is an instance of WebAppPremierAddOnSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppPremierAddOnSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppPremierAddOnSlot.__pulumiType;
    }

    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Premier add on Marketplace offer.
     */
    public readonly marketplaceOffer!: pulumi.Output<string | undefined>;
    /**
     * Premier add on Marketplace publisher.
     */
    public readonly marketplacePublisher!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Premier add on Product.
     */
    public readonly product!: pulumi.Output<string | undefined>;
    /**
     * Premier add on SKU.
     */
    public readonly sku!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Premier add on Vendor.
     */
    public readonly vendor!: pulumi.Output<string | undefined>;

    /**
     * Create a WebAppPremierAddOnSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppPremierAddOnSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["marketplaceOffer"] = args ? args.marketplaceOffer : undefined;
            resourceInputs["marketplacePublisher"] = args ? args.marketplacePublisher : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["premierAddOnName"] = args ? args.premierAddOnName : undefined;
            resourceInputs["product"] = args ? args.product : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vendor"] = args ? args.vendor : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["marketplaceOffer"] = undefined /*out*/;
            resourceInputs["marketplacePublisher"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["product"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vendor"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20160801:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20180201:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20181101:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20190801:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20200601:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20200901:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20201001:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20201201:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20210101:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20210115:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20210201:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20210301:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20220301:WebAppPremierAddOnSlot" }, { type: "azure-native:web/v20220901:WebAppPremierAddOnSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppPremierAddOnSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppPremierAddOnSlot resource.
 */
export interface WebAppPremierAddOnSlotArgs {
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Premier add on Marketplace offer.
     */
    marketplaceOffer?: pulumi.Input<string>;
    /**
     * Premier add on Marketplace publisher.
     */
    marketplacePublisher?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Add-on name.
     */
    premierAddOnName?: pulumi.Input<string>;
    /**
     * Premier add on Product.
     */
    product?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Premier add on SKU.
     */
    sku?: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the named add-on for the production slot.
     */
    slot: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Premier add on Vendor.
     */
    vendor?: pulumi.Input<string>;
}
