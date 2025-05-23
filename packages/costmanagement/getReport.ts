import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the report for a subscription by report name.
 *
 * Uses Azure REST API version 2018-08-01-preview.
 */
export function getReport(args: GetReportArgs, opts?: pulumi.InvokeOptions): Promise<GetReportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getReport", {
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
 * A report resource.
 */
export interface GetReportResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Has definition for the report.
     */
    readonly definition: types.outputs.ReportDefinitionResponse;
    /**
     * Has delivery information for the report.
     */
    readonly deliveryInfo: types.outputs.ReportDeliveryInfoResponse;
    /**
     * The format of the report being delivered.
     */
    readonly format?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Has schedule information for the report.
     */
    readonly schedule?: types.outputs.ReportScheduleResponse;
    /**
     * Resource tags.
     */
    readonly tags: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the report for a subscription by report name.
 *
 * Uses Azure REST API version 2018-08-01-preview.
 */
export function getReportOutput(args: GetReportOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:costmanagement:getReport", {
        "reportName": args.reportName,
    }, opts);
}

export interface GetReportOutputArgs {
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
}