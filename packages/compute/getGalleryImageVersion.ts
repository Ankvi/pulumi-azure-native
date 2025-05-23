import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a gallery image version.
 *
 * Uses Azure REST API version 2024-03-03.
 *
 * Other available API versions: 2022-03-03, 2022-08-03, 2023-07-03. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGalleryImageVersion(args: GetGalleryImageVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryImageVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getGalleryImageVersion", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Indicates if this is a soft-delete resource restoration request.
     */
    readonly restore?: boolean;
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
    /**
     * This is the validations profile of a Gallery Image Version.
     */
    readonly validationsProfile: types.outputs.ValidationsProfileResponse;
}
/**
 * Retrieves information about a gallery image version.
 *
 * Uses Azure REST API version 2024-03-03.
 *
 * Other available API versions: 2022-03-03, 2022-08-03, 2023-07-03. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGalleryImageVersionOutput(args: GetGalleryImageVersionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGalleryImageVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getGalleryImageVersion", {
        "expand": args.expand,
        "galleryImageName": args.galleryImageName,
        "galleryImageVersionName": args.galleryImageVersionName,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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