import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This api gets ispCacheNode resource information
 *
 * Uses Azure REST API version 2023-05-01-preview.
 */
export function getIspCacheNodesOperationBgpCidrs(args: GetIspCacheNodesOperationBgpCidrsArgs, opts?: pulumi.InvokeOptions): Promise<GetIspCacheNodesOperationBgpCidrsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedcache:getIspCacheNodesOperationBgpCidrs", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIspCacheNodesOperationBgpCidrsArgs {
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
 * Represents all Cidr details of the Bgp request for a specific cache node resource
 */
export interface GetIspCacheNodesOperationBgpCidrsResult {
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
     * Mcc cache node resource Bgp Cidr properties.
     */
    readonly properties: types.outputs.BgpCidrsConfigurationResponse;
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
export function getIspCacheNodesOperationBgpCidrsOutput(args: GetIspCacheNodesOperationBgpCidrsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIspCacheNodesOperationBgpCidrsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedcache:getIspCacheNodesOperationBgpCidrs", {
        "cacheNodeResourceName": args.cacheNodeResourceName,
        "customerResourceName": args.customerResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIspCacheNodesOperationBgpCidrsOutputArgs {
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