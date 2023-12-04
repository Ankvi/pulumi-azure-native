import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a managed database's long term retention policy.
 */
export function getManagedInstanceLongTermRetentionPolicy(args: GetManagedInstanceLongTermRetentionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstanceLongTermRetentionPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getManagedInstanceLongTermRetentionPolicy", {
        "databaseName": args.databaseName,
        "managedInstanceName": args.managedInstanceName,
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedInstanceLongTermRetentionPolicyArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The policy name. Should always be Default.
     */
    policyName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * A long term retention policy.
 */
export interface GetManagedInstanceLongTermRetentionPolicyResult {
    /**
     * The BackupStorageAccessTier for the LTR backups
     */
    readonly backupStorageAccessTier?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The monthly retention policy for an LTR backup.
     */
    readonly monthlyRetention?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The week of year to take the yearly backup.
     */
    readonly weekOfYear?: number;
    /**
     * The weekly retention policy for an LTR backup.
     */
    readonly weeklyRetention?: string;
    /**
     * The yearly retention policy for an LTR backup.
     */
    readonly yearlyRetention?: string;
}
/**
 * Gets a managed database's long term retention policy.
 */
export function getManagedInstanceLongTermRetentionPolicyOutput(args: GetManagedInstanceLongTermRetentionPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedInstanceLongTermRetentionPolicyResult> {
    return pulumi.output(args).apply((a: any) => getManagedInstanceLongTermRetentionPolicy(a, opts))
}

export interface GetManagedInstanceLongTermRetentionPolicyOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The policy name. Should always be Default.
     */
    policyName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}