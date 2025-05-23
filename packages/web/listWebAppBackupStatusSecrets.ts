import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWebAppBackupStatusSecrets(args: ListWebAppBackupStatusSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppBackupStatusSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppBackupStatusSecrets", {
        "backupId": args.backupId,
        "backupName": args.backupName,
        "backupSchedule": args.backupSchedule ? types.inputs.backupScheduleProvideDefaults(args.backupSchedule) : undefined,
        "databases": args.databases,
        "enabled": args.enabled,
        "kind": args.kind,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountUrl": args.storageAccountUrl,
    }, opts);
}

export interface ListWebAppBackupStatusSecretsArgs {
    /**
     * ID of backup.
     */
    backupId: string;
    /**
     * Name of the backup.
     */
    backupName?: string;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    backupSchedule?: types.inputs.BackupSchedule;
    /**
     * Databases included in the backup.
     */
    databases?: types.inputs.DatabaseBackupSetting[];
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
     */
    enabled?: boolean;
    /**
     * Kind of resource.
     */
    kind?: string;
    /**
     * Name of web app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * SAS URL to the container.
     */
    storageAccountUrl: string;
}

/**
 * Backup description.
 */
export interface ListWebAppBackupStatusSecretsResult {
    /**
     * Id of the backup.
     */
    readonly backupId: number;
    /**
     * Name of the blob which contains data for this backup.
     */
    readonly blobName: string;
    /**
     * Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
     */
    readonly correlationId: string;
    /**
     * Timestamp of the backup creation.
     */
    readonly created: string;
    /**
     * List of databases included in the backup.
     */
    readonly databases: types.outputs.DatabaseBackupSettingResponse[];
    /**
     * Timestamp when this backup finished.
     */
    readonly finishedTimeStamp: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Timestamp of a last restore operation which used this backup.
     */
    readonly lastRestoreTimeStamp: string;
    /**
     * Details regarding this backup. Might contain an error message.
     */
    readonly log: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * True if this backup has been created due to a schedule being triggered.
     */
    readonly scheduled: boolean;
    /**
     * Size of the backup in bytes.
     */
    readonly sizeInBytes: number;
    /**
     * Backup status.
     */
    readonly status: string;
    /**
     * SAS URL for the storage account container which contains this backup.
     */
    readonly storageAccountUrl: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Size of the original web app which has been backed up.
     */
    readonly websiteSizeInBytes: number;
}
/**
 * Description for Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWebAppBackupStatusSecretsOutput(args: ListWebAppBackupStatusSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppBackupStatusSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppBackupStatusSecrets", {
        "backupId": args.backupId,
        "backupName": args.backupName,
        "backupSchedule": args.backupSchedule ? pulumi.output(args.backupSchedule).apply(types.inputs.backupScheduleProvideDefaults) : undefined,
        "databases": args.databases,
        "enabled": args.enabled,
        "kind": args.kind,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "storageAccountUrl": args.storageAccountUrl,
    }, opts);
}

export interface ListWebAppBackupStatusSecretsOutputArgs {
    /**
     * ID of backup.
     */
    backupId: pulumi.Input<string>;
    /**
     * Name of the backup.
     */
    backupName?: pulumi.Input<string>;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    backupSchedule?: pulumi.Input<types.inputs.BackupScheduleArgs>;
    /**
     * Databases included in the backup.
     */
    databases?: pulumi.Input<pulumi.Input<types.inputs.DatabaseBackupSettingArgs>[]>;
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of web app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SAS URL to the container.
     */
    storageAccountUrl: pulumi.Input<string>;
}