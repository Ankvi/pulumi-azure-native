import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * See [planned maintenance](https://docs.microsoft.com/azure/aks/planned-maintenance) for more information about planned maintenance.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-05-02-preview, 2023-06-01, 2023-06-02-preview, 2023-07-01, 2023-07-02-preview, 2023-08-01, 2023-08-02-preview, 2023-09-01, 2023-09-02-preview, 2023-10-01, 2023-10-02-preview, 2023-11-01, 2023-11-02-preview, 2024-01-01, 2024-01-02-preview, 2024-02-01, 2024-02-02-preview, 2024-03-02-preview, 2024-04-02-preview, 2024-05-01, 2024-05-02-preview, 2024-06-02-preview, 2024-07-01, 2024-07-02-preview, 2024-08-01, 2024-09-01, 2024-09-02-preview, 2024-10-01, 2024-10-02-preview, 2025-01-01.
 */
export function getMaintenanceConfiguration(args: GetMaintenanceConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetMaintenanceConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:getMaintenanceConfiguration", {
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
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-05-02-preview, 2023-06-01, 2023-06-02-preview, 2023-07-01, 2023-07-02-preview, 2023-08-01, 2023-08-02-preview, 2023-09-01, 2023-09-02-preview, 2023-10-01, 2023-10-02-preview, 2023-11-01, 2023-11-02-preview, 2024-01-01, 2024-01-02-preview, 2024-02-01, 2024-02-02-preview, 2024-03-02-preview, 2024-04-02-preview, 2024-05-01, 2024-05-02-preview, 2024-06-02-preview, 2024-07-01, 2024-07-02-preview, 2024-08-01, 2024-09-01, 2024-09-02-preview, 2024-10-01, 2024-10-02-preview, 2025-01-01.
 */
export function getMaintenanceConfigurationOutput(args: GetMaintenanceConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMaintenanceConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:getMaintenanceConfiguration", {
        "configName": args.configName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
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