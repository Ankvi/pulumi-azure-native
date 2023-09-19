import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a Shared Image Gallery.
 */
export function getGallery(args: GetGalleryArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20220303:getGallery", {
        "expand": args.expand,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
        "select": args.select,
    }, opts);
}

export interface GetGalleryArgs {
    /**
     * The expand query option to apply on the operation.
     */
    expand?: string;
    /**
     * The name of the Shared Image Gallery.
     */
    galleryName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The select expression to apply on the operation.
     */
    select?: string;
}

/**
 * Specifies information about the Shared Image Gallery that you want to create or update.
 */
export interface GetGalleryResult {
    /**
     * The description of this Shared Image Gallery resource. This property is updatable.
     */
    readonly description?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Describes the gallery unique name.
     */
    readonly identifier?: types.outputs.GalleryIdentifierResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Profile for gallery sharing to subscription or tenant
     */
    readonly sharingProfile?: types.outputs.SharingProfileResponse;
    /**
     * Sharing status of current gallery.
     */
    readonly sharingStatus: types.outputs.SharingStatusResponse;
    /**
     * Contains information about the soft deletion policy of the gallery.
     */
    readonly softDeletePolicy?: types.outputs.SoftDeletePolicyResponse;
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
 * Retrieves information about a Shared Image Gallery.
 */
export function getGalleryOutput(args: GetGalleryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGalleryResult> {
    return pulumi.output(args).apply((a: any) => getGallery(a, opts))
}

export interface GetGalleryOutputArgs {
    /**
     * The expand query option to apply on the operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the Shared Image Gallery.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The select expression to apply on the operation.
     */
    select?: pulumi.Input<string>;
}
