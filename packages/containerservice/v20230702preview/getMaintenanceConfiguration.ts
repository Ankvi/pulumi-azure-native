import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * See [planned maintenance](https://docs.microsoft.com/azure/aks/planned-maintenance) for more information about planned maintenance.
 */
export function getMaintenanceConfiguration(args: GetMaintenanceConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetMaintenanceConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20230702preview:getMaintenanceConfiguration", {
        "configName": args.configName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetMaintenanceConfigurationArgs {
    /**
     * The name of the maintenance configuration.
     */
    configName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
}

/**
 * See [planned maintenance](https://docs.microsoft.com/azure/aks/planned-maintenance) for more information about planned maintenance.
 */
export interface GetMaintenanceConfigurationResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Maintenance window for the maintenance configuration.
     */
    readonly maintenanceWindow?: types.outputs.MaintenanceWindowResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: string;
    /**
     * Time slots on which upgrade is not allowed.
     */
    readonly notAllowedTime?: types.outputs.TimeSpanResponse[];
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * If two array entries specify the same day of the week, the applied configuration is the union of times in both entries.
     */
    readonly timeInWeek?: types.outputs.TimeInWeekResponse[];
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * See [planned maintenance](https://docs.microsoft.com/azure/aks/planned-maintenance) for more information about planned maintenance.
 */
export function getMaintenanceConfigurationOutput(args: GetMaintenanceConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMaintenanceConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getMaintenanceConfiguration(a, opts))
}

export interface GetMaintenanceConfigurationOutputArgs {
    /**
     * The name of the maintenance configuration.
     */
    configName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}
