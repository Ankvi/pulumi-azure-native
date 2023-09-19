import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets storagecontainers by resource name
 */
export function getStoragecontainerRetrieve(args: GetStoragecontainerRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetStoragecontainerRetrieveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20210901preview:getStoragecontainerRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "storagecontainersName": args.storagecontainersName,
    }, opts);
}

export interface GetStoragecontainerRetrieveArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    storagecontainersName: string;
}

/**
 * The storage container resource definition.
 */
export interface GetStoragecontainerRetrieveResult {
    /**
     * Amount of space available on the disk in MB
     */
    readonly availableSizeMB: number;
    /**
     * Total size of the disk in MB
     */
    readonly containerSizeMB: number;
    readonly extendedLocation?: types.outputs.StoragecontainersResponseExtendedLocation;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The resource location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Path of the storage container on the disk
     */
    readonly path?: string;
    readonly provisioningState?: string;
    /**
     * name of the object to be used in moc
     */
    readonly resourceName?: string;
    /**
     * storageContainerStatus defines the observed state of storagecontainers
     */
    readonly status: types.outputs.StorageContainerStatusResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets storagecontainers by resource name
 */
export function getStoragecontainerRetrieveOutput(args: GetStoragecontainerRetrieveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStoragecontainerRetrieveResult> {
    return pulumi.output(args).apply((a: any) => getStoragecontainerRetrieve(a, opts))
}

export interface GetStoragecontainerRetrieveOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    storagecontainersName: pulumi.Input<string>;
}
