import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the information about the network resource with the given name. The information include the description and other properties of the network.
 */
export function getNetwork(args: GetNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabricmesh/v20180901preview:getNetwork", {
        "networkResourceName": args.networkResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkArgs {
    /**
     * The identity of the network.
     */
    networkResourceName: string;
    /**
     * Azure resource group name
     */
    resourceGroupName: string;
}

/**
 * This type describes a network resource.
 */
export interface GetNetworkResult {
    /**
     * Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Describes properties of a network resource.
     */
    readonly properties: types.outputs.NetworkResourcePropertiesResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets the information about the network resource with the given name. The information include the description and other properties of the network.
 */
export function getNetworkOutput(args: GetNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkResult> {
    return pulumi.output(args).apply((a: any) => getNetwork(a, opts))
}

export interface GetNetworkOutputArgs {
    /**
     * The identity of the network.
     */
    networkResourceName: pulumi.Input<string>;
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}
