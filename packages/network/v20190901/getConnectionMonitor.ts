import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a connection monitor by name.
 */
export function getConnectionMonitor(args: GetConnectionMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionMonitorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190901:getConnectionMonitor", {
        "connectionMonitorName": args.connectionMonitorName,
        "networkWatcherName": args.networkWatcherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionMonitorArgs {
    /**
     * The name of the connection monitor.
     */
    connectionMonitorName: string;
    /**
     * The name of the Network Watcher resource.
     */
    networkWatcherName: string;
    /**
     * The name of the resource group containing Network Watcher.
     */
    resourceGroupName: string;
}

/**
 * Information about the connection monitor.
 */
export interface GetConnectionMonitorResult {
    /**
     * Determines if the connection monitor will start automatically once created.
     */
    readonly autoStart?: boolean;
    /**
     * Describes the destination of connection monitor.
     */
    readonly destination: types.outputs.ConnectionMonitorDestinationResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * ID of the connection monitor.
     */
    readonly id: string;
    /**
     * Connection monitor location.
     */
    readonly location?: string;
    /**
     * Monitoring interval in seconds.
     */
    readonly monitoringIntervalInSeconds?: number;
    /**
     * The monitoring status of the connection monitor.
     */
    readonly monitoringStatus?: string;
    /**
     * Name of the connection monitor.
     */
    readonly name: string;
    /**
     * The provisioning state of the connection monitor.
     */
    readonly provisioningState: string;
    /**
     * Describes the source of connection monitor.
     */
    readonly source: types.outputs.ConnectionMonitorSourceResponse;
    /**
     * The date and time when the connection monitor was started.
     */
    readonly startTime?: string;
    /**
     * Connection monitor tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Connection monitor type.
     */
    readonly type: string;
}
/**
 * Gets a connection monitor by name.
 */
export function getConnectionMonitorOutput(args: GetConnectionMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectionMonitorResult> {
    return pulumi.output(args).apply((a: any) => getConnectionMonitor(a, opts))
}

export interface GetConnectionMonitorOutputArgs {
    /**
     * The name of the connection monitor.
     */
    connectionMonitorName: pulumi.Input<string>;
    /**
     * The name of the Network Watcher resource.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group containing Network Watcher.
     */
    resourceGroupName: pulumi.Input<string>;
}