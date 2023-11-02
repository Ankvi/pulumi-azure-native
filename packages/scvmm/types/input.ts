import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the resource properties.
 */
export interface CheckpointArgs {
    /**
     * Gets ID of the checkpoint.
     */
    checkpointID?: pulumi.Input<string>;
    /**
     * Gets description of the checkpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets name of the checkpoint.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets ID of parent of the checkpoint.
     */
    parentCheckpointID?: pulumi.Input<string>;
}

/**
 * The extended location.
 */
export interface ExtendedLocationArgs {
    /**
     * The extended location name.
     */
    name?: pulumi.Input<string>;
    /**
     * The extended location type.
     */
    type?: pulumi.Input<string>;
}

/**
 * Defines the resource properties.
 */
export interface GuestAgentProfileArgs {
    /**
     * Gets or sets the Public Key provided by the client for enabling guest management.
     */
    clientPublicKey?: pulumi.Input<string>;
}

/**
 * Username / Password Credentials to connect to guest.
 */
export interface GuestCredentialArgs {
    /**
     * Gets or sets the password to connect with the guest.
     */
    password?: pulumi.Input<string>;
    /**
     * Gets or sets username to connect with the guest.
     */
    username?: pulumi.Input<string>;
}

/**
 * Defines the resource properties.
 */
export interface HardwareProfileArgs {
    /**
     * Gets or sets the number of vCPUs for the vm.
     */
    cpuCount?: pulumi.Input<number>;
    /**
     * Gets or sets a value indicating whether to enable dynamic memory or not.
     */
    dynamicMemoryEnabled?: pulumi.Input<string | enums.DynamicMemoryEnabled>;
    /**
     * Gets or sets the max dynamic memory for the vm.
     */
    dynamicMemoryMaxMB?: pulumi.Input<number>;
    /**
     * Gets or sets the min dynamic memory for the vm.
     */
    dynamicMemoryMinMB?: pulumi.Input<number>;
    /**
     * Gets highly available property.
     */
    isHighlyAvailable?: pulumi.Input<string>;
    /**
     * Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs.
     */
    limitCpuForMigration?: pulumi.Input<string | enums.LimitCpuForMigration>;
    /**
     * MemoryMB is the size of a virtual machine's memory, in MB.
     */
    memoryMB?: pulumi.Input<number>;
}

/**
 * HTTP Proxy configuration for the VM.
 */
export interface HttpProxyConfigurationArgs {
    /**
     * Gets or sets httpsProxy url.
     */
    httpsProxy?: pulumi.Input<string>;
}

/**
 * Managed service identity.
 */
export interface IdentityArgs {
    /**
     * The type of managed service identity.
     */
    type: pulumi.Input<string | enums.IdentityType>;
}

/**
 * Specifies the vmmServer infrastructure specific settings for the virtual machine instance.
 */
export interface InfrastructureProfileArgs {
    /**
     * Gets or sets the bios guid for the vm.
     */
    biosGuid?: pulumi.Input<string>;
    /**
     * Type of checkpoint supported for the vm.
     */
    checkpointType?: pulumi.Input<string>;
    /**
     * Checkpoints in the vm.
     */
    checkpoints?: pulumi.Input<pulumi.Input<CheckpointArgs>[]>;
    /**
     * ARM Id of the cloud resource to use for deploying the vm.
     */
    cloudId?: pulumi.Input<string>;
    /**
     * Gets or sets the generation for the vm.
     */
    generation?: pulumi.Input<number>;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    inventoryItemId?: pulumi.Input<string>;
    /**
     * ARM Id of the template resource to use for deploying the vm.
     */
    templateId?: pulumi.Input<string>;
    /**
     * Unique ID of the virtual machine.
     */
    uuid?: pulumi.Input<string>;
    /**
     * VMName is the name of VM on the SCVMM server.
     */
    vmName?: pulumi.Input<string>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    vmmServerId?: pulumi.Input<string>;
}

/**
 * Network Interface model
 */
export interface NetworkInterfacesArgs {
    /**
     * Gets or sets the ipv4 address type.
     */
    ipv4AddressType?: pulumi.Input<string | enums.AllocationMethod>;
    /**
     * Gets or sets the ipv6 address type.
     */
    ipv6AddressType?: pulumi.Input<string | enums.AllocationMethod>;
    /**
     * Gets or sets the nic MAC address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Gets or sets the mac address type.
     */
    macAddressType?: pulumi.Input<string | enums.AllocationMethod>;
    /**
     * Gets or sets the name of the network interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the nic id.
     */
    nicId?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the Microsoft.ScVmm/virtualNetwork resource to connect the nic.
     */
    virtualNetworkId?: pulumi.Input<string>;
}

/**
 * Defines the resource properties.
 */
export interface NetworkProfileArgs {
    /**
     * Gets or sets the list of network interfaces associated with the virtual machine.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfacesArgs>[]>;
}

/**
 * Defines the resource properties.
 */
export interface OsProfileArgs {
    /**
     * Admin password of the virtual machine.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * Gets or sets computer name.
     */
    computerName?: pulumi.Input<string>;
}

/**
 * Defines the resource properties.
 */
export interface OsProfileForVMInstanceArgs {
    /**
     * Admin password of the virtual machine.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * Gets or sets computer name.
     */
    computerName?: pulumi.Input<string>;
}

/**
 * Defines the resource properties.
 */
export interface StorageProfileArgs {
    /**
     * Gets or sets the list of virtual disks associated with the virtual machine.
     */
    disks?: pulumi.Input<pulumi.Input<VirtualDiskArgs>[]>;
}

/**
 * The StorageQoSPolicyDetails definition.
 */
export interface StorageQoSPolicyDetailsArgs {
    /**
     * The ID of the QoS policy.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the policy.
     */
    name?: pulumi.Input<string>;
}

/**
 * Credentials to connect to VMMServer.
 */
export interface VMMServerPropertiesCredentialsArgs {
    /**
     * Credentials to use to connect to VMMServer.
     */
    password?: pulumi.Input<string>;
    /**
     * Username to use to connect to VMMServer.
     */
    username?: pulumi.Input<string>;
}

/**
 * Virtual disk model
 */
export interface VirtualDiskArgs {
    /**
     * Gets or sets the disk bus.
     */
    bus?: pulumi.Input<number>;
    /**
     * Gets or sets the disk bus type.
     */
    busType?: pulumi.Input<string>;
    /**
     * Gets or sets a value indicating diff disk.
     */
    createDiffDisk?: pulumi.Input<string | enums.CreateDiffDisk>;
    /**
     * Gets or sets the disk id.
     */
    diskId?: pulumi.Input<string>;
    /**
     * Gets or sets the disk total size.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Gets or sets the disk lun.
     */
    lun?: pulumi.Input<number>;
    /**
     * Gets or sets the name of the disk.
     */
    name?: pulumi.Input<string>;
    /**
     * The QoS policy for the disk.
     */
    storageQoSPolicy?: pulumi.Input<StorageQoSPolicyDetailsArgs>;
    /**
     * Gets or sets the disk id in the template.
     */
    templateDiskId?: pulumi.Input<string>;
    /**
     * Gets or sets the disk vhd type.
     */
    vhdType?: pulumi.Input<string>;
}

/**
 * Availability Set model
 */
export interface VirtualMachineInstancePropertiesAvailabilitySetsArgs {
    /**
     * Gets the ARM Id of the microsoft.scvmm/availabilitySets resource.
     */
    id?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the availability set.
     */
    name?: pulumi.Input<string>;
}

/**
 * Availability Set model
 */
export interface VirtualMachinePropertiesAvailabilitySetsArgs {
    /**
     * Gets the ARM Id of the microsoft.scvmm/availabilitySets resource.
     */
    id?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the availability set.
     */
    name?: pulumi.Input<string>;
}


