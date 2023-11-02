import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a gallery
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview.
 */
export function getGallery(args: GetGalleryArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getGallery", {
        "devCenterName": args.devCenterName,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the gallery.
     */
    galleryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a gallery.
 */
export interface GetGalleryResult {
    /**
     * The resource ID of the backing Azure Compute Gallery.
     */
    readonly galleryResourceId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a gallery
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview.
 */
export function getGalleryOutput(args: GetGalleryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGalleryResult> {
    return pulumi.output(args).apply((a: any) => getGallery(a, opts))
}

export interface GetGalleryOutputArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the gallery.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
