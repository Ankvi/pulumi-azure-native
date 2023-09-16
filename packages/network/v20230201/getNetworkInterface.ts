import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets information about the specified network interface.
 */
export function getNetworkInterface(args: GetNetworkInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230201:getNetworkInterface", {
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
     * Auxiliary mode of Network Interface resource.
     */
    readonly auxiliaryMode?: string;
    /**
     * Auxiliary sku of Network Interface resource.
     */
    readonly auxiliarySku?: string;
    /**
     * Indicates whether to disable tcp state tracking.
     */
    readonly disableTcpStateTracking?: boolean;
    /**
     * The DNS settings in network interface.
     */
    readonly dnsSettings?: types.outputs.network.v20230201.NetworkInterfaceDnsSettingsResponse;
    /**
     * A reference to the dscp configuration to which the network interface is linked.
     */
    readonly dscpConfiguration: types.outputs.network.v20230201.SubResourceResponse;
    /**
     * If the network interface is configured for accelerated networking. Not applicable to VM sizes which require accelerated networking.
     */
    readonly enableAcceleratedNetworking?: boolean;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    readonly enableIPForwarding?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of the network interface.
     */
    readonly extendedLocation?: types.outputs.network.v20230201.ExtendedLocationResponse;
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
    readonly ipConfigurations?: types.outputs.network.v20230201.NetworkInterfaceIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The MAC address of the network interface.
     */
    readonly macAddress: string;
    /**
     * Migration phase of Network Interface resource.
     */
    readonly migrationPhase?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: types.outputs.network.v20230201.NetworkSecurityGroupResponse;
    /**
     * Type of Network Interface resource.
     */
    readonly nicType?: string;
    /**
     * Whether this is a primary network interface on a virtual machine.
     */
    readonly primary: boolean;
    /**
     * A reference to the private endpoint to which the network interface is linked.
     */
    readonly privateEndpoint: types.outputs.network.v20230201.PrivateEndpointResponse;
    /**
     * Privatelinkservice of the network interface resource.
     */
    readonly privateLinkService?: types.outputs.network.v20230201.PrivateLinkServiceResponse;
    /**
     * The provisioning state of the network interface resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the network interface resource.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * A list of TapConfigurations of the network interface.
     */
    readonly tapConfigurations: types.outputs.network.v20230201.NetworkInterfaceTapConfigurationResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The reference to a virtual machine.
     */
    readonly virtualMachine: types.outputs.network.v20230201.SubResourceResponse;
    /**
     * Whether the virtual machine this nic is attached to supports encryption.
     */
    readonly vnetEncryptionSupported: boolean;
    /**
     * WorkloadType of the NetworkInterface for BareMetal resources
     */
    readonly workloadType?: string;
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
