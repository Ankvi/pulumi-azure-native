import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified backup of the volume
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function getCapacityPoolBackup(args: GetCapacityPoolBackupArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityPoolBackupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getCapacityPoolBackup", {
        "accountName": args.accountName,
        "backupName": args.backupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetCapacityPoolBackupArgs {
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
export interface GetCapacityPoolBackupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function getCapacityPoolBackupOutput(args: GetCapacityPoolBackupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCapacityPoolBackupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getCapacityPoolBackup", {
        "accountName": args.accountName,
        "backupName": args.backupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetCapacityPoolBackupOutputArgs {
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