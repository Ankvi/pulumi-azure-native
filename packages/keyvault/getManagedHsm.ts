import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified managed HSM Pool.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-07-01, 2024-04-01-preview.
 */
export function getManagedHsm(args: GetManagedHsmArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedHsmResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:keyvault:getManagedHsm", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedHsmArgs {
    /**
     * The name of the managed HSM Pool.
     */
    name: string;
    /**
     * Name of the resource group that contains the managed HSM pool.
     */
    resourceGroupName: string;
}

/**
 * Resource information with extended details.
 */
export interface GetManagedHsmResult {
    /**
     * The Azure Resource Manager resource ID for the managed HSM Pool.
     */
    readonly id: string;
    /**
     * The supported Azure location where the managed HSM Pool should be created.
     */
    readonly location?: string;
    /**
     * The name of the managed HSM Pool.
     */
    readonly name: string;
    /**
     * Properties of the managed HSM
     */
    readonly properties: types.outputs.ManagedHsmPropertiesResponse;
    /**
     * SKU details
     */
    readonly sku?: types.outputs.ManagedHsmSkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the key vault resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type of the managed HSM Pool.
     */
    readonly type: string;
}
/**
 * Gets the specified managed HSM Pool.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-07-01, 2024-04-01-preview.
 */
export function getManagedHsmOutput(args: GetManagedHsmOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedHsmResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:keyvault:getManagedHsm", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedHsmOutputArgs {
    /**
     * The name of the managed HSM Pool.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the managed HSM pool.
     */
    resourceGroupName: pulumi.Input<string>;
}