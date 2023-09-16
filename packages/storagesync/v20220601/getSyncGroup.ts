import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a given SyncGroup.
 */
export function getSyncGroup(args: GetSyncGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagesync/v20220601:getSyncGroup", {
        "resourceGroupName": args.resourceGroupName,
        "storageSyncServiceName": args.storageSyncServiceName,
        "syncGroupName": args.syncGroupName,
    }, opts);
}

export interface GetSyncGroupArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: string;
    /**
     * Name of Sync Group resource.
     */
    syncGroupName: string;
}

/**
 * Sync Group object.
 */
export interface GetSyncGroupResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Sync group status
     */
    readonly syncGroupStatus: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.storagesync.v20220601.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Unique Id
     */
    readonly uniqueId: string;
}
/**
 * Get a given SyncGroup.
 */
export function getSyncGroupOutput(args: GetSyncGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSyncGroupResult> {
    return pulumi.output(args).apply((a: any) => getSyncGroup(a, opts))
}

export interface GetSyncGroupOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: pulumi.Input<string>;
    /**
     * Name of Sync Group resource.
     */
    syncGroupName: pulumi.Input<string>;
}
