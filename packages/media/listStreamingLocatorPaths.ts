import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List Paths supported by this Streaming Locator
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listStreamingLocatorPathsOutput(args: ListStreamingLocatorPathsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListStreamingLocatorPathsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:listStreamingLocatorPaths", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "streamingLocatorName": args.streamingLocatorName,
    }, opts);
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