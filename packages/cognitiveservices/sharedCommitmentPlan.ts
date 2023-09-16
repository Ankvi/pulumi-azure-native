import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Cognitive Services account commitment plan.
 * Azure REST API version: 2023-05-01.
 */
export class SharedCommitmentPlan extends pulumi.CustomResource {
    /**
     * Get an existing SharedCommitmentPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SharedCommitmentPlan {
        return new SharedCommitmentPlan(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cognitiveservices:SharedCommitmentPlan';

    /**
     * Returns true if the given object is an instance of SharedCommitmentPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SharedCommitmentPlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SharedCommitmentPlan.__pulumiType;
    }

    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The Kind of the resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of Cognitive Services account commitment plan.
     */
    public readonly properties!: pulumi.Output<types.outputs.cognitiveservices.CommitmentPlanPropertiesResponse>;
    /**
     * The resource model definition representing SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.cognitiveservices.SkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.cognitiveservices.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SharedCommitmentPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedCommitmentPlanArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["commitmentPlanName"] = args ? args.commitmentPlanName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cognitiveservices/v20221201:SharedCommitmentPlan" }, { type: "azure-native:cognitiveservices/v20230501:SharedCommitmentPlan" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SharedCommitmentPlan.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SharedCommitmentPlan resource.
 */
export interface SharedCommitmentPlanArgs {
    /**
     * The name of the commitmentPlan associated with the Cognitive Services Account
     */
    commitmentPlanName?: pulumi.Input<string>;
    /**
     * The Kind of the resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Properties of Cognitive Services account commitment plan.
     */
    properties?: pulumi.Input<types.inputs.cognitiveservices.CommitmentPlanPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource model definition representing SKU
     */
    sku?: pulumi.Input<types.inputs.cognitiveservices.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
