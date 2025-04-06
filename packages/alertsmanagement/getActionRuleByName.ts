import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific action rule
 *
 * Uses Azure REST API version 2019-05-05-preview.
 */
export function getActionRuleByName(args: GetActionRuleByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetActionRuleByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:alertsmanagement:getActionRuleByName", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.ActionGroupResponse | types.outputs.DiagnosticsResponse | types.outputs.SuppressionResponse;
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
 *
 * Uses Azure REST API version 2019-05-05-preview.
 */
export function getActionRuleByNameOutput(args: GetActionRuleByNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetActionRuleByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:alertsmanagement:getActionRuleByName", {
        "actionRuleName": args.actionRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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