import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Capture logs and metrics of Azure resources based on ARM tags.
 * Azure REST API version: 2022-01-01-preview.
 */
export function getSubAccountTagRule(args: GetSubAccountTagRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetSubAccountTagRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz:getSubAccountTagRule", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "ruleSetName": args.ruleSetName,
        "subAccountName": args.subAccountName,
    }, opts);
}

export interface GetSubAccountTagRuleArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    ruleSetName: string;
    /**
     * Sub Account resource name
     */
    subAccountName: string;
}

/**
 * Capture logs and metrics of Azure resources based on ARM tags.
 */
export interface GetSubAccountTagRuleResult {
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
 * Azure REST API version: 2022-01-01-preview.
 */
export function getSubAccountTagRuleOutput(args: GetSubAccountTagRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubAccountTagRuleResult> {
    return pulumi.output(args).apply((a: any) => getSubAccountTagRule(a, opts))
}

export interface GetSubAccountTagRuleOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    ruleSetName: pulumi.Input<string>;
    /**
     * Sub Account resource name
     */
    subAccountName: pulumi.Input<string>;
}