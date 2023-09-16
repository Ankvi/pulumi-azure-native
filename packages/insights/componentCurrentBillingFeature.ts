import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Application Insights component billing features
 * Azure REST API version: 2015-05-01. Prior API version in Azure Native 1.x: 2015-05-01
 */
export class ComponentCurrentBillingFeature extends pulumi.CustomResource {
    /**
     * Get an existing ComponentCurrentBillingFeature resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ComponentCurrentBillingFeature {
        return new ComponentCurrentBillingFeature(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights:ComponentCurrentBillingFeature';

    /**
     * Returns true if the given object is an instance of ComponentCurrentBillingFeature.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComponentCurrentBillingFeature {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComponentCurrentBillingFeature.__pulumiType;
    }

    /**
     * Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
     */
    public readonly currentBillingFeatures!: pulumi.Output<string[] | undefined>;
    /**
     * An Application Insights component daily data volume cap
     */
    public readonly dataVolumeCap!: pulumi.Output<types.outputs.insights.ApplicationInsightsComponentDataVolumeCapResponse | undefined>;

    /**
     * Create a ComponentCurrentBillingFeature resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComponentCurrentBillingFeatureArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["currentBillingFeatures"] = args ? args.currentBillingFeatures : undefined;
            resourceInputs["dataVolumeCap"] = args ? args.dataVolumeCap : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
        } else {
            resourceInputs["currentBillingFeatures"] = undefined /*out*/;
            resourceInputs["dataVolumeCap"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20150501:ComponentCurrentBillingFeature" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ComponentCurrentBillingFeature.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ComponentCurrentBillingFeature resource.
 */
export interface ComponentCurrentBillingFeatureArgs {
    /**
     * Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
     */
    currentBillingFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An Application Insights component daily data volume cap
     */
    dataVolumeCap?: pulumi.Input<types.inputs.insights.ApplicationInsightsComponentDataVolumeCapArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}
