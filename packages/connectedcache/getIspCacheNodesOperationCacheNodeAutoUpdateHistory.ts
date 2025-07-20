import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This api gets ispCacheNode resource auto update histrory information
 *
 * Uses Azure REST API version 2024-11-30-preview.
 */
export function getIspCacheNodesOperationCacheNodeAutoUpdateHistory(args: GetIspCacheNodesOperationCacheNodeAutoUpdateHistoryArgs, opts?: pulumi.InvokeOptions): Promise<GetIspCacheNodesOperationCacheNodeAutoUpdateHistoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedcache:getIspCacheNodesOperationCacheNodeAutoUpdateHistory", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIspCacheNodesOperationCacheNodeAutoUpdateHistoryArgs {
    /**
     * Name of the ConnectedCache resource
     */
    cacheNodeResourceName: string;
    /**
     * Name of the Customer resource
     */
    customerResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Mcc cache node resource auto update history.
 */
export interface GetIspCacheNodesOperationCacheNodeAutoUpdateHistoryResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Mcc cache node resource auto update history properties.
     */
    readonly properties: types.outputs.MccCacheNodeAutoUpdateHistoryPropertiesResponse;
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
 * This api gets ispCacheNode resource auto update histrory information
 *
 * Uses Azure REST API version 2024-11-30-preview.
 */
export function getIspCacheNodesOperationCacheNodeAutoUpdateHistoryOutput(args: GetIspCacheNodesOperationCacheNodeAutoUpdateHistoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIspCacheNodesOperationCacheNodeAutoUpdateHistoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedcache:getIspCacheNodesOperationCacheNodeAutoUpdateHistory", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIspCacheNodesOperationCacheNodeAutoUpdateHistoryOutputArgs {
    /**
     * Name of the ConnectedCache resource
     */
    cacheNodeResourceName: pulumi.Input<string>;
    /**
     * Name of the Customer resource
     */
    customerResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}