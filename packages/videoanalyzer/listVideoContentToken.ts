import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Generates a streaming token which can be used for accessing content from video content URLs, for a video resource with the given name.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function listVideoContentToken(args: ListVideoContentTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListVideoContentTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer:listVideoContentToken", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "videoName": args.videoName,
    }, opts);
}

export interface ListVideoContentTokenArgs {
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
 * "Video content token grants access to the video content URLs."
 */
export interface ListVideoContentTokenResult {
    /**
     * The content token expiration date in ISO8601 format (eg. 2021-01-01T00:00:00Z).
     */
    readonly expirationDate: string;
    /**
     * The content token value to be added to the video content URL as the value for the "token" query string parameter. The token is specific to a single video.
     */
    readonly token: string;
}
/**
 * Generates a streaming token which can be used for accessing content from video content URLs, for a video resource with the given name.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function listVideoContentTokenOutput(args: ListVideoContentTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListVideoContentTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:videoanalyzer:listVideoContentToken", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "videoName": args.videoName,
    }, opts);
}

export interface ListVideoContentTokenOutputArgs {
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