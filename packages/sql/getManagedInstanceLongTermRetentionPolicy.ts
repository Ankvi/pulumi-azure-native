import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a managed database's long term retention policy.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedInstanceLongTermRetentionPolicy(args: GetManagedInstanceLongTermRetentionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstanceLongTermRetentionPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getManagedInstanceLongTermRetentionPolicy", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The BackupStorageAccessTier for the LTR backups
     */
    readonly backupStorageAccessTier?: string;
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
 * Gets a managed database's long term retention policy.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedInstanceLongTermRetentionPolicyOutput(args: GetManagedInstanceLongTermRetentionPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedInstanceLongTermRetentionPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getManagedInstanceLongTermRetentionPolicy", {
        "databaseName": args.databaseName,
        "managedInstanceName": args.managedInstanceName,
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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