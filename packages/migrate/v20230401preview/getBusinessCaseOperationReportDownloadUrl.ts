import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the URL for downloading the business case in a report format.
 */
export function getBusinessCaseOperationReportDownloadUrl(args: GetBusinessCaseOperationReportDownloadUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetBusinessCaseOperationReportDownloadUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20230401preview:getBusinessCaseOperationReportDownloadUrl", {
        "businessCaseName": args.businessCaseName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBusinessCaseOperationReportDownloadUrlArgs {
    /**
     * Business case ARM name
     */
    businessCaseName: string;
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Download URL for assessment report.
 */
export interface GetBusinessCaseOperationReportDownloadUrlResult {
    /**
     * Hyperlink to download report.
     */
    readonly businessCaseReportUrl: string;
    /**
     * Expiry date of download url.
     */
    readonly expirationTime: string;
}
/**
 * Get the URL for downloading the business case in a report format.
 */
export function getBusinessCaseOperationReportDownloadUrlOutput(args: GetBusinessCaseOperationReportDownloadUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBusinessCaseOperationReportDownloadUrlResult> {
    return pulumi.output(args).apply((a: any) => getBusinessCaseOperationReportDownloadUrl(a, opts))
}

export interface GetBusinessCaseOperationReportDownloadUrlOutputArgs {
    /**
     * Business case ARM name
     */
    businessCaseName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}