import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get details of the specified snapshot
 * Azure REST API version: 2022-11-01.
 */
export function getSnapshot(args: GetSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getSnapshot", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetSnapshotArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the snapshot
     */
    snapshotName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Snapshot of a Volume
 */
export interface GetSnapshotResult {
    /**
     * The creation date of the snapshot
     */
    readonly created: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * UUID v4 used to identify the Snapshot
     */
    readonly snapshotId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.netapp.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get details of the specified snapshot
 * Azure REST API version: 2022-11-01.
 */
export function getSnapshotOutput(args: GetSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSnapshotResult> {
    return pulumi.output(args).apply((a: any) => getSnapshot(a, opts))
}

export interface GetSnapshotOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the snapshot
     */
    snapshotName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}
