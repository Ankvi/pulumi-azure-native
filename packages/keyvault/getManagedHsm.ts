import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified managed HSM Pool.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2023-02-01, 2023-07-01, 2024-04-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native keyvault [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The Azure Resource Manager resource ID for the managed HSM Pool.
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
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
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2023-02-01, 2023-07-01, 2024-04-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native keyvault [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedHsmOutput(args: GetManagedHsmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedHsmResult> {
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