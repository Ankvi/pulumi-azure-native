import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The metric setting details for the role
 */
export function getMonitoringConfig(args: GetMonitoringConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitoringConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge/v20230701:getMonitoringConfig", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
        "roleName": args.roleName,
    }, opts);
}

export interface GetMonitoringConfigArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The role name.
     */
    roleName: string;
}

/**
 * The metric setting details for the role
 */
export interface GetMonitoringConfigResult {
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The metrics configuration details
     */
    readonly metricConfigurations: types.outputs.MetricConfigurationResponse[];
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Metadata pertaining to creation and last modification of MonitoringConfiguration
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * The metric setting details for the role
 */
export function getMonitoringConfigOutput(args: GetMonitoringConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitoringConfigResult> {
    return pulumi.output(args).apply((a: any) => getMonitoringConfig(a, opts))
}

export interface GetMonitoringConfigOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The role name.
     */
    roleName: pulumi.Input<string>;
}