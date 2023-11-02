import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * The complex type of the extended location.
     */
    export interface ExtendedLocationResponse {
        /**
         * The name of the extended location.
         */
        name?: string;
        /**
         * The type of the extended location.
         */
        type?: string;
    }

    /**
     * This is the gallery image definition identifier.
     */
    export interface GalleryImageIdentifierResponse {
        /**
         * The name of the gallery image definition offer.
         */
        offer: string;
        /**
         * The name of the gallery image definition publisher.
         */
        publisher: string;
        /**
         * The name of the gallery image definition SKU.
         */
        sku: string;
    }

    /**
     * The observed state of gallery images
     */
    export interface GalleryImageStatusResponse {
        /**
         * The download status of the gallery image
         */
        downloadStatus?: GalleryImageStatusResponseDownloadStatus;
        /**
         * GalleryImage provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        /**
         * The progress of the operation in percentage
         */
        progressPercentage?: number;
        provisioningStatus?: GalleryImageStatusResponseProvisioningStatus;
    }

    /**
     * The download status of the gallery image
     */
    export interface GalleryImageStatusResponseDownloadStatus {
        /**
         * The downloaded sized of the image in MB
         */
        downloadSizeInMB?: number;
    }

    export interface GalleryImageStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the gallery image
         */
        operationId?: string;
        /**
         * The status of the operation performed on the gallery image [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * Specifies information about the gallery image version that you want to create or update.
     */
    export interface GalleryImageVersionResponse {
        /**
         * This is the version of the gallery image.
         */
        name?: string;
        /**
         * This is the storage profile of a Gallery Image Version.
         */
        storageProfile: GalleryImageVersionStorageProfileResponse;
    }

    /**
     * This is the storage profile of a Gallery Image Version.
     */
    export interface GalleryImageVersionStorageProfileResponse {
        /**
         * This is the OS disk image.
         */
        osDiskImage?: GalleryOSDiskImageResponse;
    }

    /**
     * This is the OS disk image.
     */
    export interface GalleryOSDiskImageResponse {
        /**
         * This property indicates the size of the VHD to be created.
         */
        sizeInMB: number;
    }

    /**
     * Defines the status of a guest agent installation.
     */
    export interface GuestAgentInstallStatusResponse {
        /**
         * The hybrid machine agent full version.
         */
        agentVersion: string;
        /**
         * Details about the error state.
         */
        errorDetails: ErrorDetailResponse[];
        /**
         * The time of the last status change.
         */
        lastStatusChange: string;
        /**
         * The installation status of the hybrid machine agent installation.
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
         * The username to connect with the guest.
         */
        username?: string;
    }

    /**
     * HTTP Proxy configuration for the VM.
     */
    export interface HttpProxyConfigurationResponse {
        /**
         * The HTTP proxy server endpoint to use.
         */
        httpProxy?: string;
        /**
         * The HTTPS proxy server endpoint to use.
         */
        httpsProxy?: string;
        /**
         * The endpoints that should not go through proxy.
         */
        noProxy?: string[];
        /**
         * Alternative CA cert to use for connecting to proxy servers.
         */
        trustedCa?: string;
    }

    /**
     * InterfaceIPConfiguration iPConfiguration in a network interface.
     */
    export interface IPConfigurationResponse {
        /**
         * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
         */
        properties?: IPConfigurationResponseProperties;
    }

    /**
     * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
     */
    export interface IPConfigurationResponseProperties {
        /**
         * Gateway for network interface
         */
        gateway: string;
        /**
         * prefixLength for network interface
         */
        prefixLength: string;
        /**
         * PrivateIPAddress - Private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * Subnet - Name of Subnet bound to the IP configuration.
         */
        subnet?: IPConfigurationResponseSubnet;
    }

    /**
     * Subnet - Name of Subnet bound to the IP configuration.
     */
    export interface IPConfigurationResponseSubnet {
        /**
         * ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id?: string;
    }

    export interface IPPoolInfoResponse {
        /**
         * Number of IP addresses available in the IP Pool
         */
        available: string;
        /**
         * Number of IP addresses allocated from the IP Pool
         */
        used: string;
    }

    export interface IPPoolResponse {
        /**
         * End of the IP address pool
         */
        end?: string;
        info?: IPPoolInfoResponse;
        /**
         * Type of the IP Pool [vm, vippool]
         */
        ipPoolType?: string;
        /**
         * Name of the IP-Pool
         */
        name?: string;
        /**
         * Start of the IP address pool
         */
        start?: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
    }

    /**
     * Instance view status.
     */
    export interface InstanceViewStatusResponse {
        /**
         * The status code.
         */
        code?: string;
        /**
         * The short localizable label for the status.
         */
        displayStatus?: string;
        /**
         * The level code.
         */
        level?: string;
        /**
         * The detailed status message, including for alerts and error messages.
         */
        message?: string;
        /**
         * The time of the status.
         */
        time?: string;
    }

    export interface InterfaceDNSSettingsResponse {
        /**
         * List of DNS server IP Addresses for the interface
         */
        dnsServers?: string[];
    }

    /**
     * DhcpOptions contains an array of DNS servers available to VMs deployed in the logical network. Standard DHCP option for a subnet overrides logical network DHCP options.
     */
    export interface LogicalNetworkPropertiesResponseDhcpOptions {
        /**
         * The list of DNS servers IP addresses.
         */
        dnsServers?: string[];
    }

    /**
     * The observed state of logical networks
     */
    export interface LogicalNetworkStatusResponse {
        /**
         * LogicalNetwork provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        provisioningStatus?: LogicalNetworkStatusResponseProvisioningStatus;
    }

    export interface LogicalNetworkStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the logical network
         */
        operationId?: string;
        /**
         * The status of the operation performed on the logical network [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * The observed state of marketplace gallery images
     */
    export interface MarketplaceGalleryImageStatusResponse {
        /**
         * The download status of the gallery image
         */
        downloadStatus?: MarketplaceGalleryImageStatusResponseDownloadStatus;
        /**
         * MarketplaceGalleryImage provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        /**
         * The progress of the operation in percentage
         */
        progressPercentage?: number;
        provisioningStatus?: MarketplaceGalleryImageStatusResponseProvisioningStatus;
    }

    /**
     * The download status of the gallery image
     */
    export interface MarketplaceGalleryImageStatusResponseDownloadStatus {
        /**
         * The downloaded sized of the image in MB
         */
        downloadSizeInMB?: number;
    }

    export interface MarketplaceGalleryImageStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the gallery image
         */
        operationId?: string;
        /**
         * The status of the operation performed on the gallery image [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * The observed state of network interfaces
     */
    export interface NetworkInterfaceStatusResponse {
        /**
         * NetworkInterface provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        provisioningStatus?: NetworkInterfaceStatusResponseProvisioningStatus;
    }

    export interface NetworkInterfaceStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the network interface
         */
        operationId?: string;
        /**
         * The status of the operation performed on the network interface [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * Route - Route resource.
     */
    export interface RouteResponse {
        /**
         * The destination CIDR to which the route applies.
         */
        addressPrefix?: string;
        /**
         * Name - name of the subnet
         */
        name?: string;
        /**
         * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
         */
        nextHopIpAddress?: string;
    }

    /**
     * Route table resource.
     */
    export interface RouteTableResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * Collection of routes contained within a route table.
         */
        routes?: RouteResponse[];
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * SSH configuration for Linux based VMs running on Azure
     */
    export interface SshConfigurationResponse {
        /**
         * The list of SSH public keys used to authenticate with linux based VMs.
         */
        publicKeys?: SshPublicKeyResponse[];
    }

    /**
     * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
     */
    export interface SshPublicKeyResponse {
        /**
         * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
         */
        keyData?: string;
        /**
         * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
         */
        path?: string;
    }

    /**
     * The observed state of storage containers
     */
    export interface StorageContainerStatusResponse {
        /**
         * Amount of space available on the disk in MB
         */
        availableSizeMB?: number;
        /**
         * Total size of the disk in MB
         */
        containerSizeMB?: number;
        /**
         * StorageContainer provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        provisioningStatus?: StorageContainerStatusResponseProvisioningStatus;
    }

    export interface StorageContainerStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the storage container
         */
        operationId?: string;
        /**
         * The status of the operation performed on the storage container [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * IPConfigurationReference - Describes a IPConfiguration under the virtual network
     */
    export interface SubnetPropertiesFormatResponseIpConfigurationReferences {
        /**
         * IPConfigurationID
         */
        id?: string;
    }

    export interface SubnetResponse {
        /**
         * The address prefix for the subnet: Cidr for this subnet - IPv4, IPv6.
         */
        addressPrefix?: string;
        /**
         * List of address prefixes for the subnet.
         */
        addressPrefixes?: string[];
        /**
         * IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
         */
        ipAllocationMethod?: string;
        /**
         * IPConfigurationReferences - list of IPConfigurationReferences
         */
        ipConfigurationReferences?: SubnetPropertiesFormatResponseIpConfigurationReferences[];
        /**
         * network associated pool of IP Addresses
         */
        ipPools?: IPPoolResponse[];
        /**
         * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Route table resource.
         */
        routeTable?: RouteTableResponse;
        /**
         * Vlan to use for the subnet
         */
        vlan?: number;
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
     * The observed state of virtual hard disks
     */
    export interface VirtualHardDiskStatusResponse {
        /**
         * VirtualHardDisk provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        provisioningStatus?: VirtualHardDiskStatusResponseProvisioningStatus;
    }

    export interface VirtualHardDiskStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the virtual hard disk
         */
        operationId?: string;
        /**
         * The status of the operation performed on the virtual hard disk [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * The instance view of the VM Config Agent running on the virtual machine.
     */
    export interface VirtualMachineConfigAgentInstanceViewResponse {
        /**
         * The resource status information.
         */
        statuses?: InstanceViewStatusResponse[];
        /**
         * The VM Config Agent full version.
         */
        vmConfigAgentVersion?: string;
    }

    export interface VirtualMachineInstancePropertiesResponseDataDisks {
        /**
         * Resource ID of the data disk
         */
        id?: string;
    }

    export interface VirtualMachineInstancePropertiesResponseDynamicMemoryConfig {
        maximumMemoryMB?: number;
        minimumMemoryMB?: number;
        /**
         * Defines the amount of extra memory that should be reserved for a virtual machine instance at runtime, as a percentage of the total memory that the virtual machine instance is thought to need. This only applies to virtual systems with dynamic memory enabled. This property can be in the range of 5 to 2000.
         */
        targetMemoryBuffer?: number;
    }

    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine instance.
     */
    export interface VirtualMachineInstancePropertiesResponseHardwareProfile {
        dynamicMemoryConfig?: VirtualMachineInstancePropertiesResponseDynamicMemoryConfig;
        /**
         * RAM in MB for the virtual machine instance
         */
        memoryMB?: number;
        /**
         * number of processors for the virtual machine instance
         */
        processors?: number;
        vmSize?: string;
    }
    /**
     * virtualMachineInstancePropertiesResponseHardwareProfileProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesResponseHardwareProfile
     */
    export function virtualMachineInstancePropertiesResponseHardwareProfileProvideDefaults(val: VirtualMachineInstancePropertiesResponseHardwareProfile): VirtualMachineInstancePropertiesResponseHardwareProfile {
        return {
            ...val,
            vmSize: (val.vmSize) ?? "Default",
        };
    }

    /**
     * Which Image to use for the virtual machine instance
     */
    export interface VirtualMachineInstancePropertiesResponseImageReference {
        /**
         * Resource ID of the image
         */
        id?: string;
    }

    /**
     * LinuxConfiguration - linux specific configuration values for the virtual machine instance
     */
    export interface VirtualMachineInstancePropertiesResponseLinuxConfiguration {
        /**
         * DisablePasswordAuthentication - whether password authentication should be disabled
         */
        disablePasswordAuthentication?: boolean;
        /**
         * Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine instance creation process.
         */
        provisionVMAgent?: boolean;
        /**
         * Used to indicate whether the VM Config Agent should be installed during the virtual machine creation process.
         */
        provisionVMConfigAgent?: boolean;
        /**
         * Specifies the ssh key configuration for a Linux OS.
         */
        ssh?: SshConfigurationResponse;
    }
    /**
     * virtualMachineInstancePropertiesResponseLinuxConfigurationProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesResponseLinuxConfiguration
     */
    export function virtualMachineInstancePropertiesResponseLinuxConfigurationProvideDefaults(val: VirtualMachineInstancePropertiesResponseLinuxConfiguration): VirtualMachineInstancePropertiesResponseLinuxConfiguration {
        return {
            ...val,
            provisionVMAgent: (val.provisionVMAgent) ?? true,
            provisionVMConfigAgent: (val.provisionVMConfigAgent) ?? true,
        };
    }

    export interface VirtualMachineInstancePropertiesResponseNetworkInterfaces {
        /**
         * ID - Resource Id of the network interface
         */
        id?: string;
    }

    /**
     * NetworkProfile - describes the network configuration the virtual machine instance
     */
    export interface VirtualMachineInstancePropertiesResponseNetworkProfile {
        /**
         * NetworkInterfaces - list of network interfaces to be attached to the virtual machine instance
         */
        networkInterfaces?: VirtualMachineInstancePropertiesResponseNetworkInterfaces[];
    }

    /**
     * VHD to attach as OS disk
     */
    export interface VirtualMachineInstancePropertiesResponseOsDisk {
        /**
         * Resource ID of the OS disk
         */
        id?: string;
        /**
         * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.**
         */
        osType?: string;
    }

    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    export interface VirtualMachineInstancePropertiesResponseOsProfile {
        /**
         * AdminUsername - admin username
         */
        adminUsername?: string;
        /**
         * ComputerName - name of the compute
         */
        computerName?: string;
        /**
         * LinuxConfiguration - linux specific configuration values for the virtual machine instance
         */
        linuxConfiguration?: VirtualMachineInstancePropertiesResponseLinuxConfiguration;
        /**
         * Windows Configuration for the virtual machine instance 
         */
        windowsConfiguration?: VirtualMachineInstancePropertiesResponseWindowsConfiguration;
    }
    /**
     * virtualMachineInstancePropertiesResponseOsProfileProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesResponseOsProfile
     */
    export function virtualMachineInstancePropertiesResponseOsProfileProvideDefaults(val: VirtualMachineInstancePropertiesResponseOsProfile): VirtualMachineInstancePropertiesResponseOsProfile {
        return {
            ...val,
            linuxConfiguration: (val.linuxConfiguration ? virtualMachineInstancePropertiesResponseLinuxConfigurationProvideDefaults(val.linuxConfiguration) : undefined),
            windowsConfiguration: (val.windowsConfiguration ? virtualMachineInstancePropertiesResponseWindowsConfigurationProvideDefaults(val.windowsConfiguration) : undefined),
        };
    }

    /**
     * SecurityProfile - Specifies the security settings for the virtual machine instance.
     */
    export interface VirtualMachineInstancePropertiesResponseSecurityProfile {
        enableTPM?: boolean;
        /**
         * Specifies the SecurityType of the virtual machine. EnableTPM and SecureBootEnabled must be set to true for SecurityType to function.
         */
        securityType?: string;
        uefiSettings?: VirtualMachineInstancePropertiesResponseUefiSettings;
    }
    /**
     * virtualMachineInstancePropertiesResponseSecurityProfileProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesResponseSecurityProfile
     */
    export function virtualMachineInstancePropertiesResponseSecurityProfileProvideDefaults(val: VirtualMachineInstancePropertiesResponseSecurityProfile): VirtualMachineInstancePropertiesResponseSecurityProfile {
        return {
            ...val,
            enableTPM: (val.enableTPM) ?? false,
            uefiSettings: (val.uefiSettings ? virtualMachineInstancePropertiesResponseUefiSettingsProvideDefaults(val.uefiSettings) : undefined),
        };
    }

    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine instance
     */
    export interface VirtualMachineInstancePropertiesResponseStorageProfile {
        /**
         * adds data disks to the virtual machine instance
         */
        dataDisks?: VirtualMachineInstancePropertiesResponseDataDisks[];
        /**
         * Which Image to use for the virtual machine instance
         */
        imageReference?: VirtualMachineInstancePropertiesResponseImageReference;
        /**
         * VHD to attach as OS disk
         */
        osDisk?: VirtualMachineInstancePropertiesResponseOsDisk;
        /**
         * Id of the storage container that hosts the VM configuration file
         */
        vmConfigStoragePathId?: string;
    }

    export interface VirtualMachineInstancePropertiesResponseUefiSettings {
        /**
         * Specifies whether secure boot should be enabled on the virtual machine instance.
         */
        secureBootEnabled?: boolean;
    }
    /**
     * virtualMachineInstancePropertiesResponseUefiSettingsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesResponseUefiSettings
     */
    export function virtualMachineInstancePropertiesResponseUefiSettingsProvideDefaults(val: VirtualMachineInstancePropertiesResponseUefiSettings): VirtualMachineInstancePropertiesResponseUefiSettings {
        return {
            ...val,
            secureBootEnabled: (val.secureBootEnabled) ?? false,
        };
    }

    /**
     * Windows Configuration for the virtual machine instance 
     */
    export interface VirtualMachineInstancePropertiesResponseWindowsConfiguration {
        /**
         * Whether to EnableAutomaticUpdates on the machine
         */
        enableAutomaticUpdates?: boolean;
        /**
         * Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine instance creation process.
         */
        provisionVMAgent?: boolean;
        /**
         * Used to indicate whether the VM Config Agent should be installed during the virtual machine creation process.
         */
        provisionVMConfigAgent?: boolean;
        /**
         * Specifies the ssh key configuration for Windows OS.
         */
        ssh?: SshConfigurationResponse;
        /**
         * TimeZone for the virtual machine instance
         */
        timeZone?: string;
    }
    /**
     * virtualMachineInstancePropertiesResponseWindowsConfigurationProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesResponseWindowsConfiguration
     */
    export function virtualMachineInstancePropertiesResponseWindowsConfigurationProvideDefaults(val: VirtualMachineInstancePropertiesResponseWindowsConfiguration): VirtualMachineInstancePropertiesResponseWindowsConfiguration {
        return {
            ...val,
            provisionVMAgent: (val.provisionVMAgent) ?? true,
            provisionVMConfigAgent: (val.provisionVMConfigAgent) ?? true,
        };
    }

    /**
     * The observed state of virtual machine instances
     */
    export interface VirtualMachineInstanceStatusResponse {
        /**
         * VirtualMachine provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        /**
         * The power state of the virtual machine instance
         */
        powerState?: string;
        provisioningStatus?: VirtualMachineInstanceStatusResponseProvisioningStatus;
    }

    export interface VirtualMachineInstanceStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the virtual machine instance
         */
        operationId?: string;
        /**
         * The status of the operation performed on the virtual machine instance [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * The instance view of a virtual machine.
     */
    export interface VirtualMachineInstanceViewResponse {
        /**
         * The VM Config Agent running on the virtual machine.
         */
        vmAgent?: VirtualMachineConfigAgentInstanceViewResponse;
    }
