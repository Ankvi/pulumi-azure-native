import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements NetworkMonitor GET method.
 *
 * Uses Azure REST API version 2024-06-15-preview.
 */
export function getNetworkMonitor(args: GetNetworkMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkMonitorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkMonitor", {
        "networkMonitorName": args.networkMonitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkMonitorArgs {
    /**
     * Name of the Network Monitor.
     */
    networkMonitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NetworkMonitor resource definition.
 */
export interface GetNetworkMonitorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * The NetworkFabric Properties
     */
    readonly properties: types.outputs.NetworkMonitorPropertiesResponse;
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
 * Implements NetworkMonitor GET method.
 *
 * Uses Azure REST API version 2024-06-15-preview.
 */
export function getNetworkMonitorOutput(args: GetNetworkMonitorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkMonitorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkMonitor", {
        "networkMonitorName": args.networkMonitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkMonitorOutputArgs {
    /**
     * Name of the Network Monitor.
     */
    networkMonitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}