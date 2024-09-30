import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a snapshot Policy
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview.
 */
export function getSnapshotPolicy(args: GetSnapshotPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getSnapshotPolicy", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotPolicyName": args.snapshotPolicyName,
    }, opts);
}

export interface GetSnapshotPolicyArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the snapshot policy
     */
    snapshotPolicyName: string;
}

/**
 * Snapshot policy information
 */
export interface GetSnapshotPolicyResult {
    /**
     * Schedule for daily snapshots
     */
    readonly dailySchedule?: types.outputs.DailyScheduleResponse;
    /**
     * The property to decide policy is enabled or not
     */
    readonly enabled?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Schedule for hourly snapshots
     */
    readonly hourlySchedule?: types.outputs.HourlyScheduleResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Schedule for monthly snapshots
     */
    readonly monthlySchedule?: types.outputs.MonthlyScheduleResponse;
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
     * Schedule for weekly snapshots
     */
    readonly weeklySchedule?: types.outputs.WeeklyScheduleResponse;
}
/**
 * Get a snapshot Policy
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview.
 */
export function getSnapshotPolicyOutput(args: GetSnapshotPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSnapshotPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getSnapshotPolicy", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotPolicyName": args.snapshotPolicyName,
    }, opts);
}

export interface GetSnapshotPolicyOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the snapshot policy
     */
    snapshotPolicyName: pulumi.Input<string>;
}