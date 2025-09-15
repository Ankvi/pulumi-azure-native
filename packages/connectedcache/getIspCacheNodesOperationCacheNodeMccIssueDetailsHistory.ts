import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This api gets ispCacheNode resource issues details histrory information
 *
 * Uses Azure REST API version 2024-11-30-preview.
 */
export function getIspCacheNodesOperationCacheNodeMccIssueDetailsHistory(args: GetIspCacheNodesOperationCacheNodeMccIssueDetailsHistoryArgs, opts?: pulumi.InvokeOptions): Promise<GetIspCacheNodesOperationCacheNodeMccIssueDetailsHistoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedcache:getIspCacheNodesOperationCacheNodeMccIssueDetailsHistory", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIspCacheNodesOperationCacheNodeMccIssueDetailsHistoryArgs {
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
 * Mcc cache node resource issue history.
 */
export interface GetIspCacheNodesOperationCacheNodeMccIssueDetailsHistoryResult {
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
     * Mcc cache node resource issue history properties.
     */
    readonly properties: types.outputs.MccCacheNodeIssueHistoryPropertiesResponse;
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
 * This api gets ispCacheNode resource issues details histrory information
 *
 * Uses Azure REST API version 2024-11-30-preview.
 */
export function getIspCacheNodesOperationCacheNodeMccIssueDetailsHistoryOutput(args: GetIspCacheNodesOperationCacheNodeMccIssueDetailsHistoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIspCacheNodesOperationCacheNodeMccIssueDetailsHistoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedcache:getIspCacheNodesOperationCacheNodeMccIssueDetailsHistory", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIspCacheNodesOperationCacheNodeMccIssueDetailsHistoryOutputArgs {
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