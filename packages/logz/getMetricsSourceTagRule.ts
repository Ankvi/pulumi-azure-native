import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Capture metrics of Azure resources based on ARM tags.
 * Azure REST API version: 2022-01-01-preview.
 */
export function getMetricsSourceTagRule(args: GetMetricsSourceTagRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetMetricsSourceTagRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz:getMetricsSourceTagRule", {
        "metricsSourceName": args.metricsSourceName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "ruleSetName": args.ruleSetName,
    }, opts);
}

export interface GetMetricsSourceTagRuleArgs {
    /**
     * Metrics Account resource name
     */
    metricsSourceName: string;
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    ruleSetName: string;
}

/**
 * Capture metrics of Azure resources based on ARM tags.
 */
export interface GetMetricsSourceTagRuleResult {
    /**
     * The id of the rule set.
     */
    readonly id: string;
    /**
     * Name of the rule set.
     */
    readonly name: string;
    /**
     * Definition of the properties for a TagRules resource.
     */
    readonly properties: types.outputs.MetricsTagRulesPropertiesResponse;
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
 * Capture metrics of Azure resources based on ARM tags.
 * Azure REST API version: 2022-01-01-preview.
 */
export function getMetricsSourceTagRuleOutput(args: GetMetricsSourceTagRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMetricsSourceTagRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logz:getMetricsSourceTagRule", {
        "metricsSourceName": args.metricsSourceName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "ruleSetName": args.ruleSetName,
    }, opts);
}

export interface GetMetricsSourceTagRuleOutputArgs {
    /**
     * Metrics Account resource name
     */
    metricsSourceName: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    ruleSetName: pulumi.Input<string>;
}