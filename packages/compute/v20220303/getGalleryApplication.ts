import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a gallery Application Definition.
 */
export function getGalleryApplication(args: GetGalleryApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20220303:getGalleryApplication", {
        "galleryApplicationName": args.galleryApplicationName,
        "galleryName": args.galleryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGalleryApplicationArgs {
    /**
     * The name of the gallery Application Definition to be retrieved.
     */
    galleryApplicationName: string;
    /**
     * The name of the Shared Application Gallery from which the Application Definitions are to be retrieved.
     */
    galleryName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the gallery Application Definition that you want to create or update.
 */
export interface GetGalleryApplicationResult {
    /**
     * A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application.
     */
    readonly customActions?: types.outputs.GalleryApplicationCustomActionResponse[];
    /**
     * The description of this gallery Application Definition resource. This property is updatable.
     */
    readonly description?: string;
    /**
     * The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    readonly endOfLifeDate?: string;
    /**
     * The Eula agreement for the gallery Application Definition.
     */
    readonly eula?: string;
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
     * The privacy statement uri.
     */
    readonly privacyStatementUri?: string;
    /**
     * The release note uri.
     */
    readonly releaseNoteUri?: string;
    /**
     * This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    readonly supportedOSType: string;
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
 * Retrieves information about a gallery Application Definition.
 */
export function getGalleryApplicationOutput(args: GetGalleryApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGalleryApplicationResult> {
    return pulumi.output(args).apply((a: any) => getGalleryApplication(a, opts))
}

export interface GetGalleryApplicationOutputArgs {
    /**
     * The name of the gallery Application Definition to be retrieved.
     */
    galleryApplicationName: pulumi.Input<string>;
    /**
     * The name of the Shared Application Gallery from which the Application Definitions are to be retrieved.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
