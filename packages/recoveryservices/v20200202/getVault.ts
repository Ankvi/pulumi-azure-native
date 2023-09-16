import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the Vault details.
 */
export function getVault(args: GetVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20200202:getVault", {
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetVaultArgs {
    /**
     * The name of the resource group where the recovery services vault is present.
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
    readonly eTag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.recoveryservices.v20200202.IdentityDataResponse;
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
    readonly properties: types.outputs.recoveryservices.v20200202.VaultPropertiesResponse;
    /**
     * Identifies the unique system identifier for each Azure resource.
     */
    readonly sku?: types.outputs.recoveryservices.v20200202.SkuResponse;
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
 */
export function getVaultOutput(args: GetVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVaultResult> {
    return pulumi.output(args).apply((a: any) => getVault(a, opts))
}

export interface GetVaultOutputArgs {
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}
