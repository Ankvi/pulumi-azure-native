import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Markup rule
 *
 * Uses Azure REST API version 2022-10-05-preview. In version 2.x of the Azure Native provider, it used API version 2022-10-05-preview.
 */
export class MarkupRule extends pulumi.CustomResource {
    /**
     * Get an existing MarkupRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MarkupRule {
        return new MarkupRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement:MarkupRule';

    /**
     * Returns true if the given object is an instance of MarkupRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MarkupRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MarkupRule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Customer information for the markup rule.
     */
    public readonly customerDetails!: pulumi.Output<types.outputs.CustomerMetadataResponse>;
    /**
     * The description of the markup rule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Ending date of the markup rule.
     */
    public readonly endDate!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The markup percentage of the rule.
     */
    public readonly percentage!: pulumi.Output<number>;
    /**
     * Starting date of the markup rule.
     */
    public readonly startDate!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MarkupRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MarkupRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.billingAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingAccountId'");
            }
            if ((!args || args.billingProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingProfileId'");
            }
            if ((!args || args.customerDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'customerDetails'");
            }
            if ((!args || args.percentage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'percentage'");
            }
            if ((!args || args.startDate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startDate'");
            }
            resourceInputs["billingAccountId"] = args ? args.billingAccountId : undefined;
            resourceInputs["billingProfileId"] = args ? args.billingProfileId : undefined;
            resourceInputs["customerDetails"] = args ? args.customerDetails : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["endDate"] = args ? args.endDate : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["percentage"] = args ? args.percentage : undefined;
            resourceInputs["startDate"] = args ? args.startDate : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customerDetails"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["endDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["percentage"] = undefined /*out*/;
            resourceInputs["startDate"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement/v20221005preview:MarkupRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MarkupRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MarkupRule resource.
 */
export interface MarkupRuleArgs {
    /**
     * BillingAccount ID
     */
    billingAccountId: pulumi.Input<string>;
    /**
     * BillingProfile ID
     */
    billingProfileId: pulumi.Input<string>;
    /**
     * Customer information for the markup rule.
     */
    customerDetails: pulumi.Input<types.inputs.CustomerMetadataArgs>;
    /**
     * The description of the markup rule.
     */
    description?: pulumi.Input<string>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Ending date of the markup rule.
     */
    endDate?: pulumi.Input<string>;
    /**
     * Markup rule name.
     */
    name?: pulumi.Input<string>;
    /**
     * The markup percentage of the rule.
     */
    percentage: pulumi.Input<number>;
    /**
     * Starting date of the markup rule.
     */
    startDate: pulumi.Input<string>;
}