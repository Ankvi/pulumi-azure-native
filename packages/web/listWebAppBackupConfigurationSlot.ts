import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the backup configuration of an app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppBackupConfigurationSlot(args: ListWebAppBackupConfigurationSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppBackupConfigurationSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppBackupConfigurationSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppBackupConfigurationSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the backup configuration for the production slot.
     */
    slot: string;
}

/**
 * Description of a backup which will be performed.
 */
export interface ListWebAppBackupConfigurationSlotResult {
    /**
     * Name of the backup.
     */
    readonly backupName?: string;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    readonly backupSchedule?: types.outputs.BackupScheduleResponse;
    /**
     * Databases included in the backup.
     */
    readonly databases?: types.outputs.DatabaseBackupSettingResponse[];
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
     */
    readonly enabled?: boolean;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * SAS URL to the container.
     */
    readonly storageAccountUrl: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the backup configuration of an app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppBackupConfigurationSlotOutput(args: ListWebAppBackupConfigurationSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppBackupConfigurationSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppBackupConfigurationSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppBackupConfigurationSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the backup configuration for the production slot.
     */
    slot: pulumi.Input<string>;
}