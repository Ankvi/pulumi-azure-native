import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a storage container
 */
export function getStorageContainer(args: GetStorageContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20230701preview:getStorageContainer", {
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
     * Name of the storage container
     */
    storageContainerName: string;
}

/**
 * The storage container resource definition.
 */
export interface GetStorageContainerResult {
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.azurestackhci.v20230701preview.ExtendedLocationResponse;
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
     * Path of the storage container on the disk
     */
    readonly path?: string;
    /**
     * Provisioning state of the storage container.
     */
    readonly provisioningState: string;
    /**
     * The observed state of storage containers
     */
    readonly status: types.outputs.azurestackhci.v20230701preview.StorageContainerStatusResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.azurestackhci.v20230701preview.SystemDataResponse;
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
 * Gets a storage container
 */
export function getStorageContainerOutput(args: GetStorageContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageContainerResult> {
    return pulumi.output(args).apply((a: any) => getStorageContainer(a, opts))
}

export interface GetStorageContainerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the storage container
     */
    storageContainerName: pulumi.Input<string>;
}
