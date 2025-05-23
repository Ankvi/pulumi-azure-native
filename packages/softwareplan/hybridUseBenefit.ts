import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response on GET of a hybrid use benefit
 *
 * Uses Azure REST API version 2019-12-01. In version 2.x of the Azure Native provider, it used API version 2019-12-01.
 */
export class HybridUseBenefit extends pulumi.CustomResource {
    /**
     * Get an existing HybridUseBenefit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HybridUseBenefit {
        return new HybridUseBenefit(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:softwareplan:HybridUseBenefit';

    /**
     * Returns true if the given object is an instance of HybridUseBenefit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HybridUseBenefit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HybridUseBenefit.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Created date
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * Indicates the revision of the hybrid use benefit
     */
    public /*out*/ readonly etag!: pulumi.Output<number>;
    /**
     * Last updated date
     */
    public /*out*/ readonly lastUpdatedDate!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Hybrid use benefit SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HybridUseBenefit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridUseBenefitArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["planId"] = args ? args.planId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastUpdatedDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastUpdatedDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:softwareplan/v20190601preview:HybridUseBenefit" }, { type: "azure-native:softwareplan/v20191201:HybridUseBenefit" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HybridUseBenefit.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HybridUseBenefit resource.
 */
export interface HybridUseBenefitArgs {
    /**
     * This is a unique identifier for a plan. Should be a guid.
     */
    planId?: pulumi.Input<string>;
    /**
     * The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
     */
    scope: pulumi.Input<string>;
    /**
     * Hybrid use benefit SKU
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
}