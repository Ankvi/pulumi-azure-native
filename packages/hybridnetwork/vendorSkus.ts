import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Sku sub resource.
 * Azure REST API version: 2022-01-01-preview. Prior API version in Azure Native 1.x: 2020-01-01-preview
 */
export class VendorSkus extends pulumi.CustomResource {
    /**
     * Get an existing VendorSkus resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VendorSkus {
        return new VendorSkus(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridnetwork:VendorSkus';

    /**
     * Returns true if the given object is an instance of VendorSkus.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VendorSkus {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VendorSkus.__pulumiType;
    }

    /**
     * The sku deployment mode.
     */
    public readonly deploymentMode!: pulumi.Output<string | undefined>;
    /**
     * The parameters for the managed application to be supplied by the vendor.
     */
    public readonly managedApplicationParameters!: pulumi.Output<any | undefined>;
    /**
     * The template for the managed application deployment.
     */
    public readonly managedApplicationTemplate!: pulumi.Output<any | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The template definition of the network function.
     */
    public readonly networkFunctionTemplate!: pulumi.Output<types.outputs.NetworkFunctionTemplateResponse | undefined>;
    /**
     * The network function type.
     */
    public readonly networkFunctionType!: pulumi.Output<string | undefined>;
    /**
     * Indicates if the vendor sku is in preview mode.
     */
    public readonly preview!: pulumi.Output<boolean | undefined>;
    /**
     * The provisioning state of the vendor sku sub resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The sku type.
     */
    public readonly skuType!: pulumi.Output<string | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VendorSkus resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VendorSkusArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.vendorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vendorName'");
            }
            resourceInputs["deploymentMode"] = args ? args.deploymentMode : undefined;
            resourceInputs["managedApplicationParameters"] = args ? args.managedApplicationParameters : undefined;
            resourceInputs["managedApplicationTemplate"] = args ? args.managedApplicationTemplate : undefined;
            resourceInputs["networkFunctionTemplate"] = args ? args.networkFunctionTemplate : undefined;
            resourceInputs["networkFunctionType"] = args ? args.networkFunctionType : undefined;
            resourceInputs["preview"] = args ? args.preview : undefined;
            resourceInputs["skuName"] = args ? args.skuName : undefined;
            resourceInputs["skuType"] = args ? args.skuType : undefined;
            resourceInputs["vendorName"] = args ? args.vendorName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["deploymentMode"] = undefined /*out*/;
            resourceInputs["managedApplicationParameters"] = undefined /*out*/;
            resourceInputs["managedApplicationTemplate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFunctionTemplate"] = undefined /*out*/;
            resourceInputs["networkFunctionType"] = undefined /*out*/;
            resourceInputs["preview"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["skuType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridnetwork/v20200101preview:VendorSkus" }, { type: "azure-native:hybridnetwork/v20210501:VendorSkus" }, { type: "azure-native:hybridnetwork/v20220101preview:VendorSkus" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VendorSkus.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VendorSkus resource.
 */
export interface VendorSkusArgs {
    /**
     * The sku deployment mode.
     */
    deploymentMode?: pulumi.Input<string | types.enums.SkuDeploymentMode>;
    /**
     * The parameters for the managed application to be supplied by the vendor.
     */
    managedApplicationParameters?: any;
    /**
     * The template for the managed application deployment.
     */
    managedApplicationTemplate?: any;
    /**
     * The template definition of the network function.
     */
    networkFunctionTemplate?: pulumi.Input<types.inputs.NetworkFunctionTemplateArgs>;
    /**
     * The network function type.
     */
    networkFunctionType?: pulumi.Input<string | types.enums.NetworkFunctionType>;
    /**
     * Indicates if the vendor sku is in preview mode.
     */
    preview?: pulumi.Input<boolean>;
    /**
     * The name of the sku.
     */
    skuName?: pulumi.Input<string>;
    /**
     * The sku type.
     */
    skuType?: pulumi.Input<string | types.enums.SkuType>;
    /**
     * The name of the vendor.
     */
    vendorName: pulumi.Input<string>;
}
