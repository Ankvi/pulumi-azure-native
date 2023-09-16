import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a given StorageSyncService.
 * Azure REST API version: 2022-06-01.
 */
export function getStorageSyncService(args: GetStorageSyncServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageSyncServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagesync:getStorageSyncService", {
        "resourceGroupName": args.resourceGroupName,
        "storageSyncServiceName": args.storageSyncServiceName,
    }, opts);
}

export interface GetStorageSyncServiceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: string;
}

/**
 * Storage Sync Service object.
 */
export interface GetStorageSyncServiceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Incoming Traffic Policy
     */
    readonly incomingTrafficPolicy?: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName: string;
    /**
     * StorageSyncService lastWorkflowId
     */
    readonly lastWorkflowId: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connection associated with the specified storage sync service
     */
    readonly privateEndpointConnections: types.outputs.storagesync.PrivateEndpointConnectionResponse[];
    /**
     * StorageSyncService Provisioning State
     */
    readonly provisioningState: string;
    /**
     * Storage Sync service status.
     */
    readonly storageSyncServiceStatus: number;
    /**
     * Storage Sync service Uid
     */
    readonly storageSyncServiceUid: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.storagesync.SystemDataResponse;
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
 * Get a given StorageSyncService.
 * Azure REST API version: 2022-06-01.
 */
export function getStorageSyncServiceOutput(args: GetStorageSyncServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageSyncServiceResult> {
    return pulumi.output(args).apply((a: any) => getStorageSyncService(a, opts))
}

export interface GetStorageSyncServiceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: pulumi.Input<string>;
}
