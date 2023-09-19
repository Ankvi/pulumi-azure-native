import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a network interface
 */
export function getNetworkInterface(args: GetNetworkInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20221215preview:getNetworkInterface", {
        "networkInterfaceName": args.networkInterfaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkInterfaceArgs {
    /**
     * Name of the network interface
     */
    networkInterfaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The network interface resource definition.
 */
export interface GetNetworkInterfaceResult {
    /**
     * DNS Settings for the interface
     */
    readonly dnsSettings?: types.outputs.InterfaceDNSSettingsResponse;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * IPConfigurations - A list of IPConfigurations of the network interface.
     */
    readonly ipConfigurations?: types.outputs.IPConfigurationResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * MacAddress - The MAC address of the network interface.
     */
    readonly macAddress?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the network interface.
     */
    readonly provisioningState: string;
    /**
     * The observed state of network interfaces
     */
    readonly status: types.outputs.NetworkInterfaceStatusResponse;
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
 * Gets a network interface
 */
export function getNetworkInterfaceOutput(args: GetNetworkInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getNetworkInterface(a, opts))
}

export interface GetNetworkInterfaceOutputArgs {
    /**
     * Name of the network interface
     */
    networkInterfaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
