import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Action to get Maintenance Window Status of the Service Fabric Managed Clusters.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-06-01-preview, 2024-09-01-preview, 2024-11-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedMaintenanceWindowStatus(args: GetManagedMaintenanceWindowStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedMaintenanceWindowStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getManagedMaintenanceWindowStatus", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedMaintenanceWindowStatusArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes the maintenance window status of the Service Fabric Managed Cluster.
 */
export interface GetManagedMaintenanceWindowStatusResult {
    /**
     * If updates can be applied.
     */
    readonly canApplyUpdates: boolean;
    /**
     * Indicates if the region is ready to configure maintenance windows.
     */
    readonly isRegionReady: boolean;
    /**
     * If maintenance window is active.
     */
    readonly isWindowActive: boolean;
    /**
     * If maintenance window is enabled on this cluster.
     */
    readonly isWindowEnabled: boolean;
    /**
     * Last window end time in UTC.
     */
    readonly lastWindowEndTimeUTC: string;
    /**
     * Last window start time in UTC.
     */
    readonly lastWindowStartTimeUTC: string;
    /**
     * Last window update time in UTC.
     */
    readonly lastWindowStatusUpdateAtUTC: string;
}
/**
 * Action to get Maintenance Window Status of the Service Fabric Managed Clusters.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-06-01-preview, 2024-09-01-preview, 2024-11-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedMaintenanceWindowStatusOutput(args: GetManagedMaintenanceWindowStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedMaintenanceWindowStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:getManagedMaintenanceWindowStatus", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedMaintenanceWindowStatusOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}