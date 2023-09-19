import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a configuration profile
 * Azure REST API version: 2022-05-04.
 */
export function getConfigurationProfile(args: GetConfigurationProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automanage:getConfigurationProfile", {
        "configurationProfileName": args.configurationProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationProfileArgs {
    /**
     * The configuration profile name.
     */
    configurationProfileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Definition of the configuration profile.
 */
export interface GetConfigurationProfileResult {
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
     * Properties of the configuration profile.
     */
    readonly properties: types.outputs.ConfigurationProfilePropertiesResponse;
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
 * Get information about a configuration profile
 * Azure REST API version: 2022-05-04.
 */
export function getConfigurationProfileOutput(args: GetConfigurationProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationProfileResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationProfile(a, opts))
}

export interface GetConfigurationProfileOutputArgs {
    /**
     * The configuration profile name.
     */
    configurationProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
