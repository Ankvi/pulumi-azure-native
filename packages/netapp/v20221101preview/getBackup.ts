import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified Backup under Backup Vault.
 */
export function getBackup(args: GetBackupArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp/v20221101preview:getBackup", {
        "accountName": args.accountName,
        "backupName": args.backupName,
        "backupVaultName": args.backupVaultName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBackupArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the backup
     */
    backupName: string;
    /**
     * The name of the Backup Vault
     */
    backupVaultName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Backup under a Backup Vault
 */
export interface GetBackupResult {
    /**
     * UUID v4 used to identify the Backup
     */
    readonly backupId: string;
    /**
     * Type of backup Manual or Scheduled
     */
    readonly backupType: string;
    /**
     * The creation date of the backup
     */
    readonly creationDate: string;
    /**
     * Failure reason
     */
    readonly failureReason: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Label for backup
     */
    readonly label?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * Size of backup in bytes
     */
    readonly size: number;
    /**
     * The name of the snapshot
     */
    readonly snapshotName?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups
     */
    readonly useExistingSnapshot?: boolean;
    /**
     * ResourceId used to identify the Volume
     */
    readonly volumeResourceId: string;
}
/**
 * Get the specified Backup under Backup Vault.
 */
export function getBackupOutput(args: GetBackupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupResult> {
    return pulumi.output(args).apply((a: any) => getBackup(a, opts))
}

export interface GetBackupOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the backup
     */
    backupName: pulumi.Input<string>;
    /**
     * The name of the Backup Vault
     */
    backupVaultName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
