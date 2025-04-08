import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the AppComplianceAutomation report and its properties.
 *
 * Uses Azure REST API version 2024-06-27.
 *
 * Other available API versions: 2022-11-16-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appcomplianceautomation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getReport(args: GetReportArgs, opts?: pulumi.InvokeOptions): Promise<GetReportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation:getReport", {
        "reportName": args.reportName,
    }, opts);
}

export interface GetReportArgs {
    /**
     * Report Name.
     */
    reportName: string;
}

/**
 * A class represent an AppComplianceAutomation report resource.
 */
export interface GetReportResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * List of synchronized certification records.
     */
    readonly certRecords: types.outputs.CertSyncRecordResponse[];
    /**
     * Report compliance status.
     */
    readonly complianceStatus: types.outputs.ReportComplianceStatusResponse;
    /**
     * List of report error codes.
     */
    readonly errors: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Report last collection trigger time.
     */
    readonly lastTriggerTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Report next collection trigger time.
     */
    readonly nextTriggerTime: string;
    /**
     * A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003".
     */
    readonly offerGuid?: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * List of resource data.
     */
    readonly resources: types.outputs.ResourceMetadataResponse[];
    /**
     * Report status.
     */
    readonly status: string;
    /**
     * The information of 'bring your own storage' binding to the report
     */
    readonly storageInfo?: types.outputs.StorageInfoResponse;
    /**
     * List of subscription Ids.
     */
    readonly subscriptions: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Report's tenant id.
     */
    readonly tenantId: string;
    /**
     * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time".
     */
    readonly timeZone: string;
    /**
     * Report collection trigger time.
     */
    readonly triggerTime: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the AppComplianceAutomation report and its properties.
 *
 * Uses Azure REST API version 2024-06-27.
 *
 * Other available API versions: 2022-11-16-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appcomplianceautomation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getReportOutput(args: GetReportOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appcomplianceautomation:getReport", {
        "reportName": args.reportName,
    }, opts);
}

export interface GetReportOutputArgs {
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
}