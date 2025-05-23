import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an Activity Log Alert rule.
 *
 * Uses Azure REST API version 2020-10-01.
 */
export function getActivityLogAlert(args: GetActivityLogAlertArgs, opts?: pulumi.InvokeOptions): Promise<GetActivityLogAlertResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getActivityLogAlert", {
        "activityLogAlertName": args.activityLogAlertName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActivityLogAlertArgs {
    /**
     * The name of the Activity Log Alert rule.
     */
    activityLogAlertName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Activity Log Alert rule resource.
 */
export interface GetActivityLogAlertResult {
    /**
     * The actions that will activate when the condition is met.
     */
    readonly actions: types.outputs.ActionListResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The condition that will cause this alert to activate.
     */
    readonly condition: types.outputs.AlertRuleAllOfConditionResponse;
    /**
     * A description of this Activity Log Alert rule.
     */
    readonly description?: string;
    /**
     * Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated.
     */
    readonly enabled?: boolean;
    /**
     * The resource Id.
     */
    readonly id: string;
    /**
     * The location of the resource. Azure Activity Log Alert rules are supported on Global, West Europe and North Europe regions.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item.
     */
    readonly scopes: string[];
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get an Activity Log Alert rule.
 *
 * Uses Azure REST API version 2020-10-01.
 */
export function getActivityLogAlertOutput(args: GetActivityLogAlertOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetActivityLogAlertResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getActivityLogAlert", {
        "activityLogAlertName": args.activityLogAlertName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActivityLogAlertOutputArgs {
    /**
     * The name of the Activity Log Alert rule.
     */
    activityLogAlertName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}