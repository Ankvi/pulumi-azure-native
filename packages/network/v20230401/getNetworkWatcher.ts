import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified network watcher by resource group.
 */
export function getNetworkWatcher(args: GetNetworkWatcherArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkWatcherResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getNetworkWatcher", {
        "networkWatcherName": args.networkWatcherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkWatcherArgs {
    /**
     * The name of the network watcher.
     */
    networkWatcherName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Network watcher in a resource group.
 */
export interface GetNetworkWatcherResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the network watcher resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified network watcher by resource group.
 */
export function getNetworkWatcherOutput(args: GetNetworkWatcherOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkWatcherResult> {
    return pulumi.output(args).apply((a: any) => getNetworkWatcher(a, opts))
}

export interface GetNetworkWatcherOutputArgs {
    /**
     * The name of the network watcher.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
