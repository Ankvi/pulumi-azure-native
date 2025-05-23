import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Customer subscription which can use a sku.
 *
 * Uses Azure REST API version 2022-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-01-01-preview.
 */
export class VendorSkuPreview extends pulumi.CustomResource {
    /**
     * Get an existing VendorSkuPreview resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VendorSkuPreview {
        return new VendorSkuPreview(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridnetwork:VendorSkuPreview';

    /**
     * Returns true if the given object is an instance of VendorSkuPreview.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VendorSkuPreview {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VendorSkuPreview.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The preview subscription ID.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the PreviewSubscription resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VendorSkuPreview resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VendorSkuPreviewArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.skuName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'skuName'");
            }
            if ((!args || args.vendorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vendorName'");
            }
            resourceInputs["previewSubscription"] = args ? args.previewSubscription : undefined;
            resourceInputs["skuName"] = args ? args.skuName : undefined;
            resourceInputs["vendorName"] = args ? args.vendorName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridnetwork/v20200101preview:VendorSkuPreview" }, { type: "azure-native:hybridnetwork/v20210501:VendorSkuPreview" }, { type: "azure-native:hybridnetwork/v20220101preview:VendorSkuPreview" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VendorSkuPreview.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VendorSkuPreview resource.
 */
export interface VendorSkuPreviewArgs {
    /**
     * Preview subscription ID.
     */
    previewSubscription?: pulumi.Input<string>;
    /**
     * The name of the vendor sku.
     */
    skuName: pulumi.Input<string>;
    /**
     * The name of the vendor.
     */
    vendorName: pulumi.Input<string>;
}