import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Premier add-on.
 *
 * Uses Azure REST API version 2022-09-01. In version 1.x of the Azure Native provider, it used API version 2020-12-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export class WebAppPremierAddOn extends pulumi.CustomResource {
    /**
     * Get an existing WebAppPremierAddOn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppPremierAddOn {
        return new WebAppPremierAddOn(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppPremierAddOn';

    /**
     * Returns true if the given object is an instance of WebAppPremierAddOn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppPremierAddOn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppPremierAddOn.__pulumiType;
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
     * Create a WebAppPremierAddOn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppPremierAddOnArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
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
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppPremierAddOn" }, { type: "azure-native:web/v20160801:WebAppPremierAddOn" }, { type: "azure-native:web/v20180201:WebAppPremierAddOn" }, { type: "azure-native:web/v20181101:WebAppPremierAddOn" }, { type: "azure-native:web/v20190801:WebAppPremierAddOn" }, { type: "azure-native:web/v20200601:WebAppPremierAddOn" }, { type: "azure-native:web/v20200901:WebAppPremierAddOn" }, { type: "azure-native:web/v20201001:WebAppPremierAddOn" }, { type: "azure-native:web/v20201201:WebAppPremierAddOn" }, { type: "azure-native:web/v20210101:WebAppPremierAddOn" }, { type: "azure-native:web/v20210115:WebAppPremierAddOn" }, { type: "azure-native:web/v20210201:WebAppPremierAddOn" }, { type: "azure-native:web/v20210301:WebAppPremierAddOn" }, { type: "azure-native:web/v20220301:WebAppPremierAddOn" }, { type: "azure-native:web/v20220901:WebAppPremierAddOn" }, { type: "azure-native:web/v20230101:WebAppPremierAddOn" }, { type: "azure-native:web/v20231201:WebAppPremierAddOn" }, { type: "azure-native:web/v20240401:WebAppPremierAddOn" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppPremierAddOn.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppPremierAddOn resource.
 */
export interface WebAppPremierAddOnArgs {
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
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Premier add on Vendor.
     */
    vendor?: pulumi.Input<string>;
}