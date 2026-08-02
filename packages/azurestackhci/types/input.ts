import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The AdapterPropertyOverrides of a cluster.
 */
export interface AdapterPropertyOverridesArgs {
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
     */
    jumboPacket?: pulumi.Input<string>;
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
     */
    networkDirect?: pulumi.Input<string>;
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation. Expected values are 'iWARP', 'RoCEv2', 'RoCE'
     */
    networkDirectTechnology?: pulumi.Input<string>;
}

/**
 * Connectivity related configuration required by arc server.
 */
export interface ArcConnectivityPropertiesArgs {
    /**
     * True indicates ARC connectivity is enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Service configurations associated with the connectivity resource. They are only processed by the server if 'enabled' property is set to 'true'.
     */
    serviceConfigurations?: pulumi.Input<pulumi.Input<ServiceConfigurationArgs>[]>;
}

/**
 * Backend address pool for the load balancer.
 */
export interface BackendAddressPoolArgs {
    /**
     * name of the backend pool.
     */
    name: pulumi.Input<string>;
    /**
     * properties for the backend pool
     */
    properties: pulumi.Input<BackendAddressPoolPropertiesArgs>;
}

/**
 * Backend address pool for the load balancer.
 */
export interface BackendAddressPoolPropertiesArgs {
    /**
     * List of backend addresses for the backend pool
     */
    loadBalancerBackendAddresses?: pulumi.Input<pulumi.Input<LoadBalancerBackendAddressArgs>[]>;
    /**
     * Reference to the logical network for this backend pool. Mutually exclusive with virtualNetwork
     */
    logicalNetwork?: pulumi.Input<LogicalNetworkArmReferenceArgs>;
    /**
     * Reference to the virtual network for this backend pool. Mutually exclusive with logicalNetwork
     */
    virtualNetwork?: pulumi.Input<VirtualNetworkArmReferenceArgs>;
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
 * Data used when creating a disk or snapshot
 */
export interface CreationDataArgs {
    /**
     * This enumerates the possible sources of a disk's creation
     */
    createOption: pulumi.Input<string | enums.DiskCreateOption>;
    /**
     * ARM ID of the source resource used for disk creation. Required when createOption is Copy
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * AzureStackHCI Cluster deployment properties.
 */
export interface DeploymentClusterArgs {
    /**
     * For Azure blob service endpoint type, select either Default or Custom domain. If you selected **Custom domain, enter the domain for the blob service in this format core.windows.net.
     */
    azureServiceEndpoint?: pulumi.Input<string>;
    /**
     * Specify the Azure Storage account name for cloud witness for your Azure Stack HCI cluster.
     */
    cloudAccountName?: pulumi.Input<string>;
    /**
     * The cluster name provided when preparing Active Directory.
     */
    name?: pulumi.Input<string>;
    /**
     * Specify the fileshare path for the local witness for your Azure Stack HCI cluster.
     */
    witnessPath?: pulumi.Input<string>;
    /**
     * Use a cloud witness if you have internet access and if you use an Azure Storage account to provide a vote on cluster quorum. A cloud witness uses Azure Blob Storage to read or write a blob file and then uses it to arbitrate in split-brain resolution. Only allowed values are 'Cloud', 'FileShare'. 
     */
    witnessType?: pulumi.Input<string>;
}

/**
 * Deployment Configuration
 */
export interface DeploymentConfigurationArgs {
    /**
     * Scale units will contains list of deployment data
     */
    scaleUnits: pulumi.Input<pulumi.Input<ScaleUnitsArgs>[]>;
    /**
     * deployment template version 
     */
    version?: pulumi.Input<string>;
}

/**
 * The Deployment data of AzureStackHCI Cluster.
 */
export interface DeploymentDataArgs {
    /**
     * The path to the Active Directory Organizational Unit container object prepared for the deployment. 
     */
    adouPath?: pulumi.Input<string>;
    /**
     * Observability config to deploy AzureStackHCI Cluster.
     */
    cluster?: pulumi.Input<DeploymentClusterArgs>;
    /**
     * FQDN to deploy cluster
     */
    domainFqdn?: pulumi.Input<string>;
    /**
     * HostNetwork config to deploy AzureStackHCI Cluster.
     */
    hostNetwork?: pulumi.Input<HostNetworkArgs>;
    /**
     * InfrastructureNetwork config to deploy AzureStackHCI Cluster.
     */
    infrastructureNetwork?: pulumi.Input<pulumi.Input<InfrastructureNetworkArgs>[]>;
    /**
     * naming prefix to deploy cluster.
     */
    namingPrefix?: pulumi.Input<string>;
    /**
     * Observability config to deploy AzureStackHCI Cluster.
     */
    observability?: pulumi.Input<ObservabilityArgs>;
    /**
     * OptionalServices config to deploy AzureStackHCI Cluster.
     */
    optionalServices?: pulumi.Input<OptionalServicesArgs>;
    /**
     * list of physical nodes config to deploy AzureStackHCI Cluster.
     */
    physicalNodes?: pulumi.Input<pulumi.Input<PhysicalNodesArgs>[]>;
    /**
     * SDN Integration config to deploy AzureStackHCI Cluster.
     */
    sdnIntegration?: pulumi.Input<SdnIntegrationArgs>;
    /**
     * secrets used for cloud deployment.
     */
    secrets?: pulumi.Input<pulumi.Input<EceDeploymentSecretsArgs>[]>;
    /**
     * Azure keyvault endpoint. This property is deprecated from 2023-12-01-preview. Please use secrets property instead.
     */
    secretsLocation?: pulumi.Input<string>;
    /**
     * SecuritySettings to deploy AzureStackHCI Cluster.
     */
    securitySettings?: pulumi.Input<DeploymentSecuritySettingsArgs>;
    /**
     * Storage config to deploy AzureStackHCI Cluster.
     */
    storage?: pulumi.Input<StorageArgs>;
}
/**
 * deploymentDataArgsProvideDefaults sets the appropriate defaults for DeploymentDataArgs
 */
export function deploymentDataArgsProvideDefaults(val: DeploymentDataArgs): DeploymentDataArgs {
    return {
        ...val,
        hostNetwork: (val.hostNetwork ? pulumi.output(val.hostNetwork).apply(hostNetworkArgsProvideDefaults) : undefined),
        observability: (val.observability ? pulumi.output(val.observability).apply(observabilityArgsProvideDefaults) : undefined),
        securitySettings: (val.securitySettings ? pulumi.output(val.securitySettings).apply(deploymentSecuritySettingsArgsProvideDefaults) : undefined),
        storage: (val.storage ? pulumi.output(val.storage).apply(storageArgsProvideDefaults) : undefined),
    };
}

/**
 * The SecuritySettings of AzureStackHCI Cluster.
 */
export interface DeploymentSecuritySettingsArgs {
    /**
     * When set to true, BitLocker XTS_AES 256-bit encryption is enabled for all data-at-rest on the OS volume of your Azure Stack HCI cluster. This setting is TPM-hardware dependent. 
     */
    bitlockerBootVolume?: pulumi.Input<boolean>;
    /**
     * When set to true, BitLocker XTS-AES 256-bit encryption is enabled for all data-at-rest on your Azure Stack HCI cluster shared volumes.
     */
    bitlockerDataVolumes?: pulumi.Input<boolean>;
    /**
     * When set to true, Credential Guard is enabled.
     */
    credentialGuardEnforced?: pulumi.Input<boolean>;
    /**
     * When set to true, the security baseline is re-applied regularly.
     */
    driftControlEnforced?: pulumi.Input<boolean>;
    /**
     * By default, Secure Boot is enabled on your Azure HCI cluster. This setting is hardware dependent.
     */
    drtmProtection?: pulumi.Input<boolean>;
    /**
     * By default, Hypervisor-protected Code Integrity is enabled on your Azure HCI cluster.
     */
    hvciProtection?: pulumi.Input<boolean>;
    /**
     * When set to true, all the side channel mitigations are enabled
     */
    sideChannelMitigationEnforced?: pulumi.Input<boolean>;
    /**
     * When set to true, cluster east-west traffic is encrypted.
     */
    smbClusterEncryption?: pulumi.Input<boolean>;
    /**
     * When set to true, the SMB default instance requires sign in for the client and server services.
     */
    smbSigningEnforced?: pulumi.Input<boolean>;
    /**
     * WDAC is enabled by default and limits the applications and the code that you can run on your Azure Stack HCI cluster.
     */
    wdacEnforced?: pulumi.Input<boolean>;
}
/**
 * deploymentSecuritySettingsArgsProvideDefaults sets the appropriate defaults for DeploymentSecuritySettingsArgs
 */
export function deploymentSecuritySettingsArgsProvideDefaults(val: DeploymentSecuritySettingsArgs): DeploymentSecuritySettingsArgs {
    return {
        ...val,
        bitlockerBootVolume: (val.bitlockerBootVolume) ?? true,
        bitlockerDataVolumes: (val.bitlockerDataVolumes) ?? true,
        credentialGuardEnforced: (val.credentialGuardEnforced) ?? false,
        driftControlEnforced: (val.driftControlEnforced) ?? true,
        drtmProtection: (val.drtmProtection) ?? true,
        hvciProtection: (val.hvciProtection) ?? true,
        sideChannelMitigationEnforced: (val.sideChannelMitigationEnforced) ?? true,
        smbClusterEncryption: (val.smbClusterEncryption) ?? false,
        smbSigningEnforced: (val.smbSigningEnforced) ?? true,
        wdacEnforced: (val.wdacEnforced) ?? true,
    };
}

/**
 * The device Configuration for edge device.
 */
export interface DeviceConfigurationArgs {
    /**
     * Device metadata details.
     */
    deviceMetadata?: pulumi.Input<string>;
    /**
     * NIC Details of device
     */
    nicDetails?: pulumi.Input<pulumi.Input<NicDetailArgs>[]>;
}

/**
 * Device details.
 */
export interface DeviceDetailArgs {
    /**
     * Resource Id of the device.
     */
    deviceResourceId?: pulumi.Input<string>;
}

/**
 * Properties for device pool.
 */
export interface DevicePoolPropertiesArgs {
    /**
     * Custom Location Name for the pool, default: <DevicePoolName>-CL
     */
    customLocationName?: pulumi.Input<string>;
    /**
     * List of machines in device pool.
     */
    devices?: pulumi.Input<pulumi.Input<DeviceDetailArgs>[]>;
    /**
     * Managed resource group name for the pool
     */
    managedResourceGroup?: pulumi.Input<string>;
}

/**
 * Represents the properties of Download Os job.
 */
export interface DownloadOsJobPropertiesArgs {
    /**
     * Deployment mode to trigger job.
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * Download OS request.
     */
    downloadRequest: pulumi.Input<DownloadRequestArgs>;
    /**
     * Job Type supported.
     * Expected value is 'DownloadOs'.
     */
    jobType: pulumi.Input<"DownloadOs">;
}

/**
 * Operating system profile.
 */
export interface DownloadOsProfileArgs {
    /**
     * GPG Public Key used for package verification
     */
    gpgPubKey?: pulumi.Input<string>;
    /**
     * Hash of the OS package downloaded
     */
    imageHash?: pulumi.Input<string>;
    /**
     * Location of the operating system image.
     */
    osImageLocation?: pulumi.Input<string>;
    /**
     * Name of the operating system.
     */
    osName?: pulumi.Input<string>;
    /**
     * Type of the operating system.
     */
    osType?: pulumi.Input<string>;
    /**
     * Version of the operating system.
     */
    osVersion?: pulumi.Input<string>;
    /**
     * Validated Solution Recipe version to be used for the job
     */
    vsrVersion?: pulumi.Input<string>;
}

/**
 * Download Request properties
 */
export interface DownloadRequestArgs {
    /**
     * Operating system profile.
     */
    osProfile: pulumi.Input<DownloadOsProfileArgs>;
    /**
     * Target operating system to support polymorphic resource.
     */
    target: pulumi.Input<string | enums.ProvisioningOsType>;
}

/**
 * Protected parameters list stored in keyvault.
 */
export interface EceDeploymentSecretsArgs {
    /**
     * Secret name expected for Enterprise Cloud Engine (ECE) deployment.
     */
    eceSecretName?: pulumi.Input<string | enums.EceSecrets>;
    /**
     * Secret URI stored in keyvault.
     */
    secretLocation?: pulumi.Input<string>;
    /**
     * Secret name stored in keyvault.
     */
    secretName?: pulumi.Input<string>;
}

/**
 * Properties for pausing a server in the cluster.
 */
export interface EdgeMachineCollectLogJobPropertiesArgs {
    /**
     * Deployment mode to trigger job.
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * From date for log collection.
     */
    fromDate: pulumi.Input<string>;
    /**
     * Job Type supported.
     * Expected value is 'CollectLog'.
     */
    jobType: pulumi.Input<"CollectLog">;
    /**
     * To date for log collection.
     */
    toDate: pulumi.Input<string>;
}

/**
 * Properties for edge machine.
 */
export interface EdgeMachinePropertiesArgs {
    /**
     * Link to Arc Gateway ARM resource Id
     */
    arcGatewayResourceId?: pulumi.Input<string>;
    /**
     * Optional property to create arc machine in custom resource group.
     */
    arcMachineResourceGroupId?: pulumi.Input<string>;
    /**
     * Arc machine instance resource id.
     */
    arcMachineResourceId?: pulumi.Input<string>;
    /**
     * Edge Machine type.
     */
    edgeMachineKind?: pulumi.Input<string | enums.EdgeMachineKind>;
    /**
     * Ownership voucher details for provisioned machine.
     */
    ownershipVoucherDetails?: pulumi.Input<OwnershipVoucherDetailsArgs>;
    /**
     * Details for device provisioning.
     */
    provisioningDetails?: pulumi.Input<ProvisioningDetailsArgs>;
    /**
     * Service fetches common configuration from site.
     */
    siteDetails?: pulumi.Input<SiteDetailsArgs>;
}
/**
 * edgeMachinePropertiesArgsProvideDefaults sets the appropriate defaults for EdgeMachinePropertiesArgs
 */
export function edgeMachinePropertiesArgsProvideDefaults(val: EdgeMachinePropertiesArgs): EdgeMachinePropertiesArgs {
    return {
        ...val,
        provisioningDetails: (val.provisioningDetails ? pulumi.output(val.provisioningDetails).apply(provisioningDetailsArgsProvideDefaults) : undefined),
    };
}

/**
 * Properties for adding a server in the cluster.
 */
export interface EdgeMachineRemoteSupportJobPropertiesArgs {
    /**
     * Remote support access level.
     */
    accessLevel: pulumi.Input<string | enums.RemoteSupportAccessLevel>;
    /**
     * Deployment mode to trigger job.
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * Remote support expiration timestamp.
     */
    expirationTimestamp: pulumi.Input<string>;
    /**
     * Job Type supported.
     * Expected value is 'RemoteSupport'.
     */
    jobType: pulumi.Input<"RemoteSupport">;
    /**
     * Remote support type.
     */
    type: pulumi.Input<string | enums.RemoteSupportType>;
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
 * FrontendIP Configuration object for a load balancer.
 */
export interface FrontendIPConfigurationArgs {
    /**
     * name for the frontend IP configuration.
     */
    name: pulumi.Input<string>;
    /**
     * properties for this frontendIPConfiguration
     */
    properties: pulumi.Input<FrontendIPConfigurationPropertiesArgs>;
}

/**
 * FrontendIP Configuration object for a load balancer.
 */
export interface FrontendIPConfigurationPropertiesArgs {
    /**
     * Private IP Address that was allocated (dynamic) or is to be allocated (static) from the subnet.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * privateIPAllocationMethod - set to Static for requesting a specific IP
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.IpAllocationMethodEnum>;
    /**
     * Public IP 
     */
    publicIPAddress?: pulumi.Input<PublicIPAddressArmReferenceArgs>;
    /**
     * subnet - the subnet from which to allocate the private IP
     */
    subnet?: pulumi.Input<VirtualNetworkSubnetArmReferenceArgs>;
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
 * Represents the properties of an HCI Collect Log job.
 */
export interface HciCollectLogJobPropertiesArgs {
    /**
     * Deployment mode to trigger job.
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * From date for log collection.
     */
    fromDate: pulumi.Input<string>;
    /**
     * Job Type supported.
     * Expected value is 'CollectLog'.
     */
    jobType: pulumi.Input<"CollectLog">;
    /**
     * To date for log collection.
     */
    toDate: pulumi.Input<string>;
}

/**
 * Defines the customer's intent for updating confidential VM properties
 */
export interface HciConfigureCvmJobPropertiesArgs {
    /**
     * Defines the customer's intent for updating confidential VM properties
     */
    confidentialVmIntent: pulumi.Input<string | enums.ConfidentialVmIntent>;
    /**
     * Deployment mode to trigger job.
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * ClusterJob Type supported.
     * Expected value is 'ConfigureCVM'.
     */
    jobType: pulumi.Input<"ConfigureCVM">;
}
/**
 * hciConfigureCvmJobPropertiesArgsProvideDefaults sets the appropriate defaults for HciConfigureCvmJobPropertiesArgs
 */
export function hciConfigureCvmJobPropertiesArgsProvideDefaults(val: HciConfigureCvmJobPropertiesArgs): HciConfigureCvmJobPropertiesArgs {
    return {
        ...val,
        deploymentMode: (val.deploymentMode) ?? "Deploy",
    };
}

/**
 * Properties for configuring SDN integration intent for the cluster.
 */
export interface HciConfigureSdnIntegrationJobPropertiesArgs {
    /**
     * Deployment mode to trigger job.
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * ClusterJob Type supported.
     * Expected value is 'ConfigureSdnIntegration'.
     */
    jobType: pulumi.Input<"ConfigureSdnIntegration">;
    /**
     * Defines the customer's intent for configuring SDN integration
     */
    sdnIntegrationIntent: pulumi.Input<string | enums.SdnIntegrationIntent>;
    /**
     * A string identifier used to construct the Network Controller (NC) REST resource name. This prefix helps group and distinguish SDN-managed network components and must follow specific formatting rules.
     */
    sdnPrefix?: pulumi.Input<string>;
}
/**
 * hciConfigureSdnIntegrationJobPropertiesArgsProvideDefaults sets the appropriate defaults for HciConfigureSdnIntegrationJobPropertiesArgs
 */
export function hciConfigureSdnIntegrationJobPropertiesArgsProvideDefaults(val: HciConfigureSdnIntegrationJobPropertiesArgs): HciConfigureSdnIntegrationJobPropertiesArgs {
    return {
        ...val,
        deploymentMode: (val.deploymentMode) ?? "Deploy",
    };
}

/**
 * properties for Arc-enabled edge device with HCI OS.
 */
export interface HciEdgeDevicePropertiesArgs {
    /**
     * Device Configuration
     */
    deviceConfiguration?: pulumi.Input<DeviceConfigurationArgs>;
}

/**
 * Represents the properties of a remote support job for HCI.
 */
export interface HciRemoteSupportJobPropertiesArgs {
    /**
     * Remote support access level.
     */
    accessLevel: pulumi.Input<string | enums.RemoteSupportAccessLevel>;
    /**
     * Deployment mode to trigger job.
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * Remote support expiration timestamp.
     */
    expirationTimestamp: pulumi.Input<string>;
    /**
     * Job Type supported.
     * Expected value is 'RemoteSupport'.
     */
    jobType: pulumi.Input<"RemoteSupport">;
    /**
     * Remote support type.
     */
    type: pulumi.Input<string | enums.RemoteSupportType>;
}

/**
 * The HostNetwork of a cluster.
 */
export interface HostNetworkArgs {
    /**
     * Optional parameter required only for 3 Nodes Switchless deployments. This allows users to specify IPs and Mask for Storage NICs when Network ATC is not assigning the IPs for storage automatically.
     */
    enableStorageAutoIp?: pulumi.Input<boolean>;
    /**
     * The network intents assigned to the network reference pattern used for the deployment. Each intent will define its own name, traffic type, adapter names, and overrides as recommended by your OEM.
     */
    intents?: pulumi.Input<pulumi.Input<IntentsArgs>[]>;
    /**
     * Defines how the storage adapters between nodes are connected either switch or switch less..
     */
    storageConnectivitySwitchless?: pulumi.Input<boolean>;
    /**
     * List of StorageNetworks config to deploy AzureStackHCI Cluster.
     */
    storageNetworks?: pulumi.Input<pulumi.Input<StorageNetworksArgs>[]>;
}
/**
 * hostNetworkArgsProvideDefaults sets the appropriate defaults for HostNetworkArgs
 */
export function hostNetworkArgsProvideDefaults(val: HostNetworkArgs): HostNetworkArgs {
    return {
        ...val,
        enableStorageAutoIp: (val.enableStorageAutoIp) ?? false,
        storageConnectivitySwitchless: (val.storageConnectivitySwitchless) ?? false,
    };
}

/**
 * HTTP Proxy configuration for the VM.
 */
export interface HttpProxyConfigurationArgs {
    /**
     * The HTTP proxy server endpoint to use.
     */
    httpProxy?: pulumi.Input<string>;
    /**
     * The HTTPS proxy server endpoint to use.
     */
    httpsProxy?: pulumi.Input<string>;
    /**
     * The endpoints that should not go through proxy.
     */
    noProxy?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Alternative CA cert to use for connecting to proxy servers.
     */
    trustedCa?: pulumi.Input<string>;
}

/**
 * InterfaceIPConfiguration IPConfiguration in a network interface.
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
 * The Azure Resource ID of an IPConfiguration resource
 */
export interface IPConfigurationArmReferenceArgs {
    /**
     * The Azure Resource ID of an IPConfiguration resource
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * InterfaceIPConfigurationPropertiesFormat properties of IP configuration.
 */
export interface IPConfigurationPropertiesArgs {
    /**
     * PrivateIPAddress - Private IP address of the IP configuration.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * Subnet - Name of Subnet bound to the IP configuration.
     */
    subnet?: pulumi.Input<LogicalNetworkArmReferenceArgs>;
}

/**
 * Describes IPPool
 */
export interface IPPoolArgs {
    /**
     * End of the IP address pool
     */
    end?: pulumi.Input<string>;
    /**
     * Type of the IP Pool [vm, vippool]
     */
    ipPoolType?: pulumi.Input<string | enums.IPPoolTypeEnum>;
    /**
     * Name of the IP-Pool
     */
    name?: pulumi.Input<string>;
    /**
     * Start of the IP address pool
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

/**
 * The Azure Resource ID for a Gallery Image.
 */
export interface ImageArmReferenceArgs {
    /**
     * The Azure Resource ID for an image resource used by the virtual machine instance.
     */
    id?: pulumi.Input<string>;
}

/**
 * Inbound nat rule properties
 */
export interface InboundNATRuleArgs {
    /**
     * name of the inbound nat rule
     */
    name: pulumi.Input<string>;
    /**
     * properties of the inbound nat rule
     */
    properties: pulumi.Input<InboundNATRulePropertiesArgs>;
}

/**
 * Inbound nat rule properties
 */
export interface InboundNATRulePropertiesArgs {
    /**
     * IP configuration for the target backend.
     */
    backendIPConfiguration: pulumi.Input<IPConfigurationArmReferenceArgs>;
    /**
     * backend Port for the inbound rule
     */
    backendPort: pulumi.Input<number>;
    /**
     * Frontend Port for the inbound rule
     */
    frontendPort: pulumi.Input<number>;
    /**
     * Protocol for the NAT rule
     */
    protocol: pulumi.Input<string | enums.InboundNATRuleProtocol>;
    /**
     * Public IP Address for this NAT rule
     */
    publicIPAddress: pulumi.Input<PublicIPAddressArmReferenceArgs>;
}

/**
 * Inbound rule properties - extends InboundNATRuleProperties with additional status tracking
 */
export interface InboundRulePropertiesArgs {
    /**
     * IP configuration for the target backend.
     */
    backendIPConfiguration: pulumi.Input<IPConfigurationArmReferenceArgs>;
    /**
     * backend Port for the inbound rule
     */
    backendPort: pulumi.Input<number>;
    /**
     * Frontend Port for the inbound rule
     */
    frontendPort: pulumi.Input<number>;
    /**
     * Protocol for the NAT rule
     */
    protocol: pulumi.Input<string | enums.InboundNATRuleProtocol>;
    /**
     * Public IP Address for this NAT rule
     */
    publicIPAddress: pulumi.Input<PublicIPAddressArmReferenceArgs>;
}

/**
 * The InfrastructureNetwork of a AzureStackHCI Cluster.
 */
export interface InfrastructureNetworkArgs {
    /**
     * IPv4 address of the DNS servers in your environment.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Default gateway that should be used for the provided IP address space.
     */
    gateway?: pulumi.Input<string>;
    /**
     * Range of IP addresses from which addresses are allocated for nodes within a subnet.
     */
    ipPools?: pulumi.Input<pulumi.Input<IpPoolsArgs>[]>;
    /**
     * Subnet mask that matches the provided IP address space.
     */
    subnetMask?: pulumi.Input<string>;
    /**
     * Allows customers to use DHCP for Hosts and Cluster IPs. If not declared, the deployment will default to static IPs. When true, GW and DNS servers are not required
     */
    useDhcp?: pulumi.Input<boolean>;
}

/**
 * The Intents of a cluster.
 */
export interface IntentsArgs {
    /**
     * Array of network interfaces used for the network intent.
     */
    adapter?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set Adapter PropertyOverrides for cluster.
     */
    adapterPropertyOverrides?: pulumi.Input<AdapterPropertyOverridesArgs>;
    /**
     * Name of the network intent you wish to create.
     */
    name?: pulumi.Input<string>;
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
     */
    overrideAdapterProperty?: pulumi.Input<boolean>;
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
     */
    overrideQosPolicy?: pulumi.Input<boolean>;
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
     */
    overrideVirtualSwitchConfiguration?: pulumi.Input<boolean>;
    /**
     * Set QoS PolicyOverrides for cluster.
     */
    qosPolicyOverrides?: pulumi.Input<QosPolicyOverridesArgs>;
    /**
     * List of network traffic types. Only allowed values are 'Compute', 'Storage', 'Management'.
     */
    trafficType?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set virtualSwitch ConfigurationOverrides for cluster.
     */
    virtualSwitchConfigurationOverrides?: pulumi.Input<VirtualSwitchConfigurationOverridesArgs>;
}
/**
 * intentsArgsProvideDefaults sets the appropriate defaults for IntentsArgs
 */
export function intentsArgsProvideDefaults(val: IntentsArgs): IntentsArgs {
    return {
        ...val,
        overrideAdapterProperty: (val.overrideAdapterProperty) ?? false,
        overrideQosPolicy: (val.overrideQosPolicy) ?? false,
        overrideVirtualSwitchConfiguration: (val.overrideVirtualSwitchConfiguration) ?? false,
    };
}

/**
 * DNS Settings of the interface
 */
export interface InterfaceDNSSettingsArgs {
    /**
     * List of DNS server IP Addresses for the interface
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * IP address range configuration.
 */
export interface IpAddressRangeArgs {
    /**
     * End IP address.
     */
    endIp: pulumi.Input<string>;
    /**
     * Start IP address.
     */
    startIp: pulumi.Input<string>;
}

/**
 * The dnsServers of a device.
 */
export interface IpPoolsArgs {
    /**
     * Ending IP address for the management network. A minimum of six free, contiguous IPv4 addresses (excluding your host IPs) are needed for infrastructure services such as clustering.
     */
    endingAddress?: pulumi.Input<string>;
    /**
     * Starting IP address for the management network. A minimum of six free, contiguous IPv4 addresses (excluding your host IPs) are needed for infrastructure services such as clustering.
     */
    startingAddress?: pulumi.Input<string>;
}

/**
 * LoadBalancer Backend Address
 */
export interface LoadBalancerBackendAddressArgs {
    /**
     * name of the backend address
     */
    name: pulumi.Input<string>;
    /**
     * backend address properties
     */
    properties: pulumi.Input<LoadBalancerBackendAddressPropertiesArgs>;
}

/**
 * Reference to a LoadBalancer backend address pool reference
 */
export interface LoadBalancerBackendAddressPoolReferenceArgs {
    /**
     * name of the backend address pool
     */
    name: pulumi.Input<string>;
}

/**
 * LoadBalancer Backend Address properties
 */
export interface LoadBalancerBackendAddressPropertiesArgs {
    /**
     * admin state - if set to false, the address is removed from the pool
     */
    adminState?: pulumi.Input<string | enums.LoadBalancerBackendAddressAdminState>;
    /**
     * Nic Based backend-ip association
     */
    networkInterfaceIPConfiguration?: pulumi.Input<IPConfigurationArmReferenceArgs>;
}

/**
 * Reference to a LoadBalancer Frontend IPConfiguration
 */
export interface LoadBalancerFrontendIPConfigurationReferenceArgs {
    /**
     * name of the frontnedIPConfiguration
     */
    name: pulumi.Input<string>;
}

/**
 * Reference to a LoadBalancer health probe
 */
export interface LoadBalancerProbeReferenceArgs {
    /**
     * name of the health probe
     */
    name: pulumi.Input<string>;
}

/**
 * Load Balancer resource properties
 */
export interface LoadBalancerPropertiesArgs {
    /**
     * backendAddressPools for the loadbalancer
     */
    backendAddressPools?: pulumi.Input<pulumi.Input<BackendAddressPoolArgs>[]>;
    /**
     * Frontend IPs for the loadbalancer.
     */
    frontendIPConfigurations: pulumi.Input<pulumi.Input<FrontendIPConfigurationArgs>[]>;
    /**
     * load balancer rules
     */
    loadBalancingRules?: pulumi.Input<pulumi.Input<LoadBalancerRuleArgs>[]>;
    /**
     * load balancer health probes
     */
    probes?: pulumi.Input<pulumi.Input<ProbeArgs>[]>;
}

/**
 * LoadBalancer Rules
 */
export interface LoadBalancerRuleArgs {
    /**
     * name of the load balancer rule
     */
    name: pulumi.Input<string>;
    /**
     * load balancer rule properties
     */
    properties: pulumi.Input<LoadBalancerRulePropertiesArgs>;
}
/**
 * loadBalancerRuleArgsProvideDefaults sets the appropriate defaults for LoadBalancerRuleArgs
 */
export function loadBalancerRuleArgsProvideDefaults(val: LoadBalancerRuleArgs): LoadBalancerRuleArgs {
    return {
        ...val,
        properties: pulumi.output(val.properties).apply(loadBalancerRulePropertiesArgsProvideDefaults),
    };
}

/**
 * Properties for LoadBalancerRules
 */
export interface LoadBalancerRulePropertiesArgs {
    /**
     * arm reference to backend pool being used by ths pool
     */
    backendAddressPool: pulumi.Input<LoadBalancerBackendAddressPoolReferenceArgs>;
    /**
     * backendPort to forward connections
     */
    backendPort: pulumi.Input<number>;
    /**
     * arm reference to frontend IP being used by this LB
     */
    frontendIPConfiguration: pulumi.Input<LoadBalancerFrontendIPConfigurationReferenceArgs>;
    /**
     * Frontend port to accept connections
     */
    frontendPort: pulumi.Input<number>;
    /**
     * Time for which connections are preserved before being torn down.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * SessionPersistence: Default (5-tuple), SourceIP(2-tuple), sourceIPProtocol(3-tuple)
     */
    loadDistribution?: pulumi.Input<string | enums.LoadBalancerRuleSessionPersistenceType>;
    /**
     * Reference for the health probe for this connection
     */
    probe?: pulumi.Input<LoadBalancerProbeReferenceArgs>;
    /**
     * IP Protocol that the rule must load-balance
     */
    protocol: pulumi.Input<string | enums.LoadBalancerRuleTransportProtocol>;
}
/**
 * loadBalancerRulePropertiesArgsProvideDefaults sets the appropriate defaults for LoadBalancerRulePropertiesArgs
 */
export function loadBalancerRulePropertiesArgsProvideDefaults(val: LoadBalancerRulePropertiesArgs): LoadBalancerRulePropertiesArgs {
    return {
        ...val,
        loadDistribution: (val.loadDistribution) ?? "Default",
    };
}

/**
 * The Azure Resource ID for a Logical Network.
 */
export interface LogicalNetworkArmReferenceArgs {
    /**
     * The Azure Resource ID for a Logical Network.
     */
    id?: pulumi.Input<string>;
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
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The ARM ID for a Network Security Group.
 */
export interface NatGatewayArmReferenceArgs {
    /**
     * The ARM ID for a Network Security Group.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Nat Gateway resource properties
 */
export interface NatGatewayPropertiesArgs {
    /**
     * List of inbound NAT rules. InboundNATRules can only be set after the NAT Gateway has been associated with a vnet. Removed in 2026-04-01-preview; use InboundRule Child resource instead.
     */
    inboundNATRules?: pulumi.Input<pulumi.Input<InboundNATRuleArgs>[]>;
    /**
     * List of public ip addresses that the gateway can use for NAT.
     */
    publicIPAddresses?: pulumi.Input<pulumi.Input<PublicIPAddressArmReferenceArgs>[]>;
}

/**
 * Network adapter configuration.
 */
export interface NetworkAdapterArgs {
    /**
     * Adapter Name.
     */
    adapterName?: pulumi.Input<string>;
    /**
     * Array of DNS addresses.
     */
    dnsAddressArray?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gateway id.
     */
    gateway?: pulumi.Input<string>;
    /**
     * IP address.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * IP address range.
     */
    ipAddressRange?: pulumi.Input<IpAddressRangeArgs>;
    /**
     * Type of IP assignment.
     */
    ipAssignmentType: pulumi.Input<string | enums.IpAssignmentType>;
    /**
     * MAC address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Subnet mask.
     */
    subnetMask?: pulumi.Input<string>;
    /**
     * VLAN ID for the network setup.
     */
    vlanId?: pulumi.Input<string>;
}

/**
 * Network configuration.
 */
export interface NetworkConfigurationArgs {
    /**
     * List of network adapters.
     */
    networkAdapters?: pulumi.Input<pulumi.Input<NetworkAdapterArgs>[]>;
}

/**
 * network controller config for SDN Integration to deploy AzureStackHCI Cluster.
 */
export interface NetworkControllerArgs {
    /**
     * macAddressPoolStart of network controller used for SDN Integration.
     */
    macAddressPoolStart?: pulumi.Input<string>;
    /**
     * macAddressPoolStop of network controller used for SDN Integration.
     */
    macAddressPoolStop?: pulumi.Input<string>;
    /**
     * NetworkVirtualizationEnabled of network controller used for SDN Integration.
     */
    networkVirtualizationEnabled?: pulumi.Input<boolean>;
}

/**
 * The Azure Resource ID for a Network Interface.
 */
export interface NetworkInterfaceArmReferenceArgs {
    /**
     * The Azure Resource ID for a Network Interface.
     */
    id?: pulumi.Input<string>;
}

/**
 * The Azure Resource ID for a Network Security Group.
 */
export interface NetworkSecurityGroupArmReferenceArgs {
    /**
     * The Azure Resource ID for a Network Security Group.
     */
    id?: pulumi.Input<string>;
}

/**
 * The NIC Detail of a device.
 */
export interface NicDetailArgs {
    /**
     * Adapter Name of NIC
     */
    adapterName?: pulumi.Input<string>;
    /**
     * Component Id of NIC
     */
    componentId?: pulumi.Input<string>;
    /**
     * Default Gateway of NIC
     */
    defaultGateway?: pulumi.Input<string>;
    /**
     * Default Isolation of Management NIC
     */
    defaultIsolationId?: pulumi.Input<string>;
    /**
     * DNS Servers for NIC
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Driver Version of NIC
     */
    driverVersion?: pulumi.Input<string>;
    /**
     * Interface Description of NIC
     */
    interfaceDescription?: pulumi.Input<string>;
    /**
     * Subnet Mask of NIC
     */
    ip4Address?: pulumi.Input<string>;
    /**
     * Subnet Mask of NIC
     */
    subnetMask?: pulumi.Input<string>;
}

/**
 * The Observability of AzureStackHCI Cluster.
 */
export interface ObservabilityArgs {
    /**
     * When set to true, collects log data to facilitate quicker issue resolution.
     */
    episodicDataUpload?: pulumi.Input<boolean>;
    /**
     * Location of your cluster. The log and diagnostic data is sent to the appropriate diagnostics servers depending upon where your cluster resides. Setting this to false results in all data sent to Microsoft to be stored outside of the EU.
     */
    euLocation?: pulumi.Input<boolean>;
    /**
     * Enables telemetry data to be sent to Microsoft
     */
    streamingDataClient?: pulumi.Input<boolean>;
}
/**
 * observabilityArgsProvideDefaults sets the appropriate defaults for ObservabilityArgs
 */
export function observabilityArgsProvideDefaults(val: ObservabilityArgs): ObservabilityArgs {
    return {
        ...val,
        episodicDataUpload: (val.episodicDataUpload) ?? true,
        euLocation: (val.euLocation) ?? false,
        streamingDataClient: (val.streamingDataClient) ?? true,
    };
}

/**
 * Onboarding configuration.
 */
export interface OnboardingConfigurationArgs {
    /**
     * Azure Arc virtual machine ID.
     */
    arcVirtualMachineId?: pulumi.Input<string>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * Tenant ID of the resource.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Type of the onboarding resource to support polymorphic resource.
     */
    type?: pulumi.Input<string | enums.OnboardingResourceType>;
}

/**
 * The OptionalServices of AzureStackHCI Cluster.
 */
export interface OptionalServicesArgs {
    /**
     * The name of custom location.
     */
    customLocation?: pulumi.Input<string>;
}

/**
 * Operating system profile.
 */
export interface OsProvisionProfileArgs {
    /**
     * GPG Public Key used for package verification
     */
    gpgPubKey?: pulumi.Input<string>;
    /**
     * Hash of the OS package downloaded
     */
    imageHash?: pulumi.Input<string>;
    /**
     * Operation sub type of OS Provisioning
     */
    operationType?: pulumi.Input<string | enums.OSOperationType>;
    /**
     * Location of the operating system image.
     */
    osImageLocation?: pulumi.Input<string>;
    /**
     * Name of the operating system.
     */
    osName?: pulumi.Input<string>;
    /**
     * Type of the operating system.
     */
    osType?: pulumi.Input<string>;
    /**
     * Version of the operating system.
     */
    osVersion?: pulumi.Input<string>;
    /**
     * Validated Solution Recipe version to be used for the job
     */
    vsrVersion?: pulumi.Input<string>;
}
/**
 * osProvisionProfileArgsProvideDefaults sets the appropriate defaults for OsProvisionProfileArgs
 */
export function osProvisionProfileArgsProvideDefaults(val: OsProvisionProfileArgs): OsProvisionProfileArgs {
    return {
        ...val,
        operationType: (val.operationType) ?? "Provision",
    };
}

/**
 * Details for ownership voucher.
 */
export interface OwnershipVoucherDetailsArgs {
    /**
     * Owner key type
     */
    ownerKeyType: pulumi.Input<string | enums.OwnerKeyType>;
    /**
     * Ownership voucher in base64 encoded format
     */
    ownershipVoucher: pulumi.Input<string>;
}

/**
 * The PhysicalNodes of a cluster.
 */
export interface PhysicalNodesArgs {
    /**
     * The IPv4 address assigned to each physical server on your Azure Stack HCI cluster.
     */
    ipv4Address?: pulumi.Input<string>;
    /**
     * NETBIOS name of each physical server on your Azure Stack HCI cluster.
     */
    name?: pulumi.Input<string>;
}

/**
 * Load balancer health probes
 */
export interface ProbeArgs {
    /**
     * name of the load balancer health probe
     */
    name: pulumi.Input<string>;
    /**
     * load balancer rule properties
     */
    properties: pulumi.Input<ProbePropertiesArgs>;
}
/**
 * probeArgsProvideDefaults sets the appropriate defaults for ProbeArgs
 */
export function probeArgsProvideDefaults(val: ProbeArgs): ProbeArgs {
    return {
        ...val,
        properties: pulumi.output(val.properties).apply(probePropertiesArgsProvideDefaults),
    };
}

/**
 * properties for LoadBalancer health probes
 */
export interface ProbePropertiesArgs {
    /**
     * Probe interval in seconds (5-300) default 15
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * number of consecutive probe failures before marking unhealthy (1-20) default 2
     */
    numberOfProbes?: pulumi.Input<number>;
    /**
     * Port on the backend address to probe
     */
    port: pulumi.Input<number>;
    /**
     * Protocol for this probe: Can be Tcp or Http - Diverges from Azure where Https is also an option
     */
    protocol: pulumi.Input<string | enums.LoadBalancerProbeProtocol>;
    /**
     * For http probes, specify the request path e.g. /health
     */
    requestPath?: pulumi.Input<string>;
}
/**
 * probePropertiesArgsProvideDefaults sets the appropriate defaults for ProbePropertiesArgs
 */
export function probePropertiesArgsProvideDefaults(val: ProbePropertiesArgs): ProbePropertiesArgs {
    return {
        ...val,
        intervalInSeconds: (val.intervalInSeconds) ?? 15,
        numberOfProbes: (val.numberOfProbes) ?? 2,
    };
}

/**
 * Represents the properties of an Azure Linux restricted operating environment Provision Os job.
 */
export interface ProvisionOsJobPropertiesArgs {
    /**
     * Deployment mode to trigger job.
     */
    deploymentMode?: pulumi.Input<string | enums.DeploymentMode>;
    /**
     * Job Type supported.
     * Expected value is 'ProvisionOs'.
     */
    jobType: pulumi.Input<"ProvisionOs">;
    /**
     * Os Provisioning request.
     */
    provisioningRequest: pulumi.Input<ProvisioningRequestArgs>;
}
/**
 * provisionOsJobPropertiesArgsProvideDefaults sets the appropriate defaults for ProvisionOsJobPropertiesArgs
 */
export function provisionOsJobPropertiesArgsProvideDefaults(val: ProvisionOsJobPropertiesArgs): ProvisionOsJobPropertiesArgs {
    return {
        ...val,
        provisioningRequest: pulumi.output(val.provisioningRequest).apply(provisioningRequestArgsProvideDefaults),
    };
}

/**
 * Details for device provisioning.
 */
export interface ProvisioningDetailsArgs {
    /**
     * Operating system profile.
     */
    osProfile: pulumi.Input<OsProvisionProfileArgs>;
    /**
     * User configuration.
     */
    userDetails?: pulumi.Input<pulumi.Input<UserDetailsArgs>[]>;
}
/**
 * provisioningDetailsArgsProvideDefaults sets the appropriate defaults for ProvisioningDetailsArgs
 */
export function provisioningDetailsArgsProvideDefaults(val: ProvisioningDetailsArgs): ProvisioningDetailsArgs {
    return {
        ...val,
        osProfile: pulumi.output(val.osProfile).apply(osProvisionProfileArgsProvideDefaults),
    };
}

/**
 * Represents a provisioning request.
 */
export interface ProvisioningRequestArgs {
    /**
     * Base64 encoded custom configuration for CAPI to use
     */
    customConfiguration?: pulumi.Input<string>;
    /**
     * Device configuration.
     */
    deviceConfiguration?: pulumi.Input<TargetDeviceConfigurationArgs>;
    /**
     * Onboarding configuration.
     */
    onboardingConfiguration?: pulumi.Input<OnboardingConfigurationArgs>;
    /**
     * Operating system profile.
     */
    osProfile: pulumi.Input<OsProvisionProfileArgs>;
    /**
     * Target operating system to support polymorphic resource.
     */
    target: pulumi.Input<string | enums.ProvisioningOsType>;
    /**
     * User configuration.
     */
    userDetails?: pulumi.Input<pulumi.Input<UserDetailsArgs>[]>;
}
/**
 * provisioningRequestArgsProvideDefaults sets the appropriate defaults for ProvisioningRequestArgs
 */
export function provisioningRequestArgsProvideDefaults(val: ProvisioningRequestArgs): ProvisioningRequestArgs {
    return {
        ...val,
        osProfile: pulumi.output(val.osProfile).apply(osProvisionProfileArgsProvideDefaults),
    };
}

/**
 * The Azure Resource ID of a Public IP resource
 */
export interface PublicIPAddressArmReferenceArgs {
    /**
     * The Azure Resource ID of a Public IP resource
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Public IP Properties resource.
 */
export interface PublicIPAddressPropertiesArgs {
    /**
     * IP Address. This is static. If the user specifies, we allocate that otherwise allocate from logical network address space.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * ipAllocationScope: Azure Reference to a particular IP Pool (ALM) or a LogicalNetwork (ALL) for allocating public IP
     */
    ipAllocationScope?: pulumi.Input<string>;
    /**
     * Whether the public IP is v4 or v6. Defaults to IPv4
     */
    publicIPAddressVersion?: pulumi.Input<string | enums.PublicIPAddressType>;
}

/**
 * The QoSPolicyOverrides of a cluster.
 */
export interface QosPolicyOverridesArgs {
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
     */
    bandwidthPercentageSMB?: pulumi.Input<string>;
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
     */
    priorityValue8021ActionCluster?: pulumi.Input<string>;
    /**
     * This parameter should only be modified based on your OEM guidance. Do not modify this parameter without OEM validation.
     */
    priorityValue8021ActionSMB?: pulumi.Input<string>;
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
 * secrets used for solution builder extension (SBE) partner extensibility.
 */
export interface SbeCredentialsArgs {
    /**
     * secret name expected for Enterprise Cloud Engine (ECE).
     */
    eceSecretName?: pulumi.Input<string>;
    /**
     * secret URI stored in keyvault.
     */
    secretLocation?: pulumi.Input<string>;
    /**
     * secret name stored in keyvault.
     */
    secretName?: pulumi.Input<string>;
}

/**
 * Solution builder extension (SBE) package and manifest information for the solution builder extension staged for AzureStackHCI cluster deployment.
 */
export interface SbeDeploymentInfoArgs {
    /**
     * SBE family name.
     */
    family?: pulumi.Input<string>;
    /**
     * SBE manifest publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * SBE Manifest Creation Date.
     */
    sbeManifestCreationDate?: pulumi.Input<string>;
    /**
     * SBE Manifest Source.
     */
    sbeManifestSource?: pulumi.Input<string>;
    /**
     * SBE package version.
     */
    version?: pulumi.Input<string>;
}

/**
 * The solution builder extension (SBE) partner deployment info for cluster.
 */
export interface SbePartnerInfoArgs {
    /**
     * SBE credentials list for AzureStackHCI cluster deployment.
     */
    credentialList?: pulumi.Input<pulumi.Input<SbeCredentialsArgs>[]>;
    /**
     * List of SBE partner properties for AzureStackHCI cluster deployment.
     */
    partnerProperties?: pulumi.Input<pulumi.Input<SbePartnerPropertiesArgs>[]>;
    /**
     * SBE package and manifest information for the solution Builder Extension staged for AzureStackHCI cluster deployment.
     */
    sbeDeploymentInfo?: pulumi.Input<SbeDeploymentInfoArgs>;
}

/**
 * Solution builder extension (SBE) partner properties object.
 */
export interface SbePartnerPropertiesArgs {
    /**
     * SBE partner property name.
     */
    name?: pulumi.Input<string>;
    /**
     * SBE partner property value.
     */
    value?: pulumi.Input<string>;
}

/**
 * Scale units will contains list of deployment data
 */
export interface ScaleUnitsArgs {
    /**
     * Deployment Data to deploy AzureStackHCI Cluster.
     */
    deploymentData: pulumi.Input<DeploymentDataArgs>;
    /**
     * Solution builder extension (SBE) partner properties
     */
    sbePartnerInfo?: pulumi.Input<SbePartnerInfoArgs>;
}
/**
 * scaleUnitsArgsProvideDefaults sets the appropriate defaults for ScaleUnitsArgs
 */
export function scaleUnitsArgsProvideDefaults(val: ScaleUnitsArgs): ScaleUnitsArgs {
    return {
        ...val,
        deploymentData: pulumi.output(val.deploymentData).apply(deploymentDataArgsProvideDefaults),
    };
}

/**
 * SDN Integration config to deploy AzureStackHCI Cluster.
 */
export interface SdnIntegrationArgs {
    /**
     * network controller config for SDN Integration to deploy AzureStackHCI Cluster.
     */
    networkController?: pulumi.Input<NetworkControllerArgs>;
}

/**
 * Service configuration details
 */
export interface ServiceConfigurationArgs {
    /**
     * The port on which service is enabled.
     */
    port: pulumi.Input<number>;
    /**
     * Name of the service.
     */
    serviceName: pulumi.Input<string | enums.ServiceName>;
}

/**
 * Site Details consists of common configurations.
 */
export interface SiteDetailsArgs {
    /**
     * Edge Device configuration received from site common configuration.
     */
    deviceConfiguration?: pulumi.Input<TargetDeviceConfigurationArgs>;
    /**
     * Site resource Id to be set during Edge Machine resource creation.
     */
    siteResourceId: pulumi.Input<string>;
}

/**
 * Properties under the snapshot resource
 */
export interface SnapshotPropertiesArgs {
    /**
     * Data used when creating a snapshot
     */
    creationData?: pulumi.Input<CreationDataArgs>;
}

/**
 * Software Assurance properties of the cluster.
 */
export interface SoftwareAssurancePropertiesArgs {
    /**
     * Customer Intent for Software Assurance Benefit.
     */
    softwareAssuranceIntent?: pulumi.Input<string | enums.SoftwareAssuranceIntent>;
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
     * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://learn.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
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
     * Expected execution time of a given step. This is optionally authored in the update action plan and can be empty.
     */
    expectedExecutionTime?: pulumi.Input<string>;
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

/**
 * The Storage config of AzureStackHCI Cluster.
 */
export interface StorageArgs {
    /**
     * By default, this mode is set to Express and your storage is configured as per best practices based on the number of nodes in the cluster. Allowed values are 'Express','InfraOnly', 'KeepStorage'
     */
    configurationMode?: pulumi.Input<string>;
}
/**
 * storageArgsProvideDefaults sets the appropriate defaults for StorageArgs
 */
export function storageArgsProvideDefaults(val: StorageArgs): StorageArgs {
    return {
        ...val,
        configurationMode: (val.configurationMode) ?? "Express",
    };
}

/**
 * The StorageAdapter physical nodes of a cluster.
 */
export interface StorageAdapterIPInfoArgs {
    /**
     * The IPv4 address assigned to each storage adapter physical node on your Azure Stack HCI cluster.
     */
    ipv4Address?: pulumi.Input<string>;
    /**
     * storage adapter physical node name.
     */
    physicalNode?: pulumi.Input<string>;
    /**
     * The SubnetMask address assigned to each storage adapter physical node on your Azure Stack HCI cluster.
     */
    subnetMask?: pulumi.Input<string>;
}

/**
 * Storage configuration.
 */
export interface StorageConfigurationArgs {
    /**
     * Partition size.
     */
    partitionSize?: pulumi.Input<string>;
}

/**
 * The StorageNetworks of a cluster.
 */
export interface StorageNetworksArgs {
    /**
     * Name of the storage network.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the storage network adapter.
     */
    networkAdapterName?: pulumi.Input<string>;
    /**
     * List of Storage adapter physical nodes config to deploy AzureStackHCI Cluster.
     */
    storageAdapterIPInfo?: pulumi.Input<pulumi.Input<StorageAdapterIPInfoArgs>[]>;
    /**
     * ID specified for the VLAN storage network. This setting is applied to the network interfaces that route the storage and VM migration traffic. 
     */
    vlanId?: pulumi.Input<string>;
}

/**
 * Properties of the subnet.
 */
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
    ipConfigurationReferences?: pulumi.Input<pulumi.Input<SubnetIpConfigurationReferenceArgs>[]>;
    /**
     * network associated pool of IP Addresses
     */
    ipPools?: pulumi.Input<pulumi.Input<IPPoolArgs>[]>;
    /**
     * Name - The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * NetworkSecurityGroup - Network Security Group attached to the logical network.
     */
    networkSecurityGroup?: pulumi.Input<NetworkSecurityGroupArmReferenceArgs>;
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
 * The Azure Resource ID for a Network Interface.
 */
export interface SubnetIpConfigurationReferenceArgs {
    /**
     * The Azure Resource ID for a Network Interface.
     */
    id?: pulumi.Input<string>;
}

/**
 * Device configuration.
 */
export interface TargetDeviceConfigurationArgs {
    /**
     * Hostname of the device.
     */
    hostName?: pulumi.Input<string>;
    /**
     * Network configuration.
     */
    network?: pulumi.Input<NetworkConfigurationArgs>;
    /**
     * Storage configuration.
     */
    storage?: pulumi.Input<StorageConfigurationArgs>;
    /**
     * Time configuration.
     */
    time?: pulumi.Input<TimeConfigurationArgs>;
    /**
     * Web proxy configuration.
     */
    webProxy?: pulumi.Input<WebProxyConfigurationArgs>;
}

/**
 * Time configuration.
 */
export interface TimeConfigurationArgs {
    /**
     * Primary NTP server.
     */
    primaryTimeServer?: pulumi.Input<string>;
    /**
     * Secondary NTP server.
     */
    secondaryTimeServer?: pulumi.Input<string>;
    /**
     * Time zone.
     */
    timeZone?: pulumi.Input<string>;
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

/**
 * User configuration.
 */
export interface UserDetailsArgs {
    /**
     * Location of the secret used for authentication.
     */
    secretLocation?: pulumi.Input<string>;
    /**
     * Type of the secret used for authentication.
     */
    secretType: pulumi.Input<string | enums.SecretType>;
    /**
     * SSH Public Key for the user.
     */
    sshPubKey?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the user.
     */
    userName: pulumi.Input<string>;
}

/**
 * Specifies the security profile settings for the managed disk. NOTE: It can only be set for Confidential VMs
 */
export interface VMDiskSecurityProfileArgs {
    /**
     * Specifies the EncryptionType of the managed disk. It is set to NonPersistedTPM for not persisting firmware state in the VMGuestState blob. NOTE: It can be set for only Confidential VMs.
     */
    securityEncryptionType?: pulumi.Input<string | enums.SecurityEncryptionType>;
}

/**
 * The Azure Resource ID for a Virtual Hard Disk.
 */
export interface VirtualHardDiskArmReferenceArgs {
    /**
     * The Azure Resource ID for a Virtual Hard Disk.
     */
    id?: pulumi.Input<string>;
}

/**
 * The parameters of a managed disk.
 */
export interface VirtualMachineInstanceManagedDiskParametersArgs {
    /**
     * Specifies the security profile for the managed disk.
     */
    securityProfile?: pulumi.Input<VMDiskSecurityProfileArgs>;
}

/**
 * HardwareProfile - Specifies the hardware settings for the virtual machine instance.
 */
export interface VirtualMachineInstancePropertiesHardwareProfileArgs {
    /**
     * Dynamic memory config
     */
    dynamicMemoryConfig?: pulumi.Input<VirtualMachineInstancePropertiesHardwareProfileDynamicMemoryConfigArgs>;
    /**
     * RAM in MB for the virtual machine instance
     */
    memoryMB?: pulumi.Input<number>;
    /**
     * number of processors for the virtual machine instance
     */
    processors?: pulumi.Input<number>;
    /**
     * virtualMachineGPUs - list of gpus to be attached to the virtual machine instance
     */
    virtualMachineGPUs?: pulumi.Input<pulumi.Input<VirtualMachineInstancePropertiesHardwareProfileVirtualMachineGPUArgs>[]>;
    /**
     * Enum of VM Sizes
     */
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
 * Dynamic memory config
 */
export interface VirtualMachineInstancePropertiesHardwareProfileDynamicMemoryConfigArgs {
    /**
     * Maximum memory in MB
     */
    maximumMemoryMB?: pulumi.Input<number>;
    /**
     * Minimum memory in MB
     */
    minimumMemoryMB?: pulumi.Input<number>;
    /**
     * Defines the amount of extra memory that should be reserved for a virtual machine instance at runtime, as a percentage of the total memory that the virtual machine instance is thought to need. This only applies to virtual systems with dynamic memory enabled. This property can be in the range of 5 to 2000.
     */
    targetMemoryBuffer?: pulumi.Input<number>;
}

/**
 * GPU properties - describes the GPU configuration.
 */
export interface VirtualMachineInstancePropertiesHardwareProfileVirtualMachineGPUArgs {
    /**
     * GPU assignment type
     */
    assignmentType: pulumi.Input<string | enums.GpuAssignmentTypeEnum>;
    /**
     * Name of the GPU
     */
    gpuName?: pulumi.Input<string>;
    /**
     * Size of gpu partition in MB for GPU-P
     */
    partitionSizeMB?: pulumi.Input<number>;
}

/**
 * NetworkProfile - describes the network configuration the virtual machine instance
 */
export interface VirtualMachineInstancePropertiesNetworkProfileArgs {
    /**
     * NetworkInterfaces - list of network interfaces to be attached to the virtual machine instance
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceArmReferenceArgs>[]>;
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
    linuxConfiguration?: pulumi.Input<VirtualMachineInstancePropertiesOsProfileLinuxConfigurationArgs>;
    /**
     * Windows Configuration for the virtual machine instance
     */
    windowsConfiguration?: pulumi.Input<VirtualMachineInstancePropertiesOsProfileWindowsConfigurationArgs>;
}
/**
 * virtualMachineInstancePropertiesOsProfileArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesOsProfileArgs
 */
export function virtualMachineInstancePropertiesOsProfileArgsProvideDefaults(val: VirtualMachineInstancePropertiesOsProfileArgs): VirtualMachineInstancePropertiesOsProfileArgs {
    return {
        ...val,
        linuxConfiguration: (val.linuxConfiguration ? pulumi.output(val.linuxConfiguration).apply(virtualMachineInstancePropertiesOsProfileLinuxConfigurationArgsProvideDefaults) : undefined),
        windowsConfiguration: (val.windowsConfiguration ? pulumi.output(val.windowsConfiguration).apply(virtualMachineInstancePropertiesOsProfileWindowsConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * LinuxConfiguration - linux specific configuration values for the virtual machine instance
 */
export interface VirtualMachineInstancePropertiesOsProfileLinuxConfigurationArgs {
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
 * virtualMachineInstancePropertiesOsProfileLinuxConfigurationArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesOsProfileLinuxConfigurationArgs
 */
export function virtualMachineInstancePropertiesOsProfileLinuxConfigurationArgsProvideDefaults(val: VirtualMachineInstancePropertiesOsProfileLinuxConfigurationArgs): VirtualMachineInstancePropertiesOsProfileLinuxConfigurationArgs {
    return {
        ...val,
        provisionVMAgent: (val.provisionVMAgent) ?? true,
        provisionVMConfigAgent: (val.provisionVMConfigAgent) ?? true,
    };
}

/**
 * Windows Configuration for the virtual machine instance
 */
export interface VirtualMachineInstancePropertiesOsProfileWindowsConfigurationArgs {
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
 * virtualMachineInstancePropertiesOsProfileWindowsConfigurationArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesOsProfileWindowsConfigurationArgs
 */
export function virtualMachineInstancePropertiesOsProfileWindowsConfigurationArgsProvideDefaults(val: VirtualMachineInstancePropertiesOsProfileWindowsConfigurationArgs): VirtualMachineInstancePropertiesOsProfileWindowsConfigurationArgs {
    return {
        ...val,
        provisionVMAgent: (val.provisionVMAgent) ?? true,
        provisionVMConfigAgent: (val.provisionVMConfigAgent) ?? true,
    };
}

/**
 * SecurityProfile - Specifies the security settings for the virtual machine instance.
 */
export interface VirtualMachineInstancePropertiesSecurityProfileArgs {
    /**
     * Enable TPM flag
     */
    enableTPM?: pulumi.Input<boolean>;
    /**
     * Specifies the SecurityType of the virtual machine. EnableTPM and SecureBootEnabled must be set to true for SecurityType to function.
     */
    securityType?: pulumi.Input<string | enums.SecurityTypes>;
    /**
     * Uefi settings of the virtual machine instance
     */
    uefiSettings?: pulumi.Input<VirtualMachineInstancePropertiesSecurityProfileUefiSettingsArgs>;
}
/**
 * virtualMachineInstancePropertiesSecurityProfileArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesSecurityProfileArgs
 */
export function virtualMachineInstancePropertiesSecurityProfileArgsProvideDefaults(val: VirtualMachineInstancePropertiesSecurityProfileArgs): VirtualMachineInstancePropertiesSecurityProfileArgs {
    return {
        ...val,
        enableTPM: (val.enableTPM) ?? false,
        uefiSettings: (val.uefiSettings ? pulumi.output(val.uefiSettings).apply(virtualMachineInstancePropertiesSecurityProfileUefiSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * Uefi settings - Specifies whether secure boot should be enabled on the virtual machine instance.
 */
export interface VirtualMachineInstancePropertiesSecurityProfileUefiSettingsArgs {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine instance.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
}
/**
 * virtualMachineInstancePropertiesSecurityProfileUefiSettingsArgsProvideDefaults sets the appropriate defaults for VirtualMachineInstancePropertiesSecurityProfileUefiSettingsArgs
 */
export function virtualMachineInstancePropertiesSecurityProfileUefiSettingsArgsProvideDefaults(val: VirtualMachineInstancePropertiesSecurityProfileUefiSettingsArgs): VirtualMachineInstancePropertiesSecurityProfileUefiSettingsArgs {
    return {
        ...val,
        secureBootEnabled: (val.secureBootEnabled) ?? false,
    };
}

/**
 * StorageProfile - contains information about the disks and storage information for the virtual machine instance
 */
export interface VirtualMachineInstancePropertiesStorageProfileArgs {
    /**
     * adds data disks to the virtual machine instance
     */
    dataDisks?: pulumi.Input<pulumi.Input<VirtualHardDiskArmReferenceArgs>[]>;
    /**
     * Which Image to use for the virtual machine instance
     */
    imageReference?: pulumi.Input<ImageArmReferenceArgs>;
    /**
     * VHD to attach as OS disk
     */
    osDisk?: pulumi.Input<VirtualMachineInstancePropertiesStorageProfileOsDiskArgs>;
    /**
     * Id of the storage container that hosts the VM configuration file
     */
    vmConfigStoragePathId?: pulumi.Input<string>;
}

/**
 * VHD to attach as OS disk
 */
export interface VirtualMachineInstancePropertiesStorageProfileOsDiskArgs {
    /**
     * The Azure Resource ID for a Virtual Hard Disk.
     */
    id?: pulumi.Input<string>;
    /**
     * The managed disk parameters.
     */
    managedDisk?: pulumi.Input<VirtualMachineInstanceManagedDiskParametersArgs>;
    /**
     * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: Windows, Linux.
     */
    osType?: pulumi.Input<string | enums.OperatingSystemTypes>;
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
    ssh?: pulumi.Input<VirtualMachinePropertiesSshArgs>;
    /**
     * TimeZone for the virtual machine
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * The Azure Resource ID for a Virtual Network
 */
export interface VirtualNetworkArmReferenceArgs {
    /**
     * The Azure Resource ID for a Virtual Network.
     */
    resourceId?: pulumi.Input<string>;
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

/**
 * The Azure Resource ID for a Virtual Network subnet
 */
export interface VirtualNetworkSubnetArmReferenceArgs {
    /**
     * The Azure Resource ID for a Virtual Network subnet.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * VirtualNetwork subnet resource
 */
export interface VirtualNetworkSubnetPropertiesArgs {
    /**
     * Subnet CIDR
     */
    addressPrefix: pulumi.Input<string>;
    /**
     * Nat Gateway attached to the subnet for non-vnet traffic.
     */
    natGateway?: pulumi.Input<NatGatewayArmReferenceArgs>;
    /**
     * Network Security Group attached to the subnet.
     */
    networkSecurityGroup?: pulumi.Input<NetworkSecurityGroupArmReferenceArgs>;
    /**
     * RouteTable defining custom routes for the subnet.
     */
    routeTable?: pulumi.Input<RouteTableArgs>;
}

/**
 * The VirtualSwitchConfigurationOverrides of a cluster.
 */
export interface VirtualSwitchConfigurationOverridesArgs {
    /**
     * Enable IoV for Virtual Switch
     */
    enableIov?: pulumi.Input<string>;
    /**
     * Load Balancing Algorithm for Virtual Switch
     */
    loadBalancingAlgorithm?: pulumi.Input<string>;
}

/**
 * Web proxy configuration.
 */
export interface WebProxyConfigurationArgs {
    /**
     * Bypass list for the web proxy.
     */
    bypassList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Connection URI of the web proxy.
     */
    connectionUri?: pulumi.Input<string>;
    /**
     * Port of the web proxy.
     */
    port?: pulumi.Input<string>;
}
