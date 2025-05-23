import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Hybrid AKS storage space object
 *
 * Uses Azure REST API version 2022-09-01-preview.
 */
export function getStorageSpaceRetrieve(args: GetStorageSpaceRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageSpaceRetrieveResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice:getStorageSpaceRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "storageSpacesName": args.storageSpacesName,
    }, opts);
}

export interface GetStorageSpaceRetrieveArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Parameter for the name of the storage object
     */
    storageSpacesName: string;
}

/**
 * The storageSpaces resource definition.
 */
export interface GetStorageSpaceRetrieveResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    readonly extendedLocation?: types.outputs.StorageSpacesResponseExtendedLocation;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * HybridAKSStorageSpec defines the desired state of HybridAKSStorage
     */
    readonly properties: types.outputs.StorageSpacesPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Gets the Hybrid AKS storage space object
 *
 * Uses Azure REST API version 2022-09-01-preview.
 */
export function getStorageSpaceRetrieveOutput(args: GetStorageSpaceRetrieveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageSpaceRetrieveResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcontainerservice:getStorageSpaceRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "storageSpacesName": args.storageSpacesName,
    }, opts);
}

export interface GetStorageSpaceRetrieveOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter for the name of the storage object
     */
    storageSpacesName: pulumi.Input<string>;
}