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
        isHighlyAvailable: string;
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
     * Network Interface model
     */
    export interface NetworkInterfaceResponse {
        /**
         * Gets the display name of the network interface as shown in the vmmServer. This is the fallback label for a NIC when the name is not set.
         */
        displayName: string;
        /**
         * Gets or sets the ipv4 address type.
         */
        ipv4AddressType?: string;
        /**
         * Gets the nic ipv4 addresses.
         */
        ipv4Addresses: string[];
        /**
         * Gets or sets the ipv6 address type.
         */
        ipv6AddressType?: string;
        /**
         * Gets the nic ipv6 addresses.
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
         * Gets the name of the virtual network in vmmServer that the nic is connected to.
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
        networkInterfaces?: NetworkInterfaceResponse[];
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
         * Gets os sku.
         */
        osSku: string;
        /**
         * Gets the type of the os.
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
    export interface VMMCredentialResponse {
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
         * Gets the max disk size.
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
         * Gets the disk volume type.
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
