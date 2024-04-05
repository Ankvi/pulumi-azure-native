import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A managed cluster snapshot resource.
 * Azure REST API version: 2023-05-02-preview.
 *
 * Other available API versions: 2023-06-02-preview, 2023-07-02-preview, 2023-08-02-preview, 2023-09-02-preview, 2023-10-02-preview, 2023-11-02-preview, 2024-01-02-preview, 2024-02-02-preview.
 */
export function getManagedClusterSnapshot(args: GetManagedClusterSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterSnapshotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:getManagedClusterSnapshot", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetManagedClusterSnapshotArgs {
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
 * A managed cluster snapshot resource.
 */
export interface GetManagedClusterSnapshotResult {
    /**
     * CreationData to be used to specify the source resource ID to create this snapshot.
     */
    readonly creationData?: types.outputs.CreationDataResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * What the properties will be showed when getting managed cluster snapshot. Those properties are read-only.
     */
    readonly managedClusterPropertiesReadOnly: types.outputs.ManagedClusterPropertiesForSnapshotResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of a snapshot. The default is NodePool.
     */
    readonly snapshotType?: string;
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
 * A managed cluster snapshot resource.
 * Azure REST API version: 2023-05-02-preview.
 *
 * Other available API versions: 2023-06-02-preview, 2023-07-02-preview, 2023-08-02-preview, 2023-09-02-preview, 2023-10-02-preview, 2023-11-02-preview, 2024-01-02-preview, 2024-02-02-preview.
 */
export function getManagedClusterSnapshotOutput(args: GetManagedClusterSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedClusterSnapshotResult> {
    return pulumi.output(args).apply((a: any) => getManagedClusterSnapshot(a, opts))
}

export interface GetManagedClusterSnapshotOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}