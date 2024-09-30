import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a gallery image definition.
 * Azure REST API version: 2022-03-03.
 *
 * Other available API versions: 2022-08-03, 2023-07-03.
 */
export function getGalleryImage(args: GetGalleryImageArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getGalleryImage", {
        "galleryImageName": args.galleryImageName,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryImageArgs {
    /**
     * The name of the gallery image definition to be retrieved.
     */
    galleryImageName: string;
    /**
     * The name of the Shared Image Gallery from which the Image Definitions are to be retrieved.
     */
    galleryName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the gallery image definition that you want to create or update.
 */
export interface GetGalleryImageResult {
    /**
     * The architecture of the image. Applicable to OS disks only.
     */
    readonly architecture?: string;
    /**
     * The description of this gallery image definition resource. This property is updatable.
     */
    readonly description?: string;
    /**
     * Describes the disallowed disk types.
     */
    readonly disallowed?: types.outputs.DisallowedResponse;
    /**
     * The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    readonly endOfLifeDate?: string;
    /**
     * The Eula agreement for the gallery image definition.
     */
    readonly eula?: string;
    /**
     * A list of gallery image features.
     */
    readonly features?: types.outputs.GalleryImageFeatureResponse[];
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    readonly hyperVGeneration?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * This is the gallery image definition identifier.
     */
    readonly identifier: types.outputs.GalleryImageIdentifierResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
     */
    readonly osState: string;
    /**
     * This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    readonly osType: string;
    /**
     * The privacy statement uri.
     */
    readonly privacyStatementUri?: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Describes the gallery image definition purchase plan. This is used by marketplace images.
     */
    readonly purchasePlan?: types.outputs.ImagePurchasePlanResponse;
    /**
     * The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
     */
    readonly recommended?: types.outputs.RecommendedMachineConfigurationResponse;
    /**
     * The release note uri.
     */
    readonly releaseNoteUri?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Retrieves information about a gallery image definition.
 * Azure REST API version: 2022-03-03.
 *
 * Other available API versions: 2022-08-03, 2023-07-03.
 */
export function getGalleryImageOutput(args: GetGalleryImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGalleryImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getGalleryImage", {
        "galleryImageName": args.galleryImageName,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryImageOutputArgs {
    /**
     * The name of the gallery image definition to be retrieved.
     */
    galleryImageName: pulumi.Input<string>;
    /**
     * The name of the Shared Image Gallery from which the Image Definitions are to be retrieved.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}