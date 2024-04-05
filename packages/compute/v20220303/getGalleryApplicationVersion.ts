import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a gallery Application Version.
 */
export function getGalleryApplicationVersion(args: GetGalleryApplicationVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryApplicationVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20220303:getGalleryApplicationVersion", {
        "expand": args.expand,
        "galleryApplicationName": args.galleryApplicationName,
        "galleryApplicationVersionName": args.galleryApplicationVersionName,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryApplicationVersionArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: string;
    /**
     * The name of the gallery Application Definition in which the Application Version resides.
     */
    galleryApplicationName: string;
    /**
     * The name of the gallery Application Version to be retrieved.
     */
    galleryApplicationVersionName: string;
    /**
     * The name of the Shared Application Gallery in which the Application Definition resides.
     */
    galleryName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the gallery Application Version that you want to create or update.
 */
export interface GetGalleryApplicationVersionResult {
    /**
     * Resource Id
     */
    readonly id: string;
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
     * The publishing profile of a gallery image version.
     */
    readonly publishingProfile: types.outputs.GalleryApplicationVersionPublishingProfileResponse;
    /**
     * This is the replication status of the gallery image version.
     */
    readonly replicationStatus: types.outputs.ReplicationStatusResponse;
    /**
     * The safety profile of the Gallery Application Version.
     */
    readonly safetyProfile?: types.outputs.GalleryApplicationVersionSafetyProfileResponse;
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
 * Retrieves information about a gallery Application Version.
 */
export function getGalleryApplicationVersionOutput(args: GetGalleryApplicationVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGalleryApplicationVersionResult> {
    return pulumi.output(args).apply((a: any) => getGalleryApplicationVersion(a, opts))
}

export interface GetGalleryApplicationVersionOutputArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the gallery Application Definition in which the Application Version resides.
     */
    galleryApplicationName: pulumi.Input<string>;
    /**
     * The name of the gallery Application Version to be retrieved.
     */
    galleryApplicationVersionName: pulumi.Input<string>;
    /**
     * The name of the Shared Application Gallery in which the Application Definition resides.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}