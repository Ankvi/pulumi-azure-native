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
     * AzureStackHCI Cluster deployment properties.
     */
    export interface ClusterArgs {
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
        cluster?: pulumi.Input<ClusterArgs>;
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
         * The URI to the keyvault / secret store.
         */
        secretsLocation?: pulumi.Input<string>;
        /**
         * SecuritySettings to deploy AzureStackHCI Cluster.
         */
        securitySettings?: pulumi.Input<SecuritySettingsArgs>;
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
            securitySettings: (val.securitySettings ? pulumi.output(val.securitySettings).apply(securitySettingsArgsProvideDefaults) : undefined),
            storage: (val.storage ? pulumi.output(val.storage).apply(storageArgsProvideDefaults) : undefined),
        };
    }

    /**
     * The device Configuration of a device.
     */
    export interface DeviceConfigurationArgs {
        /**
         * device metadata details.
         */
        deviceMetadata?: pulumi.Input<string>;
        /**
         * NIC Details of device
         */
        nicDetails: pulumi.Input<pulumi.Input<NicDetailArgs>[]>;
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
     * The NIC Detail of a device.
     */
    export interface NicDetailArgs {
        /**
         * Adapter Name of NIC
         */
        adapterName: pulumi.Input<string>;
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
     * The OptionalServices of AzureStackHCI Cluster.
     */
    export interface OptionalServicesArgs {
        /**
         * The name of custom location.
         */
        customLocation?: pulumi.Input<string>;
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
     * Scale units will contains list of deployment data
     */
    export interface ScaleUnitsArgs {
        /**
         * Deployment Data to deploy AzureStackHCI Cluster.
         */
        deploymentData: pulumi.Input<DeploymentDataArgs>;
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
     * The SecuritySettings of AzureStackHCI Cluster.
     */
    export interface SecuritySettingsArgs {
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
     * securitySettingsArgsProvideDefaults sets the appropriate defaults for SecuritySettingsArgs
     */
    export function securitySettingsArgsProvideDefaults(val: SecuritySettingsArgs): SecuritySettingsArgs {
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
     * Software Assurance properties of the cluster.
     */
    export interface SoftwareAssurancePropertiesArgs {
        /**
         * Customer Intent for Software Assurance Benefit.
         */
        softwareAssuranceIntent?: pulumi.Input<string | enums.SoftwareAssuranceIntent>;
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
         * ID specified for the VLAN storage network. This setting is applied to the network interfaces that route the storage and VM migration traffic. 
         */
        vlanId?: pulumi.Input<string>;
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
