import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Azure key vault.
 */
export function getVault(args: GetVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:keyvault/v20230701:getVault", {
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetVaultArgs {
    /**
     * The name of the Resource Group to which the vault belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
}

/**
 * Resource information with extended details.
 */
export interface GetVaultResult {
    /**
     * Fully qualified identifier of the key vault resource.
     */
    readonly id: string;
    /**
     * Azure location of the key vault resource.
     */
    readonly location?: string;
    /**
     * Name of the key vault resource.
     */
    readonly name: string;
    /**
     * Properties of the vault
     */
    readonly properties: types.outputs.VaultPropertiesResponse;
    /**
     * System metadata for the key vault.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags assigned to the key vault resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type of the key vault resource.
     */
    readonly type: string;
}
/**
 * Gets the specified Azure key vault.
 */
export function getVaultOutput(args: GetVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVaultResult> {
    return pulumi.output(args).apply((a: any) => getVault(a, opts))
}

export interface GetVaultOutputArgs {
    /**
     * The name of the Resource Group to which the vault belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the vault.
     */
    vaultName: pulumi.Input<string>;
}
