import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a given StorageSyncService.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2022-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagesync [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * managed identities for the Storage Sync service to interact with other Azure services without maintaining any secrets or credentials in code.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
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
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
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
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Use Identity authorization when customer have finished setup RBAC permissions.
     */
    readonly useIdentity: boolean;
}
/**
 * Get a given StorageSyncService.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2022-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagesync [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStorageSyncServiceOutput(args: GetStorageSyncServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageSyncServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storagesync:getStorageSyncService", {
        "resourceGroupName": args.resourceGroupName,
        "storageSyncServiceName": args.storageSyncServiceName,
    }, opts);
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