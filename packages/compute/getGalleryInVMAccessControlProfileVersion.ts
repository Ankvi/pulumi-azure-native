import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a gallery inVMAccessControlProfile version.
 *
 * Uses Azure REST API version 2024-03-03.
 */
export function getGalleryInVMAccessControlProfileVersion(args: GetGalleryInVMAccessControlProfileVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryInVMAccessControlProfileVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getGalleryInVMAccessControlProfileVersion", {
        "galleryName": args.galleryName,
        "inVMAccessControlProfileName": args.inVMAccessControlProfileName,
        "inVMAccessControlProfileVersionName": args.inVMAccessControlProfileVersionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryInVMAccessControlProfileVersionArgs {
    /**
     * The name of the Shared Image Gallery in which the inVMAccessControlProfile resides.
     */
    galleryName: string;
    /**
     * The name of the gallery inVMAccessControlProfile in which the inVMAccessControlProfile version resides.
     */
    inVMAccessControlProfileName: string;
    /**
     * The name of the gallery inVMAccessControlProfile version to be retrieved.
     */
    inVMAccessControlProfileVersionName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the gallery inVMAccessControlProfile version that you want to create or update.
 */
export interface GetGalleryInVMAccessControlProfileVersionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'.
     */
    readonly defaultAccess: string;
    /**
     * If set to true, Virtual Machines deployed from the latest version of the Resource Profile won't use this Profile version.
     */
    readonly excludeFromLatest?: boolean;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'.
     */
    readonly mode: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The timestamp for when the Resource Profile Version is published.
     */
    readonly publishedDate: string;
    /**
     * This is the replication status of the gallery image version.
     */
    readonly replicationStatus: types.outputs.ReplicationStatusResponse;
    /**
     * This is the Access Control Rules specification for an inVMAccessControlProfile version.
     */
    readonly rules?: types.outputs.AccessControlRulesResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The target regions where the Resource Profile version is going to be replicated to. This property is updatable.
     */
    readonly targetLocations?: types.outputs.TargetRegionResponse[];
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Retrieves information about a gallery inVMAccessControlProfile version.
 *
 * Uses Azure REST API version 2024-03-03.
 */
export function getGalleryInVMAccessControlProfileVersionOutput(args: GetGalleryInVMAccessControlProfileVersionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGalleryInVMAccessControlProfileVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getGalleryInVMAccessControlProfileVersion", {
        "galleryName": args.galleryName,
        "inVMAccessControlProfileName": args.inVMAccessControlProfileName,
        "inVMAccessControlProfileVersionName": args.inVMAccessControlProfileVersionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryInVMAccessControlProfileVersionOutputArgs {
    /**
     * The name of the Shared Image Gallery in which the inVMAccessControlProfile resides.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the gallery inVMAccessControlProfile in which the inVMAccessControlProfile version resides.
     */
    inVMAccessControlProfileName: pulumi.Input<string>;
    /**
     * The name of the gallery inVMAccessControlProfile version to be retrieved.
     */
    inVMAccessControlProfileVersionName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}