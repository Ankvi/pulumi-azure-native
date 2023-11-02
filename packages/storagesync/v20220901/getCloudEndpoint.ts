import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a given CloudEndpoint.
 */
export function getCloudEndpoint(args: GetCloudEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagesync/v20220901:getCloudEndpoint", {
        "cloudEndpointName": args.cloudEndpointName,
        "resourceGroupName": args.resourceGroupName,
        "storageSyncServiceName": args.storageSyncServiceName,
        "syncGroupName": args.syncGroupName,
    }, opts);
}

export interface GetCloudEndpointArgs {
    /**
     * Name of Cloud Endpoint object.
     */
    cloudEndpointName: string;
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
 * Cloud Endpoint object.
 */
export interface GetCloudEndpointResult {
    /**
     * Azure file share name
     */
    readonly azureFileShareName?: string;
    /**
     * Backup Enabled
     */
    readonly backupEnabled: string;
    /**
     * Cloud endpoint change enumeration status
     */
    readonly changeEnumerationStatus: types.outputs.CloudEndpointChangeEnumerationStatusResponse;
    /**
     * Friendly Name
     */
    readonly friendlyName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName?: string;
    /**
     * CloudEndpoint lastWorkflowId
     */
    readonly lastWorkflowId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Partnership Id
     */
    readonly partnershipId?: string;
    /**
     * CloudEndpoint Provisioning State
     */
    readonly provisioningState?: string;
    /**
     * Storage Account Resource Id
     */
    readonly storageAccountResourceId?: string;
    /**
     * Storage Account Tenant Id
     */
    readonly storageAccountTenantId?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a given CloudEndpoint.
 */
export function getCloudEndpointOutput(args: GetCloudEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudEndpointResult> {
    return pulumi.output(args).apply((a: any) => getCloudEndpoint(a, opts))
}

export interface GetCloudEndpointOutputArgs {
    /**
     * Name of Cloud Endpoint object.
     */
    cloudEndpointName: pulumi.Input<string>;
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
