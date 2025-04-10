import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get gallery image
 *
 * Uses Azure REST API version 2018-10-15.
 */
export function getGalleryImage(args: GetGalleryImageArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getGalleryImage", {
        "expand": args.expand,
        "galleryImageName": args.galleryImageName,
        "labAccountName": args.labAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryImageArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=author)'
     */
    expand?: string;
    /**
     * The name of the gallery Image.
     */
    galleryImageName: string;
    /**
     * The name of the lab Account.
     */
    labAccountName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Represents an image from the Azure Marketplace
 */
export interface GetGalleryImageResult {
    /**
     * The author of the gallery image.
     */
    readonly author: string;
    /**
     * The creation date of the gallery image.
     */
    readonly createdDate: string;
    /**
     * The description of the gallery image.
     */
    readonly description: string;
    /**
     * The icon of the gallery image.
     */
    readonly icon: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The image reference of the gallery image.
     */
    readonly imageReference: types.outputs.GalleryImageReferenceResponse;
    /**
     * Indicates whether this gallery image is enabled.
     */
    readonly isEnabled?: boolean;
    /**
     * Indicates whether this gallery has been overridden for this lab account
     */
    readonly isOverride?: boolean;
    /**
     * Indicates if the plan has been authorized for programmatic deployment.
     */
    readonly isPlanAuthorized?: boolean;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: types.outputs.LatestOperationResultResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The third party plan that applies to this image
     */
    readonly planId: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
}
/**
 * Get gallery image
 *
 * Uses Azure REST API version 2018-10-15.
 */
export function getGalleryImageOutput(args: GetGalleryImageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGalleryImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:getGalleryImage", {
        "expand": args.expand,
        "galleryImageName": args.galleryImageName,
        "labAccountName": args.labAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryImageOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=author)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the gallery Image.
     */
    galleryImageName: pulumi.Input<string>;
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}