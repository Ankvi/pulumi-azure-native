import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Monitor resource.
 */
export function getMonitor(args: GetMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic/v20231001preview:getMonitor", {
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
     * The name of the resource group. The name is case insensitive.
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
 */
export function getMonitorOutput(args: GetMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorResult> {
    return pulumi.output(args).apply((a: any) => getMonitor(a, opts))
}

export interface GetMonitorOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}