import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AadConfigurationArgs {
    /**
     * The list of Azure Active Directory group object IDs that will have an administrative role on the Kubernetes cluster.
     */
    adminGroupObjectIds: pulumi.Input<pulumi.Input<string>[]>;
}

export interface AdministrativeCredentialsArgs {
    /**
     * The password of the administrator of the device used during initialization.
     */
    password: pulumi.Input<string>;
    /**
     * The username of the administrator of the device used during initialization.
     */
    username: pulumi.Input<string>;
}

export interface AdministratorConfigurationArgs {
    /**
     * The user name for the administrator that will be applied to the operating systems that run Kubernetes nodes. If not supplied, a user name will be chosen by the service.
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * The SSH configuration for the operating systems that run the nodes in the Kubernetes cluster. In some cases, specification of public keys may be required to produce a working environment.
     */
    sshPublicKeys?: pulumi.Input<pulumi.Input<SshPublicKeyArgs>[]>;
}

export interface AgentOptionsArgs {
    /**
     * The number of hugepages to allocate.
     */
    hugepagesCount: pulumi.Input<number>;
    /**
     * The size of the hugepages to allocate.
     */
    hugepagesSize?: pulumi.Input<string | enums.HugepagesSize>;
}
/**
 * agentOptionsArgsProvideDefaults sets the appropriate defaults for AgentOptionsArgs
 */
export function agentOptionsArgsProvideDefaults(val: AgentOptionsArgs): AgentOptionsArgs {
    return {
        ...val,
        hugepagesSize: (val.hugepagesSize) ?? "2M",
    };
}

export interface AgentPoolUpgradeSettingsArgs {
    /**
     * The maximum number or percentage of nodes that are surged during upgrade. This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1.
     */
    maxSurge?: pulumi.Input<string>;
}
/**
 * agentPoolUpgradeSettingsArgsProvideDefaults sets the appropriate defaults for AgentPoolUpgradeSettingsArgs
 */
export function agentPoolUpgradeSettingsArgsProvideDefaults(val: AgentPoolUpgradeSettingsArgs): AgentPoolUpgradeSettingsArgs {
    return {
        ...val,
        maxSurge: (val.maxSurge) ?? "1",
    };
}

export interface AttachedNetworkConfigurationArgs {
    /**
     * The list of Layer 2 Networks and related configuration for attachment.
     */
    l2Networks?: pulumi.Input<pulumi.Input<L2NetworkAttachmentConfigurationArgs>[]>;
    /**
     * The list of Layer 3 Networks and related configuration for attachment.
     */
    l3Networks?: pulumi.Input<pulumi.Input<L3NetworkAttachmentConfigurationArgs>[]>;
    /**
     * The list of Trunked Networks and related configuration for attachment.
     */
    trunkedNetworks?: pulumi.Input<pulumi.Input<TrunkedNetworkAttachmentConfigurationArgs>[]>;
}

export interface BareMetalMachineConfigurationDataArgs {
    /**
     * The credentials of the baseboard management controller on this bare metal machine.
     */
    bmcCredentials: pulumi.Input<AdministrativeCredentialsArgs>;
    /**
     * The MAC address of the BMC for this machine.
     */
    bmcMacAddress: pulumi.Input<string>;
    /**
     * The MAC address associated with the PXE NIC card.
     */
    bootMacAddress: pulumi.Input<string>;
    /**
     * The free-form additional information about the machine, e.g. an asset tag.
     */
    machineDetails?: pulumi.Input<string>;
    /**
     * The user-provided name for the bare metal machine created from this specification.
     * If not provided, the machine name will be generated programmatically.
     */
    machineName?: pulumi.Input<string>;
    /**
     * The slot the physical machine is in the rack based on the BOM configuration.
     */
    rackSlot: pulumi.Input<number>;
    /**
     * The serial number of the machine. Hardware suppliers may use an alternate value. For example, service tag.
     */
    serialNumber: pulumi.Input<string>;
}

export interface BgpAdvertisementArgs {
    /**
     * The indicator of if this advertisement is also made to the network fabric associated with the Network Cloud Cluster. This field is ignored if fabricPeeringEnabled is set to False.
     */
    advertiseToFabric?: pulumi.Input<string | enums.AdvertiseToFabric>;
    /**
     * The names of the BGP communities to be associated with the announcement, utilizing a BGP community string in 1234:1234 format.
     */
    communities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The names of the IP address pools associated with this announcement.
     */
    ipAddressPools: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The names of the BGP peers to limit this advertisement to. If no values are specified, all BGP peers will receive this advertisement.
     */
    peers?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * bgpAdvertisementArgsProvideDefaults sets the appropriate defaults for BgpAdvertisementArgs
 */
export function bgpAdvertisementArgsProvideDefaults(val: BgpAdvertisementArgs): BgpAdvertisementArgs {
    return {
        ...val,
        advertiseToFabric: (val.advertiseToFabric) ?? "True",
    };
}

export interface BgpPeerArgs {
    /**
     * The ASN (Autonomous System Number) of the BGP peer.
     */
    asNumber: pulumi.Input<number>;
    /**
     * The password for this peering neighbor. It defaults to no password if not specified.
     */
    password?: pulumi.Input<string>;
    /**
     * The IPv4 or IPv6 address to peer with the associated CNI Network. The IP version type will drive a peering with the same version type from the Default CNI Network. For example, IPv4 to IPv4 or IPv6 to IPv6.
     */
    peerIp: pulumi.Input<string>;
}

export interface BgpServiceLoadBalancerConfigurationArgs {
    /**
     * The association of IP address pools to the communities and peers, allowing for announcement of IPs.
     */
    bgpAdvertisements?: pulumi.Input<pulumi.Input<BgpAdvertisementArgs>[]>;
    /**
     * The list of additional BgpPeer entities that the Kubernetes cluster will peer with. All peering must be explicitly defined.
     */
    bgpPeers?: pulumi.Input<pulumi.Input<ServiceLoadBalancerBgpPeerArgs>[]>;
    /**
     * The indicator to specify if the load balancer peers with the network fabric.
     */
    fabricPeeringEnabled?: pulumi.Input<string | enums.FabricPeeringEnabled>;
    /**
     * The list of pools of IP addresses that can be allocated to Load Balancer services.
     */
    ipAddressPools?: pulumi.Input<pulumi.Input<IpAddressPoolArgs>[]>;
}
/**
 * bgpServiceLoadBalancerConfigurationArgsProvideDefaults sets the appropriate defaults for BgpServiceLoadBalancerConfigurationArgs
 */
export function bgpServiceLoadBalancerConfigurationArgsProvideDefaults(val: BgpServiceLoadBalancerConfigurationArgs): BgpServiceLoadBalancerConfigurationArgs {
    return {
        ...val,
        fabricPeeringEnabled: (val.fabricPeeringEnabled) ?? "True",
    };
}

export interface CniBgpConfigurationArgs {
    /**
     * The list of BgpPeer entities that the Hybrid AKS cluster will peer with in addition to peering that occurs automatically with the switch fabric.
     */
    bgpPeers?: pulumi.Input<pulumi.Input<BgpPeerArgs>[]>;
    /**
     * The list of prefix community advertisement properties. Each prefix community specifies a prefix, and the
     * communities that should be associated with that prefix when it is announced.
     */
    communityAdvertisements?: pulumi.Input<pulumi.Input<CommunityAdvertisementArgs>[]>;
    /**
     * The password of the Calico node mesh. It defaults to a randomly-generated string when not provided.
     */
    nodeMeshPassword?: pulumi.Input<string>;
    /**
     * The subnet blocks in CIDR format for Kubernetes service external IPs to be advertised over BGP.
     */
    serviceExternalPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The subnet blocks in CIDR format for Kubernetes load balancers. Load balancer IPs will only be advertised if they
     * are within one of these blocks.
     */
    serviceLoadBalancerPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface CommunityAdvertisementArgs {
    /**
     * The list of community strings to announce with this prefix.
     */
    communities: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The subnet in CIDR format for which properties should be advertised.
     */
    subnetPrefix: pulumi.Input<string>;
}

export interface ControlPlaneNodeConfigurationArgs {
    /**
     * The administrator credentials to be used for the nodes in the control plane.
     */
    administratorConfiguration?: pulumi.Input<AdministratorConfigurationArgs>;
    /**
     * The list of availability zones of the Network Cloud cluster to be used for the provisioning of nodes in the control plane. If not specified, all availability zones will be used.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The number of virtual machines that use this configuration.
     */
    count: pulumi.Input<number>;
    /**
     * The name of the VM SKU supplied during creation.
     */
    vmSkuName: pulumi.Input<string>;
}

export interface EgressEndpointArgs {
    /**
     * The descriptive category name of endpoints accessible by the AKS agent node. For example, azure-resource-management, API server, etc. The platform egress endpoints provided by default will use the category 'default'.
     */
    category: pulumi.Input<string>;
    /**
     * The list of endpoint dependencies.
     */
    endpoints: pulumi.Input<pulumi.Input<EndpointDependencyArgs>[]>;
}

export interface EndpointDependencyArgs {
    /**
     * The domain name of the dependency.
     */
    domainName: pulumi.Input<string>;
    /**
     * The port of this endpoint.
     */
    port?: pulumi.Input<number>;
}

export interface ExtendedLocationArgs {
    /**
     * The resource ID of the extended location on which the resource will be created.
     */
    name: pulumi.Input<string>;
    /**
     * The extended location type, for example, CustomLocation.
     */
    type: pulumi.Input<string>;
}

export interface ImageRepositoryCredentialsArgs {
    /**
     * The password or token used to access an image in the target repository.
     */
    password: pulumi.Input<string>;
    /**
     * The URL of the authentication server used to validate the repository credentials.
     */
    registryUrl: pulumi.Input<string>;
    /**
     * The username used to access an image in the target repository.
     */
    username: pulumi.Input<string>;
}

export interface InitialAgentPoolConfigurationArgs {
    /**
     * The administrator credentials to be used for the nodes in this agent pool.
     */
    administratorConfiguration?: pulumi.Input<AdministratorConfigurationArgs>;
    /**
     * The configurations that will be applied to each agent in this agent pool.
     */
    agentOptions?: pulumi.Input<AgentOptionsArgs>;
    /**
     * The configuration of networks being attached to the agent pool for use by the workloads that run on this Kubernetes cluster.
     */
    attachedNetworkConfiguration?: pulumi.Input<AttachedNetworkConfigurationArgs>;
    /**
     * The list of availability zones of the Network Cloud cluster used for the provisioning of nodes in this agent pool. If not specified, all availability zones will be used.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The number of virtual machines that use this configuration.
     */
    count: pulumi.Input<number>;
    /**
     * The labels applied to the nodes in this agent pool.
     */
    labels?: pulumi.Input<pulumi.Input<KubernetesLabelArgs>[]>;
    /**
     * The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node.
     */
    mode: pulumi.Input<string | enums.AgentPoolMode>;
    /**
     * The name that will be used for the agent pool resource representing this agent pool.
     */
    name: pulumi.Input<string>;
    /**
     * The taints applied to the nodes in this agent pool.
     */
    taints?: pulumi.Input<pulumi.Input<KubernetesLabelArgs>[]>;
    /**
     * The configuration of the agent pool.
     */
    upgradeSettings?: pulumi.Input<AgentPoolUpgradeSettingsArgs>;
    /**
     * The name of the VM SKU that determines the size of resources allocated for node VMs.
     */
    vmSkuName: pulumi.Input<string>;
}
/**
 * initialAgentPoolConfigurationArgsProvideDefaults sets the appropriate defaults for InitialAgentPoolConfigurationArgs
 */
export function initialAgentPoolConfigurationArgsProvideDefaults(val: InitialAgentPoolConfigurationArgs): InitialAgentPoolConfigurationArgs {
    return {
        ...val,
        agentOptions: (val.agentOptions ? pulumi.output(val.agentOptions).apply(agentOptionsArgsProvideDefaults) : undefined),
        upgradeSettings: (val.upgradeSettings ? pulumi.output(val.upgradeSettings).apply(agentPoolUpgradeSettingsArgsProvideDefaults) : undefined),
    };
}

export interface IpAddressPoolArgs {
    /**
     * The list of IP address ranges. Each range can be a either a subnet in CIDR format or an explicit start-end range of IP addresses.
     */
    addresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The indicator to determine if automatic allocation from the pool should occur.
     */
    autoAssign?: pulumi.Input<string | enums.BfdEnabled>;
    /**
     * The name used to identify this IP address pool for association with a BGP advertisement.
     */
    name: pulumi.Input<string>;
    /**
     * The indicator to prevent the use of IP addresses ending with .0 and .255 for this pool. Enabling this option will only use IP addresses between .1 and .254 inclusive.
     */
    onlyUseHostIps?: pulumi.Input<string | enums.BfdEnabled>;
}
/**
 * ipAddressPoolArgsProvideDefaults sets the appropriate defaults for IpAddressPoolArgs
 */
export function ipAddressPoolArgsProvideDefaults(val: IpAddressPoolArgs): IpAddressPoolArgs {
    return {
        ...val,
        autoAssign: (val.autoAssign) ?? "True",
        onlyUseHostIps: (val.onlyUseHostIps) ?? "True",
    };
}

export interface KeySetUserArgs {
    /**
     * The user name that will be used for access.
     */
    azureUserName: pulumi.Input<string>;
    /**
     * The free-form description for this user.
     */
    description?: pulumi.Input<string>;
    /**
     * The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in.
     */
    sshPublicKey: pulumi.Input<SshPublicKeyArgs>;
}

export interface KubernetesLabelArgs {
    /**
     * The name of the label or taint.
     */
    key: pulumi.Input<string>;
    /**
     * The value of the label or taint.
     */
    value: pulumi.Input<string>;
}

export interface L2NetworkAttachmentConfigurationArgs {
    /**
     * The resource ID of the network that is being configured for attachment.
     */
    networkId: pulumi.Input<string>;
    /**
     * The indicator of how this network will be utilized by the Kubernetes cluster.
     */
    pluginType?: pulumi.Input<string | enums.KubernetesPluginType>;
}
/**
 * l2networkAttachmentConfigurationArgsProvideDefaults sets the appropriate defaults for L2NetworkAttachmentConfigurationArgs
 */
export function l2networkAttachmentConfigurationArgsProvideDefaults(val: L2NetworkAttachmentConfigurationArgs): L2NetworkAttachmentConfigurationArgs {
    return {
        ...val,
        pluginType: (val.pluginType) ?? "SRIOV",
    };
}

export interface L3NetworkAttachmentConfigurationArgs {
    /**
     * The indication of whether this network will or will not perform IP address management and allocate IP addresses when attached.
     */
    ipamEnabled?: pulumi.Input<string | enums.L3NetworkConfigurationIpamEnabled>;
    /**
     * The resource ID of the network that is being configured for attachment.
     */
    networkId: pulumi.Input<string>;
    /**
     * The indicator of how this network will be utilized by the Kubernetes cluster.
     */
    pluginType?: pulumi.Input<string | enums.KubernetesPluginType>;
}
/**
 * l3networkAttachmentConfigurationArgsProvideDefaults sets the appropriate defaults for L3NetworkAttachmentConfigurationArgs
 */
export function l3networkAttachmentConfigurationArgsProvideDefaults(val: L3NetworkAttachmentConfigurationArgs): L3NetworkAttachmentConfigurationArgs {
    return {
        ...val,
        ipamEnabled: (val.ipamEnabled) ?? "False",
        pluginType: (val.pluginType) ?? "SRIOV",
    };
}

export interface ManagedResourceGroupConfigurationArgs {
    /**
     * The location of the managed resource group. If not specified, the location of the parent resource is chosen.
     */
    location?: pulumi.Input<string>;
    /**
     * The name for the managed resource group. If not specified, the unique name is automatically generated.
     */
    name?: pulumi.Input<string>;
}

export interface NetworkAttachmentArgs {
    /**
     * The resource ID of the associated network attached to the virtual machine.
     * It can be one of cloudServicesNetwork, l3Network, l2Network or trunkedNetwork resources.
     */
    attachedNetworkId: pulumi.Input<string>;
    /**
     * The indicator of whether this is the default gateway.
     * Only one of the attached networks (including the CloudServicesNetwork attachment) for a single machine may be specified as True.
     */
    defaultGateway?: pulumi.Input<string | enums.DefaultGateway>;
    /**
     * The IP allocation mechanism for the virtual machine.
     * Dynamic and Static are only valid for l3Network which may also specify Disabled.
     * Otherwise, Disabled is the only permitted value.
     */
    ipAllocationMethod: pulumi.Input<string | enums.VirtualMachineIPAllocationMethod>;
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
    ipv4Address?: pulumi.Input<string>;
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
    ipv6Address?: pulumi.Input<string>;
    /**
     * The associated network's interface name.
     * If specified, the network attachment name has a maximum length of 15 characters and must be unique to this virtual machine.
     * If the user doesn’t specify this value, the default interface name of the network resource will be used.
     * For a CloudServicesNetwork resource, this name will be ignored.
     */
    networkAttachmentName?: pulumi.Input<string>;
}

export interface NetworkConfigurationArgs {
    /**
     * The configuration of networks being attached to the cluster for use by the workloads that run on this Kubernetes cluster.
     */
    attachedNetworkConfiguration?: pulumi.Input<AttachedNetworkConfigurationArgs>;
    /**
     * The configuration of the BGP service load balancer for this Kubernetes cluster.
     */
    bgpServiceLoadBalancerConfiguration?: pulumi.Input<BgpServiceLoadBalancerConfigurationArgs>;
    /**
     * The resource ID of the associated Cloud Services network.
     */
    cloudServicesNetworkId: pulumi.Input<string>;
    /**
     * The resource ID of the Layer 3 network that is used for creation of the Container Networking Interface network.
     */
    cniNetworkId: pulumi.Input<string>;
    /**
     * The IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in service CIDR.
     */
    dnsServiceIp?: pulumi.Input<string>;
    /**
     * The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
     */
    podCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The CIDR notation IP ranges from which to assign service IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
     */
    serviceCidrs?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * networkConfigurationArgsProvideDefaults sets the appropriate defaults for NetworkConfigurationArgs
 */
export function networkConfigurationArgsProvideDefaults(val: NetworkConfigurationArgs): NetworkConfigurationArgs {
    return {
        ...val,
        bgpServiceLoadBalancerConfiguration: (val.bgpServiceLoadBalancerConfiguration ? pulumi.output(val.bgpServiceLoadBalancerConfiguration).apply(bgpServiceLoadBalancerConfigurationArgsProvideDefaults) : undefined),
    };
}

export interface OsDiskArgs {
    /**
     * The strategy for creating the OS disk.
     */
    createOption?: pulumi.Input<string | enums.OsDiskCreateOption>;
    /**
     * The strategy for deleting the OS disk.
     */
    deleteOption?: pulumi.Input<string | enums.OsDiskDeleteOption>;
    /**
     * The size of the disk in gigabytes. Required if the createOption is Ephemeral.
     */
    diskSizeGB: pulumi.Input<number>;
}
/**
 * osDiskArgsProvideDefaults sets the appropriate defaults for OsDiskArgs
 */
export function osDiskArgsProvideDefaults(val: OsDiskArgs): OsDiskArgs {
    return {
        ...val,
        createOption: (val.createOption) ?? "Ephemeral",
        deleteOption: (val.deleteOption) ?? "Delete",
    };
}

export interface RackDefinitionArgs {
    /**
     * The zone name used for this rack when created. Availability zones are used for workload placement.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The unordered list of bare metal machine configuration.
     */
    bareMetalMachineConfigurationData?: pulumi.Input<pulumi.Input<BareMetalMachineConfigurationDataArgs>[]>;
    /**
     * The resource ID of the network rack that matches this rack definition.
     */
    networkRackId: pulumi.Input<string>;
    /**
     * The free-form description of the rack's location.
     */
    rackLocation?: pulumi.Input<string>;
    /**
     * The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
     */
    rackSerialNumber: pulumi.Input<string>;
    /**
     * The resource ID of the sku for the rack being added.
     */
    rackSkuId: pulumi.Input<string>;
    /**
     * The list of storage appliance configuration data for this rack.
     */
    storageApplianceConfigurationData?: pulumi.Input<pulumi.Input<StorageApplianceConfigurationDataArgs>[]>;
}

export interface ServiceLoadBalancerBgpPeerArgs {
    /**
     * The indicator of BFD enablement for this BgpPeer.
     */
    bfdEnabled?: pulumi.Input<string | enums.BfdEnabled>;
    /**
     * The indicator to enable multi-hop peering support.
     */
    bgpMultiHop?: pulumi.Input<string | enums.BgpMultiHop>;
    /**
     * The requested BGP hold time value. This field uses ISO 8601 duration format, for example P1H.
     */
    holdTime?: pulumi.Input<string>;
    /**
     * The requested BGP keepalive time value. This field uses ISO 8601 duration format, for example P1H.
     */
    keepAliveTime?: pulumi.Input<string>;
    /**
     * The autonomous system number used for the local end of the BGP session.
     */
    myAsn?: pulumi.Input<number>;
    /**
     * The name used to identify this BGP peer for association with a BGP advertisement.
     */
    name: pulumi.Input<string>;
    /**
     * The authentication password for routers enforcing TCP MD5 authenticated sessions.
     */
    password?: pulumi.Input<string>;
    /**
     * The IPv4 or IPv6 address used to connect this BGP session.
     */
    peerAddress: pulumi.Input<string>;
    /**
     * The autonomous system number expected from the remote end of the BGP session.
     */
    peerAsn: pulumi.Input<number>;
    /**
     * The port used to connect this BGP session.
     */
    peerPort?: pulumi.Input<number>;
}
/**
 * serviceLoadBalancerBgpPeerArgsProvideDefaults sets the appropriate defaults for ServiceLoadBalancerBgpPeerArgs
 */
export function serviceLoadBalancerBgpPeerArgsProvideDefaults(val: ServiceLoadBalancerBgpPeerArgs): ServiceLoadBalancerBgpPeerArgs {
    return {
        ...val,
        bfdEnabled: (val.bfdEnabled) ?? "False",
        bgpMultiHop: (val.bgpMultiHop) ?? "False",
        peerPort: (val.peerPort) ?? 179,
    };
}

export interface ServicePrincipalInformationArgs {
    /**
     * The application ID, also known as client ID, of the service principal.
     */
    applicationId: pulumi.Input<string>;
    /**
     * The password of the service principal.
     */
    password: pulumi.Input<string>;
    /**
     * The principal ID, also known as the object ID, of the service principal.
     */
    principalId: pulumi.Input<string>;
    /**
     * The tenant ID, also known as the directory ID, of the tenant in which the service principal is created.
     */
    tenantId: pulumi.Input<string>;
}

export interface SshPublicKeyArgs {
    /**
     * The SSH public key data.
     */
    keyData: pulumi.Input<string>;
}

export interface StorageApplianceConfigurationDataArgs {
    /**
     * The credentials of the administrative interface on this storage appliance.
     */
    adminCredentials: pulumi.Input<AdministrativeCredentialsArgs>;
    /**
     * The slot that storage appliance is in the rack based on the BOM configuration.
     */
    rackSlot: pulumi.Input<number>;
    /**
     * The serial number of the appliance.
     */
    serialNumber: pulumi.Input<string>;
    /**
     * The user-provided name for the storage appliance that will be created from this specification.
     */
    storageApplianceName?: pulumi.Input<string>;
}

export interface StorageProfileArgs {
    /**
     * The disk to use with this virtual machine.
     */
    osDisk: pulumi.Input<OsDiskArgs>;
    /**
     * The resource IDs of volumes that are requested to be attached to the virtual machine.
     */
    volumeAttachments?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * storageProfileArgsProvideDefaults sets the appropriate defaults for StorageProfileArgs
 */
export function storageProfileArgsProvideDefaults(val: StorageProfileArgs): StorageProfileArgs {
    return {
        ...val,
        osDisk: pulumi.output(val.osDisk).apply(osDiskArgsProvideDefaults),
    };
}

export interface TrunkedNetworkAttachmentConfigurationArgs {
    /**
     * The resource ID of the network that is being configured for attachment.
     */
    networkId: pulumi.Input<string>;
    /**
     * The indicator of how this network will be utilized by the Kubernetes cluster.
     */
    pluginType?: pulumi.Input<string | enums.KubernetesPluginType>;
}
/**
 * trunkedNetworkAttachmentConfigurationArgsProvideDefaults sets the appropriate defaults for TrunkedNetworkAttachmentConfigurationArgs
 */
export function trunkedNetworkAttachmentConfigurationArgsProvideDefaults(val: TrunkedNetworkAttachmentConfigurationArgs): TrunkedNetworkAttachmentConfigurationArgs {
    return {
        ...val,
        pluginType: (val.pluginType) ?? "SRIOV",
    };
}

export interface ValidationThresholdArgs {
    /**
     * Selection of how the type evaluation is applied to the cluster calculation.
     */
    grouping: pulumi.Input<string | enums.ValidationThresholdGrouping>;
    /**
     * Selection of how the threshold should be evaluated.
     */
    type: pulumi.Input<string | enums.ValidationThresholdType>;
    /**
     * The numeric threshold value.
     */
    value: pulumi.Input<number>;
}

export interface VirtualMachinePlacementHintArgs {
    /**
     * The specification of whether this hint supports affinity or anti-affinity with the referenced resources.
     */
    hintType: pulumi.Input<string | enums.VirtualMachinePlacementHintType>;
    /**
     * The resource ID of the target object that the placement hints will be checked against, e.g., the bare metal node to host the virtual machine.
     */
    resourceId: pulumi.Input<string>;
    /**
     * The indicator of whether the hint is a hard or soft requirement during scheduling.
     */
    schedulingExecution: pulumi.Input<string | enums.VirtualMachineSchedulingExecution>;
    /**
     * The scope for the virtual machine affinity or anti-affinity placement hint. It should always be "Machine" in the case of node affinity.
     */
    scope: pulumi.Input<string | enums.VirtualMachinePlacementHintPodAffinityScope>;
}


