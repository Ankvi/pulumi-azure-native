import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the AppComplianceAutomation report and its properties.
 *
 * Uses Azure REST API version 2022-11-16-preview.
 *
 * Other available API versions: 2024-06-27.
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Report property.
     */
    readonly properties: types.outputs.ReportPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the AppComplianceAutomation report and its properties.
 *
 * Uses Azure REST API version 2022-11-16-preview.
 *
 * Other available API versions: 2024-06-27.
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