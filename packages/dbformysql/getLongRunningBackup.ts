import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get backup for a given server.
 *
 * Uses Azure REST API version 2025-06-01-preview.
 */
export function getLongRunningBackup(args: GetLongRunningBackupArgs, opts?: pulumi.InvokeOptions): Promise<GetLongRunningBackupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getLongRunningBackup", {
        "backupName": args.backupName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetLongRunningBackupArgs {
    /**
     * The name of the backup.
     */
    backupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Server backup properties
 */
export interface GetLongRunningBackupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Backup name
     */
    readonly backupNameV2?: string;
    readonly backupType?: string;
    /**
     * Backup completed time (ISO8601 format).
     */
    readonly completedTime?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of backup resource.
     */
    readonly provisioningState: string;
    /**
     * Backup source
     */
    readonly source?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get backup for a given server.
 *
 * Uses Azure REST API version 2025-06-01-preview.
 */
export function getLongRunningBackupOutput(args: GetLongRunningBackupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLongRunningBackupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformysql:getLongRunningBackup", {
        "backupName": args.backupName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetLongRunningBackupOutputArgs {
    /**
     * The name of the backup.
     */
    backupName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}