import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the active management group diagnostic settings for the specified resource.
 *
 * Uses Azure REST API version 2021-05-01-preview.
 */
export function getManagementGroupDiagnosticSetting(args: GetManagementGroupDiagnosticSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementGroupDiagnosticSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getManagementGroupDiagnosticSetting", {
        "managementGroupId": args.managementGroupId,
        "name": args.name,
    }, opts);
}

export interface GetManagementGroupDiagnosticSettingArgs {
    /**
     * The management group id.
     */
    managementGroupId: string;
    /**
     * The name of the diagnostic setting.
     */
    name: string;
}

/**
 * The management group diagnostic setting resource.
 */
export interface GetManagementGroupDiagnosticSettingResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource Id for the event hub authorization rule.
     */
    readonly eventHubAuthorizationRuleId?: string;
    /**
     * The name of the event hub. If none is specified, the default event hub will be selected.
     */
    readonly eventHubName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The list of logs settings.
     */
    readonly logs?: types.outputs.ManagementGroupLogSettingsResponse[];
    /**
     * The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs.
     */
    readonly marketplacePartnerId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
     */
    readonly serviceBusRuleId?: string;
    /**
     * The resource ID of the storage account to which you would like to send Diagnostic Logs.
     */
    readonly storageAccountId?: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
     */
    readonly workspaceId?: string;
}
/**
 * Gets the active management group diagnostic settings for the specified resource.
 *
 * Uses Azure REST API version 2021-05-01-preview.
 */
export function getManagementGroupDiagnosticSettingOutput(args: GetManagementGroupDiagnosticSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagementGroupDiagnosticSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getManagementGroupDiagnosticSetting", {
        "managementGroupId": args.managementGroupId,
        "name": args.name,
    }, opts);
}

export interface GetManagementGroupDiagnosticSettingOutputArgs {
    /**
     * The management group id.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The name of the diagnostic setting.
     */
    name: pulumi.Input<string>;
}