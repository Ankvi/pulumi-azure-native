import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * InterfaceIPConfiguration iPConfiguration in a network interface.
     */
    export interface IpConfigurationArgs {
        /**
         * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
         */
        properties?: pulumi.Input<IpConfigurationPropertiesArgs>;
    }

    /**
     * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
     */
    export interface IpConfigurationPropertiesArgs {
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
        subnet?: pulumi.Input<IpConfigurationSubnetArgs>;
    }

    /**
     * Subnet - Name of Subnet bound to the IP configuration.
     */
    export interface IpConfigurationSubnetArgs {
        /**
         * ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id?: pulumi.Input<string>;
    }

    export interface StoragecontainersExtendedLocationArgs {
        /**
         * The extended location name.
         */
        name?: pulumi.Input<string>;
        /**
         * The extended location type.
         */
        type?: pulumi.Input<string>;
    }

    export interface VirtualmachinesPropertiesDataDisksArgs {
        name?: pulumi.Input<string>;
    }

    export interface VirtualmachinesPropertiesDynamicMemoryConfigArgs {
        maximumMemoryGB?: pulumi.Input<number>;
        minimumMemoryGB?: pulumi.Input<number>;
        targetMemoryBuffer?: pulumi.Input<number>;
    }

    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine.
     */
    export interface VirtualmachinesPropertiesHardwareProfileArgs {
        dynamicMemoryConfig?: pulumi.Input<VirtualmachinesPropertiesDynamicMemoryConfigArgs>;
        /**
         * RAM in gb for the virtual machine
         */
        memoryGB?: pulumi.Input<number>;
        /**
         * number of processors for the virtual machine
         */
        processors?: pulumi.Input<number>;
        vmSize?: pulumi.Input<string>;
    }
    /**
     * virtualmachinesPropertiesHardwareProfileArgsProvideDefaults sets the appropriate defaults for VirtualmachinesPropertiesHardwareProfileArgs
     */
    export function virtualmachinesPropertiesHardwareProfileArgsProvideDefaults(val: VirtualmachinesPropertiesHardwareProfileArgs): VirtualmachinesPropertiesHardwareProfileArgs {
        return {
            ...val,
            vmSize: (val.vmSize) ?? "Default",
        };
    }

    /**
     * Which Image to use for the virtual machine
     */
    export interface VirtualmachinesPropertiesImageReferenceArgs {
        /**
         * Name - Name of the image
         */
        name?: pulumi.Input<string>;
    }

    /**
     * LinuxConfiguration - linux specific configuration values for the virtual machine
     */
    export interface VirtualmachinesPropertiesLinuxConfigurationArgs {
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
        ssh?: pulumi.Input<VirtualmachinesPropertiesSshArgs>;
    }

    export interface VirtualmachinesPropertiesNetworkInterfacesArgs {
        /**
         * ID - Resource Id of the network interface
         */
        id?: pulumi.Input<string>;
    }

    /**
     * NetworkProfile - describes the network configuration the virtual machine
     */
    export interface VirtualmachinesPropertiesNetworkProfileArgs {
        /**
         * NetworkInterfaces - list of network interfaces to be attached to the virtual machine
         */
        networkInterfaces?: pulumi.Input<pulumi.Input<VirtualmachinesPropertiesNetworkInterfacesArgs>[]>;
    }

    /**
     * VHD to attach as OS disk
     */
    export interface VirtualmachinesPropertiesOsDiskArgs {
        /**
         * Specifies the virtual hard disk's ID
         */
        id?: pulumi.Input<string>;
    }

    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    export interface VirtualmachinesPropertiesOsProfileArgs {
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
        linuxConfiguration?: pulumi.Input<VirtualmachinesPropertiesLinuxConfigurationArgs>;
        /**
         * OsType - string specifying whether the OS is Linux or Windows
         */
        osType?: pulumi.Input<string | enums.OsTypeEnum>;
        /**
         * Windows Configuration for the virtual machine 
         */
        windowsConfiguration?: pulumi.Input<VirtualmachinesPropertiesWindowsConfigurationArgs>;
    }

    export interface VirtualmachinesPropertiesPublicKeysArgs {
        /**
         * KeyData - SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Li      nux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
         */
        keyData?: pulumi.Input<string>;
        /**
         * Path - Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
         */
        path?: pulumi.Input<string>;
    }

    export interface VirtualmachinesPropertiesPublicKeysPublicKeysArgs {
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
    export interface VirtualmachinesPropertiesSecurityProfileArgs {
        enableTPM?: pulumi.Input<boolean>;
        uefiSettings?: pulumi.Input<VirtualmachinesPropertiesUefiSettingsArgs>;
    }
    /**
     * virtualmachinesPropertiesSecurityProfileArgsProvideDefaults sets the appropriate defaults for VirtualmachinesPropertiesSecurityProfileArgs
     */
    export function virtualmachinesPropertiesSecurityProfileArgsProvideDefaults(val: VirtualmachinesPropertiesSecurityProfileArgs): VirtualmachinesPropertiesSecurityProfileArgs {
        return {
            ...val,
            enableTPM: (val.enableTPM) ?? false,
            uefiSettings: (val.uefiSettings ? pulumi.output(val.uefiSettings).apply(virtualmachinesPropertiesUefiSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * SSH - contains settings related to ssh configuration
     */
    export interface VirtualmachinesPropertiesSshArgs {
        /**
         * PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.
         */
        publicKeys?: pulumi.Input<pulumi.Input<VirtualmachinesPropertiesPublicKeysArgs>[]>;
    }

    /**
     * SSH Configuration
     */
    export interface VirtualmachinesPropertiesSshSshArgs {
        /**
         * PublicKeys - The list of SSH public keys used to authenticate with linux based VMs.
         */
        publicKeys?: pulumi.Input<pulumi.Input<VirtualmachinesPropertiesPublicKeysPublicKeysArgs>[]>;
    }

    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine
     */
    export interface VirtualmachinesPropertiesStorageProfileArgs {
        /**
         * adds data disks to the virtual machine
         */
        dataDisks?: pulumi.Input<pulumi.Input<VirtualmachinesPropertiesDataDisksArgs>[]>;
        /**
         * Which Image to use for the virtual machine
         */
        imageReference?: pulumi.Input<VirtualmachinesPropertiesImageReferenceArgs>;
        /**
         * VHD to attach as OS disk
         */
        osDisk?: pulumi.Input<VirtualmachinesPropertiesOsDiskArgs>;
        /**
         * Name of the storage container that hosts the VM configuration file
         */
        vmConfigContainerName?: pulumi.Input<string>;
    }

    export interface VirtualmachinesPropertiesUefiSettingsArgs {
        /**
         * Specifies whether secure boot should be enabled on the virtual machine.
         */
        secureBootEnabled?: pulumi.Input<boolean>;
    }
    /**
     * virtualmachinesPropertiesUefiSettingsArgsProvideDefaults sets the appropriate defaults for VirtualmachinesPropertiesUefiSettingsArgs
     */
    export function virtualmachinesPropertiesUefiSettingsArgsProvideDefaults(val: VirtualmachinesPropertiesUefiSettingsArgs): VirtualmachinesPropertiesUefiSettingsArgs {
        return {
            ...val,
            secureBootEnabled: (val.secureBootEnabled) ?? false,
        };
    }

    /**
     * Windows Configuration for the virtual machine 
     */
    export interface VirtualmachinesPropertiesWindowsConfigurationArgs {
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
        ssh?: pulumi.Input<VirtualmachinesPropertiesSshSshArgs>;
        /**
         * TimeZone for the virtual machine
         */
        timeZone?: pulumi.Input<string>;
    }

    /**
     * IPConfigurationReference - Describes a IPConfiguration under the virtual network
     */
    export interface VirtualnetworksPropertiesIpConfigurationReferencesArgs {
        /**
         * IPConfigurationID
         */
        id?: pulumi.Input<string>;
    }

    /**
     * RouteTable for the subnet
     */
    export interface VirtualnetworksPropertiesRouteTableArgs {
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
        routes?: pulumi.Input<pulumi.Input<VirtualnetworksPropertiesRoutesArgs>[]>;
        /**
         * Type - READ-ONLY; Resource type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Route is associated with a subnet.
     */
    export interface VirtualnetworksPropertiesRoutesArgs {
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
    export interface VirtualnetworksPropertiesSubnetsArgs {
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
        ipConfigurationReferences?: pulumi.Input<pulumi.Input<VirtualnetworksPropertiesIpConfigurationReferencesArgs>[]>;
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
        routeTable?: pulumi.Input<VirtualnetworksPropertiesRouteTableArgs>;
        /**
         * Vlan to use for the subnet
         */
        vlan?: pulumi.Input<number>;
    }