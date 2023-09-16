import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Friendly Rules name mapping to the any Rules or secret related information.
 */
export class Rule extends pulumi.CustomResource {
    /**
     * Get an existing Rule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Rule {
        return new Rule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn/v20230501:Rule';

    /**
     * Returns true if the given object is an instance of Rule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Rule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Rule.__pulumiType;
    }

    /**
     * A list of actions that are executed when all the conditions of a rule are satisfied.
     */
    public readonly actions!: pulumi.Output<(types.outputs.cdn.v20230501.DeliveryRuleCacheExpirationActionResponse | types.outputs.cdn.v20230501.DeliveryRuleCacheKeyQueryStringActionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestHeaderActionResponse | types.outputs.cdn.v20230501.DeliveryRuleResponseHeaderActionResponse | types.outputs.cdn.v20230501.DeliveryRuleRouteConfigurationOverrideActionResponse | types.outputs.cdn.v20230501.OriginGroupOverrideActionResponse | types.outputs.cdn.v20230501.UrlRedirectActionResponse | types.outputs.cdn.v20230501.UrlRewriteActionResponse | types.outputs.cdn.v20230501.UrlSigningActionResponse)[]>;
    /**
     * A list of conditions that must be matched for the actions to be executed
     */
    public readonly conditions!: pulumi.Output<(types.outputs.cdn.v20230501.DeliveryRuleClientPortConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleCookiesConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleHostNameConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleHttpVersionConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleIsDeviceConditionResponse | types.outputs.cdn.v20230501.DeliveryRulePostArgsConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleQueryStringConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRemoteAddressConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestBodyConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestHeaderConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestMethodConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestSchemeConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestUriConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleServerPortConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleSocketAddrConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleSslProtocolConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleUrlFileExtensionConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleUrlFileNameConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleUrlPathConditionResponse)[] | undefined>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
     */
    public readonly matchProcessingBehavior!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
     */
    public readonly order!: pulumi.Output<number>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The name of the rule set containing the rule.
     */
    public readonly ruleSetName!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.cdn.v20230501.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Rule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.actions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actions'");
            }
            if ((!args || args.order === undefined) && !opts.urn) {
                throw new Error("Missing required property 'order'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.ruleSetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleSetName'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["matchProcessingBehavior"] = (args ? args.matchProcessingBehavior : undefined) ?? "Continue";
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["ruleSetName"] = args ? args.ruleSetName : undefined;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["conditions"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["matchProcessingBehavior"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["order"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ruleSetName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn:Rule" }, { type: "azure-native:cdn/v20200901:Rule" }, { type: "azure-native:cdn/v20210601:Rule" }, { type: "azure-native:cdn/v20220501preview:Rule" }, { type: "azure-native:cdn/v20221101preview:Rule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Rule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Rule resource.
 */
export interface RuleArgs {
    /**
     * A list of actions that are executed when all the conditions of a rule are satisfied.
     */
    actions: pulumi.Input<pulumi.Input<types.inputs.cdn.v20230501.DeliveryRuleCacheExpirationActionArgs | types.inputs.cdn.v20230501.DeliveryRuleCacheKeyQueryStringActionArgs | types.inputs.cdn.v20230501.DeliveryRuleRequestHeaderActionArgs | types.inputs.cdn.v20230501.DeliveryRuleResponseHeaderActionArgs | types.inputs.cdn.v20230501.DeliveryRuleRouteConfigurationOverrideActionArgs | types.inputs.cdn.v20230501.OriginGroupOverrideActionArgs | types.inputs.cdn.v20230501.UrlRedirectActionArgs | types.inputs.cdn.v20230501.UrlRewriteActionArgs | types.inputs.cdn.v20230501.UrlSigningActionArgs>[]>;
    /**
     * A list of conditions that must be matched for the actions to be executed
     */
    conditions?: pulumi.Input<pulumi.Input<types.inputs.cdn.v20230501.DeliveryRuleClientPortConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleCookiesConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleHostNameConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleHttpVersionConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleIsDeviceConditionArgs | types.inputs.cdn.v20230501.DeliveryRulePostArgsConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleQueryStringConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleRemoteAddressConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleRequestBodyConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleRequestHeaderConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleRequestMethodConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleRequestSchemeConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleRequestUriConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleServerPortConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleSocketAddrConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleSslProtocolConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleUrlFileExtensionConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleUrlFileNameConditionArgs | types.inputs.cdn.v20230501.DeliveryRuleUrlPathConditionArgs>[]>;
    /**
     * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
     */
    matchProcessingBehavior?: pulumi.Input<string | types.enums.v20230501.MatchProcessingBehavior>;
    /**
     * The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
     */
    order: pulumi.Input<number>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the delivery rule which is unique within the endpoint.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * Name of the rule set under the profile.
     */
    ruleSetName: pulumi.Input<string>;
}
