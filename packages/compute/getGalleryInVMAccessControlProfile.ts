import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a gallery inVMAccessControlProfile.
 * Azure REST API version: 2024-03-03.
 */
export function getGalleryInVMAccessControlProfile(args: GetGalleryInVMAccessControlProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryInVMAccessControlProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getGalleryInVMAccessControlProfile", {
        "galleryName": args.galleryName,
        "inVMAccessControlProfileName": args.inVMAccessControlProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryInVMAccessControlProfileArgs {
    /**
     * The name of the Shared Image Gallery from which the InVMAccessControlProfiles are to be retrieved.
     */
    galleryName: string;
    /**
     * The name of the gallery inVMAccessControlProfile to be retrieved.
     */
    inVMAccessControlProfileName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the gallery inVMAccessControlProfile that you want to create or update.
 */
export interface GetGalleryInVMAccessControlProfileResult {
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
     * Describes the properties of a gallery inVMAccessControlProfile.
     */
    readonly properties: types.outputs.GalleryInVMAccessControlProfilePropertiesResponse;
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
 * Retrieves information about a gallery inVMAccessControlProfile.
 * Azure REST API version: 2024-03-03.
 */
export function getGalleryInVMAccessControlProfileOutput(args: GetGalleryInVMAccessControlProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGalleryInVMAccessControlProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getGalleryInVMAccessControlProfile", {
        "galleryName": args.galleryName,
        "inVMAccessControlProfileName": args.inVMAccessControlProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryInVMAccessControlProfileOutputArgs {
    /**
     * The name of the Shared Image Gallery from which the InVMAccessControlProfiles are to be retrieved.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the gallery inVMAccessControlProfile to be retrieved.
     */
    inVMAccessControlProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}