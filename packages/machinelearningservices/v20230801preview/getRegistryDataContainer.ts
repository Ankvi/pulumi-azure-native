import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getRegistryDataContainer(args: GetRegistryDataContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryDataContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230801preview:getRegistryDataContainer", {
        "name": args.name,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryDataContainerArgs {
    /**
     * Container name.
     */
    name: string;
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
export interface GetRegistryDataContainerResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly dataContainerProperties: types.outputs.DataContainerResponse;
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
export function getRegistryDataContainerOutput(args: GetRegistryDataContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryDataContainerResult> {
    return pulumi.output(args).apply((a: any) => getRegistryDataContainer(a, opts))
}

export interface GetRegistryDataContainerOutputArgs {
    /**
     * Container name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}