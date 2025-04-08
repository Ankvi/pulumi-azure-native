import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Hybrid AKS virtual network
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-11-15-preview, 2024-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcontainerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-11-15-preview, 2024-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcontainerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkRetrieveOutput(args: GetVirtualNetworkRetrieveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkRetrieveResult> {
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