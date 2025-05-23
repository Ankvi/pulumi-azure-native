import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns an import job.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagecache [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getImportJob(args: GetImportJobArgs, opts?: pulumi.InvokeOptions): Promise<GetImportJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagecache:getImportJob", {
        "amlFilesystemName": args.amlFilesystemName,
        "importJobName": args.importJobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImportJobArgs {
    /**
     * Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    amlFilesystemName: string;
    /**
     * Name for the import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    importJobName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An import job instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 */
export interface GetImportJobResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A recent and frequently updated rate of total files, directories, and symlinks imported per second.
     */
    readonly blobsImportedPerSecond: number;
    /**
     * A recent and frequently updated rate of blobs walked per second.
     */
    readonly blobsWalkedPerSecond: number;
    /**
     * How the import job will handle conflicts. For example, if the import job is trying to bring in a directory, but a file is at that path, how it handles it. Fail indicates that the import job should stop immediately and not do anything with the conflict. Skip indicates that it should pass over the conflict. OverwriteIfDirty causes the import job to delete and re-import the file or directory if it is a conflicting type, is dirty, or was not previously imported. OverwriteAlways extends OverwriteIfDirty to include releasing files that had been restored but were not dirty. Please reference https://learn.microsoft.com/en-us/azure/azure-managed-lustre/ for a thorough explanation of these resolution modes.
     */
    readonly conflictResolutionMode?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * An array of blob paths/prefixes that get imported into the cluster namespace. It has '/' as the default value.
     */
    readonly importPrefixes?: string[];
    /**
     * The time of the last completed archive operation
     */
    readonly lastCompletionTime: string;
    /**
     * The time the latest archive operation started
     */
    readonly lastStartedTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Total non-conflict oriented errors the import job will tolerate before exiting with failure. -1 means infinite. 0 means exit immediately and is the default.
     */
    readonly maximumErrors?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ARM provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The state of the import job. InProgress indicates the import is still running. Canceled indicates it has been canceled by the user. Completed indicates import finished, successfully importing all discovered blobs into the Lustre namespace. CompletedPartial indicates the import finished but some blobs either were found to be conflicting and could not be imported or other errors were encountered. Failed means the import was unable to complete due to a fatal error.
     */
    readonly state: string;
    /**
     * The status message of the import job.
     */
    readonly statusMessage: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The total blobs that have been imported since import began.
     */
    readonly totalBlobsImported: number;
    /**
     * The total blob objects walked.
     */
    readonly totalBlobsWalked: number;
    /**
     * Number of conflicts in the import job.
     */
    readonly totalConflicts: number;
    /**
     * Number of errors in the import job.
     */
    readonly totalErrors: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns an import job.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagecache [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getImportJobOutput(args: GetImportJobOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetImportJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storagecache:getImportJob", {
        "amlFilesystemName": args.amlFilesystemName,
        "importJobName": args.importJobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImportJobOutputArgs {
    /**
     * Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    amlFilesystemName: pulumi.Input<string>;
    /**
     * Name for the import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    importJobName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}