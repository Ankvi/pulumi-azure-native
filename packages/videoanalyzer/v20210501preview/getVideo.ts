import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves an existing video resource within an account with a given name.
 */
export function getVideo(args: GetVideoArgs, opts?: pulumi.InvokeOptions): Promise<GetVideoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer/v20210501preview:getVideo", {
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
     * The name of the video to retrieve.
     */
    videoName: string;
}

/**
 * The representation of a single video in a Video Analyzer account.
 */
export interface GetVideoResult {
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
    readonly mediaInfo: types.outputs.VideoMediaInfoResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Video streaming holds information about video streaming URLs.
     */
    readonly streaming: types.outputs.VideoStreamingResponse;
    /**
     * The system metadata relating to this resource.
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
 * Retrieves an existing video resource within an account with a given name.
 */
export function getVideoOutput(args: GetVideoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVideoResult> {
    return pulumi.output(args).apply((a: any) => getVideo(a, opts))
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
     * The name of the video to retrieve.
     */
    videoName: pulumi.Input<string>;
}
