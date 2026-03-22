import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a NodePool
 *
 * Uses Azure REST API version 2026-02-01-preview.
 */
export function getNodePool(args: GetNodePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetNodePoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:discovery:getNodePool", {
        "nodePoolName": args.nodePoolName,
        "resourceGroupName": args.resourceGroupName,
        "supercomputerName": args.supercomputerName,
    }, opts);
}

export interface GetNodePoolArgs {
    /**
     * The name of the NodePool
     */
    nodePoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Supercomputer
     */
    supercomputerName: string;
}

/**
 * NodePool tracked resource
 */
export interface GetNodePoolResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.NodePoolPropertiesResponse;
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
 * Get a NodePool
 *
 * Uses Azure REST API version 2026-02-01-preview.
 */
export function getNodePoolOutput(args: GetNodePoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNodePoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:discovery:getNodePool", {
        "nodePoolName": args.nodePoolName,
        "resourceGroupName": args.resourceGroupName,
        "supercomputerName": args.supercomputerName,
    }, opts);
}

export interface GetNodePoolOutputArgs {
    /**
     * The name of the NodePool
     */
    nodePoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Supercomputer
     */
    supercomputerName: pulumi.Input<string>;
}