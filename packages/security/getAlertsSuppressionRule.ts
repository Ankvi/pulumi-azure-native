import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get dismiss rule, with name: {alertsSuppressionRuleName}, for the given subscription
 * Azure REST API version: 2019-01-01-preview.
 */
export function getAlertsSuppressionRule(args: GetAlertsSuppressionRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertsSuppressionRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAlertsSuppressionRule", {
        "alertsSuppressionRuleName": args.alertsSuppressionRuleName,
    }, opts);
}

export interface GetAlertsSuppressionRuleArgs {
    /**
     * The unique name of the suppression alert rule
     */
    alertsSuppressionRuleName: string;
}

/**
 * Describes the suppression rule
 */
export interface GetAlertsSuppressionRuleResult {
    /**
     * Type of the alert to automatically suppress. For all alert types, use '*'
     */
    readonly alertType: string;
    /**
     * Any comment regarding the rule
     */
    readonly comment?: string;
    /**
     * Expiration date of the rule, if value is not provided or provided as null there will no expiration at all
     */
    readonly expirationDateUtc?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The last time this rule was modified
     */
    readonly lastModifiedUtc: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The reason for dismissing the alert
     */
    readonly reason: string;
    /**
     * Possible states of the rule
     */
    readonly state: string;
    /**
     * The suppression conditions
     */
    readonly suppressionAlertsScope?: types.outputs.SuppressionAlertsScopeResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get dismiss rule, with name: {alertsSuppressionRuleName}, for the given subscription
 * Azure REST API version: 2019-01-01-preview.
 */
export function getAlertsSuppressionRuleOutput(args: GetAlertsSuppressionRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAlertsSuppressionRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getAlertsSuppressionRule", {
        "alertsSuppressionRuleName": args.alertsSuppressionRuleName,
    }, opts);
}

export interface GetAlertsSuppressionRuleOutputArgs {
    /**
     * The unique name of the suppression alert rule
     */
    alertsSuppressionRuleName: pulumi.Input<string>;
}