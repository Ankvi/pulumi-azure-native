import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getRegistryComponentVersion(args: GetRegistryComponentVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryComponentVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401preview:getRegistryComponentVersion", {
        "componentName": args.componentName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
    }, opts);
}

export interface GetRegistryComponentVersionArgs {
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
    /**
     * Version identifier.
     */
    version: string;
}

/**
 * Azure Resource Manager resource envelope.
 */
export interface GetRegistryComponentVersionResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly componentVersionProperties: types.outputs.ComponentVersionResponse;
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
export function getRegistryComponentVersionOutput(args: GetRegistryComponentVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryComponentVersionResult> {
    return pulumi.output(args).apply((a: any) => getRegistryComponentVersion(a, opts))
}

export interface GetRegistryComponentVersionOutputArgs {
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
    /**
     * Version identifier.
     */
    version: pulumi.Input<string>;
}
