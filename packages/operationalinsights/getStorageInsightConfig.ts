import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a storage insight instance.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStorageInsightConfig(args: GetStorageInsightConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageInsightConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getStorageInsightConfig", {
        "resourceGroupName": args.resourceGroupName,
        "storageInsightName": args.storageInsightName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetStorageInsightConfigArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the storageInsightsConfigs resource
     */
    storageInsightName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The top level storage insight resource container.
 */
export interface GetStorageInsightConfigResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The names of the blob containers that the workspace should read
     */
    readonly containers?: string[];
    /**
     * The ETag of the storage insight.
     */
    readonly eTag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the storage insight
     */
    readonly status: types.outputs.StorageInsightStatusResponse;
    /**
     * The storage account connection details
     */
    readonly storageAccount: types.outputs.StorageAccountResponse;
    /**
     * The names of the Azure tables that the workspace should read
     */
    readonly tables?: string[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a storage insight instance.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStorageInsightConfigOutput(args: GetStorageInsightConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageInsightConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationalinsights:getStorageInsightConfig", {
        "resourceGroupName": args.resourceGroupName,
        "storageInsightName": args.storageInsightName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetStorageInsightConfigOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the storageInsightsConfigs resource
     */
    storageInsightName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}