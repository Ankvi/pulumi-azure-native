import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The cost allocation rule model definition
 *
 * Uses Azure REST API version 2020-03-01-preview. In version 1.x of the Azure Native provider, it used API version 2020-03-01-preview.
 *
 * Other available API versions: 2023-08-01, 2023-09-01, 2023-11-01, 2024-08-01, 2024-10-01-preview.
 */
export class CostAllocationRule extends pulumi.CustomResource {
    /**
     * Get an existing CostAllocationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CostAllocationRule {
        return new CostAllocationRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement:CostAllocationRule';

    /**
     * Returns true if the given object is an instance of CostAllocationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CostAllocationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CostAllocationRule.__pulumiType;
    }

    /**
     * Name of the rule. This is a read only value.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Cost allocation rule properties
     */
    public readonly properties!: pulumi.Output<types.outputs.CostAllocationRulePropertiesResponse>;
    /**
     * Resource type of the rule. This is a read only value of Microsoft.CostManagement/CostAllocationRule.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CostAllocationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CostAllocationRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.billingAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingAccountId'");
            }
            resourceInputs["billingAccountId"] = args ? args.billingAccountId : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement/v20200301preview:CostAllocationRule" }, { type: "azure-native:costmanagement/v20230801:CostAllocationRule" }, { type: "azure-native:costmanagement/v20230901:CostAllocationRule" }, { type: "azure-native:costmanagement/v20231101:CostAllocationRule" }, { type: "azure-native:costmanagement/v20240801:CostAllocationRule" }, { type: "azure-native:costmanagement/v20241001preview:CostAllocationRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CostAllocationRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CostAllocationRule resource.
 */
export interface CostAllocationRuleArgs {
    /**
     * BillingAccount ID
     */
    billingAccountId: pulumi.Input<string>;
    /**
     * Cost allocation rule properties
     */
    properties?: pulumi.Input<types.inputs.CostAllocationRulePropertiesArgs>;
    /**
     * Cost allocation rule name. The name cannot include spaces or any non alphanumeric characters other than '_' and '-'. The max length is 260 characters.
     */
    ruleName?: pulumi.Input<string>;
}