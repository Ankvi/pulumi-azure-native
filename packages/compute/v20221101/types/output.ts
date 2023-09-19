import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied.
     */
    export interface AdditionalUnattendContentResponse {
        /**
         * The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
         */
        componentName?: string;
        /**
         * Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
         */
        content?: string;
        /**
         * The pass name. Currently, the only allowable value is OobeSystem.
         */
        passName?: string;
        /**
         * Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
         */
        settingName?: string;
    }

    /**
     * The API entity reference.
     */
    export interface ApiEntityReferenceResponse {
        /**
         * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id?: string;
    }

    /**
     * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    export interface BootDiagnosticsResponse {
        /**
         * Whether boot diagnostics should be enabled on the Virtual Machine.
         */
        enabled?: boolean;
        /**
         * Uri of the storage account to use for placing the console output and screenshot. <br><br>If storageUri is not specified while enabling boot diagnostics, managed storage will be used.
         */
        storageUri?: string;
    }

    /**
     * Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    export interface DiagnosticsProfileResponse {
        /**
         * Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br>**NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.
         */
        bootDiagnostics?: BootDiagnosticsResponse;
    }

    /**
     * Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
     */
    export interface DiskEncryptionSetParametersResponse {
        /**
         * Resource Id
         */
        id?: string;
    }

    /**
     * Describes a Encryption Settings for a Disk
     */
    export interface DiskEncryptionSettingsResponse {
        /**
         * Specifies the location of the disk encryption key, which is a Key Vault Secret.
         */
        diskEncryptionKey?: KeyVaultSecretReferenceResponse;
        /**
         * Specifies whether disk encryption should be enabled on the virtual machine.
         */
        enabled?: boolean;
        /**
         * Specifies the location of the key encryption key in Key Vault.
         */
        keyEncryptionKey?: KeyVaultKeyReferenceResponse;
    }

    /**
     * The instance view of a disk restore point.
     */
    export interface DiskRestorePointInstanceViewResponse {
        /**
         * Disk restore point Id.
         */
        id?: string;
        /**
         * The disk restore point replication status information.
         */
        replicationStatus?: DiskRestorePointReplicationStatusResponse;
    }

    /**
     * The instance view of a disk restore point.
     */
    export interface DiskRestorePointReplicationStatusResponse {
        /**
         * Replication completion percentage.
         */
        completionPercent?: number;
        /**
         * The resource status information.
         */
        status?: InstanceViewStatusResponse;
    }

    /**
     * Specifies the hardware settings for the virtual machine.
     */
    export interface HardwareProfileResponse {
        /**
         * Specifies the size of the virtual machine. <br><br> The enum data type is currently deprecated and will be removed by December 23rd 2023. <br><br> Recommended way to get the list of available sizes is using these APIs: <br><br> [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) <br><br> [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list) <br><br> [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). <br><br> The available VM sizes depend on region and availability set.
         */
        vmSize?: string;
        /**
         * Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-07-01. <br><br> This feature is still in preview mode and is not supported for VirtualMachineScaleSet. <br><br> Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details.
         */
        vmSizeProperties?: VMSizePropertiesResponse;
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

    /**
     * Describes a reference to Key Vault Key
     */
    export interface KeyVaultKeyReferenceResponse {
        /**
         * The URL referencing a key encryption key in Key Vault.
         */
        keyUrl: string;
        /**
         * The relative URL of the Key Vault containing the key.
         */
        sourceVault: SubResourceResponse;
    }

    /**
     * Describes a reference to Key Vault Secret
     */
    export interface KeyVaultSecretReferenceResponse {
        /**
         * The URL referencing a secret in a Key Vault.
         */
        secretUrl: string;
        /**
         * The relative URL of the Key Vault containing the secret.
         */
        sourceVault: SubResourceResponse;
    }

    /**
     * Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
     */
    export interface LinuxConfigurationResponse {
        /**
         * Specifies whether password authentication should be disabled.
         */
        disablePasswordAuthentication?: boolean;
        /**
         * Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false.
         */
        enableVMAgentPlatformUpdates?: boolean;
        /**
         * [Preview Feature] Specifies settings related to VM Guest Patching on Linux.
         */
        patchSettings?: LinuxPatchSettingsResponse;
        /**
         * Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
         */
        provisionVMAgent?: boolean;
        /**
         * Specifies the ssh key configuration for a Linux OS.
         */
        ssh?: SshConfigurationResponse;
    }

    /**
     * Specifies settings related to VM Guest Patching on Linux.
     */
    export interface LinuxPatchSettingsResponse {
        /**
         * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
         */
        assessmentMode?: string;
        /**
         * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux.
         */
        automaticByPlatformSettings?: LinuxVMGuestPatchAutomaticByPlatformSettingsResponse;
        /**
         * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true
         */
        patchMode?: string;
    }

    /**
     * Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Linux patch settings.
     */
    export interface LinuxVMGuestPatchAutomaticByPlatformSettingsResponse {
        /**
         * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
         */
        rebootSetting?: string;
    }

    /**
     * LogAnalytics output properties
     */
    export interface LogAnalyticsOutputResponse {
        /**
         * Output file Uri path to blob container.
         */
        output: string;
    }

    /**
     * The parameters of a managed disk.
     */
    export interface ManagedDiskParametersResponse {
        /**
         * Specifies the customer managed disk encryption set resource id for the managed disk.
         */
        diskEncryptionSet?: DiskEncryptionSetParametersResponse;
        /**
         * Resource Id
         */
        id?: string;
        /**
         * Specifies the security profile for the managed disk.
         */
        securityProfile?: VMDiskSecurityProfileResponse;
        /**
         * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
         */
        storageAccountType?: string;
    }

    /**
     * Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned.
     */
    export interface OSProfileResponse {
        /**
         * Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
         */
        adminPassword?: string;
        /**
         * Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
         */
        adminUsername?: string;
        /**
         * Specifies whether extension operations should be allowed on the virtual machine. <br><br>This may only be set to False when no extensions are present on the virtual machine.
         */
        allowExtensionOperations?: boolean;
        /**
         * Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules).
         */
        computerName?: string;
        /**
         * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init)
         */
        customData?: string;
        /**
         * Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
         */
        linuxConfiguration?: LinuxConfigurationResponse;
        /**
         * Optional property which must either be set to True or omitted.
         */
        requireGuestProvisionSignal?: boolean;
        /**
         * Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
         */
        secrets?: VaultSecretGroupResponse[];
        /**
         * Specifies Windows operating system settings on the virtual machine.
         */
        windowsConfiguration?: WindowsConfigurationResponse;
    }

    /**
     * Specifies settings related to VM Guest Patching on Windows.
     */
    export interface PatchSettingsResponse {
        /**
         * Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. 
         */
        assessmentMode?: string;
        /**
         * Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows.
         */
        automaticByPlatformSettings?: WindowsVMGuestPatchAutomaticByPlatformSettingsResponse;
        /**
         * Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'.
         */
        enableHotpatching?: boolean;
        /**
         * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true 
         */
        patchMode?: string;
    }

    /**
     * The instance view of a restore point.
     */
    export interface RestorePointInstanceViewResponse {
        /**
         * The disk restore points information.
         */
        diskRestorePoints?: DiskRestorePointInstanceViewResponse[];
        /**
         * The resource status information.
         */
        statuses?: InstanceViewStatusResponse[];
    }

    /**
     * Describes the properties of the Virtual Machine for which the restore point was created. The properties provided are a subset and the snapshot of the overall Virtual Machine properties captured at the time of the restore point creation.
     */
    export interface RestorePointSourceMetadataResponse {
        /**
         * Gets the diagnostics profile.
         */
        diagnosticsProfile?: DiagnosticsProfileResponse;
        /**
         * Gets the hardware profile.
         */
        hardwareProfile?: HardwareProfileResponse;
        /**
         * Gets the license type, which is for bring your own license scenario.
         */
        licenseType?: string;
        /**
         * Location of the VM from which the restore point was created.
         */
        location?: string;
        /**
         * Gets the OS profile.
         */
        osProfile?: OSProfileResponse;
        /**
         * Gets the security profile.
         */
        securityProfile?: SecurityProfileResponse;
        /**
         * Gets the storage profile.
         */
        storageProfile?: RestorePointSourceVMStorageProfileResponse;
        /**
         * UserData associated with the source VM for which restore point is captured, which is a base-64 encoded value.
         */
        userData?: string;
        /**
         * Gets the virtual machine unique id.
         */
        vmId?: string;
    }

    /**
     * Describes a data disk.
     */
    export interface RestorePointSourceVMDataDiskResponse {
        /**
         * Gets the caching type.
         */
        caching?: string;
        /**
         * Gets the disk restore point Id.
         */
        diskRestorePoint?: ApiEntityReferenceResponse;
        /**
         * Gets the initial disk size in GB for blank data disks, and the new desired size for existing OS and Data disks.
         */
        diskSizeGB?: number;
        /**
         * Gets the logical unit number.
         */
        lun?: number;
        /**
         * Gets the managed disk details
         */
        managedDisk?: ManagedDiskParametersResponse;
        /**
         * Gets the disk name.
         */
        name?: string;
    }

    /**
     * Describes an Operating System disk.
     */
    export interface RestorePointSourceVMOSDiskResponse {
        /**
         * Gets the caching type.
         */
        caching?: string;
        /**
         * Gets the disk restore point Id.
         */
        diskRestorePoint?: ApiEntityReferenceResponse;
        /**
         * Gets the disk size in GB.
         */
        diskSizeGB?: number;
        /**
         * Gets the disk encryption settings.
         */
        encryptionSettings?: DiskEncryptionSettingsResponse;
        /**
         * Gets the managed disk details
         */
        managedDisk?: ManagedDiskParametersResponse;
        /**
         * Gets the disk name.
         */
        name?: string;
        /**
         * Gets the Operating System type.
         */
        osType?: string;
    }

    /**
     * Describes the storage profile.
     */
    export interface RestorePointSourceVMStorageProfileResponse {
        /**
         * Gets the data disks of the VM captured at the time of the restore point creation.
         */
        dataDisks?: RestorePointSourceVMDataDiskResponse[];
        /**
         * Gets the OS disk of the VM captured at the time of the restore point creation.
         */
        osDisk?: RestorePointSourceVMOSDiskResponse;
    }

    /**
     * Specifies the Security profile settings for the virtual machine or virtual machine scale set.
     */
    export interface SecurityProfileResponse {
        /**
         * This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. <br><br> Default: The Encryption at host will be disabled unless this property is set to true for the resource.
         */
        encryptionAtHost?: boolean;
        /**
         * Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. <br><br> Default: UefiSettings will not be enabled unless this property is set.
         */
        securityType?: string;
        /**
         * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. <br><br>Minimum api-version: 2020-12-01
         */
        uefiSettings?: UefiSettingsResponse;
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

    export interface SubResourceResponse {
        /**
         * Resource Id
         */
        id?: string;
    }

    /**
     * Specifies the security settings like secure boot and vTPM used while creating the virtual machine. <br><br>Minimum api-version: 2020-12-01
     */
    export interface UefiSettingsResponse {
        /**
         * Specifies whether secure boot should be enabled on the virtual machine. <br><br>Minimum api-version: 2020-12-01
         */
        secureBootEnabled?: boolean;
        /**
         * Specifies whether vTPM should be enabled on the virtual machine. <br><br>Minimum api-version: 2020-12-01
         */
        vTpmEnabled?: boolean;
    }

    /**
     * Specifies the security profile settings for the managed disk. <br><br> NOTE: It can only be set for Confidential VMs
     */
    export interface VMDiskSecurityProfileResponse {
        /**
         * Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob.
         */
        diskEncryptionSet?: DiskEncryptionSetParametersResponse;
        /**
         * Specifies the EncryptionType of the managed disk. <br> It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, and VMGuestStateOnly for encryption of just the VMGuestState blob. <br><br> NOTE: It can be set for only Confidential VMs.
         */
        securityEncryptionType?: string;
    }

    /**
     * Specifies VM Size Property settings on the virtual machine.
     */
    export interface VMSizePropertiesResponse {
        /**
         * Specifies the number of vCPUs available for the VM. <br><br> When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list) .
         */
        vCPUsAvailable?: number;
        /**
         * Specifies the vCPU to physical core ratio. <br><br> When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list) <br><br> Setting this property to 1 also means that hyper-threading is disabled.
         */
        vCPUsPerCore?: number;
    }

    /**
     * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
     */
    export interface VaultCertificateResponse {
        /**
         * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted.
         */
        certificateStore?: string;
        /**
         * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
         */
        certificateUrl?: string;
    }

    /**
     * Describes a set of certificates which are all in the same Key Vault.
     */
    export interface VaultSecretGroupResponse {
        /**
         * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
         */
        sourceVault?: SubResourceResponse;
        /**
         * The list of key vault references in SourceVault which contain certificates.
         */
        vaultCertificates?: VaultCertificateResponse[];
    }

    /**
     * Describes Windows Remote Management configuration of the VM
     */
    export interface WinRMConfigurationResponse {
        /**
         * The list of Windows Remote Management listeners
         */
        listeners?: WinRMListenerResponse[];
    }

    /**
     * Describes Protocol and thumbprint of Windows Remote Management listener
     */
    export interface WinRMListenerResponse {
        /**
         * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
         */
        certificateUrl?: string;
        /**
         * Specifies the protocol of WinRM listener. <br><br> Possible values are: <br>**http** <br><br> **https**
         */
        protocol?: string;
    }

    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    export interface WindowsConfigurationResponse {
        /**
         * Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
         */
        additionalUnattendContent?: AdditionalUnattendContentResponse[];
        /**
         * Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. <br><br> For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
         */
        enableAutomaticUpdates?: boolean;
        /**
         * Indicates whether VMAgent Platform Updates is enabled for the Windows virtual machine. Default value is false.
         */
        enableVMAgentPlatformUpdates?: boolean;
        /**
         * [Preview Feature] Specifies settings related to VM Guest Patching on Windows.
         */
        patchSettings?: PatchSettingsResponse;
        /**
         * Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
         */
        provisionVMAgent?: boolean;
        /**
         * Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". <br><br> Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
         */
        timeZone?: string;
        /**
         * Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.
         */
        winRM?: WinRMConfigurationResponse;
    }

    /**
     * Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Windows patch settings.
     */
    export interface WindowsVMGuestPatchAutomaticByPlatformSettingsResponse {
        /**
         * Specifies the reboot setting for all AutomaticByPlatform patch installation operations.
         */
        rebootSetting?: string;
    }
