import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Capture logs and metrics of Azure resources based on ARM tags.
 */
export class SubAccountTagRule extends pulumi.CustomResource {
    /**
     * Get an existing SubAccountTagRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SubAccountTagRule {
        return new SubAccountTagRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logz/v20220101preview:SubAccountTagRule';

    /**
     * Returns true if the given object is an instance of SubAccountTagRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubAccountTagRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SubAccountTagRule.__pulumiType;
    }

    /**
     * Name of the rule set.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Definition of the properties for a TagRules resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.MonitoringTagRulesPropertiesResponse>;
    /**
     * The system metadata relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the rule set.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SubAccountTagRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubAccountTagRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.monitorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.subAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subAccountName'");
            }
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleSetName"] = args ? args.ruleSetName : undefined;
            resourceInputs["subAccountName"] = args ? args.subAccountName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:logz:SubAccountTagRule" }, { type: "azure-native:logz/v20201001:SubAccountTagRule" }, { type: "azure-native:logz/v20201001preview:SubAccountTagRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SubAccountTagRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SubAccountTagRule resource.
 */
export interface SubAccountTagRuleArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * Definition of the properties for a TagRules resource.
     */
    properties?: pulumi.Input<types.inputs.MonitoringTagRulesPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    ruleSetName?: pulumi.Input<string>;
    /**
     * Sub Account resource name
     */
    subAccountName: pulumi.Input<string>;
}
