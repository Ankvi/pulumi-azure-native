import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified backup schedule name.
 */
export function getBackupSchedule(args: GetBackupScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupScheduleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple/v20170601:getBackupSchedule", {
        "backupPolicyName": args.backupPolicyName,
        "backupScheduleName": args.backupScheduleName,
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBackupScheduleArgs {
    /**
     * The backup policy name.
     */
    backupPolicyName: string;
    /**
     * The name of the backup schedule to be fetched
     */
    backupScheduleName: string;
    /**
     * The device name
     */
    deviceName: string;
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
}

/**
 * The backup schedule.
 */
export interface GetBackupScheduleResult {
    /**
     * The type of backup which needs to be taken.
     */
    readonly backupType: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The last successful backup run which was triggered for the schedule.
     */
    readonly lastSuccessfulRun: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The number of backups to be retained.
     */
    readonly retentionCount: number;
    /**
     * The schedule recurrence.
     */
    readonly scheduleRecurrence: types.outputs.ScheduleRecurrenceResponse;
    /**
     * The schedule status.
     */
    readonly scheduleStatus: string;
    /**
     * The start time of the schedule.
     */
    readonly startTime: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified backup schedule name.
 */
export function getBackupScheduleOutput(args: GetBackupScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupScheduleResult> {
    return pulumi.output(args).apply((a: any) => getBackupSchedule(a, opts))
}

export interface GetBackupScheduleOutputArgs {
    /**
     * The backup policy name.
     */
    backupPolicyName: pulumi.Input<string>;
    /**
     * The name of the backup schedule to be fetched
     */
    backupScheduleName: pulumi.Input<string>;
    /**
     * The device name
     */
    deviceName: pulumi.Input<string>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}