import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get dismiss rule, with name: {alertsSuppressionRuleName}, for the given subscription
 *
 * Uses Azure REST API version 2019-01-01-preview.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Any comment regarding the rule
     */
    readonly comment?: string;
    /**
     * Expiration date of the rule, if value is not provided or provided as null there will no expiration at all
     */
    readonly expirationDateUtc?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The last time this rule was modified
     */
    readonly lastModifiedUtc: string;
    /**
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get dismiss rule, with name: {alertsSuppressionRuleName}, for the given subscription
 *
 * Uses Azure REST API version 2019-01-01-preview.
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