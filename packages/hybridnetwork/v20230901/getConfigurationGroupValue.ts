import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified hybrid configuration group values.
 */
export function getConfigurationGroupValue(args: GetConfigurationGroupValueArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationGroupValueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork/v20230901:getConfigurationGroupValue", {
        "configurationGroupValueName": args.configurationGroupValueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationGroupValueArgs {
    /**
     * The name of the configuration group value.
     */
    configurationGroupValueName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Hybrid configuration group value resource.
 */
export interface GetConfigurationGroupValueResult {
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
     * Hybrid configuration group value properties.
     */
    readonly properties: types.outputs.ConfigurationValueWithSecretsResponse | types.outputs.ConfigurationValueWithoutSecretsResponse;
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
 * Gets information about the specified hybrid configuration group values.
 */
export function getConfigurationGroupValueOutput(args: GetConfigurationGroupValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationGroupValueResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationGroupValue(a, opts))
}

export interface GetConfigurationGroupValueOutputArgs {
    /**
     * The name of the configuration group value.
     */
    configurationGroupValueName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}