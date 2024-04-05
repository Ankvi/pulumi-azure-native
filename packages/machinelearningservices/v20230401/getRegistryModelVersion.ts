import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getRegistryModelVersion(args: GetRegistryModelVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryModelVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401:getRegistryModelVersion", {
        "modelName": args.modelName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
    }, opts);
}

export interface GetRegistryModelVersionArgs {
    /**
     * Container name. This is case-sensitive.
     */
    modelName: string;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Version identifier. This is case-sensitive.
     */
    version: string;
}

/**
 * Azure Resource Manager resource envelope.
 */
export interface GetRegistryModelVersionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly modelVersionProperties: types.outputs.ModelVersionResponse;
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
export function getRegistryModelVersionOutput(args: GetRegistryModelVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryModelVersionResult> {
    return pulumi.output(args).apply((a: any) => getRegistryModelVersion(a, opts))
}

export interface GetRegistryModelVersionOutputArgs {
    /**
     * Container name. This is case-sensitive.
     */
    modelName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Version identifier. This is case-sensitive.
     */
    version: pulumi.Input<string>;
}