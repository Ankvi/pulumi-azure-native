import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Capture logs and metrics of Azure resources based on ARM tags.
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview.
 */
export function getTagRule(args: GetTagRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetTagRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:getTagRule", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "ruleSetName": args.ruleSetName,
    }, opts);
}

export interface GetTagRuleArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: string;
    /**
     * Tag Rule Set resource name
     */
    ruleSetName: string;
}

/**
 * Capture logs and metrics of Azure resources based on ARM tags.
 */
export interface GetTagRuleResult {
    /**
     * The id of the rule set.
     */
    readonly id: string;
    /**
     * Name of the rule set.
     */
    readonly name: string;
    /**
     * Properties of the monitoring tag rules.
     */
    readonly properties: types.outputs.MonitoringTagRulesPropertiesResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the rule set.
     */
    readonly type: string;
}
/**
 * Capture logs and metrics of Azure resources based on ARM tags.
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview.
 */
export function getTagRuleOutput(args: GetTagRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagRuleResult> {
    return pulumi.output(args).apply((a: any) => getTagRule(a, opts))
}

export interface GetTagRuleOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tag Rule Set resource name
     */
    ruleSetName: pulumi.Input<string>;
}
