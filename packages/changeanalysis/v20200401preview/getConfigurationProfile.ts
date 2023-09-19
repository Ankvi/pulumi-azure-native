import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A profile object that contains change analysis configuration, such as notification settings, for this subscription
 */
export function getConfigurationProfile(args: GetConfigurationProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:changeanalysis/v20200401preview:getConfigurationProfile", {
        "profileName": args.profileName,
    }, opts);
}

export interface GetConfigurationProfileArgs {
    /**
     * The name of the configuration profile. The profile name should be set to 'default', all other names will be overwritten.
     */
    profileName: string;
}

/**
 * A profile object that contains change analysis configuration, such as notification settings, for this subscription
 */
export interface GetConfigurationProfileResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity block returned by ARM resource that supports managed identity.
     */
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * The location where the resource is to be deployed.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of a configuration profile.
     */
    readonly properties: types.outputs.ConfigurationProfileResourcePropertiesResponse;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    readonly systemData?: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * A profile object that contains change analysis configuration, such as notification settings, for this subscription
 */
export function getConfigurationProfileOutput(args: GetConfigurationProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationProfileResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationProfile(a, opts))
}

export interface GetConfigurationProfileOutputArgs {
    /**
     * The name of the configuration profile. The profile name should be set to 'default', all other names will be overwritten.
     */
    profileName: pulumi.Input<string>;
}
