import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the properties of the specified backup policy name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getBackupPolicy(args: GetBackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:getBackupPolicy", {
        "backupPolicyName": args.backupPolicyName,
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBackupPolicyArgs {
    /**
     * The name of backup policy to be fetched.
     */
    backupPolicyName: string;
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
 * The backup policy.
 */
export interface GetBackupPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The backup policy creation type. Indicates whether this was created through SaaS or through StorSimple Snapshot Manager.
     */
    readonly backupPolicyCreationType: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The time of the last backup for the backup policy.
     */
    readonly lastBackupTime: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The time of the next backup for the backup policy.
     */
    readonly nextBackupTime: string;
    /**
     * Indicates whether at least one of the schedules in the backup policy is active or not.
     */
    readonly scheduledBackupStatus: string;
    /**
     * The count of schedules the backup policy contains.
     */
    readonly schedulesCount: number;
    /**
     * If the backup policy was created by StorSimple Snapshot Manager, then this field indicates the hostname of the StorSimple Snapshot Manager.
     */
    readonly ssmHostName: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The path IDs of the volumes which are part of the backup policy.
     */
    readonly volumeIds: string[];
}
/**
 * Gets the properties of the specified backup policy name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getBackupPolicyOutput(args: GetBackupPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBackupPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:getBackupPolicy", {
        "backupPolicyName": args.backupPolicyName,
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBackupPolicyOutputArgs {
    /**
     * The name of backup policy to be fetched.
     */
    backupPolicyName: pulumi.Input<string>;
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