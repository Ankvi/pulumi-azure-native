import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a gallery image
 *
 * Uses Azure REST API version 2022-12-15-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2024-01-01, 2024-02-01-preview, 2024-05-01-preview, 2024-07-15-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01-preview, 2025-04-01-preview.
 */
export function getGalleryImage(args: GetGalleryImageArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getGalleryImage", {
        "galleryImageName": args.galleryImageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryImageArgs {
    /**
     * Name of the gallery image
     */
    galleryImageName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The gallery images resource definition.
 */
export interface GetGalleryImageResult {
    /**
     * Datasource for the gallery image when provisioning with cloud-init [NoCloud, Azure]
     */
    readonly cloudInitDataSource?: string;
    /**
     * Container Name for storage container
     */
    readonly containerName?: string;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
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
    readonly identifier?: types.outputs.GalleryImageIdentifierResponse;
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
     * Operating system type that the gallery image uses [Windows, Linux]
     */
    readonly osType?: string;
    /**
     * Provisioning state of the gallery image.
     */
    readonly provisioningState: string;
    /**
     * The observed state of gallery images
     */
    readonly status: types.outputs.GalleryImageStatusResponse;
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
    /**
     * Specifies information about the gallery image version that you want to create or update.
     */
    readonly version?: types.outputs.GalleryImageVersionResponse;
}
/**
 * Gets a gallery image
 *
 * Uses Azure REST API version 2022-12-15-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2024-01-01, 2024-02-01-preview, 2024-05-01-preview, 2024-07-15-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01-preview, 2025-04-01-preview.
 */
export function getGalleryImageOutput(args: GetGalleryImageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGalleryImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getGalleryImage", {
        "galleryImageName": args.galleryImageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryImageOutputArgs {
    /**
     * Name of the gallery image
     */
    galleryImageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}