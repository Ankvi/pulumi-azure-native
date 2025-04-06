import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the vault.
 *
 * Uses Azure REST API version 2021-02-16-preview.
 *
 * Other available API versions: 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datareplication [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVault(args: GetVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datareplication:getVault", {
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
     * The vault name.
     */
    vaultName: string;
}

/**
 * Vault model.
 */
export interface GetVaultResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the location of the vault.
     */
    readonly location: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * Vault properties.
     */
    readonly properties: types.outputs.VaultModelPropertiesResponse;
    readonly systemData: types.outputs.VaultModelResponseSystemData;
    /**
     * Gets or sets the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the vault.
 *
 * Uses Azure REST API version 2021-02-16-preview.
 *
 * Other available API versions: 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datareplication [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVaultOutput(args: GetVaultOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVaultResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datareplication:getVault", {
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
     * The vault name.
     */
    vaultName: pulumi.Input<string>;
}