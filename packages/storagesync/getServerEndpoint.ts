import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ServerEndpoint.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2022-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagesync [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServerEndpoint(args: GetServerEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetServerEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagesync:getServerEndpoint", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Cloud Tiering.
     */
    readonly cloudTiering?: string;
    /**
     * Cloud tiering status. Only populated if cloud tiering is enabled.
     */
    readonly cloudTieringStatus: types.outputs.ServerEndpointCloudTieringStatusResponse;
    /**
     * Friendly Name
     */
    readonly friendlyName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
    readonly recallStatus: types.outputs.ServerEndpointRecallStatusResponse;
    /**
     * Server Endpoint provisioning status
     */
    readonly serverEndpointProvisioningStatus?: types.outputs.ServerEndpointProvisioningStatusResponse;
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
    readonly syncStatus: types.outputs.ServerEndpointSyncStatusResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2022-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagesync [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServerEndpointOutput(args: GetServerEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storagesync:getServerEndpoint", {
        "resourceGroupName": args.resourceGroupName,
        "serverEndpointName": args.serverEndpointName,
        "storageSyncServiceName": args.storageSyncServiceName,
        "syncGroupName": args.syncGroupName,
    }, opts);
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