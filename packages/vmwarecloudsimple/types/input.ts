import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Guest OS Customization properties
 */
export interface GuestOSCustomizationArgs {
    /**
     * List of dns servers to use
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Virtual Machine hostname
     */
    hostName?: pulumi.Input<string>;
    /**
     * Password for login
     */
    password?: pulumi.Input<string>;
    /**
     * id of customization policy
     */
    policyId?: pulumi.Input<string>;
    /**
     * Username for login
     */
    username?: pulumi.Input<string>;
}

/**
 * Guest OS nic customization
 */
export interface GuestOSNICCustomizationArgs {
    /**
     * IP address allocation method
     */
    allocation?: pulumi.Input<string>;
    /**
     * List of dns servers to use
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gateway addresses assigned to nic
     */
    gateway?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Static ip address for nic
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Network mask for nic
     */
    mask?: pulumi.Input<string>;
    /**
     * primary WINS server for Windows
     */
    primaryWinsServer?: pulumi.Input<string>;
    /**
     * secondary WINS server for Windows
     */
    secondaryWinsServer?: pulumi.Input<string>;
}

/**
 * Resource pool model
 */
export interface ResourcePoolArgs {
    /**
     * resource pool id (privateCloudId:vsphereId)
     */
    id: pulumi.Input<string>;
}

/**
 * The purchase SKU for CloudSimple paid resources
 */
export interface SkuArgs {
    /**
     * The capacity of the SKU
     */
    capacity?: pulumi.Input<string>;
    /**
     * dedicatedCloudNode example: 8 x Ten-Core Intel® Xeon® Processor E5-2640 v4 2.40GHz 25MB Cache (90W); 12 x 64GB PC4-19200 2400MHz DDR4 ECC Registered DIMM, ...
     */
    description?: pulumi.Input<string>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the SKU for VMWare CloudSimple Node
     */
    name: pulumi.Input<string>;
    /**
     * The tier of the SKU
     */
    tier?: pulumi.Input<string>;
}

/**
 * Virtual disk model
 */
export interface VirtualDiskArgs {
    /**
     * Disk's Controller id
     */
    controllerId: pulumi.Input<string>;
    /**
     * Disk's independence mode type
     */
    independenceMode: pulumi.Input<enums.DiskIndependenceMode>;
    /**
     * Disk's total size
     */
    totalSize: pulumi.Input<number>;
    /**
     * Disk's id
     */
    virtualDiskId?: pulumi.Input<string>;
}

/**
 * Virtual network model
 */
export interface VirtualNetworkArgs {
    /**
     * virtual network id (privateCloudId:vsphereId)
     */
    id: pulumi.Input<string>;
}

/**
 * Virtual NIC model
 */
export interface VirtualNicArgs {
    /**
     * guest OS customization for nic
     */
    customization?: pulumi.Input<GuestOSNICCustomizationArgs>;
    /**
     * NIC ip address
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * NIC MAC address
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Virtual Network
     */
    network: pulumi.Input<VirtualNetworkArgs>;
    /**
     * NIC type
     */
    nicType: pulumi.Input<enums.NICType>;
    /**
     * Is NIC powered on/off on boot
     */
    powerOnBoot?: pulumi.Input<boolean>;
    /**
     * NIC id
     */
    virtualNicId?: pulumi.Input<string>;
}
