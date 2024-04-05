import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified backup of the volume
 */
export function getBackup(args: GetBackupArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp/v20221101:getBackup", {
        "accountName": args.accountName,
        "backupName": args.backupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
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
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Backup of a Volume
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
     * Resource location
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * Size of backup
     */
    readonly size: number;
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
     * Volume name
     */
    readonly volumeName: string;
}
/**
 * Gets the specified backup of the volume
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
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}