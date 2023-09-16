import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a specific action rule
 */
export function getActionRuleByName(args: GetActionRuleByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetActionRuleByNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:alertsmanagement/v20190505preview:getActionRuleByName", {
        "actionRuleName": args.actionRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActionRuleByNameArgs {
    /**
     * The name of action rule that needs to be fetched
     */
    actionRuleName: string;
    /**
     * Resource group name where the resource is created.
     */
    resourceGroupName: string;
}

/**
 * Action rule object containing target scope, conditions and suppression logic
 */
export interface GetActionRuleByNameResult {
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
     * action rule properties
     */
    readonly properties: types.outputs.alertsmanagement.v20190505preview.ActionGroupResponse | types.outputs.alertsmanagement.v20190505preview.DiagnosticsResponse | types.outputs.alertsmanagement.v20190505preview.SuppressionResponse;
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
 * Get a specific action rule
 */
export function getActionRuleByNameOutput(args: GetActionRuleByNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActionRuleByNameResult> {
    return pulumi.output(args).apply((a: any) => getActionRuleByName(a, opts))
}

export interface GetActionRuleByNameOutputArgs {
    /**
     * The name of action rule that needs to be fetched
     */
    actionRuleName: pulumi.Input<string>;
    /**
     * Resource group name where the resource is created.
     */
    resourceGroupName: pulumi.Input<string>;
}
