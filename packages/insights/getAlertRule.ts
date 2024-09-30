import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a classic metric alert rule
 * Azure REST API version: 2016-03-01.
 */
export function getAlertRule(args: GetAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getAlertRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetAlertRuleArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the rule.
     */
    ruleName: string;
}

/**
 * The alert rule resource.
 */
export interface GetAlertRuleResult {
    /**
     * action that is performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    readonly action?: types.outputs.RuleEmailActionResponse | types.outputs.RuleWebhookActionResponse;
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    readonly actions?: (types.outputs.RuleEmailActionResponse | types.outputs.RuleWebhookActionResponse)[];
    /**
     * the condition that results in the alert rule being activated.
     */
    readonly condition: types.outputs.LocationThresholdRuleConditionResponse | types.outputs.ManagementEventRuleConditionResponse | types.outputs.ThresholdRuleConditionResponse;
    /**
     * the description of the alert rule that will be included in the alert email.
     */
    readonly description?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * the flag that indicates whether the alert rule is enabled.
     */
    readonly isEnabled: boolean;
    /**
     * Last time the rule was updated in ISO8601 format.
     */
    readonly lastUpdatedTime: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * the provisioning state.
     */
    readonly provisioningState?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Gets a classic metric alert rule
 * Azure REST API version: 2016-03-01.
 */
export function getAlertRuleOutput(args: GetAlertRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlertRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:insights:getAlertRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetAlertRuleOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName: pulumi.Input<string>;
}