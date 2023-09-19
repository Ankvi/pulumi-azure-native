import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a connection monitor by name.
 * Azure REST API version: 2023-02-01.
 */
export function getConnectionMonitor(args: GetConnectionMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionMonitorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getConnectionMonitor", {
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
     * Type of connection monitor.
     */
    readonly connectionMonitorType: string;
    /**
     * Describes the destination of connection monitor.
     */
    readonly destination?: types.outputs.ConnectionMonitorDestinationResponse;
    /**
     * List of connection monitor endpoints.
     */
    readonly endpoints?: types.outputs.ConnectionMonitorEndpointResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
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
    readonly monitoringStatus: string;
    /**
     * Name of the connection monitor.
     */
    readonly name: string;
    /**
     * Optional notes to be associated with the connection monitor.
     */
    readonly notes?: string;
    /**
     * List of connection monitor outputs.
     */
    readonly outputs?: types.outputs.ConnectionMonitorOutputResponse[];
    /**
     * The provisioning state of the connection monitor.
     */
    readonly provisioningState: string;
    /**
     * Describes the source of connection monitor.
     */
    readonly source?: types.outputs.ConnectionMonitorSourceResponse;
    /**
     * The date and time when the connection monitor was started.
     */
    readonly startTime: string;
    /**
     * Connection monitor tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * List of connection monitor test configurations.
     */
    readonly testConfigurations?: types.outputs.ConnectionMonitorTestConfigurationResponse[];
    /**
     * List of connection monitor test groups.
     */
    readonly testGroups?: types.outputs.ConnectionMonitorTestGroupResponse[];
    /**
     * Connection monitor type.
     */
    readonly type: string;
}
/**
 * Gets a connection monitor by name.
 * Azure REST API version: 2023-02-01.
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
