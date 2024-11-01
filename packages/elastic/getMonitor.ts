import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Monitor resource.
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-03-01, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview.
 */
export function getMonitor(args: GetMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:getMonitor", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitorArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Monitor resource.
 */
export interface GetMonitorResult {
    /**
     * ARM id of the monitor resource.
     */
    readonly id: string;
    /**
     * Identity properties of the monitor resource.
     */
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    /**
     * The location of the monitor resource
     */
    readonly location: string;
    /**
     * Name of the monitor resource.
     */
    readonly name: string;
    /**
     * Properties of the monitor resource.
     */
    readonly properties: types.outputs.MonitorPropertiesResponse;
    /**
     * SKU of the monitor resource.
     */
    readonly sku?: types.outputs.ResourceSkuResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tags of the monitor resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the monitor resource.
     */
    readonly type: string;
}
/**
 * Monitor resource.
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-03-01, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview.
 */
export function getMonitorOutput(args: GetMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:getMonitor", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitorOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}