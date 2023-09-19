import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the automation rule.
 */
export function getAutomationRule(args: GetAutomationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAutomationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20190101preview:getAutomationRule", {
        "automationRuleId": args.automationRuleId,
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
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
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents an automation rule.
 */
export interface GetAutomationRuleResult {
    /**
     * The actions to execute when the automation rule is triggered
     */
    readonly actions: (types.outputs.AutomationRuleModifyPropertiesActionResponse | types.outputs.AutomationRuleRunPlaybookActionResponse)[];
    /**
     * Describes the client that created the automation rule
     */
    readonly createdBy: types.outputs.ClientInfoResponse;
    /**
     * The time the automation rule was created
     */
    readonly createdTimeUtc: string;
    /**
     * The display name of the automation  rule
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Describes the client that last updated the automation rule
     */
    readonly lastModifiedBy: types.outputs.ClientInfoResponse;
    /**
     * The last time the automation rule was updated
     */
    readonly lastModifiedTimeUtc: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The order of execution of the automation rule
     */
    readonly order: number;
    /**
     * The triggering logic of the automation rule
     */
    readonly triggeringLogic: types.outputs.AutomationRuleTriggeringLogicResponse;
    /**
     * Azure resource type
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
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
