import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a StorageAsset
 *
 * Uses Azure REST API version 2026-02-01-preview.
 *
 * Other available API versions: 2026-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native discovery [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStorageAsset(args: GetStorageAssetArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:discovery:getStorageAsset", {
        "resourceGroupName": args.resourceGroupName,
        "storageAssetName": args.storageAssetName,
        "storageContainerName": args.storageContainerName,
    }, opts);
}

export interface GetStorageAssetArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the StorageAsset
     */
    storageAssetName: string;
    /**
     * The name of the StorageContainer
     */
    storageContainerName: string;
}

/**
 * Storage Asset tracked resource
 */
export interface GetStorageAssetResult {
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
    readonly properties: types.outputs.StorageAssetPropertiesResponse;
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
 * Get a StorageAsset
 *
 * Uses Azure REST API version 2026-02-01-preview.
 *
 * Other available API versions: 2026-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native discovery [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStorageAssetOutput(args: GetStorageAssetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:discovery:getStorageAsset", {
        "resourceGroupName": args.resourceGroupName,
        "storageAssetName": args.storageAssetName,
        "storageContainerName": args.storageContainerName,
    }, opts);
}

export interface GetStorageAssetOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the StorageAsset
     */
    storageAssetName: pulumi.Input<string>;
    /**
     * The name of the StorageContainer
     */
    storageContainerName: pulumi.Input<string>;
}