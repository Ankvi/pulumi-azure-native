import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the vault.
 * Azure REST API version: 2021-02-16-preview.
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
 * Azure REST API version: 2021-02-16-preview.
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