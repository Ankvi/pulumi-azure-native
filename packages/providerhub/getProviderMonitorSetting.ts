import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the provider monitor setting details.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getProviderMonitorSetting(args: GetProviderMonitorSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderMonitorSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub:getProviderMonitorSetting", {
        "providerMonitorSettingName": args.providerMonitorSettingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProviderMonitorSettingArgs {
    /**
     * The name of the provider monitor setting.
     */
    providerMonitorSettingName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetProviderMonitorSettingResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.ProviderMonitorSettingPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the provider monitor setting details.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getProviderMonitorSettingOutput(args: GetProviderMonitorSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProviderMonitorSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:providerhub:getProviderMonitorSetting", {
        "providerMonitorSettingName": args.providerMonitorSettingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProviderMonitorSettingOutputArgs {
    /**
     * The name of the provider monitor setting.
     */
    providerMonitorSettingName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}