import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Capture logs and metrics of Azure resources based on ARM tags.
 */
export function getTagRule(args: GetTagRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetTagRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz/v20220101preview:getTagRule", {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
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
     * Definition of the properties for a TagRules resource.
     */
    readonly properties: types.outputs.logz.v20220101preview.MonitoringTagRulesPropertiesResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.logz.v20220101preview.SystemDataResponse;
    /**
     * The type of the rule set.
     */
    readonly type: string;
}
/**
 * Capture logs and metrics of Azure resources based on ARM tags.
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    ruleSetName: pulumi.Input<string>;
}
