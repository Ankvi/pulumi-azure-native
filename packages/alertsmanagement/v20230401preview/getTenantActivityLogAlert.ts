import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get Tenant Activity Log Alert rule.
 */
export function getTenantActivityLogAlert(args: GetTenantActivityLogAlertArgs, opts?: pulumi.InvokeOptions): Promise<GetTenantActivityLogAlertResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:alertsmanagement/v20230401preview:getTenantActivityLogAlert", {
        "alertRuleName": args.alertRuleName,
        "managementGroupName": args.managementGroupName,
    }, opts);
}

export interface GetTenantActivityLogAlertArgs {
    /**
     * The name of the Tenant Activity Log Alert rule.
     */
    alertRuleName: string;
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: string;
}

/**
 * A Tenant Activity Log Alert rule resource.
 */
export interface GetTenantActivityLogAlertResult {
    /**
     * The actions that will activate when the condition is met.
     */
    readonly actions: types.outputs.alertsmanagement.v20230401preview.ActionListResponse;
    /**
     * The condition that will cause this alert to activate.
     */
    readonly condition: types.outputs.alertsmanagement.v20230401preview.AlertRuleAllOfConditionResponse;
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
     * The location of the resource. Since Azure Activity Log Alerts is a global service, the location of the rules should always be 'global'.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item.
     */
    readonly scopes?: string[];
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The tenant GUID. Must be provided for tenant-level and management group events rules.
     */
    readonly tenantScope?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get Tenant Activity Log Alert rule.
 */
export function getTenantActivityLogAlertOutput(args: GetTenantActivityLogAlertOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTenantActivityLogAlertResult> {
    return pulumi.output(args).apply((a: any) => getTenantActivityLogAlert(a, opts))
}

export interface GetTenantActivityLogAlertOutputArgs {
    /**
     * The name of the Tenant Activity Log Alert rule.
     */
    alertRuleName: pulumi.Input<string>;
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: pulumi.Input<string>;
}
