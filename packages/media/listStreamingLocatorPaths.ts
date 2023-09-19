import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List Paths supported by this Streaming Locator
 * Azure REST API version: 2023-01-01.
 */
export function listStreamingLocatorPaths(args: ListStreamingLocatorPathsArgs, opts?: pulumi.InvokeOptions): Promise<ListStreamingLocatorPathsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:listStreamingLocatorPaths", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "streamingLocatorName": args.streamingLocatorName,
    }, opts);
}

export interface ListStreamingLocatorPathsArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The Streaming Locator name.
     */
    streamingLocatorName: string;
}

/**
 * Class of response for listPaths action
 */
export interface ListStreamingLocatorPathsResult {
    /**
     * Download Paths supported by current Streaming Locator
     */
    readonly downloadPaths?: string[];
    /**
     * Streaming Paths supported by current Streaming Locator
     */
    readonly streamingPaths?: types.outputs.StreamingPathResponse[];
}
/**
 * List Paths supported by this Streaming Locator
 * Azure REST API version: 2023-01-01.
 */
export function listStreamingLocatorPathsOutput(args: ListStreamingLocatorPathsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStreamingLocatorPathsResult> {
    return pulumi.output(args).apply((a: any) => listStreamingLocatorPaths(a, opts))
}

export interface ListStreamingLocatorPathsOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Streaming Locator name.
     */
    streamingLocatorName: pulumi.Input<string>;
}
