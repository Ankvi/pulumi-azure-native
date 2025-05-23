import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the tenant configuration.
 *
 * Uses Azure REST API version 2022-12-01-preview.
 *
 * Other available API versions: 2019-01-01-preview, 2020-09-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native portal [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTenantConfiguration(args: GetTenantConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetTenantConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal:getTenantConfiguration", {
        "configurationName": args.configurationName,
    }, opts);
}

export interface GetTenantConfigurationArgs {
    /**
     * The name of the Configuration
     */
    configurationName: string;
}

/**
 * The tenant configuration resource definition.
 */
export interface GetTenantConfigurationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.ConfigurationPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the tenant configuration.
 *
 * Uses Azure REST API version 2022-12-01-preview.
 *
 * Other available API versions: 2019-01-01-preview, 2020-09-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native portal [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTenantConfigurationOutput(args: GetTenantConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTenantConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:portal:getTenantConfiguration", {
        "configurationName": args.configurationName,
    }, opts);
}

export interface GetTenantConfigurationOutputArgs {
    /**
     * The name of the Configuration
     */
    configurationName: pulumi.Input<string>;
}