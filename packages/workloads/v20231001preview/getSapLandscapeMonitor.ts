import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
 */
export function getSapLandscapeMonitor(args: GetSapLandscapeMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetSapLandscapeMonitorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20231001preview:getSapLandscapeMonitor", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSapLandscapeMonitorArgs {
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * configuration associated with SAP Landscape Monitor Dashboard.
 */
export interface GetSapLandscapeMonitorResult {
    /**
     * Gets or sets the SID groupings by landscape and Environment.
     */
    readonly grouping?: types.outputs.SapLandscapeMonitorPropertiesResponseGrouping;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of provisioning of the SAP monitor.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard
     */
    readonly topMetricsThresholds?: types.outputs.SapLandscapeMonitorMetricThresholdsResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
 */
export function getSapLandscapeMonitorOutput(args: GetSapLandscapeMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSapLandscapeMonitorResult> {
    return pulumi.output(args).apply((a: any) => getSapLandscapeMonitor(a, opts))
}

export interface GetSapLandscapeMonitorOutputArgs {
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}