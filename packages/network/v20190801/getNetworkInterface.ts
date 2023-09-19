import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified network interface.
 */
export function getNetworkInterface(args: GetNetworkInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190801:getNetworkInterface", {
        "expand": args.expand,
        "networkInterfaceName": args.networkInterfaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkInterfaceArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the network interface.
     */
    networkInterfaceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A network interface in a resource group.
 */
export interface GetNetworkInterfaceResult {
    /**
     * The DNS settings in network interface.
     */
    readonly dnsSettings?: types.outputs.NetworkInterfaceDnsSettingsResponse;
    /**
     * If the network interface is accelerated networking enabled.
     */
    readonly enableAcceleratedNetworking?: boolean;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    readonly enableIPForwarding?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * A list of references to linked BareMetal resources.
     */
    readonly hostedWorkloads: string[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * A list of IPConfigurations of the network interface.
     */
    readonly ipConfigurations?: types.outputs.NetworkInterfaceIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The MAC address of the network interface.
     */
    readonly macAddress?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: types.outputs.NetworkSecurityGroupResponse;
    /**
     * Whether this is a primary network interface on a virtual machine.
     */
    readonly primary?: boolean;
    /**
     * A reference to the private endpoint to which the network interface is linked.
     */
    readonly privateEndpoint: types.outputs.PrivateEndpointResponse;
    /**
     * The provisioning state of the network interface resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the network interface resource.
     */
    readonly resourceGuid?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * A list of TapConfigurations of the network interface.
     */
    readonly tapConfigurations?: types.outputs.NetworkInterfaceTapConfigurationResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The reference of a virtual machine.
     */
    readonly virtualMachine: types.outputs.SubResourceResponse;
}
/**
 * Gets information about the specified network interface.
 */
export function getNetworkInterfaceOutput(args: GetNetworkInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getNetworkInterface(a, opts))
}

export interface GetNetworkInterfaceOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the network interface.
     */
    networkInterfaceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
