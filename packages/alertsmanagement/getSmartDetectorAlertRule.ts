import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific Smart Detector alert rule.
 * Azure REST API version: 2021-04-01.
 */
export function getSmartDetectorAlertRule(args: GetSmartDetectorAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetSmartDetectorAlertRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:alertsmanagement:getSmartDetectorAlertRule", {
        "alertRuleName": args.alertRuleName,
        "expandDetector": args.expandDetector,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSmartDetectorAlertRuleArgs {
    /**
     * The name of the alert rule.
     */
    alertRuleName: string;
    /**
     * Indicates if Smart Detector should be expanded.
     */
    expandDetector?: boolean;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The alert rule information
 */
export interface GetSmartDetectorAlertRuleResult {
    /**
     * The alert rule actions.
     */
    readonly actionGroups: types.outputs.ActionGroupsInformationResponse;
    /**
     * The alert rule description.
     */
    readonly description?: string;
    /**
     * The alert rule's detector.
     */
    readonly detector: types.outputs.DetectorResponse;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 1 minute, depending on the detector.
     */
    readonly frequency: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The alert rule resources scope.
     */
    readonly scope: string[];
    /**
     * The alert rule severity.
     */
    readonly severity: string;
    /**
     * The alert rule state.
     */
    readonly state: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The alert rule throttling information.
     */
    readonly throttling?: types.outputs.ThrottlingInformationResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get a specific Smart Detector alert rule.
 * Azure REST API version: 2021-04-01.
 */
export function getSmartDetectorAlertRuleOutput(args: GetSmartDetectorAlertRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSmartDetectorAlertRuleResult> {
    return pulumi.output(args).apply((a: any) => getSmartDetectorAlertRule(a, opts))
}

export interface GetSmartDetectorAlertRuleOutputArgs {
    /**
     * The name of the alert rule.
     */
    alertRuleName: pulumi.Input<string>;
    /**
     * Indicates if Smart Detector should be expanded.
     */
    expandDetector?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}