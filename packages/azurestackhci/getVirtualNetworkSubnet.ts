import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get a virtual network subnet.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getVirtualNetworkSubnet(args: GetVirtualNetworkSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkSubnetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getVirtualNetworkSubnet", {
        "resourceGroupName": args.resourceGroupName,
        "subnetName": args.subnetName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface GetVirtualNetworkSubnetArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the virtual network subnet
     */
    subnetName: string;
    /**
     * Name of the virtual network
     */
    virtualNetworkName: string;
}

/**
 * The virtual network resource definition.
 */
export interface GetVirtualNetworkSubnetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.VirtualNetworkSubnetPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * The operation to get a virtual network subnet.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getVirtualNetworkSubnetOutput(args: GetVirtualNetworkSubnetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkSubnetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getVirtualNetworkSubnet", {
        "resourceGroupName": args.resourceGroupName,
        "subnetName": args.subnetName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface GetVirtualNetworkSubnetOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the virtual network subnet
     */
    subnetName: pulumi.Input<string>;
    /**
     * Name of the virtual network
     */
    virtualNetworkName: pulumi.Input<string>;
}