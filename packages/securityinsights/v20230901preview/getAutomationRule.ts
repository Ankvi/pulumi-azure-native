import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the automation rule.
 */
export function getAutomationRule(args: GetAutomationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAutomationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230901preview:getAutomationRule", {
        "automationRuleId": args.automationRuleId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAutomationRuleArgs {
    /**
     * Automation rule ID
     */
    automationRuleId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

export interface GetAutomationRuleResult {
    /**
     * The actions to execute when the automation rule is triggered.
     */
    readonly actions: (types.outputs.AutomationRuleAddIncidentTaskActionResponse | types.outputs.AutomationRuleModifyPropertiesActionResponse | types.outputs.AutomationRuleRunPlaybookActionResponse)[];
    /**
     * Information on the client (user or application) that made some action
     */
    readonly createdBy: types.outputs.ClientInfoResponse;
    /**
     * The time the automation rule was created.
     */
    readonly createdTimeUtc: string;
    /**
     * The display name of the automation rule.
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Information on the client (user or application) that made some action
     */
    readonly lastModifiedBy: types.outputs.ClientInfoResponse;
    /**
     * The last time the automation rule was updated.
     */
    readonly lastModifiedTimeUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The order of execution of the automation rule.
     */
    readonly order: number;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Describes automation rule triggering logic.
     */
    readonly triggeringLogic: types.outputs.AutomationRuleTriggeringLogicResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the automation rule.
 */
export function getAutomationRuleOutput(args: GetAutomationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutomationRuleResult> {
    return pulumi.output(args).apply((a: any) => getAutomationRule(a, opts))
}

export interface GetAutomationRuleOutputArgs {
    /**
     * Automation rule ID
     */
    automationRuleId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
