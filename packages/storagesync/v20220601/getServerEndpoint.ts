import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a ServerEndpoint.
 */
export function getServerEndpoint(args: GetServerEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetServerEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagesync/v20220601:getServerEndpoint", {
        "resourceGroupName": args.resourceGroupName,
        "serverEndpointName": args.serverEndpointName,
        "storageSyncServiceName": args.storageSyncServiceName,
        "syncGroupName": args.syncGroupName,
    }, opts);
}

export interface GetServerEndpointArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Server Endpoint object.
     */
    serverEndpointName: string;
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
 * Server Endpoint object.
 */
export interface GetServerEndpointResult {
    /**
     * Cloud Tiering.
     */
    readonly cloudTiering?: string;
    /**
     * Cloud tiering status. Only populated if cloud tiering is enabled.
     */
    readonly cloudTieringStatus: types.outputs.storagesync.v20220601.ServerEndpointCloudTieringStatusResponse;
    /**
     * Friendly Name
     */
    readonly friendlyName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Policy for how namespace and files are recalled during FastDr.
     */
    readonly initialDownloadPolicy?: string;
    /**
     * Policy for how the initial upload sync session is performed.
     */
    readonly initialUploadPolicy?: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName: string;
    /**
     * ServerEndpoint lastWorkflowId
     */
    readonly lastWorkflowId: string;
    /**
     * Policy for enabling follow-the-sun business models: link local cache to cloud behavior to pre-populate before local access.
     */
    readonly localCacheMode?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Offline data transfer
     */
    readonly offlineDataTransfer?: string;
    /**
     * Offline data transfer share name
     */
    readonly offlineDataTransferShareName?: string;
    /**
     * Offline data transfer storage account resource ID
     */
    readonly offlineDataTransferStorageAccountResourceId: string;
    /**
     * Offline data transfer storage account tenant ID
     */
    readonly offlineDataTransferStorageAccountTenantId: string;
    /**
     * ServerEndpoint Provisioning State
     */
    readonly provisioningState: string;
    /**
     * Recall status. Only populated if cloud tiering is enabled.
     */
    readonly recallStatus: types.outputs.storagesync.v20220601.ServerEndpointRecallStatusResponse;
    /**
     * Server Local path.
     */
    readonly serverLocalPath?: string;
    /**
     * Server name
     */
    readonly serverName: string;
    /**
     * Server Resource Id.
     */
    readonly serverResourceId?: string;
    /**
     * Server Endpoint sync status
     */
    readonly syncStatus: types.outputs.storagesync.v20220601.ServerEndpointSyncStatusResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.storagesync.v20220601.SystemDataResponse;
    /**
     * Tier files older than days.
     */
    readonly tierFilesOlderThanDays?: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    readonly volumeFreeSpacePercent?: number;
}
/**
 * Get a ServerEndpoint.
 */
export function getServerEndpointOutput(args: GetServerEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerEndpointResult> {
    return pulumi.output(args).apply((a: any) => getServerEndpoint(a, opts))
}

export interface GetServerEndpointOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Server Endpoint object.
     */
    serverEndpointName: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: pulumi.Input<string>;
    /**
     * Name of Sync Group resource.
     */
    syncGroupName: pulumi.Input<string>;
}
