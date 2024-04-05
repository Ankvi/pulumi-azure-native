import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a gallery image version.
 */
export function getGalleryImageVersion(args: GetGalleryImageVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryImageVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20230703:getGalleryImageVersion", {
        "expand": args.expand,
        "galleryImageName": args.galleryImageName,
        "galleryImageVersionName": args.galleryImageVersionName,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryImageVersionArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: string;
    /**
     * The name of the gallery image definition in which the Image Version resides.
     */
    galleryImageName: string;
    /**
     * The name of the gallery image version to be retrieved.
     */
    galleryImageVersionName: string;
    /**
     * The name of the Shared Image Gallery in which the Image Definition resides.
     */
    galleryName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the gallery image version that you want to create or update.
 */
export interface GetGalleryImageVersionResult {
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
     * The publishing profile of a gallery image Version.
     */
    readonly publishingProfile?: types.outputs.GalleryImageVersionPublishingProfileResponse;
    /**
     * This is the replication status of the gallery image version.
     */
    readonly replicationStatus: types.outputs.ReplicationStatusResponse;
    /**
     * This is the safety profile of the Gallery Image Version.
     */
    readonly safetyProfile?: types.outputs.GalleryImageVersionSafetyProfileResponse;
    /**
     * The security profile of a gallery image version
     */
    readonly securityProfile?: types.outputs.ImageVersionSecurityProfileResponse;
    /**
     * This is the storage profile of a Gallery Image Version.
     */
    readonly storageProfile: types.outputs.GalleryImageVersionStorageProfileResponse;
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
 * Retrieves information about a gallery image version.
 */
export function getGalleryImageVersionOutput(args: GetGalleryImageVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGalleryImageVersionResult> {
    return pulumi.output(args).apply((a: any) => getGalleryImageVersion(a, opts))
}

export interface GetGalleryImageVersionOutputArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the gallery image definition in which the Image Version resides.
     */
    galleryImageName: pulumi.Input<string>;
    /**
     * The name of the gallery image version to be retrieved.
     */
    galleryImageVersionName: pulumi.Input<string>;
    /**
     * The name of the Shared Image Gallery in which the Image Definition resides.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}