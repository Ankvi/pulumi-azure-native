import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Watcher
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-07-19-preview.
 */
export function getWatcher(args: GetWatcherArgs, opts?: pulumi.InvokeOptions): Promise<GetWatcherResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasewatcher:getWatcher", {
        "resourceGroupName": args.resourceGroupName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetWatcherArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The database watcher name.
     */
    watcherName: string;
}

/**
 * The DatabaseWatcherProviderHub resource.
 */
export interface GetWatcherResult {
    /**
     * The data store for collected monitoring data.
     */
    readonly datastore?: types.outputs.DatastoreResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource watcher.
     */
    readonly provisioningState: string;
    /**
     * The monitoring collection status of the watcher.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Watcher
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-07-19-preview.
 */
export function getWatcherOutput(args: GetWatcherOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWatcherResult> {
    return pulumi.output(args).apply((a: any) => getWatcher(a, opts))
}

export interface GetWatcherOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The database watcher name.
     */
    watcherName: pulumi.Input<string>;
}