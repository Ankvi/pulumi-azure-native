import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the backup configuration of an app.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWebAppBackupConfiguration(args: ListWebAppBackupConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppBackupConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppBackupConfiguration", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppBackupConfigurationArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Description of a backup which will be performed.
 */
export interface ListWebAppBackupConfigurationResult {
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
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWebAppBackupConfigurationOutput(args: ListWebAppBackupConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppBackupConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppBackupConfiguration", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppBackupConfigurationOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}