import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the report for a resource group under a subscription by report name.
 */
export function getReportByResourceGroupName(args: GetReportByResourceGroupNameArgs, opts?: pulumi.InvokeOptions): Promise<GetReportByResourceGroupNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement/v20180801preview:getReportByResourceGroupName", {
        "reportName": args.reportName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetReportByResourceGroupNameArgs {
    /**
     * Report Name.
     */
    reportName: string;
    /**
     * Azure Resource Group Name.
     */
    resourceGroupName: string;
}

/**
 * A report resource.
 */
export interface GetReportByResourceGroupNameResult {
    /**
     * Has definition for the report.
     */
    readonly definition: types.outputs.costmanagement.v20180801preview.ReportDefinitionResponse;
    /**
     * Has delivery information for the report.
     */
    readonly deliveryInfo: types.outputs.costmanagement.v20180801preview.ReportDeliveryInfoResponse;
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
    readonly schedule?: types.outputs.costmanagement.v20180801preview.ReportScheduleResponse;
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
 * Gets the report for a resource group under a subscription by report name.
 */
export function getReportByResourceGroupNameOutput(args: GetReportByResourceGroupNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReportByResourceGroupNameResult> {
    return pulumi.output(args).apply((a: any) => getReportByResourceGroupName(a, opts))
}

export interface GetReportByResourceGroupNameOutputArgs {
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
    /**
     * Azure Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
}
