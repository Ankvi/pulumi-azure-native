import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of a cacheNodes
 * Azure REST API version: 2023-05-01-preview.
 */
export function getCacheNodesOperation(args: GetCacheNodesOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetCacheNodesOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedcache:getCacheNodesOperation", {
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCacheNodesOperationArgs {
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
 * Concrete tracked resource types can be created by aliasing this type using a specific property type.
 */
export interface GetCacheNodesOperationResult {
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
    readonly properties: types.outputs.CacheNodeOldResponseResponse;
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
 * Retrieves the properties of a cacheNodes
 * Azure REST API version: 2023-05-01-preview.
 */
export function getCacheNodesOperationOutput(args: GetCacheNodesOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCacheNodesOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedcache:getCacheNodesOperation", {
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCacheNodesOperationOutputArgs {
    /**
     * Name of the Customer resource
     */
    customerResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}