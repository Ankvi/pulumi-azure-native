import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves an existing video resource with the given name.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function getVideo(args: GetVideoArgs, opts?: pulumi.InvokeOptions): Promise<GetVideoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer:getVideo", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "videoName": args.videoName,
    }, opts);
}

export interface GetVideoArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The Video name.
     */
    videoName: string;
}

/**
 * Represents a video resource within Azure Video Analyzer. Videos can be ingested from RTSP cameras through live pipelines or can be created by exporting sequences from existing captured video through a pipeline job. Videos ingested through live pipelines can be streamed through Azure Video Analyzer Player Widget or compatible players. Exported videos can be downloaded as MP4 files.
 */
export interface GetVideoResult {
    /**
     * Video archival properties.
     */
    readonly archival?: types.outputs.VideoArchivalResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Set of URLs to the video content.
     */
    readonly contentUrls: types.outputs.VideoContentUrlsResponse;
    /**
     * Optional video description provided by the user. Value can be up to 2048 characters long.
     */
    readonly description?: string;
    /**
     * Video flags contain information about the available video actions and its dynamic properties based on the current video state.
     */
    readonly flags: types.outputs.VideoFlagsResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Contains information about the video and audio content.
     */
    readonly mediaInfo?: types.outputs.VideoMediaInfoResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Optional video title provided by the user. Value can be up to 256 characters long.
     */
    readonly title?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves an existing video resource with the given name.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function getVideoOutput(args: GetVideoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVideoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:videoanalyzer:getVideo", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "videoName": args.videoName,
    }, opts);
}

export interface GetVideoOutputArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Video name.
     */
    videoName: pulumi.Input<string>;
}