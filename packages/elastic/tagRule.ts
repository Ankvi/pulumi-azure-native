import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Capture logs and metrics of Azure resources based on ARM tags.
 * Azure REST API version: 2023-06-01. Prior API version in Azure Native 1.x: 2020-07-01
 */
export class TagRule extends pulumi.CustomResource {
    /**
     * Get an existing TagRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TagRule {
        return new TagRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:elastic:TagRule';

    /**
     * Returns true if the given object is an instance of TagRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagRule.__pulumiType;
    }

    /**
     * Name of the rule set.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the monitoring tag rules.
     */
    public readonly properties!: pulumi.Output<types.outputs.elastic.MonitoringTagRulesPropertiesResponse>;
    /**
     * The system metadata relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.elastic.SystemDataResponse>;
    /**
     * The type of the rule set.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TagRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.monitorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleSetName"] = args ? args.ruleSetName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:elastic/v20200701:TagRule" }, { type: "azure-native:elastic/v20200701preview:TagRule" }, { type: "azure-native:elastic/v20210901preview:TagRule" }, { type: "azure-native:elastic/v20211001preview:TagRule" }, { type: "azure-native:elastic/v20220505preview:TagRule" }, { type: "azure-native:elastic/v20220701preview:TagRule" }, { type: "azure-native:elastic/v20220901preview:TagRule" }, { type: "azure-native:elastic/v20230201preview:TagRule" }, { type: "azure-native:elastic/v20230501preview:TagRule" }, { type: "azure-native:elastic/v20230601:TagRule" }, { type: "azure-native:elastic/v20230615preview:TagRule" }, { type: "azure-native:elastic/v20230701preview:TagRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TagRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TagRule resource.
 */
export interface TagRuleArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * Properties of the monitoring tag rules.
     */
    properties?: pulumi.Input<types.inputs.elastic.MonitoringTagRulesPropertiesArgs>;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tag Rule Set resource name
     */
    ruleSetName?: pulumi.Input<string>;
}
