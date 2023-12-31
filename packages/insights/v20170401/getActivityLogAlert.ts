import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an activity log alert.
 */
export function getActivityLogAlert(args: GetActivityLogAlertArgs, opts?: pulumi.InvokeOptions): Promise<GetActivityLogAlertResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20170401:getActivityLogAlert", {
        "activityLogAlertName": args.activityLogAlertName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActivityLogAlertArgs {
    /**
     * The name of the activity log alert.
     */
    activityLogAlertName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An activity log alert resource.
 */
export interface GetActivityLogAlertResult {
    /**
     * The actions that will activate when the condition is met.
     */
    readonly actions: types.outputs.ActivityLogAlertActionListResponse;
    /**
     * The condition that will cause this alert to activate.
     */
    readonly condition: types.outputs.ActivityLogAlertAllOfConditionResponse;
    /**
     * A description of this activity log alert.
     */
    readonly description?: string;
    /**
     * Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
     */
    readonly enabled?: boolean;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.
     */
    readonly scopes: string[];
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
 * Get an activity log alert.
 */
export function getActivityLogAlertOutput(args: GetActivityLogAlertOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActivityLogAlertResult> {
    return pulumi.output(args).apply((a: any) => getActivityLogAlert(a, opts))
}

export interface GetActivityLogAlertOutputArgs {
    /**
     * The name of the activity log alert.
     */
    activityLogAlertName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
