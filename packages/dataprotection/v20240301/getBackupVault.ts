import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a resource belonging to a resource group.
 */
export function getBackupVault(args: GetBackupVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupVaultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dataprotection/v20240301:getBackupVault", {
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetBackupVaultArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the backup vault.
     */
    vaultName: string;
}

/**
 * Backup Vault Resource
 */
export interface GetBackupVaultResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Input Managed Identity Details
     */
    readonly identity?: types.outputs.DppIdentityDetailsResponse;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * BackupVaultResource properties
     */
    readonly properties: types.outputs.BackupVaultResponse;
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
 * Returns a resource belonging to a resource group.
 */
export function getBackupVaultOutput(args: GetBackupVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupVaultResult> {
    return pulumi.output(args).apply((a: any) => getBackupVault(a, opts))
}

export interface GetBackupVaultOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the backup vault.
     */
    vaultName: pulumi.Input<string>;
}