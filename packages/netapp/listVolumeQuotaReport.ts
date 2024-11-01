import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns report of quotas for the volume
 * Azure REST API version: 2024-03-01-preview.
 *
 * Other available API versions: 2024-05-01-preview, 2024-07-01-preview.
 */
export function listVolumeQuotaReport(args: ListVolumeQuotaReportArgs, opts?: pulumi.InvokeOptions): Promise<ListVolumeQuotaReportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:listVolumeQuotaReport", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface ListVolumeQuotaReportArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Quota Report for volume
 */
export interface ListVolumeQuotaReportResult {
    /**
     * URL to get the next set of results.
     */
    readonly nextLink?: string;
    /**
     * List of volume quota report records
     */
    readonly value?: types.outputs.QuotaReportResponse[];
}
/**
 * Returns report of quotas for the volume
 * Azure REST API version: 2024-03-01-preview.
 *
 * Other available API versions: 2024-05-01-preview, 2024-07-01-preview.
 */
export function listVolumeQuotaReportOutput(args: ListVolumeQuotaReportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListVolumeQuotaReportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:listVolumeQuotaReport", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface ListVolumeQuotaReportOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}