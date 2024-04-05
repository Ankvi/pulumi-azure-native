import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getRegistryCodeContainer(args: GetRegistryCodeContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryCodeContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401:getRegistryCodeContainer", {
        "codeName": args.codeName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryCodeContainerArgs {
    /**
     * Container name.
     */
    codeName: string;
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
export interface GetRegistryCodeContainerResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly codeContainerProperties: types.outputs.CodeContainerResponse;
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
export function getRegistryCodeContainerOutput(args: GetRegistryCodeContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryCodeContainerResult> {
    return pulumi.output(args).apply((a: any) => getRegistryCodeContainer(a, opts))
}

export interface GetRegistryCodeContainerOutputArgs {
    /**
     * Container name.
     */
    codeName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}