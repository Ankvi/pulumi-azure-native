import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the URL for downloading the business case in a report format.
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview, 2024-03-03-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBusinessCaseOperationReportDownloadUrl(args: GetBusinessCaseOperationReportDownloadUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetBusinessCaseOperationReportDownloadUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getBusinessCaseOperationReportDownloadUrl", {
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
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview, 2024-03-03-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBusinessCaseOperationReportDownloadUrlOutput(args: GetBusinessCaseOperationReportDownloadUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBusinessCaseOperationReportDownloadUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getBusinessCaseOperationReportDownloadUrl", {
        "businessCaseName": args.businessCaseName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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