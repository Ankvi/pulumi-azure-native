import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the report for a department by report name.
 * Azure REST API version: 2018-08-01-preview.
 */
export function getReportByDepartment(args: GetReportByDepartmentArgs, opts?: pulumi.InvokeOptions): Promise<GetReportByDepartmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getReportByDepartment", {
        "departmentId": args.departmentId,
        "reportName": args.reportName,
    }, opts);
}

export interface GetReportByDepartmentArgs {
    /**
     * Department ID
     */
    departmentId: string;
    /**
     * Report Name.
     */
    reportName: string;
}

/**
 * A report resource.
 */
export interface GetReportByDepartmentResult {
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
 * Gets the report for a department by report name.
 * Azure REST API version: 2018-08-01-preview.
 */
export function getReportByDepartmentOutput(args: GetReportByDepartmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReportByDepartmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:costmanagement:getReportByDepartment", {
        "departmentId": args.departmentId,
        "reportName": args.reportName,
    }, opts);
}

export interface GetReportByDepartmentOutputArgs {
    /**
     * Department ID
     */
    departmentId: pulumi.Input<string>;
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
}