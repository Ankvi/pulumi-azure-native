import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets an existing delivery rule within a rule set.
 */
export function getRule(args: GetRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20230501:getRule", {
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
    readonly actions: (types.outputs.cdn.v20230501.DeliveryRuleCacheExpirationActionResponse | types.outputs.cdn.v20230501.DeliveryRuleCacheKeyQueryStringActionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestHeaderActionResponse | types.outputs.cdn.v20230501.DeliveryRuleResponseHeaderActionResponse | types.outputs.cdn.v20230501.DeliveryRuleRouteConfigurationOverrideActionResponse | types.outputs.cdn.v20230501.OriginGroupOverrideActionResponse | types.outputs.cdn.v20230501.UrlRedirectActionResponse | types.outputs.cdn.v20230501.UrlRewriteActionResponse | types.outputs.cdn.v20230501.UrlSigningActionResponse)[];
    /**
     * A list of conditions that must be matched for the actions to be executed
     */
    readonly conditions?: (types.outputs.cdn.v20230501.DeliveryRuleClientPortConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleCookiesConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleHostNameConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleHttpVersionConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleIsDeviceConditionResponse | types.outputs.cdn.v20230501.DeliveryRulePostArgsConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleQueryStringConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRemoteAddressConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestBodyConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestHeaderConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestMethodConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestSchemeConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleRequestUriConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleServerPortConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleSocketAddrConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleSslProtocolConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleUrlFileExtensionConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleUrlFileNameConditionResponse | types.outputs.cdn.v20230501.DeliveryRuleUrlPathConditionResponse)[];
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
    readonly systemData: types.outputs.cdn.v20230501.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing delivery rule within a rule set.
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
