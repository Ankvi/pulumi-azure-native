import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Topology of the underlying resources in the given Network Fabric instance.
 *
 * Uses Azure REST API version 2023-06-15.
 */
export function getNetworkFabricTopology(args: GetNetworkFabricTopologyArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFabricTopologyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getNetworkFabricTopology", {
        "networkFabricName": args.networkFabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFabricTopologyArgs {
    /**
     * Name of the Network Fabric.
     */
    networkFabricName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The response of the action validate configuration.
 */
export interface GetNetworkFabricTopologyResult {
    /**
     * Gets the configuration state.
     */
    readonly configurationState: string;
    /**
     * The error object.
     */
    readonly error?: types.outputs.ErrorDetailResponse;
    /**
     * URL for the details of the response.
     */
    readonly url?: string;
}
/**
 * Gets Topology of the underlying resources in the given Network Fabric instance.
 *
 * Uses Azure REST API version 2023-06-15.
 */
export function getNetworkFabricTopologyOutput(args: GetNetworkFabricTopologyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkFabricTopologyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getNetworkFabricTopology", {
        "networkFabricName": args.networkFabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFabricTopologyOutputArgs {
    /**
     * Name of the Network Fabric.
     */
    networkFabricName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}