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
 * Specifies the guest agent settings for the virtual machine.
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
     * Specifies whether any MS SQL instance is discovered on the machine.
     */
    mssqlDiscovered: string;
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
     * Private key used to authenticate to a virtual machine through ssh.
     */
    privateKey?: string;
    /**
     * Gets or sets username to connect with the guest.
     */
    username?: string;
}

/**
 * Specifies the hardware settings for the virtual machine.
 */
export interface HardwareProfileResponse {
    /**
     * Gets or sets a value indicating whether virtual processors can be added while this virtual machine is running.
     */
    cpuHotAddEnabled: boolean;
    /**
     * Gets or sets a value indicating whether virtual processors can be removed while this virtual machine is running.
     */
    cpuHotRemoveEnabled: boolean;
    /**
     * Gets or sets a value indicating whether memory can be added while this virtual machine is running.
     */
    memoryHotAddEnabled: boolean;
    /**
     * Gets or sets memory size in MBs for the vm.
     */
    memorySizeMB?: number;
    /**
     * Gets or sets the number of vCPUs for the vm.
     */
    numCPUs?: number;
    /**
     * Gets or sets the number of cores per socket for the vm. Defaults to 1 if unspecified.
     */
    numCoresPerSocket?: number;
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
 * Specifies the vCenter infrastructure specific settings for the virtual machine.
 */
export interface InfrastructureProfileResponse {
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    customResourceName: string;
    /**
     * Firmware type
     */
    firmwareType?: string;
    /**
     * Gets or sets the folder path of the vm.
     */
    folderPath: string;
    /**
     * Gets or sets the instance uuid of the vm.
     */
    instanceUuid: string;
    /**
     * Gets or sets the inventory Item ID for the virtual machine.
     */
    inventoryItemId?: string;
    /**
     * Gets or sets the vCenter Managed Object name for the virtual machine.
     */
    moName: string;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine.
     */
    moRefId: string;
    /**
     * Gets or sets the SMBIOS UUID of the vm.
     */
    smbiosUuid?: string;
    /**
     * Gets or sets the ARM Id of the template resource to deploy the virtual machine.
     */
    templateId?: string;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
     */
    vCenterId?: string;
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
export interface NetworkInterfaceResponse {
    /**
     * Gets or sets the device key value.
     */
    deviceKey?: number;
    /**
     * Gets or sets the nic ip addresses.
     */
    ipAddresses: string[];
    /**
     * Gets or sets the ipsettings.
     */
    ipSettings?: NicIPSettingsResponse;
    /**
     * Gets or sets the label of the virtual network in vCenter that the nic is connected to.
     */
    label: string;
    /**
     * Gets or sets the NIC MAC address.
     */
    macAddress: string;
    /**
     * Gets or sets the name of the network interface.
     */
    name?: string;
    /**
     * Gets or sets the ARM Id of the network resource to connect the virtual machine.
     */
    networkId?: string;
    /**
     * Gets or sets the name of the virtual network in vCenter that the nic is connected to.
     */
    networkMoName: string;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID of the virtual network
     * that the nic is connected to.
     */
    networkMoRefId: string;
    /**
     * NIC type
     */
    nicType?: string;
    /**
     * Gets or sets the power on boot.
     */
    powerOnBoot?: string;
}

/**
 * Specifies the network interfaces of the virtual machine.
 */
export interface NetworkProfileResponse {
    /**
     * Gets or sets the list of network interfaces associated with the virtual machine.
     */
    networkInterfaces?: NetworkInterfaceResponse[];
}

/**
 * IP address information for a virtual network adapter reported by the fabric.
 */
export interface NicIPAddressSettingsResponse {
    /**
     * Gets the ip address allocation method.
     */
    allocationMethod: string;
    /**
     * Gets the ip address for the nic.
     */
    ipAddress: string;
    /**
     * Gets the mask.
     */
    subnetMask: string;
}

/**
 * Defines the network interface ip settings.
 */
export interface NicIPSettingsResponse {
    /**
     * Gets or sets the nic allocation method.
     */
    allocationMethod?: string;
    /**
     * Gets or sets the dns servers.
     */
    dnsServers?: string[];
    /**
     * Gets or sets the gateway.
     */
    gateway?: string[];
    /**
     * Gets or sets the ip address for the nic.
     */
    ipAddress?: string;
    /**
     * Gets or sets the IP address information being reported for this NIC. This contains the same IPv4 information above plus IPV6 information.
     */
    ipAddressInfo: NicIPAddressSettingsResponse[];
    /**
     * Gets or sets the primary server.
     */
    primaryWinsServer: string;
    /**
     * Gets or sets the secondary server.
     */
    secondaryWinsServer: string;
    /**
     * Gets or sets the mask.
     */
    subnetMask?: string;
}

/**
 * Specifies the operating system settings for the virtual machine.
 */
export interface OsProfileForVMInstanceResponse {
    /**
     * Gets or sets administrator username.
     */
    adminUsername?: string;
    /**
     * Gets or sets computer name.
     */
    computerName?: string;
    /**
     * Gets or sets the guestId.
     */
    guestId?: string;
    /**
     * Gets or sets os sku.
     */
    osSku: string;
    /**
     * Gets or sets the type of the os.
     */
    osType?: string;
    /**
     * Gets or sets the current running status of VMware Tools running in the guest operating system.
     */
    toolsRunningStatus: string;
    /**
     * Gets or sets the current version of VMware Tools.
     */
    toolsVersion: string;
    /**
     * Gets or sets the current version status of VMware Tools installed in the guest operating system.
     */
    toolsVersionStatus: string;
    /**
     * Windows Configuration.
     */
    windowsConfiguration?: WindowsConfigurationResponse;
}

/**
 * Specifies the operating system settings for the virtual machine.
 */
export interface OsProfileResponse {
    /**
     * Gets or sets administrator username.
     */
    adminUsername?: string;
    /**
     * Gets or sets a value indicating whether the VM is ready for extension operations.
     */
    allowExtensionOperations: boolean;
    /**
     * Gets or sets computer name.
     */
    computerName?: string;
    /**
     * Gets or sets the guestId.
     */
    guestId?: string;
    /**
     * Specifies the linux configuration for update management.
     */
    linuxConfiguration?: OsProfileResponseLinuxConfiguration;
    /**
     * Gets or sets os name.
     */
    osName: string;
    /**
     * Gets or sets the type of the os.
     */
    osType?: string;
    /**
     * Gets or sets the current running status of VMware Tools running in the guest operating system.
     */
    toolsRunningStatus: string;
    /**
     * Gets or sets the current version of VMware Tools.
     */
    toolsVersion: string;
    /**
     * Gets or sets the current version status of VMware Tools installed in the guest operating system.
     */
    toolsVersionStatus: string;
    /**
     * Specifies the windows configuration for update management.
     */
    windowsConfiguration?: OsProfileResponseWindowsConfiguration;
}

/**
 * Specifies the linux configuration for update management.
 */
export interface OsProfileResponseLinuxConfiguration {
    /**
     * Specifies the assessment mode.
     */
    assessmentMode?: string;
    /**
     * Specifies the patch mode.
     */
    patchMode?: string;
}

/**
 * Specifies the windows configuration for update management.
 */
export interface OsProfileResponseWindowsConfiguration {
    /**
     * Specifies the assessment mode.
     */
    assessmentMode?: string;
    /**
     * Specifies the patch mode.
     */
    patchMode?: string;
}

/**
 * Specifies the compute and storage placement settings for the virtual machine.
 */
export interface PlacementProfileResponse {
    /**
     * Gets or sets the ARM Id of the cluster resource on which this virtual machine will deploy.
     */
    clusterId?: string;
    /**
     * Gets or sets the ARM Id of the datastore resource on which the data for the virtual machine will be kept.
     */
    datastoreId?: string;
    /**
     * Gets or sets the ARM Id of the host resource on which this virtual machine will deploy.
     */
    hostId?: string;
    /**
     * Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will deploy.
     */
    resourcePoolId?: string;
}

/**
 * The resource status information.
 */
export interface ResourceStatusResponse {
    /**
     * The last update time for this condition.
     */
    lastUpdatedAt: string;
    /**
     * A human readable message indicating details about the status.
     */
    message: string;
    /**
     * The reason for the condition's status.
     */
    reason: string;
    /**
     * Severity with which to treat failures of this type of condition.
     */
    severity: string;
    /**
     * Status of the condition.
     */
    status: string;
    /**
     * The type of the condition.
     */
    type: string;
}

/**
 * Specifies the Security profile settings for the virtual machine.
 */
export interface SecurityProfileResponse {
    /**
     * Specifies the security settings like secure boot used while creating the virtual machine.
     */
    uefiSettings?: UefiSettingsResponse;
}

/**
 * Specifies the storage settings for the virtual machine disks.
 */
export interface StorageProfileResponse {
    /**
     * Gets or sets the list of virtual disks associated with the virtual machine.
     */
    disks?: VirtualDiskResponse[];
    /**
     * Gets or sets the list of virtual SCSI controllers associated with the virtual machine.
     */
    scsiControllers: VirtualSCSIControllerResponse[];
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
 * Specifies the security settings like secure boot used while creating the virtual machine.
 */
export interface UefiSettingsResponse {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine.
     */
    secureBootEnabled?: boolean;
}

/**
 * Username / Password Credentials to connect to vcenter.
 */
export interface VICredentialResponse {
    /**
     * Gets or sets username to connect with the vCenter.
     */
    username?: string;
}

/**
 * Virtual disk model
 */
export interface VirtualDiskResponse {
    /**
     * Gets or sets the controller id.
     */
    controllerKey?: number;
    /**
     * Gets or sets the device key value.
     */
    deviceKey?: number;
    /**
     * Gets or sets the device name.
     */
    deviceName?: string;
    /**
     * Gets or sets the disk mode.
     */
    diskMode?: string;
    /**
     * Gets or sets the disk object id.
     */
    diskObjectId: string;
    /**
     * Gets or sets the disk total size.
     */
    diskSizeGB?: number;
    /**
     * Gets or sets the disk backing type.
     */
    diskType?: string;
    /**
     * Gets or sets the label of the virtual disk in vCenter.
     */
    label: string;
    /**
     * Gets or sets the name of the virtual disk.
     */
    name?: string;
    /**
     * Gets or sets the unit number of the disk on the controller.
     */
    unitNumber?: number;
}

/**
 * This data object type contains the properties of a SCSI controller device attached to a virtual machine that is reported by the controller.
 */
export interface VirtualSCSIControllerResponse {
    /**
     * Gets or sets the bus number of the controller.
     */
    busNumber?: number;
    /**
     * Gets or sets the key of the controller.
     */
    controllerKey?: number;
    /**
     * Gets or sets the SCSI controller unit number.
     */
    scsiCtlrUnitNumber?: number;
    /**
     * Gets or sets the sharing mode.
     */
    sharing?: string;
    /**
     * Gets or sets the controller type.
     */
    type?: string;
}

/**
 * Specifies the Windows Configuration settings for the virtual machine.
 */
export interface WindowsConfigurationResponse {
    /**
     * Sets a value indicating whether auto logon is enabled.
     */
    autoLogon?: boolean;
    /**
     * Sets auto logon count.
     */
    autoLogonCount?: number;
    /**
     * Sets domain name that vm should join.
     */
    domainName?: string;
    /**
     * Sets domain username.
     */
    domainUsername?: string;
    /**
     * Sets first logon commands
     */
    firstLogonCommands?: string[];
    /**
     * Sets full name of the owner of the vm.
     */
    fullName?: string;
    /**
     * Sets org name to which the owner of the vm belongs.
     */
    orgName?: string;
    /**
     * Sets product id of the vm.
     */
    productId?: string;
    /**
     * Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Time zone name correspond to time zones listed at Microsoft Time Zone name values(https://learn.microsoft.com/en-us/previous-versions/windows/embedded/ms912391(v=winembedded.11)).
     */
    timeZone?: string;
    /**
     * Sets work group name that vm should join.
     */
    workGroupName?: string;
}
