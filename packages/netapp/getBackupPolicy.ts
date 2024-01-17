import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a particular backup Policy
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2021-04-01, 2021-04-01-preview, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01.
 */
export function getBackupPolicy(args: GetBackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getBackupPolicy", {
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
     * The name of the resource group. The name is case insensitive.
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Monthly backups count to keep
     */
    readonly monthlyBackupsToKeep?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * A list of volumes assigned to this policy
     */
    readonly volumeBackups: types.outputs.VolumeBackupsResponse[];
    /**
     * Volumes using current backup policy
     */
    readonly volumesAssigned: number;
    /**
     * Weekly backups count to keep
     */
    readonly weeklyBackupsToKeep?: number;
}
/**
 * Get a particular backup Policy
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2021-04-01, 2021-04-01-preview, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01.
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
