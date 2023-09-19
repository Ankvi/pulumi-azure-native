import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets guest diagnostics settings.
 * Azure REST API version: 2018-06-01-preview.
 */
export function getGuestDiagnosticsSetting(args: GetGuestDiagnosticsSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestDiagnosticsSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getGuestDiagnosticsSetting", {
        "diagnosticSettingsName": args.diagnosticSettingsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGuestDiagnosticsSettingArgs {
    /**
     * The name of the diagnostic setting.
     */
    diagnosticSettingsName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Virtual machine guest diagnostics settings resource.
 */
export interface GetGuestDiagnosticsSettingResult {
    /**
     * the array of data source object which are configured to collect and send data
     */
    readonly dataSources?: types.outputs.DataSourceResponse[];
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
     * Operating system type for the configuration
     */
    readonly osType?: string;
    readonly proxySetting?: string;
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
 * Gets guest diagnostics settings.
 * Azure REST API version: 2018-06-01-preview.
 */
export function getGuestDiagnosticsSettingOutput(args: GetGuestDiagnosticsSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGuestDiagnosticsSettingResult> {
    return pulumi.output(args).apply((a: any) => getGuestDiagnosticsSetting(a, opts))
}

export interface GetGuestDiagnosticsSettingOutputArgs {
    /**
     * The name of the diagnostic setting.
     */
    diagnosticSettingsName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
