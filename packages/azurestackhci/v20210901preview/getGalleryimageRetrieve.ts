import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets galleryimages by resource name
 */
export function getGalleryimageRetrieve(args: GetGalleryimageRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryimageRetrieveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20210901preview:getGalleryimageRetrieve", {
        "galleryimagesName": args.galleryimagesName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryimageRetrieveArgs {
    /**
     * Name of the gallery image
     */
    galleryimagesName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The gallery image resource definition.
 */
export interface GetGalleryimageRetrieveResult {
    /**
     * Datasource for the gallery image when provisioning with cloud-init (Azure or NoCloud)
     */
    readonly cloudInitDataSource?: string;
    /**
     * Container Name for storage container
     */
    readonly containerName?: string;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.azurestackhci.v20210901preview.ExtendedLocationResponse;
    /**
     * The hypervisor generation of the Virtual Machine [V1, V2]
     */
    readonly hyperVGeneration?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * This is the gallery image definition identifier.
     */
    readonly identifier?: types.outputs.azurestackhci.v20210901preview.GalleryImageIdentifierResponse;
    /**
     * location of the image the gallery image should be created from
     */
    readonly imagePath?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * operating system type that the gallery image uses. Expected to be linux or windows
     */
    readonly osType?: string;
    /**
     * Provisioning state of the gallery image.
     */
    readonly provisioningState: string;
    /**
     * name of the object to be used in moc
     */
    readonly resourceName?: string;
    /**
     * GalleryImageStatus defines the observed state of galleryimages
     */
    readonly status: types.outputs.azurestackhci.v20210901preview.GalleryImageStatusResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.azurestackhci.v20210901preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Specifies information about the gallery image version that you want to create or update.
     */
    readonly version?: types.outputs.azurestackhci.v20210901preview.GalleryImageVersionResponse;
}
/**
 * Gets galleryimages by resource name
 */
export function getGalleryimageRetrieveOutput(args: GetGalleryimageRetrieveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGalleryimageRetrieveResult> {
    return pulumi.output(args).apply((a: any) => getGalleryimageRetrieve(a, opts))
}

export interface GetGalleryimageRetrieveOutputArgs {
    /**
     * Name of the gallery image
     */
    galleryimagesName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
