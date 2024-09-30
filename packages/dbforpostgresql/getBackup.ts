import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get specific backup for a given server.
 * Azure REST API version: 2024-03-01-preview.
 */
export function getBackup(args: GetBackupArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getBackup", {
        "backupName": args.backupName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetBackupArgs {
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
export interface GetBackupResult {
    /**
     * Backup type.
     */
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
 * Get specific backup for a given server.
 * Azure REST API version: 2024-03-01-preview.
 */
export function getBackupOutput(args: GetBackupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getBackup", {
        "backupName": args.backupName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetBackupOutputArgs {
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