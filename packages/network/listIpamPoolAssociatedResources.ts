import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of PoolAssociation
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2024-01-01-preview, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2024-01-01-preview, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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