import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a file import.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileImport(args: GetFileImportArgs, opts?: pulumi.InvokeOptions): Promise<GetFileImportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getFileImport", {
        "fileImportId": args.fileImportId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFileImportArgs {
    /**
     * File import ID
     */
    fileImportId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a file import in Azure Security Insights.
 */
export interface GetFileImportResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The content type of this file.
     */
    readonly contentType: string;
    /**
     * The time the file was imported.
     */
    readonly createdTimeUTC: string;
    /**
     * Represents the error file (if the import was ingested with errors or failed the validation).
     */
    readonly errorFile: types.outputs.FileMetadataResponse;
    /**
     * An ordered list of some of the errors that were encountered during validation.
     */
    readonly errorsPreview: types.outputs.ValidationErrorResponse[];
    /**
     * The time the files associated with this import are deleted from the storage account.
     */
    readonly filesValidUntilTimeUTC: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Represents the imported file.
     */
    readonly importFile: types.outputs.FileMetadataResponse;
    /**
     * The time the file import record is soft deleted from the database and history.
     */
    readonly importValidUntilTimeUTC: string;
    /**
     * The number of records that have been successfully ingested.
     */
    readonly ingestedRecordCount: number;
    /**
     * Describes how to ingest the records in the file.
     */
    readonly ingestionMode: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The source for the data in the file.
     */
    readonly source: string;
    /**
     * The state of the file import.
     */
    readonly state: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The number of records in the file.
     */
    readonly totalRecordCount: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The number of records that have passed validation.
     */
    readonly validRecordCount: number;
}
/**
 * Gets a file import.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileImportOutput(args: GetFileImportOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFileImportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getFileImport", {
        "fileImportId": args.fileImportId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFileImportOutputArgs {
    /**
     * File import ID
     */
    fileImportId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}