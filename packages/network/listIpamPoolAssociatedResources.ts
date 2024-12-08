import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of PoolAssociation
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function listIpamPoolAssociatedResources(args: ListIpamPoolAssociatedResourcesArgs, opts?: pulumi.InvokeOptions): Promise<ListIpamPoolAssociatedResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listIpamPoolAssociatedResources", {
        "networkManagerName": args.networkManagerName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIpamPoolAssociatedResourcesArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * Pool resource name.
     */
    poolName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * List of PoolAssociation
 */
export interface ListIpamPoolAssociatedResourcesResult {
    /**
     * The link used to get the next page of operations.
     */
    readonly nextLink?: string;
    readonly value?: types.outputs.PoolAssociationResponse[];
}
/**
 * List of PoolAssociation
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function listIpamPoolAssociatedResourcesOutput(args: ListIpamPoolAssociatedResourcesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIpamPoolAssociatedResourcesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listIpamPoolAssociatedResources", {
        "networkManagerName": args.networkManagerName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIpamPoolAssociatedResourcesOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * Pool resource name.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}