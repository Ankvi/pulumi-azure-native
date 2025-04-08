import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This api gets ispCacheNode resource information
 *
 * Uses Azure REST API version 2023-05-01-preview.
 */
export function getEnterpriseMccCacheNodesOperation(args: GetEnterpriseMccCacheNodesOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetEnterpriseMccCacheNodesOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedcache:getEnterpriseMccCacheNodesOperation", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnterpriseMccCacheNodesOperationArgs {
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
 * Represents the high level Nodes needed to provision cache node resources
 */
export interface GetEnterpriseMccCacheNodesOperationResult {
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.CacheNodePropertyResponse;
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
 * This api gets ispCacheNode resource information
 *
 * Uses Azure REST API version 2023-05-01-preview.
 */
export function getEnterpriseMccCacheNodesOperationOutput(args: GetEnterpriseMccCacheNodesOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnterpriseMccCacheNodesOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedcache:getEnterpriseMccCacheNodesOperation", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnterpriseMccCacheNodesOperationOutputArgs {
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