import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a StorageContainer
 *
 * Uses Azure REST API version 2026-02-01-preview.
 *
 * Other available API versions: 2026-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native discovery [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStorageContainer(args: GetStorageContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageContainerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:discovery:getStorageContainer", {
        "resourceGroupName": args.resourceGroupName,
        "storageContainerName": args.storageContainerName,
    }, opts);
}

export interface GetStorageContainerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the StorageContainer
     */
    storageContainerName: string;
}

/**
 * Storage Container tracked resource
 */
export interface GetStorageContainerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.StorageContainerPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Get a StorageContainer
 *
 * Uses Azure REST API version 2026-02-01-preview.
 *
 * Other available API versions: 2026-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native discovery [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStorageContainerOutput(args: GetStorageContainerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageContainerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:discovery:getStorageContainer", {
        "resourceGroupName": args.resourceGroupName,
        "storageContainerName": args.storageContainerName,
    }, opts);
}

export interface GetStorageContainerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the StorageContainer
     */
    storageContainerName: pulumi.Input<string>;
}