import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the tenant configuration.
 * Azure REST API version: 2020-09-01-preview.
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
 * Azure REST API version: 2020-09-01-preview.
 */
export function getTenantConfigurationOutput(args: GetTenantConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTenantConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getTenantConfiguration(a, opts))
}

export interface GetTenantConfigurationOutputArgs {
    /**
     * The name of the Configuration
     */
    configurationName: pulumi.Input<string>;
}