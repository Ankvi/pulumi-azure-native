import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * Specifies the guest agent settings for the virtual machine.
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
 * Specifies the hardware settings for the virtual machine.
 */
export interface HardwareProfileArgs {
    /**
     * Gets or sets memory size in MBs for the vm.
     */
    memorySizeMB?: pulumi.Input<number>;
    /**
     * Gets or sets the number of vCPUs for the vm.
     */
    numCPUs?: pulumi.Input<number>;
    /**
     * Gets or sets the number of cores per socket for the vm. Defaults to 1 if unspecified.
     */
    numCoresPerSocket?: pulumi.Input<number>;
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
 * Specifies the vCenter infrastructure specific settings for the virtual machine.
 */
export interface InfrastructureProfileArgs {
    /**
     * Firmware type
     */
    firmwareType?: pulumi.Input<string | enums.FirmwareType>;
    /**
     * Gets or sets the inventory Item ID for the virtual machine.
     */
    inventoryItemId?: pulumi.Input<string>;
    /**
     * Gets or sets the SMBIOS UUID of the vm.
     */
    smbiosUuid?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the template resource to deploy the virtual machine.
     */
    templateId?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
     */
    vCenterId?: pulumi.Input<string>;
}

/**
 * Network Interface model
 */
export interface NetworkInterfaceArgs {
    /**
     * Gets or sets the device key value.
     */
    deviceKey?: pulumi.Input<number>;
    /**
     * Gets or sets the ipsettings.
     */
    ipSettings?: pulumi.Input<NicIPSettingsArgs>;
    /**
     * Gets or sets the name of the network interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the network resource to connect the virtual machine.
     */
    networkId?: pulumi.Input<string>;
    /**
     * NIC type
     */
    nicType?: pulumi.Input<string | enums.NICType>;
    /**
     * Gets or sets the power on boot.
     */
    powerOnBoot?: pulumi.Input<string | enums.PowerOnBootOption>;
}

/**
 * Specifies the network interfaces of the virtual machine.
 */
export interface NetworkProfileArgs {
    /**
     * Gets or sets the list of network interfaces associated with the virtual machine.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceArgs>[]>;
}

/**
 * Defines the network interface ip settings.
 */
export interface NicIPSettingsArgs {
    /**
     * Gets or sets the nic allocation method.
     */
    allocationMethod?: pulumi.Input<string | enums.IPAddressAllocationMethod>;
    /**
     * Gets or sets the dns servers.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the gateway.
     */
    gateway?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the ip address for the nic.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Gets or sets the mask.
     */
    subnetMask?: pulumi.Input<string>;
}

/**
 * Specifies the operating system settings for the virtual machine.
 */
export interface OsProfileArgs {
    /**
     * Gets or sets administrator password.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * Gets or sets administrator username.
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * Gets or sets computer name.
     */
    computerName?: pulumi.Input<string>;
    /**
     * Gets or sets the guestId.
     */
    guestId?: pulumi.Input<string>;
    /**
     * Specifies the linux configuration for update management.
     */
    linuxConfiguration?: pulumi.Input<OsProfileLinuxConfigurationArgs>;
    /**
     * Gets or sets the type of the os.
     */
    osType?: pulumi.Input<string | enums.OsType>;
    /**
     * Specifies the windows configuration for update management.
     */
    windowsConfiguration?: pulumi.Input<OsProfileWindowsConfigurationArgs>;
}

/**
 * Specifies the operating system settings for the virtual machine.
 */
export interface OsProfileForVMInstanceArgs {
    /**
     * Sets administrator password.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * Gets or sets administrator username.
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * Gets or sets computer name.
     */
    computerName?: pulumi.Input<string>;
    /**
     * Gets or sets the guestId.
     */
    guestId?: pulumi.Input<string>;
    /**
     * Gets or sets the type of the os.
     */
    osType?: pulumi.Input<string | enums.OsType>;
}

/**
 * Specifies the linux configuration for update management.
 */
export interface OsProfileLinuxConfigurationArgs {
    /**
     * Specifies the assessment mode.
     */
    assessmentMode?: pulumi.Input<string>;
    /**
     * Specifies the patch mode.
     */
    patchMode?: pulumi.Input<string>;
}

/**
 * Specifies the windows configuration for update management.
 */
export interface OsProfileWindowsConfigurationArgs {
    /**
     * Specifies the assessment mode.
     */
    assessmentMode?: pulumi.Input<string>;
    /**
     * Specifies the patch mode.
     */
    patchMode?: pulumi.Input<string>;
}

/**
 * Specifies the compute and storage placement settings for the virtual machine.
 */
export interface PlacementProfileArgs {
    /**
     * Gets or sets the ARM Id of the cluster resource on which this virtual machine will deploy.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the datastore resource on which the data for the virtual machine will be kept.
     */
    datastoreId?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the host resource on which this virtual machine will deploy.
     */
    hostId?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will deploy.
     */
    resourcePoolId?: pulumi.Input<string>;
}

/**
 * Specifies the Security profile settings for the virtual machine.
 */
export interface SecurityProfileArgs {
    /**
     * Specifies the security settings like secure boot used while creating the virtual machine.
     */
    uefiSettings?: pulumi.Input<UefiSettingsArgs>;
}

/**
 * Specifies the storage settings for the virtual machine disks.
 */
export interface StorageProfileArgs {
    /**
     * Gets or sets the list of virtual disks associated with the virtual machine.
     */
    disks?: pulumi.Input<pulumi.Input<VirtualDiskArgs>[]>;
}

/**
 * Specifies the security settings like secure boot used while creating the virtual machine.
 */
export interface UefiSettingsArgs {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
}

/**
 * Username / Password Credentials to connect to vcenter.
 */
export interface VICredentialArgs {
    /**
     * Gets or sets the password to connect with the vCenter.
     */
    password?: pulumi.Input<string>;
    /**
     * Gets or sets username to connect with the vCenter.
     */
    username?: pulumi.Input<string>;
}

/**
 * Virtual disk model
 */
export interface VirtualDiskArgs {
    /**
     * Gets or sets the controller id.
     */
    controllerKey?: pulumi.Input<number>;
    /**
     * Gets or sets the device key value.
     */
    deviceKey?: pulumi.Input<number>;
    /**
     * Gets or sets the device name.
     */
    deviceName?: pulumi.Input<string>;
    /**
     * Gets or sets the disk mode.
     */
    diskMode?: pulumi.Input<string | enums.DiskMode>;
    /**
     * Gets or sets the disk total size.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Gets or sets the disk backing type.
     */
    diskType?: pulumi.Input<string | enums.DiskType>;
    /**
     * Gets or sets the name of the virtual disk.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the unit number of the disk on the controller.
     */
    unitNumber?: pulumi.Input<number>;
}




