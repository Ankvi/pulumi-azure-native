import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AadConfigurationResponse {
        /**
         * The list of Azure Active Directory group object IDs that will have an administrative role on the Kubernetes cluster.
         */
        adminGroupObjectIds: string[];
    }

    export interface AdministrativeCredentialsResponse {
        /**
         * The password of the administrator of the device used during initialization.
         */
        password: string;
        /**
         * The username of the administrator of the device used during initialization.
         */
        username: string;
    }

    export interface AdministratorConfigurationResponse {
        /**
         * The user name for the administrator that will be applied to the operating systems that run Kubernetes nodes. If not supplied, a user name will be chosen by the service.
         */
        adminUsername?: string;
        /**
         * The SSH configuration for the operating systems that run the nodes in the Kubernetes cluster. In some cases, specification of public keys may be required to produce a working environment.
         */
        sshPublicKeys?: SshPublicKeyResponse[];
    }

    export interface AgentOptionsResponse {
        /**
         * The number of hugepages to allocate.
         */
        hugepagesCount: number;
        /**
         * The size of the hugepages to allocate.
         */
        hugepagesSize?: string;
    }
    /**
     * agentOptionsResponseProvideDefaults sets the appropriate defaults for AgentOptionsResponse
     */
    export function agentOptionsResponseProvideDefaults(val: AgentOptionsResponse): AgentOptionsResponse {
        return {
            ...val,
            hugepagesSize: (val.hugepagesSize) ?? "2M",
        };
    }

    export interface AgentPoolUpgradeSettingsResponse {
        /**
         * The maximum number or percentage of nodes that are surged during upgrade. This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1.
         */
        maxSurge?: string;
    }
    /**
     * agentPoolUpgradeSettingsResponseProvideDefaults sets the appropriate defaults for AgentPoolUpgradeSettingsResponse
     */
    export function agentPoolUpgradeSettingsResponseProvideDefaults(val: AgentPoolUpgradeSettingsResponse): AgentPoolUpgradeSettingsResponse {
        return {
            ...val,
            maxSurge: (val.maxSurge) ?? "1",
        };
    }

    export interface AttachedNetworkConfigurationResponse {
        /**
         * The list of Layer 2 Networks and related configuration for attachment.
         */
        l2Networks?: L2NetworkAttachmentConfigurationResponse[];
        /**
         * The list of Layer 3 Networks and related configuration for attachment.
         */
        l3Networks?: L3NetworkAttachmentConfigurationResponse[];
        /**
         * The list of Trunked Networks and related configuration for attachment.
         */
        trunkedNetworks?: TrunkedNetworkAttachmentConfigurationResponse[];
    }

    export interface AvailableUpgradeResponse {
        /**
         * The version lifecycle indicator.
         */
        availabilityLifecycle: string;
        /**
         * The version available for upgrading.
         */
        version: string;
    }

    export interface BareMetalMachineConfigurationDataResponse {
        /**
         * The connection string for the baseboard management controller including IP address and protocol.
         */
        bmcConnectionString: string;
        /**
         * The credentials of the baseboard management controller on this bare metal machine.
         */
        bmcCredentials: AdministrativeCredentialsResponse;
        /**
         * The MAC address of the BMC for this machine.
         */
        bmcMacAddress: string;
        /**
         * The MAC address associated with the PXE NIC card.
         */
        bootMacAddress: string;
        /**
         * The free-form additional information about the machine, e.g. an asset tag.
         */
        machineDetails?: string;
        /**
         * The user-provided name for the bare metal machine created from this specification.
         * If not provided, the machine name will be generated programmatically.
         */
        machineName?: string;
        /**
         * The slot the physical machine is in the rack based on the BOM configuration.
         */
        rackSlot: number;
        /**
         * The serial number of the machine. Hardware suppliers may use an alternate value. For example, service tag.
         */
        serialNumber: string;
    }

    export interface BgpAdvertisementResponse {
        /**
         * The indicator of if this advertisement is also made to the network fabric associated with the Network Cloud Cluster. This field is ignored if fabricPeeringEnabled is set to False.
         */
        advertiseToFabric?: string;
        /**
         * The names of the BGP communities to be associated with the announcement, utilizing a BGP community string in 1234:1234 format.
         */
        communities?: string[];
        /**
         * The names of the IP address pools associated with this announcement.
         */
        ipAddressPools: string[];
        /**
         * The names of the BGP peers to limit this advertisement to. If no values are specified, all BGP peers will receive this advertisement.
         */
        peers?: string[];
    }
    /**
     * bgpAdvertisementResponseProvideDefaults sets the appropriate defaults for BgpAdvertisementResponse
     */
    export function bgpAdvertisementResponseProvideDefaults(val: BgpAdvertisementResponse): BgpAdvertisementResponse {
        return {
            ...val,
            advertiseToFabric: (val.advertiseToFabric) ?? "True",
        };
    }

    export interface BgpServiceLoadBalancerConfigurationResponse {
        /**
         * The association of IP address pools to the communities and peers, allowing for announcement of IPs.
         */
        bgpAdvertisements?: BgpAdvertisementResponse[];
        /**
         * The list of additional BgpPeer entities that the Kubernetes cluster will peer with. All peering must be explicitly defined.
         */
        bgpPeers?: ServiceLoadBalancerBgpPeerResponse[];
        /**
         * The indicator to specify if the load balancer peers with the network fabric.
         */
        fabricPeeringEnabled?: string;
        /**
         * The list of pools of IP addresses that can be allocated to Load Balancer services.
         */
        ipAddressPools?: IpAddressPoolResponse[];
    }
    /**
     * bgpServiceLoadBalancerConfigurationResponseProvideDefaults sets the appropriate defaults for BgpServiceLoadBalancerConfigurationResponse
     */
    export function bgpServiceLoadBalancerConfigurationResponseProvideDefaults(val: BgpServiceLoadBalancerConfigurationResponse): BgpServiceLoadBalancerConfigurationResponse {
        return {
            ...val,
            fabricPeeringEnabled: (val.fabricPeeringEnabled) ?? "True",
        };
    }

    export interface ClusterAvailableUpgradeVersionResponse {
        /**
         * The indicator of whether the control plane will be impacted during the upgrade.
         */
        controlImpact: string;
        /**
         * The expected duration needed for this upgrade.
         */
        expectedDuration: string;
        /**
         * The impact description including the specific details and release notes.
         */
        impactDescription: string;
        /**
         * The last date the version of the platform is supported.
         */
        supportExpiryDate: string;
        /**
         * The target version this cluster will be upgraded to.
         */
        targetClusterVersion: string;
        /**
         * The indicator of whether the workload will be impacted during the upgrade.
         */
        workloadImpact: string;
    }

    export interface ClusterAvailableVersionResponse {
        /**
         * The last date the version of the platform is supported.
         */
        supportExpiryDate: string;
        /**
         * The version of the cluster to be deployed.
         */
        targetClusterVersion: string;
    }

    export interface ClusterCapacityResponse {
        /**
         * The remaining appliance-based storage in GB available for workload use.
         */
        availableApplianceStorageGB?: number;
        /**
         * The remaining number of cores that are available in this cluster for workload use.
         */
        availableCoreCount?: number;
        /**
         * The remaining machine or host-based storage in GB available for workload use.
         */
        availableHostStorageGB?: number;
        /**
         * The remaining memory in GB that are available in this cluster for workload use.
         */
        availableMemoryGB?: number;
        /**
         * The total appliance-based storage in GB supported by this cluster for workload use.
         */
        totalApplianceStorageGB?: number;
        /**
         * The total number of cores that are supported by this cluster for workload use.
         */
        totalCoreCount?: number;
        /**
         * The total machine or host-based storage in GB supported by this cluster for workload use.
         */
        totalHostStorageGB?: number;
        /**
         * The total memory supported by this cluster for workload use.
         */
        totalMemoryGB?: number;
    }

    export interface ClusterSecretArchiveResponse {
        /**
         * The resource ID of the key vault to archive the secrets of the cluster.
         */
        keyVaultId: string;
        /**
         * The indicator if the specified key vault should be used to archive the secrets of the cluster.
         */
        useKeyVault?: string;
    }
    /**
     * clusterSecretArchiveResponseProvideDefaults sets the appropriate defaults for ClusterSecretArchiveResponse
     */
    export function clusterSecretArchiveResponseProvideDefaults(val: ClusterSecretArchiveResponse): ClusterSecretArchiveResponse {
        return {
            ...val,
            useKeyVault: (val.useKeyVault) ?? "False",
        };
    }

    export interface ClusterUpdateStrategyResponse {
        /**
         * The maximum number of worker nodes that can be offline within the increment of update, e.g., rack-by-rack.
         * Limited by the maximum number of machines in the increment. Defaults to the whole increment size.
         */
        maxUnavailable?: number;
        /**
         * The mode of operation for runtime protection.
         */
        strategyType: string;
        /**
         * Selection of how the threshold should be evaluated.
         */
        thresholdType: string;
        /**
         * The numeric threshold value.
         */
        thresholdValue: number;
        /**
         * The time to wait between the increments of update defined by the strategy.
         */
        waitTimeMinutes?: number;
    }
    /**
     * clusterUpdateStrategyResponseProvideDefaults sets the appropriate defaults for ClusterUpdateStrategyResponse
     */
    export function clusterUpdateStrategyResponseProvideDefaults(val: ClusterUpdateStrategyResponse): ClusterUpdateStrategyResponse {
        return {
            ...val,
            waitTimeMinutes: (val.waitTimeMinutes) ?? 15,
        };
    }

    export interface ControlPlaneNodeConfigurationResponse {
        /**
         * The administrator credentials to be used for the nodes in the control plane.
         */
        administratorConfiguration?: AdministratorConfigurationResponse;
        /**
         * The list of availability zones of the Network Cloud cluster to be used for the provisioning of nodes in the control plane. If not specified, all availability zones will be used.
         */
        availabilityZones?: string[];
        /**
         * The number of virtual machines that use this configuration.
         */
        count: number;
        /**
         * The name of the VM SKU supplied during creation.
         */
        vmSkuName: string;
    }

    export interface EgressEndpointResponse {
        /**
         * The descriptive category name of endpoints accessible by the AKS agent node. For example, azure-resource-management, API server, etc. The platform egress endpoints provided by default will use the category 'default'.
         */
        category: string;
        /**
         * The list of endpoint dependencies.
         */
        endpoints: EndpointDependencyResponse[];
    }

    export interface EndpointDependencyResponse {
        /**
         * The domain name of the dependency.
         */
        domainName: string;
        /**
         * The port of this endpoint.
         */
        port?: number;
    }

    export interface ExtendedLocationResponse {
        /**
         * The resource ID of the extended location on which the resource will be created.
         */
        name: string;
        /**
         * The extended location type, for example, CustomLocation.
         */
        type: string;
    }

    export interface FeatureStatusResponse {
        /**
         * The status representing the state of this feature.
         */
        detailedStatus: string;
        /**
         * The descriptive message about the current detailed status.
         */
        detailedStatusMessage: string;
        /**
         * The name of the feature.
         */
        name: string;
        /**
         * The version of the feature.
         */
        version: string;
    }

    export interface HardwareInventoryNetworkInterfaceResponse {
        /**
         * The current status of the link.
         */
        linkStatus: string;
        /**
         * The MAC address associated with this interface.
         */
        macAddress: string;
        /**
         * The name of the interface.
         */
        name: string;
        /**
         * The resource ID of the network interface for the port on the switch that this machine's interface is connected to.
         */
        networkInterfaceId: string;
    }

    export interface HardwareInventoryResponse {
        /**
         * Freeform data extracted from the environment about this machine. This information varies depending on the specific hardware and configuration.
         */
        additionalHostInformation: string;
        /**
         * The list of network interfaces and associated details for the bare metal machine.
         */
        interfaces: HardwareInventoryNetworkInterfaceResponse[];
        /**
         * Field Deprecated. Will be removed in an upcoming version. The list of network interface cards and associated details for the bare metal machine.
         */
        nics: NicResponse[];
    }

    export interface HardwareValidationStatusResponse {
        /**
         * The timestamp of the hardware validation execution.
         */
        lastValidationTime: string;
        /**
         * The outcome of the hardware validation.
         */
        result: string;
    }

    export interface ImageRepositoryCredentialsResponse {
        /**
         * The password or token used to access an image in the target repository.
         */
        password: string;
        /**
         * The URL of the authentication server used to validate the repository credentials.
         */
        registryUrl: string;
        /**
         * The username used to access an image in the target repository.
         */
        username: string;
    }

    export interface InitialAgentPoolConfigurationResponse {
        /**
         * The administrator credentials to be used for the nodes in this agent pool.
         */
        administratorConfiguration?: AdministratorConfigurationResponse;
        /**
         * The configurations that will be applied to each agent in this agent pool.
         */
        agentOptions?: AgentOptionsResponse;
        /**
         * The configuration of networks being attached to the agent pool for use by the workloads that run on this Kubernetes cluster.
         */
        attachedNetworkConfiguration?: AttachedNetworkConfigurationResponse;
        /**
         * The list of availability zones of the Network Cloud cluster used for the provisioning of nodes in this agent pool. If not specified, all availability zones will be used.
         */
        availabilityZones?: string[];
        /**
         * The number of virtual machines that use this configuration.
         */
        count: number;
        /**
         * The labels applied to the nodes in this agent pool.
         */
        labels?: KubernetesLabelResponse[];
        /**
         * The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node.
         */
        mode: string;
        /**
         * The name that will be used for the agent pool resource representing this agent pool.
         */
        name: string;
        /**
         * The taints applied to the nodes in this agent pool.
         */
        taints?: KubernetesLabelResponse[];
        /**
         * The configuration of the agent pool.
         */
        upgradeSettings?: AgentPoolUpgradeSettingsResponse;
        /**
         * The name of the VM SKU that determines the size of resources allocated for node VMs.
         */
        vmSkuName: string;
    }
    /**
     * initialAgentPoolConfigurationResponseProvideDefaults sets the appropriate defaults for InitialAgentPoolConfigurationResponse
     */
    export function initialAgentPoolConfigurationResponseProvideDefaults(val: InitialAgentPoolConfigurationResponse): InitialAgentPoolConfigurationResponse {
        return {
            ...val,
            agentOptions: (val.agentOptions ? agentOptionsResponseProvideDefaults(val.agentOptions) : undefined),
            upgradeSettings: (val.upgradeSettings ? agentPoolUpgradeSettingsResponseProvideDefaults(val.upgradeSettings) : undefined),
        };
    }

    export interface IpAddressPoolResponse {
        /**
         * The list of IP address ranges. Each range can be a either a subnet in CIDR format or an explicit start-end range of IP addresses.
         */
        addresses: string[];
        /**
         * The indicator to determine if automatic allocation from the pool should occur.
         */
        autoAssign?: string;
        /**
         * The name used to identify this IP address pool for association with a BGP advertisement.
         */
        name: string;
        /**
         * The indicator to prevent the use of IP addresses ending with .0 and .255 for this pool. Enabling this option will only use IP addresses between .1 and .254 inclusive.
         */
        onlyUseHostIps?: string;
    }
    /**
     * ipAddressPoolResponseProvideDefaults sets the appropriate defaults for IpAddressPoolResponse
     */
    export function ipAddressPoolResponseProvideDefaults(val: IpAddressPoolResponse): IpAddressPoolResponse {
        return {
            ...val,
            autoAssign: (val.autoAssign) ?? "True",
            onlyUseHostIps: (val.onlyUseHostIps) ?? "True",
        };
    }

    export interface KeySetUserResponse {
        /**
         * The user name that will be used for access.
         */
        azureUserName: string;
        /**
         * The free-form description for this user.
         */
        description?: string;
        /**
         * The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in.
         */
        sshPublicKey: SshPublicKeyResponse;
        /**
         * The user principal name (email format) used to validate this user's group membership.
         */
        userPrincipalName?: string;
    }

    export interface KeySetUserStatusResponse {
        /**
         * The user name that will be used for access.
         */
        azureUserName: string;
        /**
         * The indicator of whether the user is currently deployed for access.
         */
        status: string;
        /**
         * The additional information describing the current status of this user, if any available.
         */
        statusMessage: string;
    }

    export interface KubernetesClusterNodeResponse {
        /**
         * The resource ID of the agent pool that this node belongs to. This value is not represented on control plane nodes.
         */
        agentPoolId: string;
        /**
         * The availability zone this node is running within.
         */
        availabilityZone: string;
        /**
         * The resource ID of the bare metal machine that hosts this node.
         */
        bareMetalMachineId: string;
        /**
         * The number of CPU cores configured for this node, derived from the VM SKU specified.
         */
        cpuCores: number;
        /**
         * The detailed state of this node.
         */
        detailedStatus: string;
        /**
         * The descriptive message about the current detailed status.
         */
        detailedStatusMessage: string;
        /**
         * The size of the disk configured for this node.
         */
        diskSizeGB: number;
        /**
         * The machine image used to deploy this node.
         */
        image: string;
        /**
         * The currently running version of Kubernetes and bundled features running on this node.
         */
        kubernetesVersion: string;
        /**
         * The list of labels on this node that have been assigned to the agent pool containing this node.
         */
        labels: KubernetesLabelResponse[];
        /**
         * The amount of memory configured for this node, derived from the vm SKU specified.
         */
        memorySizeGB: number;
        /**
         * The mode of the agent pool containing this node. Not applicable for control plane nodes.
         */
        mode: string;
        /**
         * The name of this node, as realized in the Kubernetes cluster.
         */
        name: string;
        /**
         * The NetworkAttachments made to this node.
         */
        networkAttachments: NetworkAttachmentResponse[];
        /**
         * The power state of this node.
         */
        powerState: string;
        /**
         * The role of this node in the cluster.
         */
        role: string;
        /**
         * The list of taints that have been assigned to the agent pool containing this node.
         */
        taints: KubernetesLabelResponse[];
        /**
         * The VM SKU name that was used to create this cluster node.
         */
        vmSkuName: string;
    }

    export interface KubernetesLabelResponse {
        /**
         * The name of the label or taint.
         */
        key: string;
        /**
         * The value of the label or taint.
         */
        value: string;
    }

    export interface L2NetworkAttachmentConfigurationResponse {
        /**
         * The resource ID of the network that is being configured for attachment.
         */
        networkId: string;
        /**
         * The indicator of how this network will be utilized by the Kubernetes cluster.
         */
        pluginType?: string;
    }
    /**
     * l2networkAttachmentConfigurationResponseProvideDefaults sets the appropriate defaults for L2NetworkAttachmentConfigurationResponse
     */
    export function l2networkAttachmentConfigurationResponseProvideDefaults(val: L2NetworkAttachmentConfigurationResponse): L2NetworkAttachmentConfigurationResponse {
        return {
            ...val,
            pluginType: (val.pluginType) ?? "SRIOV",
        };
    }

    export interface L3NetworkAttachmentConfigurationResponse {
        /**
         * The indication of whether this network will or will not perform IP address management and allocate IP addresses when attached.
         */
        ipamEnabled?: string;
        /**
         * The resource ID of the network that is being configured for attachment.
         */
        networkId: string;
        /**
         * The indicator of how this network will be utilized by the Kubernetes cluster.
         */
        pluginType?: string;
    }
    /**
     * l3networkAttachmentConfigurationResponseProvideDefaults sets the appropriate defaults for L3NetworkAttachmentConfigurationResponse
     */
    export function l3networkAttachmentConfigurationResponseProvideDefaults(val: L3NetworkAttachmentConfigurationResponse): L3NetworkAttachmentConfigurationResponse {
        return {
            ...val,
            ipamEnabled: (val.ipamEnabled) ?? "False",
            pluginType: (val.pluginType) ?? "SRIOV",
        };
    }

    export interface LldpNeighborResponse {
        /**
         * The descriptive information about the port on the connected device.
         */
        portDescription: string;
        /**
         * The system-assigned name of the port on the connected device.
         */
        portName: string;
        /**
         * The descriptive information about the connected device.
         */
        systemDescription: string;
        /**
         * The system-assigned name of the connected device.
         */
        systemName: string;
    }

    export interface ManagedResourceGroupConfigurationResponse {
        /**
         * The location of the managed resource group. If not specified, the location of the parent resource is chosen.
         */
        location?: string;
        /**
         * The name for the managed resource group. If not specified, the unique name is automatically generated.
         */
        name?: string;
    }

    export interface NetworkAttachmentResponse {
        /**
         * The resource ID of the associated network attached to the virtual machine.
         * It can be one of cloudServicesNetwork, l3Network, l2Network or trunkedNetwork resources.
         */
        attachedNetworkId: string;
        /**
         * The indicator of whether this is the default gateway.
         * Only one of the attached networks (including the CloudServicesNetwork attachment) for a single machine may be specified as True.
         */
        defaultGateway?: string;
        /**
         * The IP allocation mechanism for the virtual machine.
         * Dynamic and Static are only valid for l3Network which may also specify Disabled.
         * Otherwise, Disabled is the only permitted value.
         */
        ipAllocationMethod: string;
        /**
         * The IPv4 address of the virtual machine.
         *
         * This field is used only if the attached network has IPAllocationType of IPV4 or DualStack.
         *
         * If IPAllocationMethod is:
         * Static - this field must contain a user specified IPv4 address from within the subnet specified in the attached network.
         * Dynamic - this field is read-only, but will be populated with an address from within the subnet specified in the attached network.
         * Disabled - this field will be empty.
         */
        ipv4Address?: string;
        /**
         * The IPv6 address of the virtual machine.
         *
         * This field is used only if the attached network has IPAllocationType of IPV6 or DualStack.
         *
         * If IPAllocationMethod is:
         * Static - this field must contain an IPv6 address range from within the range specified in the attached network.
         * Dynamic - this field is read-only, but will be populated with an range from within the subnet specified in the attached network.
         * Disabled - this field will be empty.
         */
        ipv6Address?: string;
        /**
         * The MAC address of the interface for the virtual machine that corresponds to this network attachment.
         */
        macAddress: string;
        /**
         * The associated network's interface name.
         * If specified, the network attachment name has a maximum length of 15 characters and must be unique to this virtual machine.
         * If the user doesn’t specify this value, the default interface name of the network resource will be used.
         * For a CloudServicesNetwork resource, this name will be ignored.
         */
        networkAttachmentName?: string;
    }

    export interface NetworkConfigurationResponse {
        /**
         * The configuration of networks being attached to the cluster for use by the workloads that run on this Kubernetes cluster.
         */
        attachedNetworkConfiguration?: AttachedNetworkConfigurationResponse;
        /**
         * The configuration of the BGP service load balancer for this Kubernetes cluster.
         */
        bgpServiceLoadBalancerConfiguration?: BgpServiceLoadBalancerConfigurationResponse;
        /**
         * The resource ID of the associated Cloud Services network.
         */
        cloudServicesNetworkId: string;
        /**
         * The resource ID of the Layer 3 network that is used for creation of the Container Networking Interface network.
         */
        cniNetworkId: string;
        /**
         * The IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in service CIDR.
         */
        dnsServiceIp?: string;
        /**
         * The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
         */
        podCidrs?: string[];
        /**
         * The CIDR notation IP ranges from which to assign service IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
         */
        serviceCidrs?: string[];
    }
    /**
     * networkConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkConfigurationResponse
     */
    export function networkConfigurationResponseProvideDefaults(val: NetworkConfigurationResponse): NetworkConfigurationResponse {
        return {
            ...val,
            bgpServiceLoadBalancerConfiguration: (val.bgpServiceLoadBalancerConfiguration ? bgpServiceLoadBalancerConfigurationResponseProvideDefaults(val.bgpServiceLoadBalancerConfiguration) : undefined),
        };
    }

    export interface NicResponse {
        /**
         * The information about the device connected to this NIC.
         */
        lldpNeighbor: LldpNeighborResponse;
        /**
         * The MAC address associated with this NIC.
         */
        macAddress: string;
        /**
         * The name of the NIC/interface.
         */
        name: string;
    }

    export interface OsDiskResponse {
        /**
         * The strategy for creating the OS disk.
         */
        createOption?: string;
        /**
         * The strategy for deleting the OS disk.
         */
        deleteOption?: string;
        /**
         * The size of the disk in gigabytes. Required if the createOption is Ephemeral.
         */
        diskSizeGB: number;
    }
    /**
     * osDiskResponseProvideDefaults sets the appropriate defaults for OsDiskResponse
     */
    export function osDiskResponseProvideDefaults(val: OsDiskResponse): OsDiskResponse {
        return {
            ...val,
            createOption: (val.createOption) ?? "Ephemeral",
            deleteOption: (val.deleteOption) ?? "Delete",
        };
    }

    export interface RackDefinitionResponse {
        /**
         * The zone name used for this rack when created. Availability zones are used for workload placement.
         */
        availabilityZone?: string;
        /**
         * The unordered list of bare metal machine configuration.
         */
        bareMetalMachineConfigurationData?: BareMetalMachineConfigurationDataResponse[];
        /**
         * The resource ID of the network rack that matches this rack definition.
         */
        networkRackId: string;
        /**
         * The free-form description of the rack's location.
         */
        rackLocation?: string;
        /**
         * The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
         */
        rackSerialNumber: string;
        /**
         * The resource ID of the sku for the rack being added.
         */
        rackSkuId: string;
        /**
         * The list of storage appliance configuration data for this rack.
         */
        storageApplianceConfigurationData?: StorageApplianceConfigurationDataResponse[];
    }

    export interface RuntimeProtectionConfigurationResponse {
        /**
         * The mode of operation for runtime protection.
         */
        enforcementLevel?: string;
    }
    /**
     * runtimeProtectionConfigurationResponseProvideDefaults sets the appropriate defaults for RuntimeProtectionConfigurationResponse
     */
    export function runtimeProtectionConfigurationResponseProvideDefaults(val: RuntimeProtectionConfigurationResponse): RuntimeProtectionConfigurationResponse {
        return {
            ...val,
            enforcementLevel: (val.enforcementLevel) ?? "Disabled",
        };
    }

    export interface RuntimeProtectionStatusResponse {
        /**
         * The timestamp when the malware definitions were last updated.
         */
        definitionsLastUpdated: string;
        /**
         * The version of the malware definitions.
         */
        definitionsVersion: string;
        /**
         * The timestamp of the most recently completed scan, or empty if there has never been a scan.
         */
        scanCompletedTime: string;
        /**
         * The timestamp of the most recently scheduled scan, or empty if no scan has been scheduled.
         */
        scanScheduledTime: string;
        /**
         * The timestamp of the most recently started scan, or empty if there has never been a scan.
         */
        scanStartedTime: string;
    }

    export interface ServiceLoadBalancerBgpPeerResponse {
        /**
         * The indicator of BFD enablement for this BgpPeer.
         */
        bfdEnabled?: string;
        /**
         * The indicator to enable multi-hop peering support.
         */
        bgpMultiHop?: string;
        /**
         * The requested BGP hold time value. This field uses ISO 8601 duration format, for example P1H.
         */
        holdTime?: string;
        /**
         * The requested BGP keepalive time value. This field uses ISO 8601 duration format, for example P1H.
         */
        keepAliveTime?: string;
        /**
         * The autonomous system number used for the local end of the BGP session.
         */
        myAsn?: number;
        /**
         * The name used to identify this BGP peer for association with a BGP advertisement.
         */
        name: string;
        /**
         * The IPv4 or IPv6 address used to connect this BGP session.
         */
        peerAddress: string;
        /**
         * The autonomous system number expected from the remote end of the BGP session.
         */
        peerAsn: number;
        /**
         * The port used to connect this BGP session.
         */
        peerPort?: number;
    }
    /**
     * serviceLoadBalancerBgpPeerResponseProvideDefaults sets the appropriate defaults for ServiceLoadBalancerBgpPeerResponse
     */
    export function serviceLoadBalancerBgpPeerResponseProvideDefaults(val: ServiceLoadBalancerBgpPeerResponse): ServiceLoadBalancerBgpPeerResponse {
        return {
            ...val,
            bfdEnabled: (val.bfdEnabled) ?? "False",
            bgpMultiHop: (val.bgpMultiHop) ?? "False",
            peerPort: (val.peerPort) ?? 179,
        };
    }

    export interface ServicePrincipalInformationResponse {
        /**
         * The application ID, also known as client ID, of the service principal.
         */
        applicationId: string;
        /**
         * The password of the service principal.
         */
        password: string;
        /**
         * The principal ID, also known as the object ID, of the service principal.
         */
        principalId: string;
        /**
         * The tenant ID, also known as the directory ID, of the tenant in which the service principal is created.
         */
        tenantId: string;
    }

    export interface SshPublicKeyResponse {
        /**
         * The SSH public key data.
         */
        keyData: string;
    }

    export interface StorageApplianceConfigurationDataResponse {
        /**
         * The credentials of the administrative interface on this storage appliance.
         */
        adminCredentials: AdministrativeCredentialsResponse;
        /**
         * The slot that storage appliance is in the rack based on the BOM configuration.
         */
        rackSlot: number;
        /**
         * The serial number of the appliance.
         */
        serialNumber: string;
        /**
         * The user-provided name for the storage appliance that will be created from this specification.
         */
        storageApplianceName?: string;
    }

    export interface StorageProfileResponse {
        /**
         * The disk to use with this virtual machine.
         */
        osDisk: OsDiskResponse;
        /**
         * The resource IDs of volumes that are requested to be attached to the virtual machine.
         */
        volumeAttachments?: string[];
    }
    /**
     * storageProfileResponseProvideDefaults sets the appropriate defaults for StorageProfileResponse
     */
    export function storageProfileResponseProvideDefaults(val: StorageProfileResponse): StorageProfileResponse {
        return {
            ...val,
            osDisk: osDiskResponseProvideDefaults(val.osDisk),
        };
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

    export interface TrunkedNetworkAttachmentConfigurationResponse {
        /**
         * The resource ID of the network that is being configured for attachment.
         */
        networkId: string;
        /**
         * The indicator of how this network will be utilized by the Kubernetes cluster.
         */
        pluginType?: string;
    }
    /**
     * trunkedNetworkAttachmentConfigurationResponseProvideDefaults sets the appropriate defaults for TrunkedNetworkAttachmentConfigurationResponse
     */
    export function trunkedNetworkAttachmentConfigurationResponseProvideDefaults(val: TrunkedNetworkAttachmentConfigurationResponse): TrunkedNetworkAttachmentConfigurationResponse {
        return {
            ...val,
            pluginType: (val.pluginType) ?? "SRIOV",
        };
    }

    export interface ValidationThresholdResponse {
        /**
         * Selection of how the type evaluation is applied to the cluster calculation.
         */
        grouping: string;
        /**
         * Selection of how the threshold should be evaluated.
         */
        type: string;
        /**
         * The numeric threshold value.
         */
        value: number;
    }

    export interface VirtualMachinePlacementHintResponse {
        /**
         * The specification of whether this hint supports affinity or anti-affinity with the referenced resources.
         */
        hintType: string;
        /**
         * The resource ID of the target object that the placement hints will be checked against, e.g., the bare metal node to host the virtual machine.
         */
        resourceId: string;
        /**
         * The indicator of whether the hint is a hard or soft requirement during scheduling.
         */
        schedulingExecution: string;
        /**
         * The scope for the virtual machine affinity or anti-affinity placement hint. It should always be "Machine" in the case of node affinity.
         */
        scope: string;
    }
