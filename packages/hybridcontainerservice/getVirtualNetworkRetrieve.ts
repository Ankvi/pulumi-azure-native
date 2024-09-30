import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Hybrid AKS virtual network
 * Azure REST API version: 2022-09-01-preview.
 */
export function getVirtualNetworkRetrieve(args: GetVirtualNetworkRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkRetrieveResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice:getVirtualNetworkRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworksName": args.virtualNetworksName,
    }, opts);
}

export interface GetVirtualNetworkRetrieveArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Parameter for the name of the virtual network
     */
    virtualNetworksName: string;
}

/**
 * The virtualNetworks resource definition.
 */
export interface GetVirtualNetworkRetrieveResult {
    readonly extendedLocation?: types.outputs.VirtualNetworksResponseExtendedLocation;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * HybridAKSNetworkSpec defines the desired state of HybridAKSNetwork
     */
    readonly properties: types.outputs.VirtualNetworksPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Gets the Hybrid AKS virtual network
 * Azure REST API version: 2022-09-01-preview.
 */
export function getVirtualNetworkRetrieveOutput(args: GetVirtualNetworkRetrieveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkRetrieveResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcontainerservice:getVirtualNetworkRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworksName": args.virtualNetworksName,
    }, opts);
}

export interface GetVirtualNetworkRetrieveOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter for the name of the virtual network
     */
    virtualNetworksName: pulumi.Input<string>;
}