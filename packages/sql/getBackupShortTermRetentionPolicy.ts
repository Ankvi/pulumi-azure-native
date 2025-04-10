import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a database's short term retention policy.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getBackupShortTermRetentionPolicy(args: GetBackupShortTermRetentionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupShortTermRetentionPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getBackupShortTermRetentionPolicy", {
        "databaseName": args.databaseName,
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetBackupShortTermRetentionPolicyArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The policy name. Should always be "default".
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
 * A short term retention policy.
 */
export interface GetBackupShortTermRetentionPolicyResult {
    /**
     * The differential backup interval in hours. This is how many interval hours between each differential backup will be supported. This is only applicable to live databases but not dropped databases.
     */
    readonly diffBackupIntervalInHours?: number;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The backup retention period in days. This is how many days Point-in-Time Restore will be supported.
     */
    readonly retentionDays?: number;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a database's short term retention policy.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getBackupShortTermRetentionPolicyOutput(args: GetBackupShortTermRetentionPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBackupShortTermRetentionPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getBackupShortTermRetentionPolicy", {
        "databaseName": args.databaseName,
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetBackupShortTermRetentionPolicyOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The policy name. Should always be "default".
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