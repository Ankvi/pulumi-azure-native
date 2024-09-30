import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the active diagnostic setting for AadIam.
 * Azure REST API version: 2017-04-01.
 *
 * Other available API versions: 2017-04-01-preview.
 */
export function getDiagnosticSetting(args: GetDiagnosticSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetDiagnosticSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:aadiam:getDiagnosticSetting", {
        "name": args.name,
    }, opts);
}

export interface GetDiagnosticSettingArgs {
    /**
     * The name of the diagnostic setting.
     */
    name: string;
}

/**
 * The diagnostic setting resource.
 */
export interface GetDiagnosticSettingResult {
    /**
     * The resource Id for the event hub authorization rule.
     */
    readonly eventHubAuthorizationRuleId?: string;
    /**
     * The name of the event hub. If none is specified, the default event hub will be selected.
     */
    readonly eventHubName?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The list of logs settings.
     */
    readonly logs?: types.outputs.LogSettingsResponse[];
    /**
     * Azure resource name
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
     * Azure resource type
     */
    readonly type: string;
    /**
     * The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
     */
    readonly workspaceId?: string;
}
/**
 * Gets the active diagnostic setting for AadIam.
 * Azure REST API version: 2017-04-01.
 *
 * Other available API versions: 2017-04-01-preview.
 */
export function getDiagnosticSettingOutput(args: GetDiagnosticSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiagnosticSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:aadiam:getDiagnosticSetting", {
        "name": args.name,
    }, opts);
}

export interface GetDiagnosticSettingOutputArgs {
    /**
     * The name of the diagnostic setting.
     */
    name: pulumi.Input<string>;
}