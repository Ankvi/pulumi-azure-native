import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a particular backup Policy
 */
export function getBackupPolicy(args: GetBackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp/v20210401:getBackupPolicy", {
        "accountName": args.accountName,
        "backupPolicyName": args.backupPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBackupPolicyArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * Backup policy Name which uniquely identify backup policy.
     */
    backupPolicyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Backup policy information
 */
export interface GetBackupPolicyResult {
    /**
     * Backup Policy Resource ID
     */
    readonly backupPolicyId: string;
    /**
     * Daily backups count to keep
     */
    readonly dailyBackupsToKeep?: number;
    /**
     * The property to decide policy is enabled or not
     */
    readonly enabled?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Monthly backups count to keep
     */
    readonly monthlyBackupsToKeep?: number;
    /**
     * Name of backup policy
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.netapp.v20210401.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A list of volumes assigned to this policy
     */
    readonly volumeBackups?: types.outputs.netapp.v20210401.VolumeBackupsResponse[];
    /**
     * Volumes using current backup policy
     */
    readonly volumesAssigned?: number;
    /**
     * Weekly backups count to keep
     */
    readonly weeklyBackupsToKeep?: number;
    /**
     * Yearly backups count to keep
     */
    readonly yearlyBackupsToKeep?: number;
}
/**
 * Get a particular backup Policy
 */
export function getBackupPolicyOutput(args: GetBackupPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupPolicyResult> {
    return pulumi.output(args).apply((a: any) => getBackupPolicy(a, opts))
}

export interface GetBackupPolicyOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * Backup policy Name which uniquely identify backup policy.
     */
    backupPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
