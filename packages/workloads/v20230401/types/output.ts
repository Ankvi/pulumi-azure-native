import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Gets or sets the application server configuration.
     */
    export interface ApplicationServerConfigurationResponse {
        /**
         * The number of app server instances.
         */
        instanceCount: number;
        /**
         * The subnet id.
         */
        subnetId: string;
        /**
         * Gets or sets the virtual machine configuration.
         */
        virtualMachineConfiguration: VirtualMachineConfigurationResponse;
    }

    /**
     * The full resource names object for application layer resources. The number of entries in this list should be equal to the number VMs to be created for application layer.
     */
    export interface ApplicationServerFullResourceNamesResponse {
        /**
         * The full name for availability set. In case name is not provided, it will be defaulted to {SID}-App-AvSet.
         */
        availabilitySetName?: string;
        /**
         * The list of virtual machine naming details.
         */
        virtualMachines?: VirtualMachineResourceNamesResponse[];
    }

    /**
     * The Application Server VM Details.
     */
    export interface ApplicationServerVmDetailsResponse {
        /**
         * Storage details of all the Storage Accounts attached to the App Virtual Machine. For e.g. NFS on AFS Shared Storage.
         */
        storageDetails: StorageInformationResponse[];
        /**
         * Defines the type of application server VM.
         */
        type: string;
        virtualMachineId: string;
    }

    /**
     * Gets or sets the central server configuration.
     */
    export interface CentralServerConfigurationResponse {
        /**
         * The number of central server VMs.
         */
        instanceCount: number;
        /**
         * The subnet id.
         */
        subnetId: string;
        /**
         * Gets or sets the virtual machine configuration.
         */
        virtualMachineConfiguration: VirtualMachineConfigurationResponse;
    }

    /**
     * The full resource names object for central server layer resources.
     */
    export interface CentralServerFullResourceNamesResponse {
        /**
         * The full name for availability set. In case name is not provided, it will be defaulted to {SID}-ASCS-AvSet.
         */
        availabilitySetName?: string;
        /**
         * The resource names object for load balancer and related resources.
         */
        loadBalancer?: LoadBalancerResourceNamesResponse;
        /**
         * The list of names for all ASCS virtual machines to be deployed. The number of entries in this list should be equal to the number VMs to be created for ASCS layer. At maximum, there can be two virtual machines at this layer: ASCS and ERS.
         */
        virtualMachines?: VirtualMachineResourceNamesResponse[];
    }

    /**
     * The SAP Central Services Instance VM details.
     */
    export interface CentralServerVmDetailsResponse {
        /**
         * Storage details of all the Storage Accounts attached to the ASCS Virtual Machine. For e.g. NFS on AFS Shared Storage.
         */
        storageDetails: StorageInformationResponse[];
        /**
         * Defines the type of central server VM.
         */
        type: string;
        virtualMachineId: string;
    }

    /**
     * Gets or sets the file share configuration where the transport directory fileshare is created and mounted as a part of the create infra flow. Please pre-create the resource group you intend to place the transport directory in. The storage account and fileshare will be auto-created by the ACSS and doesn’t need to pre-created.
     */
    export interface CreateAndMountFileShareConfigurationResponse {
        /**
         * The type of file share config.
         * Expected value is 'CreateAndMount'.
         */
        configurationType: "CreateAndMount";
        /**
         * The name of transport file share resource group. This should be pre created by the customer. The app rg is used in case of missing input.
         */
        resourceGroup?: string;
        /**
         * The name of file share storage account name . A custom name is used in case of missing input.
         */
        storageAccountName?: string;
    }

    /**
     * Gets or sets the DB2 provider properties.
     */
    export interface DB2ProviderInstancePropertiesResponse {
        /**
         * Gets or sets the db2 database name.
         */
        dbName?: string;
        /**
         * Gets or sets the db2 database password.
         */
        dbPassword?: string;
        /**
         * Gets or sets the key vault URI to secret with the database password.
         */
        dbPasswordUri?: string;
        /**
         * Gets or sets the db2 database sql port.
         */
        dbPort?: string;
        /**
         * Gets or sets the db2 database user name.
         */
        dbUsername?: string;
        /**
         * Gets or sets the target virtual machine name.
         */
        hostname?: string;
        /**
         * The provider type. For example, the value can be SapHana.
         * Expected value is 'Db2'.
         */
        providerType: "Db2";
        /**
         * Gets or sets the SAP System Identifier
         */
        sapSid?: string;
        /**
         * Gets or sets the blob URI to SSL certificate for the DB2 Database.
         */
        sslCertificateUri?: string;
        /**
         * Gets or sets certificate preference if secure communication is enabled.
         */
        sslPreference?: string;
    }

    /**
     * Gets or sets the database configuration.
     */
    export interface DatabaseConfigurationResponse {
        /**
         * The database type.
         */
        databaseType?: string;
        /**
         * Gets or sets the disk configuration.
         */
        diskConfiguration?: DiskConfigurationResponse;
        /**
         * The number of database VMs.
         */
        instanceCount: number;
        /**
         * The subnet id.
         */
        subnetId: string;
        /**
         * Gets or sets the virtual machine configuration.
         */
        virtualMachineConfiguration: VirtualMachineConfigurationResponse;
    }

    /**
     * The full resource names object for database layer resources. The number of entries in this list should be equal to the number VMs to be created for database layer.
     */
    export interface DatabaseServerFullResourceNamesResponse {
        /**
         * The full name for availability set. In case name is not provided, it will be defaulted to {SID}-DB-AvSet.
         */
        availabilitySetName?: string;
        /**
         * The resource names object for load balancer and related resources.
         */
        loadBalancer?: LoadBalancerResourceNamesResponse;
        /**
         * The list of virtual machine naming details.
         */
        virtualMachines?: VirtualMachineResourceNamesResponse[];
    }

    /**
     * Database VM details.
     */
    export interface DatabaseVmDetailsResponse {
        /**
         * Defines the SAP Instance status.
         */
        status: string;
        /**
         * Storage details of all the Storage Accounts attached to the Database Virtual Machine. For e.g. NFS on AFS Shared Storage.
         */
        storageDetails: StorageInformationResponse[];
        virtualMachineId: string;
    }

    /**
     * Defines the url and storage account ID where deployer VM packages are uploaded
     */
    export interface DeployerVmPackagesResponse {
        /**
         * The deployer VM packages storage account id
         */
        storageAccountId?: string;
        /**
         * The URL to the deployer VM packages file.
         */
        url?: string;
    }

    /**
     * Deployment Configuration.
     */
    export interface DeploymentConfigurationResponse {
        /**
         * The geo-location where the SAP system is to be created.
         */
        appLocation?: string;
        /**
         * The configuration Type.
         * Expected value is 'Deployment'.
         */
        configurationType: "Deployment";
        /**
         * The infrastructure configuration.
         */
        infrastructureConfiguration?: SingleServerConfigurationResponse | ThreeTierConfigurationResponse;
        /**
         * The software configuration.
         */
        softwareConfiguration?: ExternalInstallationSoftwareConfigurationResponse | SAPInstallWithoutOSConfigSoftwareConfigurationResponse | ServiceInitiatedSoftwareConfigurationResponse;
    }

    /**
     * Deployment along with OS Configuration.
     */
    export interface DeploymentWithOSConfigurationResponse {
        /**
         * The geo-location where the SAP system is to be created.
         */
        appLocation?: string;
        /**
         * The configuration Type.
         * Expected value is 'DeploymentWithOSConfig'.
         */
        configurationType: "DeploymentWithOSConfig";
        /**
         * The infrastructure configuration.
         */
        infrastructureConfiguration?: SingleServerConfigurationResponse | ThreeTierConfigurationResponse;
        /**
         * The OS and SAP configuration.
         */
        osSapConfiguration?: OsSapConfigurationResponse;
        /**
         * The software configuration.
         */
        softwareConfiguration?: ExternalInstallationSoftwareConfigurationResponse | SAPInstallWithoutOSConfigSoftwareConfigurationResponse | ServiceInitiatedSoftwareConfigurationResponse;
    }

    /**
     * Discovery Details.
     */
    export interface DiscoveryConfigurationResponse {
        /**
         * The geo-location where the SAP system exists.
         */
        appLocation: string;
        /**
         * The virtual machine ID of the Central Server.
         */
        centralServerVmId?: string;
        /**
         * The configuration Type.
         * Expected value is 'Discovery'.
         */
        configurationType: "Discovery";
        /**
         * The custom storage account name for the storage account created by the service in the managed resource group created as part of VIS deployment.<br><br>Refer to the storage account naming rules [here](https://learn.microsoft.com/azure/azure-resource-manager/management/resource-name-rules#microsoftstorage).<br><br>If not provided, the service will create the storage account with a random name.
         */
        managedRgStorageAccountName?: string;
    }

    /**
     * The Disk Configuration Details.
     */
    export interface DiskConfigurationResponse {
        /**
         * The disk configuration for the db volume. For HANA, Required volumes are: ['hana/data', 'hana/log', hana/shared', 'usr/sap', 'os'], Optional volume : ['backup'].
         */
        diskVolumeConfigurations?: {[key: string]: DiskVolumeConfigurationResponse};
    }

    /**
     * The supported disk size details for a disk type.
     */
    export interface DiskDetailsResponse {
        /**
         * The disk tier, e.g. P10, E10.
         */
        diskTier?: string;
        /**
         * The disk Iops.
         */
        iopsReadWrite?: number;
        /**
         * The maximum supported disk count.
         */
        maximumSupportedDiskCount?: number;
        /**
         * The disk provisioned throughput in MBps.
         */
        mbpsReadWrite?: number;
        /**
         * The minimum supported disk count.
         */
        minimumSupportedDiskCount?: number;
        /**
         * The disk size in GB.
         */
        sizeGB?: number;
        /**
         * The type of disk sku. For example, Standard_LRS, Standard_ZRS, Premium_LRS, Premium_ZRS.
         */
        sku?: DiskSkuResponse;
    }

    /**
     * The type of disk sku. For example, Standard_LRS, Standard_ZRS, Premium_LRS, Premium_ZRS.
     */
    export interface DiskSkuResponse {
        /**
         * Defines the disk sku name.
         */
        name?: string;
    }

    /**
     * The disk configuration required for the selected volume.
     */
    export interface DiskVolumeConfigurationResponse {
        /**
         * The total number of disks required for the concerned volume.
         */
        count?: number;
        /**
         * The disk size in GB.
         */
        sizeGB?: number;
        /**
         * The disk SKU details.
         */
        sku?: DiskSkuResponse;
    }

    /**
     * Defines the SAP Enqueue Replication Server (ERS) properties.
     */
    export interface EnqueueReplicationServerPropertiesResponse {
        /**
         * Defines the type of Enqueue Replication Server.
         */
        ersVersion: string;
        /**
         * Defines the health of SAP Instances.
         */
        health: string;
        /**
         * ERS SAP Hostname.
         */
        hostname: string;
        /**
         * ERS Instance Number.
         */
        instanceNo: string;
        /**
         * ERS SAP IP Address.
         */
        ipAddress: string;
        /**
         * ERS SAP Kernel Patch level.
         */
        kernelPatch: string;
        /**
         * ERS SAP Kernel Version.
         */
        kernelVersion: string;
    }

    /**
     * Defines the SAP Enqueue Server properties.
     */
    export interface EnqueueServerPropertiesResponse {
        /**
         * Defines the health of SAP Instances.
         */
        health: string;
        /**
         * Enqueue Server SAP Hostname.
         */
        hostname: string;
        /**
         * Enqueue Server SAP IP Address.
         */
        ipAddress: string;
        /**
         * Enqueue Server Port.
         */
        port: number;
    }

    /**
     * Error definition.
     */
    export interface ErrorDefinitionResponse {
        /**
         * Service specific error code which serves as the substatus for the HTTP error code.
         */
        code: string;
        /**
         * Internal error details.
         */
        details: ErrorDefinitionResponse[];
        /**
         * Description of the error.
         */
        message: string;
    }

    /**
     * Standard error object.
     */
    export interface ErrorResponse {
        /**
         * Server-defined set of error codes.
         */
        code: string;
        /**
         * Array of details about specific errors that led to this reported error.
         */
        details: ErrorResponse[];
        /**
         * Object containing more specific information than  the current object about the error.
         */
        innerError: ErrorResponseInnerError;
        /**
         * Human-readable representation of the error.
         */
        message: string;
        /**
         * Target of the error.
         */
        target: string;
    }

    /**
     * Object containing more specific information than  the current object about the error.
     */
    export interface ErrorResponseInnerError {
        /**
         * Standard error object.
         */
        innerError?: ErrorResponse;
    }

    /**
     * The SAP Software configuration Input when the software is installed externally outside the service.
     */
    export interface ExternalInstallationSoftwareConfigurationResponse {
        /**
         * The resource ID of the virtual machine containing the central server instance.
         */
        centralServerVmId?: string;
        /**
         * The SAP software installation Type.
         * Expected value is 'External'.
         */
        softwareInstallationType: "External";
    }

    /**
     * Defines the SAP Gateway Server properties.
     */
    export interface GatewayServerPropertiesResponse {
        /**
         * Defines the health of SAP Instances.
         */
        health: string;
        /**
         * Gateway Port.
         */
        port: number;
    }

    /**
     * Gets or sets the provider properties.
     */
    export interface HanaDbProviderInstancePropertiesResponse {
        /**
         * Gets or sets the hana database name.
         */
        dbName?: string;
        /**
         * Gets or sets the database password.
         */
        dbPassword?: string;
        /**
         * Gets or sets the key vault URI to secret with the database password.
         */
        dbPasswordUri?: string;
        /**
         * Gets or sets the database user name.
         */
        dbUsername?: string;
        /**
         * Gets or sets the target virtual machine size.
         */
        hostname?: string;
        /**
         * Gets or sets the database instance number.
         */
        instanceNumber?: string;
        /**
         * The provider type. For example, the value can be SapHana.
         * Expected value is 'SapHana'.
         */
        providerType: "SapHana";
        /**
         * Gets or sets the SAP System Identifier.
         */
        sapSid?: string;
        /**
         * Gets or sets the database sql port.
         */
        sqlPort?: string;
        /**
         * Gets or sets the blob URI to SSL certificate for the DB.
         */
        sslCertificateUri?: string;
        /**
         * Gets or sets the hostname(s) in the SSL certificate.
         */
        sslHostNameInCertificate?: string;
        /**
         * Gets or sets certificate preference if secure communication is enabled.
         */
        sslPreference?: string;
    }

    /**
     * Gets or sets the high availability configuration.
     */
    export interface HighAvailabilityConfigurationResponse {
        /**
         * The high availability type.
         */
        highAvailabilityType: string;
    }

    /**
     * Gets or sets the HA software configuration.
     */
    export interface HighAvailabilitySoftwareConfigurationResponse {
        /**
         * The fencing client id.
         */
        fencingClientId: string;
        /**
         * The fencing client id secret/password. The secret should never expire. This will be used pacemaker to start/stop the cluster VMs.
         */
        fencingClientPassword: string;
    }

    /**
     * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set.
     */
    export interface ImageReferenceResponse {
        /**
         * Specifies the offer of the platform image or marketplace image used to create the virtual machine.
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
         * Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.
         */
        version?: string;
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
         * The OS Type
         * Expected value is 'Linux'.
         */
        osType: "Linux";
        /**
         * Specifies the ssh key configuration for a Linux OS. (This property is deprecated, please use 'sshKeyPair' instead)
         */
        ssh?: SshConfigurationResponse;
        /**
         * The SSH Key-pair used to authenticate with the VM's.
         */
        sshKeyPair?: SshKeyPairResponse;
    }

    /**
     * The Load Balancer details such as Load Balancer ID.
     */
    export interface LoadBalancerDetailsResponse {
        id: string;
    }

    /**
     * The resource names object for load balancer and related resources.
     */
    export interface LoadBalancerResourceNamesResponse {
        /**
         * The list of backend pool names. Currently, ACSS deploys only one backend pool and hence, size of this list should be 1
         */
        backendPoolNames?: string[];
        /**
         * The list of frontend IP configuration names. If provided as input, size of this list should be 2 for cs layer and should be 1 for database layer.
         */
        frontendIpConfigurationNames?: string[];
        /**
         * The list of health probe names. If provided as input, size of this list should be 2 for cs layer and should be 1 for database layer.
         */
        healthProbeNames?: string[];
        /**
         * The full resource name for load balancer. If this value is not provided, load balancer will be name as {ASCS/DB}-loadBalancer.
         */
        loadBalancerName?: string;
    }

    /**
     * Managed resource group configuration
     */
    export interface ManagedRGConfigurationResponse {
        /**
         * Managed resource group name
         */
        name?: string;
    }

    /**
     * Defines the SAP Message Server properties.
     */
    export interface MessageServerPropertiesResponse {
        /**
         * Defines the health of SAP Instances.
         */
        health: string;
        /**
         * Message Server SAP Hostname.
         */
        hostname: string;
        /**
         * Message Server HTTP Port.
         */
        httpPort: number;
        /**
         * Message Server HTTPS Port.
         */
        httpsPort: number;
        /**
         * Message Server internal MS port.
         */
        internalMsPort: number;
        /**
         * Message server IP Address.
         */
        ipAddress: string;
        /**
         * Message Server port.
         */
        msPort: number;
    }

    /**
     * Defines the SAP monitor errors.
     */
    export interface MonitorPropertiesResponseErrors {
        /**
         * Server-defined set of error codes.
         */
        code: string;
        /**
         * Array of details about specific errors that led to this reported error.
         */
        details: ErrorResponse[];
        /**
         * Object containing more specific information than  the current object about the error.
         */
        innerError: ErrorResponseInnerError;
        /**
         * Human-readable representation of the error.
         */
        message: string;
        /**
         * Target of the error.
         */
        target: string;
    }

    /**
     * Gets or sets the file share configuration where the transport directory fileshare already exists, and user wishes to mount the fileshare as a part of the create infra flow.
     */
    export interface MountFileShareConfigurationResponse {
        /**
         * The type of file share config.
         * Expected value is 'Mount'.
         */
        configurationType: "Mount";
        /**
         * The fileshare resource ID
         */
        id: string;
        /**
         * The private endpoint resource ID
         */
        privateEndpointId: string;
    }

    /**
     * Gets or sets the SQL server provider properties.
     */
    export interface MsSqlServerProviderInstancePropertiesResponse {
        /**
         * Gets or sets the database password.
         */
        dbPassword?: string;
        /**
         * Gets or sets the key vault URI to secret with the database password.
         */
        dbPasswordUri?: string;
        /**
         * Gets or sets the database sql port.
         */
        dbPort?: string;
        /**
         * Gets or sets the database user name.
         */
        dbUsername?: string;
        /**
         * Gets or sets the SQL server host name.
         */
        hostname?: string;
        /**
         * The provider type. For example, the value can be SapHana.
         * Expected value is 'MsSqlServer'.
         */
        providerType: "MsSqlServer";
        /**
         * Gets or sets the SAP System Identifier
         */
        sapSid?: string;
        /**
         * Gets or sets the blob URI to SSL certificate for the SQL Database.
         */
        sslCertificateUri?: string;
        /**
         * Gets or sets certificate preference if secure communication is enabled.
         */
        sslPreference?: string;
    }

    /**
     * Defines the network configuration type for SAP system infrastructure that is being deployed 
     */
    export interface NetworkConfigurationResponse {
        /**
         * Specifies whether a secondary IP address should be added to the network interface on all VMs of the SAP system being deployed
         */
        isSecondaryIpEnabled?: boolean;
    }
    /**
     * networkConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkConfigurationResponse
     */
    export function networkConfigurationResponseProvideDefaults(val: NetworkConfigurationResponse): NetworkConfigurationResponse {
        return {
            ...val,
            isSecondaryIpEnabled: (val.isSecondaryIpEnabled) ?? false,
        };
    }

    /**
     * The resource names object for network interface and related resources.
     */
    export interface NetworkInterfaceResourceNamesResponse {
        /**
         * The full name for network interface. If name is not provided, service uses a default name based on the deployment type. For SingleServer, default name is {SID}-Nic. In case of HA-AvZone systems, default name will be {SID}-{App/ASCS/DB}-Zone{A/B}-Nic with an incrementor at the end in case of more than 1 instance per layer. For distributed and HA-AvSet systems, default name will be {SID}-{App/ASCS/DB}-Nic with an incrementor at the end in case of more than 1 instance per layer.
         */
        networkInterfaceName?: string;
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
         * Specifies Windows operating system settings on the virtual machine.
         */
        osConfiguration?: LinuxConfigurationResponse | WindowsConfigurationResponse;
    }

    /**
     * Defines the OS and SAP Configurations for Deployment
     */
    export interface OsSapConfigurationResponse {
        /**
         * The url and storage account ID where deployer VM packages are uploaded
         */
        deployerVmPackages?: DeployerVmPackagesResponse;
        /**
         * The FQDN to set for the SAP system
         */
        sapFqdn?: string;
    }

    /**
     * Gets or sets the PrometheusHaCluster provider properties.
     */
    export interface PrometheusHaClusterProviderInstancePropertiesResponse {
        /**
         * Gets or sets the clusterName.
         */
        clusterName?: string;
        /**
         * Gets or sets the target machine name.
         */
        hostname?: string;
        /**
         * URL of the Node Exporter endpoint.
         */
        prometheusUrl?: string;
        /**
         * The provider type. For example, the value can be SapHana.
         * Expected value is 'PrometheusHaCluster'.
         */
        providerType: "PrometheusHaCluster";
        /**
         * Gets or sets the cluster sid.
         */
        sid?: string;
        /**
         * Gets or sets the blob URI to SSL certificate for the HA cluster exporter.
         */
        sslCertificateUri?: string;
        /**
         * Gets or sets certificate preference if secure communication is enabled.
         */
        sslPreference?: string;
    }

    /**
     * Gets or sets the PrometheusOS provider properties.
     */
    export interface PrometheusOSProviderInstancePropertiesResponse {
        /**
         * URL of the Node Exporter endpoint
         */
        prometheusUrl?: string;
        /**
         * The provider type. For example, the value can be SapHana.
         * Expected value is 'PrometheusOS'.
         */
        providerType: "PrometheusOS";
        /**
         * Gets or sets the SAP System Identifier
         */
        sapSid?: string;
        /**
         * Gets or sets the blob URI to SSL certificate for the prometheus node exporter.
         */
        sslCertificateUri?: string;
        /**
         * Gets or sets certificate preference if secure communication is enabled.
         */
        sslPreference?: string;
    }

    /**
     * Defines the provider instance errors.
     */
    export interface ProviderInstancePropertiesResponseErrors {
        /**
         * Server-defined set of error codes.
         */
        code: string;
        /**
         * Array of details about specific errors that led to this reported error.
         */
        details: ErrorResponse[];
        /**
         * Object containing more specific information than  the current object about the error.
         */
        innerError: ErrorResponseInnerError;
        /**
         * Human-readable representation of the error.
         */
        message: string;
        /**
         * Target of the error.
         */
        target: string;
    }

    /**
     * The SAP Availability Zone Pair.
     */
    export interface SAPAvailabilityZonePairResponse {
        /**
         * The zone A.
         */
        zoneA?: number;
        /**
         * The zone B.
         */
        zoneB?: number;
    }

    /**
     * The SAP Disk Configuration contains 'recommended disk' details and list of supported disks detail for a volume type.
     */
    export interface SAPDiskConfigurationResponse {
        /**
         * The recommended disk details for a given VM Sku.
         */
        recommendedConfiguration?: DiskVolumeConfigurationResponse;
        /**
         * The list of supported disks for a given VM Sku.
         */
        supportedConfigurations?: DiskDetailsResponse[];
    }

    /**
     * The SAP Software configuration Input when the software is to be installed by service without OS Configurations
     */
    export interface SAPInstallWithoutOSConfigSoftwareConfigurationResponse {
        /**
         * The URL to the SAP Build of Materials(BOM) file.
         */
        bomUrl: string;
        /**
         * Gets or sets the HA software configuration.
         */
        highAvailabilitySoftwareConfiguration?: HighAvailabilitySoftwareConfigurationResponse;
        /**
         * The SAP bits storage account id.
         */
        sapBitsStorageAccountId: string;
        /**
         * The SAP software installation Type.
         * Expected value is 'SAPInstallWithoutOSConfig'.
         */
        softwareInstallationType: "SAPInstallWithoutOSConfig";
        /**
         * The software version to install.
         */
        softwareVersion: string;
    }

    /**
     * The SAP supported SKU.
     */
    export interface SAPSupportedSkuResponse {
        /**
         * True if the Sku is certified for App server in the SAP system.
         */
        isAppServerCertified?: boolean;
        /**
         * True if the Sku is certified for Database server in the SAP system.
         */
        isDatabaseCertified?: boolean;
        /**
         * The VM Sku.
         */
        vmSku?: string;
    }

    /**
     * An error response from the Virtual Instance for SAP Workload service.
     */
    export interface SAPVirtualInstanceErrorResponse {
        /**
         * The Virtual Instance for SAP error body.
         */
        properties?: ErrorDefinitionResponse;
    }

    /**
     * Gets or sets the Threshold Values for Top Metrics Health.
     */
    export interface SapLandscapeMonitorMetricThresholdsResponse {
        /**
         * Gets or sets the threshold value for Green.
         */
        green?: number;
        /**
         * Gets or sets the name of the threshold.
         */
        name?: string;
        /**
         * Gets or sets the threshold value for Red.
         */
        red?: number;
        /**
         * Gets or sets the threshold value for Yellow.
         */
        yellow?: number;
    }

    /**
     * Gets or sets the SID groupings by landscape and Environment.
     */
    export interface SapLandscapeMonitorPropertiesResponseGrouping {
        /**
         * Gets or sets the list of landscape to SID mappings.
         */
        landscape?: SapLandscapeMonitorSidMappingResponse[];
        /**
         * Gets or sets the list of Sap Applications to SID mappings.
         */
        sapApplication?: SapLandscapeMonitorSidMappingResponse[];
    }

    /**
     * Gets or sets the mapping for SID to Environment/Applications.
     */
    export interface SapLandscapeMonitorSidMappingResponse {
        /**
         * Gets or sets the name of the grouping.
         */
        name?: string;
        /**
         * Gets or sets the list of SID's.
         */
        topSid?: string[];
    }

    /**
     * Gets or sets the provider properties.
     */
    export interface SapNetWeaverProviderInstancePropertiesResponse {
        /**
         * The provider type. For example, the value can be SapHana.
         * Expected value is 'SapNetWeaver'.
         */
        providerType: "SapNetWeaver";
        /**
         * Gets or sets the SAP Client ID.
         */
        sapClientId?: string;
        /**
         * Gets or sets the list of HostFile Entries
         */
        sapHostFileEntries?: string[];
        /**
         * Gets or sets the target virtual machine IP Address/FQDN.
         */
        sapHostname?: string;
        /**
         * Gets or sets the instance number of SAP NetWeaver.
         */
        sapInstanceNr?: string;
        /**
         * Sets the SAP password.
         */
        sapPassword?: string;
        /**
         * Gets or sets the key vault URI to secret with the SAP password.
         */
        sapPasswordUri?: string;
        /**
         * Gets or sets the SAP HTTP port number.
         */
        sapPortNumber?: string;
        /**
         * Gets or sets the SAP System Identifier
         */
        sapSid?: string;
        /**
         * Gets or sets the SAP user name.
         */
        sapUsername?: string;
        /**
         * Gets or sets the blob URI to SSL certificate for the SAP system.
         */
        sslCertificateUri?: string;
        /**
         * Gets or sets certificate preference if secure communication is enabled.
         */
        sslPreference?: string;
    }

    /**
     * The SAP Software configuration Input when the software is to be installed by service.
     */
    export interface ServiceInitiatedSoftwareConfigurationResponse {
        /**
         * The URL to the SAP Build of Materials(BOM) file.
         */
        bomUrl: string;
        /**
         * Gets or sets the HA software configuration.
         */
        highAvailabilitySoftwareConfiguration?: HighAvailabilitySoftwareConfigurationResponse;
        /**
         * The SAP bits storage account id.
         */
        sapBitsStorageAccountId: string;
        /**
         * The FQDN to set for the SAP system during install.
         */
        sapFqdn: string;
        /**
         * The SAP software installation Type.
         * Expected value is 'ServiceInitiated'.
         */
        softwareInstallationType: "ServiceInitiated";
        /**
         * The software version to install.
         */
        softwareVersion: string;
        /**
         * The SSH private key.
         */
        sshPrivateKey: string;
    }

    /**
     * The resource names object for shared storage.
     */
    export interface SharedStorageResourceNamesResponse {
        /**
         * The full name of the shared storage account. If it is not provided, it will be defaulted to {SID}nfs{guid of 15 chars}.
         */
        sharedStorageAccountName?: string;
        /**
         * The full name of private end point for the shared storage account. If it is not provided, it will be defaulted to {storageAccountName}_pe
         */
        sharedStorageAccountPrivateEndPointName?: string;
    }

    /**
     * Gets or sets the single server configuration. For prerequisites for creating the infrastructure, please see [here](https://go.microsoft.com/fwlink/?linkid=2212611&clcid=0x409)
     */
    export interface SingleServerConfigurationResponse {
        /**
         * The application resource group where SAP system resources will be deployed.
         */
        appResourceGroup: string;
        /**
         * The set of custom names to be used for underlying azure resources that are part of the SAP system.
         */
        customResourceNames?: SingleServerFullResourceNamesResponse;
        /**
         * The database type.
         */
        databaseType?: string;
        /**
         * Gets or sets the disk configuration.
         */
        dbDiskConfiguration?: DiskConfigurationResponse;
        /**
         * The type of SAP deployment, single server or Three tier.
         * Expected value is 'SingleServer'.
         */
        deploymentType: "SingleServer";
        /**
         * Network configuration for the server
         */
        networkConfiguration?: NetworkConfigurationResponse;
        /**
         * The subnet id.
         */
        subnetId: string;
        /**
         * Gets or sets the virtual machine configuration.
         */
        virtualMachineConfiguration: VirtualMachineConfigurationResponse;
    }
    /**
     * singleServerConfigurationResponseProvideDefaults sets the appropriate defaults for SingleServerConfigurationResponse
     */
    export function singleServerConfigurationResponseProvideDefaults(val: SingleServerConfigurationResponse): SingleServerConfigurationResponse {
        return {
            ...val,
            networkConfiguration: (val.networkConfiguration ? networkConfigurationResponseProvideDefaults(val.networkConfiguration) : undefined),
        };
    }

    /**
     * The resource name object where the specified values will be full resource names of the corresponding resources in a single server SAP system.
     */
    export interface SingleServerFullResourceNamesResponse {
        /**
         * The pattern type to be used for resource naming.
         * Expected value is 'FullResourceName'.
         */
        namingPatternType: "FullResourceName";
        /**
         * The resource names object for virtual machine and related resources.
         */
        virtualMachine?: VirtualMachineResourceNamesResponse;
    }

    /**
     * Gets or sets the file share configuration for scenarios where transport directory fileshare is not created or required.
     */
    export interface SkipFileShareConfigurationResponse {
        /**
         * The type of file share config.
         * Expected value is 'Skip'.
         */
        configurationType: "Skip";
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
     * The SSH Key-pair used to authenticate with the VM. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
     */
    export interface SshKeyPairResponse {
        /**
         * SSH private key.
         */
        privateKey?: string;
        /**
         * SSH public key
         */
        publicKey?: string;
    }

    /**
     * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
     */
    export interface SshPublicKeyResponse {
        /**
         * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
         */
        keyData?: string;
    }

    /**
     * Gets or sets the storage configuration.
     */
    export interface StorageConfigurationResponse {
        /**
         * The properties of the transport directory attached to the VIS. The default for transportFileShareConfiguration is the createAndMount flow if storage configuration is missing.
         */
        transportFileShareConfiguration?: CreateAndMountFileShareConfigurationResponse | MountFileShareConfigurationResponse | SkipFileShareConfigurationResponse;
    }

    /**
     * Storage details of all the Storage accounts attached to the VM. For e.g. NFS on AFS Shared Storage. 
     */
    export interface StorageInformationResponse {
        id: string;
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
     * Gets or sets the three tier SAP configuration. For prerequisites for creating the infrastructure, please see [here](https://go.microsoft.com/fwlink/?linkid=2212611&clcid=0x409)
     */
    export interface ThreeTierConfigurationResponse {
        /**
         * The application resource group where SAP system resources will be deployed.
         */
        appResourceGroup: string;
        /**
         * The application server configuration.
         */
        applicationServer: ApplicationServerConfigurationResponse;
        /**
         * The central server configuration.
         */
        centralServer: CentralServerConfigurationResponse;
        /**
         * The set of custom names to be used for underlying azure resources that are part of the SAP system.
         */
        customResourceNames?: ThreeTierFullResourceNamesResponse;
        /**
         * The database configuration.
         */
        databaseServer: DatabaseConfigurationResponse;
        /**
         * The type of SAP deployment, single server or Three tier.
         * Expected value is 'ThreeTier'.
         */
        deploymentType: "ThreeTier";
        /**
         * The high availability configuration.
         */
        highAvailabilityConfig?: HighAvailabilityConfigurationResponse;
        /**
         * Network configuration common to all servers
         */
        networkConfiguration?: NetworkConfigurationResponse;
        /**
         * The storage configuration.
         */
        storageConfiguration?: StorageConfigurationResponse;
    }
    /**
     * threeTierConfigurationResponseProvideDefaults sets the appropriate defaults for ThreeTierConfigurationResponse
     */
    export function threeTierConfigurationResponseProvideDefaults(val: ThreeTierConfigurationResponse): ThreeTierConfigurationResponse {
        return {
            ...val,
            networkConfiguration: (val.networkConfiguration ? networkConfigurationResponseProvideDefaults(val.networkConfiguration) : undefined),
        };
    }

    /**
     * The resource name object where the specified values will be full resource names of the corresponding resources in a three tier SAP system.
     */
    export interface ThreeTierFullResourceNamesResponse {
        /**
         * The full resource names object for application layer resources. The number of entries in this list should be equal to the number VMs to be created for application layer.
         */
        applicationServer?: ApplicationServerFullResourceNamesResponse;
        /**
         * The full resource names object for central server layer resources.
         */
        centralServer?: CentralServerFullResourceNamesResponse;
        /**
         * The full resource names object for database layer resources. The number of entries in this list should be equal to the number VMs to be created for database layer.
         */
        databaseServer?: DatabaseServerFullResourceNamesResponse;
        /**
         * The pattern type to be used for resource naming.
         * Expected value is 'FullResourceName'.
         */
        namingPatternType: "FullResourceName";
        /**
         * The resource names object for shared storage.
         */
        sharedStorage?: SharedStorageResourceNamesResponse;
    }

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    /**
     * A pre-created user assigned identity with appropriate roles assigned. To learn more on identity and roles required, visit the ACSS how-to-guide.
     */
    export interface UserAssignedServiceIdentityResponse {
        /**
         * Type of manage identity
         */
        type: string;
        /**
         * User assigned identities dictionary
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Defines the virtual machine configuration.
     */
    export interface VirtualMachineConfigurationResponse {
        /**
         * The image reference.
         */
        imageReference: ImageReferenceResponse;
        /**
         * The OS profile.
         */
        osProfile: OSProfileResponse;
        /**
         * The virtual machine size.
         */
        vmSize: string;
    }

    /**
     * The resource names object for virtual machine and related resources.
     */
    export interface VirtualMachineResourceNamesResponse {
        /**
         * The full resource names for virtual machine data disks. This is a dictionary containing list of names of data disks per volume. Currently supported volumes for database layer are ['hana/data', 'hana/log', hana/shared', 'usr/sap', 'os', 'backup']. For application and cs layers, only 'default' volume is supported
         */
        dataDiskNames?: {[key: string]: string[]};
        /**
         * The full name for virtual-machine's host (computer name). Currently, ACSS only supports host names which are less than or equal to 13 characters long. If this value is not provided, vmName will be used as host name.
         */
        hostName?: string;
        /**
         * The list of network interface name objects for the selected virtual machine. Currently, only one network interface is supported per virtual machine.
         */
        networkInterfaces?: NetworkInterfaceResourceNamesResponse[];
        /**
         * The full name for OS disk attached to the VM. If this value is not provided, it will be named by ARM as per its default naming standards (prefixed with vm name). There is only one OS disk attached per Virtual Machine.
         */
        osDiskName?: string;
        /**
         * The full name for virtual machine. The length of this field can be upto 64 characters. If name is not provided, service uses a default name based on the deployment type. For SingleServer, default name is {SID}vm. In case of HA-AvZone systems, default name will be {SID}{app/ascs/db}z{a/b}vm with an incrementor at the end in case of more than 1 vm per layer. For distributed and HA-AvSet systems, default name will be {SID}{app/ascs/db}vm with an incrementor at the end in case of more than 1 vm per layer.
         */
        vmName?: string;
    }

    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    export interface WindowsConfigurationResponse {
        /**
         * The OS Type
         * Expected value is 'Windows'.
         */
        osType: "Windows";
    }
