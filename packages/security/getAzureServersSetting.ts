import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a server vulnerability assessments setting of the requested kind, that is set on the subscription
 * Azure REST API version: 2023-05-01.
 */
export function getAzureServersSetting(args: GetAzureServersSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureServersSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAzureServersSetting", {
        "settingKind": args.settingKind,
    }, opts);
}

export interface GetAzureServersSettingArgs {
    /**
     * The kind of the server vulnerability assessments setting
     */
    settingKind: string;
}

/**
 * A vulnerability assessments setting on Azure servers in the defined scope.
 */
export interface GetAzureServersSettingResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The kind of the server vulnerability assessments setting
     * Expected value is 'AzureServersSetting'.
     */
    readonly kind: "AzureServersSetting";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The selected vulnerability assessments provider on Azure servers in the defined scope.
     */
    readonly selectedProvider: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.security.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a server vulnerability assessments setting of the requested kind, that is set on the subscription
 * Azure REST API version: 2023-05-01.
 */
export function getAzureServersSettingOutput(args: GetAzureServersSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureServersSettingResult> {
    return pulumi.output(args).apply((a: any) => getAzureServersSetting(a, opts))
}

export interface GetAzureServersSettingOutputArgs {
    /**
     * The kind of the server vulnerability assessments setting
     */
    settingKind: pulumi.Input<string>;
}
