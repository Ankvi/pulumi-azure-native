import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export function getRegistryEnvironmentVersion(args: GetRegistryEnvironmentVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryEnvironmentVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20231001:getRegistryEnvironmentVersion", {
        "environmentName": args.environmentName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
    }, opts);
}

export interface GetRegistryEnvironmentVersionArgs {
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
    /**
     * Version identifier. This is case-sensitive.
     */
    version: string;
}

/**
 * Azure Resource Manager resource envelope.
 */
export interface GetRegistryEnvironmentVersionResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly environmentVersionProperties: types.outputs.EnvironmentVersionResponse;
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
export function getRegistryEnvironmentVersionOutput(args: GetRegistryEnvironmentVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryEnvironmentVersionResult> {
    return pulumi.output(args).apply((a: any) => getRegistryEnvironmentVersion(a, opts))
}

export interface GetRegistryEnvironmentVersionOutputArgs {
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
    /**
     * Version identifier. This is case-sensitive.
     */
    version: pulumi.Input<string>;
}
