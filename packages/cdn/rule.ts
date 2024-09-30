import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Friendly Rules name mapping to the any Rules or secret related information.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-09-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
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
    public static readonly __pulumiType = 'azure-native:cdn:Rule';

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
    public readonly actions!: pulumi.Output<(types.outputs.DeliveryRuleCacheExpirationActionResponse | types.outputs.DeliveryRuleCacheKeyQueryStringActionResponse | types.outputs.DeliveryRuleRequestHeaderActionResponse | types.outputs.DeliveryRuleResponseHeaderActionResponse | types.outputs.DeliveryRuleRouteConfigurationOverrideActionResponse | types.outputs.OriginGroupOverrideActionResponse | types.outputs.UrlRedirectActionResponse | types.outputs.UrlRewriteActionResponse | types.outputs.UrlSigningActionResponse)[]>;
    /**
     * A list of conditions that must be matched for the actions to be executed
     */
    public readonly conditions!: pulumi.Output<(types.outputs.DeliveryRuleClientPortConditionResponse | types.outputs.DeliveryRuleCookiesConditionResponse | types.outputs.DeliveryRuleHostNameConditionResponse | types.outputs.DeliveryRuleHttpVersionConditionResponse | types.outputs.DeliveryRuleIsDeviceConditionResponse | types.outputs.DeliveryRulePostArgsConditionResponse | types.outputs.DeliveryRuleQueryStringConditionResponse | types.outputs.DeliveryRuleRemoteAddressConditionResponse | types.outputs.DeliveryRuleRequestBodyConditionResponse | types.outputs.DeliveryRuleRequestHeaderConditionResponse | types.outputs.DeliveryRuleRequestMethodConditionResponse | types.outputs.DeliveryRuleRequestSchemeConditionResponse | types.outputs.DeliveryRuleRequestUriConditionResponse | types.outputs.DeliveryRuleServerPortConditionResponse | types.outputs.DeliveryRuleSocketAddrConditionResponse | types.outputs.DeliveryRuleSslProtocolConditionResponse | types.outputs.DeliveryRuleUrlFileExtensionConditionResponse | types.outputs.DeliveryRuleUrlFileNameConditionResponse | types.outputs.DeliveryRuleUrlPathConditionResponse)[] | undefined>;
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
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
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
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20200901:Rule" }, { type: "azure-native:cdn/v20210601:Rule" }, { type: "azure-native:cdn/v20220501preview:Rule" }, { type: "azure-native:cdn/v20221101preview:Rule" }, { type: "azure-native:cdn/v20230501:Rule" }, { type: "azure-native:cdn/v20230701preview:Rule" }, { type: "azure-native:cdn/v20240201:Rule" }, { type: "azure-native:cdn/v20240501preview:Rule" }, { type: "azure-native:cdn/v20240601preview:Rule" }, { type: "azure-native:cdn/v20240901:Rule" }] };
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
    actions: pulumi.Input<pulumi.Input<types.inputs.DeliveryRuleCacheExpirationActionArgs | types.inputs.DeliveryRuleCacheKeyQueryStringActionArgs | types.inputs.DeliveryRuleRequestHeaderActionArgs | types.inputs.DeliveryRuleResponseHeaderActionArgs | types.inputs.DeliveryRuleRouteConfigurationOverrideActionArgs | types.inputs.OriginGroupOverrideActionArgs | types.inputs.UrlRedirectActionArgs | types.inputs.UrlRewriteActionArgs | types.inputs.UrlSigningActionArgs>[]>;
    /**
     * A list of conditions that must be matched for the actions to be executed
     */
    conditions?: pulumi.Input<pulumi.Input<types.inputs.DeliveryRuleClientPortConditionArgs | types.inputs.DeliveryRuleCookiesConditionArgs | types.inputs.DeliveryRuleHostNameConditionArgs | types.inputs.DeliveryRuleHttpVersionConditionArgs | types.inputs.DeliveryRuleIsDeviceConditionArgs | types.inputs.DeliveryRulePostArgsConditionArgs | types.inputs.DeliveryRuleQueryStringConditionArgs | types.inputs.DeliveryRuleRemoteAddressConditionArgs | types.inputs.DeliveryRuleRequestBodyConditionArgs | types.inputs.DeliveryRuleRequestHeaderConditionArgs | types.inputs.DeliveryRuleRequestMethodConditionArgs | types.inputs.DeliveryRuleRequestSchemeConditionArgs | types.inputs.DeliveryRuleRequestUriConditionArgs | types.inputs.DeliveryRuleServerPortConditionArgs | types.inputs.DeliveryRuleSocketAddrConditionArgs | types.inputs.DeliveryRuleSslProtocolConditionArgs | types.inputs.DeliveryRuleUrlFileExtensionConditionArgs | types.inputs.DeliveryRuleUrlFileNameConditionArgs | types.inputs.DeliveryRuleUrlPathConditionArgs>[]>;
    /**
     * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
     */
    matchProcessingBehavior?: pulumi.Input<string | types.enums.MatchProcessingBehavior>;
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