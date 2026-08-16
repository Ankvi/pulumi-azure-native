import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Extended location pointing to the underlying infrastructure
 */
export interface VirtualNetworkExtendedLocationArgs {
    /**
     * ARM Id of the extended location.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The extended location type. Allowed value: 'CustomLocation'
     */
    type?: pulumi.Input<string | enums.ExtendedLocationTypes | undefined>;
}

/**
 * Properties of the virtual network resource
 */
export interface VirtualNetworkPropertiesArgs {
    /**
     * List of DNS server IP Addresses associated with the network
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * IP Address of the Gateway associated with the network
     */
    gateway?: pulumi.Input<string | undefined>;
    infraVnetProfile?: pulumi.Input<VirtualNetworkPropertiesInfraVnetProfileArgs | undefined>;
    /**
     * IP Address Prefix of the network
     */
    ipAddressPrefix?: pulumi.Input<string | undefined>;
    /**
     * Range of IP Addresses for Kubernetes API Server and services if using HA Proxy load balancer
     */
    vipPool?: pulumi.Input<pulumi.Input<VirtualNetworkPropertiesVipPoolArgs>[] | undefined>;
    /**
     * VLAN Id used by the network
     */
    vlanID?: pulumi.Input<number | undefined>;
    /**
     * Range of IP Addresses for Kubernetes node VMs
     */
    vmipPool?: pulumi.Input<pulumi.Input<VirtualNetworkPropertiesVmipPoolArgs>[] | undefined>;
}

/**
 * Infrastructure network profile for HCI platform
 */
export interface VirtualNetworkPropertiesHciArgs {
    /**
     * Group in MOC(Microsoft On-premises Cloud)
     */
    mocGroup?: pulumi.Input<string | undefined>;
    /**
     * Location in MOC(Microsoft On-premises Cloud)
     */
    mocLocation?: pulumi.Input<string | undefined>;
    /**
     * Virtual Network name in MOC(Microsoft On-premises Cloud)
     */
    mocVnetName?: pulumi.Input<string | undefined>;
}

export interface VirtualNetworkPropertiesInfraVnetProfileArgs {
    /**
     * Infrastructure network profile for HCI platform
     */
    hci?: pulumi.Input<VirtualNetworkPropertiesHciArgs | undefined>;
}

export interface VirtualNetworkPropertiesVipPoolArgs {
    /**
     * Ending IP address for the IP Pool
     */
    endIP?: pulumi.Input<string | undefined>;
    /**
     * Starting IP address for the IP Pool
     */
    startIP?: pulumi.Input<string | undefined>;
}

export interface VirtualNetworkPropertiesVmipPoolArgs {
    /**
     * Ending IP address for the IP Pool
     */
    endIP?: pulumi.Input<string | undefined>;
    /**
     * Starting IP address for the IP Pool
     */
    startIP?: pulumi.Input<string | undefined>;
}
