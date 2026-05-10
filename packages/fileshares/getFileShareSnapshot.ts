import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a FileShareSnapshot
 *
 * Uses Azure REST API version 2025-06-01-preview.
 *
 * Other available API versions: 2025-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fileshares [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileShareSnapshot(args: GetFileShareSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetFileShareSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fileshares:getFileShareSnapshot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetFileShareSnapshotArgs {
    /**
     * The name of the FileShareSnapshot
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The resource name of the file share, as seen by the administrator through Azure Resource Manager.
     */
    resourceName: string;
}

/**
 * FileShareSnapshot resource
 */
export interface GetFileShareSnapshotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.FileShareSnapshotPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a FileShareSnapshot
 *
 * Uses Azure REST API version 2025-06-01-preview.
 *
 * Other available API versions: 2025-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fileshares [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileShareSnapshotOutput(args: GetFileShareSnapshotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFileShareSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:fileshares:getFileShareSnapshot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetFileShareSnapshotOutputArgs {
    /**
     * The name of the FileShareSnapshot
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the file share, as seen by the administrator through Azure Resource Manager.
     */
    resourceName: pulumi.Input<string>;
}