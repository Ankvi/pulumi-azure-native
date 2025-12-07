import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Vault details.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-02-01, 2023-04-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-09-30-preview, 2025-01-01, 2025-02-01, 2025-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native recoveryservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-02-01, 2023-04-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-09-30-preview, 2025-01-01, 2025-02-01, 2025-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native recoveryservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVaultOutput(args: GetVaultOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVaultResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recoveryservices:getVault", {
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
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