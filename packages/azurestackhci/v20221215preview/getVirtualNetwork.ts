import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The virtual network resource definition.
 */
export function getVirtualNetwork(args: GetVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20221215preview:getVirtualNetwork", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface GetVirtualNetworkArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the virtual network
     */
    virtualNetworkName: string;
}

/**
 * The virtual network resource definition.
 */
export interface GetVirtualNetworkResult {
    /**
     * DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
     */
    readonly dhcpOptions?: types.outputs.VirtualNetworkPropertiesResponseDhcpOptions;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
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
     * Type of the network
     */
    readonly networkType?: string;
    /**
     * Provisioning state of the virtual network.
     */
    readonly provisioningState: string;
    /**
     * The observed state of virtual networks
     */
    readonly status: types.outputs.VirtualNetworkStatusResponse;
    /**
     * Subnet - list of subnets under the virtual network
     */
    readonly subnets?: types.outputs.VirtualNetworkPropertiesResponseSubnets[];
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
    /**
     * name of the network switch to be used for VMs
     */
    readonly vmSwitchName?: string;
}
/**
 * The virtual network resource definition.
 */
export function getVirtualNetworkOutput(args: GetVirtualNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetwork(a, opts))
}

export interface GetVirtualNetworkOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the virtual network
     */
    virtualNetworkName: pulumi.Input<string>;
}