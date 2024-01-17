import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get custom image.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getCustomImage(args: GetCustomImageArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomImageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getCustomImage", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCustomImageArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=vm)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the custom image.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A custom image.
 */
export interface GetCustomImageResult {
    /**
     * The author of the custom image.
     */
    readonly author?: string;
    /**
     * The creation date of the custom image.
     */
    readonly creationDate: string;
    /**
     * Storage information about the plan related to this custom image
     */
    readonly customImagePlan?: types.outputs.CustomImagePropertiesFromPlanResponse;
    /**
     * Storage information about the data disks present in the custom image
     */
    readonly dataDiskStorageInfo?: types.outputs.DataDiskStorageTypeInfoResponse[];
    /**
     * The description of the custom image.
     */
    readonly description?: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
     */
    readonly isPlanAuthorized?: boolean;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The Managed Image Id backing the custom image.
     */
    readonly managedImageId?: string;
    /**
     * The Managed Snapshot Id backing the custom image.
     */
    readonly managedSnapshotId?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
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
    readonly uniqueIdentifier: string;
    /**
     * The VHD from which the image is to be created.
     */
    readonly vhd?: types.outputs.CustomImagePropertiesCustomResponse;
    /**
     * The virtual machine from which the image is to be created.
     */
    readonly vm?: types.outputs.CustomImagePropertiesFromVmResponse;
}
/**
 * Get custom image.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getCustomImageOutput(args: GetCustomImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomImageResult> {
    return pulumi.output(args).apply((a: any) => getCustomImage(a, opts))
}

export interface GetCustomImageOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=vm)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the custom image.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}