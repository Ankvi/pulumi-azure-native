export const AdvertiseToFabric = {
    True: "True",
    False: "False",
} as const;

export type AdvertiseToFabric = (typeof AdvertiseToFabric)[keyof typeof AdvertiseToFabric];

export const AgentPoolMode = {
    System: "System",
    User: "User",
    NotApplicable: "NotApplicable",
} as const;

export type AgentPoolMode = (typeof AgentPoolMode)[keyof typeof AgentPoolMode];

export const BareMetalMachineKeySetPrivilegeLevel = {
    Standard: "Standard",
    Superuser: "Superuser",
} as const;

export type BareMetalMachineKeySetPrivilegeLevel = (typeof BareMetalMachineKeySetPrivilegeLevel)[keyof typeof BareMetalMachineKeySetPrivilegeLevel];

export const BfdEnabled = {
    True: "True",
    False: "False",
} as const;

export type BfdEnabled = (typeof BfdEnabled)[keyof typeof BfdEnabled];

export const BgpMultiHop = {
    True: "True",
    False: "False",
} as const;

export type BgpMultiHop = (typeof BgpMultiHop)[keyof typeof BgpMultiHop];

export const BmcKeySetPrivilegeLevel = {
    ReadOnly: "ReadOnly",
    Administrator: "Administrator",
} as const;

export type BmcKeySetPrivilegeLevel = (typeof BmcKeySetPrivilegeLevel)[keyof typeof BmcKeySetPrivilegeLevel];

export const CloudServicesNetworkEnableDefaultEgressEndpoints = {
    True: "True",
    False: "False",
} as const;

export type CloudServicesNetworkEnableDefaultEgressEndpoints = (typeof CloudServicesNetworkEnableDefaultEgressEndpoints)[keyof typeof CloudServicesNetworkEnableDefaultEgressEndpoints];

export const ClusterType = {
    SingleRack: "SingleRack",
    MultiRack: "MultiRack",
} as const;

export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

export const ConsoleEnabled = {
    True: "True",
    False: "False",
} as const;

export type ConsoleEnabled = (typeof ConsoleEnabled)[keyof typeof ConsoleEnabled];

export const DefaultGateway = {
    True: "True",
    False: "False",
} as const;

export type DefaultGateway = (typeof DefaultGateway)[keyof typeof DefaultGateway];

export const FabricPeeringEnabled = {
    True: "True",
    False: "False",
} as const;

export type FabricPeeringEnabled = (typeof FabricPeeringEnabled)[keyof typeof FabricPeeringEnabled];

export const HugepagesSize = {
    HugepagesSize_2M: "2M",
    HugepagesSize_1G: "1G",
} as const;

export type HugepagesSize = (typeof HugepagesSize)[keyof typeof HugepagesSize];

export const HybridAksIpamEnabled = {
    True: "True",
    False: "False",
} as const;

export type HybridAksIpamEnabled = (typeof HybridAksIpamEnabled)[keyof typeof HybridAksIpamEnabled];

export const HybridAksPluginType = {
    DPDK: "DPDK",
    SRIOV: "SRIOV",
    OSDevice: "OSDevice",
} as const;

export type HybridAksPluginType = (typeof HybridAksPluginType)[keyof typeof HybridAksPluginType];

export const IpAllocationType = {
    IPV4: "IPV4",
    IPV6: "IPV6",
    DualStack: "DualStack",
} as const;

export type IpAllocationType = (typeof IpAllocationType)[keyof typeof IpAllocationType];

export const KubernetesPluginType = {
    DPDK: "DPDK",
    SRIOV: "SRIOV",
    OSDevice: "OSDevice",
    MACVLAN: "MACVLAN",
    IPVLAN: "IPVLAN",
} as const;

export type KubernetesPluginType = (typeof KubernetesPluginType)[keyof typeof KubernetesPluginType];

export const L3NetworkConfigurationIpamEnabled = {
    True: "True",
    False: "False",
} as const;

export type L3NetworkConfigurationIpamEnabled = (typeof L3NetworkConfigurationIpamEnabled)[keyof typeof L3NetworkConfigurationIpamEnabled];

export const OsDiskCreateOption = {
    Ephemeral: "Ephemeral",
} as const;

export type OsDiskCreateOption = (typeof OsDiskCreateOption)[keyof typeof OsDiskCreateOption];

export const OsDiskDeleteOption = {
    Delete: "Delete",
} as const;

export type OsDiskDeleteOption = (typeof OsDiskDeleteOption)[keyof typeof OsDiskDeleteOption];

export const ValidationThresholdGrouping = {
    PerCluster: "PerCluster",
    PerRack: "PerRack",
} as const;

export type ValidationThresholdGrouping = (typeof ValidationThresholdGrouping)[keyof typeof ValidationThresholdGrouping];

export const ValidationThresholdType = {
    CountSuccess: "CountSuccess",
    PercentSuccess: "PercentSuccess",
} as const;

export type ValidationThresholdType = (typeof ValidationThresholdType)[keyof typeof ValidationThresholdType];

export const VirtualMachineBootMethod = {
    UEFI: "UEFI",
    BIOS: "BIOS",
} as const;

export type VirtualMachineBootMethod = (typeof VirtualMachineBootMethod)[keyof typeof VirtualMachineBootMethod];

export const VirtualMachineDeviceModelType = {
    T1: "T1",
    T2: "T2",
} as const;

export type VirtualMachineDeviceModelType = (typeof VirtualMachineDeviceModelType)[keyof typeof VirtualMachineDeviceModelType];

export const VirtualMachineIPAllocationMethod = {
    Dynamic: "Dynamic",
    Static: "Static",
    Disabled: "Disabled",
} as const;

export type VirtualMachineIPAllocationMethod = (typeof VirtualMachineIPAllocationMethod)[keyof typeof VirtualMachineIPAllocationMethod];

export const VirtualMachineIsolateEmulatorThread = {
    True: "True",
    False: "False",
} as const;

export type VirtualMachineIsolateEmulatorThread = (typeof VirtualMachineIsolateEmulatorThread)[keyof typeof VirtualMachineIsolateEmulatorThread];

export const VirtualMachinePlacementHintPodAffinityScope = {
    Rack: "Rack",
    Machine: "Machine",
} as const;

export type VirtualMachinePlacementHintPodAffinityScope = (typeof VirtualMachinePlacementHintPodAffinityScope)[keyof typeof VirtualMachinePlacementHintPodAffinityScope];

export const VirtualMachinePlacementHintType = {
    Affinity: "Affinity",
    AntiAffinity: "AntiAffinity",
} as const;

export type VirtualMachinePlacementHintType = (typeof VirtualMachinePlacementHintType)[keyof typeof VirtualMachinePlacementHintType];

export const VirtualMachineSchedulingExecution = {
    Hard: "Hard",
    Soft: "Soft",
} as const;

export type VirtualMachineSchedulingExecution = (typeof VirtualMachineSchedulingExecution)[keyof typeof VirtualMachineSchedulingExecution];

export const VirtualMachineVirtioInterfaceType = {
    Modern: "Modern",
    Transitional: "Transitional",
} as const;

export type VirtualMachineVirtioInterfaceType = (typeof VirtualMachineVirtioInterfaceType)[keyof typeof VirtualMachineVirtioInterfaceType];
