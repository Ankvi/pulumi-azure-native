import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2022-01-01-preview.
 */
export function getMetricsSource(args: GetMetricsSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetMetricsSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz:getMetricsSource", {
        "metricsSourceName": args.metricsSourceName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMetricsSourceArgs {
    /**
     * Metrics Account resource name
     */
    metricsSourceName: string;
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetMetricsSourceResult {
    /**
     * ARM id of the monitor resource.
     */
    readonly id: string;
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    readonly location: string;
    /**
     * Name of the monitor resource.
     */
    readonly name: string;
    /**
     * Properties specific to the monitor resource.
     */
    readonly properties: types.outputs.MonitorPropertiesResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    readonly tags?: {[key: string]: string};
    /**
     * The type of the monitor resource.
     */
    readonly type: string;
}
/**
 * Azure REST API version: 2022-01-01-preview.
 */
export function getMetricsSourceOutput(args: GetMetricsSourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMetricsSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logz:getMetricsSource", {
        "metricsSourceName": args.metricsSourceName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMetricsSourceOutputArgs {
    /**
     * Metrics Account resource name
     */
    metricsSourceName: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}