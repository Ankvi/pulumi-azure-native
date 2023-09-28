export const AdvertiseToFabric = {
    True: "True",
    False: "False",
} as const;

/**
 * The indicator of if this advertisement is also made to the network fabric associated with the Network Cloud Cluster. This field is ignored if fabricPeeringEnabled is set to False.
 */
export type AdvertiseToFabric = (typeof AdvertiseToFabric)[keyof typeof AdvertiseToFabric];

export const AgentPoolMode = {
    System: "System",
    User: "User",
    NotApplicable: "NotApplicable",
} as const;

/**
 * The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node.
 */
export type AgentPoolMode = (typeof AgentPoolMode)[keyof typeof AgentPoolMode];

export const BareMetalMachineKeySetPrivilegeLevel = {
    Standard: "Standard",
    Superuser: "Superuser",
} as const;

/**
 * The access level allowed for the users in this key set.
 */
export type BareMetalMachineKeySetPrivilegeLevel = (typeof BareMetalMachineKeySetPrivilegeLevel)[keyof typeof BareMetalMachineKeySetPrivilegeLevel];

export const BfdEnabled = {
    True: "True",
    False: "False",
} as const;

/**
 * The indicator to prevent the use of IP addresses ending with .0 and .255 for this pool. Enabling this option will only use IP addresses between .1 and .254 inclusive.
 */
export type BfdEnabled = (typeof BfdEnabled)[keyof typeof BfdEnabled];

export const BgpMultiHop = {
    True: "True",
    False: "False",
} as const;

/**
 * The indicator to enable multi-hop peering support.
 */
export type BgpMultiHop = (typeof BgpMultiHop)[keyof typeof BgpMultiHop];

export const BmcKeySetPrivilegeLevel = {
    ReadOnly: "ReadOnly",
    Administrator: "Administrator",
} as const;

/**
 * The access level allowed for the users in this key set.
 */
export type BmcKeySetPrivilegeLevel = (typeof BmcKeySetPrivilegeLevel)[keyof typeof BmcKeySetPrivilegeLevel];

export const CloudServicesNetworkEnableDefaultEgressEndpoints = {
    True: "True",
    False: "False",
} as const;

/**
 * The indicator of whether the platform default endpoints are allowed for the egress traffic.
 */
export type CloudServicesNetworkEnableDefaultEgressEndpoints = (typeof CloudServicesNetworkEnableDefaultEgressEndpoints)[keyof typeof CloudServicesNetworkEnableDefaultEgressEndpoints];

export const ClusterType = {
    SingleRack: "SingleRack",
    MultiRack: "MultiRack",
} as const;

/**
 * The type of rack configuration for the cluster.
 */
export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

export const ConsoleEnabled = {
    True: "True",
    False: "False",
} as const;

/**
 * The indicator of whether the console access is enabled.
 */
export type ConsoleEnabled = (typeof ConsoleEnabled)[keyof typeof ConsoleEnabled];

export const DefaultGateway = {
    True: "True",
    False: "False",
} as const;

/**
 * The indicator of whether this is the default gateway.
 * Only one of the attached networks (including the CloudServicesNetwork attachment) for a single machine may be specified as True.
 */
export type DefaultGateway = (typeof DefaultGateway)[keyof typeof DefaultGateway];

export const FabricPeeringEnabled = {
    True: "True",
    False: "False",
} as const;

/**
 * The indicator to specify if the load balancer peers with the network fabric.
 */
export type FabricPeeringEnabled = (typeof FabricPeeringEnabled)[keyof typeof FabricPeeringEnabled];

export const HugepagesSize = {
    HugepagesSize_2M: "2M",
    HugepagesSize_1G: "1G",
} as const;

/**
 * The size of the hugepages to allocate.
 */
export type HugepagesSize = (typeof HugepagesSize)[keyof typeof HugepagesSize];

export const HybridAksIpamEnabled = {
    True: "True",
    False: "False",
} as const;

/**
 * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The indicator of whether or not to disable IPAM allocation on the network attachment definition injected into the Hybrid AKS Cluster.
 */
export type HybridAksIpamEnabled = (typeof HybridAksIpamEnabled)[keyof typeof HybridAksIpamEnabled];

export const HybridAksPluginType = {
    DPDK: "DPDK",
    SRIOV: "SRIOV",
    OSDevice: "OSDevice",
} as const;

/**
 * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
 */
export type HybridAksPluginType = (typeof HybridAksPluginType)[keyof typeof HybridAksPluginType];

export const IpAllocationType = {
    IPV4: "IPV4",
    IPV6: "IPV6",
    DualStack: "DualStack",
} as const;

/**
 * The type of the IP address allocation, defaulted to "DualStack".
 */
export type IpAllocationType = (typeof IpAllocationType)[keyof typeof IpAllocationType];

export const KubernetesPluginType = {
    DPDK: "DPDK",
    SRIOV: "SRIOV",
    OSDevice: "OSDevice",
    MACVLAN: "MACVLAN",
    IPVLAN: "IPVLAN",
} as const;

/**
 * The indicator of how this network will be utilized by the Kubernetes cluster.
 */
export type KubernetesPluginType = (typeof KubernetesPluginType)[keyof typeof KubernetesPluginType];

export const L3NetworkConfigurationIpamEnabled = {
    True: "True",
    False: "False",
} as const;

/**
 * The indication of whether this network will or will not perform IP address management and allocate IP addresses when attached.
 */
export type L3NetworkConfigurationIpamEnabled = (typeof L3NetworkConfigurationIpamEnabled)[keyof typeof L3NetworkConfigurationIpamEnabled];

export const OsDiskCreateOption = {
    Ephemeral: "Ephemeral",
} as const;

/**
 * The strategy for creating the OS disk.
 */
export type OsDiskCreateOption = (typeof OsDiskCreateOption)[keyof typeof OsDiskCreateOption];

export const OsDiskDeleteOption = {
    Delete: "Delete",
} as const;

/**
 * The strategy for deleting the OS disk.
 */
export type OsDiskDeleteOption = (typeof OsDiskDeleteOption)[keyof typeof OsDiskDeleteOption];

export const ValidationThresholdGrouping = {
    PerCluster: "PerCluster",
    PerRack: "PerRack",
} as const;

/**
 * Selection of how the type evaluation is applied to the cluster calculation.
 */
export type ValidationThresholdGrouping = (typeof ValidationThresholdGrouping)[keyof typeof ValidationThresholdGrouping];

export const ValidationThresholdType = {
    CountSuccess: "CountSuccess",
    PercentSuccess: "PercentSuccess",
} as const;

/**
 * Selection of how the threshold should be evaluated.
 */
export type ValidationThresholdType = (typeof ValidationThresholdType)[keyof typeof ValidationThresholdType];

export const VirtualMachineBootMethod = {
    UEFI: "UEFI",
    BIOS: "BIOS",
} as const;

/**
 * Selects the boot method for the virtual machine.
 */
export type VirtualMachineBootMethod = (typeof VirtualMachineBootMethod)[keyof typeof VirtualMachineBootMethod];

export const VirtualMachineDeviceModelType = {
    T1: "T1",
    T2: "T2",
} as const;

/**
 * The type of the device model to use.
 */
export type VirtualMachineDeviceModelType = (typeof VirtualMachineDeviceModelType)[keyof typeof VirtualMachineDeviceModelType];

export const VirtualMachineIPAllocationMethod = {
    Dynamic: "Dynamic",
    Static: "Static",
    Disabled: "Disabled",
} as const;

/**
 * The IP allocation mechanism for the virtual machine.
 * Dynamic and Static are only valid for l3Network which may also specify Disabled.
 * Otherwise, Disabled is the only permitted value.
 */
export type VirtualMachineIPAllocationMethod = (typeof VirtualMachineIPAllocationMethod)[keyof typeof VirtualMachineIPAllocationMethod];

export const VirtualMachineIsolateEmulatorThread = {
    True: "True",
    False: "False",
} as const;

/**
 * Field Deprecated, the value will be ignored if provided. The indicator of whether one of the specified CPU cores is isolated to run the emulator thread for this virtual machine.
 */
export type VirtualMachineIsolateEmulatorThread = (typeof VirtualMachineIsolateEmulatorThread)[keyof typeof VirtualMachineIsolateEmulatorThread];

export const VirtualMachinePlacementHintPodAffinityScope = {
    Rack: "Rack",
    Machine: "Machine",
} as const;

/**
 * The scope for the virtual machine affinity or anti-affinity placement hint. It should always be "Machine" in the case of node affinity.
 */
export type VirtualMachinePlacementHintPodAffinityScope = (typeof VirtualMachinePlacementHintPodAffinityScope)[keyof typeof VirtualMachinePlacementHintPodAffinityScope];

export const VirtualMachinePlacementHintType = {
    Affinity: "Affinity",
    AntiAffinity: "AntiAffinity",
} as const;

/**
 * The specification of whether this hint supports affinity or anti-affinity with the referenced resources.
 */
export type VirtualMachinePlacementHintType = (typeof VirtualMachinePlacementHintType)[keyof typeof VirtualMachinePlacementHintType];

export const VirtualMachineSchedulingExecution = {
    Hard: "Hard",
    Soft: "Soft",
} as const;

/**
 * The indicator of whether the hint is a hard or soft requirement during scheduling.
 */
export type VirtualMachineSchedulingExecution = (typeof VirtualMachineSchedulingExecution)[keyof typeof VirtualMachineSchedulingExecution];

export const VirtualMachineVirtioInterfaceType = {
    Modern: "Modern",
    Transitional: "Transitional",
} as const;

/**
 * Field Deprecated, use virtualizationModel instead. The type of the virtio interface.
 */
export type VirtualMachineVirtioInterfaceType = (typeof VirtualMachineVirtioInterfaceType)[keyof typeof VirtualMachineVirtioInterfaceType];
