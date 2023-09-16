import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getRegistryComponentContainer(args: GetRegistryComponentContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryComponentContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230601preview:getRegistryComponentContainer", {
        "componentName": args.componentName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryComponentContainerArgs {
    /**
     * Container name.
     */
    componentName: string;
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
export interface GetRegistryComponentContainerResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly componentContainerProperties: types.outputs.machinelearningservices.v20230601preview.ComponentContainerResponse;
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
    readonly systemData: types.outputs.machinelearningservices.v20230601preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Azure Resource Manager resource envelope.
 */
export function getRegistryComponentContainerOutput(args: GetRegistryComponentContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryComponentContainerResult> {
    return pulumi.output(args).apply((a: any) => getRegistryComponentContainer(a, opts))
}

export interface GetRegistryComponentContainerOutputArgs {
    /**
     * Container name.
     */
    componentName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
