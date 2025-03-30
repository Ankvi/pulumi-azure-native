import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get metrics configuration of the provided cluster.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview, 2025-02-01.
 */
export function getMetricsConfiguration(args: GetMetricsConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetMetricsConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getMetricsConfiguration", {
        "clusterName": args.clusterName,
        "metricsConfigurationName": args.metricsConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMetricsConfigurationArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the metrics configuration for the cluster.
     */
    metricsConfigurationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetMetricsConfigurationResult {
    /**
     * The interval in minutes by which metrics will be collected.
     */
    readonly collectionInterval: number;
    /**
     * The more detailed status of the metrics configuration.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The list of metrics that are available for the cluster but disabled at the moment.
     */
    readonly disabledMetrics: string[];
    /**
     * The list of metric names that have been chosen to be enabled in addition to the core set of enabled metrics.
     */
    readonly enabledMetrics?: string[];
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the metrics configuration.
     */
    readonly provisioningState: string;
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
 * Get metrics configuration of the provided cluster.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview, 2025-02-01.
 */
export function getMetricsConfigurationOutput(args: GetMetricsConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMetricsConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getMetricsConfiguration", {
        "clusterName": args.clusterName,
        "metricsConfigurationName": args.metricsConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMetricsConfigurationOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the metrics configuration for the cluster.
     */
    metricsConfigurationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}