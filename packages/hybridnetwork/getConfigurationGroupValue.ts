import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified hybrid configuration group values.
 *
 * Uses Azure REST API version 2024-04-15.
 *
 * Other available API versions: 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridnetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConfigurationGroupValue(args: GetConfigurationGroupValueArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationGroupValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getConfigurationGroupValue", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-04-15.
 *
 * Other available API versions: 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridnetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConfigurationGroupValueOutput(args: GetConfigurationGroupValueOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationGroupValueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:getConfigurationGroupValue", {
        "configurationGroupValueName": args.configurationGroupValueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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