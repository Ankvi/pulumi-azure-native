import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the resource properties.
 */
export interface CheckpointResponse {
    /**
     * Gets ID of the checkpoint.
     */
    checkpointID?: string;
    /**
     * Gets description of the checkpoint.
     */
    description?: string;
    /**
     * Gets name of the checkpoint.
     */
    name?: string;
    /**
     * Gets ID of parent of the checkpoint.
     */
    parentCheckpointID?: string;
}

/**
 * Cloud Capacity model
 */
export interface CloudCapacityResponse {
    /**
     * CPUCount specifies the maximum number of CPUs that can be allocated in the cloud.
     */
    cpuCount?: number;
    /**
     * MemoryMB specifies a memory usage limit in megabytes.
     */
    memoryMB?: number;
    /**
     * VMCount gives the max number of VMs that can be deployed in the cloud.
     */
    vmCount?: number;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
}

/**
 * The extended location.
 */
export interface ExtendedLocationResponse {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * Defines the resource properties.
 */
export interface GuestAgentProfileResponse {
    /**
     * The hybrid machine agent full version.
     */
    agentVersion: string;
    /**
     * Gets or sets the Public Key provided by the client for enabling guest management.
     */
    clientPublicKey?: string;
    /**
     * Details about the error state.
     */
    errorDetails: ErrorDetailResponse[];
    /**
     * The time of the last status change.
     */
    lastStatusChange: string;
    /**
     * The status of the hybrid machine agent.
     */
    status: string;
    /**
     * Specifies the VM's unique SMBIOS ID.
     */
    vmUuid: string;
}

/**
 * Username / Password Credentials to connect to guest.
 */
export interface GuestCredentialResponse {
    /**
     * Gets or sets username to connect with the guest.
     */
    username: string;
}

/**
 * Defines the resource properties.
 */
export interface HardwareProfileResponse {
    /**
     * Gets or sets the number of vCPUs for the vm.
     */
    cpuCount?: number;
    /**
     * Gets or sets a value indicating whether to enable dynamic memory or not.
     */
    dynamicMemoryEnabled?: string;
    /**
     * Gets or sets the max dynamic memory for the vm.
     */
    dynamicMemoryMaxMB?: number;
    /**
     * Gets or sets the min dynamic memory for the vm.
     */
    dynamicMemoryMinMB?: number;
    /**
     * Gets highly available property.
     */
    isHighlyAvailable?: string;
    /**
     * Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs.
     */
    limitCpuForMigration?: string;
    /**
     * MemoryMB is the size of a virtual machine's memory, in MB.
     */
    memoryMB?: number;
}

/**
 * HTTP Proxy configuration for the VM.
 */
export interface HttpProxyConfigurationResponse {
    /**
     * Gets or sets httpsProxy url.
     */
    httpsProxy?: string;
}

/**
 * Managed service identity.
 */
export interface IdentityResponse {
    /**
     * The principal id of managed service identity.
     */
    principalId: string;
    /**
     * The tenant of managed service identity.
     */
    tenantId: string;
    /**
     * The type of managed service identity.
     */
    type: string;
}

/**
 * Specifies the vmmServer infrastructure specific settings for the virtual machine instance.
 */
export interface InfrastructureProfileResponse {
    /**
     * Gets or sets the bios guid for the vm.
     */
    biosGuid?: string;
    /**
     * Type of checkpoint supported for the vm.
     */
    checkpointType?: string;
    /**
     * Checkpoints in the vm.
     */
    checkpoints?: CheckpointResponse[];
    /**
     * ARM Id of the cloud resource to use for deploying the vm.
     */
    cloudId?: string;
    /**
     * Gets or sets the generation for the vm.
     */
    generation?: number;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    inventoryItemId?: string;
    /**
     * Last restored checkpoint in the vm.
     */
    lastRestoredVMCheckpoint: CheckpointResponse;
    /**
     * ARM Id of the template resource to use for deploying the vm.
     */
    templateId?: string;
    /**
     * Unique ID of the virtual machine.
     */
    uuid?: string;
    /**
     * VMName is the name of VM on the SCVMM server.
     */
    vmName?: string;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    vmmServerId?: string;
}

/**
 * Instance view status.
 */
export interface MachineExtensionInstanceViewResponseStatus {
    /**
     * The status code.
     */
    code: string;
    /**
     * The short localizable label for the status.
     */
    displayStatus: string;
    /**
     * The level code.
     */
    level: string;
    /**
     * The detailed status message, including for alerts and error messages.
     */
    message: string;
    /**
     * The time of the status.
     */
    time: string;
}

/**
 * The machine extension instance view.
 */
export interface MachineExtensionPropertiesResponseInstanceView {
    /**
     * The machine extension name.
     */
    name: string;
    /**
     * Instance view status.
     */
    status?: MachineExtensionInstanceViewResponseStatus;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type: string;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion: string;
}

/**
 * Network Interface model
 */
export interface NetworkInterfacesResponse {
    /**
     * Gets the display name of the network interface as shown in the vmmServer. This is the fallback label for a NIC when the name is not set.
     */
    displayName: string;
    /**
     * Gets or sets the ipv4 address type.
     */
    ipv4AddressType?: string;
    /**
     * Gets or sets the nic ipv4 addresses.
     */
    ipv4Addresses: string[];
    /**
     * Gets or sets the ipv6 address type.
     */
    ipv6AddressType?: string;
    /**
     * Gets or sets the nic ipv6 addresses.
     */
    ipv6Addresses: string[];
    /**
     * Gets or sets the nic MAC address.
     */
    macAddress?: string;
    /**
     * Gets or sets the mac address type.
     */
    macAddressType?: string;
    /**
     * Gets or sets the name of the network interface.
     */
    name?: string;
    /**
     * Gets or sets the name of the virtual network in vmmServer that the nic is connected to.
     */
    networkName: string;
    /**
     * Gets or sets the nic id.
     */
    nicId?: string;
    /**
     * Gets or sets the ARM Id of the Microsoft.ScVmm/virtualNetwork resource to connect the nic.
     */
    virtualNetworkId?: string;
}

/**
 * Defines the resource properties.
 */
export interface NetworkProfileResponse {
    /**
     * Gets or sets the list of network interfaces associated with the virtual machine.
     */
    networkInterfaces?: NetworkInterfacesResponse[];
}

/**
 * Defines the resource properties.
 */
export interface OsProfileForVMInstanceResponse {
    /**
     * Gets or sets computer name.
     */
    computerName?: string;
    /**
     * Gets or sets os sku.
     */
    osSku: string;
    /**
     * Gets or sets the type of the os.
     */
    osType: string;
    /**
     * Gets os version.
     */
    osVersion: string;
}

/**
 * Defines the resource properties.
 */
export interface OsProfileResponse {
    /**
     * Gets or sets computer name.
     */
    computerName?: string;
    /**
     * Gets or sets os name.
     */
    osName: string;
    /**
     * Gets or sets the type of the os.
     */
    osType: string;
}

/**
 * Defines the resource properties.
 */
export interface StorageProfileResponse {
    /**
     * Gets or sets the list of virtual disks associated with the virtual machine.
     */
    disks?: VirtualDiskResponse[];
}

/**
 * The StorageQoSPolicyDetails definition.
 */
export interface StorageQoSPolicyDetailsResponse {
    /**
     * The ID of the QoS policy.
     */
    id?: string;
    /**
     * The name of the policy.
     */
    name?: string;
}

/**
 * The StorageQoSPolicy definition.
 */
export interface StorageQoSPolicyResponse {
    /**
     * The Bandwidth Limit for internet traffic.
     */
    bandwidthLimit?: number;
    /**
     * The ID of the QoS policy.
     */
    id?: string;
    /**
     * The maximum IO operations per second.
     */
    iopsMaximum?: number;
    /**
     * The minimum IO operations per second.
     */
    iopsMinimum?: number;
    /**
     * The name of the policy.
     */
    name?: string;
    /**
     * The underlying policy.
     */
    policyId?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Credentials to connect to VMMServer.
 */
export interface VMMServerPropertiesResponseCredentials {
    /**
     * Username to use to connect to VMMServer.
     */
    username?: string;
}

/**
 * Virtual disk model
 */
export interface VirtualDiskResponse {
    /**
     * Gets or sets the disk bus.
     */
    bus?: number;
    /**
     * Gets or sets the disk bus type.
     */
    busType?: string;
    /**
     * Gets or sets a value indicating diff disk.
     */
    createDiffDisk?: string;
    /**
     * Gets or sets the disk id.
     */
    diskId?: string;
    /**
     * Gets or sets the disk total size.
     */
    diskSizeGB?: number;
    /**
     * Gets the display name of the virtual disk as shown in the vmmServer. This is the fallback label for a disk when the name is not set.
     */
    displayName: string;
    /**
     * Gets or sets the disk lun.
     */
    lun?: number;
    /**
     * Gets or sets the max disk size.
     */
    maxDiskSizeGB: number;
    /**
     * Gets or sets the name of the disk.
     */
    name?: string;
    /**
     * The QoS policy for the disk.
     */
    storageQoSPolicy?: StorageQoSPolicyDetailsResponse;
    /**
     * Gets or sets the disk id in the template.
     */
    templateDiskId?: string;
    /**
     * Gets the disk vhd format type.
     */
    vhdFormatType: string;
    /**
     * Gets or sets the disk vhd type.
     */
    vhdType?: string;
    /**
     * Gets or sets the disk volume type.
     */
    volumeType: string;
}

/**
 * Availability Set model
 */
export interface VirtualMachineInstancePropertiesResponseAvailabilitySets {
    /**
     * Gets the ARM Id of the microsoft.scvmm/availabilitySets resource.
     */
    id?: string;
    /**
     * Gets or sets the name of the availability set.
     */
    name?: string;
}

/**
 * Availability Set model
 */
export interface VirtualMachinePropertiesResponseAvailabilitySets {
    /**
     * Gets the ARM Id of the microsoft.scvmm/availabilitySets resource.
     */
    id?: string;
    /**
     * Gets or sets the name of the availability set.
     */
    name?: string;
}
