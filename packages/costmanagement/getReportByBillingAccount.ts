import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the report for a billing account by report name.
 *
 * Uses Azure REST API version 2018-08-01-preview.
 */
export function getReportByBillingAccount(args: GetReportByBillingAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetReportByBillingAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getReportByBillingAccount", {
        "billingAccountId": args.billingAccountId,
        "reportName": args.reportName,
    }, opts);
}

export interface GetReportByBillingAccountArgs {
    /**
     * BillingAccount ID
     */
    billingAccountId: string;
    /**
     * Report Name.
     */
    reportName: string;
}

/**
 * A report resource.
 */
export interface GetReportByBillingAccountResult {
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
 * Gets the report for a billing account by report name.
 *
 * Uses Azure REST API version 2018-08-01-preview.
 */
export function getReportByBillingAccountOutput(args: GetReportByBillingAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReportByBillingAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:costmanagement:getReportByBillingAccount", {
        "billingAccountId": args.billingAccountId,
        "reportName": args.reportName,
    }, opts);
}

export interface GetReportByBillingAccountOutputArgs {
    /**
     * BillingAccount ID
     */
    billingAccountId: pulumi.Input<string>;
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
}