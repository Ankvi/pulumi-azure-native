import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Vault details.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2020-02-02, 2023-06-01, 2023-08-01, 2024-01-01.
 */
export function getVault(args: GetVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getVault", {
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetVaultArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    vaultName: string;
}

/**
 * Resource information, as returned by the resource provider.
 */
export interface GetVaultResult {
    /**
     * Optional ETag.
     */
    readonly etag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityDataResponse;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * Properties of the vault.
     */
    readonly properties: types.outputs.VaultPropertiesResponse;
    /**
     * Identifies the unique system identifier for each Azure resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Get the Vault details.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2020-02-02, 2023-06-01, 2023-08-01, 2024-01-01.
 */
export function getVaultOutput(args: GetVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVaultResult> {
    return pulumi.output(args).apply((a: any) => getVault(a, opts))
}

export interface GetVaultOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}