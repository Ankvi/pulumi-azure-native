import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a configuration profile preference
 *
 * Uses Azure REST API version 2020-06-30-preview.
 */
export function getConfigurationProfilePreference(args: GetConfigurationProfilePreferenceArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationProfilePreferenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automanage:getConfigurationProfilePreference", {
        "configurationProfilePreferenceName": args.configurationProfilePreferenceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationProfilePreferenceArgs {
    /**
     * The configuration profile preference name.
     */
    configurationProfilePreferenceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Definition of the configuration profile preference.
 */
export interface GetConfigurationProfilePreferenceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
    /**
     * Properties of the configuration profile preference.
     */
    readonly properties: types.outputs.ConfigurationProfilePreferencePropertiesResponse;
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
 * Get information about a configuration profile preference
 *
 * Uses Azure REST API version 2020-06-30-preview.
 */
export function getConfigurationProfilePreferenceOutput(args: GetConfigurationProfilePreferenceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationProfilePreferenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automanage:getConfigurationProfilePreference", {
        "configurationProfilePreferenceName": args.configurationProfilePreferenceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationProfilePreferenceOutputArgs {
    /**
     * The configuration profile preference name.
     */
    configurationProfilePreferenceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}