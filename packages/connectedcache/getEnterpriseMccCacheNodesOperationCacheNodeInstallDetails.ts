import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This api gets secrets of the ispCacheNode resource install details
 *
 * Uses Azure REST API version 2023-05-01-preview.
 */
export function getEnterpriseMccCacheNodesOperationCacheNodeInstallDetails(args: GetEnterpriseMccCacheNodesOperationCacheNodeInstallDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetEnterpriseMccCacheNodesOperationCacheNodeInstallDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedcache:getEnterpriseMccCacheNodesOperationCacheNodeInstallDetails", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnterpriseMccCacheNodesOperationCacheNodeInstallDetailsArgs {
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
 * Mcc cache node resource all install details.
 */
export interface GetEnterpriseMccCacheNodesOperationCacheNodeInstallDetailsResult {
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
     * Mcc cache node resource install script details.
     */
    readonly properties: types.outputs.CacheNodeInstallPropertiesResponse;
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
 * This api gets secrets of the ispCacheNode resource install details
 *
 * Uses Azure REST API version 2023-05-01-preview.
 */
export function getEnterpriseMccCacheNodesOperationCacheNodeInstallDetailsOutput(args: GetEnterpriseMccCacheNodesOperationCacheNodeInstallDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnterpriseMccCacheNodesOperationCacheNodeInstallDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedcache:getEnterpriseMccCacheNodesOperationCacheNodeInstallDetails", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnterpriseMccCacheNodesOperationCacheNodeInstallDetailsOutputArgs {
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