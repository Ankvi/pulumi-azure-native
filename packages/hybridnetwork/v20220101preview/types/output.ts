import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Specifies the custom settings for the virtual machine.
     */
    export interface CustomProfileResponse {
        /**
         * Path for metadata configuration.
         */
        metadataConfigurationPath?: string;
    }

    /**
     * Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    export interface DataDiskResponse {
        /**
         * Specifies how the virtual machine should be created.
         */
        createOption?: string;
        /**
         * Specifies the size of an empty disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image.
         */
        diskSizeGB?: number;
        /**
         * The name of data disk.
         */
        name?: string;
    }

    /**
     * The image reference properties.
     */
    export interface ImageReferenceResponse {
        /**
         * Specifies in decimal numbers, the exact version of image used to create the virtual machine.
         */
        exactVersion?: string;
        /**
         * Specifies the offer of the image used to create the virtual machine.
         */
        offer?: string;
        /**
         * The image publisher.
         */
        publisher?: string;
        /**
         * The image SKU.
         */
        sku?: string;
        /**
         * Specifies the version of the image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.
         */
        version?: string;
    }

    /**
     * Specifies the Linux operating system settings on the virtual machine.
     */
    export interface LinuxConfigurationResponse {
        /**
         * Specifies the ssh key configuration for a Linux OS.
         */
        ssh?: SshConfigurationResponse;
    }

    /**
     * Network function role configuration.
     */
    export interface NetworkFunctionRoleConfigurationResponse {
        /**
         * Specifies the custom settings for the virtual machine.
         */
        customProfile?: CustomProfileResponse;
        /**
         * The network interface configurations.
         */
        networkInterfaces?: NetworkInterfaceResponse[];
        /**
         * Specifies the operating system settings for the role instance. This value can be updated during the deployment of network function.
         */
        osProfile?: OsProfileResponse;
        /**
         * The name of the network function role.
         */
        roleName?: string;
        /**
         * Role type.
         */
        roleType?: string;
        /**
         * Specifies the storage settings for the virtual machine disks.
         */
        storageProfile?: StorageProfileResponse;
        /**
         * The user parameters for customers. The format of user data parameters has to be matched with the provided user data template.
         */
        userDataParameters?: any;
        /**
         * The user data template for customers. This is a json schema template describing the format and data type of user data parameters.
         */
        userDataTemplate?: any;
        /**
         * The size of the virtual machine.
         */
        virtualMachineSize?: string;
    }
    /**
     * networkFunctionRoleConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkFunctionRoleConfigurationResponse
     */
    export function networkFunctionRoleConfigurationResponseProvideDefaults(val: NetworkFunctionRoleConfigurationResponse): NetworkFunctionRoleConfigurationResponse {
        return {
            ...val,
            osProfile: (val.osProfile ? osProfileResponseProvideDefaults(val.osProfile) : undefined),
        };
    }

    /**
     * The network function template.
     */
    export interface NetworkFunctionTemplateResponse {
        /**
         * An array of network function role definitions.
         */
        networkFunctionRoleConfigurations?: NetworkFunctionRoleConfigurationResponse[];
    }

    /**
     * The network function user configuration.
     */
    export interface NetworkFunctionUserConfigurationResponse {
        /**
         * The network interface configuration.
         */
        networkInterfaces?: NetworkInterfaceResponse[];
        /**
         * Specifies the operating system settings for the role instance.
         */
        osProfile?: NetworkFunctionUserConfigurationResponseOsProfile;
        /**
         * The name of the network function role.
         */
        roleName?: string;
        /**
         * The user data parameters from the customer.
         */
        userDataParameters?: any;
    }

    /**
     * Specifies the operating system settings for the role instance.
     */
    export interface NetworkFunctionUserConfigurationResponseOsProfile {
        /**
         * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file. For more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
         */
        customData?: string;
    }

    /**
     * Network interface IP configuration properties.
     */
    export interface NetworkInterfaceIPConfigurationResponse {
        /**
         * The list of DNS servers IP addresses.
         */
        dnsServers?: string[];
        /**
         * The value of the gateway.
         */
        gateway?: string;
        /**
         * The value of the IP address.
         */
        ipAddress?: string;
        /**
         * IP address allocation method.
         */
        ipAllocationMethod?: string;
        /**
         * IP address version.
         */
        ipVersion?: string;
        /**
         * The value of the subnet.
         */
        subnet?: string;
    }

    /**
     * Network interface properties.
     */
    export interface NetworkInterfaceResponse {
        /**
         * A list of IP configurations of the network interface.
         */
        ipConfigurations?: NetworkInterfaceIPConfigurationResponse[];
        /**
         * The MAC address of the network interface.
         */
        macAddress?: string;
        /**
         * The name of the network interface.
         */
        networkInterfaceName?: string;
        /**
         * The type of the VM switch.
         */
        vmSwitchType?: string;
    }

    /**
     * Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    export interface OsDiskResponse {
        /**
         * Specifies the size of os disk in gigabytes. This is the fully expanded disk size needed of the VHD image on the ASE. This disk size should be greater than the size of the VHD provided in vhdUri.
         */
        diskSizeGB?: number;
        /**
         * The VHD name.
         */
        name?: string;
        /**
         * The OS type.
         */
        osType?: string;
    }

    /**
     * Specifies the operating system settings for the role instance.
     */
    export interface OsProfileResponse {
        /**
         * Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
         */
        adminUsername?: string;
        /**
         * Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file. For more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
         */
        customData?: string;
        /**
         * Indicates if custom data is required to deploy this role.
         */
        customDataRequired?: boolean;
        /**
         * Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
         */
        linuxConfiguration?: LinuxConfigurationResponse;
    }
    /**
     * osProfileResponseProvideDefaults sets the appropriate defaults for OsProfileResponse
     */
    export function osProfileResponseProvideDefaults(val: OsProfileResponse): OsProfileResponse {
        return {
            ...val,
            customDataRequired: (val.customDataRequired) ?? true,
        };
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
         * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
         */
        keyData?: string;
        /**
         * Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys
         */
        path?: string;
    }

    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    export interface StorageProfileResponse {
        /**
         * Specifies the parameters that are used to add a data disk to a virtual machine.
         */
        dataDisks?: DataDiskResponse[];
        /**
         * The image reference properties.
         */
        imageReference?: ImageReferenceResponse;
        /**
         * Specifies information about the operating system disk used by the virtual machine.
         */
        osDisk?: OsDiskResponse;
    }

    /**
     * Reference to another sub resource.
     */
    export interface SubResourceResponse {
        /**
         * Resource ID.
         */
        id?: string;
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
