import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the automation rule.
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2023-02-01, 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-10-01-preview, 2025-01-01-preview, 2025-03-01, 2025-04-01-preview, 2025-06-01, 2025-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAutomationRule(args: GetAutomationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAutomationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getAutomationRule", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2023-02-01, 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-10-01-preview, 2025-01-01-preview, 2025-03-01, 2025-04-01-preview, 2025-06-01, 2025-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAutomationRuleOutput(args: GetAutomationRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAutomationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getAutomationRule", {
        "automationRuleId": args.automationRuleId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
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