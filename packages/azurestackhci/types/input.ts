import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Connectivity related configuration required by arc server.
 */
export interface ArcConnectivityPropertiesArgs {
    /**
     * True indicates ARC connectivity is enabled
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * Desired properties of the cluster.
 */
export interface ClusterDesiredPropertiesArgs {
    /**
     * Desired level of diagnostic data emitted by the cluster.
     */
    diagnosticLevel?: pulumi.Input<string | enums.DiagnosticLevel>;
    /**
     * Desired state of Windows Server Subscription.
     */
    windowsServerSubscription?: pulumi.Input<string | enums.WindowsServerSubscription>;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
}

/**
 * This is the gallery image definition identifier.
 */
export interface GalleryImageIdentifierArgs {
    /**
     * The name of the gallery image definition offer.
     */
    offer: pulumi.Input<string>;
    /**
     * The name of the gallery image definition publisher.
     */
    publisher: pulumi.Input<string>;
    /**
     * The name of the gallery image definition SKU.
     */
    sku: pulumi.Input<string>;
}

/**
 * Specifies information about the gallery image version that you want to create or update.
 */
export interface GalleryImageVersionArgs {
    /**
     * This is the version of the gallery image.
     */
    name?: pulumi.Input<string>;
}

/**
 * Username / Password Credentials to connect to guest.
 */
export interface GuestCredentialArgs {
    /**
     * The password to connect with the guest.
     */
    password?: pulumi.Input<string>;
    /**
     * The username to connect with the guest.
     */
    username?: pulumi.Input<string>;
}

/**
 * HTTP Proxy configuration for the VM.
 */
export interface HttpProxyConfigurationArgs {
    /**
     * The httpsProxy url.
     */
    httpsProxy?: pulumi.Input<string>;
}

/**
 * InterfaceIPConfiguration iPConfiguration in a network interface.
 */
export interface IPConfigurationArgs {
    /**
     * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
     */
    properties?: pulumi.Input<IPConfigurationPropertiesArgs>;
}

/**
 * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
 */
export interface IPConfigurationPropertiesArgs {
    /**
     * prefixLength for network interface
     */
    prefixLength?: pulumi.Input<string>;
    /**
     * PrivateIPAddress - Private IP address of the IP configuration.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * PrivateIPAllocationMethod - The private IP address allocation method. Possible values include: 'Static', 'Dynamic'
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.PrivateIPAllocationMethodEnum>;
    /**
     * Subnet - Name of Subnet bound to the IP configuration.
     */
    subnet?: pulumi.Input<IPConfigurationSubnetArgs>;
}

/**
 * Subnet - Name of Subnet bound to the IP configuration.
 */
export interface IPConfigurationSubnetArgs {
    /**
     * ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: pulumi.Input<string>;
}

export interface IPPoolArgs {
    /**
     * end of the ip address pool
     */
    end?: pulumi.Input<string>;
    /**
     * ip pool type
     */
    ipPoolType?: pulumi.Input<enums.IPPoolTypeEnum>;
    /**
     * Name of the IP-Pool
     */
    name?: pulumi.Input<string>;
    /**
     * start of the ip address pool
     */
    start?: pulumi.Input<string>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
}

export interface InterfaceDNSSettingsArgs {
    /**
     * List of DNS server IP Addresses for the interface
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * DhcpOptions contains an array of DNS servers available to VMs deployed in the logical network. Standard DHCP option for a subnet overrides logical network DHCP options.
 */
export interface LogicalNetworkPropertiesDhcpOptionsArgs {
    /**
     * The list of DNS servers IP addresses.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Route - Route resource.
 */
export interface RouteArgs {
    /**
     * The destination CIDR to which the route applies.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * Name - name of the subnet
     */
    name?: pulumi.Input<string>;
    /**
     * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    nextHopIpAddress?: pulumi.Input<string>;
}

/**
 * Route table resource.
 */
export interface RouteTableArgs {
    /**
     * Collection of routes contained within a route table.
     */
    routes?: pulumi.Input<pulumi.Input<RouteArgs>[]>;
}

/**
 * Software Assurance properties of the cluster.
 */
export interface SoftwareAssurancePropertiesArgs {
    /**
     * Customer Intent for Software Assurance Benefit.
     */
    softwareAssuranceIntent?: pulumi.Input<string | enums.SoftwareAssuranceIntent>;
    /**
     * Status of the Software Assurance for the cluster.
     */
    softwareAssuranceStatus?: pulumi.Input<string | enums.SoftwareAssuranceStatus>;
}

/**
 * SSH configuration for Linux based VMs running on Azure
 */
export interface SshConfigurationArgs {
    /**
     * The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: pulumi.Input<pulumi.Input<SshPublicKeyArgs>[]>;
}

/**
 * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
 */
export interface SshPublicKeyArgs {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
     */
    keyData?: pulumi.Input<string>;
    /**
     * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: pulumi.Input<string>;
}

/**
 * Progress representation of the update run steps.
 */
export interface StepArgs {
    /**
     * More detailed description of the step.
     */
    description?: pulumi.Input<string>;
    /**
     * When the step reached a terminal state.
     */
    endTimeUtc?: pulumi.Input<string>;
    /**
     * Error message, specified if the step is in a failed state.
     */
    errorMessage?: pulumi.Input<string>;
    /**
     * Completion time of this step or the last completed sub-step.
     */
    lastUpdatedTimeUtc?: pulumi.Input<string>;
    /**
     * Name of the step.
     */
    name?: pulumi.Input<string>;
    /**
     * When the step started, or empty if it has not started executing.
     */
    startTimeUtc?: pulumi.Input<string>;
    /**
     * Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'.
     */
    status?: pulumi.Input<string>;
    /**
     * Recursive model for child steps of this step.
     */
    steps?: pulumi.Input<pulumi.Input<StepArgs>[]>;
}

export interface SubnetArgs {
    /**
     * The address prefix for the subnet: Cidr for this subnet - IPv4, IPv6.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * List of address prefixes for the subnet.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
     */
    ipAllocationMethod?: pulumi.Input<string | enums.IpAllocationMethodEnum>;
    /**
     * IPConfigurationReferences - list of IPConfigurationReferences
     */
    ipConfigurationReferences?: pulumi.Input<pulumi.Input<SubnetPropertiesFormatIpConfigurationReferencesArgs>[]>;
    /**
     * network associated pool of IP Addresses
     */
    ipPools?: pulumi.Input<pulumi.Input<IPPoolArgs>[]>;
    /**
     * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Route table resource.
     */
    routeTable?: pulumi.Input<RouteTableArgs>;
    /**
     * Vlan to use for the subnet
     */
    vlan?: pulumi.Input<number>;
}

/**
 * IPConfigurationReference - Describes a IPConfiguration under the virtual network
 */
export interface SubnetPropertiesFormatIpConfigurationReferencesArgs {
    /**
     * IPConfigurationID
     */
    id?: pulumi.Input<string>;
}

/**
 * If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
 */
export interface UpdatePrerequisiteArgs {
    /**
     * Friendly name of the prerequisite.
     */
    packageName?: pulumi.Input<string>;
    /**
     * Updatable component type.
     */
    updateType?: pulumi.Input<string>;
    /**
     * Version of the prerequisite.
     */
    version?: pulumi.Input<string>;
}

export interface VirtualMachineInstancePropertiesDataDisksArgs {
    /**
     * Resource ID of the data disk
     */
    id?: pulumi.Input<string>;
}

export interface VirtualMachineInstancePropertiesDynamicMemoryConfigArgs {
    maximumMemoryMB?: pulumi.Input<number>;
    minimumMemoryMB?: pulumi.Input<number>;
    /**
     * Defines the amount of extra memory that should be reserved for a virtual machine instance at runtime, as a percentage of the total memory that the virtual machine instance is thought to need. This only applies to virtual systems with dynamic memory enabled. This property can be in the range of 5 to 2000.
     */
    targetMemoryBuffer?: pulumi.Input<number>;
}

/**
 * HardwareProfile - Specifies the hardware settings for the virtual machine instance.
 */
export interface VirtualMachineInstancePropertiesHardwareProfileArgs {
    dynamicMemoryConfig?: pulumi.Input<VirtualMachineInstancePropertiesDynamicMemoryConfigArgs>;
    /**
     * RAM in MB for the virtual machine instance
     */
    memoryMB?: pulumi.Input<number>;
    /**
     * number of processors for the virtual machine instance
     */
    processors?: pulumi.Input<number>;
    vmSize?: pulumi.Input<string | enums.VmSizeEnum>;
}
/**
 * virtualMachineInstancePropertiesHardwareProfileArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesHardwareProfileArgs
 */
export function virtualMachineInstancePropertiesHardwareProfileArgsProvideDefaults(val: VirtualMachineInstancePropertiesHardwareProfileArgs): VirtualMachineInstancePropertiesHardwareProfileArgs {
    return {
        ...val,
        vmSize: (val.vmSize) ?? "Default",
    };
}

/**
 * Which Image to use for the virtual machine instance
 */
export interface VirtualMachineInstancePropertiesImageReferenceArgs {
    /**
     * Resource ID of the image
     */
    id?: pulumi.Input<string>;
}

/**
 * LinuxConfiguration - linux specific configuration values for the virtual machine instance
 */
export interface VirtualMachineInstancePropertiesLinuxConfigurationArgs {
    /**
     * DisablePasswordAuthentication - whether password authentication should be disabled
     */
    disablePasswordAuthentication?: pulumi.Input<boolean>;
    /**
     * Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine instance creation process.
     */
    provisionVMAgent?: pulumi.Input<boolean>;
    /**
     * Used to indicate whether the VM Config Agent should be installed during the virtual machine creation process.
     */
    provisionVMConfigAgent?: pulumi.Input<boolean>;
    /**
     * Specifies the ssh key configuration for a Linux OS.
     */
    ssh?: pulumi.Input<SshConfigurationArgs>;
}
/**
 * virtualMachineInstancePropertiesLinuxConfigurationArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesLinuxConfigurationArgs
 */
export function virtualMachineInstancePropertiesLinuxConfigurationArgsProvideDefaults(val: VirtualMachineInstancePropertiesLinuxConfigurationArgs): VirtualMachineInstancePropertiesLinuxConfigurationArgs {
    return {
        ...val,
        provisionVMAgent: (val.provisionVMAgent) ?? true,
        provisionVMConfigAgent: (val.provisionVMConfigAgent) ?? true,
    };
}

export interface VirtualMachineInstancePropertiesNetworkInterfacesArgs {
    /**
     * ID - Resource Id of the network interface
     */
    id?: pulumi.Input<string>;
}

/**
 * NetworkProfile - describes the network configuration the virtual machine instance
 */
export interface VirtualMachineInstancePropertiesNetworkProfileArgs {
    /**
     * NetworkInterfaces - list of network interfaces to be attached to the virtual machine instance
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<VirtualMachineInstancePropertiesNetworkInterfacesArgs>[]>;
}

/**
 * VHD to attach as OS disk
 */
export interface VirtualMachineInstancePropertiesOsDiskArgs {
    /**
     * Resource ID of the OS disk
     */
    id?: pulumi.Input<string>;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
     */
    osType?: pulumi.Input<enums.OperatingSystemTypes>;
}

/**
 * OsProfile - describes the configuration of the operating system and sets login data
 */
export interface VirtualMachineInstancePropertiesOsProfileArgs {
    /**
     * AdminPassword - admin password
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * AdminUsername - admin username
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * ComputerName - name of the compute
     */
    computerName?: pulumi.Input<string>;
    /**
     * LinuxConfiguration - linux specific configuration values for the virtual machine instance
     */
    linuxConfiguration?: pulumi.Input<VirtualMachineInstancePropertiesLinuxConfigurationArgs>;
    /**
     * Windows Configuration for the virtual machine instance 
     */
    windowsConfiguration?: pulumi.Input<VirtualMachineInstancePropertiesWindowsConfigurationArgs>;
}
/**
 * virtualMachineInstancePropertiesOsProfileArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesOsProfileArgs
 */
export function virtualMachineInstancePropertiesOsProfileArgsProvideDefaults(val: VirtualMachineInstancePropertiesOsProfileArgs): VirtualMachineInstancePropertiesOsProfileArgs {
    return {
        ...val,
        linuxConfiguration: (val.linuxConfiguration ? pulumi.output(val.linuxConfiguration).apply(virtualMachineInstancePropertiesLinuxConfigurationArgsProvideDefaults) : undefined),
        windowsConfiguration: (val.windowsConfiguration ? pulumi.output(val.windowsConfiguration).apply(virtualMachineInstancePropertiesWindowsConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * SecurityProfile - Specifies the security settings for the virtual machine instance.
 */
export interface VirtualMachineInstancePropertiesSecurityProfileArgs {
    enableTPM?: pulumi.Input<boolean>;
    /**
     * Specifies the SecurityType of the virtual machine. EnableTPM and SecureBootEnabled must be set to true for SecurityType to function.
     */
    securityType?: pulumi.Input<string | enums.SecurityTypes>;
    uefiSettings?: pulumi.Input<VirtualMachineInstancePropertiesUefiSettingsArgs>;
}
/**
 * virtualMachineInstancePropertiesSecurityProfileArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesSecurityProfileArgs
 */
export function virtualMachineInstancePropertiesSecurityProfileArgsProvideDefaults(val: VirtualMachineInstancePropertiesSecurityProfileArgs): VirtualMachineInstancePropertiesSecurityProfileArgs {
    return {
        ...val,
        enableTPM: (val.enableTPM) ?? false,
        uefiSettings: (val.uefiSettings ? pulumi.output(val.uefiSettings).apply(virtualMachineInstancePropertiesUefiSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * StorageProfile - contains information about the disks and storage information for the virtual machine instance
 */
export interface VirtualMachineInstancePropertiesStorageProfileArgs {
    /**
     * adds data disks to the virtual machine instance
     */
    dataDisks?: pulumi.Input<pulumi.Input<VirtualMachineInstancePropertiesDataDisksArgs>[]>;
    /**
     * Which Image to use for the virtual machine instance
     */
    imageReference?: pulumi.Input<VirtualMachineInstancePropertiesImageReferenceArgs>;
    /**
     * VHD to attach as OS disk
     */
    osDisk?: pulumi.Input<VirtualMachineInstancePropertiesOsDiskArgs>;
    /**
     * Id of the storage container that hosts the VM configuration file
     */
    vmConfigStoragePathId?: pulumi.Input<string>;
}

export interface VirtualMachineInstancePropertiesUefiSettingsArgs {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine instance.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
}
/**
 * virtualMachineInstancePropertiesUefiSettingsArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesUefiSettingsArgs
 */
export function virtualMachineInstancePropertiesUefiSettingsArgsProvideDefaults(val: VirtualMachineInstancePropertiesUefiSettingsArgs): VirtualMachineInstancePropertiesUefiSettingsArgs {
    return {
        ...val,
        secureBootEnabled: (val.secureBootEnabled) ?? false,
    };
}

/**
 * Windows Configuration for the virtual machine instance 
 */
export interface VirtualMachineInstancePropertiesWindowsConfigurationArgs {
    /**
     * Whether to EnableAutomaticUpdates on the machine
     */
    enableAutomaticUpdates?: pulumi.Input<boolean>;
    /**
     * Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine instance creation process.
     */
    provisionVMAgent?: pulumi.Input<boolean>;
    /**
     * Used to indicate whether the VM Config Agent should be installed during the virtual machine creation process.
     */
    provisionVMConfigAgent?: pulumi.Input<boolean>;
    /**
     * Specifies the ssh key configuration for Windows OS.
     */
    ssh?: pulumi.Input<SshConfigurationArgs>;
    /**
     * TimeZone for the virtual machine instance
     */
    timeZone?: pulumi.Input<string>;
}
/**
 * virtualMachineInstancePropertiesWindowsConfigurationArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesWindowsConfigurationArgs
 */
export function virtualMachineInstancePropertiesWindowsConfigurationArgsProvideDefaults(val: VirtualMachineInstancePropertiesWindowsConfigurationArgs): VirtualMachineInstancePropertiesWindowsConfigurationArgs {
    return {
        ...val,
        provisionVMAgent: (val.provisionVMAgent) ?? true,
        provisionVMConfigAgent: (val.provisionVMConfigAgent) ?? true,
    };
}

export interface VirtualMachinePropertiesDataDisksArgs {
    /**
     * Resource ID of the data disk
     */
    id?: pulumi.Input<string>;
}

export interface VirtualMachinePropertiesDynamicMemoryConfigArgs {
    maximumMemoryMB?: pulumi.Input<number>;
    minimumMemoryMB?: pulumi.Input<number>;
    /**
     * Defines the amount of extra memory that should be reserved for a virtual machine at runtime, as a percentage of the total memory that the virtual machine is thought to need. This only applies to virtual systems with dynamic memory enabled. This property can be in the range of 5 to 2000.
     */
    targetMemoryBuffer?: pulumi.Input<number>;
}

/**
 * HardwareProfile - Specifies the hardware settings for the virtual machine.
 */
export interface VirtualMachinePropertiesHardwareProfileArgs {
    dynamicMemoryConfig?: pulumi.Input<VirtualMachinePropertiesDynamicMemoryConfigArgs>;
    /**
     * RAM in MB for the virtual machine
     */
    memoryMB?: pulumi.Input<number>;
    /**
     * number of processors for the virtual machine
     */
    processors?: pulumi.Input<number>;
    vmSize?: pulumi.Input<string | enums.VmSizeEnum>;
}
/**
 * virtualMachinePropertiesHardwareProfileArgsProvideDefaults sets the appropriate defaults for VirtualMachinePropertiesHardwareProfileArgs
 */
export function virtualMachinePropertiesHardwareProfileArgsProvideDefaults(val: VirtualMachinePropertiesHardwareProfileArgs): VirtualMachinePropertiesHardwareProfileArgs {
    return {
        ...val,
        vmSize: (val.vmSize) ?? "Default",
    };
}

/**
 * Which Image to use for the virtual machine
 */
export interface VirtualMachinePropertiesImageReferenceArgs {
    /**
     * Resource ID of the image
     */
    id?: pulumi.Input<string>;
}

/**
 * LinuxConfiguration - linux specific configuration values for the virtual machine
 */
export interface VirtualMachinePropertiesLinuxConfigurationArgs {
    /**
     * DisablePasswordAuthentication - whether password authentication should be disabled
     */
    disablePasswordAuthentication?: pulumi.Input<boolean>;
    /**
     * Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
     */
    provisionVMAgent?: pulumi.Input<boolean>;
    /**
     * SSH - contains settings related to ssh configuration
     */
    ssh?: pulumi.Input<VirtualMachinePropertiesSshArgs>;
}

export interface VirtualMachinePropertiesNetworkInterfacesArgs {
    /**
     * ID - Resource Id of the network interface
     */
    id?: pulumi.Input<string>;
}

/**
 * NetworkProfile - describes the network configuration the virtual machine
 */
export interface VirtualMachinePropertiesNetworkProfileArgs {
    /**
     * NetworkInterfaces - list of network interfaces to be attached to the virtual machine
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<VirtualMachinePropertiesNetworkInterfacesArgs>[]>;
}

/**
 * VHD to attach as OS disk
 */
export interface VirtualMachinePropertiesOsDiskArgs {
    /**
     * Resource ID of the OS disk
     */
    id?: pulumi.Input<string>;
}

/**
 * OsProfile - describes the configuration of the operating system and sets login data
 */
export interface VirtualMachinePropertiesOsProfileArgs {
    /**
     * AdminPassword - admin password
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * AdminUsername - admin username
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * ComputerName - name of the compute
     */
    computerName?: pulumi.Input<string>;
    /**
     * LinuxConfiguration - linux specific configuration values for the virtual machine
     */
    linuxConfiguration?: pulumi.Input<VirtualMachinePropertiesLinuxConfigurationArgs>;
    /**
     * OsType - string specifying whether the OS is Linux or Windows
     */
    osType?: pulumi.Input<string | enums.OsTypeEnum>;
    /**
     * Windows Configuration for the virtual machine 
     */
    windowsConfiguration?: pulumi.Input<VirtualMachinePropertiesWindowsConfigurationArgs>;
}

export interface VirtualMachinePropertiesPublicKeysArgs {
    /**
     * KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    keyData?: pulumi.Input<string>;
    /**
     * Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: pulumi.Input<string>;
}

export interface VirtualMachinePropertiesPublicKeysPublicKeysArgs {
    /**
     * KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    keyData?: pulumi.Input<string>;
    /**
     * Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: pulumi.Input<string>;
}

/**
 * SecurityProfile - Specifies the security settings for the virtual machine.
 */
export interface VirtualMachinePropertiesSecurityProfileArgs {
    enableTPM?: pulumi.Input<boolean>;
    uefiSettings?: pulumi.Input<VirtualMachinePropertiesUefiSettingsArgs>;
}
/**
 * virtualMachinePropertiesSecurityProfileArgsProvideDefaults sets the appropriate defaults for VirtualMachinePropertiesSecurityProfileArgs
 */
export function virtualMachinePropertiesSecurityProfileArgsProvideDefaults(val: VirtualMachinePropertiesSecurityProfileArgs): VirtualMachinePropertiesSecurityProfileArgs {
    return {
        ...val,
        enableTPM: (val.enableTPM) ?? false,
        uefiSettings: (val.uefiSettings ? pulumi.output(val.uefiSettings).apply(virtualMachinePropertiesUefiSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * SSH - contains settings related to ssh configuration
 */
export interface VirtualMachinePropertiesSshArgs {
    /**
     * PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: pulumi.Input<pulumi.Input<VirtualMachinePropertiesPublicKeysArgs>[]>;
}

/**
 * SSH Configuration
 */
export interface VirtualMachinePropertiesSshSshArgs {
    /**
     * PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: pulumi.Input<pulumi.Input<VirtualMachinePropertiesPublicKeysPublicKeysArgs>[]>;
}

/**
 * StorageProfile - contains information about the disks and storage information for the virtual machine
 */
export interface VirtualMachinePropertiesStorageProfileArgs {
    /**
     * adds data disks to the virtual machine
     */
    dataDisks?: pulumi.Input<pulumi.Input<VirtualMachinePropertiesDataDisksArgs>[]>;
    /**
     * Which Image to use for the virtual machine
     */
    imageReference?: pulumi.Input<VirtualMachinePropertiesImageReferenceArgs>;
    /**
     * VHD to attach as OS disk
     */
    osDisk?: pulumi.Input<VirtualMachinePropertiesOsDiskArgs>;
    /**
     * Id of the storage container that hosts the VM configuration file
     */
    vmConfigStoragePathId?: pulumi.Input<string>;
}

export interface VirtualMachinePropertiesUefiSettingsArgs {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
}
/**
 * virtualMachinePropertiesUefiSettingsArgsProvideDefaults sets the appropriate defaults for VirtualMachinePropertiesUefiSettingsArgs
 */
export function virtualMachinePropertiesUefiSettingsArgsProvideDefaults(val: VirtualMachinePropertiesUefiSettingsArgs): VirtualMachinePropertiesUefiSettingsArgs {
    return {
        ...val,
        secureBootEnabled: (val.secureBootEnabled) ?? false,
    };
}

/**
 * Windows Configuration for the virtual machine 
 */
export interface VirtualMachinePropertiesWindowsConfigurationArgs {
    /**
     * Whether to EnableAutomaticUpdates on the machine
     */
    enableAutomaticUpdates?: pulumi.Input<boolean>;
    /**
     * Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
     */
    provisionVMAgent?: pulumi.Input<boolean>;
    /**
     * SSH Configuration
     */
    ssh?: pulumi.Input<VirtualMachinePropertiesSshSshArgs>;
    /**
     * TimeZone for the virtual machine
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
 */
export interface VirtualNetworkPropertiesDhcpOptionsArgs {
    /**
     * The list of DNS servers IP addresses.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * IPConfigurationReference - Describes a IPConfiguration under the virtual network
 */
export interface VirtualNetworkPropertiesIpConfigurationReferencesArgs {
    /**
     * IPConfigurationID
     */
    id?: pulumi.Input<string>;
}

/**
 * RouteTable for the subnet
 */
export interface VirtualNetworkPropertiesRouteTableArgs {
    /**
     * Etag - Gets a unique read-only string that changes whenever the resource is updated.
     */
    id?: pulumi.Input<string>;
    /**
     * Name - READ-ONLY; Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * Routes - Collection of routes contained within a route table.
     */
    routes?: pulumi.Input<pulumi.Input<VirtualNetworkPropertiesRoutesArgs>[]>;
    /**
     * Type - READ-ONLY; Resource type.
     */
    type?: pulumi.Input<string>;
}

/**
 * Route is associated with a subnet.
 */
export interface VirtualNetworkPropertiesRoutesArgs {
    /**
     * AddressPrefix - The destination CIDR to which the route applies.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * Name - name of the subnet
     */
    name?: pulumi.Input<string>;
    /**
     * NextHopIPAddress - The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    nextHopIpAddress?: pulumi.Input<string>;
}

/**
 * Subnet subnet in a virtual network resource.
 */
export interface VirtualNetworkPropertiesSubnetsArgs {
    /**
     * Cidr for this subnet - IPv4, IPv6
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * AddressPrefixes - List of address prefixes for the subnet.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
     */
    ipAllocationMethod?: pulumi.Input<string | enums.IpAllocationMethodEnum>;
    /**
     * IPConfigurationReferences - list of IPConfigurationReferences
     */
    ipConfigurationReferences?: pulumi.Input<pulumi.Input<VirtualNetworkPropertiesIpConfigurationReferencesArgs>[]>;
    /**
     * network associated pool of IP Addresses
     */
    ipPools?: pulumi.Input<pulumi.Input<IPPoolArgs>[]>;
    /**
     * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * RouteTable for the subnet
     */
    routeTable?: pulumi.Input<VirtualNetworkPropertiesRouteTableArgs>;
    /**
     * Vlan to use for the subnet
     */
    vlan?: pulumi.Input<number>;
}








