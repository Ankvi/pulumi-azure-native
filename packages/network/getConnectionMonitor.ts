import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a connection monitor by name.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectionMonitorOutput(args: GetConnectionMonitorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionMonitorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getConnectionMonitor", {
        "connectionMonitorName": args.connectionMonitorName,
        "networkWatcherName": args.networkWatcherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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