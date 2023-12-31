import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Hybrid AKS virtual network
 */
export function getVirtualNetworkRetrieve(args: GetVirtualNetworkRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkRetrieveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20231115preview:getVirtualNetworkRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
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
    virtualNetworkName: string;
}

/**
 * The virtualNetworks resource definition.
 */
export interface GetVirtualNetworkRetrieveResult {
    readonly extendedLocation?: types.outputs.VirtualNetworkResponseExtendedLocation;
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
     * HybridAKSNetworkSpec defines the desired state of HybridAKSNetwork
     */
    readonly properties: types.outputs.VirtualNetworkPropertiesResponse;
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
 * Gets the Hybrid AKS virtual network
 */
export function getVirtualNetworkRetrieveOutput(args: GetVirtualNetworkRetrieveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkRetrieveResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkRetrieve(a, opts))
}

export interface GetVirtualNetworkRetrieveOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter for the name of the virtual network
     */
    virtualNetworkName: pulumi.Input<string>;
}
