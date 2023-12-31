import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Monitoring Setting and its properties.
 */
export function getMonitoringSetting(args: GetMonitoringSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitoringSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230701preview:getMonitoringSetting", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetMonitoringSettingArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Monitoring Setting resource
 */
export interface GetMonitoringSettingResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the Monitoring Setting resource
     */
    readonly properties: types.outputs.MonitoringSettingPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the Monitoring Setting and its properties.
 */
export function getMonitoringSettingOutput(args: GetMonitoringSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitoringSettingResult> {
    return pulumi.output(args).apply((a: any) => getMonitoringSetting(a, opts))
}

export interface GetMonitoringSettingOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
