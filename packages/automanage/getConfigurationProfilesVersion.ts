import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a configuration profile version
 *
 * Uses Azure REST API version 2022-05-04.
 */
export function getConfigurationProfilesVersion(args: GetConfigurationProfilesVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationProfilesVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automanage:getConfigurationProfilesVersion", {
        "configurationProfileName": args.configurationProfileName,
        "resourceGroupName": args.resourceGroupName,
        "versionName": args.versionName,
    }, opts);
}

export interface GetConfigurationProfilesVersionArgs {
    /**
     * The configuration profile name.
     */
    configurationProfileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The configuration profile version name.
     */
    versionName: string;
}

/**
 * Definition of the configuration profile.
 */
export interface GetConfigurationProfilesVersionResult {
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
 * Get information about a configuration profile version
 *
 * Uses Azure REST API version 2022-05-04.
 */
export function getConfigurationProfilesVersionOutput(args: GetConfigurationProfilesVersionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationProfilesVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automanage:getConfigurationProfilesVersion", {
        "configurationProfileName": args.configurationProfileName,
        "resourceGroupName": args.resourceGroupName,
        "versionName": args.versionName,
    }, opts);
}

export interface GetConfigurationProfilesVersionOutputArgs {
    /**
     * The configuration profile name.
     */
    configurationProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The configuration profile version name.
     */
    versionName: pulumi.Input<string>;
}