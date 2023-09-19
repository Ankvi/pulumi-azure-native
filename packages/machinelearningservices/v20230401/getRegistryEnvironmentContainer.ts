import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getRegistryEnvironmentContainer(args: GetRegistryEnvironmentContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryEnvironmentContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401:getRegistryEnvironmentContainer", {
        "environmentName": args.environmentName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryEnvironmentContainerArgs {
    /**
     * Container name. This is case-sensitive.
     */
    environmentName: string;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Azure Resource Manager resource envelope.
 */
export interface GetRegistryEnvironmentContainerResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly environmentContainerProperties: types.outputs.EnvironmentContainerResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Azure Resource Manager resource envelope.
 */
export function getRegistryEnvironmentContainerOutput(args: GetRegistryEnvironmentContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryEnvironmentContainerResult> {
    return pulumi.output(args).apply((a: any) => getRegistryEnvironmentContainer(a, opts))
}

export interface GetRegistryEnvironmentContainerOutputArgs {
    /**
     * Container name. This is case-sensitive.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
