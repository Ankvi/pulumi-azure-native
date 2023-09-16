import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a database's long term retention policy.
 */
export function getBackupLongTermRetentionPolicy(args: GetBackupLongTermRetentionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupLongTermRetentionPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20170301preview:getBackupLongTermRetentionPolicy", {
        "databaseName": args.databaseName,
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetBackupLongTermRetentionPolicyArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The policy name. Should always be Default.
     */
    policyName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * A long term retention policy.
 */
export interface GetBackupLongTermRetentionPolicyResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The monthly retention policy for an LTR backup in an ISO 8601 format.
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
     * The week of year to take the yearly backup in an ISO 8601 format.
     */
    readonly weekOfYear?: number;
    /**
     * The weekly retention policy for an LTR backup in an ISO 8601 format.
     */
    readonly weeklyRetention?: string;
    /**
     * The yearly retention policy for an LTR backup in an ISO 8601 format.
     */
    readonly yearlyRetention?: string;
}
/**
 * Gets a database's long term retention policy.
 */
export function getBackupLongTermRetentionPolicyOutput(args: GetBackupLongTermRetentionPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupLongTermRetentionPolicyResult> {
    return pulumi.output(args).apply((a: any) => getBackupLongTermRetentionPolicy(a, opts))
}

export interface GetBackupLongTermRetentionPolicyOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The policy name. Should always be Default.
     */
    policyName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
