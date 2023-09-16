import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * List Content Keys used by this Streaming Locator
 */
export function listStreamingLocatorContentKeys(args: ListStreamingLocatorContentKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListStreamingLocatorContentKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media/v20230101:listStreamingLocatorContentKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "streamingLocatorName": args.streamingLocatorName,
    }, opts);
}

export interface ListStreamingLocatorContentKeysArgs {
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
 * Class of response for listContentKeys action
 */
export interface ListStreamingLocatorContentKeysResult {
    /**
     * ContentKeys used by current Streaming Locator
     */
    readonly contentKeys?: types.outputs.media.v20230101.StreamingLocatorContentKeyResponse[];
}
/**
 * List Content Keys used by this Streaming Locator
 */
export function listStreamingLocatorContentKeysOutput(args: ListStreamingLocatorContentKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStreamingLocatorContentKeysResult> {
    return pulumi.output(args).apply((a: any) => listStreamingLocatorContentKeys(a, opts))
}

export interface ListStreamingLocatorContentKeysOutputArgs {
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
