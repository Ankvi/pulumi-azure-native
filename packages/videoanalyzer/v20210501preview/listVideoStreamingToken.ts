import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Generates a streaming token used for authenticating video playback.
 */
export function listVideoStreamingToken(args: ListVideoStreamingTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListVideoStreamingTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer/v20210501preview:listVideoStreamingToken", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "videoName": args.videoName,
    }, opts);
}

export interface ListVideoStreamingTokenArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the video to generate a token for playback.
     */
    videoName: string;
}

/**
 * Video streaming token grants access to the video streaming URLs which can be used by an compatible HLS or DASH player.
 */
export interface ListVideoStreamingTokenResult {
    /**
     * The streaming token expiration date in ISO8601 format (eg. 2021-01-01T00:00:00Z).
     */
    readonly expirationDate: string;
    /**
     * The streaming token value to be added to the video streaming URL as the value for a "token" query string parameter. The token is specific to a single video.
     */
    readonly token: string;
}
/**
 * Generates a streaming token used for authenticating video playback.
 */
export function listVideoStreamingTokenOutput(args: ListVideoStreamingTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListVideoStreamingTokenResult> {
    return pulumi.output(args).apply((a: any) => listVideoStreamingToken(a, opts))
}

export interface ListVideoStreamingTokenOutputArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the video to generate a token for playback.
     */
    videoName: pulumi.Input<string>;
}