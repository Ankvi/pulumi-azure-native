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
     * GalleryImageStatus defines the observed state of galleryimages
     */
    export interface GalleryImageStatusResponse {
        /**
         * The download status of the gallery image
         */
        downloadStatus?: GalleryImageStatusResponseDownloadStatus;
        /**
         * Gallery image provisioning error code
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
        /**
         * The provisioning status of the gallery image
         */
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

    /**
     * The provisioning status of the gallery image
     */
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
     * Defines the resource properties.
     */
    export interface GuestAgentProfileResponse {
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
         * The status of the hybrid machine agent.
         */
        status: string;
        /**
         * Specifies the VM's unique SMBIOS ID.
         */
        vmUuid: string;
    }

    export interface IPPoolInfoResponse {
        /**
         * no. of ip addresses available in the ip pool
         */
        available: string;
        /**
         * no. of ip addresses allocated from the ip pool
         */
        used: string;
    }

    export interface IPPoolResponse {
        /**
         * end of the ip address pool
         */
        end?: string;
        info?: IPPoolInfoResponse;
        /**
         * ip pool type
         */
        ipPoolType?: string;
        /**
         * start of the ip address pool
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

    export interface InterfaceDNSSettingsResponse {
        /**
         * List of DNS server IP Addresses for the interface
         */
        dnsServers?: string[];
    }

    /**
     * InterfaceIPConfiguration iPConfiguration in a network interface.
     */
    export interface IpConfigurationResponse {
        /**
         * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
         */
        properties?: IpConfigurationResponseProperties;
    }

    /**
     * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
     */
    export interface IpConfigurationResponseProperties {
        /**
         * prefixLength for network interface
         */
        prefixLength?: string;
        /**
         * PrivateIPAddress - Private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * PrivateIPAllocationMethod - The private IP address allocation method. Possible values include: 'Static', 'Dynamic'
         */
        privateIPAllocationMethod?: string;
        /**
         * Subnet - Name of Subnet bound to the IP configuration.
         */
        subnet?: IpConfigurationResponseSubnet;
    }

    /**
     * Subnet - Name of Subnet bound to the IP configuration.
     */
    export interface IpConfigurationResponseSubnet {
        /**
         * ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id?: string;
    }

    /**
     * MarketplaceGalleryImageStatus defines the observed state of marketplacegalleryimages
     */
    export interface MarketplaceGalleryImageStatusResponse {
        /**
         * The download status of the marketplace gallery image
         */
        downloadStatus?: MarketplaceGalleryImageStatusResponseDownloadStatus;
        /**
         * Marketplace gallery image provisioning error code
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
        /**
         * The provisioning status of the marketplace gallery image
         */
        provisioningStatus?: MarketplaceGalleryImageStatusResponseProvisioningStatus;
    }

    /**
     * The download status of the marketplace gallery image
     */
    export interface MarketplaceGalleryImageStatusResponseDownloadStatus {
        /**
         * The downloaded sized of the image in MB
         */
        downloadSizeInMB?: number;
    }

    /**
     * The provisioning status of the marketplace gallery image
     */
    export interface MarketplaceGalleryImageStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the marketplace gallery image
         */
        operationId?: string;
        /**
         * The status of the operation performed on the marketplace gallery image [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * NetworkInterfaceStatus defines the observed state of network interfaces
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
        /**
         * The provisioning status of the network interface
         */
        provisioningStatus?: NetworkInterfaceStatusResponseProvisioningStatus;
    }

    /**
     * The provisioning status of the network interface
     */
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
     * Status of Arc agent for a particular node in HCI Cluster.
     */
    export interface PerNodeStateResponse {
        /**
         * Fully qualified resource ID for the Arc agent of this node.
         */
        arcInstance: string;
        /**
         * Name of the Node in HCI Cluster
         */
        name: string;
        /**
         * State of Arc agent in this node.
         */
        state: string;
    }

    /**
     * storageContainerStatus defines the observed state of storagecontainers
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
        /**
         * The provisioning status of the storage container
         */
        provisioningStatus?: StorageContainerStatusResponseProvisioningStatus;
    }

    /**
     * The provisioning status of the storage container
     */
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

    export interface StoragecontainersResponseExtendedLocation {
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
     * VirtualHardDiskStatus defines the observed state of virtualharddisks
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
        /**
         * The provisioning status of the virtual hard disk
         */
        provisioningStatus?: VirtualHardDiskStatusResponseProvisioningStatus;
    }

    /**
     * The provisioning status of the virtual hard disk
     */
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
     * VirtualMachineStatus defines the observed state of virtualmachines
     */
    export interface VirtualMachineStatusResponse {
        /**
         * VirtualMachine provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        /**
         * The power state of the virtual machine
         */
        powerState?: string;
        /**
         * The provisioning status of the virtual machine
         */
        provisioningStatus?: VirtualMachineStatusResponseProvisioningStatus;
    }

    /**
     * The provisioning status of the virtual machine
     */
    export interface VirtualMachineStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the virtual machine
         */
        operationId?: string;
        /**
         * The status of the operation performed on the virtual machine [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    /**
     * VirtualNetworkStatus defines the observed state of virtual networks
     */
    export interface VirtualNetworkStatusResponse {
        /**
         * VirtualNetwork provisioning error code
         */
        errorCode?: string;
        /**
         * Descriptive error message
         */
        errorMessage?: string;
        /**
         * The provisioning status of the virtual network
         */
        provisioningStatus?: VirtualNetworkStatusResponseProvisioningStatus;
    }

    /**
     * The provisioning status of the virtual network
     */
    export interface VirtualNetworkStatusResponseProvisioningStatus {
        /**
         * The ID of the operation performed on the virtual network
         */
        operationId?: string;
        /**
         * The status of the operation performed on the virtual network [Succeeded, Failed, InProgress]
         */
        status?: string;
    }

    export interface VirtualmachinesPropertiesResponseDataDisks {
        name?: string;
    }

    export interface VirtualmachinesPropertiesResponseDynamicMemoryConfig {
        maximumMemoryGB?: number;
        minimumMemoryGB?: number;
        targetMemoryBuffer?: number;
    }

    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine.
     */
    export interface VirtualmachinesPropertiesResponseHardwareProfile {
        dynamicMemoryConfig?: VirtualmachinesPropertiesResponseDynamicMemoryConfig;
        /**
         * RAM in gb for the virtual machine
         */
        memoryGB?: number;
        /**
         * number of processors for the virtual machine
         */
        processors?: number;
        vmSize?: string;
    }
    /**
     * virtualmachinesPropertiesResponseHardwareProfileProvideDefaults sets the appropriate defaults for VirtualmachinesPropertiesResponseHardwareProfile
     */
    export function virtualmachinesPropertiesResponseHardwareProfileProvideDefaults(val: VirtualmachinesPropertiesResponseHardwareProfile): VirtualmachinesPropertiesResponseHardwareProfile {
        return {
            ...val,
            vmSize: (val.vmSize) ?? "Default",
        };
    }

    /**
     * Which Image to use for the virtual machine
     */
    export interface VirtualmachinesPropertiesResponseImageReference {
        /**
         * Name - Name of the image
         */
        name?: string;
    }

    /**
     * LinuxConfiguration - linux specific configuration values for the virtual machine
     */
    export interface VirtualmachinesPropertiesResponseLinuxConfiguration {
        /**
         * DisablePasswordAuthentication - whether password authentication should be disabled
         */
        disablePasswordAuthentication?: boolean;
        /**
         * Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
         */
        provisionVMAgent?: boolean;
        /**
         * SSH - contains settings related to ssh configuration
         */
        ssh?: VirtualmachinesPropertiesResponseSsh;
    }

    export interface VirtualmachinesPropertiesResponseNetworkInterfaces {
        /**
         * ID - Resource Id of the network interface
         */
        id?: string;
    }

    /**
     * NetworkProfile - describes the network configuration the virtual machine
     */
    export interface VirtualmachinesPropertiesResponseNetworkProfile {
        /**
         * NetworkInterfaces - list of network interfaces to be attached to the virtual machine
         */
        networkInterfaces?: VirtualmachinesPropertiesResponseNetworkInterfaces[];
    }

    /**
     * VHD to attach as OS disk
     */
    export interface VirtualmachinesPropertiesResponseOsDisk {
        /**
         * Specifies the virtual hard disk's ID
         */
        id?: string;
    }

    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    export interface VirtualmachinesPropertiesResponseOsProfile {
        /**
         * AdminUsername - admin username
         */
        adminUsername?: string;
        /**
         * ComputerName - name of the compute
         */
        computerName?: string;
        /**
         * LinuxConfiguration - linux specific configuration values for the virtual machine
         */
        linuxConfiguration?: VirtualmachinesPropertiesResponseLinuxConfiguration;
        /**
         * OsType - string specifying whether the OS is Linux or Windows
         */
        osType?: string;
        /**
         * Windows Configuration for the virtual machine 
         */
        windowsConfiguration?: VirtualmachinesPropertiesResponseWindowsConfiguration;
    }

    export interface VirtualmachinesPropertiesResponsePublicKeys {
        /**
         * KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
         */
        keyData?: string;
        /**
         * Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
         */
        path?: string;
    }

    export interface VirtualmachinesPropertiesResponsePublicKeysPublicKeys {
        /**
         * KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
         */
        keyData?: string;
        /**
         * Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
         */
        path?: string;
    }

    /**
     * SecurityProfile - Specifies the security settings for the virtual machine.
     */
    export interface VirtualmachinesPropertiesResponseSecurityProfile {
        enableTPM?: boolean;
        uefiSettings?: VirtualmachinesPropertiesResponseUefiSettings;
    }
    /**
     * virtualmachinesPropertiesResponseSecurityProfileProvideDefaults sets the appropriate defaults for VirtualmachinesPropertiesResponseSecurityProfile
     */
    export function virtualmachinesPropertiesResponseSecurityProfileProvideDefaults(val: VirtualmachinesPropertiesResponseSecurityProfile): VirtualmachinesPropertiesResponseSecurityProfile {
        return {
            ...val,
            enableTPM: (val.enableTPM) ?? false,
            uefiSettings: (val.uefiSettings ? virtualmachinesPropertiesResponseUefiSettingsProvideDefaults(val.uefiSettings) : undefined),
        };
    }

    /**
     * SSH - contains settings related to ssh configuration
     */
    export interface VirtualmachinesPropertiesResponseSsh {
        /**
         * PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.
         */
        publicKeys?: VirtualmachinesPropertiesResponsePublicKeys[];
    }

    /**
     * SSH Configuration
     */
    export interface VirtualmachinesPropertiesResponseSshSsh {
        /**
         * PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.
         */
        publicKeys?: VirtualmachinesPropertiesResponsePublicKeysPublicKeys[];
    }

    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine
     */
    export interface VirtualmachinesPropertiesResponseStorageProfile {
        /**
         * adds data disks to the virtual machine
         */
        dataDisks?: VirtualmachinesPropertiesResponseDataDisks[];
        /**
         * Which Image to use for the virtual machine
         */
        imageReference?: VirtualmachinesPropertiesResponseImageReference;
        /**
         * VHD to attach as OS disk
         */
        osDisk?: VirtualmachinesPropertiesResponseOsDisk;
        /**
         * Name of the storage container that hosts the VM configuration file
         */
        vmConfigContainerName?: string;
    }

    export interface VirtualmachinesPropertiesResponseUefiSettings {
        /**
         * Specifies whether secure boot should be enabled on the virtual machine.
         */
        secureBootEnabled?: boolean;
    }
    /**
     * virtualmachinesPropertiesResponseUefiSettingsProvideDefaults sets the appropriate defaults for VirtualmachinesPropertiesResponseUefiSettings
     */
    export function virtualmachinesPropertiesResponseUefiSettingsProvideDefaults(val: VirtualmachinesPropertiesResponseUefiSettings): VirtualmachinesPropertiesResponseUefiSettings {
        return {
            ...val,
            secureBootEnabled: (val.secureBootEnabled) ?? false,
        };
    }

    /**
     * Windows Configuration for the virtual machine 
     */
    export interface VirtualmachinesPropertiesResponseWindowsConfiguration {
        /**
         * Whether to EnableAutomaticUpdates on the machine
         */
        enableAutomaticUpdates?: boolean;
        /**
         * Used to indicate whether Arc for Servers agent onboarding should be triggered during the virtual machine creation process.
         */
        provisionVMAgent?: boolean;
        /**
         * SSH Configuration
         */
        ssh?: VirtualmachinesPropertiesResponseSshSsh;
        /**
         * TimeZone for the virtual machine
         */
        timeZone?: string;
    }

    /**
     * IPConfigurationReference - Describes a IPConfiguration under the virtual network
     */
    export interface VirtualnetworksPropertiesResponseIpConfigurationReferences {
        /**
         * IPConfigurationID
         */
        id?: string;
    }

    /**
     * RouteTable for the subnet
     */
    export interface VirtualnetworksPropertiesResponseRouteTable {
        /**
         * Etag - Gets a unique read-only string that changes whenever the resource is updated.
         */
        id?: string;
        /**
         * Name - READ-ONLY; Resource name.
         */
        name?: string;
        /**
         * Routes - Collection of routes contained within a route table.
         */
        routes?: VirtualnetworksPropertiesResponseRoutes[];
        /**
         * Type - READ-ONLY; Resource type.
         */
        type?: string;
    }

    /**
     * Route is associated with a subnet.
     */
    export interface VirtualnetworksPropertiesResponseRoutes {
        /**
         * AddressPrefix - The destination CIDR to which the route applies.
         */
        addressPrefix?: string;
        /**
         * Name - name of the subnet
         */
        name?: string;
        /**
         * NextHopIPAddress - The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
         */
        nextHopIpAddress?: string;
    }

    /**
     * Subnet subnet in a virtual network resource.
     */
    export interface VirtualnetworksPropertiesResponseSubnets {
        /**
         * Cidr for this subnet - IPv4, IPv6
         */
        addressPrefix?: string;
        /**
         * AddressPrefixes - List of address prefixes for the subnet.
         */
        addressPrefixes?: string[];
        /**
         * IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
         */
        ipAllocationMethod?: string;
        /**
         * IPConfigurationReferences - list of IPConfigurationReferences
         */
        ipConfigurationReferences?: VirtualnetworksPropertiesResponseIpConfigurationReferences[];
        /**
         * network associated pool of IP Addresses
         */
        ipPools?: IPPoolResponse[];
        /**
         * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * RouteTable for the subnet
         */
        routeTable?: VirtualnetworksPropertiesResponseRouteTable;
        /**
         * Vlan to use for the subnet
         */
        vlan?: number;
    }
