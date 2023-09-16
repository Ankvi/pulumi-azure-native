import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing delivery rule within a rule set.
 * Azure REST API version: 2023-05-01.
 */
export function getRule(args: GetRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getRule", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
        "ruleSetName": args.ruleSetName,
    }, opts);
}

export interface GetRuleArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the delivery rule which is unique within the endpoint.
     */
    ruleName: string;
    /**
     * Name of the rule set under the profile.
     */
    ruleSetName: string;
}

/**
 * Friendly Rules name mapping to the any Rules or secret related information.
 */
export interface GetRuleResult {
    /**
     * A list of actions that are executed when all the conditions of a rule are satisfied.
     */
    readonly actions: (types.outputs.cdn.DeliveryRuleCacheExpirationActionResponse | types.outputs.cdn.DeliveryRuleCacheKeyQueryStringActionResponse | types.outputs.cdn.DeliveryRuleRequestHeaderActionResponse | types.outputs.cdn.DeliveryRuleResponseHeaderActionResponse | types.outputs.cdn.DeliveryRuleRouteConfigurationOverrideActionResponse | types.outputs.cdn.OriginGroupOverrideActionResponse | types.outputs.cdn.UrlRedirectActionResponse | types.outputs.cdn.UrlRewriteActionResponse | types.outputs.cdn.UrlSigningActionResponse)[];
    /**
     * A list of conditions that must be matched for the actions to be executed
     */
    readonly conditions?: (types.outputs.cdn.DeliveryRuleClientPortConditionResponse | types.outputs.cdn.DeliveryRuleCookiesConditionResponse | types.outputs.cdn.DeliveryRuleHostNameConditionResponse | types.outputs.cdn.DeliveryRuleHttpVersionConditionResponse | types.outputs.cdn.DeliveryRuleIsDeviceConditionResponse | types.outputs.cdn.DeliveryRulePostArgsConditionResponse | types.outputs.cdn.DeliveryRuleQueryStringConditionResponse | types.outputs.cdn.DeliveryRuleRemoteAddressConditionResponse | types.outputs.cdn.DeliveryRuleRequestBodyConditionResponse | types.outputs.cdn.DeliveryRuleRequestHeaderConditionResponse | types.outputs.cdn.DeliveryRuleRequestMethodConditionResponse | types.outputs.cdn.DeliveryRuleRequestSchemeConditionResponse | types.outputs.cdn.DeliveryRuleRequestUriConditionResponse | types.outputs.cdn.DeliveryRuleServerPortConditionResponse | types.outputs.cdn.DeliveryRuleSocketAddrConditionResponse | types.outputs.cdn.DeliveryRuleSslProtocolConditionResponse | types.outputs.cdn.DeliveryRuleUrlFileExtensionConditionResponse | types.outputs.cdn.DeliveryRuleUrlFileNameConditionResponse | types.outputs.cdn.DeliveryRuleUrlPathConditionResponse)[];
    readonly deploymentStatus: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
     */
    readonly matchProcessingBehavior?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
     */
    readonly order: number;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * The name of the rule set containing the rule.
     */
    readonly ruleSetName: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.cdn.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing delivery rule within a rule set.
 * Azure REST API version: 2023-05-01.
 */
export function getRuleOutput(args: GetRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRuleResult> {
    return pulumi.output(args).apply((a: any) => getRule(a, opts))
}

export interface GetRuleOutputArgs {
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
    ruleName: pulumi.Input<string>;
    /**
     * Name of the rule set under the profile.
     */
    ruleSetName: pulumi.Input<string>;
}
