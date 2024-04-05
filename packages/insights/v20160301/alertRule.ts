import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The alert rule resource.
 */
export class AlertRule extends pulumi.CustomResource {
    /**
     * Get an existing AlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AlertRule {
        return new AlertRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights/v20160301:AlertRule';

    /**
     * Returns true if the given object is an instance of AlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertRule.__pulumiType;
    }

    /**
     * action that is performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    public readonly action!: pulumi.Output<types.outputs.RuleEmailActionResponse | types.outputs.RuleWebhookActionResponse | undefined>;
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    public readonly actions!: pulumi.Output<(types.outputs.RuleEmailActionResponse | types.outputs.RuleWebhookActionResponse)[] | undefined>;
    /**
     * the condition that results in the alert rule being activated.
     */
    public readonly condition!: pulumi.Output<types.outputs.LocationThresholdRuleConditionResponse | types.outputs.ManagementEventRuleConditionResponse | types.outputs.ThresholdRuleConditionResponse>;
    /**
     * the description of the alert rule that will be included in the alert email.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * the flag that indicates whether the alert rule is enabled.
     */
    public readonly isEnabled!: pulumi.Output<boolean>;
    /**
     * Last time the rule was updated in ISO8601 format.
     */
    public /*out*/ readonly lastUpdatedTime!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * the provisioning state.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.condition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'condition'");
            }
            if ((!args || args.isEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isEnabled'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["action"] = undefined /*out*/;
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["condition"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights:AlertRule" }, { type: "azure-native:insights/v20140401:AlertRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AlertRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AlertRule resource.
 */
export interface AlertRuleArgs {
    /**
     * action that is performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    action?: pulumi.Input<types.inputs.RuleEmailActionArgs | types.inputs.RuleWebhookActionArgs>;
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    actions?: pulumi.Input<pulumi.Input<types.inputs.RuleEmailActionArgs | types.inputs.RuleWebhookActionArgs>[]>;
    /**
     * the condition that results in the alert rule being activated.
     */
    condition: pulumi.Input<types.inputs.LocationThresholdRuleConditionArgs | types.inputs.ManagementEventRuleConditionArgs | types.inputs.ThresholdRuleConditionArgs>;
    /**
     * the description of the alert rule that will be included in the alert email.
     */
    description?: pulumi.Input<string>;
    /**
     * the flag that indicates whether the alert rule is enabled.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * the name of the alert rule.
     */
    name: pulumi.Input<string>;
    /**
     * the provisioning state.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}