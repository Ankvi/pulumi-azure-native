import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the AppComplianceAutomation report and its properties.
 */
export function getReport(args: GetReportArgs, opts?: pulumi.InvokeOptions): Promise<GetReportResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation/v20221116preview:getReport", {
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
    readonly properties: types.outputs.appcomplianceautomation.v20221116preview.ReportPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.appcomplianceautomation.v20221116preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the AppComplianceAutomation report and its properties.
 */
export function getReportOutput(args: GetReportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReportResult> {
    return pulumi.output(args).apply((a: any) => getReport(a, opts))
}

export interface GetReportOutputArgs {
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
}
