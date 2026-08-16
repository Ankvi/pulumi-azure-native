import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Guest OS Customization properties
 */
export interface GuestOSCustomizationArgs {
    /**
     * List of dns servers to use
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Virtual Machine hostname
     */
    hostName?: pulumi.Input<string | undefined>;
    /**
     * Password for login
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * id of customization policy
     */
    policyId?: pulumi.Input<string | undefined>;
    /**
     * Username for login
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * Guest OS nic customization
 */
export interface GuestOSNICCustomizationArgs {
    /**
     * IP address allocation method
     */
    allocation?: pulumi.Input<string | undefined>;
    /**
     * List of dns servers to use
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gateway addresses assigned to nic
     */
    gateway?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Static ip address for nic
     */
    ipAddress?: pulumi.Input<string | undefined>;
    /**
     * Network mask for nic
     */
    mask?: pulumi.Input<string | undefined>;
    /**
     * primary WINS server for Windows
     */
    primaryWinsServer?: pulumi.Input<string | undefined>;
    /**
     * secondary WINS server for Windows
     */
    secondaryWinsServer?: pulumi.Input<string | undefined>;
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
    capacity?: pulumi.Input<string | undefined>;
    /**
     * dedicatedCloudNode example: 8 x Ten-Core Intel® Xeon® Processor E5-2640 v4 2.40GHz 25MB Cache (90W); 12 x 64GB PC4-19200 2400MHz DDR4 ECC Registered DIMM, ...
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the SKU for VMWare CloudSimple Node
     */
    name: pulumi.Input<string>;
    /**
     * The tier of the SKU
     */
    tier?: pulumi.Input<string | undefined>;
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
    virtualDiskId?: pulumi.Input<string | undefined>;
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
    customization?: pulumi.Input<GuestOSNICCustomizationArgs | undefined>;
    /**
     * NIC ip address
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * NIC MAC address
     */
    macAddress?: pulumi.Input<string | undefined>;
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
    powerOnBoot?: pulumi.Input<boolean | undefined>;
    /**
     * NIC id
     */
    virtualNicId?: pulumi.Input<string | undefined>;
}
