import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Guest OS Customization properties
 */
export interface GuestOSCustomizationResponse {
    /**
     * List of dns servers to use
     */
    dnsServers?: string[];
    /**
     * Virtual Machine hostname
     */
    hostName?: string;
    /**
     * Password for login
     */
    password?: string;
    /**
     * id of customization policy
     */
    policyId?: string;
    /**
     * Username for login
     */
    username?: string;
}

/**
 * Guest OS nic customization
 */
export interface GuestOSNICCustomizationResponse {
    /**
     * IP address allocation method
     */
    allocation?: string;
    /**
     * List of dns servers to use
     */
    dnsServers?: string[];
    /**
     * Gateway addresses assigned to nic
     */
    gateway?: string[];
    /**
     * Static ip address for nic
     */
    ipAddress?: string;
    /**
     * Network mask for nic
     */
    mask?: string;
    /**
     * primary WINS server for Windows
     */
    primaryWinsServer?: string;
    /**
     * secondary WINS server for Windows
     */
    secondaryWinsServer?: string;
}

/**
 * Resource pool model
 */
export interface ResourcePoolResponse {
    /**
     * Hierarchical resource pool name
     */
    fullName: string;
    /**
     * resource pool id (privateCloudId:vsphereId)
     */
    id: string;
    /**
     * Azure region
     */
    location: string;
    /**
     * {ResourcePoolName}
     */
    name: string;
    /**
     * The Private Cloud Id
     */
    privateCloudId: string;
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    type: string;
}

/**
 * The purchase SKU for CloudSimple paid resources
 */
export interface SkuResponse {
    /**
     * The capacity of the SKU
     */
    capacity?: string;
    /**
     * dedicatedCloudNode example: 8 x Ten-Core Intel® Xeon® Processor E5-2640 v4 2.40GHz 25MB Cache (90W); 12 x 64GB PC4-19200 2400MHz DDR4 ECC Registered DIMM, ...
     */
    description?: string;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here
     */
    family?: string;
    /**
     * The name of the SKU for VMWare CloudSimple Node
     */
    name: string;
    /**
     * The tier of the SKU
     */
    tier?: string;
}

/**
 * Virtual disk controller model
 */
export interface VirtualDiskControllerResponse {
    /**
     * Controller's id
     */
    id: string;
    /**
     * The display name of Controller
     */
    name: string;
    /**
     * dik controller subtype (VMWARE_PARAVIRTUAL, BUS_PARALLEL, LSI_PARALLEL, LSI_SAS)
     */
    subType: string;
    /**
     * disk controller type (SCSI)
     */
    type: string;
}

/**
 * Virtual disk model
 */
export interface VirtualDiskResponse {
    /**
     * Disk's Controller id
     */
    controllerId: string;
    /**
     * Disk's independence mode type
     */
    independenceMode: string;
    /**
     * Disk's total size
     */
    totalSize: number;
    /**
     * Disk's id
     */
    virtualDiskId?: string;
    /**
     * Disk's display name
     */
    virtualDiskName: string;
}

/**
 * Virtual network model
 */
export interface VirtualNetworkResponse {
    /**
     * can be used in vm creation/deletion
     */
    assignable: boolean;
    /**
     * virtual network id (privateCloudId:vsphereId)
     */
    id: string;
    /**
     * Azure region
     */
    location: string;
    /**
     * {VirtualNetworkName}
     */
    name: string;
    /**
     * The Private Cloud id
     */
    privateCloudId: string;
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    type: string;
}

/**
 * Virtual NIC model
 */
export interface VirtualNicResponse {
    /**
     * guest OS customization for nic
     */
    customization?: GuestOSNICCustomizationResponse;
    /**
     * NIC ip address
     */
    ipAddresses?: string[];
    /**
     * NIC MAC address
     */
    macAddress?: string;
    /**
     * Virtual Network
     */
    network: VirtualNetworkResponse;
    /**
     * NIC type
     */
    nicType: string;
    /**
     * Is NIC powered on/off on boot
     */
    powerOnBoot?: boolean;
    /**
     * NIC id
     */
    virtualNicId?: string;
    /**
     * NIC name
     */
    virtualNicName: string;
}
