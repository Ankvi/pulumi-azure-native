import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of a Media Graph in the Media Services account.
 * Azure REST API version: 2020-02-01-preview.
 */
export function getMediaGraph(args: GetMediaGraphArgs, opts?: pulumi.InvokeOptions): Promise<GetMediaGraphResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getMediaGraph", {
        "accountName": args.accountName,
        "mediaGraphName": args.mediaGraphName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMediaGraphArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Media Graph name.
     */
    mediaGraphName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The Media Graph.
 */
export interface GetMediaGraphResult {
    /**
     * Date the Media Graph was created.
     */
    readonly created: string;
    /**
     * Media Graph description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource.
     */
    readonly id: string;
    /**
     * Date the Media Graph was last modified.
     */
    readonly lastModified: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Media Graph sinks.
     */
    readonly sinks: types.outputs.MediaGraphAssetSinkResponse[];
    /**
     * Media Graph sources.
     */
    readonly sources: types.outputs.MediaGraphRtspSourceResponse[];
    /**
     * Media Graph state which indicates the resource allocation status for running the media graph pipeline.
     */
    readonly state: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the details of a Media Graph in the Media Services account.
 * Azure REST API version: 2020-02-01-preview.
 */
export function getMediaGraphOutput(args: GetMediaGraphOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediaGraphResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getMediaGraph", {
        "accountName": args.accountName,
        "mediaGraphName": args.mediaGraphName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMediaGraphOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Media Graph name.
     */
    mediaGraphName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}